import reflex as rx

from calavi_habitaciones.components.record_form import record_dialog
from calavi_habitaciones.states.occupancy_state import OccupancyState
from calavi_habitaciones.states.record_state import RecordState


def delete_confirmation() -> rx.Component:
    return rx.el.div(
        rx.icon(
            "triangle-alert", class_name="mt-0.5 h-4 w-4 shrink-0 text-red-600"
        ),
        rx.el.div(
            rx.el.p(
                f"¿Borrar {OccupancyState.selected_room_label}?",
                class_name="text-sm font-semibold text-red-700",
            ),
            rx.el.p(
                "Esto elimina el registro de ocupación, los datos del residente y el historial de pagos del sistema de seguimiento.",
                class_name="mt-1 text-sm font-medium text-red-600",
            ),
            rx.el.div(
                rx.el.button(
                    rx.icon("trash-2", class_name="h-4 w-4"),
                    rx.el.span("Borrar registro"),
                    on_click=RecordState.confirm_delete,
                    class_name="flex items-center gap-2 rounded-lg bg-red-600 px-3 py-2 text-xs font-semibold text-white transition-colors hover:bg-red-700",
                ),
                rx.el.button(
                    "Cancelar",
                    on_click=RecordState.cancel_delete,
                    class_name="rounded-lg border border-red-200 bg-white px-3 py-2 text-xs font-semibold text-red-700 transition-colors hover:bg-red-50",
                ),
                class_name="mt-3 flex flex-wrap items-center gap-2",
            ),
            class_name="min-w-0",
        ),
        class_name="flex items-start gap-2 rounded-lg border border-red-200 bg-red-50 p-3",
    )


def termination_notice() -> rx.Component:
    return rx.cond(
        RecordState.termination_notice != "",
        rx.el.div(
            rx.icon("archive", class_name="h-4 w-4 shrink-0 text-violet-600"),
            rx.el.p(
                RecordState.termination_notice,
                class_name="text-sm font-medium text-violet-700",
            ),
            class_name="flex items-start gap-2 rounded-lg border border-violet-200 bg-violet-50 p-3",
        ),
        rx.el.div(),
    )


