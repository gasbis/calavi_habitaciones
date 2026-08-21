import reflex as rx

from calavi_habitaciones.components.record_form import record_dialog
from calavi_habitaciones.states.occupancy_state import OccupancyState
from calavi_habitaciones.states.record_state import RecordState


def delete_confirmation() -> rx.Component:
    return rx.el.div(
        rx.icon(
            "triangle-alert", class_name="mt-0.5 h-4 w-4 shrink-0 text-danger-600"
        ),
        rx.el.div(
            rx.el.p(
                f"¿Borrar {OccupancyState.selected_room_label}?",
                class_name="text-sm font-semibold text-danger-700",
            ),
            rx.el.p(
                "Esto elimina el registro de ocupación, los datos del residente y el historial de pagos del sistema de seguimiento.",
                class_name="mt-1 text-sm font-medium text-danger-600",
            ),
            rx.el.div(
                rx.el.button(
                    rx.icon("trash-2", class_name="h-4 w-4"),
                    rx.el.span("Borrar registro"),
                    on_click=RecordState.confirm_delete,
                    class_name="flex items-center gap-2 rounded-lg bg-danger-600 px-3 py-2 text-xs font-semibold text-white transition-colors hover:bg-danger-700",
                ),
                rx.el.button(
                    "Cancelar",
                    on_click=RecordState.cancel_delete,
                    class_name="rounded-lg border border-danger-200 bg-neutral-100 px-3 py-2 text-xs font-semibold text-danger-700 transition-colors hover:bg-danger-50",
                ),
                class_name="mt-3 flex flex-wrap items-center gap-2",
            ),
            class_name="min-w-0",
        ),
        class_name="flex items-start gap-2 rounded-lg border border-danger-200 bg-danger-50 p-3",
    )


def termination_notice() -> rx.Component:
    return rx.cond(
        RecordState.termination_notice != "",
        rx.el.div(
            rx.icon("archive", class_name="h-4 w-4 shrink-0 text-brand-600"),
            rx.el.p(
                RecordState.termination_notice,
                class_name="text-sm font-medium text-brand-700",
            ),
            class_name="flex items-start gap-2 rounded-lg border border-brand-200 bg-brand-50 p-3",
        ),
        rx.el.div(),
    )

def notice() -> rx.Component:
    return rx.cond(
        RecordState.notice != "",
        rx.el.div(
            rx.icon("archive", class_name="h-4 w-4 shrink-0 text-brand-600"),
            rx.el.p(
                RecordState.notice,
                class_name="text-sm font-medium text-brand-700",
            ),
            class_name="flex items-start gap-2 rounded-lg border border-brand-200 bg-brand-50 p-3",
        ),
        rx.el.div(),
    )

