import reflex as rx

from calavi_habitaciones.components.room_card import status_pill
from calavi_habitaciones.states.occupancy_state import OccupancyState


def payment_pill(status: rx.Var[str]) -> rx.Component:
    return rx.el.span(
        status,
        class_name=rx.match(
            status,
            (
                "Pgado",
                "w-fit rounded-full border border-green-200 bg-green-100 px-2.5 py-1 text-xs font-semibold text-green-700",
            ),
            (
                "Pendiente",
                "w-fit rounded-full border border-yellow-200 bg-yellow-100 px-2.5 py-1 text-xs font-semibold text-yellow-700",
            ),
            (
                "Atrasado",
                "w-fit rounded-full border border-red-200 bg-red-100 px-2.5 py-1 text-xs font-semibold text-red-700",
            ),
            "w-fit rounded-full border border-gray-200 bg-gray-100 px-2.5 py-1 text-xs font-semibold text-gray-700",
        ),
    )


def section_title(icon: str, label: str) -> rx.Component:
    return rx.el.div(
        rx.icon(icon, class_name="h-4 w-4 text-violet-600"),
        rx.el.span(
            label,
            class_name="text-xs font-semibold uppercase tracking-wide text-gray-500",
        ),
        class_name="flex items-center gap-2",
    )


def detail_row(label: str, value: rx.Var | str) -> rx.Component:
    return rx.el.div(
        rx.el.span(label, class_name="text-sm font-medium text-gray-500"),
        rx.el.span(
            value,
            class_name="text-right text-sm font-semibold text-gray-900",
        ),
        class_name="flex items-start justify-between gap-3",
    )


def contact_link(
    icon: str, value: rx.Var[str], href: rx.Var[str]
) -> rx.Component:
    return rx.el.a(
        rx.icon(icon, class_name="h-4 w-4 shrink-0 text-gray-400"),
        rx.el.span(value, class_name="truncate text-sm font-semibold"),
        href=href,
        class_name="flex min-w-0 items-center gap-2 rounded-lg border border-gray-200 bg-gray-50 px-3 py-2 text-gray-900 transition-colors hover:border-violet-300 hover:text-violet-700",
    )


def occupant_chip(name: rx.Var[str]) -> rx.Component:
    return rx.el.div(
        rx.image(
            src=f"https://api.dicebear.com/9.x/notionists/svg?seed={name}",
            class_name="size-6 rounded-full bg-white",
        ),
        rx.el.span(
            name, class_name="truncate text-sm font-semibold text-gray-900"
        ),
        class_name="flex min-w-0 items-center gap-2 rounded-full border border-gray-200 bg-gray-50 px-2 py-1",
    )


def contact_block() -> rx.Component:
    return rx.el.div(
        section_title("contact", "Contacto"),
        rx.el.div(
            contact_link(
                "mail",
                OccupancyState.selected_room["tenant_email"],
                f"mailto:{OccupancyState.selected_room['tenant_email']}",
            ),
            contact_link(
                "phone",
                OccupancyState.selected_room["tenant_phone"],
                f"tel:{OccupancyState.selected_room['tenant_phone']}",
            ),
            class_name="mt-3 flex flex-col gap-2",
        ),
        class_name="border-t border-gray-100 pt-5",
    )


#def occupancy_block() -> rx.Component:
    # return rx.el.div(
    #     section_title("users", "Ocupación actual"),
    #     rx.el.div(
    #         rx.foreach(
    #             OccupancyState.selected_room["occupant_names"],
    #             lambda name: occupant_chip(name),
    #         ),
    #         class_name="mt-3 flex flex-wrap gap-2",
    #     ),
        #rx.el.div(
            # detail_row(
            #     "Occupants",
            #     f"{OccupancyState.selected_room['occupants']} of {OccupancyState.selected_room['capacity']}",
            # ),
            # detail_row("Tipo de cama", OccupancyState.selected_room["room_type"]),
            # detail_row(
            #     "Localización",
            #     f"{OccupancyState.selected_room['building']} · Planta {OccupancyState.selected_room['floor']}",
            # ),
            # detail_row("F_inicio", OccupancyState.selected_room["check_in"]),
            # class_name="mt-3 flex flex-col gap-2.5",
        # ),
        #class_name="mt-5 border-t border-gray-100 pt-5",
    #)


