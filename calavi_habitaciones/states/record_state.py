import logging
from datetime import datetime, date
from dateutil.relativedelta import relativedelta
import reflex as rx

from calavi_habitaciones.models import (
    _RECORD_STATUSES,
    _BED_TYPES,
    Lease,
    create_room,
    create_room_record,
    create_tenant_record,
    delete_room,
    get_room,
    get_room_record,
    get_tenant_record,
    list_available_rooms,
    list_available_tenants,
    room_number_exists,
    update_room,
    update_room_record,
    update_tenant_record,
    to_display_date,
    to_input_date,
)
from calavi_habitaciones.states.occupancy_state import OccupancyState



_FORM_KEYS: list[str] = [
    "rent", "deposit", "lease_start", "lease_end", "termination_date", "notes",
]


def _blank_form() -> dict[str, str]:
    values = {key: "" for key in _FORM_KEYS}
    return values


def _blank_errors() -> dict[str, str]:
    return {key: "" for key in _FORM_KEYS}


class RecordState(rx.State):
    is_open: bool = False
    mode: str = "create"
    editing_id: str = ""
    form_key: int = 0
    form_values: dict[str, str] = _blank_form()
    errors: dict[str, str] = _blank_errors()
    form_error: str = ""
    delete_target_id: str = ""
    bed_type_options: list[str] = _BED_TYPES
    selected_room_id: str = ""   # "" => crear habitación nueva
    selected_tenant_id: str = ""  # "" => crear inquilino nuevo
    selected_room: dict[str, str] = {}
    selected_tenant: dict[str, str] = {}

    room_subform_open: bool = False
    room_available: list[dict[str, str]] = []
    room_subform_selected_id: str = ""
    room_subform_room: str = ""
    room_subform_floor: str = "1"
    room_subform_bed_type: str = _BED_TYPES[0]
    room_subform_error: str = ""

    tenant_subform_open: bool = False
    tenant_available: list[dict[str, str]] = []
    tenant_subform_selected_id: str = ""
    tenant_subform_tenant: str = ""
    tenant_subform_dni: str = ""
    tenant_subform_email: str = ""
    tenant_subform_phone: str = ""
    tenant_subform_error: str = ""
    
    lease_end_key: int = 0 #fuerza el remount solo del campo lease end (para fecha calculada)

    @rx.var
    def dialog_title(self) -> str:
        return (
            "Editar contrato" if self.mode == "edit" else "Alta de contrato"
        )

    @rx.var
    def dialog_subtitle(self) -> str:
        if self.mode == "edit":
            return (
                "Cambiar datos de pago, residente, etc."
            )
        return (
            "Crear un nuevo registro de contrato de alquiler."
        )

    @rx.var
    def submit_label(self) -> str:
        return "Guardar" if self.mode == "edit" else "Crear"

    @rx.var
    def has_delete_target(self) -> bool:
        return self.delete_target_id != ""

    @rx.event
    def set_tenant_subform_open(self, value: bool):
        self.tenant_subform_open = value
    
    @rx.event
    def set_room_subform_open(self, value: bool):
        self.room_subform_open = value
    
    @rx.event
    def set_is_open(self, value: bool):
        self.is_open = value
    
    @rx.event
    def set_lease_start(self, value: str):
        self.form_values["lease_start"] = value
        if value:
            start = datetime.strptime(value, "%Y-%m-%d")
            end = start + relativedelta(days=364)
            self.form_values["lease_end"] = end.strftime("%Y-%m-%d")
            self.lease_end_key += 1
    
    @rx.event
    def open_room_subform(self):
        self.room_available = list_available_rooms(exclude_room_id=self.selected_room_id)
        self.room_subform_selected_id = self.selected_room_id
        self.room_subform_room = self.selected_room.get("room", "")
        self.room_subform_floor = self.selected_room.get("floor", "0")
        self.room_subform_bed_type = self.selected_room.get("bed_type", "Single")
        self.room_subform_error = ""
        self.room_subform_open = True

    @rx.event
    def set_room_subform_selected_id(self, value: str):
        self.room_subform_selected_id = value
        self.room_subform_error = ""
        if value:
            room = get_room_record(value)
            if room:
                self.room_subform_room = room["room"]
                self.room_subform_floor = room["floor"]
                self.room_subform_bed_type = room["bed_type"]
        else:
            self.room_subform_room = ""
            self.room_subform_floor = "1"
            self.room_subform_bed_type = _BED_TYPES[0]

    @rx.event
    def set_room_subform_room(self, value: str):
        self.room_subform_room = value

    @rx.event
    def set_room_subform_floor(self, value: str):
        self.room_subform_floor = value

    @rx.event
    def set_room_subform_bed_type(self, value: str):
        self.room_subform_bed_type = value

    @rx.event
    def confirm_room_subform(self):
        room_number = self.room_subform_room.strip()
        if not room_number:
            self.room_subform_error = "Se requiere un número de habitación."
            return
        if len(room_number) > 8:
            self.room_subform_error = "Use un nombre corto (max 8 characters)."
            return
        try:
            floor = int(self.room_subform_floor)
        except ValueError:
            self.room_subform_error = "El piso debe ser un número entero."
            return
        if self.room_subform_selected_id:
            # Habitación existente: guarda los cambios sobre ese registro y lo usa.
            if room_number_exists(room_number, exclude_id=self.room_subform_selected_id):
                self.room_subform_error = "Esta habitación ya existe."
                return
            if not update_room_record(
                self.room_subform_selected_id, room_number, floor, self.room_subform_bed_type
            ):
                self.room_subform_error = "No se han podido guardar los cambios."
                return
            self.selected_room_id = self.room_subform_selected_id
            self.selected_room = {
                "id": self.room_subform_selected_id, "room": room_number,
                "floor": str(floor), "bed_type": self.room_subform_bed_type,
            }
        else:
            # Habitación nueva: se da de alta y se usa.
            if room_number_exists(room_number, exclude_id=self.selected_room_id):
                self.room_subform_error = "Esta habitación ya existe."
                return
            new_id = create_room_record(
                room=room_number, floor=floor,
                bed_type=self.room_subform_bed_type,
            )
            if not new_id:
                self.room_subform_error = "LA habitación no se ha dado de alta. Inténtelo de nuevo."
                return
            self.selected_room_id = new_id
            self.selected_room = {
                "id": new_id, "room": room_number, "floor": str(floor),
                "bed_type": self.room_subform_bed_type,
            }
        self.room_subform_open = False
        self.room_subform_error = ""
    
    @rx.event
    def open_tenant_subform(self):
        self.tenant_available = list_available_tenants(exclude_tenant_id=self.selected_tenant_id)
        self.tenant_subform_selected_id = self.selected_tenant_id
        self.tenant_subform_tenant = self.selected_tenant.get("tenant", "")
        self.tenant_subform_dni = self.selected_tenant.get("tenant_dni", "")
        self.tenant_subform_email = self.selected_tenant.get("tenant_email", "")
        self.tenant_subform_phone = self.selected_tenant.get("tenant_phone", "")
        self.tenant_subform_error = ""
        self.tenant_subform_open = True

    @rx.event
    def set_tenant_subform_selected_id(self, value: str):
        self.tenant_subform_selected_id = value
        self.tenant_subform_error = ""
        if value:
            tenant = get_tenant_record(value)
            if tenant:
                self.tenant_subform_tenant = tenant["tenant"]
                self.tenant_subform_dni = tenant["tenant_dni"]
                self.tenant_subform_email = tenant["tenant_email"]
                self.tenant_subform_phone = tenant["tenant_phone"]
        else:
            self.tenant_subform_tenant = ""
            self.tenant_subform_dni = ""
            self.tenant_subform_email = ""
            self.tenant_subform_phone = ""

    @rx.event
    def set_tenant_subform_tenant(self, value: str):
        self.tenant_subform_tenant = value

    @rx.event
    def set_tenant_subform_dni(self, value: str):
        self.tenant_subform_dni = value

    @rx.event
    def set_tenant_subform_email(self, value: str):
        self.tenant_subform_email = value

    @rx.event
    def set_tenant_subform_phone(self, value: str):
        self.tenant_subform_phone = value

    @rx.event
    def confirm_tenant_subform(self):
        name = self.tenant_subform_tenant.strip()
        email = self.tenant_subform_email.strip()
        phone = self.tenant_subform_phone.strip()
        if not name:
            self.tenant_subform_error = "El nombre del inquilino es obligatorio."
            return
        if not email or "@" not in email or "." not in email.rsplit("@", 1)[-1]:
            self.tenant_subform_error = "Introduce un email válido."
            return
        if not phone:
            self.tenant_subform_error = "El teléfono del inquilino es obligatorio."
            return
        if self.tenant_subform_selected_id:
            # Inquilino existente: guarda los cambios sobre ese registro y lo usa.
            if not update_tenant_record(
                self.tenant_subform_selected_id, name, self.tenant_subform_dni.strip(), email, phone
            ):
                self.tenant_subform_error = "No se han podido guardar los cambios."
                return
            self.selected_tenant_id = self.tenant_subform_selected_id
            self.selected_tenant = {
                "id": self.tenant_subform_selected_id, "tenant": name,
                "tenant_dni": self.tenant_subform_dni.strip(), "tenant_email": email,
                "tenant_phone": phone,
            }
        else:
            # Inquilino nuevo: se da de alta y se usa.
            new_id = create_tenant_record(
                tenant=name, tenant_dni=self.tenant_subform_dni.strip(),
                tenant_email=email, tenant_phone=phone,
            )
            if not new_id:
                self.tenant_subform_error = "El inquilino no se ha dado de alta. Inténtelo de nuevo."
                return
            self.selected_tenant_id = new_id
            self.selected_tenant = {
                "id": new_id, "tenant": name, "tenant_dni": self.tenant_subform_dni.strip(),
                "tenant_email": email, "tenant_phone": phone,
            }
        self.tenant_subform_open = False
        self.tenant_subform_error = ""

    @rx.event
    async def open_create(self):
        from calavi_habitaciones.states.auth_state import AuthState
        auth = await self.get_state(AuthState)
        if not auth.is_authenticated:
            return
        self.mode = "create"
        self.editing_id = ""
        self.form_values = _blank_form()
        self.set_lease_start(date.today().strftime("%Y-%m-%d")) 
        self.errors = _blank_errors()
        self.form_error = ""
        self.delete_target_id = ""
        self.selected_room_id = ""
        self.selected_room = {}
        self.selected_tenant_id = ""
        self.selected_tenant = {}
        self.form_key += 1
        self.is_open = True

    @rx.event
    async def open_edit(self, room_id: str):
        from calavi_habitaciones.states.auth_state import AuthState
        auth = await self.get_state(AuthState)
        if not auth.is_authenticated:
            return
        room = get_room(room_id)
        if room["id"] == "":
            yield rx.toast("No encuentro este contrato.", duration=2500)
            return
        self.mode = "edit"
        self.editing_id = room_id
        self.form_values = {
            "rent": str(room["rent"]),
            "deposit": str(room["deposit"]),
            "lease_start": to_input_date(room["lease_start"]),
            "lease_end": to_input_date(room["lease_end"]),
            "termination_date": to_input_date(room["termination_date"]),
            "notes": room["notes"],
        }
        self.errors = _blank_errors()
        self.form_error = ""
        self.delete_target_id = ""
        self.selected_room_id = room["room_id"]
        self.selected_room = get_room_record(room["room_id"]) or {
            "id": room["room_id"], "room": room["room"],
            "floor": str(room["floor"]), "bed_type": room["bed_type"],
        }
        self.selected_tenant_id = room["tenant_id"]
        self.selected_tenant = get_tenant_record(room["tenant_id"]) or {
            "id": room["tenant_id"], "tenant": room["tenant"],
            "tenant_dni": room["tenant_dni"], "tenant_email": room["tenant_email"],
            "tenant_phone": room["tenant_phone"],
        }
        self.form_key += 1
        self.lease_end_key += 1
        self.is_open = True

    @rx.event
    def close_dialog(self):
        self.is_open = False
        self.form_error = ""
        self.errors = _blank_errors()

    def _validate(self, data: dict[str, str]) -> dict[str, str]:
        errors = _blank_errors()
        for key, label, minimum in (
            ("rent", "Monthly rent", 1.0),
            ("deposit", "Deposit", 0.0),
        ):
            try:
                amount = float(data[key])
                if amount < minimum:
                    errors[key] = f"{label} no puede ser menor de {minimum:.0f}."
            except ValueError:
                errors[key] = f"{label} debe ser un número."
        for key, label in (
            ("lease_start", "Lease start"),
            ("lease_end", "Lease end"),
        ):
            if not to_display_date(data[key]):
                errors[key] = f"{label} is required."
        if (
            not errors["lease_start"]
            and not errors["lease_end"]
            and data["lease_end"] <= data["lease_start"]
        ):
            errors["lease_end"] = "La fecha de finalización del contrato no puede ser anterior a la fecha de inicio."
        if (
            data["termination_date"]
            and not errors["lease_start"]
            and data["termination_date"] < data["lease_start"]
        ):
            errors["termination_date"] = "La fecha de salida no puede ser anterior a la fecha de inicio."
        return errors

    @rx.event
    async def submit_record(self, form_data: dict):
        try:
            from calavi_habitaciones.states.auth_state import AuthState
            auth = await self.get_state(AuthState)
            if not auth.is_authenticated:
                return
            data = {key: str(form_data.get(key, "")).strip() for key in _FORM_KEYS}
            self.form_values = data

            if not self.selected_room_id or not self.selected_tenant_id:
                self.form_error = "Selecciona una habitación y un inquilino."
                return

            errors = self._validate(data)
            self.errors = errors
            if any(errors.values()):
                self.form_error = "Por favor rellene los campos resaltados antes de validar."
                return
            self.form_error = ""

            occupancy = await self.get_state(OccupancyState)

            record_id = self.editing_id
            record = Lease(
                id=record_id,
                room_id=self.selected_room_id,
                tenant_id=self.selected_tenant_id,
                room=self.selected_room.get("room", ""),
                floor=int(self.selected_room.get("floor", "0") or 0),
                bed_type=self.selected_room.get("bed_type", ""),
                tenant=self.selected_tenant.get("tenant", ""),
                tenant_dni=self.selected_tenant.get("tenant_dni", ""),
                tenant_email=self.selected_tenant.get("tenant_email", ""),
                tenant_phone=self.selected_tenant.get("tenant_phone", ""),
                rent=float(data["rent"]),
                deposit=float(data["deposit"]),
                lease_start=to_display_date(data["lease_start"]),
                lease_end=to_display_date(data["lease_end"]),
                notes=data["notes"],
                record_status=_RECORD_STATUSES[3] if data["termination_date"] else _RECORD_STATUSES[0],
                termination_date=to_display_date(data["termination_date"]),
            )

            if self.mode == "edit":
                if not update_room(record_id, record):
                    self.form_error = "Este registro no existe."
                    return
                message = f"El contrato de la habitación {record['room']} se ha guardado."
            else:
                record_id = create_room(record)
                if record_id == "":
                    self.form_error = "El registro no se ha guardado. Por favor inténtalo de nuevo."
                    return
                message = f"El contrato de la habitación {record['room']} ha sido dado de alta."

            occupancy._sync_rooms()
            occupancy.selected_id = record_id

            self.is_open = False
            self.errors = _blank_errors()
            yield rx.toast(message, duration=2500)
        except Exception as e:
            logging.exception(f"Error: {e}")
            self.form_error = "El registro no se ha guardado. Por favor inténtalo de nuevo."

    @rx.event
    async def request_delete(self):
        from calavi_habitaciones.states.auth_state import AuthState
        auth = await self.get_state(AuthState)
        if not auth.is_authenticated:
            return
        occupancy = await self.get_state(OccupancyState)
        if occupancy.selected_id == "":
            yield rx.toast("Selecciona un registro antes de borrarlo.", duration=2500)
            return
        self.delete_target_id = occupancy.selected_id

    @rx.event
    def cancel_delete(self):
        self.delete_target_id = ""

    @rx.event
    async def confirm_delete(self):
        try:
            from calavi_habitaciones.states.auth_state import AuthState
            auth = await self.get_state(AuthState)
            if not auth.is_authenticated:
                return
            occupancy = await self.get_state(OccupancyState)
            target = self.delete_target_id
            room = get_room(target)
            label = room["room"]
            if room["id"] == "" or not delete_room(target):
                self.delete_target_id = ""
                yield rx.toast("Este registro no existe.", duration=2500)
                return

            occupancy._sync_rooms()
            if occupancy.selected_id == target:
                occupancy.selected_id = ""
            self.delete_target_id = ""
            if self.editing_id == target:
                self.editing_id = ""
                self.is_open = False
            message = f"El contrato de la habitación {label} se ha eliminado del registro."
            yield rx.toast(message, duration=2500)
        except Exception as e:
            logging.exception(f"Error: {e}")
            self.delete_target_id = ""
            yield rx.toast("El registro no se ha borrado. Por favor inténtalo de nuevo.", duration=2500)
            