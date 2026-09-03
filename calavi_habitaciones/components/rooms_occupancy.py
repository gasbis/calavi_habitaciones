import reflex as rx
from calavi_habitaciones.states.occupancy_state import RoomOccupancy
from rxconfig import tailwind_config


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


