import reflex as rx
from datetime import date, datetime

from calavi_habitaciones.models import (
    list_account_entries,
    business_start_date,
    ACCOUNTING_TAXONOMY,
    _DISPLAY_FORMAT,
)
from calavi_habitaciones.utils.formatting import format_eur

_SPANISH_MONTHS_SHORT: list[str] = [
    "Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio",
    "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre",
]

_FIANZA_SUBCHAPTER = "Fianza"
_EXPENSE_CHAPTERS_FOR_TOTAL: set[str] = {"Gastos fijos", "Préstamo"}

GLOBAL_OPTION = "Todos"


class AccountSummaryState(rx.State):
    """Resumen visual de la contabilidad (calavi_inicio), filtrable por año o global."""

    selected_year: str = ""
    entries: list[dict] = []

    @rx.event
    async def load(self):
        from calavi_habitaciones.states.auth_state import AuthState
        auth = await self.get_state(AuthState)
        if not auth.is_authenticated:
            return
        self.entries = list_account_entries()
        if not self.selected_year:
            self.selected_year = str(date.today().year)

    @rx.event
    def set_selected_year(self, value: str):
        self.selected_year = value

    @rx.var
    def available_years(self) -> list[str]:
        start = business_start_date()
        start_year = start.year if start else date.today().year
        current_year = date.today().year
        if start_year > current_year:
            start_year = current_year
        years = [str(year) for year in range(current_year, start_year - 1, -1)]
        return [GLOBAL_OPTION] + years

    def _parse_date(self, value: str) -> date | None:
        try:
            return datetime.strptime(value, _DISPLAY_FORMAT).date()
        except ValueError:
            return None

    def _scoped_entries(self) -> list[dict]:
        """Entradas según el filtro de año, o todas si está seleccionado 'Todos'."""
        if self.selected_year == GLOBAL_OPTION:
            return self.entries
        result = []
        for entry in self.entries:
            parsed = self._parse_date(entry["mov_date"])
            if parsed is not None and str(parsed.year) == self.selected_year:
                result.append(entry)
        return result

    @rx.var
    def expenses_summary(self) -> list[dict]:
        year_entries = [
            entry for entry in self._scoped_entries()
            if entry["mov_type"] == "Gasto"
        ]
        grouped: dict[str, dict[str, float]] = {}
        chapter_order: list[str] = []
        for entry in year_entries:
            chapter = entry["chapter"]
            subchapter = entry["subchapter"]
            if chapter not in grouped:
                grouped[chapter] = {}
                chapter_order.append(chapter)
            grouped[chapter][subchapter] = grouped[chapter].get(subchapter, 0.0) + entry["amount"]
        chapter_order.sort()

        rows: list[dict] = []
        grand_total = 0.0
        for chapter in chapter_order:
            subchapters = grouped[chapter]
            chapter_total = 0.0
            first = True
            for subchapter in sorted(subchapters):
                amount = subchapters[subchapter]
                chapter_total += amount
                rows.append(
                    {
                        "row_type": "detail",
                        "chapter": chapter if first else "",
                        "subchapter": subchapter,
                        "amount_display": format_eur(amount),
                    }
                )
                first = False
            rows.append(
                {
                    "row_type": "chapter_total",
                    "chapter": "",
                    "subchapter": f"Total {chapter}",
                    "amount_display": format_eur(chapter_total),
                }
            )
            grand_total += chapter_total

        if rows:
            rows.append(
                {
                    "row_type": "grand_total",
                    "chapter": "",
                    "subchapter": "Total gastos",
                    "amount_display": format_eur(grand_total),
                }
            )
        return rows

    @rx.var
    def income_summary(self) -> list[dict]:
        income_chapters = list(ACCOUNTING_TAXONOMY.get("Ingreso", {}).keys())
        scoped_income = [
            entry for entry in self._scoped_entries()
            if entry["mov_type"] == "Ingreso"
        ]
        # La fianza se acumula globalmente, no según el año seleccionado.
        global_fianza = [
            entry for entry in self.entries
            if entry["mov_type"] == "Ingreso" and entry["subchapter"] == _FIANZA_SUBCHAPTER
        ]

        def amount_for(chapter: str, subchapter: str, source: list[dict]) -> float:
            return sum(
                entry["amount"]
                for entry in source
                if entry["chapter"] == chapter and entry["subchapter"] == subchapter
            )

        rows: list[dict] = []
        total_alquiler = 0.0
        total_fianza = 0.0
        total_otros = 0.0
        for chapter in income_chapters:
            alquiler = amount_for(chapter, "Alquiler", scoped_income)
            fianza = amount_for(chapter, _FIANZA_SUBCHAPTER, global_fianza)
            otros = amount_for(chapter, "Otros abonos", scoped_income)
            total_alquiler += alquiler
            total_fianza += fianza
            total_otros += otros
            rows.append(
                {
                    "row_type": "detail",
                    "chapter": chapter,
                    "alquiler_display": format_eur(alquiler),
                    "fianza_display": format_eur(fianza),
                    "otros_display": format_eur(otros),
                    "total_display": format_eur(alquiler + fianza + otros),
                }
            )

        rows.append(
            {
                "row_type": "total",
                "chapter": "Total",
                "alquiler_display": format_eur(total_alquiler),
                "fianza_display": format_eur(total_fianza),
                "otros_display": format_eur(total_otros),
                "total_display": format_eur(total_alquiler + total_fianza + total_otros),
            }
        )
        return rows

    @rx.var
    def monthly_summary(self) -> list[dict]:
        income_by_month = {month: 0.0 for month in range(1, 13)}
        expense_by_month = {month: 0.0 for month in range(1, 13)}
        for entry in self._scoped_entries():
            parsed = self._parse_date(entry["mov_date"])
            if parsed is None:
                continue
            if entry["mov_type"] == "Ingreso" and entry["subchapter"] != _FIANZA_SUBCHAPTER:
                income_by_month[parsed.month] += entry["amount"]
            elif entry["mov_type"] == "Gasto" and entry["chapter"] in _EXPENSE_CHAPTERS_FOR_TOTAL:
                expense_by_month[parsed.month] += entry["amount"]

        rows: list[dict] = []
        total_income = 0.0
        total_expense = 0.0
        for month in range(1, 13):
            income = income_by_month[month]
            expense = expense_by_month[month]
            total_income += income
            total_expense += expense
            rows.append(
                {
                    "row_type": "detail",
                    "month": _SPANISH_MONTHS_SHORT[month - 1],
                    "income_display": format_eur(income),
                    "expense_display": format_eur(expense),
                    "balance_display": format_eur(income - expense),
                }
            )
        rows.append(
            {
                "row_type": "total",
                "month": "Total",
                "income_display": format_eur(total_income),
                "expense_display": format_eur(total_expense),
                "balance_display": format_eur(total_income - total_expense),
            }
        )
        return rows

    @rx.var
    def yearly_summary(self) -> list[dict]:
        income_by_year: dict[int, float] = {}
        expense_by_year: dict[int, float] = {}
        for entry in self.entries:
            parsed = self._parse_date(entry["mov_date"])
            if parsed is None:
                continue
            if entry["mov_type"] == "Ingreso" and entry["subchapter"] != _FIANZA_SUBCHAPTER:
                income_by_year[parsed.year] = income_by_year.get(parsed.year, 0.0) + entry["amount"]
            elif entry["mov_type"] == "Gasto" and entry["chapter"] in _EXPENSE_CHAPTERS_FOR_TOTAL:
                expense_by_year[parsed.year] = expense_by_year.get(parsed.year, 0.0) + entry["amount"]

        years = sorted(set(income_by_year) | set(expense_by_year))
        rows: list[dict] = []
        total_income = 0.0
        total_expense = 0.0
        for year in years:
            income = income_by_year.get(year, 0.0)
            expense = expense_by_year.get(year, 0.0)
            total_income += income
            total_expense += expense
            rows.append(
                {
                    "row_type": "detail",
                    "year": str(year),
                    "income_display": format_eur(income),
                    "expense_display": format_eur(expense),
                    "balance_display": format_eur(income - expense),
                }
            )
        if rows:
            rows.append(
                {
                    "row_type": "total",
                    "year": "Total",
                    "income_display": format_eur(total_income),
                    "expense_display": format_eur(total_expense),
                    "balance_display": format_eur(total_income - total_expense),
                }
            )
        return rows