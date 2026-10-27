"""Control de las tareas de mantenimiento de la casa.

Se usa en dos sitios:
  - Página /mantenimiento: estado de todas las tareas y edición de
    tareas, ubicaciones y plazos.
  - Página de inicio: aviso con las tareas vencidas y botón para
    anotarlas como hechas hoy.
"""
from datetime import datetime
from typing import TypedDict
from zoneinfo import ZoneInfo

import reflex as rx

from calavi_habitaciones.models import (
    _DISPLAY_FORMAT,
    DEFAULT_PERIOD_MONTHS,
    delete_maintenance_location,
    delete_maintenance_task,
    list_maintenance_items,
    list_maintenance_locations,
    list_maintenance_tasks,
    maintenance_due_date,
    maintenance_status,
    save_maintenance_location,
    save_maintenance_task,
    set_maintenance_last_done,
    to_input_date,
)

ZONA_MADRID = ZoneInfo("Europe/Madrid")

STATUS_OVERDUE = "Vencida"
STATUS_SOON = "Vence pronto"
STATUS_OK = "Al día"


def _today():
    return datetime.now(ZONA_MADRID).date()


class MaintLocation(TypedDict):
    id: str
    name: str
    floor: str
    label: str


class MaintTask(TypedDict):
    id: str
    name: str
    period_months: int
    period_display: str
    location_ids: list[str]
    locations_count: int


class MaintItem(TypedDict):
    id: str
    task_id: str
    task: str
    location: str
    floor: str
    last_done: str
    last_done_input: str
    due: str
    status: str


def _period_display(months: int) -> str:
    if months % 12 == 0:
        years = months // 12
        return "1 año" if years == 1 else f"{years} años"
    return "1 mes" if months == 1 else f"{months} meses"


