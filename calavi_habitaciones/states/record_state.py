import logging
from datetime import datetime, timedelta

import reflex as rx

from calavi_habitaciones.models import (
    EMPTY_ROOM,
    Room,
    create_room,
    delete_room,
    get_room,
    room_exists,
    update_room,
)
from calavi_habitaciones.states.occupancy_state import OccupancyState

_DISPLAY_FORMAT = "%d-%m-%Y"

_FORM_KEYS: list[str] = [
    "room",
    "building",
    "floor",
    "bed_type",
    "status",
    "tenant",
    "tenant_dni",
    "tenant_email",
    "tenant_phone",
    "roommate",
    # "occupants",
    # "capacity",
    "rent",
    "deposit",
    "balance",
    "payment_status",
    # "check_in",
    "lease_start",
    "lease_end",
    # "lease_term",
    "last_payment",
    "next_payment",
    # "emergency_name",
    # "emergency_relation",
    # "emergency_phone",
    "notes",
]


def _blank_form() -> dict[str, str]:
    values = {key: "" for key in _FORM_KEYS}
    # values["building"] = "Aurora Hall"
    values["bed_type"] = "Single"
    values["status"] = "Active"
    values["payment_status"] = "Paid"
    # values["lease_term"] = "12-month lease"
    values["floor"] = "1"
    # values["occupants"] = "1"
    # values["capacity"] = "1"
    values["balance"] = "0"
    # values["emergency_relation"] = "Partner"
    return values


def _blank_errors() -> dict[str, str]:
    return {key: "" for key in _FORM_KEYS}


def _to_input_date(display: str) -> str:
    try:
        return datetime.strptime(display, _DISPLAY_FORMAT).strftime("%d-%m-%Y")
    except Exception:
        logging.exception("Unexpected error")
        return ""


