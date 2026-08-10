import hashlib
import hmac
import logging
import random
import secrets
from typing import TypedDict

import reflex as rx
import sqlmodel
from faker import Faker


class Room(TypedDict):
    id: str
    room: str
    # building: str
    floor: int
    bed_type: str
    tenant: str
    tenant_dni: str
    tenant_email: str
    tenant_phone: str
    #occupants: int
    # capacity: int
    # occupant_names: list[str]
    rent: float
    deposit: float
    balance: float
    payment_status: str
    last_payment: str
    next_payment: str
    #check_in: str
    lease_start: str
    lease_end: str
    # lease_term: str
    status: str
    notes: str
    # emergency_name: str
    # emergency_relation: str
    # emergency_phone: str
    record_status: str
    termination_date: str
    termination_reason: str


EMPTY_ROOM: Room = Room(
    id="",
    room="",
    # building="",
    floor=0,
    bed_type="",
    tenant="",
    tenant_dni="",
    tenant_email="",
    tenant_phone="",
    # occupants=0,
    # capacity=0,
    # occupant_names=[],
    rent=0.0,
    deposit=0.0,
    balance=0.0,
    payment_status="",
    last_payment="",
    next_payment="",
    # check_in="",
    lease_start="",
    lease_end="",
    # lease_term="",
    status="",
    notes="",
    # emergency_name="",
    # emergency_relation="",
    # emergency_phone="",
    record_status="Occupied",
    termination_date="",
    termination_reason="",
)


# BUILDINGS: list[str] = ["Aurora Hall", "Birch House", "Cedar Court"]
_BED_TYPES: list[str] = ["Studio", "Single", "Double", "Suite", "Shared Loft"]
_STATUSES: list[str] = ["Active", "Ending soon", "Overdue"]
# _RELATIONS: list[str] = ["Sister", "Father", "Mother", "Partner", "Brother"]
_NOTES: list[str] = [
    "Quiet tenant, prefers maintenance visits after 5pm. Bike stored in basement rack 4.",
    "Requested extra storage locker. Renewed once, strong payment history.",
    "Works night shifts — do not schedule inspections before noon.",
    "Shares room with a roommate on the same lease. Pet-free unit.",
    "Lease ends soon; renewal paperwork sent and awaiting signature.",
    "Reported a slow-draining sink last month, resolved by facilities.",
]


class AdminAccount(rx.Model, table=True):
    """Database-backed administrator account with a one-way password hash."""

    id: int | None = sqlmodel.Field(default=None, primary_key=True)
    email: str = sqlmodel.Field(index=True, unique=True)
    name: str = ""
    role: str = ""
    active: bool = True
    password_hash: str = ""


class OccupancyRecord(rx.Model, table=True):
    """Database-backed occupancy record for a room and its resident."""

    id: int | None = sqlmodel.Field(default=None, primary_key=True)
    room: str = ""
    #building: str = ""
    floor: int = 1
    bed_type: str = ""
    tenant: str = ""
    tenant_dni: str = ""
    tenant_email: str = ""
    tenant_phone: str = ""
    # occupants: int = 1
    # capacity: int = 1
    # occupant_names: str = ""
    rent: float = 0.0
    deposit: float = 0.0
    balance: float = 0.0
    payment_status: str = "Paid"
    last_payment: str = ""
    next_payment: str = ""
    #check_in: str = ""
    lease_start: str = ""
    lease_end: str = ""
    # lease_term: str = ""
    status: str = "Active"
    notes: str = ""
    # emergency_name: str = ""
    # emergency_relation: str = ""
    # emergency_phone: str = ""
    record_status: str = "Occupied"
    termination_date: str = ""
    termination_reason: str = ""


def _record_to_room(record: OccupancyRecord) -> Room:
    # names = [n for n in record.occupant_names.split("|") if n]
    return Room(
        id=f"room-{record.id}",
        room=record.room,
        # building=record.building,
        floor=record.floor,
        bed_type=record.bed_type,
        tenant=record.tenant,
        tenant_dni=record.tenant_dni,
        tenant_email=record.tenant_email,
        tenant_phone=record.tenant_phone,
        # occupants=record.occupants,
        # capacity=record.capacity,
        # occupant_names=names or [record.tenant],
        rent=record.rent,
        deposit=record.deposit,
        balance=record.balance,
        payment_status=record.payment_status,
        last_payment=record.last_payment,
        next_payment=record.next_payment,
        # check_in=record.check_in,
        lease_start=record.lease_start,
        lease_end=record.lease_end,
        # lease_term=record.lease_term,
        status=record.status,
        notes=record.notes,
        # emergency_name=record.emergency_name,
        # emergency_relation=record.emergency_relation,
        # emergency_phone=record.emergency_phone,
        record_status=record.record_status,
        termination_date=record.termination_date,
        termination_reason=record.termination_reason,
    )


