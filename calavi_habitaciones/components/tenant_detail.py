import reflex as rx

from calavi_habitaciones.components.room_card import status_pill
from calavi_habitaciones.states.occupancy_state import OccupancyState

def section_title(icon: str, label: str) -> rx.Component:
    return rx.el.div(
        rx.icon(icon, class_name="h-4 w-4 text-brand-600"),
        rx.el.span(
            label,
            class_name="text-xs font-semibold uppercase tracking-wide text-neutral-500",
        ),
        class_name="flex items-center gap-2",
    )


def detail_row(label: str, value: rx.Var | str) -> rx.Component:
    return rx.el.div(
        rx.el.span(label, class_name="text-sm font-medium text-neutral-500"),
        rx.el.span(
            value,
            class_name="text-right text-sm font-semibold text-neutral-900",
        ),
        class_name="flex items-start justify-between gap-3",
    )


def contact_link(
    icon: str, value: rx.Var[str], href: rx.Var[str]
) -> rx.Component:
    return rx.el.a(
        rx.icon(icon, class_name="h-4 w-4 shrink-0 text-neutral-400"),
        rx.el.span(value, class_name="truncate text-sm font-semibold"),
        href=href,
        class_name="flex min-w-0 items-center gap-2 rounded-lg border border-neutral-200 bg-neutral-50 px-3 py-2 text-neutral-900 transition-colors hover:border-brand-300 hover:text-brand-700",
    )


def contact_block() -> rx.Component:
    return rx.el.div(
        section_title("contact", "Contacto"),
        rx.el.div(
            contact_link(
                "mail",
                OccupancyState.selected_room["tenant_email"],
                f"mailto:{OccupancyState.selected_room['tenant_email']}",
            ),
            contact_link(
                "phone",
                OccupancyState.selected_room["tenant_phone"],
                f"tel:{OccupancyState.selected_room['tenant_phone']}",
            ),
            class_name="mt-3 flex flex-col gap-2",
        ),
        class_name="border-t border-neutral-100 pt-5",
    )

def lease_block() -> rx.Component:
    return rx.el.div(
        section_title("file-text", "Alquiler"),
        rx.el.div(
            detail_row("Inicio", OccupancyState.selected_room["lease_start"]),
            detail_row("Finalización", OccupancyState.selected_room["lease_end"]),
            detail_row(
                "Alquiler mensual",
                OccupancyState.selected_room['rent_display'],
            ),
            detail_row(
                "Fianza depositada",
                OccupancyState.selected_room['deposit_display'],
            ),
            
            class_name="mt-3 flex flex-col gap-2.5",
        ),
        class_name="mt-5 border-t border-neutral-100 pt-5",
    )

def notes_block() -> rx.Component:
    return rx.el.div(
        section_title("sticky-note", "Observaciones"),
        rx.el.p(
            OccupancyState.selected_room["notes"],
            class_name="mt-3 rounded-lg border border-brand-100 bg-brand-50 p-3 text-sm font-medium leading-relaxed text-neutral-700",
        ),
        class_name="mt-5 border-t border-neutral-100 pt-5",
    )


def detail_header() -> rx.Component:
    return rx.el.div(
        rx.el.div(
            rx.image(
                src=f"https://api.dicebear.com/9.x/notionists/svg?seed={OccupancyState.selected_room['tenant_email']}",
                class_name="size-12 shrink-0 rounded-full bg-neutral-100",
            ),
            rx.el.div(
                rx.el.p(
                    OccupancyState.selected_room["tenant"],
                    class_name="truncate text-lg font-semibold tracking-tight text-neutral-900",
                ),
                rx.el.p(
                    f"Habitación {OccupancyState.selected_room['room']}",
                    class_name="truncate text-sm font-medium text-neutral-500",
                ),
                class_name="min-w-0",
            ),
            class_name="flex min-w-0 items-center gap-3",
        ),
        rx.el.button(
            rx.icon("x", class_name="h-4 w-4"),
            on_click=OccupancyState.clear_selection,
            aria_label="Close tenant details",
            class_name="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border border-neutral-200 bg-neutral-100 text-neutral-500 transition-colors hover:bg-neutral-50 hover:text-neutral-900",
        ),
        class_name="flex items-start justify-between gap-3",
    )


