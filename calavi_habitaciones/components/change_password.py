import reflex as rx

import reflex as rx

from calavi_habitaciones.states.auth_state import AuthState


def change_password_trigger() -> rx.Component:
    return rx.el.button(
        rx.icon("key-round", class_name="h-4 w-4"),
        rx.el.span("Cambiar contraseña"),
        type="button",
        on_click=AuthState.open_change_password,
        class_name="flex items-center gap-2 rounded-lg border border-neutral-300 bg-neutral-100 px-3 py-2 text-xs font-semibold text-neutral-700 hover:bg-neutral-50",
    )


def change_password_dialog() -> rx.Component:
    return rx.dialog.root(
        rx.dialog.content(
            rx.el.div(
                rx.dialog.title(
                    "Cambiar contraseña",
                    class_name="text-base font-semibold text-neutral-900",
                ),
                rx.dialog.close(
                    rx.el.button(
                        rx.icon("x", class_name="h-4 w-4"),
                        type="button",
                        class_name="flex h-7 w-7 items-center justify-center rounded-lg border border-neutral-200 text-neutral-500 hover:bg-neutral-50",
                    ),
                ),
                class_name="flex items-center justify-between border-b border-neutral-200 px-5 py-3",
            ),
            rx.el.form(
                rx.el.div(
                    rx.el.div(
                        rx.el.label("Contraseña actual", class_name="text-xs font-semibold uppercase tracking-wide text-neutral-500"),
                        rx.el.input(name="current_password", type="password", class_name="mt-2 w-full rounded-lg border border-neutral-300 px-3 py-2 text-sm outline-hidden"),
                        rx.cond(
                            AuthState.change_password_current_error != "",
                            rx.el.p(AuthState.change_password_current_error, class_name="mt-1.5 text-xs font-medium text-danger-600"),
                            rx.el.div(),
                        ),
                        class_name="flex flex-col",
                    ),
                    rx.el.div(
                        rx.el.label("Nueva contraseña", class_name="text-xs font-semibold uppercase tracking-wide text-neutral-500"),
                        rx.el.input(name="new_password", type="password", class_name="mt-2 w-full rounded-lg border border-neutral-300 px-3 py-2 text-sm outline-hidden"),
                        class_name="flex flex-col",
                    ),
                    rx.el.div(
                        rx.el.label("Confirmar nueva contraseña", class_name="text-xs font-semibold uppercase tracking-wide text-neutral-500"),
                        rx.el.input(name="confirm_password", type="password", class_name="mt-2 w-full rounded-lg border border-neutral-300 px-3 py-2 text-sm outline-hidden"),
                        rx.cond(
                            AuthState.change_password_new_error != "",
                            rx.el.p(AuthState.change_password_new_error, class_name="mt-1.5 text-xs font-medium text-danger-600"),
                            rx.el.div(),
                        ),
                        class_name="flex flex-col",
                    ),
                    rx.cond(
                        AuthState.change_password_error != "",
                        rx.el.p(AuthState.change_password_error, class_name="text-sm font-medium text-danger-700"),
                        rx.el.div(),
                    ),
                    class_name="flex flex-col gap-4 px-5 py-4",
                ),
                rx.el.div(
                    rx.dialog.close(
                        rx.el.button("Cancelar", type="button", class_name="rounded-lg border border-neutral-300 bg-white px-4 py-2 text-sm font-semibold text-neutral-700 hover:bg-neutral-50"),
                    ),
                    rx.el.button("Guardar contraseña", type="submit", class_name="rounded-lg bg-brand-600 px-4 py-2 text-sm font-semibold text-white hover:bg-brand-700"),
                    class_name="flex items-center justify-end gap-3 border-t border-neutral-200 px-5 py-3",
                ),
                on_submit=AuthState.submit_change_password,
                reset_on_submit=False,
            ),
            class_name="w-full max-w-md rounded-xl border border-neutral-200 bg-white p-0",
        ),
        open=AuthState.change_password_open,
        on_open_change=AuthState.set_change_password_open,
    )