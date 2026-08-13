import hashlib
import hmac
import logging
#import random
import secrets
from typing import TypedDict

import reflex as rx
import sqlmodel
#from faker import Faker


class Lease(TypedDict):
    id: str
    room_id: str
    tenant_id: str
    room: str
    floor: int
    bed_type: str
    tenant: str
    tenant_dni: str
    tenant_email: str
    tenant_phone: str
    rent: float
    deposit: float
    balance: float
    payment_status: str
    last_payment: str
    next_payment: str
    lease_start: str
    lease_end: str
    #status: str
    notes: str
    record_status: str
    termination_date: str
    #termination_reason: str

_BED_TYPES: list[str] = ["0.85", "1.35", "1.50"]

#_STATUSES: list[str] = ["Ocupada", "Libre"]

_RECORD_STATUSES: list[str] = ["Activo", "Caduca pronto", "Caducado", "Rescindido"]

EMPTY_ROOM: Lease = Lease(
    id="",
    room_id="",
    tenant_id="",
    room="",
    floor=0,
    bed_type="",
    tenant="",
    tenant_dni="",
    tenant_email="",
    tenant_phone="",
    rent=0.0,
    deposit=0.0,
    balance=0.0,
    payment_status="",
    last_payment="",
    next_payment="",
    lease_start="",
    lease_end="",
    #status="",
    notes="",
    record_status=_RECORD_STATUSES[0],
    termination_date="",
    #termination_reason="",
)



# _NOTES: list[str] = [
#     "Quiet tenant, prefers maintenance visits after 5pm. Bike stored in basement rack 4.",
#     "Requested extra storage locker. Renewed once, strong payment history.",
#     "Works night shifts — do not schedule inspections before noon.",
#     "Shares room with a roommate on the same lease. Pet-free unit.",
#     "Lease ends soon; renewal paperwork sent and awaiting signature.",
#     "Reported a slow-draining sink last month, resolved by facilities.",
# ]


class AdminAccount(rx.Model, table=True):
    """Database-backed administrator account with a one-way password hash."""

    id: int | None = sqlmodel.Field(default=None, primary_key=True)
    email: str = sqlmodel.Field(index=True, unique=True)
    name: str = ""
    role: str = ""
    active: bool = True
    password_hash: str = ""

class TenantRecord(rx.Model, table=True):
    """Database-backed tenant record for a room and its resident."""

    id: int | None = sqlmodel.Field(default=None, primary_key=True)
    tenant: str = ""
    tenant_dni: str = ""
    tenant_email: str = ""
    tenant_phone: str = ""
    occupancyrecords: list["OccupancyRecord"] = sqlmodel.Relationship(back_populates="tenant")
    
class RoomRecord(rx.Model, table=True):
    """Database-backed room record for a room and its resident."""

    id: int | None = sqlmodel.Field(default=None, primary_key=True)
    room: str = ""
    floor: int = 0
    bed_type: str = ""
    #status: str = _STATUSES[0]
    occupancyrecords: list["OccupancyRecord"] = sqlmodel.Relationship(back_populates="room")

class OccupancyRecord(rx.Model, table=True):
    """Database-backed occupancy record for a room and its resident."""

    id: int | None = sqlmodel.Field(default=None, primary_key=True)
    room_id: int = sqlmodel.Field(foreign_key="roomrecord.id")
    room: RoomRecord = sqlmodel.Relationship(back_populates="occupancyrecords")    
    tenant_id: int = sqlmodel.Field(foreign_key="tenantrecord.id")
    tenant: TenantRecord = sqlmodel.Relationship(back_populates="occupancyrecords")
    rent: float = 0.0
    deposit: float = 0.0
    balance: float = 0.0
    payment_status: str = "Pagado"
    last_payment: str = ""
    next_payment: str = ""
    lease_start: str = ""
    lease_end: str = ""
    notes: str = ""
    record_status: str = _RECORD_STATUSES[0]
    termination_date: str = ""
    #termination_reason: str = ""
    


