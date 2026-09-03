import reflex as rx

from calavi_habitaciones.components.admin_users import admin_management_section
from calavi_habitaciones.components.auth import login_screen
from calavi_habitaciones.components.header import page_header, page_title
from calavi_habitaciones.components.summary import summary_section
from calavi_habitaciones.states.auth_state import AuthState
from calavi_habitaciones.components.rooms_occupancy import rooms_occupancy_section

title="Inicio"
subtitle="Vista general del estado de la casa: ocupación de las habitaciones y estado de las cuentas."
def summary_page() -> rx.Component:
    return rx.el.main(
        page_header(),
        rx.el.div(
            page_title(title, subtitle),
            summary_section(),
            rooms_occupancy_section(),
            admin_management_section(),
            class_name="mx-auto flex w-full max-w-7xl flex-col gap-8 px-4 py-8 sm:px-6 lg:px-8",
        ),
        class_name="min-h-screen w-full bg-neutral-50 font-['Inter']",
    )


def index() -> rx.Component:
    return rx.cond(AuthState.is_authenticated, summary_page(), login_screen())


