import reflex as rx

from calavi_habitaciones.states.occupancy_state import OccupancyState

def stat_card(
    label: str, value: rx.Var | str, icon: str, hint: rx.Var | str
) -> rx.Component:
    return rx.el.div(
        rx.el.div(
            rx.el.span(
                label,
                class_name="text-xs font-semibold uppercase tracking-wide text-gray-500",
            ),
            rx.el.div(
                rx.icon(icon, class_name="h-4 w-4 text-violet-600"),
                class_name="flex h-8 w-8 items-center justify-center rounded-lg bg-violet-50 border border-violet-100",
            ),
            class_name="flex items-start justify-between gap-3",
        ),
        rx.el.p(
            value,
            class_name="mt-3 text-2xl font-semibold tracking-tight text-gray-900",
        ),
        rx.el.p(hint, class_name="mt-1 text-sm font-medium text-gray-500"),
        class_name="w-full rounded-xl border border-gray-200 bg-white p-5",
    )


def occupancy_bar() -> rx.Component:
    return rx.el.div(
        rx.el.div(
            rx.el.p(
                "Ocupación de un vistazo",
                class_name="text-sm font-semibold text-gray-900",
            ),
            rx.el.p(
                f"{OccupancyState.occupancy_rate:.1f}%",
                class_name="text-sm font-semibold text-violet-600",
            ),
            class_name="flex items-center justify-between",
        ),
        rx.el.div(
            rx.el.div(
                class_name="h-full rounded-full bg-violet-600 transition-all duration-500",
                style={"width": f"{OccupancyState.occupancy_rate}%"},
            ),
            class_name="mt-3 h-2 w-full overflow-hidden rounded-full bg-gray-100",
        ),
        rx.el.p(
            f"{OccupancyState.occupied_count} de {OccupancyState.total_units} unidades alquiladas actualmente ",
            class_name="mt-2 text-sm font-medium text-gray-500",
        ),
        class_name="w-full rounded-xl border border-gray-200 bg-white p-5",
    )


def summary_section() -> rx.Component:
    return rx.el.section(
        rx.el.div(
            stat_card(
                "Habitaciones alquiladas",
                OccupancyState.occupied_count.to_string(),
                "door-open",
                "Ocupación actual de la casa",
            ),
            # stat_card(
            #     "Residents",
            #     OccupancyState.resident_count.to_string(),
            #     "users",
            #     "Checked in tenants",
            # ),
            stat_card(
                "Recaudación mensual",
                OccupancyState.monthly_revenue_display,
                "wallet",
                "Teórica según habitaciones alquiladas y precio.",
            ),
            stat_card(
                "Necesita atención",
                OccupancyState.attention_count.to_string(),
                "triangle-alert",
                "Contratos vencidos o finalizando",
            ),
            class_name="grid grid-cols-1 gap-3 sm:grid-cols-2 xl:grid-cols-3",
        ),
        occupancy_bar(),
        class_name="flex w-full flex-col gap-4",
    )
