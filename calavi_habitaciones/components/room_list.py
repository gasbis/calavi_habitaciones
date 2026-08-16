import reflex as rx

from calavi_habitaciones.components.room_card import room_card, room_card_skeleton
from calavi_habitaciones.components.tenant_detail import tenant_detail_panel
from calavi_habitaciones.states.occupancy_state import OccupancyState


def toolbar() -> rx.Component:
    return rx.el.div(
        rx.el.div(
            rx.el.h2(
                "Actualmente ocupadas",
                class_name="text-xl font-semibold tracking-tight text-gray-900",
            ),
            rx.el.p(
                OccupancyState.result_label,
                class_name="text-sm font-medium text-gray-500",
            ),
            class_name="flex flex-col gap-0.5",
        ),
        rx.el.div(
            rx.el.button(
                rx.icon("refresh-cw", class_name="h-4 w-4"),
                rx.el.span("Refrescar", class_name="hidden sm:inline"),
                on_click=OccupancyState.refresh,
                disabled=OccupancyState.is_loading,
                class_name="flex w-full items-center justify-center gap-2 rounded-lg border border-gray-300 bg-white px-3 py-2 text-sm font-semibold text-gray-700 transition-colors hover:bg-gray-50 disabled:opacity-50 sm:w-auto",
            ),
            class_name="flex w-full flex-col gap-3 sm:flex-row sm:items-center sm:justify-end lg:w-auto",
        ),
        class_name="flex w-full flex-col gap-4 lg:flex-row lg:items-center lg:justify-between",
    )


def empty_state() -> rx.Component:
    return rx.el.div(
        rx.el.div(
            rx.icon("search-x", class_name="h-6 w-6 text-violet-600"),
            class_name="flex h-12 w-12 items-center justify-center rounded-xl border border-violet-100 bg-violet-50",
        ),
        rx.el.p(
            "Ninguna habitación ocupada actualmente",
            class_name="mt-4 text-base font-semibold text-gray-900",
        ),
        class_name="flex w-full flex-col items-center justify-center rounded-xl border border-dashed border-gray-300 bg-white px-6 py-16",
    )


def loading_grid() -> rx.Component:
    return rx.el.div(
        rx.foreach(
            rx.Var.create([1, 2, 3, 4, 5, 6]),
            lambda _i: room_card_skeleton(),
        ),
        class_name="grid grid-cols-1 gap-4 md:grid-cols-2",
    )


def rooms_grid() -> rx.Component:
    return rx.cond(
        OccupancyState.filtered_rooms.length() > 0,
        rx.el.div(
            rx.foreach(
                OccupancyState.filtered_rooms,
                lambda item: room_card(item),
            ),
            class_name="grid grid-cols-1 gap-4 md:grid-cols-2",
        ),
        empty_state(),
    )


def room_list_section() -> rx.Component:
    return rx.el.section(
        toolbar(),
        rx.el.div(
            rx.el.div(
                rx.cond(
                    OccupancyState.is_loading, loading_grid(), rooms_grid()
                ),
                class_name="w-full min-w-0 flex-1",
            ),
            tenant_detail_panel(),
            class_name="flex w-full flex-col items-start gap-5 lg:flex-row",
        ),
        class_name="flex w-full flex-col gap-5",
    )