def _record_to_room(record: OccupancyRecord) -> Lease:
    return Lease(
        id=f"room-{record.id}",
        room_id=str(record.room_id),
        tenant_id=str(record.tenant_id),
        room=record.room.room,
        floor=record.room.floor,
        bed_type=record.room.bed_type,
        tenant=record.tenant.tenant,
        tenant_dni=record.tenant.tenant_dni,
        tenant_email=record.tenant.tenant_email,
        tenant_phone=record.tenant.tenant_phone,
        rent=record.rent,
        deposit=record.deposit,
        balance=record.balance,
        payment_status=record.payment_status,
        last_payment=record.last_payment,
        next_payment=record.next_payment,
        lease_start=record.lease_start,
        lease_end=record.lease_end,
        #status=record.room.status,
        notes=record.notes,
        record_status=record.record_status,
        termination_date=record.termination_date,
        #termination_reason=record.termination_reason,
    )

    

def _apply_room(record: OccupancyRecord, data: Lease) -> OccupancyRecord:
    record.room = data["room"]["room"]
    record.floor = int(data["room"]["floor"])
    record.bed_type = data["room"]["bed_type"]
    record.tenant = data["tenant"]["tenant"]
    record.tenant_dni = data["tenant"]["tenant_dni"]
    record.tenant_email = data["tenant"]["tenant_email"]
    record.tenant_phone = data["tenant"]["tenant_phone"]
    record.rent = float(data["rent"])
    record.deposit = float(data["deposit"])
    record.balance = float(data["balance"])
    record.payment_status = data["payment_status"]
    record.last_payment = data["last_payment"]
    record.next_payment = data["next_payment"]
    record.lease_start = data["lease_start"]
    record.lease_end = data["lease_end"]
    #record.status = data["room"]["status"]
    record.notes = data["notes"]
    record.record_status = data["record_status"]
    record.termination_date = data["termination_date"]
    # record.termination_reason = data["termination_reason"]
    return record

def _apply_occupancy(record: OccupancyRecord, data: dict) -> OccupancyRecord:
    """Aplica los datos de contrato/pago. room_id/tenant_id solo se actualizan
    si vienen informados en `data` (permite reutilizar en extend/terminate,
    que no tocan la habitación ni el inquilino)."""
    if data.get("room_id"):
        record.room_id = int(data["room_id"])
    if data.get("tenant_id"):
        record.tenant_id = int(data["tenant_id"])
    record.rent = float(data["rent"])
    record.deposit = float(data["deposit"])
    record.balance = float(data["balance"])
    record.payment_status = data["payment_status"]
    record.last_payment = data["last_payment"]
    record.next_payment = data["next_payment"]
    record.lease_start = data["lease_start"]
    record.lease_end = data["lease_end"]
    record.notes = data["notes"]
    record.record_status = data["record_status"]
    record.termination_date = data["termination_date"]
    # record.termination_reason = data["termination_reason"]
    return record

def list_available_rooms(exclude_room_id: str = "") -> list[dict[str, str]]:
    try:
        with rx.session() as session:
            occupied_ids = {
                r.room_id
                for r in session.exec(
                    sqlmodel.select(OccupancyRecord).where(
                        OccupancyRecord.record_status != _RECORD_STATUSES[3]
                    )
                ).all()
            }
            exclude_pk = int(exclude_room_id) if exclude_room_id.isdigit() else -1
            rooms = session.exec(
                sqlmodel.select(RoomRecord).order_by(RoomRecord.room)
            ).all()
            return [
                {
                    "id": str(r.id), "room": r.room, "floor": str(r.floor),
                    "bed_type": r.bed_type,
                }
                for r in rooms
                if r.id not in occupied_ids or r.id == exclude_pk
            ]
    except Exception as e:
        logging.exception(f"Error: {e}")
        return []


def list_available_tenants(exclude_tenant_id: str = "") -> list[dict[str, str]]:
    try:
        with rx.session() as session:
            occupied_ids = {
                r.tenant_id
                for r in session.exec(
                    sqlmodel.select(OccupancyRecord).where(
                        OccupancyRecord.record_status != _RECORD_STATUSES[3]
                    )
                ).all()
            }
            exclude_pk = int(exclude_tenant_id) if exclude_tenant_id.isdigit() else -1
            tenants = session.exec(
                sqlmodel.select(TenantRecord).order_by(TenantRecord.tenant)
            ).all()
            return [
                {
                    "id": str(t.id), "tenant": t.tenant, "tenant_dni": t.tenant_dni,
                    "tenant_email": t.tenant_email, "tenant_phone": t.tenant_phone,
                }
                for t in tenants
                if t.id not in occupied_ids or t.id == exclude_pk
            ]
    except Exception as e:
        logging.exception(f"Error: {e}")
        return []