def _apply_room(record: OccupancyRecord, data: Room) -> OccupancyRecord:
    record.room = data["room"]
    # record.building = data["building"]
    record.floor = int(data["floor"])
    record.bed_type = data["bed_type"]
    record.tenant = data["tenant"]
    record.tenant_dni= data["tenant_dni"]
    record.tenant_email = data["tenant_email"]
    record.tenant_phone = data["tenant_phone"]
    # record.occupants = int(data["occupants"])
    # record.capacity = int(data["capacity"])
    # record.occupant_names = "|".join(data["occupant_names"])
    record.rent = float(data["rent"])
    record.deposit = float(data["deposit"])
    record.balance = float(data["balance"])
    record.payment_status = data["payment_status"]
    record.last_payment = data["last_payment"]
    record.next_payment = data["next_payment"]
    # record.check_in = data["check_in"]
    record.lease_start = data["lease_start"]
    record.lease_end = data["lease_end"]
    # record.lease_term = data["lease_term"]
    record.status = data["status"]
    record.notes = data["notes"]
    # record.emergency_name = data["emergency_name"]
    # record.emergency_relation = data["emergency_relation"]
    # record.emergency_phone = data["emergency_phone"]
    record.record_status = data["record_status"]
    record.termination_date = data["termination_date"]
    record.termination_reason = data["termination_reason"]
    return record


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


# def ensure_tables() -> None:
#     """Ensure the configured database schema is available."""
#     try:
#         # engine = rx.model.get_engine()
#         # sqlmodel.SQLModel.metadata.create_all(engine)
#         """Creamos las tablas en la base de datos si no existen"""
#         rx.Model.metadata.create_all()
#     except Exception as e:
#         logging.exception(f"Error: {e}")


# def _seed_rooms() -> list[Room]:
#     fake = Faker()
#     Faker.seed(7)
#     random.seed(7)
#     rooms: list[Room] = []
#     for i in range(12):
#         #building = BUILDINGS[i % len(BUILDINGS)]
#         floor = (i % 4) + 1
#         room_type = _BED_TYPES[i % len(_BED_TYPES)]
#         capacity = 1 if room_type in ("Studio", "Single") else 2
#         name = fake.name()
#         status = _STATUSES[0]
#         if i in (3, 9):
#             status = _STATUSES[1]
#         if i == 6:
#             status = _STATUSES[2]
#         rent = float(random.randrange(880, 2450, 5))
#         payment_status = "Paid"
#         balance = 0.0
#         if status == _STATUSES[2]:
#             payment_status = "Overdue"
#             balance = rent
#         elif i in (2, 8):
#             payment_status = "Due"
#             balance = round(rent / 2, 2)
#         occupant_names = [name]
#         if capacity > 1:
#             occupant_names.append(fake.name())
#         rooms.append(
#             Room(
#                 id="",
#                 room=f"{floor}{(i % 6) + 1:02d}",
#                 # building=building,
#                 floor=floor,
#                 bed_type=room_type,
#                 tenant=name,
#                 tenant_email=f"{name.split(' ')[0].lower()}.{name.split(' ')[-1].lower()}@mail.com",
#                 tenant_phone=f"+1 (415) {random.randint(200, 989)}-{random.randint(1000, 9999)}",
#                 # occupants=capacity,
#                 # capacity=capacity,
#                 # occupant_names=occupant_names,
#                 rent=rent,
#                 deposit=round(rent * 1.5, 2),
#                 balance=balance,
#                 payment_status=payment_status,
#                 last_payment=fake.date_between(
#                     start_date="-45d", end_date="-5d"
#                 ).strftime("%b %d, %Y"),
#                 next_payment=fake.date_between(
#                     start_date="+3d", end_date="+30d"
#                 ).strftime("%b %d, %Y"),
#                 # check_in=fake.date_between(
#                 #     start_date="-2y", end_date="-3M"
#                 # ).strftime("%b %d, %Y"),
#                 lease_start=fake.date_between(
#                     start_date="-2y", end_date="-4M"
#                 ).strftime("%b %d, %Y"),
#                 lease_end=fake.date_between(
#                     start_date="+1M", end_date="+1y"
#                 ).strftime("%b %d, %Y"),
#                 # lease_term=f"{12 if i % 2 == 0 else 6}-month lease",
#                 status=status,
#                 notes=_NOTES[i % len(_NOTES)],
#                 # emergency_name=fake.name(),
#                 # emergency_relation=_RELATIONS[i % len(_RELATIONS)],
#                 # emergency_phone=f"+1 (628) {random.randint(200, 989)}-{random.randint(1000, 9999)}",
#                 record_status="Occupied",
#                 termination_date="",
#                 termination_reason="",
#             )
#         )
#     return rooms


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


def list_rooms() -> list[Room]:
    try:
        with rx.session() as session:
            records = session.exec(
                sqlmodel.select(OccupancyRecord).order_by(OccupancyRecord.id)
            ).all()
            return [_record_to_room(record) for record in records]
    except Exception as e:
        logging.exception(f"Error: {e}")
        return []


def room_exists(room: str, building: str, exclude_id: str = "") -> bool:
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
                record.room.lower() == room.lower() and record.id != exclude_pk
                for record in records
            )
    except Exception as e:
        logging.exception(f"Error: {e}")
        return False


def create_room(data: Room) -> str:
    """Insert a record and return its room id (empty string on failure)."""
    try:
        with rx.session() as session:
            record = _apply_room(OccupancyRecord(), data)
            session.add(record)
            session.commit()
            session.refresh(record)
            return f"room-{record.id}"
    except Exception as e:
        logging.exception(f"Error: {e}")
        return ""


def update_room(room_id: str, data: Room) -> bool:
    try:
        pk = _record_pk(room_id)
        with rx.session() as session:
            record = session.get(OccupancyRecord, pk)
            if record is None:
                return False
            _apply_room(record, data)
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


def get_room(room_id: str) -> Room:
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