def lease_block() -> rx.Component:
    return rx.el.div(
        section_title("file-text", "Alquiler"),
        rx.el.div(
            #detail_row("Tiempo restante", OccupancyState.selected_room["lease_term"]),
            detail_row("Inicio", OccupancyState.selected_room["lease_start"]),
            detail_row("Finalización", OccupancyState.selected_room["lease_end"]),
            detail_row(
                "Fianza depositada",
                f"{OccupancyState.selected_room['deposit']:,.0f}€",
            ),
            class_name="mt-3 flex flex-col gap-2.5",
        ),
        class_name="mt-5 border-t border-gray-100 pt-5",
    )


def payment_block() -> rx.Component:
    return rx.el.div(
        rx.el.div(
            section_title("banknote", "renta y pagos"),
            payment_pill(OccupancyState.selected_room["payment_status"]),
            class_name="flex items-center justify-between gap-3",
        ),
        rx.el.div(
            rx.el.p(
                f"{OccupancyState.selected_room['rent']:,.0f}€",
                class_name="text-2xl font-semibold tracking-tight text-gray-900",
            ),
            rx.el.span(
                "mensuales",
                class_name="text-sm font-medium text-gray-500",
            ),
            class_name="mt-3 flex items-baseline gap-2",
        ),
        rx.el.div(
            detail_row(
                "Saldo pendiente",
                f"{OccupancyState.selected_room['balance']:,.2f}€",
            ),
            detail_row(
                "Último pago", OccupancyState.selected_room["last_payment"]
            ),
            detail_row(
                "Próximo vencimiento", OccupancyState.selected_room["next_payment"]
            ),
            class_name="mt-3 flex flex-col gap-2.5",
        ),
        class_name="mt-5 border-t border-gray-100 pt-5",
    )


# def emergency_block() -> rx.Component:
#     return rx.el.div(
#         section_title("life-buoy", "Emergency contact"),
#         rx.el.div(
#             rx.el.div(
#                 rx.image(
#                     src=f"https://api.dicebear.com/9.x/initials/svg?seed={OccupancyState.selected_room['emergency_name']}",
#                     class_name="size-9 rounded-full bg-white",
#                 ),
#                 rx.el.div(
#                     rx.el.p(
#                         OccupancyState.selected_room["emergency_name"],
#                         class_name="truncate text-sm font-semibold text-gray-900",
#                     ),
#                     rx.el.p(
#                         OccupancyState.selected_room["emergency_relation"],
#                         class_name="text-xs font-medium text-gray-500",
#                     ),
#                     class_name="min-w-0",
#                 ),
#                 class_name="flex min-w-0 items-center gap-3",
#             ),
#             rx.el.a(
#                 rx.icon("phone-call", class_name="h-4 w-4"),
#                 rx.el.span(
#                     OccupancyState.selected_room["emergency_phone"],
#                     class_name="text-sm font-semibold",
#                 ),
#                 href=f"tel:{OccupancyState.selected_room['emergency_phone']}",
#                 class_name="mt-3 flex w-fit items-center gap-2 text-gray-700 transition-colors hover:text-violet-700",
#             ),
#             class_name="mt-3 rounded-lg border border-gray-200 bg-gray-50 p-3",
#         ),
#         class_name="mt-5 border-t border-gray-100 pt-5",
#     )


def notes_block() -> rx.Component:
    return rx.el.div(
        section_title("sticky-note", "Observaciones"),
        rx.el.p(
            OccupancyState.selected_room["notes"],
            class_name="mt-3 rounded-lg border border-violet-100 bg-violet-50 p-3 text-sm font-medium leading-relaxed text-gray-700",
        ),
        class_name="mt-5 border-t border-gray-100 pt-5",
    )


