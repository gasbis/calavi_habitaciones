import hashlib
import hmac
import logging
import secrets
from typing import TypedDict
import reflex as rx
import sqlmodel
from calavi_habitaciones.utils.formatting import format_eur
from datetime import date, datetime


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
    lease_start: str
    lease_end: str
    notes: str
    record_status: str
    termination_date: str
    rent_display: str
    deposit_display: str

class AccountEntry(TypedDict):
    id: str
    mov_type: str
    mov_date: str
    concept: str
    chapter: str
    subchapter: str
    amount: float
    consum: float
    observ: str
    bill_url: str
    
_BED_TYPES: list[str] = ["2,00x0,90x0,18", "1.35", "1.50"]


_DISPLAY_FORMAT = "%d-%m-%Y"

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
    lease_start="",
    lease_end="",
    notes="",
    record_status=_RECORD_STATUSES[0],
    termination_date="",
    rent_display="0€",
    deposit_display="0€",
)

INCOME_LIST = ["Alquiler", "Fianza", "Otros abonos"]

ACCOUNTING_TAXONOMY: dict[str, dict[str, list[str]]] ={
    "Ingreso": {
        "Habitación 1": INCOME_LIST,
        "Habitación 2": INCOME_LIST,
        "Habitación 3": INCOME_LIST,
        "Habitación 5": INCOME_LIST,
        "Habitación 6": INCOME_LIST,
        "Habitación 7": INCOME_LIST,
        "Habitación 8": INCOME_LIST,
    },
    "Gasto": {
        "Mobiliario": ["Muebles", "Electrodomésticos", "Menaje", "Ropa hogar", "Otros"],
        "Préstamo": ["Hipotecario", "Personal"],
        "Gastos fijos": ["Agua", "Electricidad", "Wifi", "Varios mantenimiento", "Seguro", "Impuestos"],
        "Obras": ["Reforma", "Reparación"],
    }
}

SUBCHAPTERS_WITH_CONSUM: set[str] = {"Agua", "Electricidad"}

_SPANISH_MONTHS: list[str] = [
    "Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio",
    "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre",
]

def to_display_date(value: str) -> str:
    if not value:
        return ""
    try:
        return datetime.strptime(value, "%Y-%m-%d").strftime(_DISPLAY_FORMAT)
    except Exception:
        logging.exception("Unexpected error")
        return ""

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
    lease_start: str = ""
    lease_end: str = ""
    notes: str = ""
    record_status: str = _RECORD_STATUSES[0]
    termination_date: str = ""
    
class AccountingEntry(rx.Model, table=True):
    id: int | None = sqlmodel.Field(default=None, primary_key=True)
    mov_type: str = sqlmodel.Field(nullable=False)
    mov_date: str = sqlmodel.Field(nullable=False)
    concept: str | None = sqlmodel.Field(default=None)
    chapter: str = sqlmodel.Field(nullable=False)
    subchapter: str = sqlmodel.Field(nullable=False)
    amount: float = sqlmodel.Field(nullable=False)
    consum: float | None = sqlmodel.Field(default=None)
    observ: str | None = sqlmodel.Field(default=None)
    bill_url: str | None = sqlmodel.Field(default=None)
    
    
# *****************************CONTROL DE HABITACIONES***********************************    

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
        rent_display=format_eur(record.rent),
        deposit_display=format_eur(record.deposit),
        lease_start=record.lease_start,
        lease_end=record.lease_end,
        notes=record.notes,
        record_status=record.record_status,
        termination_date=record.termination_date,        
    )

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
    record.lease_start = data["lease_start"]
    record.lease_end = data["lease_end"]
    record.notes = data["notes"]
    record.record_status = data["record_status"]
    record.termination_date = data["termination_date"]
    return record

