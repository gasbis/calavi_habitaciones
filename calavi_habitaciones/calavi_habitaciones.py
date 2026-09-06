import reflex as rx

from calavi_habitaciones.calavi_inicio import index
from calavi_habitaciones.calavi_cuentas import cuentas
from calavi_habitaciones.calavi_administradores import administradores
from calavi_habitaciones.components.auth import login_screen
from calavi_habitaciones.components.header import page_header, page_title
from calavi_habitaciones.components.history_view import history_view
from calavi_habitaciones.components.record_manager import record_manager_section
from calavi_habitaciones.components.room_list import room_list_section
from calavi_habitaciones.components.record_form import record_dialog, room_subform_dialog, tenant_subform_dialog
from calavi_habitaciones.states.auth_state import AuthState
from calavi_habitaciones.states.occupancy_state import OccupancyState
from calavi_habitaciones.states.account_state import AccountState
from calavi_habitaciones.states.account_summary_state import AccountSummaryState

title="Control de habitaciones"
subtitle="Todas las habitaciones actualmente ocupadas con información sobre residentes, contratos de alquiler y rentas, todo de un vistazo."
def occupancy_page() -> rx.Component:
    return rx.el.main(
        page_header(),
        rx.el.div(
            page_title(title, subtitle),
            rx.el.div(
                rx.el.button(
                    rx.icon("layout-grid", class_name="h-4 w-4"),
                    "Alquiler vigente",
                    on_click=OccupancyState.show_active_view,
                    class_name=rx.cond(
                        OccupancyState.view_mode == "active",
                        "flex items-center gap-2 rounded-lg bg-brand-600 px-3 py-2 text-sm font-semibold text-white",
                        "flex items-center gap-2 rounded-lg border border-neutral-300 bg-neutral-100 px-3 py-2 text-sm font-semibold text-neutral-700",
                    ),
                ),
                rx.el.button(
                    rx.icon("archive", class_name="h-4 w-4"),
                    f"Histórico ({OccupancyState.terminated_count})",
                    on_click=OccupancyState.show_history_view,
                    class_name=rx.cond(
                        OccupancyState.view_mode == "history",
                        "flex items-center gap-2 rounded-lg bg-brand-600 px-3 py-2 text-sm font-semibold text-white",
                        "flex items-center gap-2 rounded-lg border border-neutral-300 bg-neutral-100 px-3 py-2 text-sm font-semibold text-neutral-700",
                    ),
                ),
                class_name="flex flex-wrap gap-2",
            ),
            rx.cond(
                OccupancyState.view_mode == "active",
                rx.fragment(
                    record_manager_section(),
                    room_list_section(),
                    record_dialog(),
                    room_subform_dialog(),
                    tenant_subform_dialog(),
                    ),
                history_view(),
            ),
            class_name="mx-auto flex w-full max-w-7xl flex-col gap-8 px-4 py-8 sm:px-6 lg:px-8",
        ),
        class_name="min-h-screen w-full bg-neutral-50 font-['Inter']",
    )


def habitaciones() -> rx.Component:
    return rx.cond(AuthState.is_authenticated, occupancy_page(), login_screen())

app = rx.App(
    html_lang="es",    
    head_components=[
        rx.el.link(rel="preconnect", href="https://fonts.googleapis.com"),
        rx.el.link(
            rel="preconnect",
            href="https://fonts.gstatic.com",
            cross_origin="",
        ),
        rx.el.link(
            href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap",
            rel="stylesheet",
        ),
    ],
)
app.add_page(
    index,
    route="/",
    title= "Calavi inicio",
    meta=[
        {"name": "robots", "content": "noindex, nofollow"}
    ],
    on_load=[ AccountSummaryState.load, OccupancyState.load ]
),

app.add_page(
    habitaciones,
    route="/habitaciones",
    title= "Calavi habitaciones",
    meta=[
        {"name": "robots", "content": "noindex, nofollow"}
    ],
    on_load=OccupancyState.load,
)

app.add_page(
    cuentas,
    route="/cuentas",
    title= "Calavi cuentas",
    meta=[
        {"name": "robots", "content": "noindex, nofollow"}
    ],
    on_load=AccountState.load,
)

app.add_page(
    administradores,
    route="/administradores",
    title= "Calavi administradores",
    meta=[
        {"name": "robots", "content": "noindex, nofollow"}
    ],
    on_load=AuthState.load_admins,
)