def detail_content() -> rx.Component:
    return rx.el.div(
        detail_header(),
        rx.el.div(
            rx.el.button(
                rx.icon("banknote", class_name="h-4 w-4"),
                rx.el.span(
                    rx.cond(
                        OccupancyState.rent_paid_current_month,
                        "Alquiler cobrado",
                        "Anotar cobro",
                    )
                ),
                on_click=OccupancyState.register_rent_payment,
                disabled=OccupancyState.rent_paid_current_month,
                class_name="flex w-full items-center justify-center gap-2 rounded-lg border border-neutral-300 bg-neutral-100 px-3 py-2 text-sm font-semibold text-neutral-700 transition-colors hover:border-success-300 hover:bg-success-50 hover:text-success-700 disabled:cursor-not-allowed disabled:opacity-50 sm:w-auto",
            ),
            class_name="mt-4 flex flex-wrap items-center gap-2 pb-5",
        ),
        contact_block(),
        lease_block(),
        notes_block(),
        class_name="flex w-full flex-col",
    )


def detail_empty() -> rx.Component:
    return rx.el.div(
        rx.el.div(
            rx.icon("user-round-search", class_name="h-6 w-6 text-brand-600"),
            class_name="flex h-12 w-12 items-center justify-center rounded-xl border border-brand-100 bg-brand-50",
        ),
        rx.el.p(
            "Ningún inquilino seleccionado",
            class_name="mt-4 text-base font-semibold text-neutral-900",
        ),
        rx.el.p(
            "Seleccione cualquier habitación ocupada para ver los datos de contacto del residente, el contrato de arrendamiento, el historial de pagos y las notas sobre la ocupación.",
            class_name="mt-1 max-w-xs text-center text-sm font-medium text-neutral-500",
        ),
        rx.el.div(
            rx.icon("mouse-pointer-click", class_name="h-4 w-4 text-neutral-400"),
            rx.el.span(
                f"{OccupancyState.occupied_count} habitaciones ocupadas",
                class_name="text-xs font-semibold text-neutral-600",
            ),
            class_name="mt-5 flex w-fit items-center gap-2 rounded-full border border-neutral-200 bg-neutral-50 px-3 py-1.5",
        ),
        class_name="flex w-full flex-col items-center justify-center px-6 py-14",
    )


def tenant_detail_panel() -> rx.Component:
    return rx.el.aside(
        rx.el.div(
            rx.el.div(
                rx.el.span(
                    "Detalles inquilino",
                    class_name="text-sm font-semibold text-neutral-900",
                ),
                rx.el.span(
                    rx.cond(OccupancyState.has_selection, "Seleccionado", "Vacío"),
                    class_name=rx.cond(
                        OccupancyState.has_selection,
                        "w-fit rounded-full border border-brand-200 bg-brand-50 px-2.5 py-0.5 text-xs font-semibold text-brand-700",
                        "w-fit rounded-full border border-neutral-200 bg-neutral-50 px-2.5 py-0.5 text-xs font-semibold text-neutral-500",
                    ),
                ),
                class_name="flex items-center justify-between gap-3 border-b border-neutral-200 px-5 py-3",
            ),
            rx.cond(
                OccupancyState.has_selection,
                rx.el.div(detail_content(), class_name="p-5"),
                detail_empty(),
            ),
            class_name="w-full overflow-hidden rounded-xl border border-neutral-200 bg-neutral-100",
        ),
        class_name="w-full shrink-0 lg:sticky lg:top-20 lg:w-[22rem] xl:w-96",
    )
