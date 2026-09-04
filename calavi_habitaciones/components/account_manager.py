import reflex as rx
from calavi_habitaciones.states.account_state import AccountState
from calavi_habitaciones.components.account_form import account_dialog


def irpf_dialog() -> rx.Component:
    return rx.cond(
        AccountState.irpf_dialog_open,
        rx.el.div(
            rx.el.div(
                on_click=AccountState.close_irpf_dialog,
                class_name="fixed inset-0 z-40 bg-neutral-900/40",
            ),
            rx.el.div(
                rx.el.h3(
                    "Exportar a Excel (IRPF)",
                    class_name="text-lg font-semibold text-neutral-900",
                ),
                rx.el.p(
                    'Selecciona el año a exportar. La opción "Todos" descarga el histórico completo de accountingentry.',
                    class_name="mt-1 text-sm text-neutral-500",
                ),
                rx.el.select(
                    rx.foreach(
                        AccountState.irpf_available_years,
                        lambda year: rx.el.option(year, value=year),
                    ),
                    value=AccountState.irpf_year,
                    on_change=AccountState.set_irpf_year,
                    class_name="mt-4 w-full rounded-lg border border-neutral-300 bg-neutral-50 px-3 py-2 text-sm font-medium text-neutral-900 outline-hidden focus:border-brand-500 focus:ring-2 focus:ring-brand-200",
                ),
                rx.el.div(
                    rx.el.button(
                        "Cancelar",
                        on_click=AccountState.close_irpf_dialog,
                        class_name="rounded-lg border border-neutral-300 bg-neutral-50 px-4 py-2 text-sm font-semibold text-neutral-700 transition-colors hover:bg-neutral-100",
                    ),
                    rx.el.button(
                        rx.icon("download", class_name="h-4 w-4"),
                        rx.el.span("Descargar"),
                        on_click=AccountState.download_irpf,
                        class_name="flex items-center gap-2 rounded-lg bg-brand-600 px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-brand-700",
                    ),
                    class_name="mt-5 flex justify-end gap-2",
                ),
                class_name="fixed left-1/2 top-1/2 z-50 w-full max-w-sm -translate-x-1/2 -translate-y-1/2 rounded-xl border border-neutral-200 bg-white p-6 shadow-xl",
            ),
        ),
        rx.fragment(),
    )


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
                    rx.icon("plus", class_name="h-13 w-13"),
                    rx.el.span("Nuevo apunte"),
                    on_click=AccountState.open_create,
                    class_name="flex w-full items-center justify-center gap-2 rounded-lg bg-brand-600 px-1.5 text-sm font-semibold text-white transition-colors hover:bg-brand-700 sm:w-auto",
                ),
                rx.el.button(
                    rx.icon("file-spreadsheet", class_name="h-4 w-4"),
                    rx.el.span("IRPF"),
                    on_click=AccountState.open_irpf_dialog,
                    class_name="flex w-full items-center justify-center gap-2 rounded-lg border border-neutral-300 bg-neutral-50 px-1.5 text-sm font-semibold text-neutral-700 transition-colors hover:bg-neutral-100 sm:w-auto",
                ),
                
                class_name="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-2"
            ),
            rx.el.div(
                rx.icon(
                    "search",
                    class_name="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-neutral-400",
                ),
                rx.el.input(
                    placeholder="Buscar por tipo, capítulo, subcapítulo...",
                    default_value=AccountState.account_search,
                    on_change=AccountState.set_account_search.debounce(300),
                    class_name="w-full rounded-lg border border-neutral-300 bg-neutral-100 py-2 pl-9 pr-3 text-sm outline-hidden focus:border-brand-500 focus:ring-2 focus:ring-brand-200",
                ),
                class_name="relative w-full lg:w-130",
            ),
            class_name="flex flex-col gap-4 border-b border-neutral-200 px-5 py-5 lg:flex-row lg:items-center lg:justify-between sm:px-6",
        ),
        rx.el.div(
            
        ),
        account_dialog(),
        irpf_dialog(),
        class_name="w-full  rounded-tl-xl rounded-tr-xl bg-neutral-100",
    )