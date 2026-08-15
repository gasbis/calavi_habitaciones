import reflex as rx


def format_eur(value: float, decimals: int = 0) -> str:
    formatted = f"{value:,.{decimals}f}"
    formatted = formatted.replace(",", "·").replace(".", ",").replace("·", ".")
    return f"{formatted}€"