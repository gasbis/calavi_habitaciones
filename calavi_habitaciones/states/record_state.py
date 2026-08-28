import logging
from datetime import datetime, date
from dateutil.relativedelta import relativedelta
import reflex as rx

from calavi_habitaciones.models import (
    _DISPLAY_FORMAT,
    _RECORD_STATUSES,
    EMPTY_ROOM,
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
    to_display_date
)
from calavi_habitaciones.states.occupancy_state import OccupancyState



_FORM_KEYS: list[str] = [
    "rent", "deposit", "lease_start", "lease_end", "notes",
]


def _blank_form() -> dict[str, str]:
    values = {key: "" for key in _FORM_KEYS}
    return values


def _blank_errors() -> dict[str, str]:
    return {key: "" for key in _FORM_KEYS}


def _to_input_date(display: str) -> str:
    try:
        return datetime.strptime(display, _DISPLAY_FORMAT).strftime("%Y-%m-%d")
    except Exception:
        logging.exception("Unexpected error")
        return ""


class RecordState(rx.State):
    is_open: bool = False
    mode: str = "create"
    editing_id: str = ""
    form_key: int = 0
    form_values: dict[str, str] = _blank_form()
    errors: dict[str, str] = _blank_errors()
    form_error: str = ""
    delete_target_id: str = ""
    notice: str = ""
    termination_target_id: str = ""
    termination_error: str = ""
    termination_notice: str = ""
    extension_target_id: str = ""
    extension_error: str = ""
    notes_target_id: str = ""
    notes_error: str = ""
    notes_notice: str = ""
    change_room_target_id: str = ""
    extension_error: str = ""
    extension_notice: str = ""
    extension_end_date: str = ""
    change_room_error: str = ""
    change_room_notice: str = ""
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
    termination_date_default: str = ""

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
        return "Guardar cambios" if self.mode == "edit" else "Crear registro"

    @rx.var
    def has_delete_target(self) -> bool:
        return self.delete_target_id != ""

    @rx.var
    def has_termination_target(self) -> bool:
        return self.termination_target_id != ""

    @rx.var
    def has_extension_target(self) -> bool:
        return self.extension_target_id != ""
    
    @rx.var
    def has_notes_target(self) -> bool:
        return self.notes_target_id != ""
    
    @rx.var
    def has_change_room_target(self) -> bool:
        return self.change_room_target_id != ""
    
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
    def close_room_subform(self):
        self.room_subform_open = False
        self.room_subform_error = ""

    @rx.event
    def set_room_subform_selected_id(self, value: str):
        self.room_subform_selected_id = value

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
        if self.room_subform_selected_id:
            room = get_room_record(self.room_subform_selected_id)
            if not room:
                self.room_subform_error = "Esta habitación  no se encuentra."
                return
            self.selected_room_id = room["id"]
            self.selected_room = room
        else:
            room_number = self.room_subform_room.strip()
            if not room_number:
                self.room_subform_error = "Se requiere un número de habitación."
                return
            if len(room_number) > 8:
                self.room_subform_error = "Use un nombre corto (max 8 characters)."
                return
            if room_number_exists(room_number, exclude_id=self.selected_room_id):
                self.room_subform_error = "Esta habitación ya existe."
                return
            try:
                floor = int(self.room_subform_floor)
            except ValueError:
                self.room_subform_error = "Floor must be a whole number."
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
    def close_tenant_subform(self):
        self.tenant_subform_open = False
        self.tenant_subform_error = ""

    @rx.event
    def set_tenant_subform_selected_id(self, value: str):
        self.tenant_subform_selected_id = value

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
        if self.tenant_subform_selected_id:
            tenant = get_tenant_record(self.tenant_subform_selected_id)
            if not tenant:
                self.tenant_subform_error = "That tenant could not be found."
                return
            self.selected_tenant_id = tenant["id"]
            self.selected_tenant = tenant
        else:
            name = self.tenant_subform_tenant.strip()
            email = self.tenant_subform_email.strip()
            phone = self.tenant_subform_phone.strip()
            if not name:
                self.tenant_subform_error = "Tenant name is required."
                return
            if not email or "@" not in email or "." not in email.rsplit("@", 1)[-1]:
                self.tenant_subform_error = "Enter a valid email address."
                return
            if not phone:
                self.tenant_subform_error = "Tenant phone is required."
                return
            new_id = create_tenant_record(
                tenant=name, tenant_dni=self.tenant_subform_dni.strip(),
                tenant_email=email, tenant_phone=phone,
            )
            if not new_id:
                self.tenant_subform_error = "The tenant could not be created. Please try again."
                return
            self.selected_tenant_id = new_id
            self.selected_tenant = {
                "id": new_id, "tenant": name, "tenant_dni": self.tenant_subform_dni.strip(),
                "tenant_email": email, "tenant_phone": phone,
            }
        self.tenant_subform_open = False
        self.tenant_subform_error = ""

    @rx.event
    async def request_extend(self):
        from calavi_habitaciones.states.auth_state import AuthState
        auth = await self.get_state(AuthState)
        if not auth.is_authenticated:
            return
        occupancy = await self.get_state(OccupancyState)
        if occupancy.selected_id == "":
            self.notice = (
                "Seleccione un contrato en vigor para poder extenderlo."
            )
            return
        self.notice = ""
        self.extension_error = ""
        self.extension_notice = ""
        self.extension_target_id = occupancy.selected_id

    @rx.event
    def cancel_extend(self):
        self.extension_target_id = ""
        self.extension_error = ""

    @rx.event
    async def request_notes(self):
        from calavi_habitaciones.states.auth_state import AuthState
        auth = await self.get_state(AuthState)
        if not auth.is_authenticated:
            return
        occupancy = await self.get_state(OccupancyState)
        if occupancy.selected_id == "":
            self.notice = (
                "Seleccione una habitación ocupada antes de editar las observaciones."
            )
            return
        self.notice = ""        
        self.notes_target_id = occupancy.selected_id

    @rx.event
    def cancel_notes(self):
        self.notes_target_id = ""
        self.termination_error = ""

    @rx.event
    async def confirm_notes(self, form_data: dict):
        try:
            from calavi_habitaciones.states.auth_state import AuthState
            auth = await self.get_state(AuthState)
            if not auth.is_authenticated:
                return
            occupancy = await self.get_state(OccupancyState)
            target = occupancy.selected_id
            if target == "":
                self.notes_error = (
                    "Selecciona un contrato en vigor para editar las observaciones."
                )
                return
            room = get_room(target)
            if room["id"] == "":
                self.notes_error = "No encuentro esta habitación."
                return
            new_note = form_data.get("edit_notes", "")
            updated = dict(room)
            updated["notes"] = new_note
            if not update_room(target, Lease(**updated)):
                self.notes_error = "No encuentro este contrato."
                return
            occupancy._sync_rooms()
            self.notes_target_id = ""
            self.notes_error = ""
            self.notes_notice = f"Las observaciones de la habitación {room['room']} se han editado."
            yield rx.toast(self.notes_notice, duration=3000)
        except ValueError:
            self.notes_error = "Ingrese una fecha válida."
        except Exception as e:
            logging.exception(f"Error: {e}")
            self.notes_error = (
                "No se han podido guardar las observaciones. Por favor, inténtelo de nuevo."
            )

    @rx.event
    async def request_terminate(self):
        from calavi_habitaciones.states.auth_state import AuthState
        auth = await self.get_state(AuthState)
        if not auth.is_authenticated:
            return
        occupancy = await self.get_state(OccupancyState)
        if occupancy.selected_id == "":
            self.notice = (
                "Seleccione una habitación ocupada antes de finalizar un contrato."
            )
            return
        self.notice = ""
        self.termination_error = ""
        self.termination_notice = ""
        self.extension_target_id = ""
        self.delete_target_id = ""
        self.termination_target_id = occupancy.selected_id
        self.termination_date_default = date.today().strftime("%Y-%m-%d")

    @rx.event
    def cancel_terminate(self):
        self.termination_target_id = ""
        self.termination_error = ""

    @rx.event
    async def confirm_terminate(self, form_data: dict):
        try:
            from calavi_habitaciones.states.auth_state import AuthState
            auth = await self.get_state(AuthState)
            if not auth.is_authenticated:
                return
            occupancy = await self.get_state(OccupancyState)
            target = self.termination_target_id
            room = get_room(target)
            if room["id"] == "":
                self.termination_target_id = ""
                self.termination_error = (
                    "That occupancy record could not be found."
                )
                return

            raw_date = form_data.get("termination_date", "").strip()
            note = form_data.get("termination_note", "")

            if not raw_date:
                self.termination_error = "Enter the termination date."
                return

            end_date = datetime.strptime(raw_date, "%Y-%m-%d")
            lease_start = datetime.strptime(
                room["lease_start"], _DISPLAY_FORMAT
            )
            if end_date < lease_start:
                self.termination_error = (
                    "The termination date cannot be before the lease start."
                )
                return

            updated = dict(room)
            updated["record_status"] = _RECORD_STATUSES[3]
            updated["termination_date"] = end_date.strftime(_DISPLAY_FORMAT)
            if note:
                updated["notes"] = f"{room['notes']}\nTermination note: {note}"
            if not update_room(target, Lease(**updated)):
                self.termination_error = (
                    "That occupancy record could not be found."
                )
                return
            occupancy._sync_rooms()
            if occupancy.selected_id == target:
                occupancy.selected_id = ""
            self.extension_target_id = ""
            if self.editing_id == target:
                self.editing_id = ""
                self.is_open = False
            self.termination_target_id = ""
            self.termination_error = ""
            self.extension_notice = ""
            self.termination_notice = (
                f"Ha finalizado el contrato de la habitación {room['room']}. "
                "El registro queda guardado en histórico."
            )
            self.notice = ""
            yield rx.toast(
                f"EL regisgtro de la habitación {room['room']} pasa al histórico.",
                duration=3000,
            )
        except ValueError:
            self.termination_error = "Ingrese una fecha válida de finalización."
        except Exception as e:
            logging.exception(f"Error: {e}")
            self.termination_error = (
                "No se ha rescindido el contrato. Por favor inténtelo de nuevo"
            )

    @rx.event
    async def extend_contract(self, form_data: dict):
        try:
            from calavi_habitaciones.states.auth_state import AuthState
            auth = await self.get_state(AuthState)
            if not auth.is_authenticated:
                return
            occupancy = await self.get_state(OccupancyState)
            target = occupancy.selected_id
            if target == "":
                self.extension_error = (
                    "Selecciona un contrato en vigor para extender el alquiler."
                )
                return
            room = get_room(target)
            if room["id"] == "":
                self.extension_error = "No encuentro esta habitación."
                return
            raw_date = form_data.get("extension_end_date", "").strip()
            current_end = datetime.strptime(room["lease_end"], _DISPLAY_FORMAT)
            if raw_date:
                new_end = datetime.strptime(raw_date, "%Y-%m-%d")
            else:
                self.extension_error = (
                    "Introduzca la nueva fecha de finalización."
                )
                return
            if new_end <= current_end:
                self.extension_error = (
                    "La fecha debe ser posterior a la fecha de finalización actual."
                )
                return
            updated = dict(room)
            updated["lease_end"] = new_end.strftime(_DISPLAY_FORMAT)
            if room["record_status"] == _RECORD_STATUSES[1]:
                updated["record_status"] = _RECORD_STATUSES[0]
            elif room["record_status"] == _RECORD_STATUSES[2]:
                updated["record_status"] = _RECORD_STATUSES[0]
            if not update_room(target, Lease(**updated)):
                self.extension_error = "No encuentro la habitación seleccionada."
                return
            occupancy._sync_rooms()
            self.extension_target_id = ""
            self.extension_error = ""
            self.extension_end_date = ""
            self.extension_notice = f"El contrato de la habitación {room['room']} se ha prorrogado hasta {updated['lease_end']}."
            self.notice = self.extension_notice
            yield rx.toast(self.extension_notice, duration=3000)
        except ValueError:
            self.extension_error = "Enter a valid future lease end date."
        except Exception as e:
            logging.exception(f"Error: {e}")
            self.extension_error = (
                "El contrato no puede ha podido ser prorrogado. Por favor, inténtelo de nuevo."
            )
            
    @rx.event
    async def request_change_room(self):
        from calavi_habitaciones.states.auth_state import AuthState
        auth = await self.get_state(AuthState)
        if not auth.is_authenticated:
            return
        occupancy = await self.get_state(OccupancyState)
        if occupancy.selected_id == "":
            self.notice = (
                "Seleccione un contrato en vigor para poder cambiar la habitación."
            )
            return
        room = get_room(occupancy.selected_id)
        self.room_available = list_available_rooms(exclude_room_id=room["room_id"])
        self.room_subform_selected_id = ""
        self.notice = ""
        self.change_room_error = ""
        self.change_room_notice = ""
        self.change_room_target_id = occupancy.selected_id

    @rx.event
    def cancel_change_room(self):
        self.change_room_target_id = ""
        self.change_room_error = ""
        
    @rx.event
    async def change_room(self, form_data: dict):
        try:
            from calavi_habitaciones.states.auth_state import AuthState
            auth = await self.get_state(AuthState)
            if not auth.is_authenticated:
                return
            occupancy = await self.get_state(OccupancyState)
            target = occupancy.selected_id
            if target == "":
                self.change_room_error = "Selecciona un contrato en vigor para hacer el cambio."
                return
            room = get_room(target)
            if room["id"] == "":
                self.change_room_error = "No encuentro este contrato."
                return

            new_room_id = self.room_subform_selected_id
            if not new_room_id:
                self.change_room_error = "Selecciona la nueva habitación."
                return
            if new_room_id == room["room_id"]:
                self.change_room_error = "Selecciona una habitación distinta a la actual."
                return

            new_room = get_room_record(new_room_id)
            if not new_room:
                self.change_room_error = "La habitación seleccionada ya no existe."
                return

            updated = dict(room)
            updated["room_id"] = new_room_id
            if not update_room(target, Lease(**updated)):
                self.change_room_error = "No encuentro el contrato seleccionado."
                return

            occupancy._sync_rooms()
            self.change_room_target_id = ""
            self.change_room_error = ""
            self.change_room_notice = f"El contrato pasó de la habitación {room['room']} a la {new_room['room']}."
            self.notice = self.change_room_notice
            yield rx.toast(self.change_room_notice, duration=3000)
        except Exception as e:
            logging.exception(f"Error: {e}")
            self.change_room_error = "No se ha podido cambiar la habitación. Inténtelo de nuevo."

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
        self.extension_target_id = ""
        self.notice = ""
        self.selected_room_id = ""
        self.selected_room = {}
        self.selected_tenant_id = ""
        self.selected_tenant = {}
        self.form_key += 1
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
                record_status=_RECORD_STATUSES[0],
                termination_date="",
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
            self.notice = message
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
            self.notice = "Selecciona un registro antes de borrarlo."
            return
        self.notice = ""
        self.termination_target_id = ""
        self.extension_target_id = ""
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
                self.notice = "Este registro no existe."
                return

            occupancy._sync_rooms()
            if occupancy.selected_id == target:
                occupancy.selected_id = ""
            self.extension_target_id = ""
            self.delete_target_id = ""
            if self.editing_id == target:
                self.editing_id = ""
                self.is_open = False
            self.notice = f"El contrato de la habitación {label} se ha eliminado del registro."
            yield rx.toast(self.notice, duration=2500)
        except Exception as e:
            logging.exception(f"Error: {e}")
            self.delete_target_id = ""
            self.notice = "El registro no se ha borrado. Por favor inténtalo de nuevo."
