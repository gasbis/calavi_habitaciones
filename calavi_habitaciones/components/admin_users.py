import reflex as rx

from calavi_habitaciones.states.auth_state import AdminDirectoryEntry, AuthState


def access_badge(active: rx.Var[bool]) -> rx.Component:
    return rx.el.span(
        rx.cond(active, "Activado", "Desactivado"),
        class_name=rx.cond(
            active,
            "w-fit rounded-full border border-green-200 bg-green-100 px-2.5 py-1 text-xs font-semibold text-green-700",
            "w-fit rounded-full border border-gray-200 bg-gray-100 px-2.5 py-1 text-xs font-semibold text-gray-600",
        ),
    )


def admin_user_row(item: AdminDirectoryEntry) -> rx.Component:
    return rx.el.tr(
        rx.el.td(
            rx.el.div(
                rx.el.p(
                    item["name"],
                    class_name="text-sm font-semibold text-gray-900",
                ),
                rx.el.p(
                    item["email"],
                    class_name="mt-0.5 text-xs font-medium text-gray-500",
                ),
                rx.cond(
                    AuthState.current_user["email"] == item["email"],
                    rx.el.span(
                        "Usuario actual",
                        class_name="mt-2 inline-flex w-fit items-center gap-1 rounded-full border border-violet-200 bg-violet-50 px-2 py-0.5 text-[11px] font-semibold text-violet-700",
                    ),
                    rx.el.div(),
                ),
                class_name="min-w-48",
            ),
            class_name="px-4 py-4 align-top sm:px-5",
        ),
        rx.el.td(
            rx.el.span(
                item["role"],
                class_name="text-sm font-medium text-gray-700",
            ),
            class_name="px-4 py-4 align-top sm:px-5",
        ),
        rx.el.td(
            access_badge(item["active"]),
            class_name="px-4 py-4 align-top sm:px-5",
        ),
        rx.el.td(
            rx.el.button(
                rx.icon(
                    rx.cond(item["active"], "user-round-x", "user-round-check"),
                    class_name="h-4 w-4",
                ),
                rx.el.span(
                    rx.cond(item["active"], "Desactivar", "Activar")
                ),
                on_click=AuthState.toggle_user_access(item["email"]),
                disabled=AuthState.current_user["email"] == item["email"],
                class_name="flex w-fit items-center gap-2 rounded-lg border border-gray-300 bg-white px-3 py-2 text-xs font-semibold text-gray-700 transition-colors hover:border-violet-300 hover:bg-violet-50 hover:text-violet-700 disabled:cursor-not-allowed disabled:opacity-50",
            ),
            class_name="px-4 py-4 align-top sm:px-5",
        ),
        class_name="border-t border-gray-100 hover:bg-gray-50/70",
    )


def admin_management_section() -> rx.Component:
    return rx.el.section(
        rx.el.div(
            rx.el.div(
                rx.el.div(
                    rx.icon(
                        "shield-check", class_name="h-5 w-5 text-violet-600"
                    ),
                    class_name="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-violet-100 bg-violet-50",
                ),
                rx.el.div(
                    rx.el.h2(
                        "Gestión de administradores",
                        class_name="text-xl font-semibold tracking-tight text-gray-900",
                    ),
                    rx.el.p(
                        "Gestiona las cuentas de administrador permitidas para este espacio de trabajo.",
                        class_name="mt-1 text-sm font-medium text-gray-500",
                    ),
                    class_name="min-w-0",
                ),
                class_name="flex items-start gap-3",
            ),
            rx.el.div(
                rx.icon(
                    "lock-keyhole", class_name="h-4 w-4 shrink-0 text-gray-400"
                ),
                rx.el.p(
                    "Solo los administradores autorizados pueden iniciar sesión. El registro público no está disponible.",
                    class_name="text-xs font-medium leading-relaxed text-gray-500",
                ),
                class_name="flex max-w-sm items-start gap-2",
            ),
            class_name="flex flex-col gap-4 border-b border-gray-200 px-5 py-5 sm:flex-row sm:items-start sm:justify-between sm:px-6",
        ),
        rx.cond(
            AuthState.management_notice != "",
            rx.el.div(
                rx.icon(
                    "circle-check", class_name="h-4 w-4 shrink-0 text-green-600"
                ),
                rx.el.p(
                    AuthState.management_notice,
                    class_name="text-sm font-medium text-green-700",
                ),
                class_name="mx-5 mt-4 flex items-start gap-2 rounded-lg border border-green-200 bg-green-50 p-3 sm:mx-6",
            ),
            rx.el.div(),
        ),
        rx.el.div(
            rx.el.table(
                rx.el.thead(
                    rx.el.tr(
                        rx.el.th(
                            "Administrador",
                            class_name="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wide text-gray-500 sm:px-5",
                        ),
                        rx.el.th(
                            "Rol",
                            class_name="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wide text-gray-500 sm:px-5",
                        ),
                        rx.el.th(
                            "Estado",
                            class_name="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wide text-gray-500 sm:px-5",
                        ),
                        rx.el.th(
                            "Acceso",
                            class_name="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wide text-gray-500 sm:px-5",
                        ),
                        class_name="bg-gray-50",
                    ),
                ),
                rx.el.tbody(
                    rx.foreach(AuthState.admin_users, admin_user_row),
                ),
                class_name="table-auto min-w-[40rem] w-full",
            ),
            class_name="overflow-x-auto",
        ),
        class_name="w-full overflow-hidden rounded-xl border border-gray-200 bg-white",
    )
