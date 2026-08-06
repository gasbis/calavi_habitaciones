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
            rx.el.div(
                rx.icon(
                    "search",
                    class_name="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400",
                ),
                rx.el.input(
                    placeholder="Busca habitación o inquilino",
                    default_value=OccupancyState.search,
                    on_change=OccupancyState.set_search.debounce(300),
                    class_name="w-full rounded-lg border border-gray-300 bg-white py-2 pl-9 pr-3 text-sm font-medium text-gray-900 placeholder:text-gray-400 focus:border-violet-500 focus:ring-2 focus:ring-violet-200 outline-hidden",
                ),
                class_name="relative w-full sm:w-72",
            ),
            # rx.el.div(
            #     rx.el.select(
            #         rx.foreach(
            #             OccupancyState.buildings,
            #             lambda b: rx.el.option(b, value=b),
            #         ),
            #         value=OccupancyState.building_filter,
            #         on_change=OccupancyState.set_building,
            #         class_name="w-full appearance-none rounded-lg border border-gray-300 bg-white py-2 pl-3 pr-9 text-sm font-medium text-gray-900 focus:border-violet-500 focus:ring-2 focus:ring-violet-200 outline-hidden",
            #     ),
            #     rx.icon(
            #         "chevron-down",
            #         class_name="pointer-events-none absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400",
            #     ),
            #     class_name="relative w-full sm:w-48",
            # ),
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
            "Ninguna habitación ocupada coincide con sus filtros",
            class_name="mt-4 text-base font-semibold text-gray-900",
        ),
        rx.el.p(
            "Try a different building or clear the search to see every occupied room.",
            class_name="mt-1 max-w-sm text-center text-sm font-medium text-gray-500",
        ),
        rx.el.button(
            "Borrar filtros",
            on_click=OccupancyState.clear_filters,
            class_name="mt-5 rounded-lg bg-violet-600 px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-violet-700",
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
