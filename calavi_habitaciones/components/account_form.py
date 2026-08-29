import reflex as rx

from calavi_habitaciones.states.account_state import AccountState


def field_error(name: str) -> rx.Component:
    return rx.cond(
        AccountState.errors[name] != "",
        rx.el.p(
            AccountState.errors[name],
            class_name="mt-1.5 text-xs font-medium text-danger-600",
        ),
        rx.el.div(),
    )

def controlled_select_field(
    label: str,
    placeholder: str,
    options: rx.Var[list[str]],
    value: rx.Var[str],
    on_change,
    error: rx.Var[str] = "",
    disabled: rx.Var[bool] | bool = False,
) -> rx.Component:
    return rx.el.div(
        rx.el.label(
            label,
            class_name="text-xs font-semibold uppercase tracking-wide text-neutral-500",
        ),
        rx.el.select(
            rx.el.option(placeholder, value=""),
            rx.foreach(options, lambda o: rx.el.option(o, value=o)),
            value=value,
            on_change=on_change,
            disabled=disabled,
            class_name=rx.cond(
                error != "",
                "mt-2 w-full rounded-lg border border-danger-300 bg-white px-3 py-2 text-sm font-medium text-neutral-900 outline-hidden focus:border-danger-500 focus:ring-2 focus:ring-danger-200 disabled:cursor-not-allowed disabled:opacity-50",
                "mt-2 w-full rounded-lg border border-neutral-300 bg-white px-3 py-2 text-sm font-medium text-neutral-900 outline-hidden focus:border-brand-500 focus:ring-2 focus:ring-brand-200 disabled:cursor-not-allowed disabled:opacity-50",
            ),
        ),
        rx.cond(
            error != "",
            rx.el.p(error, class_name="mt-1.5 text-xs font-medium text-danger-600"),
            rx.el.div(),
        ),
        class_name="flex w-full flex-col",
    )

def input_field(
    label: str,
    name: str,
    placeholder: str = "",
    input_type: str = "text",
    on_change: rx.EventHandler | None = None,
    field_key: rx.Var | str | None = None,
) -> rx.Component:
    return rx.el.div(
        rx.el.label(
            label,
            html_for=f"record-{name}",
            class_name="text-xs font-semibold uppercase tracking-wide text-neutral-500",
        ),
        rx.el.input(
            id=f"record-{name}",
            name=name,
            type=input_type,
            placeholder=placeholder,
            default_value=AccountState.form_values[name],
            key=field_key if field_key is not None else f"{name}-{AccountState.form_key}",
            on_change=on_change,
            class_name=rx.cond(
                AccountState.errors[name] != "",
                "mt-2 w-full rounded-lg border border-danger-300 bg-neutral-100 px-3 py-2 text-sm font-medium text-neutral-900 placeholder:text-neutral-400 focus:border-danger-500 focus:ring-2 focus:ring-danger-200 outline-hidden",
                "mt-2 w-full rounded-lg border border-neutral-300 bg-neutral-100 px-3 py-2 text-sm font-medium text-neutral-900 placeholder:text-neutral-400 focus:border-brand-500 focus:ring-2 focus:ring-brand-200 outline-hidden",
            ),
        ),
        field_error(name),
        class_name="flex w-full flex-col",
    )


def account_form() -> rx.Component:
    return rx.el.form(
        rx.el.div(
            rx.el.div(
                controlled_select_field(
                    "Tipo de movimiento",
                    "Selecciona el tipo de movimiento",
                    AccountState.move_type_options,
                    AccountState.move_type,
                    AccountState.set_move_type,
                    error=AccountState.errors["mov_type"],
                ),
                input_field("Fecha", "mov_date", "", "date"),
                controlled_select_field(
                    "Capítulo",
                    "Selecciona el capítulo",
                    AccountState.chapter_options,
                    AccountState.chapter,
                    AccountState.set_chapter,
                    error=AccountState.errors["chapter"],
                    disabled=AccountState.move_type == "",
                ),
                controlled_select_field(
                    "Subcapítulo",
                    "Selecciona el subcapítulo",
                    AccountState.subchapter_options,
                    AccountState.subchapter,
                    AccountState.set_subchapter,
                    error=AccountState.errors["subchapter"],
                    disabled=AccountState.chapter == "",
                ),
                input_field("Concepto", "concept", "", "text"),
                input_field("Importe", "amount", "", "number"),
                rx.cond(
                    AccountState.show_consum,
                    input_field("Consumo", "consum", "", "number"),
                    rx.el.div(),
                ),
                input_field("Observaciones", "observ", "", "text"),
                rx.el.div(
                    rx.el.label("Factura", class_name="text-sm font-medium text-neutral-700"),
                    rx.el.button(
                        rx.image(
                            src="/adobe_pdf.ico",
                            class_name=rx.cond(
                                AccountState.bill_url != "",
                                "w-6 h-6 opacity-100",
                                "w-6 h-6 opacity-40",
                            ),
                        ),
                        type="button",
                        on_click=AccountState.open_bill_icon,
                        class_name="flex items-center justify-center rounded-lg border border-neutral-300 bg-neutral-100 p-2 hover:bg-neutral-50",
                    ),
                    class_name="flex flex-col gap-1",
                ),
                class_name="grid grid-cols-1 gap-4 sm:grid-cols-2",
            ),
            rx.cond(
                AccountState.form_error != "",
                rx.el.div(
                    rx.icon("circle-alert", class_name="mt-0.5 h-4 w-4 shrink-0 text-danger-600"),
                    rx.el.p(AccountState.form_error, class_name="text-sm font-medium text-danger-700"),
                    class_name="mt-5 flex items-start gap-2 rounded-lg border border-danger-200 bg-danger-50 p-3",
                ),
                rx.el.div(),
            ),
            class_name="flex flex-col px-5 py-5 sm:px-6",
        ),
        rx.el.div(
            rx.cond(
                AccountState.mode == "edit",
                rx.el.button(
                    rx.icon("trash-2", class_name="h-4 w-4"),
                    rx.el.span("Borrar registro"),
                    type="button",
                    on_click=AccountState.request_delete,
                    class_name="flex items-center gap-2 rounded-lg border border-danger-300 bg-white px-4 py-2 text-sm font-semibold text-danger-700 transition-colors hover:bg-danger-50",
                ),
                rx.el.div(),
            ),
            rx.el.div(
                rx.el.button(
                    "Cancelar",
                    type="button",
                    on_click=AccountState.close_dialog,
                    class_name="rounded-lg border border-neutral-300 bg-neutral-100 px-4 py-2 text-sm font-semibold text-neutral-700 transition-colors hover:bg-neutral-50",
                ),
                rx.el.button(
                    rx.icon("check", class_name="h-4 w-4"),
                    rx.el.span(AccountState.submit_label),
                    type="submit",
                    class_name="flex items-center gap-2 rounded-lg bg-brand-600 px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-brand-700",
                ),
                class_name="flex items-center gap-3",
            ),
            class_name="sticky bottom-0 flex items-center justify-between gap-3 border-t border-neutral-200 bg-white px-5 py-4 sm:px-6",
        ),
        on_submit=AccountState.submit_record,
        reset_on_submit=False,
        class_name="flex w-full flex-col",
    )


