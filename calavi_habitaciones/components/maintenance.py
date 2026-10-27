import reflex as rx

from calavi_habitaciones.states.maintenance_state import (
    STATUS_OK,
    STATUS_OVERDUE,
    STATUS_SOON,
    MaintenanceState,
    MaintItem,
    MaintLocation,
    MaintTask,
)

_TH = "px-4 py-3 text-left text-xs font-semibold uppercase tracking-wide text-neutral-700 sm:px-5"
_TD = "px-4 py-3 align-middle sm:px-5"
_INPUT = "mt-2 w-full rounded-lg border border-neutral-300 bg-white px-3 py-2 text-sm outline-hidden focus:border-brand-500 focus:ring-2 focus:ring-brand-200"
_LABEL = "text-xs font-semibold uppercase tracking-wide text-neutral-500"
_BTN_SECONDARY = "flex w-fit items-center gap-1.5 rounded-lg border border-neutral-300 bg-neutral-100 px-2.5 py-1.5 text-xs font-semibold text-neutral-700 transition-colors hover:border-brand-300 hover:bg-brand-50 hover:text-brand-700"
_BTN_DANGER = "flex w-fit items-center gap-1.5 rounded-lg border border-danger-200 bg-white px-2.5 py-1.5 text-xs font-semibold text-danger-700 transition-colors hover:bg-danger-50"
_BTN_PRIMARY = "flex w-full items-center justify-center gap-1.5 rounded-lg bg-brand-600 px-3 py-2 text-xs font-semibold text-white transition-colors hover:bg-brand-700 sm:w-auto"


def _done_today_button(item: MaintItem) -> rx.Component:
    return rx.el.button(
        rx.icon("check", class_name="h-4 w-4"),
        rx.el.span("Hecho hoy"),
        type="button",
        title="Anotar como realizada hoy",
        on_click=MaintenanceState.mark_done(item["id"]),
        class_name="flex w-fit shrink-0 items-center gap-1.5 rounded-lg bg-success-600 px-3 py-1.5 text-xs font-semibold text-white transition-colors hover:bg-success-700",
    )


def _status_badge(status: rx.Var[str]) -> rx.Component:
    return rx.el.span(
        status,
        class_name=rx.match(
            status,
            (STATUS_OVERDUE, "w-fit whitespace-nowrap rounded-full border border-danger-200 bg-danger-50 px-2.5 py-1 text-xs font-semibold text-danger-700"),
            (STATUS_SOON, "w-fit whitespace-nowrap rounded-full border border-warning-200 bg-warning-50 px-2.5 py-1 text-xs font-semibold text-warning-700"),
            "w-fit whitespace-nowrap rounded-full border border-success-200 bg-success-50 px-2.5 py-1 text-xs font-semibold text-success-700",
        ),
    )


def _section_header(icon: str, title: str, subtitle: str, *actions) -> rx.Component:
    return rx.el.div(
        rx.el.div(
            rx.el.div(
                rx.icon(icon, class_name="h-5 w-5 text-brand-600"),
                class_name="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-brand-100 bg-brand-50",
            ),
            rx.el.div(
                rx.el.h2(title, class_name="text-xl font-semibold tracking-tight text-neutral-900"),
                rx.el.p(subtitle, class_name="mt-1 text-sm font-medium text-neutral-500"),
                class_name="min-w-0",
            ),
            class_name="flex items-start gap-3",
        ),
        rx.el.div(*actions, class_name="flex flex-wrap items-center gap-2"),
        class_name="flex flex-col gap-4 border-b border-neutral-200 px-5 py-5 sm:flex-row sm:items-center sm:justify-between sm:px-6",
    )


# ***************************** AVISO EN LA PÁGINA DE INICIO *****************************

def _overdue_row(item: MaintItem) -> rx.Component:
    return rx.el.li(
        rx.el.div(
            rx.el.p(
                item["task"],
                class_name="text-sm font-semibold text-neutral-900",
            ),
            rx.el.p(
                rx.cond(
                    item["floor"] != "",
                    f"{item['location']} · {item['floor']}",
                    item["location"],
                ),
                class_name="text-sm font-medium text-neutral-700",
            ),
            rx.el.p(
                rx.cond(
                    item["last_done"] != "",
                    f"Última vez: {item['last_done']} · tocaba el {item['due']}",
                    "Sin fecha registrada",
                ),
                class_name="mt-0.5 text-xs font-medium text-danger-700",
            ),
            class_name="min-w-0",
        ),
        _done_today_button(item),
        class_name="flex items-center justify-between gap-3 border-t border-warning-200 px-5 py-3 first:border-t-0 sm:px-6",
    )


