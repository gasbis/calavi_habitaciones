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

def new_admin_dialog() -> rx.Component:
    return rx.cond(
        AuthState.new_admin_open,
        rx.el.div(
            rx.el.div(
                rx.el.div(
                    rx.el.h3("Nuevo administrador", class_name="text-base font-semibold text-gray-900"),
                    rx.el.button(
                        rx.icon("x", class_name="h-4 w-4"),
                        type="button",
                        on_click=AuthState.close_new_admin,
                        class_name="flex h-7 w-7 items-center justify-center rounded-lg border border-gray-200 text-gray-500 hover:bg-gray-50",
                    ),
                    class_name="flex items-center justify-between border-b border-gray-200 px-5 py-3",
                ),
                rx.el.form(
                    rx.el.div(
                        rx.el.div(
                            rx.el.label("Correo electrónico", class_name="text-xs font-semibold uppercase tracking-wide text-gray-500"),
                            rx.el.input(name="email", type="email", class_name="mt-2 w-full rounded-lg border border-gray-300 px-3 py-2 text-sm outline-hidden"),
                            rx.cond(
                                AuthState.new_admin_email_error != "",
                                rx.el.p(AuthState.new_admin_email_error, class_name="mt-1.5 text-xs font-medium text-red-600"),
                                rx.el.div(),
                            ),
                            class_name="flex flex-col",
                        ),
                        rx.el.div(
                            rx.el.label("Nombre", class_name="text-xs font-semibold uppercase tracking-wide text-gray-500"),
                            rx.el.input(name="name", class_name="mt-2 w-full rounded-lg border border-gray-300 px-3 py-2 text-sm outline-hidden"),
                            class_name="flex flex-col",
                        ),
                        rx.el.div(
                            rx.el.label("Rol", class_name="text-xs font-semibold uppercase tracking-wide text-gray-500"),
                            rx.el.input(name="role", placeholder="Gestor, Propietaria...", class_name="mt-2 w-full rounded-lg border border-gray-300 px-3 py-2 text-sm outline-hidden"),
                            class_name="flex flex-col",
                        ),
                        rx.el.div(
                            rx.el.label("Contraseña", class_name="text-xs font-semibold uppercase tracking-wide text-gray-500"),
                            rx.el.input(name="password", type="password", class_name="mt-2 w-full rounded-lg border border-gray-300 px-3 py-2 text-sm outline-hidden"),
                            class_name="flex flex-col",
                        ),
                        rx.el.div(
                            rx.el.label("Confirmar contraseña", class_name="text-xs font-semibold uppercase tracking-wide text-gray-500"),
                            rx.el.input(name="confirm_password", type="password", class_name="mt-2 w-full rounded-lg border border-gray-300 px-3 py-2 text-sm outline-hidden"),
                            rx.cond(
                                AuthState.new_admin_password_error != "",
                                rx.el.p(AuthState.new_admin_password_error, class_name="mt-1.5 text-xs font-medium text-red-600"),
                                rx.el.div(),
                            ),
                            class_name="flex flex-col",
                        ),
                        rx.cond(
                            AuthState.new_admin_error != "",
                            rx.el.p(AuthState.new_admin_error, class_name="text-sm font-medium text-red-700"),
                            rx.el.div(),
                        ),
                        class_name="flex flex-col gap-4 px-5 py-4",
                    ),
                    rx.el.div(
                        rx.el.button("Cancelar", type="button", on_click=AuthState.close_new_admin, class_name="rounded-lg border border-gray-300 bg-white px-4 py-2 text-sm font-semibold text-gray-700 hover:bg-gray-50"),
                        rx.el.button("Crear administrador", type="submit", class_name="rounded-lg bg-violet-600 px-4 py-2 text-sm font-semibold text-white hover:bg-violet-700"),
                        class_name="flex items-center justify-end gap-3 border-t border-gray-200 px-5 py-3",
                    ),
                    on_submit=AuthState.create_admin,
                    reset_on_submit=False,
                ),
                class_name="w-full max-w-md rounded-xl border border-gray-200 bg-white",
            ),
            class_name="fixed inset-0 z-60 flex items-center justify-center bg-gray-900/50 p-4",
        ),
        rx.el.div(),
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
                # rx.el.button(
                #     rx.icon("plus", class_name="h-4 w-4"),
                #     rx.el.span("Nuevo alquiler"),
                #     on_click=RecordState.open_create,
                #     class_name="flex w-full items-center justify-center gap-2 rounded-lg bg-violet-600 px-3 py-2 text-sm font-semibold text-white transition-colors hover:bg-violet-700 sm:w-auto",
                # ),
                rx.el.button(
                    rx.icon("user-round-plus", class_name="h-4 w-4"),
                    rx.el.span("Alta administrador"),
                    type="button",
                    on_click=AuthState.open_new_admin,
                    class_name="flex w-full items-center justify-center gap-1.5 rounded-lg bg-violet-600 px-2.5 py-2 text-xs font-semibold text-white transition-colors hover:bg-violet-700 sm:w-auto",
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
            class_name="flex flex-col gap-4 border-b border-gray-200 px-5 py-5 sm:flex-row sm:items-center sm:justify-between sm:px-6",
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
        new_admin_dialog(),
        class_name="w-full overflow-hidden rounded-xl border border-gray-200 bg-white",
    )
