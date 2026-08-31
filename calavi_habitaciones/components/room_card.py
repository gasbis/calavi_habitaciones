import reflex as rx

from calavi_habitaciones.models import _RECORD_STATUSES
from calavi_habitaciones.states.occupancy_state import OccupancyState, Lease


def status_pill(rec_status: rx.Var[str]) -> rx.Component:
    return rx.el.span(
        rec_status,
        class_name=rx.match(
            rec_status,
            (
                _RECORD_STATUSES[0],
                "w-fit rounded-full border border-success-200 bg-success-100 px-2.5 py-1 text-xs font-semibold text-success-700",
            ),
            (
                _RECORD_STATUSES[1],
                "w-fit rounded-full border border-warning-200 bg-warning-100 px-2.5 py-1 text-xs font-semibold text-warning-700",
            ),
            (
                _RECORD_STATUSES[2],
                "w-fit rounded-full border border-danger-200 bg-danger-100 px-2.5 py-1 text-xs font-semibold text-danger-700",
            ),
            "w-fit rounded-full border border-neutral-200 bg-neutral-100 px-2.5 py-1 text-xs font-semibold text-neutral-700",
        ),
    )

   
def meta_row(icon: str, label: str, value: rx.Var | str) -> rx.Component:
    return rx.el.div(
        rx.el.div(
            rx.icon(icon, class_name="h-4 w-4 text-neutral-400"),
            rx.el.span(label, class_name="text-sm font-medium text-neutral-500"),
            class_name="flex items-center gap-2",
        ),
        rx.el.span(value, class_name="text-sm font-semibold text-neutral-900"),
        class_name="flex items-center justify-between gap-3",
    )


def room_card(item: Lease) -> rx.Component:
    
    return rx.el.button(
        rx.el.div(
            rx.el.div(
                rx.el.div(
                    rx.icon("bed-double", class_name="h-5 w-5 text-brand-600"),
                    class_name="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-brand-100 bg-brand-50",
                ),
                rx.el.div(
                    rx.el.p(
                        f"Habitación {item['room']}",
                        class_name="text-base font-semibold tracking-tight text-neutral-900",
                    ),
                    rx.el.p(
                        f"Tipo de cama {item['bed_type']}",
                        class_name="truncate text-xs font-medium text-neutral-500",
                    ),
                ),
                class_name="flex items-center gap-3",
            ),
            status_pill(item["record_status"]),
            class_name="flex items-start justify-between gap-3",
        ),
        
        rx.el.div(
            rx.image(
                src=f"https://api.dicebear.com/9.x/notionists/svg?seed={item['tenant_email']}",
                class_name="size-9 rounded-full bg-neutral-100",
            ),
            rx.el.div(
                rx.el.p(
                    item["tenant"],
                    class_name="truncate text-sm font-semibold text-neutral-900",
                ),
                class_name="min-w-0",
            ),
            class_name="mt-4 flex items-center gap-3 rounded-lg border border-neutral-200 bg-neutral-50 p-3",
        ),
        rx.el.div(
            meta_row("calendar-check", "F_inicio", item["lease_start"]),
            meta_row("calendar-clock", "F_fin", item["lease_end"]),
            meta_row("banknote", "Renta mensual", item["rent_display"]),
            class_name="mt-4 flex flex-col gap-2.5",
        ),        
        on_click=OccupancyState.select_room(item["id"]),
        type="button",
        class_name=rx.cond(
            OccupancyState.selected_id == item["id"],
            "flex w-full cursor-pointer flex-col rounded-xl border-2 border-brand-500 bg-neutral-100 p-5 text-left ring-2 ring-brand-100 transition-colors outline-hidden",
            "flex w-full cursor-pointer flex-col rounded-xl border-2 border-neutral-200 bg-neutral-100 p-5 text-left transition-colors hover:border-brand-300 focus-visible:border-brand-500 outline-hidden",
        ),
    )


def room_card_skeleton() -> rx.Component:
    return rx.el.div(
        rx.el.div(
            rx.el.div(class_name="h-10 w-10 rounded-lg bg-neutral-200"),
            rx.el.div(
                rx.el.div(class_name="h-4 w-24 rounded bg-neutral-200"),
                rx.el.div(class_name="mt-2 h-3 w-32 rounded bg-neutral-100"),
            ),
            class_name="flex items-center gap-3",
        ),
        rx.el.div(class_name="mt-4 h-16 w-full rounded-lg bg-neutral-100"),
        rx.el.div(
            rx.el.div(class_name="h-3 w-full rounded bg-neutral-100"),
            rx.el.div(class_name="h-3 w-5/6 rounded bg-neutral-100"),
            rx.el.div(class_name="h-3 w-2/3 rounded bg-neutral-100"),
            class_name="mt-4 flex flex-col gap-3",
        ),
        class_name="w-full animate-pulse rounded-xl border border-neutral-200 bg-neutral-100 p-5",
    )