def termination_confirmation() -> rx.Component:
    return rx.el.div(
        rx.el.div(
            rx.icon(
                "door-closed",
                class_name="mt-0.5 h-4 w-4 shrink-0 text-archive-600",
            ),
            rx.el.div(
                rx.el.p(
                    f" ¿Rescindir contrato de la {OccupancyState.selected_room_label}?",
                    class_name="text-sm font-semibold text-archive-800",
                ),
                rx.el.p(
                    "El registro desaparece de la vista de habitaciones ocupadas. No se borra, sigue disponible en el histórico.",
                    class_name="mt-1 text-sm font-medium text-archive-700",
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
                        class_name="text-xs font-semibold uppercase tracking-wide text-archive-700",
                    ),
                    rx.el.input(
                        id="termination-date",
                        type="date",
                        name="termination_date",
                        default_value=RecordState.termination_date_default,
                        class_name="mt-2 w-full rounded-lg border border-archive-200 bg-neutral-100 px-3 py-2 text-sm font-medium text-neutral-900 outline-hidden focus:border-brand-500 focus:ring-2 focus:ring-brand-200",
                    ),
                    class_name="col-span-1",
                ),
                rx.el.div(
                    rx.el.label(
                        "Comentario",
                        html_for="termination-note",
                        class_name="text-xs font-semibold uppercase tracking-wide text-archive-700",
                    ),
                    rx.el.textarea(
                        id="termination-note",
                        name="termination_note",
                        rows="2",
                        placeholder="Estado de la habitación, gestión de la fianza, etc...",
                        class_name="mt-2 w-full resize-none rounded-lg border border-archive-200 bg-neutral-100 px-3 py-0.5 text-sm font-medium text-neutral-900 placeholder:text-neutral-400 outline-hidden focus:border-brand-500 focus:ring-2 focus:ring-brand-200",
                    ),
                    class_name="col-span-3",
                    
                ),
                class_name="grid grid-cols-4 gap-4",
            ),
            
            rx.cond(
                RecordState.termination_error != "",
                rx.el.p(
                    RecordState.termination_error,
                    class_name="mt-2 text-xs font-medium text-danger-600",
                ),
                rx.el.div(),
            ),
            rx.el.div(
                rx.el.button(
                    rx.icon("door-closed", class_name="h-4 w-4"),
                    rx.el.span("Fin de contrato"),
                    type="submit",
                    class_name="flex items-center gap-2 rounded-lg bg-archive-600 px-3 py-2 text-xs font-semibold text-white transition-colors hover:bg-archive-700",
                ),
                rx.el.button(
                    "Cancelar",
                    type="button",
                    on_click=RecordState.cancel_terminate,
                    class_name="rounded-lg border border-archive-200 bg-neutral-100 px-3 py-2 text-xs font-semibold text-archive-700 transition-colors hover:bg-archive-100",
                ),
                class_name="mt-3 flex flex-wrap items-center gap-2",
            ),
            on_submit=RecordState.confirm_terminate,
            reset_on_submit=False,
            class_name="mt-3",
        ),
        class_name="rounded-lg border border-archive-200 bg-archive-50 p-4",
    )


def extension_notice() -> rx.Component:
    return rx.cond(
        RecordState.extension_notice != "",
        rx.el.div(
            rx.icon(
                "circle-check", class_name="h-4 w-4 shrink-0 text-success-600"
            ),
            rx.el.p(
                RecordState.extension_notice,
                class_name="text-sm font-medium text-success-700",
            ),
            class_name="flex items-start gap-2 rounded-lg border border-success-200 bg-success-50 p-3",
        ),
        rx.el.div(),
    )

def notes_notice() -> rx.Component:
    return rx.cond(
        RecordState.notes_notice != "",
        rx.el.div(
            rx.icon(
                "circle-check", class_name="h-4 w-4 shrink-0 text-success-600"
            ),
            rx.el.p(
                RecordState.notes_notice,
                class_name="text-sm font-medium text-success-700",
            ),
            class_name="flex items-start gap-2 rounded-lg border border-success-200 bg-success-50 p-3",
        ),
        rx.el.div(),
    )

def extension_controls() -> rx.Component:
    return rx.el.div(
        rx.el.div(
            rx.icon("calendar-plus", class_name="h-4 w-4 text-brand-600"),
            rx.el.div(
                rx.el.p(
                    "Prorrogar contrato",
                    class_name="text-sm font-semibold text-neutral-900",
                ),
                rx.el.p(
                    f"Fecha final actual {OccupancyState.selected_room['lease_end']}",
                    class_name="mt-0.5 text-xs font-medium text-neutral-500",
                ),
                class_name="min-w-0",
            ),
            class_name="flex items-start gap-2",
        ),
        rx.el.form(
            rx.el.div(
                rx.el.input(
                    type="date",
                    name="extension_end_date",
                    placeholder="Or choose a new end date",
                    default_value=OccupancyState.selected_room_lease_end_iso,
                    class_name="w-full rounded-lg border border-neutral-300 bg-neutral-100 px-3 py-2 text-sm font-medium text-neutral-700 outline-hidden focus:border-brand-500 focus:ring-2 focus:ring-brand-200",
                ),
                class_name="grid grid-cols-1 gap-2 sm:grid-cols-2",
            ),
            rx.cond(
                RecordState.extension_error != "",
                rx.el.p(
                    RecordState.extension_error,
                    class_name="mt-2 text-xs font-medium text-danger-600",
                ),
                rx.el.div(),
            ),
            rx.el.div(
                rx.el.button(
                    rx.icon("calendar-check", class_name="h-4 w-4"),
                    "Confirmar extensión",
                    type="submit",
                    class_name="flex w-fit items-center gap-2 rounded-lg bg-brand-600 px-3 py-2 text-xs font-semibold text-white transition-colors hover:bg-brand-700",
                ),
                rx.el.button(
                    "Cancelar",
                    type="button",
                    on_click=RecordState.cancel_extend,
                    class_name="rounded-lg border border-brand-200 bg-neutral-100 px-3 py-2 text-xs font-semibold text-brand-700 transition-colors hover:bg-brand-100",
                ),
                class_name="mt-3 flex flex-wrap items-center gap-2",
            ),
            on_submit=RecordState.extend_contract,
            reset_on_submit=False,
            class_name="mt-3",
        ),
        class_name="rounded-lg border border-brand-100 bg-brand-50/50 p-4",
    )
    
