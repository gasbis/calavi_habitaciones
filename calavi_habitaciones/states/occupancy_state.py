import asyncio
from datetime import date, datetime
from calavi_habitaciones.models import format_eur, has_rent_entry_current_month, _DISPLAY_FORMAT


import reflex as rx
from typing import TypedDict

from calavi_habitaciones.models import (
    _RECORD_STATUSES,
    EMPTY_ROOM,
    Lease,
    list_rooms,
    list_room_records,
    business_start_date,
    total_occupancy_days_by_room,
    yearly_occupancy_days_by_room,
)

__all__ = ["EMPTY_ROOM", "OccupancyState", "Lease"]

class RoomOccupancy(TypedDict):
    id: str
    room: str
    pct_year: int
    pct_total: int

class OccupancyState(rx.State):
    rooms: list[Lease] = []
    total_units: int = 7
    is_loading: bool = False
    selected_id: str = ""
    view_mode: str = "active"
    history_search: str = ""
    history_selected_id: str = ""
    all_rooms: list[dict[str, str]] = []
    room_occupancy_days_year: dict[str, int] = {}
    room_occupancy_days_total: dict[str, int] = {}
    business_days_elapsed: int = 1
    rent_paid_current_month: bool = False

    def _sync_rooms(self) -> None:
        self.rooms = list_rooms()
        self.all_rooms = list_room_records()
        self.room_occupancy_days_year = yearly_occupancy_days_by_room()

        start = business_start_date()
        if start:
            self.business_days_elapsed = (date.today() - start).days + 1
            self.room_occupancy_days_total = total_occupancy_days_by_room(start)
        else:
            self.business_days_elapsed = 1
            self.room_occupancy_days_total = {}

    @rx.var
    def rooms_occupancy_panel(self) -> list[RoomOccupancy]:
        today = date.today()
        days_elapsed_year = (today - date(today.year, 1, 1)).days + 1
        result = []
        for room in self.all_rooms:
            occ_year = self.room_occupancy_days_year.get(room["id"], 0)
            occ_total = self.room_occupancy_days_total.get(room["id"], 0)
            result.append(
                RoomOccupancy(
                    id=room["id"],
                    room=room["room"],
                    pct_year=round(occ_year / days_elapsed_year * 100) if days_elapsed_year else 0,
                    pct_total=round(occ_total / self.business_days_elapsed * 100) if self.business_days_elapsed else 0,
                )
            )
        return sorted(result, key=lambda r: int(r["room"]))

    @rx.var
    def selected_room_label(self) -> str:
        room = self.selected_room
        if room["id"] == "":
            return "Ninguna habit. seleccionada"
        return f"Habitación {room['room']}"

    @rx.var
    def selected_room(self) -> Lease:
        for room in self.rooms:
            if room["id"] == self.selected_id:
                return room
        return EMPTY_ROOM

    @rx.var
    def occupied_lease(self) -> list[Lease]:
        return sorted(
            [r for r in self.rooms if r["record_status"] != _RECORD_STATUSES[3]],
            key=lambda r: int(r["room"]),
        )

    @rx.var
    def terminated_lease(self) -> list[Lease]:
        def termination_sort_key(r: Lease):
            try:
                return datetime.strptime(r["termination_date"], _DISPLAY_FORMAT).date()
            except ValueError:
                return date.min

        return sorted(
            [r for r in self.rooms if r["record_status"] == _RECORD_STATUSES[3]],
            key=termination_sort_key,
            reverse=True,
        )

    @rx.var
    def terminated_count(self) -> int:
        return len(self.terminated_lease)

    @rx.var
    def history_filtered_rooms(self) -> list[Lease]:
        query = self.history_search.strip().lower()
        if not query:
            return self.terminated_lease
        return [
            room
            for room in self.terminated_lease
            if query in room["room"].lower()
            or query in room["tenant"].lower()
        ]

    @rx.var
    def selected_history_room(self) -> Lease:
        for room in self.terminated_lease:
            if room["id"] == self.history_selected_id:
                return room
        return EMPTY_ROOM

    @rx.var
    def has_selection(self) -> bool:
        return any(r["id"] == self.selected_id for r in self.occupied_lease)
    
    @rx.var
    def selected_room_chapter(self) -> str:
        room = self.selected_room
        if room["id"] == "":
            return ""
        return f"Habitación {room['room']}"
    
    def _sync_rent_paid_status(self) -> None:
        chapter = self.selected_room_chapter
        self.rent_paid_current_month = (
            has_rent_entry_current_month(chapter) if chapter else False
        )


    @rx.var
    def filtered_rooms(self) -> list[Lease]:
        result = self.occupied_lease
        today = date.today()
        computed: list[Lease] = []
        for r in result:
            room = dict(r)  # copia, no tocamos el original
            # Presentamos solo el nombre propio
            if room["tenant"].count(' ') > 2:
                room["tenant"] = " ".join(room["tenant"].split()[:2])
            else:
                room["tenant"] = room["tenant"].split()[0]
            try:
                date_end = datetime.strptime(r["lease_end"], _DISPLAY_FORMAT).date()
            except ValueError:
                computed.append(room)
                continue
            days_left = (date_end - today).days
            if days_left < 0:
                room["record_status"] = _RECORD_STATUSES[2]  # vencido
            elif days_left <= 30:
                room["record_status"] = _RECORD_STATUSES[1]  # próximo a vencer
            else:
                room["record_status"] = _RECORD_STATUSES[0]  # activo
            computed.append(room)
        return computed

    @rx.var
    def filtered_rooms_no_paid_rent(self) -> list[str]:
        return [r['room'] for r in self.filtered_rooms if not has_rent_entry_current_month(f"Habitación {r['room']}")]

    @rx.var
    def occupied_count(self) -> int:
        return len(self.occupied_lease)

    @rx.var
    def selected_room_lease_end_iso(self) -> str:
        try:
            return datetime.strptime(
                self.selected_room["lease_end"], _DISPLAY_FORMAT
            ).strftime("%Y-%m-%d")
        except Exception:
            return ""

    @rx.var
    def occupancy_rate(self) -> float:
        if self.total_units == 0:
            return 0.0
        return round(len(self.occupied_lease) / self.total_units * 100, 1)

    @rx.var
    def monthly_revenue(self) -> float:
        return float(sum(r["rent"] for r in self.occupied_lease))
    
    @rx.var
    def monthly_revenue_display(self) -> str:
        return format_eur(self.monthly_revenue)

    @rx.var
    def attention_count(self) -> int:
        return len([r for r in self.filtered_rooms if r["record_status"] != _RECORD_STATUSES[0]])

    @rx.var
    def result_label(self) -> str:
        count = len(self.filtered_rooms)
        return f"{count} habitaci{'ón' if count == 1 else 'ones'} listada{'' if count == 1 else 's'}"

    @rx.event
    def show_active_view(self):
        self.view_mode = "active"
        self.history_selected_id = ""

    @rx.event
    async def show_history_view(self):
        self.view_mode = "history"
        self.selected_id = ""
        from calavi_habitaciones.states.record_state import RecordState

        record_state = await self.get_state(RecordState)
        record_state.extension_target_id = ""
        record_state.extension_error = ""

    @rx.event
    def set_history_search(self, value: str):
        self.history_search = value

    @rx.event
    def select_history_room(self, room_id: str):
        self.history_selected_id = room_id

    @rx.event
    def clear_history_selection(self):
        self.history_selected_id = ""

    @rx.event
    async def select_room(self, room_id: str):
        from calavi_habitaciones.states.auth_state import AuthState
        from calavi_habitaciones.states.record_state import RecordState

        auth = await self.get_state(AuthState)
        if auth.is_authenticated:
            self.selected_id = room_id
            self._sync_rent_paid_status()
            record_state = await self.get_state(RecordState)
            record_state.extension_target_id = ""
            record_state.extension_error = ""

    @rx.event
    async def set_detail_open(self, value: bool):
        if not value:
            await self.clear_selection()

    @rx.event
    async def clear_selection(self):
        from calavi_habitaciones.states.auth_state import AuthState
        from calavi_habitaciones.states.record_state import RecordState

        auth = await self.get_state(AuthState)
        if auth.is_authenticated:
            self.selected_id = ""
            self.rent_paid_current_month = False
            record_state = await self.get_state(RecordState)
            record_state.extension_target_id = ""
            record_state.extension_error = ""
            
    @rx.event
    async def register_rent_payment(self):
        from calavi_habitaciones.states.auth_state import AuthState
        from calavi_habitaciones.models import AccountEntry, current_month_name, create_account_entry

        auth = await self.get_state(AuthState)
        if not auth.is_authenticated:
            return

        room = self.selected_room
        if room["id"] == "" or self.rent_paid_current_month:
            return

        entry = AccountEntry(
            mov_type="Ingreso",
            mov_date=date.today().strftime(_DISPLAY_FORMAT),
            concept=current_month_name(),
            chapter=self.selected_room_chapter,
            subchapter="Alquiler",
            amount=room["rent"],
            consum=None,
            observ=None,
            bill_url=None,
        )
        new_id = create_account_entry(entry)
        if new_id == "":
            yield rx.toast("No se ha podido registrar el pago.", duration=2500)
            return

        self.rent_paid_current_month = True
        
        from calavi_habitaciones.states.account_state import AccountState

        account_state = await self.get_state(AccountState)
        account_state._sync_entries()

        yield rx.toast(
            f"Pago de alquiler registrado: {self.selected_room_chapter}.",
            duration=2500,
        )

    @rx.event
    async def refresh(self):
        from calavi_habitaciones.states.auth_state import AuthState

        auth = await self.get_state(AuthState)
        if not auth.is_authenticated:
            return
        self.is_loading = True
        yield
        await asyncio.sleep(0.6)
        self._sync_rooms()
        self.is_loading = False
        yield rx.toast("Occupancy data is up to date", duration=2500)

    @rx.event
    async def load(self):
        from calavi_habitaciones.states.auth_state import AuthState

        auth = await self.get_state(AuthState)
        if not auth.is_authenticated:
            self.is_loading = False
            return
        self.is_loading = True
        yield
        await asyncio.sleep(0.4)
        self._sync_rooms()
        self.is_loading = False
        