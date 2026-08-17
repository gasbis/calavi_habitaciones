import reflex as rx

from calavi_habitaciones.states.auth_state import AuthState
from calavi_habitaciones.states.occupancy_state import OccupancyState
from calavi_habitaciones.components.change_password import (
    change_password_dialog,
    change_password_trigger,
)

def page_header() -> rx.Component:
    return rx.el.header(
        rx.el.div(
            rx.el.div(
                rx.el.div(
                    rx.icon("building-2", class_name="h-4 w-4 text-white"),
                    class_name="flex h-8 w-8 items-center justify-center rounded-lg bg-brand-600",
                ),
                rx.el.span(
                    "Calavi",
                    class_name="text-base font-semibold tracking-tight text-neutral-900",
                ),
                class_name="flex items-center gap-2.5",
            ),
            rx.el.div(
                rx.el.div(
                    rx.el.span(
                        rx.el.span(
                            class_name="h-1.5 w-1.5 rounded-full bg-success-500"
                        ),
                        rx.el.span(
                            "Conectado",
                            class_name="text-xs font-semibold text-neutral-600",
                        ),
                        class_name="flex w-fit items-center gap-1.5 rounded-full border border-neutral-200 bg-white px-2.5 py-1",
                    ),
                    rx.image(
                        src="https://api.dicebear.com/9.x/notionists/svg?seed=manager@occupancy.app",
                        class_name="size-8 rounded-full bg-neutral-100",
                    ),
                    rx.el.div(
                        rx.el.p(
                            AuthState.current_user["name"],
                            class_name="text-sm font-semibold text-neutral-900",
                        ),
                        rx.el.p(
                            AuthState.current_user["role"],
                            class_name="text-xs font-medium text-neutral-500",
                        ),
                        class_name="hidden min-w-0 flex-col sm:flex",
                    ),
                    change_password_trigger(),
                    rx.el.button(
                        rx.icon("log-out", class_name="h-4 w-4"),
                        rx.el.span("Desconectar", class_name="hidden sm:inline"),
                        on_click=AuthState.logout,
                        class_name="flex items-center gap-2 rounded-lg border border-neutral-200 bg-white px-2.5 py-1.5 text-xs font-semibold text-neutral-600 transition-colors hover:bg-neutral-50 hover:text-neutral-900",
                    ),
                    class_name="flex items-center gap-3",
                ),
            ),
            class_name="mx-auto flex w-full max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8",
        ),
        change_password_dialog(),
        class_name="sticky top-0 z-10 w-full border-b border-neutral-200 bg-neutral-50/90 backdrop-blur",
    )


def page_title() -> rx.Component:
    return rx.el.div(
        rx.el.div(
            rx.el.h1(
                "Control de habitaciones",
                class_name="text-2xl font-semibold tracking-tight text-neutral-900 sm:text-3xl",
            ),
            rx.el.p(
                "Todas las habitaciones actualmente ocupadas con información sobre residentes, contratos de alquiler y rentas, todo de un vistazo.",
                class_name="mt-1 max-w-2xl text-sm font-medium text-neutral-500",
            ),
            class_name="min-w-0",
        ),
        rx.el.div(
            rx.icon("calendar-days", class_name="h-4 w-4 text-neutral-400"),
            rx.el.span(
                f"{OccupancyState.occupied_count} ocupadas",
                class_name="text-sm font-semibold text-neutral-700",
            ),
            class_name="flex w-fit items-center gap-2 rounded-lg border border-neutral-200 bg-white px-3 py-2",
        ),
        class_name="flex w-full flex-col gap-4 md:flex-row md:items-end md:justify-between",
    )