def notes_controls() -> rx.Component:
    return rx.el.div(
        rx.el.div(
            rx.icon("pencil_line", class_name="h-4 w-4 text-brand-600"),
            rx.el.div(
                rx.el.p(
                    "Editar observaciones",
                    class_name="text-sm font-semibold text-neutral-900",
                ),
                rx.el.p(
                    f"Observaciones {OccupancyState.selected_room['notes']}",
                    class_name="mt-0.5 text-xs font-medium text-neutral-500",
                ),
                class_name="min-w-0",
            ),
            class_name="flex items-start gap-2",
        ),
        rx.el.form(
            rx.el.div(
                rx.el.input(
                    type="text",
                    name="edit_notes",
                    placeholder="",
                    default_value=OccupancyState.selected_room['notes'],
                    class_name="w-full rounded-lg border border-neutral-300 bg-neutral-100 px-3 py-2 text-sm font-medium text-neutral-700 outline-hidden focus:border-brand-500 focus:ring-2 focus:ring-brand-200",
                ),
                class_name="grid grid-cols-1 gap-2 sm:grid-cols-2",
            ),
            rx.cond(
                RecordState.notes_error != "",
                rx.el.p(
                    RecordState.notes_error,
                    class_name="mt-2 text-xs font-medium text-danger-600",
                ),
                rx.el.div(),
            ),
            rx.el.div(
                rx.el.button(
                    rx.icon("pencil_line", class_name="h-4 w-4"),
                    "Confirmar edición",
                    type="submit",
                    class_name="flex w-fit items-center gap-2 rounded-lg bg-brand-600 px-3 py-2 text-xs font-semibold text-white transition-colors hover:bg-brand-700",
                ),
                rx.el.button(
                    "Cancelar",
                    type="button",
                    on_click=RecordState.cancel_notes,
                    class_name="rounded-lg border border-brand-200 bg-neutral-100 px-3 py-2 text-xs font-semibold text-brand-700 transition-colors hover:bg-brand-100",
                ),
                class_name="mt-3 flex flex-wrap items-center gap-2",
            ),
            on_submit=RecordState.confirm_notes,
            reset_on_submit=False,
            class_name="mt-3",
        ),
        class_name="rounded-lg border border-brand-100 bg-brand-50/50 p-4",
    )