def _occupancy_days_by_room(period_start: date, period_end: date) -> dict[str, int]:
    """Para cada room_id, suma los días de ocupación (cualquier contrato,
    activo o rescindido) que solapan con el periodo [period_start, period_end]."""
    try:
        totals: dict[str, int] = {}
        with rx.session() as session:
            records = session.exec(sqlmodel.select(OccupancyRecord)).all()
            for r in records:
                try:
                    lease_start = datetime.strptime(r.lease_start, _DISPLAY_FORMAT).date()
                except ValueError:
                    continue

                if r.record_status == _RECORD_STATUSES[3] and r.termination_date:
                    try:
                        effective_end = datetime.strptime(r.termination_date, _DISPLAY_FORMAT).date()
                    except ValueError:
                        continue
                else:
                    try:
                        effective_end = datetime.strptime(r.lease_end, _DISPLAY_FORMAT).date()
                    except ValueError:
                        continue

                start = max(lease_start, period_start)
                end = min(effective_end, period_end)
                days = max((end - start).days + 1, 0)
                key = str(r.room_id)
                totals[key] = totals.get(key, 0) + days
        return totals
    except Exception as e:
        logging.exception(f"Error: {e}")
        return {}


def yearly_occupancy_days_by_room() -> dict[str, int]:
    today = date.today()
    return _occupancy_days_by_room(date(today.year, 1, 1), today)


def business_start_date() -> date | None:
    """Fecha del contrato más antiguo registrado, o None si no hay ninguno."""
    try:
        with rx.session() as session:
            records = session.exec(sqlmodel.select(OccupancyRecord)).all()
            dates = []
            for r in records:
                try:
                    dates.append(datetime.strptime(r.lease_start, _DISPLAY_FORMAT).date())
                except ValueError:
                    continue
            return min(dates) if dates else None
    except Exception as e:
        logging.exception(f"Error: {e}")
        return None


def total_occupancy_days_by_room(since: date) -> dict[str, int]:
    return _occupancy_days_by_room(since, date.today())


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
    

def update_room_record(room_id: str, room: str, floor: int, bed_type: str) -> bool:
    try:
        with rx.session() as session:
            record = session.get(RoomRecord, int(room_id))
            if record is None:
                return False
            record.room = room
            record.floor = floor
            record.bed_type = bed_type
            session.add(record)
            session.commit()
            return True
    except Exception as e:
        logging.exception(f"Error: {e}")
        return False



def update_tenant_record(
    tenant_id: str, tenant: str, tenant_dni: str, tenant_email: str, tenant_phone: str
) -> bool:
    try:
        with rx.session() as session:
            record = session.get(TenantRecord, int(tenant_id))
            if record is None:
                return False
            record.tenant = tenant
            record.tenant_dni = tenant_dni
            record.tenant_email = tenant_email
            record.tenant_phone = tenant_phone
            session.add(record)
            session.commit()
            return True
    except Exception as e:
        logging.exception(f"Error: {e}")
        return False



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

def email_exists(email: str) -> bool:
    try:
        with rx.session() as session:
            record = session.exec(
                sqlmodel.select(AdminAccount).where(AdminAccount.email == email)
            ).first()
            return record is not None
    except Exception as e:
        logging.exception(f"Error: {e}")
        return False

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

# *****************************CONTROL DE ADMINISTRADORES***********************************    

def create_admin_account(email: str, name: str, role: str, password: str) -> bool:
    try:
        with rx.session() as session:
            record = AdminAccount(
                email=email, name=name, role=role, active=True,
                password_hash=hash_password(password),
            )
            session.add(record)
            session.commit()
            return True
    except Exception as e:
        logging.exception(f"Error: {e}")
        return False


def set_admin_password(email: str, new_password_hash: str) -> bool:
    try:
        with rx.session() as session:
            record = session.exec(
                sqlmodel.select(AdminAccount).where(AdminAccount.email == email)
            ).first()
            if record is None:
                return False
            record.password_hash = new_password_hash
            session.add(record)
            session.commit()
            return True
    except Exception as e:
        logging.exception(f"Error: {e}")
        return False


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

# *****************************CONTABILIDAD***********************************    


