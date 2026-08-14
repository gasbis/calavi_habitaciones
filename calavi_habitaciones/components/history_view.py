import reflex as rx

from calavi_habitaciones.states.occupancy_state import OccupancyState, Lease


def history_card(item: Lease) -> rx.Component:
    return rx.el.button(
        rx.el.div(
            rx.el.div(
                rx.icon("archive", class_name="h-5 w-5 text-amber-600"),
                class_name="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-amber-100 bg-amber-50",
            ),
            rx.el.div(
                rx.el.p(
                    f"Habitación {item['room']}",
                    class_name="text-base font-semibold text-gray-900",
                ),
                rx.el.p(
                    f"{item['tenant']}",
                    class_name="text-sm font-medium text-gray-500",
                ),
                class_name="min-w-0 text-left",
            ),
            class_name="flex items-center gap-3",
        ),
        rx.el.div(
            rx.el.span(
                "Finalizado",
                class_name="w-fit rounded-full border border-amber-200 bg-amber-100 px-2.5 py-1 text-xs font-semibold text-amber-700",
            ),
            rx.el.p(
                f"{item['termination_date']}",# · {item['termination_reason']}",
                class_name="mt-3 text-left text-xs font-medium text-gray-500",
            ),
            class_name="mt-4 border-t border-gray-100 pt-4",
        ),
        on_click=OccupancyState.select_history_room(item["id"]),
        type="button",
        class_name=rx.cond(
            OccupancyState.history_selected_id == item["id"],
            "flex w-full flex-col rounded-xl border-2 border-violet-500 bg-white p-5 text-left ring-2 ring-violet-100",
            "flex w-full flex-col rounded-xl border border-gray-200 bg-white p-5 text-left transition-colors hover:border-violet-300",
        ),
    )


def history_detail() -> rx.Component:
    return rx.el.aside(
        rx.el.div(
            rx.el.div(
                rx.el.span(
                    "Datos del contrato",
                    class_name="text-sm font-semibold text-gray-900",
                ),
                rx.el.button(
                    rx.icon("x", class_name="h-4 w-4"),
                    on_click=OccupancyState.clear_history_selection,
                    aria_label="Close past tenant details",
                    class_name="flex h-8 w-8 items-center justify-center rounded-lg border border-gray-200 text-gray-500 hover:bg-gray-50",
                ),
                class_name="flex items-center justify-between border-b border-gray-200 px-5 py-3",
            ),
            rx.el.div(
                rx.el.div(
                    rx.image(
                        src=f"https://api.dicebear.com/9.x/notionists/svg?seed={OccupancyState.selected_history_room['tenant_email']}",
                        class_name="size-12 rounded-full bg-gray-100",
                    ),
                    rx.el.div(
                        rx.el.p(
                            OccupancyState.selected_history_room["tenant"],
                            class_name="text-lg font-semibold text-gray-900",
                        ),
                        rx.el.p(
                            f"Habitación {OccupancyState.selected_history_room['room']}",
                            class_name="text-sm font-medium text-gray-500",
                        ),
                    ),
                    class_name="flex items-center gap-3",
                ),
                rx.el.div(
                    rx.el.span(
                        "Finalizado",
                        class_name="w-fit rounded-full border border-amber-200 bg-amber-100 px-2.5 py-1 text-xs font-semibold text-amber-700",
                    ),
                    rx.el.p(
                        f"Inicio {OccupancyState.selected_history_room['lease_start']}",
                        class_name="mt-2 text-sm font-semibold text-gray-700",
                    ),
                    rx.el.p(
                        f"Fin   {OccupancyState.selected_history_room['termination_date']}",
                        class_name="mt-2 text-sm font-semibold text-gray-700",
                    ),
                    # rx.el.p(
                    #     f"Reason: {OccupancyState.selected_history_room['termination_reason']}",
                    #     class_name="mt-1 text-sm font-medium text-gray-500",
                    # ),
                    # class_name="mt-5 rounded-lg border border-amber-200 bg-amber-50 p-3",
                ),
                rx.el.div(
                    rx.el.p(
                        "Contacto",
                        class_name="text-xs font-semibold uppercase tracking-wide text-gray-500",
                    ),
                    rx.el.p(
                        OccupancyState.selected_history_room["tenant_email"],
                        class_name="mt-2 text-sm font-semibold text-gray-900",
                    ),
                    rx.el.p(
                        OccupancyState.selected_history_room["tenant_phone"],
                        class_name="mt-1 text-sm font-medium text-gray-600",
                    ),
                    rx.el.p(
                        OccupancyState.selected_history_room["notes"],
                        class_name="mt-4 rounded-lg border border-violet-100 bg-violet-50 p-3 text-sm leading-relaxed text-gray-700",
                    ),
                    class_name="mt-5 border-t border-gray-100 pt-5",
                ),
                class_name="p-5",
            ),
            class_name="w-full overflow-hidden rounded-xl border border-gray-200 bg-white",
        ),
        class_name="w-full shrink-0 lg:w-96",
    )


def history_view() -> rx.Component:
    return rx.el.section(
        rx.el.div(
            rx.el.div(
                rx.icon("archive", class_name="h-5 w-5 text-violet-600"),
                rx.el.div(
                    rx.el.h2(
                        "Contratos finalizados",
                        class_name="text-xl font-semibold text-gray-900",
                    ),
                    rx.el.p(
                        f"{OccupancyState.terminated_count} contratos finalizados guardados en el histórico.",
                        class_name="mt-1 text-sm font-medium text-gray-500",
                    ),
                ),
                class_name="flex items-start gap-3",
            ),
            rx.el.div(
                rx.icon(
                    "search",
                    class_name="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400",
                ),
                rx.el.input(
                    placeholder="Buscar por habitación, inquilino...",
                    default_value=OccupancyState.history_search,
                    on_change=OccupancyState.set_history_search.debounce(300),
                    class_name="w-full rounded-lg border border-gray-300 bg-white py-2 pl-9 pr-3 text-sm outline-hidden focus:border-violet-500 focus:ring-2 focus:ring-violet-200",
                ),
                class_name="relative w-full lg:w-80",
            ),
            class_name="flex flex-col gap-4 border-b border-gray-200 px-5 py-5 lg:flex-row lg:items-center lg:justify-between sm:px-6",
        ),
        rx.cond(
            OccupancyState.history_filtered_rooms.length() > 0,
            rx.el.div(
                rx.el.div(
                    rx.foreach(
                        OccupancyState.history_filtered_rooms, history_card
                    ),
                    class_name="grid grid-cols-1 gap-4 md:grid-cols-2",
                ),
                history_detail(),
                class_name="flex flex-col gap-5 lg:flex-row",
            ),
            rx.el.div(
                rx.icon("archive-x", class_name="h-6 w-6 text-gray-400"),
                rx.el.p(
                    "No terminated records match your search.",
                    class_name="mt-3 text-sm font-semibold text-gray-900",
                ),
                class_name="flex flex-col items-center px-6 py-16",
            ),
        ),
        class_name="w-full rounded-xl border border-gray-200 bg-white",
    )