def account_dialog() -> rx.Component:
    return rx.dialog.root(
        rx.dialog.content(
            rx.el.div(
                rx.dialog.title(
                    AccountState.dialog_title,
                    class_name="text-lg font-semibold tracking-tight text-neutral-900",
                ),
                rx.dialog.close(
                    rx.el.button(
                        rx.icon("x", class_name="h-4 w-4"),
                        type="button",
                        aria_label="Close account form",
                        class_name="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border border-neutral-200 bg-white text-neutral-500 transition-colors hover:bg-neutral-50 hover:text-neutral-900",
                    ),
                ),
                class_name="sticky top-0 z-10 flex items-start justify-between gap-3 border-b border-neutral-200 bg-white px-5 py-4 sm:px-6",
            ),
            account_form(),
            rx.cond(
                AccountState.show_bill_link_modal,
                rx.el.div(
                    rx.el.div(
                        rx.el.p("Enlace de la factura", class_name="text-sm font-semibold text-neutral-900"),
                        rx.el.input(
                            value=AccountState.bill_url_draft,
                            on_change=AccountState.set_bill_url_draft,
                            placeholder="https://drive.google.com/...",
                            class_name="w-full rounded-lg border border-neutral-300 px-3 py-2 text-sm mt-2",
                        ),
                        rx.el.div(
                            rx.el.button(
                                "Cancelar", type="button",
                                on_click=AccountState.close_bill_link_modal,
                                class_name="rounded-lg border px-3 py-2 text-sm",
                            ),
                            rx.el.button(
                                "Guardar", type="button",
                                on_click=AccountState.save_bill_url_draft,
                                class_name="rounded-lg bg-brand-600 px-3 py-2 text-sm text-white",
                            ),
                            class_name="flex justify-end gap-2 mt-3",
                        ),
                        class_name="w-80 rounded-xl bg-white p-4 shadow-lg",
                    ),
                    class_name="fixed inset-0 z-50 flex items-center justify-center bg-black/40",
                ),
                rx.el.div(),
            ),
            class_name="max-h-[88vh] w-full max-w-3xl overflow-y-auto rounded-xl border border-neutral-200 bg-white p-0",
        ),
        open=AccountState.is_open,
        on_open_change=AccountState.set_is_open,
    )
    
def delete_confirm_dialog() -> rx.Component:
    return rx.dialog.root(
        rx.dialog.content(
            rx.dialog.title("Borrar movimiento", class_name="text-base font-semibold text-neutral-900"),
            rx.dialog.description(
                "Esta acción no se puede deshacer. ¿Seguro que quieres borrar este registro?",
                class_name="mt-2 text-sm text-neutral-500",
            ),
            rx.cond(
                AccountState.delete_error != "",
                rx.el.p(AccountState.delete_error, class_name="mt-2 text-xs font-medium text-danger-600"),
                rx.el.div(),
            ),
            rx.el.div(
                rx.dialog.close(
                    rx.el.button(
                        "Cancelar", type="button", on_click=AccountState.cancel_delete,
                        class_name="rounded-lg border border-neutral-300 bg-white px-4 py-2 text-sm font-semibold text-neutral-700 hover:bg-neutral-50",
                    ),
                ),
                rx.el.button(
                    "Sí, borrar", type="button", on_click=AccountState.confirm_delete,
                    class_name="rounded-lg bg-danger-600 px-4 py-2 text-sm font-semibold text-white hover:bg-danger-700",
                ),
                class_name="mt-4 flex items-center justify-end gap-3",
            ),
            class_name="w-full max-w-sm rounded-xl border border-neutral-200 bg-white p-5",
        ),
        open=AccountState.delete_target_id != "",
        on_open_change=AccountState.set_delete_target_open,
    )
