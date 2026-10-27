import reflex as rx

from calavi_habitaciones.components.auth import login_screen
from calavi_habitaciones.components.header import page_header, page_title
from calavi_habitaciones.components.maintenance import (
    delete_confirm_dialog,
    location_dialog,
    maintenance_locations_section,
    maintenance_status_section,
    maintenance_tasks_section,
    task_dialog,
)
from calavi_habitaciones.states.auth_state import AuthState

title = "Mantenimiento"
subtitle = "Control de las tareas de mantenimiento de la casa: cuándo se hicieron por última vez y cuándo toca repetirlas."


def maintenance_page() -> rx.Component:
    return rx.el.main(
        page_header(),
        rx.el.div(
            page_title(title, subtitle),
            maintenance_status_section(),
            maintenance_tasks_section(),
            maintenance_locations_section(),
            task_dialog(),
            location_dialog(),
            delete_confirm_dialog(),
            class_name="mx-auto flex w-full max-w-7xl flex-col gap-8 px-4 py-8 sm:px-6 lg:px-8",
        ),
        class_name="min-h-screen w-full bg-neutral-50 font-['Inter']",
    )


def mantenimiento() -> rx.Component:
    return rx.cond(AuthState.is_authenticated, maintenance_page(), login_screen())
