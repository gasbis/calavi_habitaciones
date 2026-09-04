import reflex as rx

from calavi_habitaciones.states.occupancy_state import OccupancyState
from calavi_habitaciones.states.account_summary_state import AccountSummaryState
from calavi_habitaciones.components.rooms_occupancy import room_occupancy_card


# *******************SUMARIO DE OCUPACIÓN HABITACIONES******************************

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
                rx.icon(icon,
                        class_name=rx.cond(
                            red_color,
                            "h-4 w-4 text-danger-600",
                            "h-4 w-4 text-brand-600"
                            ),
                ),
                class_name=rx.cond(
                    red_color,
                    "flex h-8 w-8 items-center justify-center rounded-lg bg-warning-100 border border-danger-100",
                    "flex h-8 w-8 items-center justify-center rounded-lg bg-brand-50 border border-brand-100"
                ),
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
            class_name="mt-3 h-2 w-full overflow-hidden rounded-full bg-neutral-50",
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
            stat_card(
            "Habitaciones alquiladas",
            OccupancyState.occupied_count.to_string(),
            "door-open",
            "Unidades con contrato en vigor o pendiente de extensión",
            ),
            
            stat_card(
            "Recaudación mensual",
            OccupancyState.monthly_revenue_display,
            "wallet",
            "Recaudación teórica según habitaciones alquiladas y precio",
            ),            
            stat_card(
                label="Habitaciones pendientes de cobro",
                value=rx.cond(
                    OccupancyState.filtered_rooms_no_paid_rent,
                    rx.el.span(OccupancyState.filtered_rooms_no_paid_rent.join(" - ")),
                    rx.el.span("Ninguna")
                ),
                icon="coins",
                hint="Alquileres no cobrados dentro del mes en curso",
                red_color=False,
            ),
            class_name="grid grid-cols-1 gap-3 sm:grid-cols-3",
        ),
        occupancy_bar(),        
        room_occupancy_card(OccupancyState.global_occupancy_panel[0]),        
        class_name="flex w-full flex-col gap-4",
    )

def rooms_summary_section() -> rx.Component:
    return rx.el.section(
        rx.el.h2(
            "Extracto de ocupación de las habitaciones",
            class_name="text-xl font-semibold tracking-tight text-neutral-900 mb-4",
        ),
        summary_section(),
        rx.el.div(
            rx.foreach(OccupancyState.rooms_occupancy_panel, room_occupancy_card),
            class_name="mt-4 grid grid-cols-2 gap-1 sm:grid-cols-4 lg:grid-cols-7",
        ),
        class_name="w-full",
    )

# *******************SUMARIO DE DATOS ECONÓMICOS******************************

def year_selector() -> rx.Component:
    return rx.el.select(
        rx.foreach(
            AccountSummaryState.available_years,
            lambda year: rx.el.option(year, value=year),
        ),
        value=AccountSummaryState.selected_year,
        on_change=AccountSummaryState.set_selected_year,
        class_name="rounded-lg border border-neutral-200 bg-neutral-100 px-3 py-2 text-sm font-medium text-neutral-900",
    )


def expenses_summary_table() -> rx.Component:
    return rx.el.div(
        rx.el.h3(
            "Gastos por capítulos y subcapítulos",
            class_name="text-sm font-semibold text-neutral-900 mb-3",
        ),
        rx.cond(
            AccountSummaryState.expenses_summary.length() > 0,
            rx.el.div(
                rx.el.table(
                    rx.el.thead(
                        rx.el.tr(
                            rx.el.th("Capítulo", class_name="px-3 py-2 text-left text-xs font-semibold uppercase tracking-wide text-neutral-500"),
                            rx.el.th("Subcapítulo", class_name="px-3 py-2 text-left text-xs font-semibold uppercase tracking-wide text-neutral-500"),
                            rx.el.th("Importe", class_name="px-3 py-2 text-right text-xs font-semibold uppercase tracking-wide text-neutral-500"),
                        ),
                    ),
                    rx.el.tbody(
                        rx.foreach(
                            AccountSummaryState.expenses_summary,
                            lambda row: rx.el.tr(
                                rx.el.td(row["chapter"], class_name="px-3 py-2 text-sm text-neutral-700"),
                                rx.el.td(
                                    row["subchapter"],
                                    class_name=rx.cond(
                                        row["row_type"] == "detail",
                                        "px-3 py-2 text-sm text-neutral-700 pl-6",
                                        "px-3 py-2 text-sm font-semibold text-neutral-900",
                                    ),
                                ),
                                rx.el.td(
                                    row["amount_display"],
                                    class_name=rx.cond(
                                        row["row_type"] == "detail",
                                        "px-3 py-2 text-right text-sm font-medium text-neutral-700",
                                        "px-3 py-2 text-right text-sm font-semibold text-neutral-900",
                                    ),
                                ),
                                class_name=rx.cond(
                                    row["row_type"] == "grand_total",
                                    "border-t-2 border-neutral-400",
                                    "border-t border-neutral-200",
                                ),
                            ),
                        ),
                    ),
                    class_name="w-full",
                ),
                class_name="overflow-x-auto",
            ),
            rx.el.p(
                "No hay gastos registrados en el periodo seleccionado.",
                class_name="text-sm text-neutral-500",
            ),
        ),
        class_name="w-full rounded-xl border border-neutral-200 bg-neutral-100 p-5",
    )