class MaintenanceState(rx.State):
    items: list[MaintItem] = []
    tasks: list[MaintTask] = []
    locations: list[MaintLocation] = []
    status_filter: str = "Todas"
    notice: str = ""

    # Diálogo de tarea
    task_dialog_open: bool = False
    task_form_id: str = ""
    task_form_name: str = ""
    task_form_period: str = str(DEFAULT_PERIOD_MONTHS)
    task_form_locations: list[str] = []
    task_error: str = ""

    # Diálogo de ubicación
    location_dialog_open: bool = False
    location_form_id: str = ""
    location_form_name: str = ""
    location_form_floor: str = ""
    location_error: str = ""

    # Confirmación de borrado
    confirm_open: bool = False
    confirm_kind: str = ""  # "task" | "location"
    confirm_id: str = ""
    confirm_label: str = ""

    # ------------------------------------------------------------------ carga

    def _sync(self) -> None:
        today = _today()
        self.locations = [
            MaintLocation(
                id=loc["id"],
                name=loc["name"],
                floor=loc["floor"],
                label=f"{loc['name']} ({loc['floor']})" if loc["floor"] else loc["name"],
            )
            for loc in list_maintenance_locations()
        ]
        self.tasks = [
            MaintTask(
                id=t["id"],
                name=t["name"],
                period_months=t["period_months"],
                period_display=_period_display(t["period_months"]),
                location_ids=t["location_ids"],
                locations_count=len(t["location_ids"]),
            )
            for t in list_maintenance_tasks()
        ]
        items: list[MaintItem] = []
        for it in list_maintenance_items():
            due = maintenance_due_date(it["last_done"], it["period_months"])
            items.append(
                MaintItem(
                    id=it["id"],
                    task_id=it["task_id"],
                    task=it["task"],
                    location=it["location"],
                    floor=it["floor"],
                    last_done=it["last_done"],
                    last_done_input=to_input_date(it["last_done"]) if it["last_done"] else "",
                    due=due.strftime(_DISPLAY_FORMAT) if due else "",
                    status=maintenance_status(it["last_done"], it["period_months"], today),
                )
            )
        self.items = items

    @rx.event
    def load(self):
        self.notice = ""
        self._sync()

    # ------------------------------------------------------- vistas derivadas

    @rx.var
    def overdue_items(self) -> list[MaintItem]:
        return [it for it in self.items if it["status"] == STATUS_OVERDUE]

    @rx.var
    def overdue_count(self) -> int:
        return len([it for it in self.items if it["status"] == STATUS_OVERDUE])

    @rx.var
    def soon_count(self) -> int:
        return len([it for it in self.items if it["status"] == STATUS_SOON])

    @rx.var
    def filtered_items(self) -> list[MaintItem]:
        if self.status_filter == "Todas":
            return self.items
        return [it for it in self.items if it["status"] == self.status_filter]

    @rx.event
    def set_status_filter(self, value: str):
        self.status_filter = value

    # ------------------------------------------------- anotar realización

    @rx.event
    def mark_done(self, item_id: str):
        """Anota la tarea como hecha hoy (hora de Madrid)."""
        today = _today().strftime(_DISPLAY_FORMAT)
        if set_maintenance_last_done(item_id, today):
            self._sync()
            return rx.toast.success(f"Anotada como realizada el {today}.")
        return rx.toast.error("No se ha podido guardar la fecha.")

    @rx.event
    def set_last_done(self, item_id: str, value: str):
        """Corrige a mano la última fecha (valor del <input type=date>)."""
        if not value:
            return
        try:
            new_date = datetime.strptime(value, "%Y-%m-%d").date()
        except ValueError:
            return
        if new_date > _today():
            self._sync()
            return rx.toast.error("La fecha no puede ser posterior a hoy.")
        display = new_date.strftime(_DISPLAY_FORMAT)
        current = next((it for it in self.items if it["id"] == item_id), None)
        if current is not None and current["last_done"] == display:
            return
        if set_maintenance_last_done(item_id, display):
            self._sync()
            return rx.toast.success(f"Fecha actualizada: {display}.")
        return rx.toast.error("No se ha podido guardar la fecha.")

    # ------------------------------------------------------------- tareas

    @rx.event
    def open_new_task(self):
        self.task_form_id = ""
        self.task_form_name = ""
        self.task_form_period = str(DEFAULT_PERIOD_MONTHS)
        self.task_form_locations = []
        self.task_error = ""
        self.task_dialog_open = True

    @rx.event
    def open_edit_task(self, task_id: str):
        task = next((t for t in self.tasks if t["id"] == task_id), None)
        if task is None:
            return
        self.task_form_id = task["id"]
        self.task_form_name = task["name"]
        self.task_form_period = str(task["period_months"])
        self.task_form_locations = list(task["location_ids"])
        self.task_error = ""
        self.task_dialog_open = True

    @rx.event
    def set_task_dialog_open(self, value: bool):
        self.task_dialog_open = value

    @rx.event
    def set_task_form_name(self, value: str):
        self.task_form_name = value

    @rx.event
    def set_task_form_period(self, value: str):
        self.task_form_period = value

    @rx.event
    def toggle_task_location(self, location_id: str, checked: bool):
        if checked and location_id not in self.task_form_locations:
            self.task_form_locations = self.task_form_locations + [location_id]
        elif not checked:
            self.task_form_locations = [x for x in self.task_form_locations if x != location_id]

    @rx.event
    def select_all_task_locations(self):
        self.task_form_locations = [loc["id"] for loc in self.locations]

    @rx.event
    def clear_task_locations(self):
        self.task_form_locations = []

    @rx.event
    def save_task(self):
        name = self.task_form_name.strip()
        if not name:
            self.task_error = "Escribe el nombre de la tarea."
            return
        if any(
            t["name"].lower() == name.lower() and t["id"] != self.task_form_id
            for t in self.tasks
        ):
            self.task_error = "Ya existe una tarea con ese nombre."
            return
        try:
            period = int(self.task_form_period)
        except ValueError:
            period = 0
        if period < 1 or period > 240:
            self.task_error = "El plazo debe ser un número de meses entre 1 y 240."
            return
        if not save_maintenance_task(self.task_form_id, name, period, self.task_form_locations):
            self.task_error = "No se ha podido guardar la tarea."
            return
        self.task_dialog_open = False
        self._sync()
        return rx.toast.success("Tarea guardada.")

    # ---------------------------------------------------------- ubicaciones

    @rx.event
    def open_new_location(self):
        self.location_form_id = ""
        self.location_form_name = ""
        self.location_form_floor = ""
        self.location_error = ""
        self.location_dialog_open = True

    @rx.event
    def open_edit_location(self, location_id: str):
        loc = next((l for l in self.locations if l["id"] == location_id), None)
        if loc is None:
            return
        self.location_form_id = loc["id"]
        self.location_form_name = loc["name"]
        self.location_form_floor = loc["floor"]
        self.location_error = ""
        self.location_dialog_open = True

    @rx.event
    def set_location_dialog_open(self, value: bool):
        self.location_dialog_open = value

    @rx.event
    def set_location_form_name(self, value: str):
        self.location_form_name = value

    @rx.event
    def set_location_form_floor(self, value: str):
        self.location_form_floor = value

    @rx.event
    def save_location(self):
        name = self.location_form_name.strip()
        if not name:
            self.location_error = "Escribe el nombre de la ubicación."
            return
        floor = self.location_form_floor.strip()
        if any(
            l["name"].lower() == name.lower()
            and l["floor"].lower() == floor.lower()
            and l["id"] != self.location_form_id
            for l in self.locations
        ):
            self.location_error = "Ya existe esa ubicación."
            return
        if not save_maintenance_location(self.location_form_id, name, floor):
            self.location_error = "No se ha podido guardar la ubicación."
            return
        self.location_dialog_open = False
        self._sync()
        return rx.toast.success("Ubicación guardada.")

    # ------------------------------------------------------------- borrado

    @rx.event
    def ask_delete_task(self, task_id: str):
        task = next((t for t in self.tasks if t["id"] == task_id), None)
        if task is None:
            return
        self.confirm_kind = "task"
        self.confirm_id = task_id
        self.confirm_label = f"la tarea «{task['name']}» y sus fechas en todas las ubicaciones"
        self.confirm_open = True

    @rx.event
    def ask_delete_location(self, location_id: str):
        loc = next((l for l in self.locations if l["id"] == location_id), None)
        if loc is None:
            return
        self.confirm_kind = "location"
        self.confirm_id = location_id
        self.confirm_label = f"la ubicación «{loc['label']}» y las fechas de sus tareas"
        self.confirm_open = True

    @rx.event
    def set_confirm_open(self, value: bool):
        self.confirm_open = value

    @rx.event
    def confirm_delete(self):
        if self.confirm_kind == "task":
            ok = delete_maintenance_task(self.confirm_id)
        elif self.confirm_kind == "location":
            ok = delete_maintenance_location(self.confirm_id)
        else:
            ok = False
        self.confirm_open = False
        self._sync()
        if ok:
            return rx.toast.success("Eliminado.")
        return rx.toast.error("No se ha podido eliminar.")
