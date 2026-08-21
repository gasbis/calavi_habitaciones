import reflex as rx

from calavi_habitaciones.states.occupancy_state import OccupancyState

def stat_card(
    label: str, value: rx.Var | str, icon: str, hint: rx.Var | str , red_color: bool=False
) -> rx.Component:
    return rx.el.div(
        rx.el.div(
            rx.el.span(
                label,
                class_name="text-xs font-semibold uppercase tracking-wide text-neutral-500",
            ),
            rx.el.div(
                rx.icon(icon, class_name="h-4 w-4 text-brand-600"),
                class_name="flex h-8 w-8 items-center justify-center rounded-lg bg-brand-50 border border-brand-100",
            ),
            class_name="flex items-start justify-between gap-3",
        ),
        rx.el.p(
            value,
            class_name=rx.cond(
                red_color,
                "mt-3 text-2xl font-semibold tracking-tight text-danger-600",
                "mt-3 text-2xl font-semibold tracking-tight text-neutral-900",
            ),
            
        ),
        rx.el.p(hint, class_name="mt-1 text-sm font-medium text-neutral-500"),
        class_name="w-full rounded-xl border border-neutral-200 bg-neutral-100 p-5",
    )


def occupancy_bar() -> rx.Component:
    return rx.el.div(
        rx.el.div(
            rx.el.p(
                "Ocupación de un vistazo",
                class_name="text-sm font-semibold text-neutral-900",
            ),
            rx.el.p(
                f"{OccupancyState.occupancy_rate:.1f}%",
                class_name="text-sm font-semibold text-brand-600",
            ),
            class_name="flex items-center justify-between",
        ),
        rx.el.div(
            rx.el.div(
                class_name="h-full rounded-full bg-brand-600 transition-all duration-500",
                style={"width": f"{OccupancyState.occupancy_rate}%"},
            ),
            class_name="mt-3 h-2 w-full overflow-hidden rounded-full bg-neutral-100",
        ),
        rx.el.p(
            f"{OccupancyState.occupied_count} de {OccupancyState.total_units} unidades alquiladas actualmente ",
            class_name="mt-2 text-sm font-medium text-neutral-500",
        ),
        class_name="w-full rounded-xl border border-neutral-200 bg-neutral-100 p-5",
    )


def summary_section() -> rx.Component:
    return rx.el.section(
        rx.el.div(
            rx.tablet_and_desktop(
                stat_card(
                "Habitaciones alquiladas",
                OccupancyState.occupied_count.to_string(),
                "door-open",
                "Ocupación actual de la casa",
                ),
                stat_card(
                    "Recaudación mensual",
                    OccupancyState.monthly_revenue_display,
                    "wallet",
                    "Teórica según habitaciones alquiladas y precio.",
                ),
            ),
            stat_card(
                "Necesita atención",
                OccupancyState.attention_count.to_string(),
                "triangle-alert",
                "Contratos vencidos o finalizando",
                rx.cond(
                    OccupancyState.attention_count > 0,
                    True,
                    False,
                ),
            ),
            class_name="grid grid-cols-1 gap-3 sm:grid-cols-2 xl:grid-cols-3",
        ),
        rx.tablet_and_desktop(
            occupancy_bar(),
        ),
        class_name="flex w-full flex-col gap-4",
    )
