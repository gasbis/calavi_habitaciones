import reflex as rx
from calavi_habitaciones.components.auth import login_screen
from calavi_habitaciones.states.auth_state import AuthState
from calavi_habitaciones.components.header import page_header, page_title
from calavi_habitaciones.components.account_list import account_list_section
from calavi_habitaciones.components.account_form import account_dialog, delete_confirm_dialog

title="Gestión de la contabilidad"
subtitle="Anotación de los asientos contables así como su edición y anulación"
def contabilidad() -> rx.Component:
    return rx.el.main(
            page_header(),
            rx.el.div(
                page_title(title, subtitle),
                account_list_section(),
                account_dialog(),
                delete_confirm_dialog(),
                class_name="mx-auto flex w-full max-w-7xl flex-col gap-8 px-4 py-8 sm:px-6 lg:px-8",
            ),
            class_name="min-h-screen w-full bg-neutral-50 font-['Inter']",
        )
    
def cuentas() -> rx.Component:
    return rx.cond(AuthState.is_authenticated, contabilidad(), login_screen())