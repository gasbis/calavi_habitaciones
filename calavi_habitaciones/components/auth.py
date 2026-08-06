import reflex as rx

from calavi_habitaciones.states.auth_state import AuthState


def login_field(
    label: str,
    name: str,
    placeholder: str,
    input_type: str,
    error: rx.Var[str],
    icon: str,
) -> rx.Component:
    return rx.el.div(
        rx.el.label(
            label,
            class_name="text-sm font-semibold text-gray-800",
        ),
        rx.el.div(
            rx.icon(
                icon,
                class_name="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400",
            ),
            rx.el.input(
                name=name,
                type=input_type,
                placeholder=placeholder,
                required=True,
                class_name="w-full rounded-lg border border-gray-300 bg-white py-2.5 pl-9 pr-3 text-sm font-medium text-gray-900 placeholder:text-gray-400 focus:border-violet-500 focus:ring-2 focus:ring-violet-200 outline-hidden",
            ),
            class_name="relative mt-2",
        ),
        rx.cond(
            error != "",
            rx.el.p(
                error, class_name="mt-1.5 text-xs font-medium text-red-600"
            ),
            rx.el.div(),
        ),
        class_name="flex flex-col",
    )


def login_screen() -> rx.Component:
    return rx.el.main(
        rx.el.div(
            rx.el.div(
                rx.el.div(
                    rx.icon("building-2", class_name="h-5 w-5 text-white"),
                    class_name="flex h-10 w-10 items-center justify-center rounded-xl bg-violet-600",
                ),
                rx.el.div(
                    rx.el.h1(
                        "Occupancy",
                        class_name="text-lg font-semibold tracking-tight text-gray-900",
                    ),
                    rx.el.p(
                        "Administrator access",
                        class_name="text-xs font-medium text-gray-500",
                    ),
                    class_name="flex flex-col",
                ),
                class_name="flex items-center gap-3",
            ),
            rx.el.div(
                rx.el.div(
                    rx.icon(
                        "lock-keyhole", class_name="h-5 w-5 text-violet-600"
                    ),
                    class_name="flex h-10 w-10 items-center justify-center rounded-lg bg-violet-50",
                ),
                rx.el.h2(
                    "Sign in to continue",
                    class_name="mt-5 text-2xl font-semibold tracking-tight text-gray-900",
                ),
                rx.el.p(
                    "Use an administrator account to view room occupancy and tenant details.",
                    class_name="mt-2 text-sm font-medium leading-relaxed text-gray-500",
                ),
                rx.el.form(
                    login_field(
                        "Email address",
                        "email",
                        "manager@occupancy.app",
                        "email",
                        AuthState.email_error,
                        "mail",
                    ),
                    login_field(
                        "Password",
                        "password",
                        "Enter your password",
                        "password",
                        AuthState.password_error,
                        "key-round",
                    ),
                    rx.cond(
                        AuthState.auth_error != "",
                        rx.el.div(
                            rx.icon(
                                "circle-alert",
                                class_name="mt-0.5 h-4 w-4 shrink-0",
                            ),
                            rx.el.p(
                                AuthState.auth_error,
                                class_name="text-sm font-medium",
                            ),
                            class_name="flex items-start gap-2 rounded-lg border border-red-200 bg-red-50 p-3 text-red-700",
                        ),
                        rx.el.div(),
                    ),
                    rx.el.button(
                        rx.icon("log-in", class_name="h-4 w-4"),
                        "Sign in",
                        type="submit",
                        class_name="flex w-full items-center justify-center gap-2 rounded-lg bg-violet-600 px-4 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-violet-700 focus:ring-2 focus:ring-violet-200 outline-hidden",
                    ),
                    on_submit=AuthState.sign_in,
                    reset_on_submit=False,
                    class_name="mt-6 flex flex-col gap-4",
                ),
                rx.el.div(
                    rx.icon(
                        "shield-check",
                        class_name="h-4 w-4 shrink-0 text-gray-400",
                    ),
                    rx.el.p(
                        "Access is managed by your occupancy administrator. Public registration is not available.",
                        class_name="text-xs font-medium leading-relaxed text-gray-500",
                    ),
                    class_name="mt-6 flex items-start gap-2 border-t border-gray-100 pt-5",
                ),
                class_name="mt-12 w-full rounded-xl border border-gray-200 bg-white p-6 sm:p-8",
            ),
            class_name="flex w-full max-w-md flex-col",
        ),
        class_name="flex min-h-screen w-full items-center justify-center bg-gray-50 px-4 py-10 font-['Inter']",
    )