def termination_confirmation() -> rx.Component:
    return rx.el.div(
        rx.el.div(
            rx.icon(
                "door-closed",
                class_name="mt-0.5 h-4 w-4 shrink-0 text-amber-600",
            ),
            rx.el.div(
                rx.el.p(
                    f" ¿Rescindir contrato de la {OccupancyState.selected_room_label}?",
                    class_name="text-sm font-semibold text-amber-800",
                ),
                rx.el.p(
                    "El registro desaparece de la vista de habitaciones ocupadas. No se borra. El registro sigue disponible en el histórico.",
                    class_name="mt-1 text-sm font-medium text-amber-700",
                ),
                class_name="min-w-0",
            ),
            class_name="flex items-start gap-2",
        ),
        rx.el.form(
            rx.el.div(
                rx.el.div(
                    rx.el.label(
                        "Fecha de finalización",
                        html_for="termination-date",
                        class_name="text-xs font-semibold uppercase tracking-wide text-amber-700",
                    ),
                    rx.el.input(
                        id="termination-date",
                        type="date",
                        name="termination_date",
                        class_name="mt-2 w-full rounded-lg border border-amber-200 bg-white px-3 py-2 text-sm font-medium text-gray-900 outline-hidden focus:border-violet-500 focus:ring-2 focus:ring-violet-200",
                    ),
                    class_name="flex w-full flex-col",
                ),
                rx.el.div(
                    rx.el.label(
                        "Motivo",
                        html_for="termination-reason",
                        class_name="text-xs font-semibold uppercase tracking-wide text-amber-700",
                    ),
                    rx.el.div(
                        rx.el.select(
                            rx.el.option("Selecciona el motivo", value=""),
                            rx.foreach(
                                RecordState.termination_reason_options,
                                lambda option: rx.el.option(
                                    option, value=option
                                ),
                            ),
                            id="termination-reason",
                            name="termination_reason",
                            class_name="w-full appearance-none rounded-lg border border-amber-200 bg-white py-2 pl-3 pr-9 text-sm font-medium text-gray-900 outline-hidden focus:border-violet-500 focus:ring-2 focus:ring-violet-200",
                        ),
                        rx.icon(
                            "chevron-down",
                            class_name="pointer-events-none absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-amber-500",
                        ),
                        class_name="relative mt-2 w-full",
                    ),
                    class_name="flex w-full flex-col",
                ),
                class_name="grid grid-cols-1 gap-3 sm:grid-cols-2",
            ),
            rx.el.div(
                rx.el.label(
                    "Comentario",
                    html_for="termination-note",
                    class_name="text-xs font-semibold uppercase tracking-wide text-amber-700",
                ),
                rx.el.textarea(
                    id="termination-note",
                    name="termination_note",
                    rows="2",
                    placeholder="Estado de la habitación, gestión de la fianza, etc...",
                    class_name="mt-2 w-full resize-none rounded-lg border border-amber-200 bg-white px-3 py-2 text-sm font-medium text-gray-900 placeholder:text-gray-400 outline-hidden focus:border-violet-500 focus:ring-2 focus:ring-violet-200",
                ),
                class_name="mt-3 flex w-full flex-col",
            ),
            rx.cond(
                RecordState.termination_error != "",
                rx.el.p(
                    RecordState.termination_error,
                    class_name="mt-2 text-xs font-medium text-red-600",
                ),
                rx.el.div(),
            ),
            rx.el.div(
                rx.el.button(
                    rx.icon("door-closed", class_name="h-4 w-4"),
                    rx.el.span("Fin de contrato"),
                    type="submit",
                    class_name="flex items-center gap-2 rounded-lg bg-amber-600 px-3 py-2 text-xs font-semibold text-white transition-colors hover:bg-amber-700",
                ),
                rx.el.button(
                    "Cancelar",
                    type="button",
                    on_click=RecordState.cancel_terminate,
                    class_name="rounded-lg border border-amber-200 bg-white px-3 py-2 text-xs font-semibold text-amber-700 transition-colors hover:bg-amber-100",
                ),
                class_name="mt-3 flex flex-wrap items-center gap-2",
            ),
            on_submit=RecordState.confirm_terminate,
            reset_on_submit=False,
            class_name="mt-3",
        ),
        class_name="rounded-lg border border-amber-200 bg-amber-50 p-4",
    )


def extension_notice() -> rx.Component:
    return rx.cond(
        RecordState.extension_notice != "",
        rx.el.div(
            rx.icon(
                "circle-check", class_name="h-4 w-4 shrink-0 text-green-600"
            ),
            rx.el.p(
                RecordState.extension_notice,
                class_name="text-sm font-medium text-green-700",
            ),
            class_name="flex items-start gap-2 rounded-lg border border-green-200 bg-green-50 p-3",
        ),
        rx.el.div(),
    )


