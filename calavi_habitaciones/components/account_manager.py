import reflex as rx
from calavi_habitaciones.states.account_state import AccountState
from calavi_habitaciones.components.account_form import account_dialog

def account_manager_section() -> rx.Component:
    return rx.el.section(
        rx.el.div(
            rx.el.div(
                rx.el.div(
                    rx.icon(
                        "euro", class_name="h-5 w-5 text-brand-600"
                    ),
                    class_name="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-brand-100 bg-brand-50",
                ),
                rx.el.div(
                    rx.el.h2(
                        "Gestión de las anotaciones contables",
                        class_name="text-xl font-semibold tracking-tight text-neutral-900",
                    ),
                    rx.el.p(
                        "Alta, baja o edición de asientos contables de ingresos y gastos",
                        class_name="mt-1 text-sm font-medium text-neutral-500",
                    ),
                    class_name="min-w-0",
                ),
                class_name="flex items-start gap-3",
            ),
            rx.el.div(
                rx.el.button(
                    rx.icon("plus", class_name="h-4 w-4"),
                    rx.el.span("Nuevo apunte"),
                    on_click=AccountState.open_create,
                    class_name="flex w-full items-center justify-center gap-2 rounded-lg bg-brand-600 px-3 py-2 text-sm font-semibold text-white transition-colors hover:bg-brand-700 sm:w-auto",
                ),
                
                class_name="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-2"#"flex w-full flex-col gap-2 sm:w-auto sm:flex-row sm:items-center",
            ),
            class_name="flex flex-col gap-4 border-b border-neutral-200 px-5 py-5 lg:flex-row lg:items-center lg:justify-between sm:px-6",
        ),
        rx.el.div(
            
        ),
        account_dialog(),
        class_name="w-full  rounded-tl-xl rounded-tr-xl bg-neutral-100",
    )