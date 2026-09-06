import reflex as rx

from calavi_habitaciones.states.occupancy_state import OccupancyState
from calavi_habitaciones.states.account_summary_state import AccountSummaryState
from calavi_habitaciones.states.occupancy_state import RoomOccupancy
from rxconfig import tailwind_config

# *******************SUMARIO DE OCUPACIÓN HABITACIONES******************************

_colors = tailwind_config["theme"]["extend"]["colors"]
def radial_progress_css(
    value: rx.Var | int,
    max_value: rx.Var | int,
    size: int = 50,
    thickness: int = 7,
    color: str = _colors["brand"]["600"],
    track_color: str = _colors["neutral"]["50"],
    tooltip: str = "",
) -> rx.Component:
    pct = (value / max_value) * 100
    return rx.el.div(
        rx.el.div(
            style={
                "width": f"{size - thickness * 2}px",
                "height": f"{size - thickness * 2}px",
                "borderRadius": "9999px",
                "backgroundColor": _colors["neutral"]["100"],
            },
        ),
        rx.el.span(
            f"{value}%",
            class_name="absolute inset-0 flex items-center justify-center text-[10px] font-semibold text-neutral-700",
        ),
        style={
            "width": f"{size}px",
            "height": f"{size}px",
            "borderRadius": "9999px",
            "background": f"conic-gradient({color} {pct}%, {track_color} 0)",
            "display": "flex",
            "alignItems": "center",
            "justifyContent": "center",
            "flexShrink": "0",
            "position": "relative",
        },
        title=tooltip,
    )
    
def room_occupancy_card(item: RoomOccupancy) -> rx.Component:
    return rx.el.div(
        rx.el.p(
            rx.cond(
                item["room"] == "global",
                "Ocupación global",
                f"Habitación {item['room']}"
            ),
            class_name="text-sm font-semibold text-neutral-900",
        ),
        rx.el.div(
            rx.el.div(
                rx.cond(
                    item["room"] == "global",
                    radial_progress_css(
                        item["pct_year"], 100, size=60, thickness=8, tooltip="Ocupación del año en curso"
                    ),
                    radial_progress_css(
                        item["pct_year"], 100, tooltip="Ocupación del año en curso"
                    ),
                ),
                rx.el.span(
                    "Año en curso",
                    class_name=rx.cond(
                        item["room"] == "global",
                        "mt-2 text-sm font-medium text-neutral-500",
                        "mt-2 text-xs font-medium text-neutral-500"
                    ),
                ),
                class_name="flex flex-col items-center",
            ),
            rx.el.div(
                rx.cond(
                    item["room"] == "global",
                    radial_progress_css(
                        item["pct_total"], 100, size=60, thickness=8, tooltip="Ocupación desde el inicio del negocio"
                    ),
                    radial_progress_css(
                        item["pct_total"], 100, tooltip="Ocupación desde el inicio del negocio"
                    ),
                ),
                rx.el.span(
                    "Histórico",
                    class_name=rx.cond(
                        item["room"] == "global",
                        "mt-2 text-sm font-medium text-neutral-500",
                        "mt-2 text-xs font-medium text-neutral-500"
                    ),
                ),
                class_name="flex flex-col items-center",
            ),
            class_name="mt-4 flex items-center justify-around",
        ),
        class_name=rx.cond(
            item["room"] == "global",
            "w-full rounded-xl border border-neutral-200 bg-neutral-100 p-5",
            "w-full rounded-xl border border-neutral-200 bg-neutral-100 p-2"
        ),
    )




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
            class_name="text-sm font-semibold text-neutral-900 mb-0.5",
        ),
        rx.el.p(
            "Ingresos: solo alquiler; Gastos: solo gastos fijos y préstamos.",
            class_name="mt-1 max-w-2xl text-xs font-medium text-neutral-500 mb-3",
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
            class_name="text-sm font-semibold text-neutral-900 mb-0.5",
        ),
        rx.el.p(
            "Ingresos: solo alquiler; Gastos: solo gastos fijos y préstamos.",
            class_name="max-w-2xl text-xs font-medium text-neutral-500 mb-3",
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
                class_name="min-w-0",
            ),
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