def get_room_record(room_id: str) -> dict[str, str]:
    try:
        with rx.session() as session:
            r = session.get(RoomRecord, int(room_id))
            if r is None:
                return {}
            return {
                "id": str(r.id), "room": r.room, "floor": str(r.floor),
                "bed_type": r.bed_type,
            }
    except Exception as e:
        logging.exception(f"Error: {e}")
        return {}


def get_tenant_record(tenant_id: str) -> dict[str, str]:
    try:
        with rx.session() as session:
            t = session.get(TenantRecord, int(tenant_id))
            if t is None:
                return {}
            return {
                "id": str(t.id), "tenant": t.tenant, "tenant_dni": t.tenant_dni,
                "tenant_email": t.tenant_email, "tenant_phone": t.tenant_phone,
            }
    except Exception as e:
        logging.exception(f"Error: {e}")
        return {}

def list_room_records() -> list[dict[str, str]]:
    try:
        with rx.session() as session:
            records = session.exec(
                sqlmodel.select(RoomRecord).order_by(RoomRecord.room)
            ).all()
            return [
                {"id": str(r.id), "room": r.room, "floor": str(r.floor), "bed_type": r.bed_type}
                for r in records
            ]
    except Exception as e:
        logging.exception(f"Error: {e}")
        return []
    
def list_tenant_records() -> list[dict[str, str]]:
    try:
        with rx.session() as session:
            records = session.exec(
                sqlmodel.select(TenantRecord).order_by(TenantRecord.tenant)
            ).all()
            return [{"id": str(r.id), "tenant": r.tenant} for r in records]
    except Exception as e:
        logging.exception(f"Error: {e}")
        return []
    
def room_number_exists(room: str, exclude_id: str = "") -> bool:
    """Comprueba duplicados sobre RoomRecord, no sobre OccupancyRecord."""
    try:
        with rx.session() as session:
            records = session.exec(sqlmodel.select(RoomRecord)).all()
            return any(
                r.room.lower() == room.lower() and str(r.id) != exclude_id
                for r in records
            )
    except Exception as e:
        logging.exception(f"Error: {e}")
        return False
    
def create_room_record(room: str, floor: int, bed_type: str) -> str:
    try:
        with rx.session() as session:
            record = RoomRecord(room=room, floor=floor, bed_type=bed_type)
            session.add(record)
            session.commit()
            session.refresh(record)
            return str(record.id)
    except Exception as e:
        logging.exception(f"Error: {e}")
        return ""


def create_tenant_record(tenant: str, tenant_dni: str, tenant_email: str, tenant_phone: str) -> str:
    try:
        with rx.session() as session:
            record = TenantRecord(
                tenant=tenant, tenant_dni=tenant_dni,
                tenant_email=tenant_email, tenant_phone=tenant_phone,
            )
            session.add(record)
            session.commit()
            session.refresh(record)
            return str(record.id)
    except Exception as e:
        logging.exception(f"Error: {e}")
        return ""

def _record_pk(room_id: str) -> int:
    suffix = room_id.rsplit("-", 1)[-1]
    return int(suffix) if suffix.isdigit() else -1


def hash_password(password: str) -> str:
    try:
        salt = secrets.token_bytes(16)
        derived = hashlib.pbkdf2_hmac(
            "sha256", password.encode("utf-8"), salt, 310_000
        )
        return f"pbkdf2_sha256$310000${salt.hex()}${derived.hex()}"
    except Exception as e:
        logging.exception(f"Error: {e}")
        raise


def verify_password(password: str, stored_hash: str) -> bool:
    try:
        algorithm, iterations_text, salt_hex, digest_hex = stored_hash.split(
            "$", 3
        )
        if algorithm != "pbkdf2_sha256":
            return False
        iterations = int(iterations_text)
        salt = bytes.fromhex(salt_hex)
        expected = bytes.fromhex(digest_hex)
        actual = hashlib.pbkdf2_hmac(
            "sha256", password.encode("utf-8"), salt, iterations
        )
        return hmac.compare_digest(actual, expected)
    except (ValueError, TypeError):
        return False
    except Exception as e:
        logging.exception(f"Error: {e}")
        return False