def maintenance_warning_section() -> rx.Component:
    """Aviso con las tareas de mantenimiento vencidas. No se muestra si no hay ninguna."""
    return rx.cond(
        MaintenanceState.overdue_count > 0,
        rx.el.section(
            rx.el.div(
                rx.el.div(
                    rx.icon("triangle-alert", class_name="h-5 w-5 text-danger-600"),
                    class_name="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-danger-200 bg-white",
                ),
                rx.el.div(
                    rx.el.h2(
                        rx.cond(
                            MaintenanceState.overdue_count == 1,
                            "1 tarea de mantenimiento vencida",
                            f"{MaintenanceState.overdue_count} tareas de mantenimiento vencidas",
                        ),
                        class_name="text-lg font-semibold tracking-tight text-neutral-900",
                    ),
                    rx.el.p(
                        "Pulsa «Hecho hoy» para anotar la tarea como realizada con la fecha de hoy.",
                        class_name="mt-0.5 text-sm font-medium text-neutral-600",
                    ),
                    class_name="min-w-0 flex-1",
                ),
                rx.link(
                    rx.el.span("Ver mantenimiento", class_name="text-xs font-semibold"),
                    rx.icon("arrow-right", class_name="h-3.5 w-3.5"),
                    href="/mantenimiento",
                    underline="none",
                    # Que pulsar el enlace no pliegue/despliegue el cuadro
                    on_click=rx.stop_propagation,
                    class_name="hidden items-center gap-1 text-neutral-700 hover:text-brand-700 sm:flex",
                ),
                rx.icon(
                    "chevron-down",
                    class_name=rx.cond(
                        MaintenanceState.warning_open,
                        "h-5 w-5 shrink-0 rotate-180 text-neutral-600 transition-transform",
                        "h-5 w-5 shrink-0 text-neutral-600 transition-transform",
                    ),
                ),
                role="button",
                tab_index=0,
                aria_expanded=MaintenanceState.warning_open,
                title=rx.cond(MaintenanceState.warning_open, "Ocultar la lista", "Mostrar la lista"),
                on_click=MaintenanceState.toggle_warning,
                class_name=rx.cond(
                    MaintenanceState.warning_open,
                    "flex cursor-pointer select-none items-start gap-3 border-b border-warning-200 px-5 py-4 transition-colors hover:bg-warning-100 sm:items-center sm:px-6",
                    "flex cursor-pointer select-none items-start gap-3 px-5 py-4 transition-colors hover:bg-warning-100 sm:items-center sm:px-6",
                ),
            ),
            rx.cond(
                MaintenanceState.warning_open,
                rx.el.ul(
                    rx.foreach(MaintenanceState.overdue_items, _overdue_row),
                    class_name="max-h-[28rem] overflow-y-auto",
                ),
                rx.fragment(),
            ),
            class_name="w-full overflow-hidden rounded-xl border border-danger-300 bg-warning-50",
        ),
        rx.fragment(),
    )


# ***************************** PÁGINA DE MANTENIMIENTO *****************************

def _filter_button(label: str) -> rx.Component:
    return rx.el.button(
        label,
        type="button",
        on_click=MaintenanceState.set_status_filter(label),
        class_name=rx.cond(
            MaintenanceState.status_filter == label,
            "rounded-lg bg-brand-600 px-3 py-1.5 text-xs font-semibold text-white",
            "rounded-lg border border-neutral-300 bg-neutral-100 px-3 py-1.5 text-xs font-semibold text-neutral-700 hover:bg-neutral-50",
        ),
    )


def _item_row(item: MaintItem) -> rx.Component:
    return rx.el.tr(
        rx.el.td(
            rx.el.p(item["task"], class_name="text-sm font-semibold text-neutral-900"),
            class_name=_TD,
        ),
        rx.el.td(
            rx.el.p(item["location"], class_name="text-sm font-medium text-neutral-800"),
            rx.el.p(item["floor"], class_name="text-xs font-medium text-neutral-500"),
            class_name=_TD,
        ),
        rx.el.td(
            rx.el.input(
                type="date",
                default_value=item["last_done_input"],
                key=item["id"] + "-" + item["last_done_input"],
                on_blur=MaintenanceState.set_last_done(item["id"]),
                title="Corregir la fecha de la última realización",
                class_name="w-36 rounded-lg border border-neutral-300 bg-white px-2 py-1 text-sm text-neutral-900 outline-hidden focus:border-brand-500",
            ),
            class_name=_TD,
        ),
        rx.el.td(
            rx.el.span(
                rx.cond(item["due"] != "", item["due"], "—"),
                class_name="whitespace-nowrap text-sm font-medium text-neutral-700",
            ),
            class_name=_TD,
        ),
        rx.el.td(_status_badge(item["status"]), class_name=_TD),
        rx.el.td(_done_today_button(item), class_name=_TD),
        class_name="border-t border-neutral-100 hover:bg-neutral-50/70",
    )