def create_account_entry(entry: AccountEntry) -> str:
    try:
        with rx.session() as session:
            record = AccountingEntry(
                mov_type=entry["mov_type"],
                mov_date=entry["mov_date"],
                concept=entry["concept"],
                chapter=entry["chapter"],
                subchapter=entry["subchapter"],
                amount=entry["amount"],
                consum=entry["consum"] or None,
                observ=entry["observ"] or None,
                bill_url=entry["bill_url"] or None,
            )
            session.add(record)
            session.commit()
            session.refresh(record)
            return str(record.id)
    except Exception as e:
        logging.exception(f"Error: {e}")
        return ""
    
 
def current_month_name() -> str:
    """Nombre del mes en curso, en español."""
    return _SPANISH_MONTHS[date.today().month - 1]
 
 
def has_rent_entry_current_month(chapter: str) -> bool:
    """True si ya existe un ingreso de Alquiler para ese capítulo (habitación)
    con fecha dentro del mes en curso."""
    today = date.today()
    try:
        with rx.session() as session:
            records = session.exec(
                sqlmodel.select(AccountingEntry).where(
                    AccountingEntry.mov_type == "Ingreso",
                    AccountingEntry.chapter == chapter,
                    AccountingEntry.subchapter == "Alquiler",
                )
            ).all()
            for r in records:
                try:
                    mov_date = datetime.strptime(r.mov_date, _DISPLAY_FORMAT).date()
                except ValueError:
                    continue
                if mov_date.year == today.year and mov_date.month == today.month:
                    return True
        return False
    except Exception as e:
        logging.exception(f"Error: {e}")
        return False
    
def list_account_entries() -> list[dict]:
    try:
        with rx.session() as session:
            records = session.exec(sqlmodel.select(AccountingEntry)).all()
            return [
                {
                    "id": str(r.id),
                    "mov_type": r.mov_type,
                    "mov_date": r.mov_date,
                    "concept": r.concept or "",
                    "chapter": r.chapter,
                    "subchapter": r.subchapter,
                    "amount": r.amount,
                    "consum": r.consum or 0.0,
                    "observ": r.observ or "",
                    "bill_url": r.bill_url or "",
                }
                for r in records
            ]
    except Exception as e:
        logging.exception(f"Error: {e}")
        return []


def get_account_entry(entry_id: str) -> dict:
    try:
        with rx.session() as session:
            r = session.get(AccountingEntry, int(entry_id))
            if r is None:
                return {}
            return {
                "id": str(r.id),
                "mov_type": r.mov_type,
                "mov_date": r.mov_date,
                "concept": r.concept or "",
                "chapter": r.chapter,
                "subchapter": r.subchapter,
                "amount": r.amount,
                "consum": r.consum or 0.0,
                "observ": r.observ or "",
                "bill_url": r.bill_url or "",
            }
    except Exception as e:
        logging.exception(f"Error: {e}")
        return {}

def update_account_entry(entry_id: str, entry: AccountEntry) -> bool:
    try:
        with rx.session() as session:
            record = session.get(AccountingEntry, int(entry_id))
            if record is None:
                return False
            record.mov_type = entry["mov_type"]
            record.mov_date = entry["mov_date"]
            record.concept = entry["concept"]
            record.chapter = entry["chapter"]
            record.subchapter = entry["subchapter"]
            record.amount = entry["amount"]
            record.consum = entry["consum"] or None
            record.observ = entry["observ"] or None
            record.bill_url = entry["bill_url"] or None
            session.add(record)
            session.commit()
            return True
    except Exception as e:
        logging.exception(f"Error: {e}")
        return False


def delete_account_entry(entry_id: str) -> bool:
    try:
        with rx.session() as session:
            record = session.get(AccountingEntry, int(entry_id))
            if record is None:
                return False
            session.delete(record)
            session.commit()
            return True
    except Exception as e:
        logging.exception(f"Error: {e}")
        return False


def to_input_date(display: str) -> str:
    if not display:
        return ""
    try:
        return datetime.strptime(display, _DISPLAY_FORMAT).strftime("%Y-%m-%d")
    except Exception:
        logging.exception("Unexpected error")
        return ""