def change_room_controls() -> rx.Component:
    return rx.el.div(
            rx.el.div(
                rx.icon("bed_double", class_name="h-4 w-4 text-brand-600"),
                rx.el.div(
                    rx.el.p(
                        "Cambiar habitación",
                        class_name="text-sm font-semibold text-neutral-900",
                    ),
                    rx.el.p(
                        f"Habitación actual {OccupancyState.selected_room['room']}",
                        class_name="mt-0.5 text-xs font-medium text-neutral-500",
                    ),
                    class_name="min-w-0",
                ),
                class_name="flex items-start gap-2",
            ),
            rx.el.form(
                rx.el.div(
                    rx.el.div(
                        rx.el.label(
                            "Habitación existente (sin arrendamiento activo)",
                            class_name="text-xs font-semibold uppercase tracking-wide text-neutral-500",
                        ),
                        rx.el.select(
                            rx.el.option("-- Selecciona habitación --", value=""),
                            rx.foreach(
                                RecordState.room_available,
                                lambda r: rx.el.option(r["room"], value=r["id"]),
                            ),
                            value=RecordState.room_subform_selected_id,
                            on_change=RecordState.set_room_subform_selected_id,
                            class_name="mt-2 w-full rounded-lg border border-neutral-300 bg-neutral-100 px-3 py-2 text-sm outline-hidden",
                        ),
                        class_name="flex flex-col",
                    ),
                    class_name="grid grid-cols-1 gap-2 sm:grid-cols-2",
                ),
                rx.cond(
                    RecordState.change_room_error != "",
                    rx.el.p(
                        RecordState.change_room_error,
                        class_name="mt-2 text-xs font-medium text-danger-600",
                    ),
                    rx.el.div(),
                ),
                rx.el.div(
                    rx.el.button(
                        rx.icon("door_open", class_name="h-4 w-4"),
                        "Confirmar habitación",
                        type="submit",
                        class_name="flex w-fit items-center gap-2 rounded-lg bg-brand-600 px-3 py-2 text-xs font-semibold text-white transition-colors hover:bg-brand-700",
                    ),
                    rx.el.button(
                        "Cancelar",
                        type="button",
                        on_click=RecordState.cancel_change_room,
                        class_name="rounded-lg border border-brand-200 bg-neutral-100 px-3 py-2 text-xs font-semibold text-brand-700 transition-colors hover:bg-brand-100",
                    ),
                    class_name="mt-3 flex flex-wrap items-center gap-2",
                ),
                on_submit=RecordState.change_room,
                reset_on_submit=False,
                class_name="mt-3",
            ),
            class_name="rounded-lg border border-brand-100 bg-brand-50/50 p-4",
        )