def maintenance_status_section() -> rx.Component:
    return rx.el.section(
        _section_header(
            "calendar-check",
            "Estado de las tareas",
            "Última realización de cada tarea en cada ubicación. Puedes corregir la fecha directamente en la tabla.",
            _filter_button("Todas"),
            _filter_button(STATUS_OVERDUE),
            _filter_button(STATUS_SOON),
            _filter_button(STATUS_OK),
        ),
        rx.el.div(
            rx.el.table(
                rx.el.thead(
                    rx.el.tr(
                        rx.el.th("Tarea", class_name=_TH),
                        rx.el.th("Ubicación", class_name=_TH),
                        rx.el.th("Última vez", class_name=_TH),
                        rx.el.th("Próxima", class_name=_TH),
                        rx.el.th("Estado", class_name=_TH),
                        rx.el.th("", class_name=_TH),
                        class_name="bg-neutral-100",
                    ),
                ),
                rx.el.tbody(rx.foreach(MaintenanceState.filtered_items, _item_row)),
                class_name="table-auto min-w-[48rem] w-full",
            ),
            rx.cond(
                MaintenanceState.filtered_items.length() == 0,
                rx.el.p(
                    "No hay tareas en este estado.",
                    class_name="px-5 py-6 text-center text-sm font-medium text-neutral-500",
                ),
                rx.fragment(),
            ),
            class_name="overflow-x-auto",
        ),
        class_name="w-full overflow-hidden rounded-xl border border-neutral-200 bg-white",
    )


def _task_row(task: MaintTask) -> rx.Component:
    return rx.el.tr(
        rx.el.td(rx.el.p(task["name"], class_name="text-sm font-semibold text-neutral-900"), class_name=_TD),
        rx.el.td(rx.el.span(task["period_display"], class_name="text-sm font-medium text-neutral-700"), class_name=_TD),
        rx.el.td(rx.el.span(task["locations_count"], class_name="text-sm font-medium text-neutral-700"), class_name=_TD),
        rx.el.td(
            rx.el.div(
                rx.el.button(
                    rx.icon("pencil", class_name="h-3.5 w-3.5"), rx.el.span("Editar"),
                    type="button", on_click=MaintenanceState.open_edit_task(task["id"]),
                    class_name=_BTN_SECONDARY,
                ),
                rx.el.button(
                    rx.icon("trash-2", class_name="h-3.5 w-3.5"), rx.el.span("Borrar"),
                    type="button", on_click=MaintenanceState.ask_delete_task(task["id"]),
                    class_name=_BTN_DANGER,
                ),
                class_name="flex justify-end gap-2",
            ),
            class_name=_TD,
        ),
        class_name="border-t border-neutral-100 hover:bg-neutral-50/70",
    )


def maintenance_tasks_section() -> rx.Component:
    return rx.el.section(
        _section_header(
            "wrench",
            "Tareas",
            "Tareas de mantenimiento, cada cuánto hay que repetirlas y en qué ubicaciones se hacen.",
            rx.el.button(
                rx.icon("plus", class_name="h-4 w-4"), rx.el.span("Nueva tarea"),
                type="button", on_click=MaintenanceState.open_new_task, class_name=_BTN_PRIMARY,
            ),
        ),
        rx.el.div(
            rx.el.table(
                rx.el.thead(
                    rx.el.tr(
                        rx.el.th("Tarea", class_name=_TH),
                        rx.el.th("Plazo", class_name=_TH),
                        rx.el.th("Ubicaciones", class_name=_TH),
                        rx.el.th("", class_name=_TH),
                        class_name="bg-neutral-100",
                    ),
                ),
                rx.el.tbody(rx.foreach(MaintenanceState.tasks, _task_row)),
                class_name="table-auto min-w-[36rem] w-full",
            ),
            class_name="overflow-x-auto",
        ),
        class_name="w-full overflow-hidden rounded-xl border border-neutral-200 bg-white",
    )