def detail_header() -> rx.Component:
    return rx.el.div(
        rx.el.div(
            rx.image(
                src=f"https://api.dicebear.com/9.x/notionists/svg?seed={OccupancyState.selected_room['tenant_email']}",
                class_name="size-12 shrink-0 rounded-full bg-gray-100",
            ),
            rx.el.div(
                rx.el.p(
                    OccupancyState.selected_room["tenant"],
                    class_name="truncate text-lg font-semibold tracking-tight text-gray-900",
                ),
                rx.el.p(
                    f"Habitación {OccupancyState.selected_room['room']}",
                    class_name="truncate text-sm font-medium text-gray-500",
                ),
                class_name="min-w-0",
            ),
            class_name="flex min-w-0 items-center gap-3",
        ),
        rx.el.button(
            rx.icon("x", class_name="h-4 w-4"),
            on_click=OccupancyState.clear_selection,
            aria_label="Close tenant details",
            class_name="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border border-gray-200 bg-white text-gray-500 transition-colors hover:bg-gray-50 hover:text-gray-900",
        ),
        class_name="flex items-start justify-between gap-3",
    )


def detail_content() -> rx.Component:
    return rx.el.div(
        detail_header(),
        rx.el.div(
            status_pill(OccupancyState.selected_room["record_status"]),
            # rx.el.span(
            #     OccupancyState.selected_room["lease_term"],
            #     class_name="w-fit rounded-full border border-gray-200 bg-gray-50 px-2.5 py-1 text-xs font-semibold text-gray-600",
            # ),
            class_name="mt-4 flex flex-wrap items-center gap-2 pb-5",
        ),
        contact_block(),
        #occupancy_block(),
        lease_block(),
        payment_block(),
        rx.el.div(
            rx.icon("calendar-check", class_name="h-4 w-4 text-violet-600"),
            rx.el.span(
                f"Contrato prorrogado hasta {OccupancyState.selected_room['lease_end']}",
                class_name="text-sm font-semibold text-violet-700",
            ),
            class_name="mt-5 flex items-center gap-2 rounded-lg border border-violet-100 bg-violet-50 p-3",
        ),
        #emergency_block(),
        notes_block(),
        class_name="flex w-full flex-col",
    )


def detail_empty() -> rx.Component:
    return rx.el.div(
        rx.el.div(
            rx.icon("user-round-search", class_name="h-6 w-6 text-violet-600"),
            class_name="flex h-12 w-12 items-center justify-center rounded-xl border border-violet-100 bg-violet-50",
        ),
        rx.el.p(
            "Ningún inquilino seleccionado",
            class_name="mt-4 text-base font-semibold text-gray-900",
        ),
        rx.el.p(
            "Seleccione cualquier habitación ocupada para ver los datos de contacto del residente, el contrato de arrendamiento, el historial de pagos y las notas sobre la ocupación.",
            class_name="mt-1 max-w-xs text-center text-sm font-medium text-gray-500",
        ),
        rx.el.div(
            rx.icon("mouse-pointer-click", class_name="h-4 w-4 text-gray-400"),
            rx.el.span(
                f"{OccupancyState.occupied_count} habitaciones ocupadas",
                class_name="text-xs font-semibold text-gray-600",
            ),
            class_name="mt-5 flex w-fit items-center gap-2 rounded-full border border-gray-200 bg-gray-50 px-3 py-1.5",
        ),
        class_name="flex w-full flex-col items-center justify-center px-6 py-14",
    )


def tenant_detail_panel() -> rx.Component:
    return rx.el.aside(
        rx.el.div(
            rx.el.div(
                rx.el.span(
                    "Detalles inquilino",
                    class_name="text-sm font-semibold text-gray-900",
                ),
                rx.el.span(
                    rx.cond(OccupancyState.has_selection, "Seleccionado", "Vacío"),
                    class_name=rx.cond(
                        OccupancyState.has_selection,
                        "w-fit rounded-full border border-violet-200 bg-violet-50 px-2.5 py-0.5 text-xs font-semibold text-violet-700",
                        "w-fit rounded-full border border-gray-200 bg-gray-50 px-2.5 py-0.5 text-xs font-semibold text-gray-500",
                    ),
                ),
                class_name="flex items-center justify-between gap-3 border-b border-gray-200 px-5 py-3",
            ),
            rx.cond(
                OccupancyState.has_selection,
                rx.el.div(detail_content(), class_name="p-5"),
                detail_empty(),
            ),
            class_name="w-full overflow-hidden rounded-xl border border-gray-200 bg-white",
        ),
        class_name="w-full shrink-0 lg:sticky lg:top-20 lg:w-[22rem] xl:w-96",
    )
