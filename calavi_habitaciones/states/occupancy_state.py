import asyncio
from datetime import date, timedelta, datetime
from calavi_habitaciones.models import format_eur
from calavi_habitaciones.models import _DISPLAY_FORMAT


import reflex as rx

from calavi_habitaciones.models import (
    _RECORD_STATUSES,
    EMPTY_ROOM,
    Lease,
    list_rooms,
)

__all__ = ["EMPTY_ROOM", "OccupancyState", "Lease"]


class OccupancyState(rx.State):
    rooms: list[Lease] = []
    total_units: int = 7
    is_loading: bool = False
    selected_id: str = ""
    view_mode: str = "active"
    history_search: str = ""
    history_selected_id: str = ""

    def _sync_rooms(self) -> None:
        """Reload every occupancy record from the database."""
        self.rooms = list_rooms()
        # if self.total_units < len(self.rooms):
        #     self.total_units = len(self.rooms)

    # @rx.event
    # def reload_rooms(self):
    #     self._sync_rooms()

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
        return [r for r in self.rooms if r["record_status"] != _RECORD_STATUSES[3]]

    @rx.var
    def terminated_lease(self) -> list[Lease]:
        return [r for r in self.rooms if r["record_status"] == _RECORD_STATUSES[3]]

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

    # @rx.var
    # def has_history_selection(self) -> bool:
    #     return self.selected_history_room["id"] != ""

    @rx.var
    def has_selection(self) -> bool:
        return any(r["id"] == self.selected_id for r in self.occupied_lease)

    @rx.var
    def filtered_rooms(self) -> list[Lease]:
        result = self.occupied_lease
        today = date.today()
        computed: list[Lease] = []
        for r in result:
            room = dict(r)  # copia, no tocamos el original
            try:
                date_end = datetime.strptime(r["lease_end"], "%d-%m-%Y").date()
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
        # self._sync_rooms()
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

    # @rx.event
    # async def set_search(self, value: str):
    #     from calavi_habitaciones.states.auth_state import AuthState

    #     auth = await self.get_state(AuthState)
    #     if auth.is_authenticated:
    #         self.search = value

    @rx.event
    async def select_room(self, room_id: str):
        from calavi_habitaciones.states.auth_state import AuthState
        from calavi_habitaciones.states.record_state import RecordState

        auth = await self.get_state(AuthState)
        if auth.is_authenticated:
            self.selected_id = room_id
            record_state = await self.get_state(RecordState)
            record_state.extension_target_id = ""
            record_state.extension_error = ""

    @rx.event
    async def clear_selection(self):
        from calavi_habitaciones.states.auth_state import AuthState
        from calavi_habitaciones.states.record_state import RecordState

        auth = await self.get_state(AuthState)
        if auth.is_authenticated:
            self.selected_id = ""
            record_state = await self.get_state(RecordState)
            record_state.extension_target_id = ""
            record_state.extension_error = ""

    # @rx.event
    # async def clear_filters(self):
    #     from calavi_habitaciones.states.auth_state import AuthState

    #     auth = await self.get_state(AuthState)
    #     if auth.is_authenticated:
    #         self.search = ""
    #         self.building_filter = "All buildings"

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