def _location_row(loc: MaintLocation) -> rx.Component:
    return rx.el.tr(
        rx.el.td(rx.el.p(loc["name"], class_name="text-sm font-semibold text-neutral-900"), class_name=_TD),
        rx.el.td(rx.el.span(loc["floor"], class_name="text-sm font-medium text-neutral-700"), class_name=_TD),
        rx.el.td(
            rx.el.div(
                rx.el.button(
                    rx.icon("pencil", class_name="h-3.5 w-3.5"), rx.el.span("Editar"),
                    type="button", on_click=MaintenanceState.open_edit_location(loc["id"]),
                    class_name=_BTN_SECONDARY,
                ),
                rx.el.button(
                    rx.icon("trash-2", class_name="h-3.5 w-3.5"), rx.el.span("Borrar"),
                    type="button", on_click=MaintenanceState.ask_delete_location(loc["id"]),
                    class_name=_BTN_DANGER,
                ),
                class_name="flex justify-end gap-2",
            ),
            class_name=_TD,
        ),
        class_name="border-t border-neutral-100 hover:bg-neutral-50/70",
    )


def maintenance_locations_section() -> rx.Component:
    return rx.el.section(
        _section_header(
            "map-pin",
            "Ubicaciones",
            "Estancias y zonas de la casa donde se realizan las tareas.",
            rx.el.button(
                rx.icon("plus", class_name="h-4 w-4"), rx.el.span("Nueva ubicación"),
                type="button", on_click=MaintenanceState.open_new_location, class_name=_BTN_PRIMARY,
            ),
        ),
        rx.el.div(
            rx.el.table(
                rx.el.thead(
                    rx.el.tr(
                        rx.el.th("Ubicación", class_name=_TH),
                        rx.el.th("Planta / zona", class_name=_TH),
                        rx.el.th("", class_name=_TH),
                        class_name="bg-neutral-100",
                    ),
                ),
                rx.el.tbody(rx.foreach(MaintenanceState.locations, _location_row)),
                class_name="table-auto min-w-[28rem] w-full",
            ),
            class_name="overflow-x-auto",
        ),
        class_name="w-full overflow-hidden rounded-xl border border-neutral-200 bg-white",
    )


# ***************************** DIÁLOGOS *****************************

def _dialog_shell(title, body, on_save, save_label: str, open_var, on_open_change, max_w="max-w-md") -> rx.Component:
    return rx.dialog.root(
        rx.dialog.content(
            rx.el.div(
                rx.dialog.title(title, class_name="text-base font-semibold text-neutral-900"),
                rx.dialog.close(
                    rx.el.button(
                        rx.icon("x", class_name="h-4 w-4"),
                        type="button",
                        class_name="flex h-7 w-7 items-center justify-center rounded-lg border border-neutral-200 text-neutral-500 hover:bg-neutral-50",
                    ),
                ),
                class_name="flex items-center justify-between border-b border-neutral-200 px-5 py-3",
            ),
            rx.el.div(body, class_name="flex flex-col gap-4 px-5 py-4"),
            rx.el.div(
                rx.dialog.close(
                    rx.el.button("Cancelar", type="button", class_name="rounded-lg border border-neutral-300 bg-white px-4 py-2 text-sm font-semibold text-neutral-700 hover:bg-neutral-50"),
                ),
                rx.el.button(save_label, type="button", on_click=on_save, class_name="rounded-lg bg-brand-600 px-4 py-2 text-sm font-semibold text-white hover:bg-brand-700"),
                class_name="flex items-center justify-end gap-3 border-t border-neutral-200 px-5 py-3",
            ),
            class_name=f"w-full {max_w} rounded-xl border border-neutral-200 bg-white p-0",
        ),
        open=open_var,
        on_open_change=on_open_change,
    )


def _error(text) -> rx.Component:
    return rx.cond(
        text != "",
        rx.el.p(text, class_name="rounded-lg border border-danger-200 bg-danger-50 p-3 text-sm font-medium text-danger-700"),
        rx.fragment(),
    )


def _location_checkbox(loc: MaintLocation) -> rx.Component:
    return rx.el.label(
        rx.el.input(
            type="checkbox",
            checked=MaintenanceState.task_form_locations.contains(loc["id"]),
            on_change=MaintenanceState.toggle_task_location(loc["id"]),
            class_name="h-4 w-4 accent-brand-600",
        ),
        rx.el.span(loc["name"], class_name="text-sm font-medium text-neutral-800"),
        rx.el.span(loc["floor"], class_name="text-xs font-medium text-neutral-500"),
        class_name="flex cursor-pointer items-center gap-2 rounded-lg px-2 py-1.5 hover:bg-neutral-50",
    )