def list_admin_accounts() -> list[dict[str, str | bool]]:
    try:
        with rx.session() as session:
            records = session.exec(
                sqlmodel.select(AdminAccount).order_by(AdminAccount.id)
            ).all()
            return [
                {
                    "email": r.email,
                    "name": r.name,
                    "role": r.role,
                    "active": r.active,
                }
                for r in records
            ]
    except Exception as e:
        logging.exception(f"Error: {e}")
        return []


def get_admin_account(email: str) -> AdminAccount | None:
    try:
        with rx.session() as session:
            return session.exec(
                sqlmodel.select(AdminAccount).where(AdminAccount.email == email)
            ).first()
    except Exception as e:
        logging.exception(f"Error: {e}")
        return None


def set_admin_active(email: str, active: bool) -> bool:
    try:
        with rx.session() as session:
            record = session.exec(
                sqlmodel.select(AdminAccount).where(AdminAccount.email == email)
            ).first()
            if record is None:
                return False
            record.active = active
            session.add(record)
            session.commit()
            return True
    except Exception as e:
        logging.exception(f"Error: {e}")
        return False


def seed_admin_accounts() -> None:
    #ensure_tables()
    try:
        with rx.session() as session:
            if session.exec(sqlmodel.select(AdminAccount)).first() is not None:
                return
            starter_accounts = [
                (
                    "manager@occupancy.app",
                    "Maya Chen",
                    "Property Manager",
                    "HarborView!2025",
                ),
                (
                    "operations@occupancy.app",
                    "Jordan Ellis",
                    "Operations Admin",
                    "OccupancyOps!2025",
                ),
            ]
            for email, name, role, password in starter_accounts:
                session.add(
                    AdminAccount(
                        email=email,
                        name=name,
                        role=role,
                        active=True,
                        password_hash=hash_password(password),
                    )
                )
            session.commit()
    except Exception as e:
        logging.exception(f"Error: {e}")


def seed_if_empty() -> None:
    """Insert realistic starter records only when the table is empty."""
    #ensure_tables()
    try:
        with rx.session() as session:
            existing = session.exec(sqlmodel.select(OccupancyRecord)).first()
            if existing is not None:
                return
            # for room in _seed_rooms():
            #     session.add(_apply_room(OccupancyRecord(), room))
            session.commit()
    except Exception as e:
        logging.exception(f"Error: {e}")


def list_rooms() -> list[Lease]:
    try:
        with rx.session() as session:
            records = session.exec(
                sqlmodel.select(OccupancyRecord).order_by(OccupancyRecord.id)
            ).all()
            return [_record_to_room(record) for record in records]
    except Exception as e:
        logging.exception(f"Error: {e}")
        return []


def room_exists(room: str, exclude_id: str = "") -> bool:
    try:
        exclude_pk = _record_pk(exclude_id) if exclude_id else -1
        with rx.session() as session:
            records = session.exec(
                sqlmodel.select(OccupancyRecord).where(
                    # OccupancyRecord.building == building
                    True
                )
            ).all()
            return any(
                record.room.room.lower() == room.lower() and record.id != exclude_pk
                for record in records
            )
    except Exception as e:
        logging.exception(f"Error: {e}")
        return False


def create_room(data: Lease) -> str:
    try:
        with rx.session() as session:
            record = _apply_occupancy(OccupancyRecord(), data)
            session.add(record)
            session.commit()
            session.refresh(record)
            return f"room-{record.id}"
    except Exception as e:
        logging.exception(f"Error: {e}")
        return ""


def update_room(room_id: str, data: Lease) -> bool:
    try:
        pk = _record_pk(room_id)
        with rx.session() as session:
            record = session.get(OccupancyRecord, pk)
            if record is None:
                return False
            _apply_occupancy(record, data)
            session.add(record)
            session.commit()
            return True
    except Exception as e:
        logging.exception(f"Error: {e}")
        return False


def delete_room(room_id: str) -> bool:
    try:
        pk = _record_pk(room_id)
        with rx.session() as session:
            record = session.get(OccupancyRecord, pk)
            if record is None:
                return False
            session.delete(record)
            session.commit()
            return True
    except Exception as e:
        logging.exception(f"Error: {e}")
        return False


def get_room(room_id: str) -> Lease:
    try:
        pk = _record_pk(room_id)
        with rx.session() as session:
            record = session.get(OccupancyRecord, pk)
            if record is None:
                return EMPTY_ROOM
            return _record_to_room(record)
    except Exception as e:
        logging.exception(f"Error: {e}")
        return EMPTY_ROOM