def income_summary_table() -> rx.Component:
    return rx.el.div(
        rx.el.h3(
            "Ingresos por capítulos y subcapítulos",
            class_name="text-sm font-semibold text-neutral-900 mb-3",
        ),
        rx.el.div(
            rx.el.table(
                rx.el.thead(
                    rx.el.tr(
                        rx.el.th("Capítulo", class_name="px-3 py-2 text-left text-xs font-semibold uppercase tracking-wide text-neutral-500"),
                        rx.el.th("Alquiler", class_name="px-3 py-2 text-right text-xs font-semibold uppercase tracking-wide text-neutral-500"),
                        rx.el.th("Fianza", class_name="px-3 py-2 text-right text-xs font-semibold uppercase tracking-wide text-neutral-500"),
                        rx.el.th("Otros abonos", class_name="px-3 py-2 text-right text-xs font-semibold uppercase tracking-wide text-neutral-500"),
                        rx.el.th("Total", class_name="px-3 py-2 text-right text-xs font-semibold uppercase tracking-wide text-neutral-500"),
                    ),
                ),
                rx.el.tbody(
                    rx.foreach(
                        AccountSummaryState.income_summary,
                        lambda row: rx.el.tr(
                            rx.el.td(
                                row["chapter"],
                                class_name=rx.cond(
                                    row["row_type"] == "total",
                                    "px-3 py-2 text-sm font-semibold text-neutral-900",
                                    "px-3 py-2 text-sm text-neutral-700",
                                ),
                            ),
                            rx.el.td(row["alquiler_display"], class_name="px-3 py-2 text-right text-sm text-neutral-700"),
                            rx.el.td(row["fianza_display"], class_name="px-3 py-2 text-right text-sm text-neutral-700"),
                            rx.el.td(row["otros_display"], class_name="px-3 py-2 text-right text-sm text-neutral-700"),
                            rx.el.td(
                                row["total_display"],
                                class_name=rx.cond(
                                    row["row_type"] == "total",
                                    "px-3 py-2 text-right text-sm font-semibold text-neutral-900",
                                    "px-3 py-2 text-right text-sm font-medium text-neutral-900",
                                ),
                            ),
                            class_name=rx.cond(
                                row["row_type"] == "total",
                                "border-t-2 border-neutral-400",
                                "border-t border-neutral-200",
                            ),
                        ),
                    ),
                ),
                class_name="w-full",
            ),
            class_name="overflow-x-auto",
        ),
        class_name="w-full rounded-xl border border-neutral-200 bg-neutral-100 p-5",
    )


