import reflex as rx
import os
from dotenv import load_dotenv
load_dotenv()

tailwind_config = {
        "theme": {
            "extend": {
              "colors": {
                "brand": {"50": "#fedbd6", "100": "#fcbeb5", "200": "#fba194", "300": "#fa8879", "400": "#f97563", "500": "#f96e5b", "600": "#cb5d4d", "700": "#9d4c3f"},
                "success": {"50": "#f0fdf4", "100": "#dcfce7", "200": "#bbf7d0", "500": "#22c55e", "600": "#16a34a", "700": "#15803d"},
                "warning": {"50": "#fefce8", "100": "#fef9c3", "200": "#fef08a", "600": "#ca8a04", "700": "#a16207"},
                "danger":  {"50": "#fef2f2", "100": "#fee2e2", "200": "#fecaca", "300": "#fca5a5", "500": "#ef4444", "600": "#dc2626", "700": "#b91c1c"},
                "neutral": {"50": "#e2f0f3", "100": "#bcdce3", "200": "#8cc2ce", "300": "#5ca9ba", "400": "#3d94a6", "500": "#3f9aae", "600": "#347a88", "700": "#2a5961", "800": "#213f42", "900": "#1a2c2b"},
                "archive": {"50": "#fffbeb", "100": "#fef3c7", "200": "#fde68a", "300": "#fcd34d", "600": "#d97706", "700": "#b45309", "800": "#92400e"},
                "admin": {"50": "#fffcf8", "100": "#fff9f1", "200": "#fff4e2", "300": "#ffeed3", "400": "#ffe8c2", "500": "#ffe2af", "600": "#e4ca9d", "700": "#c6af88", "800": "#a18f6f", "900": "#72654e",},
                },
            },
        },
}

config = rx.Config(
    app_name="calavi_habitaciones",
    show_built_with_reflex=False,
    db_url=os.environ.get("DATABASE_URL"),
    plugins=[
        rx.plugins.SitemapPlugin(),
        rx.plugins.TailwindV4Plugin(tailwind_config),
        rx.plugins.RadixThemesPlugin(theme=rx.theme(appearance="light")),
        ],
)
