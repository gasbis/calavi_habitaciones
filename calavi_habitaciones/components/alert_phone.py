"""Teléfono de avisos por SMS del administrador conectado (ver
services/lease_alerts.py). Botón en el header + diálogo, igual que
"Cambiar contraseña"."""

import reflex as rx

from calavi_habitaciones.states.auth_state import AuthState


def alert_phone_trigger() -> rx.Component:
    return rx.el.button(
        rx.icon(
            rx.cond(AuthState.current_user["phone"] != "", "bell-ring", "bell-off"),
            class_name="h-4 w-4",
        ),
        rx.el.span("Avisos SMS", class_name="hidden sm:inline"),
        type="button",
        title="Teléfono para avisos por SMS",
        on_click=AuthState.open_phone,
        class_name="flex items-center gap-2 rounded-lg border border-neutral-300 bg-neutral-100 px-3 py-2 text-xs font-semibold text-neutral-700 hover:bg-neutral-50",
    )


def alert_phone_dialog() -> rx.Component:
    return rx.dialog.root(
        rx.dialog.content(
            rx.el.div(
                rx.dialog.title(
                    "Avisos por SMS",
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
                    rx.el.p(
                        "Recibirás un SMS cuando un alquiler pase a «Caduca pronto» "
                        "(30 días o menos) o a «Caducado». Se revisa cada día a las 9:05. "
                        "Deja el campo vacío para dejar de recibir avisos.",
                        class_name="text-sm text-neutral-600",
                    ),
                    rx.el.div(
                        rx.el.label(
                            "Teléfono móvil",
                            class_name="text-xs font-semibold uppercase tracking-wide text-neutral-500",
                        ),
                        rx.el.input(
                            name="phone",
                            type="tel",
                            placeholder="+34600000000",
                            default_value=AuthState.current_user["phone"],
                            key=AuthState.current_user["phone"],
                            class_name="mt-2 w-full rounded-lg border border-neutral-300 px-3 py-2 text-sm outline-hidden",
                        ),
                        rx.cond(
                            AuthState.phone_error != "",
                            rx.el.p(AuthState.phone_error, class_name="mt-1.5 text-xs font-medium text-danger-600"),
                            rx.el.div(),
                        ),
                        class_name="flex flex-col",
                    ),
                    class_name="flex flex-col gap-4 px-5 py-4",
                ),
                rx.el.div(
                    rx.cond(
                        AuthState.current_user["phone"] != "",
                        rx.el.button(
                            rx.cond(AuthState.phone_sending_test, "Enviando...", "Enviar SMS de prueba"),
                            type="button",
                            on_click=AuthState.send_test_sms,
                            disabled=AuthState.phone_sending_test,
                            class_name="mr-auto rounded-lg border border-neutral-300 bg-white px-4 py-2 text-sm font-semibold text-neutral-700 hover:bg-neutral-50 disabled:opacity-50",
                        ),
                        rx.el.div(),
                    ),
                    rx.dialog.close(
                        rx.el.button("Cancelar", type="button", class_name="rounded-lg border border-neutral-300 bg-white px-4 py-2 text-sm font-semibold text-neutral-700 hover:bg-neutral-50"),
                    ),
                    rx.el.button("Guardar", type="submit", class_name="rounded-lg bg-brand-600 px-4 py-2 text-sm font-semibold text-white hover:bg-brand-700"),
                    class_name="flex flex-wrap items-center justify-end gap-3 border-t border-neutral-200 px-5 py-3",
                ),
                on_submit=AuthState.submit_phone,
                reset_on_submit=False,
            ),
            class_name="w-full max-w-md rounded-xl border border-neutral-200 bg-white p-0",
        ),
        open=AuthState.phone_open,
        on_open_change=AuthState.set_phone_open,
    )