def extension_controls() -> rx.Component:
    return rx.el.div(
        rx.el.div(
            rx.icon("calendar-plus", class_name="h-4 w-4 text-violet-600"),
            rx.el.div(
                rx.el.p(
                    "Prorrogar contrato",
                    class_name="text-sm font-semibold text-gray-900",
                ),
                rx.el.p(
                    f"Fecha final actual {OccupancyState.selected_room['lease_end']} · {OccupancyState.selected_room['status']}",
                    class_name="mt-0.5 text-xs font-medium text-gray-500",
                ),
                class_name="min-w-0",
            ),
            class_name="flex items-start gap-2",
        ),
        rx.el.form(
            rx.el.div(
                # rx.el.select(
                #     rx.el.option("Selecciona extensión", value=""),
                #     rx.foreach(
                #         RecordState.extension_options,
                #         lambda option: rx.el.option(option, value=option),
                #     ),
                #     name="extension_option",
                #     class_name="w-full appearance-none rounded-lg border border-gray-300 bg-white px-3 py-2 text-sm font-medium text-gray-700 outline-hidden focus:border-violet-500 focus:ring-2 focus:ring-violet-200",
                # ),
                rx.el.input(
                    type="date",
                    name="extension_end_date",
                    placeholder="Or choose a new end date",
                    class_name="w-full rounded-lg border border-gray-300 bg-white px-3 py-2 text-sm font-medium text-gray-700 outline-hidden focus:border-violet-500 focus:ring-2 focus:ring-violet-200",
                ),
                class_name="grid grid-cols-1 gap-2 sm:grid-cols-2",
            ),
            rx.cond(
                RecordState.extension_error != "",
                rx.el.p(
                    RecordState.extension_error,
                    class_name="mt-2 text-xs font-medium text-red-600",
                ),
                rx.el.div(),
            ),
            rx.el.div(
                rx.el.button(
                    rx.icon("calendar-check", class_name="h-4 w-4"),
                    "Confirmar extensión",
                    type="submit",
                    class_name="flex w-fit items-center gap-2 rounded-lg bg-violet-600 px-3 py-2 text-xs font-semibold text-white transition-colors hover:bg-violet-700",
                ),
                rx.el.button(
                    "Cancelar",
                    type="button",
                    on_click=RecordState.cancel_extend,
                    class_name="rounded-lg border border-violet-200 bg-white px-3 py-2 text-xs font-semibold text-violet-700 transition-colors hover:bg-violet-100",
                ),
                class_name="mt-3 flex flex-wrap items-center gap-2",
            ),
            on_submit=RecordState.extend_contract,
            reset_on_submit=False,
            class_name="mt-3",
        ),
        class_name="rounded-lg border border-violet-100 bg-violet-50/50 p-4",
    )


def manager_notice() -> rx.Component:
    return rx.cond(
        RecordState.notice != "",
        rx.el.div(
            rx.icon(
                "circle-check", class_name="h-4 w-4 shrink-0 text-violet-600"
            ),
            rx.el.p(
                RecordState.notice,
                class_name="text-sm font-medium text-violet-700",
            ),
            class_name="flex items-start gap-2 rounded-lg border border-violet-200 bg-violet-50 p-3",
        ),
        rx.el.div(),
    )


