import reflex as rx

from calavi_habitaciones.states.account_state import AccountState
from calavi_habitaciones.components.account_manager import account_manager_section


def entry_row(item: dict) -> rx.Component:
    return rx.el.button(
        rx.el.div(
            rx.el.span(item["mov_date"], class_name="text-sm font-semibold text-neutral-900 w-24 shrink-0"),
            rx.el.span(item["mov_type"], class_name="text-sm text-neutral-600 w-24 shrink-0"),
            rx.el.span(item["chapter"], class_name="text-sm text-neutral-500 w-32 shrink-0 truncate"),
            rx.el.span(item["subchapter"], class_name="text-sm text-neutral-500 w-32 shrink-0 truncate"),            
            rx.el.span(item["concept"], class_name="text-sm text-neutral-900 flex-1 min-w-0 truncate text-left"),
            rx.el.span(
                f"{item['amount']:,.2f}€",
                class_name="text-sm font-semibold text-neutral-900 w-24 shrink-0 text-right",
            ),
            # rx.el.span(
            #     f"{item['consum']:,.2f} Kg./Kw.",
            #     class_name="text-sm font-semibold text-neutral-900 w-24 shrink-0 text-right",
            # ),                  
            rx.el.span(item["observ"], class_name="text-sm text-neutral-900 flex-1 min-w-0 truncate text-left"),
            class_name="flex w-full items-center gap-3",
        ),
        on_click=AccountState.open_edit(item["id"]),
        type="button",
        class_name="w-full border-b border-neutral-100 px-4 py-3 text-left transition-colors hover:bg-brand-50",
    )


def account_list_section() -> rx.Component:
    return rx.el.section(
        rx.el.div(
            account_manager_section(),
            # rx.el.h2(
            #     "Movimientos registrados",
            #     class_name="text-xl font-semibold tracking-tight text-neutral-900",
            # ),
            # rx.el.p(
            #     "Selecciona cualquier movimiento para editarlo o eliminarlo.",
            #     class_name="mt-1 text-sm font-medium text-neutral-500",
            # ),
            class_name="bg-neutral-100 rounded-xl"
        ),
        rx.el.div(
            rx.foreach(AccountState.sorted_entries, entry_row),
            class_name="max-h-[32rem] w-full overflow-y-auto border-t border-neutral-200",
        ),
        class_name="w-full rounded-xl border border-neutral-200 bg-white",
    )