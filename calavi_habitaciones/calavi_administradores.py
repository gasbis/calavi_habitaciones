import reflex as rx

from calavi_habitaciones.components.admin_users import admin_management_section
from calavi_habitaciones.components.auth import login_screen
from calavi_habitaciones.components.header import page_header, page_title
from calavi_habitaciones.states.auth_state import AuthState

title="Administradores"
subtitle="Gestión de usuarios de la web."
def admin_page() -> rx.Component:
    return rx.el.main(
        page_header(),
        rx.el.div(
            page_title(title, subtitle),
            admin_management_section(),
            class_name="mx-auto flex w-full max-w-7xl flex-col gap-8 px-4 py-8 sm:px-6 lg:px-8",
        ),
        class_name="min-h-screen w-full bg-neutral-50 font-['Inter']",
    )


def administradores() -> rx.Component:
    return rx.cond(AuthState.is_authenticated, admin_page(), login_screen())