def record_manager_section() -> rx.Component:
    return rx.el.section(
        rx.el.div(
            rx.el.div(
                rx.el.div(
                    rx.icon(
                        "clipboard-list", class_name="h-5 w-5 text-brand-600"
                    ),
                    class_name="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-brand-100 bg-brand-50",
                ),
                rx.el.div(
                    rx.el.h2(
                        "Gestión de los contratos de alquiler",
                        class_name="text-xl font-semibold tracking-tight text-neutral-900",
                    ),
                    rx.el.p(
                        "Alta, baja, prórroga y cambio de habitación de cualquiera de los contratos en vigor.",
                        class_name="mt-1 text-sm font-medium text-neutral-500",
                    ),
                    class_name="min-w-0",
                ),
                class_name="flex items-start gap-3",
            ),
            rx.el.div(
                rx.el.button(
                    rx.icon("plus", class_name="h-4 w-4"),
                    rx.el.span("Nuevo alquiler"),
                    on_click=RecordState.open_create,
                    class_name="flex w-full items-center justify-center gap-2 rounded-lg bg-brand-600 px-3 py-2 text-sm font-semibold text-white transition-colors hover:bg-brand-700 sm:w-auto",
                ),
                rx.el.button(
                    rx.icon("pencil-line", class_name="h-4 w-4"),
                    rx.el.span("Editar observ."),
                    on_click=RecordState.request_notes,
                    disabled=~OccupancyState.has_selection,
                    class_name="flex w-full items-center justify-center gap-2 rounded-lg border border-neutral-300 bg-neutral-100 px-3 py-2 text-sm font-semibold text-neutral-700 transition-colors hover:border-brand-300 hover:bg-brand-50 hover:text-brand-700 disabled:cursor-not-allowed disabled:opacity-50 sm:w-auto",
                ),
                rx.el.button(
                    rx.icon("calendar-plus", class_name="h-4 w-4"),
                    rx.el.span("Prórroga contrato"),
                    on_click=RecordState.request_extend,
                    disabled=~OccupancyState.has_selection,
                    class_name="flex w-full items-center justify-center gap-2 rounded-lg border border-neutral-300 bg-neutral-100 px-3 py-2 text-sm font-semibold text-neutral-700 transition-colors hover:border-brand-300 hover:bg-brand-50 hover:text-brand-700 disabled:cursor-not-allowed disabled:opacity-50 sm:w-auto",
                ),
                rx.el.button(
                    rx.icon("bed_double", class_name="h-4 w-4"),
                    rx.el.span("Cambio de habitación"),
                    on_click=RecordState.request_change_room,
                    disabled=~OccupancyState.has_selection,
                    class_name="flex w-full items-center justify-center gap-2 rounded-lg border border-neutral-300 bg-neutral-100 px-3 py-2 text-sm font-semibold text-neutral-700 transition-colors hover:border-brand-300 hover:bg-brand-50 hover:text-brand-700 disabled:cursor-not-allowed disabled:opacity-50 sm:w-auto",
                ),
                rx.el.button(
                    rx.icon("door-closed", class_name="h-4 w-4"),
                    rx.el.span("Finalizar contrato"),
                    on_click=RecordState.request_terminate,
                    disabled=~OccupancyState.has_selection,
                    class_name="flex w-full items-center justify-center gap-2 rounded-lg border border-neutral-300 bg-neutral-100 px-3 py-2 text-sm font-semibold text-neutral-700 transition-colors hover:border-archive-300 hover:bg-archive-50 hover:text-archive-700 disabled:cursor-not-allowed disabled:opacity-50 sm:w-auto",
                ),                
                rx.el.button(
                    rx.icon("trash-2", class_name="h-4 w-4"),
                    rx.el.span("Borrar registro"),
                    on_click=RecordState.request_delete,
                    disabled=~OccupancyState.has_selection,
                    class_name="flex w-full items-center justify-center gap-2 rounded-lg border border-neutral-300 bg-neutral-100 px-3 py-2 text-sm font-semibold text-neutral-700 transition-colors hover:border-danger-300 hover:bg-danger-50 hover:text-danger-700 disabled:cursor-not-allowed disabled:opacity-50 sm:w-auto",
                ),
                class_name="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-2"#"flex w-full flex-col gap-2 sm:w-auto sm:flex-row sm:items-center",
            ),
            class_name="flex flex-col gap-4 border-b border-neutral-200 px-5 py-5 lg:flex-row lg:items-center lg:justify-between sm:px-6",
        ),
        rx.el.div(
            rx.el.div(
                rx.icon(
                    "mouse-pointer-click",
                    class_name="h-4 w-4 shrink-0 text-neutral-400",
                ),
                rx.el.span(
                    OccupancyState.selected_room_label,
                    class_name="text-sm font-semibold text-neutral-700",
                ),
                class_name="flex w-fit items-center gap-2 rounded-lg border border-neutral-200 bg-neutral-50 px-3 py-2",
            ),
            rx.el.div(
                rx.icon("archive", class_name="h-4 w-4 shrink-0 text-neutral-400"),
                rx.el.span(
                    f"{OccupancyState.terminated_count} registros en histórico",
                    class_name="text-sm font-semibold text-neutral-700",
                ),
                class_name="flex w-fit items-center gap-2 rounded-lg border border-neutral-200 bg-neutral-50 px-3 py-2",
            ),
            notice(),
            termination_notice(),
            extension_notice(),
            notes_notice(),
            
            rx.cond(
                RecordState.has_termination_target,
                termination_confirmation(),
                rx.el.div(),
            ),
            rx.cond(
                RecordState.has_notes_target,
                notes_controls(),
                rx.el.div(),
            ),
            rx.cond(
                RecordState.has_extension_target,
                extension_controls(),
                rx.el.div(),
            ),
            rx.cond(
                RecordState.has_change_room_target,
                change_room_controls(),
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
        class_name="w-full rounded-xl border border-neutral-200 bg-neutral-100",
    )