def monthly_summary_table() -> rx.Component:
    return rx.el.div(
        rx.el.h3(
            "Ingresos y gastos por meses",
            class_name="text-sm font-semibold text-neutral-900 mb-3",
        ),
        rx.el.div(
            rx.el.table(
                rx.el.thead(
                    rx.el.tr(
                        rx.el.th("Mes", class_name="px-3 py-2 text-left text-xs font-semibold uppercase tracking-wide text-neutral-500"),
                        rx.el.th("Ingresos", class_name="px-3 py-2 text-right text-xs font-semibold uppercase tracking-wide text-neutral-500"),
                        rx.el.th("Gastos", class_name="px-3 py-2 text-right text-xs font-semibold uppercase tracking-wide text-neutral-500"),
                        rx.el.th("Balance", class_name="px-3 py-2 text-right text-xs font-semibold uppercase tracking-wide text-neutral-500"),
                    ),
                ),
                rx.el.tbody(
                    rx.foreach(
                        AccountSummaryState.monthly_summary,
                        lambda row: rx.el.tr(
                            rx.el.td(
                                row["month"],
                                class_name=rx.cond(
                                    row["row_type"] == "total",
                                    "px-3 py-2 text-sm font-semibold text-neutral-900",
                                    "px-3 py-2 text-sm text-neutral-700",
                                ),
                            ),
                            rx.el.td(row["income_display"], class_name="px-3 py-2 text-right text-sm text-brand-600"),
                            rx.el.td(row["expense_display"], class_name="px-3 py-2 text-right text-sm text-danger-600"),
                            rx.el.td(
                                row["balance_display"],
                                class_name=rx.cond(
                                    row["row_type"] == "total",
                                    "px-3 py-2 text-right text-sm font-semibold text-neutral-900",
                                    "px-3 py-2 text-right text-sm font-medium text-neutral-900",
                                ),
                            ),
                            class_name=rx.cond(
                                row["row_type"] == "total",
                                "border-t-2 border-neutral-400",
                                "border-t border-neutral-200",
                            ),
                        ),
                    ),
                ),
                class_name="w-full",
            ),
            class_name="overflow-x-auto",
        ),
        class_name="w-full rounded-xl border border-neutral-200 bg-neutral-100 p-5",
    )


def yearly_summary_table() -> rx.Component:
    return rx.el.div(
        rx.el.h3(
            "Resumen por años",
            class_name="text-sm font-semibold text-neutral-900 mb-3",
        ),
        rx.el.div(
            rx.el.table(
                rx.el.thead(
                    rx.el.tr(
                        rx.el.th("Año", class_name="px-3 py-2 text-left text-xs font-semibold uppercase tracking-wide text-neutral-500"),
                        rx.el.th("Ingresos", class_name="px-3 py-2 text-right text-xs font-semibold uppercase tracking-wide text-neutral-500"),
                        rx.el.th("Gastos", class_name="px-3 py-2 text-right text-xs font-semibold uppercase tracking-wide text-neutral-500"),
                        rx.el.th("Balance", class_name="px-3 py-2 text-right text-xs font-semibold uppercase tracking-wide text-neutral-500"),
                    ),
                ),
                rx.el.tbody(
                    rx.foreach(
                        AccountSummaryState.yearly_summary,
                        lambda row: rx.el.tr(
                            rx.el.td(
                                row["year"],
                                class_name=rx.cond(
                                    row["row_type"] == "total",
                                    "px-3 py-2 text-sm font-semibold text-neutral-900",
                                    "px-3 py-2 text-sm text-neutral-700",
                                ),
                            ),
                            rx.el.td(row["income_display"], class_name="px-3 py-2 text-right text-sm text-brand-600"),
                            rx.el.td(row["expense_display"], class_name="px-3 py-2 text-right text-sm text-danger-600"),
                            rx.el.td(
                                row["balance_display"],
                                class_name=rx.cond(
                                    row["row_type"] == "total",
                                    "px-3 py-2 text-right text-sm font-semibold text-neutral-900",
                                    "px-3 py-2 text-right text-sm font-medium text-neutral-900",
                                ),
                            ),
                            class_name=rx.cond(
                                row["row_type"] == "total",
                                "border-t-2 border-neutral-400",
                                "border-t border-neutral-200",
                            ),
                        ),
                    ),
                ),
                class_name="w-full",
            ),
            class_name="overflow-x-auto",
        ),
        class_name="w-full rounded-xl border border-neutral-200 bg-neutral-100 p-5",
    )


def account_summary_section() -> rx.Component:
    return rx.el.section(
        rx.el.div(
            rx.el.div(
                rx.el.h2(
                    "Sumario de datos económicos",
                    class_name="text-xl font-semibold tracking-tight text-neutral-900",
                ),
                rx.el.p(
                    "En los resúmenes de ingresos y gastos solo se incluye: alquiler, gastos fijos y préstamos",
                    class_name="mt-1 max-w-2xl text-xs font-medium text-neutral-500",
                ),
                class_name="min-w-0",),
            year_selector(),
            class_name="flex items-center justify-between gap-3 mb-4",
        ),
        rx.el.div(
            expenses_summary_table(),
            income_summary_table(),
            class_name="grid grid-cols-1 gap-4 lg:grid-cols-2",
        ),
        rx.el.div(
            monthly_summary_table(),
            yearly_summary_table(),
            class_name="mt-4 grid grid-cols-1 gap-4 lg:grid-cols-2",
        ),
        class_name="w-full",
    )