def task_dialog() -> rx.Component:
    body = rx.fragment(
        rx.el.div(
            rx.el.label("Tarea", class_name=_LABEL),
            rx.el.input(
                value=MaintenanceState.task_form_name,
                on_change=MaintenanceState.set_task_form_name,
                placeholder="Engrase cerraduras y mecanismos",
                class_name=_INPUT,
            ),
            class_name="flex flex-col",
        ),
        rx.el.div(
            rx.el.label("Plazo de vigencia (meses)", class_name=_LABEL),
            rx.el.input(
                type="number", min="1", max="240", step="1",
                value=MaintenanceState.task_form_period,
                on_change=MaintenanceState.set_task_form_period,
                class_name=_INPUT + " max-w-32",
            ),
            rx.el.p("Tiempo hasta que hay que repetir la tarea. 12 = un año.", class_name="mt-1.5 text-xs text-neutral-500"),
            class_name="flex flex-col",
        ),
        rx.el.div(
            rx.el.div(
                rx.el.span("Ubicaciones donde se realiza", class_name=_LABEL),
                rx.el.div(
                    rx.el.button("Todas", type="button", on_click=MaintenanceState.select_all_task_locations,
                                 class_name="text-xs font-semibold text-brand-700 hover:underline"),
                    rx.el.button("Ninguna", type="button", on_click=MaintenanceState.clear_task_locations,
                                 class_name="text-xs font-semibold text-neutral-600 hover:underline"),
                    class_name="flex gap-3",
                ),
                class_name="flex items-center justify-between",
            ),
            rx.el.div(
                rx.foreach(MaintenanceState.locations, _location_checkbox),
                class_name="mt-2 grid max-h-64 grid-cols-1 gap-0.5 overflow-y-auto rounded-lg border border-neutral-200 p-1 sm:grid-cols-2",
            ),
            rx.el.p(
                "Al añadir una ubicación nueva, la tarea aparecerá como vencida hasta que anotes una fecha.",
                class_name="mt-1.5 text-xs text-neutral-500",
            ),
            class_name="flex flex-col",
        ),
        _error(MaintenanceState.task_error),
    )
    return _dialog_shell(
        rx.cond(MaintenanceState.task_form_id == "", "Nueva tarea", "Editar tarea"),
        body,
        MaintenanceState.save_task,
        "Guardar",
        MaintenanceState.task_dialog_open,
        MaintenanceState.set_task_dialog_open,
        max_w="max-w-lg",
    )


def location_dialog() -> rx.Component:
    body = rx.fragment(
        rx.el.div(
            rx.el.label("Ubicación", class_name=_LABEL),
            rx.el.input(
                value=MaintenanceState.location_form_name,
                on_change=MaintenanceState.set_location_form_name,
                placeholder="Hab. 1, Cocina, Terraza...",
                class_name=_INPUT,
            ),
            class_name="flex flex-col",
        ),
        rx.el.div(
            rx.el.label("Planta / zona", class_name=_LABEL),
            rx.el.input(
                value=MaintenanceState.location_form_floor,
                on_change=MaintenanceState.set_location_form_floor,
                placeholder="Planta baja, Planta 1...",
                class_name=_INPUT,
            ),
            class_name="flex flex-col",
        ),
        _error(MaintenanceState.location_error),
    )
    return _dialog_shell(
        rx.cond(MaintenanceState.location_form_id == "", "Nueva ubicación", "Editar ubicación"),
        body,
        MaintenanceState.save_location,
        "Guardar",
        MaintenanceState.location_dialog_open,
        MaintenanceState.set_location_dialog_open,
    )


def delete_confirm_dialog() -> rx.Component:
    return rx.alert_dialog.root(
        rx.alert_dialog.content(
            rx.alert_dialog.title("Confirmar borrado", class_name="text-base font-semibold text-neutral-900"),
            rx.alert_dialog.description(
                rx.el.span("Se eliminará "),
                rx.el.span(MaintenanceState.confirm_label),
                rx.el.span(". Esta acción no se puede deshacer."),
                class_name="mt-2 text-sm text-neutral-600",
            ),
            rx.el.div(
                rx.alert_dialog.cancel(
                    rx.el.button("Cancelar", type="button", class_name="rounded-lg border border-neutral-300 bg-white px-4 py-2 text-sm font-semibold text-neutral-700 hover:bg-neutral-50"),
                ),
                rx.alert_dialog.action(
                    rx.el.button("Borrar", type="button", on_click=MaintenanceState.confirm_delete,
                                 class_name="rounded-lg bg-danger-600 px-4 py-2 text-sm font-semibold text-white hover:bg-danger-700"),
                ),
                class_name="mt-5 flex justify-end gap-3",
            ),
            class_name="w-full max-w-md rounded-xl border border-neutral-200 bg-white p-5",
        ),
        open=MaintenanceState.confirm_open,
        on_open_change=MaintenanceState.set_confirm_open,
    )