def _to_display_date(value: str) -> str:
    try:
        return datetime.strptime(value, "%d-%m-%Y").strftime(_DISPLAY_FORMAT)
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
    termination_reason_options: list[str] = [
        "Contrato ",
        "Tenant moved out early",
        "Transferred to another room",
        "Non-payment",
        "Policy violation",
        "Other",
    ]
    extension_error: str = ""
    extension_notice: str = ""
    extension_end_date: str = ""
    # extension_options: list[str] = ["30 days", "60 days", "90 days"]

    # building_options: list[str] = [
    #     "Aurora Hall",
    #     "Birch House",
    #     "Cedar Court",
    # ]
    bed_type_options: list[str] = [
        "0.30",
        "1.35",
        "1.50",
    ]
    status_options: list[str] = ["Ocupada", "Finaliza pronto", "Caducado"]
    payment_status_options: list[str] = ["Paid", "Due", "Overdue"]
    # lease_term_options: list[str] = [
    #     "6-month lease",
    #     "12-month lease",
    #     "Month-to-month",
    # ]
    relation_options: list[str] = [
        "Sister",
        "Brother",
        "Mother",
        "Father",
        "Partner",
        "Friend",
    ]

    @rx.var
    def dialog_title(self) -> str:
        return (
            "Edit occupied room" if self.mode == "edit" else "Alta de contrato"
        )

    @rx.var
    def dialog_subtitle(self) -> str:
        if self.mode == "edit":
            return (
                "Update the resident, lease and payment details for this room."
            )
        return (
            "Crear un nuevo registro de contrato de alquiler."
        )

    @rx.var
    def submit_label(self) -> str:
        return "Guardar cambios" if self.mode == "editar" else "Crear registro"

    @rx.var
    def has_delete_target(self) -> bool:
        return self.delete_target_id != ""

    @rx.var
    def has_termination_target(self) -> bool:
        return self.termination_target_id != ""

    @rx.var
    def has_extension_target(self) -> bool:
        return self.extension_target_id != ""

    @rx.event
    async def request_extend(self):
        if not await self._require_admin():
            return
        occupancy = await self.get_state(OccupancyState)
        if occupancy.selected_id == "":
            self.notice = (
                "Select an occupied room first to extend its contract."
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
    async def request_terminate(self):
        if not await self._require_admin():
            return
        occupancy = await self.get_state(OccupancyState)
        if occupancy.selected_id == "":
            self.notice = (
                "Select an occupied room first to terminate its contract."
            )
            return
        self.notice = ""
        self.termination_error = ""
        self.termination_notice = ""
        self.extension_target_id = ""
        self.delete_target_id = ""
        self.termination_target_id = occupancy.selected_id

    @rx.event
    def cancel_terminate(self):
        self.termination_target_id = ""
        self.termination_error = ""

    @rx.event
    async def confirm_terminate(self, form_data: dict[str, str]):
        try:
            if not await self._require_admin():
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
            reason = form_data.get("termination_reason", "").strip()
            note = form_data.get("termination_note", "").strip()

            if not reason:
                self.termination_error = "Choose a termination reason."
                return
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
            updated["record_status"] = "Terminated"
            updated["status"] = "Terminated"
            updated["termination_date"] = end_date.strftime(_DISPLAY_FORMAT)
            updated["termination_reason"] = reason
            if note:
                updated["notes"] = f"{room['notes']}\nTermination note: {note}"
            if not update_room(target, Room(**updated)):
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
                f"Room {room['room']} was terminated on "
                f"{updated['termination_date']} ({reason}). "
                "The record is preserved in history."
            )
            self.notice = ""
            yield rx.toast(
                f"Room {room['room']} moved to terminated history",
                duration=3000,
            )
        except ValueError:
            self.termination_error = "Enter a valid termination date."
        except Exception as e:
            logging.exception(f"Error: {e}")
            self.termination_error = (
                "This contract could not be terminated. Please try again."
            )

    @rx.event
    async def extend_contract(self, form_data: dict[str, str]):
        try:
            if not await self._require_admin():
                return
            occupancy = await self.get_state(OccupancyState)
            target = occupancy.selected_id
            if target == "":
                self.extension_error = (
                    "Select an occupied room before extending a contract."
                )
                return
            room = get_room(target)
            if room["id"] == "":
                self.extension_error = "The selected room could not be found."
                return
            raw_date = form_data.get("extension_end_date", "").strip()
            option = form_data.get("extension_option", "")
            current_end = datetime.strptime(room["lease_end"], _DISPLAY_FORMAT)
            if raw_date:
                new_end = datetime.strptime(raw_date, "%Y-%m-%d")
            elif option in ("30 days", "60 days", "90 days"):
                new_end = current_end + timedelta(days=int(option.split()[0]))
            else:
                self.extension_error = (
                    "Choose an extension period or enter a new end date."
                )
                return
            if new_end <= current_end:
                self.extension_error = (
                    "The new lease end must be after the current end date."
                )
                return
            updated = dict(room)
            updated["lease_end"] = new_end.strftime(_DISPLAY_FORMAT)
            if room["status"] == "Ending soon":
                updated["status"] = "Active"
            if room["payment_status"] == "Overdue" and room["balance"] <= 0:
                updated["payment_status"] = "Paid"
            if not update_room(target, Room(**updated)):
                self.extension_error = "The selected room could not be found."
                return
            occupancy._sync_rooms()
            self.extension_target_id = ""
            self.extension_error = ""
            self.extension_end_date = ""
            self.extension_notice = f"Room {room['room']} was extended through {updated['lease_end']}."
            self.notice = self.extension_notice
            yield rx.toast(self.extension_notice, duration=3000)
        except ValueError:
            self.extension_error = "Enter a valid future lease end date."
        except Exception as e:
            logging.exception(f"Error: {e}")
            self.extension_error = (
                "The contract could not be extended. Please try again."
            )

    async def _require_admin(self) -> bool:
        from calavi_habitaciones.states.auth_state import AuthState

        auth = await self.get_state(AuthState)
        return auth.is_authenticated

    @rx.event
    async def open_create(self):
        if not await self._require_admin():
            return
        self.mode = "create"
        self.editing_id = ""
        self.form_values = _blank_form()
        self.errors = _blank_errors()
        self.form_error = ""
        self.delete_target_id = ""
        self.extension_target_id = ""
        self.notice = ""
        self.form_key += 1
        self.is_open = True

    @rx.event
    async def open_edit(self):
        if not await self._require_admin():
            return
        occupancy = await self.get_state(OccupancyState)
        room = EMPTY_ROOM
        if occupancy.selected_id != "":
            room = get_room(occupancy.selected_id)
        if room["id"] == "":
            self.notice = "Select an occupied room first to edit its record."
            return

        names = list(room["occupant_names"])
        roommate = names[1] if len(names) > 1 else ""
        self.mode = "edit"
        self.editing_id = room["id"]
        self.form_values = {
            "room": room["room"],
            # "building": room["building"],
            "floor": str(room["floor"]),
            "bed_type": room["bed_type"],
            "status": room["status"],
            "tenant": room["tenant"],
            "tenant_dni": room["tenant_dni"],
            "tenant_email": room["tenant_email"],
            "tenant_phone": room["tenant_phone"],
            # "roommate": roommate,
            # "occupants": str(room["occupants"]),
            # "capacity": str(room["capacity"]),
            "rent": f"{room['rent']:.2f}",
            "deposit": f"{room['deposit']:.2f}",
            "balance": f"{room['balance']:.2f}",
            "payment_status": room["payment_status"],
            # "check_in": _to_input_date(room["check_in"]),
            "lease_start": _to_input_date(room["lease_start"]),
            "lease_end": _to_input_date(room["lease_end"]),
            # "lease_term": room["lease_term"],
            "last_payment": _to_input_date(room["last_payment"]),
            "next_payment": _to_input_date(room["next_payment"]),
            # "emergency_name": room["emergency_name"],
            # "emergency_relation": room["emergency_relation"],
            # "emergency_phone": room["emergency_phone"],
            "notes": room["notes"],
        }
        self.errors = _blank_errors()
        self.form_error = ""
        self.delete_target_id = ""
        self.extension_target_id = ""
        self.notice = ""
        self.form_key += 1
        self.is_open = True

    @rx.event
    def close_dialog(self):
        self.is_open = False
        self.form_error = ""
        self.errors = _blank_errors()

    def _validate(self, data: dict[str, str]) -> dict[str, str]:
        errors = _blank_errors()

        if not data["room"]:
            errors["room"] = "Room number is required."
        elif len(data["room"]) > 8:
            errors["room"] = "Use a short room label (max 8 characters)."

        if not data["tenant"]:
            errors["tenant"] = "Primary resident name is required."

        email = data["tenant_email"]
        if not email:
            errors["tenant_email"] = "Resident email is required."
        elif "@" not in email or "." not in email.rsplit("@", 1)[-1]:
            errors["tenant_email"] = "Enter a valid email address."

        if not data["tenant_phone"]:
            errors["tenant_phone"] = "Resident phone is required."

        try:
            floor = int(data["floor"])
            if floor < 1 or floor > 60:
                errors["floor"] = "Floor must be between 1 and 60."
        except ValueError:
            errors["floor"] = "Floor must be a whole number."

        occupants = capacity = 0
        try:
            capacity = int(data["capacity"])
            if capacity < 1:
                errors["capacity"] = "Capacity must be at least 1."
        except ValueError:
            errors["capacity"] = "Capacity must be a whole number."
        try:
            occupants = int(data["occupants"])
            if occupants < 1:
                errors["occupants"] = (
                    "An occupied room needs at least 1 occupant."
                )
        except ValueError:
            errors["occupants"] = "Occupants must be a whole number."

        if (
            not errors["occupants"]
            and not errors["capacity"]
            and occupants > capacity
        ):
            errors["occupants"] = "Occupants cannot exceed room capacity."

        for key, label, minimum in (
            ("rent", "Monthly rent", 1.0),
            ("deposit", "Deposit", 0.0),
            ("balance", "Balance", 0.0),
        ):
            try:
                amount = float(data[key])
                if amount < minimum:
                    errors[key] = f"{label} must be at least {minimum:.0f}."
            except ValueError:
                errors[key] = f"{label} must be a number."

        for key, label in (
            ("check_in", "Check-in date"),
            ("lease_start", "Lease start"),
            ("lease_end", "Lease end"),
            ("last_payment", "Last payment date"),
            ("next_payment", "Next payment date"),
        ):
            if not _to_display_date(data[key]):
                errors[key] = f"{label} is required."

        if (
            not errors["lease_start"]
            and not errors["lease_end"]
            and data["lease_end"] <= data["lease_start"]
        ):
            errors["lease_end"] = "Lease end must be after the lease start."

        if not data["emergency_name"]:
            errors["emergency_name"] = "Emergency contact name is required."
        if not data["emergency_phone"]:
            errors["emergency_phone"] = "Emergency contact phone is required."

        return errors

    @rx.event
    async def submit_record(self, form_data: dict[str, str]):
        try:
            if not await self._require_admin():
                return
            data = {
                key: str(form_data.get(key, "")).strip() for key in _FORM_KEYS
            }
            self.form_values = data

            errors = self._validate(data)
            self.errors = errors
            if any(errors.values()):
                self.form_error = (
                    "Please fix the highlighted fields before saving."
                )
                return
            self.form_error = ""

            occupancy = await self.get_state(OccupancyState)

            duplicate = room_exists(
                data["room"], data["building"], self.editing_id
            )
            if duplicate:
                self.errors = {
                    **errors,
                    "room": "That room already exists in this building.",
                }
                self.form_error = "This room record already exists."
                return

            occupant_names = [data["tenant"]]
            if data["roommate"]:
                occupant_names.append(data["roommate"])

            record_id = self.editing_id
            record = Room(
                id=record_id,
                room=data["room"],
                # building=data["building"],
                floor=int(data["floor"]),
                bed_type=data["bed_type"],
                tenant=data["tenant"],
                tenant_dni=data["tenant_dni"],
                tenant_email=data["tenant_email"],
                tenant_phone=data["tenant_phone"],
                # occupants=int(data["occupants"]),
                # capacity=int(data["capacity"]),
                # occupant_names=occupant_names,
                rent=float(data["rent"]),
                deposit=float(data["deposit"]),
                balance=float(data["balance"]),
                payment_status=data["payment_status"],
                last_payment=_to_display_date(data["last_payment"]),
                next_payment=_to_display_date(data["next_payment"]),
                # check_in=_to_display_date(data["check_in"]),
                lease_start=_to_display_date(data["lease_start"]),
                lease_end=_to_display_date(data["lease_end"]),
                # lease_term=data["lease_term"],
                status=data["status"],
                notes=data["notes"]
                or "No occupancy notes recorded for this room yet.",
                # emergency_name=data["emergency_name"],
                # emergency_relation=data["emergency_relation"],
                # emergency_phone=data["emergency_phone"],
                record_status="Occupied",
                termination_date="",
                termination_reason="",
            )

            if self.mode == "edit":
                if not update_room(record_id, record):
                    self.form_error = "That occupancy record no longer exists."
                    return
                message = f"Room {record['room']} was updated."
            else:
                record_id = create_room(record)
                if record_id == "":
                    self.form_error = (
                        "This record could not be saved. Please try again."
                    )
                    return
                message = f"Room {record['room']} was added."

            occupancy._sync_rooms()
            occupancy.selected_id = record_id

            self.is_open = False
            self.errors = _blank_errors()
            self.notice = message
            yield rx.toast(message, duration=2500)
        except Exception as e:
            logging.exception(f"Error: {e}")
            self.form_error = (
                "This record could not be saved. Please try again."
            )

    @rx.event
    async def request_delete(self):
        if not await self._require_admin():
            return
        occupancy = await self.get_state(OccupancyState)
        if occupancy.selected_id == "":
            self.notice = "Select an occupied room first to remove its record."
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
            if not await self._require_admin():
                return
            occupancy = await self.get_state(OccupancyState)
            target = self.delete_target_id
            room = get_room(target)
            label = room["room"]
            if room["id"] == "" or not delete_room(target):
                self.delete_target_id = ""
                self.notice = "That room record no longer exists."
                return

            occupancy._sync_rooms()
            if occupancy.selected_id == target:
                occupancy.selected_id = ""
            self.extension_target_id = ""
            self.delete_target_id = ""
            if self.editing_id == target:
                self.editing_id = ""
                self.is_open = False
            self.notice = f"Room {label} was removed from occupancy."
            yield rx.toast(self.notice, duration=2500)
        except Exception as e:
            logging.exception(f"Error: {e}")
            self.delete_target_id = ""
            self.notice = "That record could not be removed. Please try again."
