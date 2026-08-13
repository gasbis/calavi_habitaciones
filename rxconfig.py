import reflex as rx
import os
from dotenv import load_dotenv
load_dotenv()

config = rx.Config(
    app_name="calavi_habitaciones",
    db_url=os.environ.get("DATABASE_URL"),
    plugins=[
        rx.plugins.SitemapPlugin(),
        rx.plugins.TailwindV4Plugin(),
        rx.plugins.RadixThemesPlugin(theme=rx.theme(appearance="light")),
        ],
)