def record_manager_section() -> rx.Component:
    return rx.el.section(
        rx.el.div(
            rx.el.div(
                rx.el.div(
                    rx.icon(
                        "clipboard-list", class_name="h-5 w-5 text-violet-600"
                    ),
                    class_name="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-violet-100 bg-violet-50",
                ),
                rx.el.div(
                    rx.el.h2(
                        "Gestión de los registros de alquiler",
                        class_name="text-xl font-semibold tracking-tight text-gray-900",
                    ),
                    rx.el.p(
                        "Crea, edita o elimina registros de habitaciones ocupadas. Los cambios actualizan instantáneamente las fichas, los filtros, los resúmenes y los detalles de los inquilinos.",
                        class_name="mt-1 text-sm font-medium text-gray-500",
                    ),
                    class_name="min-w-0",
                ),
                class_name="flex items-start gap-3",
            ),
            rx.el.div(
                rx.el.button(
                    rx.icon("plus", class_name="h-4 w-4"),
                    rx.el.span("Alta alquiler"),
                    on_click=RecordState.open_create,
                    class_name="flex w-full items-center justify-center gap-2 rounded-lg bg-violet-600 px-3 py-2 text-sm font-semibold text-white transition-colors hover:bg-violet-700 sm:w-auto",
                ),
                rx.el.button(
                    rx.icon("pencil", class_name="h-4 w-4"),
                    rx.el.span("Editar contrato"),
                    on_click=RecordState.open_edit,
                    disabled=~OccupancyState.has_selection,
                    class_name="flex w-full items-center justify-center gap-2 rounded-lg border border-gray-300 bg-white px-3 py-2 text-sm font-semibold text-gray-700 transition-colors hover:border-violet-300 hover:bg-violet-50 hover:text-violet-700 disabled:cursor-not-allowed disabled:opacity-50 sm:w-auto",
                ),
                rx.el.button(
                    rx.icon("door-closed", class_name="h-4 w-4"),
                    rx.el.span("Finalizar contrato"),
                    on_click=RecordState.request_terminate,
                    disabled=~OccupancyState.has_selection,
                    class_name="flex w-full items-center justify-center gap-2 rounded-lg border border-gray-300 bg-white px-3 py-2 text-sm font-semibold text-gray-700 transition-colors hover:border-amber-300 hover:bg-amber-50 hover:text-amber-700 disabled:cursor-not-allowed disabled:opacity-50 sm:w-auto",
                ),
                rx.el.button(
                    rx.icon("calendar-plus", class_name="h-4 w-4"),
                    rx.el.span("Prórroga contrato"),
                    on_click=RecordState.request_extend,
                    disabled=~OccupancyState.has_selection,
                    class_name="flex w-full items-center justify-center gap-2 rounded-lg border border-gray-300 bg-white px-3 py-2 text-sm font-semibold text-gray-700 transition-colors hover:border-violet-300 hover:bg-violet-50 hover:text-violet-700 disabled:cursor-not-allowed disabled:opacity-50 sm:w-auto",
                ),
                rx.el.button(
                    rx.icon("trash-2", class_name="h-4 w-4"),
                    rx.el.span("Borrar registro"),
                    on_click=RecordState.request_delete,
                    disabled=~OccupancyState.has_selection,
                    class_name="flex w-full items-center justify-center gap-2 rounded-lg border border-gray-300 bg-white px-3 py-2 text-sm font-semibold text-gray-700 transition-colors hover:border-red-300 hover:bg-red-50 hover:text-red-700 disabled:cursor-not-allowed disabled:opacity-50 sm:w-auto",
                ),
                class_name="flex w-full flex-col gap-2 sm:w-auto sm:flex-row sm:items-center",
            ),
            class_name="flex flex-col gap-4 border-b border-gray-200 px-5 py-5 lg:flex-row lg:items-center lg:justify-between sm:px-6",
        ),
        rx.el.div(
            rx.el.div(
                rx.icon(
                    "mouse-pointer-click",
                    class_name="h-4 w-4 shrink-0 text-gray-400",
                ),
                rx.el.span(
                    OccupancyState.selected_room_label,
                    class_name="text-sm font-semibold text-gray-700",
                ),
                class_name="flex w-fit items-center gap-2 rounded-lg border border-gray-200 bg-gray-50 px-3 py-2",
            ),
            rx.el.div(
                rx.icon("archive", class_name="h-4 w-4 shrink-0 text-gray-400"),
                rx.el.span(
                    f"{OccupancyState.terminated_count} registros en histórico",
                    class_name="text-sm font-semibold text-gray-700",
                ),
                class_name="flex w-fit items-center gap-2 rounded-lg border border-gray-200 bg-gray-50 px-3 py-2",
            ),
            manager_notice(),
            termination_notice(),
            extension_notice(),
            rx.cond(
                RecordState.has_termination_target,
                termination_confirmation(),
                rx.el.div(),
            ),
            rx.cond(
                RecordState.has_extension_target,
                extension_controls(),
                rx.el.div(),
            ),
            rx.cond(
                RecordState.has_delete_target,
                delete_confirmation(),
                rx.el.div(),
            ),
            class_name="flex flex-col gap-3 px-5 py-5 sm:px-6",
        ),
        record_dialog(),
        class_name="w-full rounded-xl border border-gray-200 bg-white",
    )
