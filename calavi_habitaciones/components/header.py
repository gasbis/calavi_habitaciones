import reflex as rx

from calavi_habitaciones.states.auth_state import AuthState
from calavi_habitaciones.states.occupancy_state import OccupancyState
from calavi_habitaciones.components.change_password import (
    change_password_dialog,
    change_password_trigger,
)

class MenuState(rx.State):
    mobile_menu_open: bool = False

    @rx.event
    def toggle_mobile_menu(self):
        self.mobile_menu_open = not self.mobile_menu_open

    @rx.event
    def close_mobile_menu(self):
        self.mobile_menu_open = False

    @rx.event
    def set_mobile_menu_open(self, value: bool):
        self.mobile_menu_open = value
        
        
def mobile_menu() -> rx.Component:
    return rx.popover.root(
        rx.popover.trigger(
            rx.el.button(
                rx.icon("menu", class_name="h-5 w-5 text-neutral-700"),
                type="button",
                aria_label="Abrir menú de navegación",
                class_name="flex h-9 w-9 items-center justify-center rounded-lg border border-neutral-200 bg-neutral-100 md:hidden",
            ),
        ),
        rx.popover.content(
            rx.el.div(
                menu_item(
                    icon="home", name="Inicio", link="/",
                    on_click_extra=MenuState.close_mobile_menu,
                ),
                menu_item(
                    icon="calendar", name="Habitaciones", link="/habitaciones",
                    on_click_extra=MenuState.close_mobile_menu,
                ),
                menu_item(
                    icon="coins", name="Contabilidad", link="/cuentas",
                    on_click_extra=MenuState.close_mobile_menu,
                ),
                menu_item(
                    icon="users", name="Administradores", link="/administradores",
                    on_click_extra=MenuState.close_mobile_menu,
                ),
                class_name="flex flex-col gap-4 p-4",
            ),
            class_name="w-48 rounded-xl border border-neutral-200 bg-white p-0 shadow-lg",
        ),
        open=MenuState.mobile_menu_open,
        on_open_change=MenuState.set_mobile_menu_open,
    )

def menu_item(icon: str, name: str, link: str, on_click_extra=None) -> rx.Component:
    current_path = rx.State.router.page.path
    is_active = rx.cond(
        link == "/",
        (current_path == "/") | (current_path == "/index"),
        current_path == link,
    )
    return rx.link(
        rx.el.div(
            rx.icon(
                icon,
                class_name=rx.cond(
                    is_active,
                    "h-3 w-3 text-neutral-300",
                    "h-3 w-3 text-neutral-700 transition-colors group-hover:text-neutral-300",
                ),
            ),
            rx.el.span(
                name,
                class_name=rx.cond(
                    is_active,
                    "text-sm font-semibold tracking-tight text-neutral-300",
                    "text-sm font-semibold tracking-tight text-neutral-700 transition-colors group-hover:text-neutral-300",
                ),
            ),
            class_name="group flex items-center gap-2",
        ),
        href=link,
        underline="none",
        on_click=on_click_extra,
    )
    
def menu() -> rx.Component:
    return rx.el.div(
        menu_item(icon="home", name="Inicio", link="/"),
        menu_item(icon="calendar", name="Habitaciones", link="/habitaciones"),
        menu_item(icon="coins", name="Contabilidad", link="/cuentas"),
        menu_item(icon="users", name="Administradores", link="/administradores"),
        class_name="items-center gap-7 md:flex",
    )
    
def page_header() -> rx.Component:
    return rx.el.header(
        rx.el.div(
            rx.el.div(
                rx.link(
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
                    href="/",
                    underline="none",
                ),
                mobile_menu(),
                rx.el.div(
                    rx.el.div(
                        rx.el.span(
                            rx.el.span(class_name="h-1.5 w-1.5 rounded-full bg-success-500"),
                            rx.el.span("Conectado", class_name="text-xs font-semibold text-neutral-600"),
                            class_name="hidden w-fit items-center gap-1.5 rounded-full border border-neutral-200 bg-neutral-100 px-2.5 py-1 sm:flex",
                        ),
                        rx.image(
                            src="https://api.dicebear.com/9.x/notionists/svg?seed=manager@occupancy.app",
                            class_name="hidden size-8 rounded-full bg-neutral-100 sm:block",
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
                            class_name="flex items-center gap-2 rounded-lg border border-neutral-200 bg-neutral-100 px-2.5 py-1.5 text-xs font-semibold text-neutral-600 transition-colors hover:bg-neutral-50 hover:text-neutral-900",
                        ),
                        class_name="flex items-center gap-3",
                    ),
                ),
                class_name="flex w-full items-center justify-between",
            ),
            rx.el.div(
                menu(),
                class_name="hidden w-full border-t border-neutral-200 pt-2 pb-0.2 mt-3 md:block",
            ),
            class_name="mx-auto flex w-full max-w-7xl flex-col px-4 py-3 sm:px-6 lg:px-8",
        ),
        change_password_dialog(),
        class_name="sticky top-0 z-10 w-full border-b border-neutral-200 bg-neutral-50/90 backdrop-blur",
    )


def page_title(page_title: str, page_subtitle: str) -> rx.Component:
    return rx.el.div(
        rx.el.div(
            rx.el.h1(
                page_title,
                class_name="text-2xl font-semibold tracking-tight text-neutral-900 sm:text-3xl",
            ),
            rx.el.p(
                page_subtitle,
                class_name="mt-1 max-w-2xl text-sm font-medium text-neutral-500",
            ),
            class_name="min-w-0",
        ),
        rx.el.div(
            rx.el.div(                    
                rx.el.div(
                    rx.icon("triangle-alert",
                            class_name=rx.cond(
                                OccupancyState.attention_count > 0,
                                "h-3.5 w-3.5 text-danger-600",
                                "h-3.5 w-3.5 text-brand-600"
                                ),
                    ),
                    class_name=rx.cond(
                        OccupancyState.attention_count > 0,
                        "flex h-7 w-7 items-center justify-center rounded-lg bg-warning-100 border border-danger-100",
                        "flex h-7 w-7 items-center justify-center rounded-lg bg-brand-50 border border-brand-100"
                    ),
                ),
                rx.el.span(
                    "Necesita atención",
                    class_name="text-[10px] font-semibold uppercase tracking-wide text-neutral-500",
                ),
                class_name="flex items-center justify-between gap-3",
            ),
            rx.el.p(
                OccupancyState.attention_count.to_string(),
                class_name=rx.cond(
                    OccupancyState.attention_count > 0,
                    "mt-1 text-center text-xl font-semibold tracking-tight text-danger-600",
                    "mt-1 text-center text-xl font-semibold tracking-tight text-neutral-900",
                ),
                
            ),
            rx.el.p(
                rx.cond(
                    OccupancyState.attention_count == 1,
                    "Contrato vencido o finalizando -menos de un mes-",
                    "Contratos vencidos o finalizando -menos de un mes-"
                ),
                class_name="mt-1 text-xs line-clamp-2 font-medium text-neutral-500"
            ),
            class_name=rx.cond(
                OccupancyState.attention_count > 0,
                "max-w-[220px] rounded-xl border border-danger-300 bg-neutral-100 p-4",
                "max-w-[220px] rounded-xl border border-neutral-200 bg-neutral-100 p-4",)            
        ),
        class_name="flex flex-col gap-4 border-b border-neutral-200 pb-5 md:flex-row md:items-start md:justify-between",
    )
