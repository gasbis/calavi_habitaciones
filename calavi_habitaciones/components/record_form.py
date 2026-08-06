import reflex as rx

from calavi_habitaciones.states.record_state import RecordState


def field_error(name: str) -> rx.Component:
    return rx.cond(
        RecordState.errors[name] != "",
        rx.el.p(
            RecordState.errors[name],
            class_name="mt-1.5 text-xs font-medium text-red-600",
        ),
        rx.el.div(),
    )


def input_field(
    label: str,
    name: str,
    placeholder: str = "",
    input_type: str = "text",
) -> rx.Component:
    return rx.el.div(
        rx.el.label(
            label,
            html_for=f"record-{name}",
            class_name="text-xs font-semibold uppercase tracking-wide text-gray-500",
        ),
        rx.el.input(
            id=f"record-{name}",
            name=name,
            type=input_type,
            placeholder=placeholder,
            default_value=RecordState.form_values[name],
            key=f"{name}-{RecordState.form_key}",
            class_name=rx.cond(
                RecordState.errors[name] != "",
                "mt-2 w-full rounded-lg border border-red-300 bg-white px-3 py-2 text-sm font-medium text-gray-900 placeholder:text-gray-400 focus:border-red-500 focus:ring-2 focus:ring-red-200 outline-hidden",
                "mt-2 w-full rounded-lg border border-gray-300 bg-white px-3 py-2 text-sm font-medium text-gray-900 placeholder:text-gray-400 focus:border-violet-500 focus:ring-2 focus:ring-violet-200 outline-hidden",
            ),
        ),
        field_error(name),
        class_name="flex w-full flex-col",
    )


def select_field(
    label: str, name: str, options: rx.Var[list[str]]
) -> rx.Component:
    return rx.el.div(
        rx.el.label(
            label,
            html_for=f"record-{name}",
            class_name="text-xs font-semibold uppercase tracking-wide text-gray-500",
        ),
        rx.el.div(
            rx.el.select(
                rx.foreach(options, lambda o: rx.el.option(o, value=o)),
                id=f"record-{name}",
                name=name,
                default_value=RecordState.form_values[name],
                key=f"{name}-{RecordState.form_key}",
                class_name="w-full appearance-none rounded-lg border border-gray-300 bg-white py-2 pl-3 pr-9 text-sm font-medium text-gray-900 focus:border-violet-500 focus:ring-2 focus:ring-violet-200 outline-hidden",
            ),
            rx.icon(
                "chevron-down",
                class_name="pointer-events-none absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400",
            ),
            class_name="relative mt-2 w-full",
        ),
        field_error(name),
        class_name="flex w-full flex-col",
    )


def notes_field() -> rx.Component:
    return rx.el.div(
        rx.el.label(
            "Occupancy notes",
            html_for="record-notes",
            class_name="text-xs font-semibold uppercase tracking-wide text-gray-500",
        ),
        rx.el.textarea(
            id="record-notes",
            name="notes",
            rows="3",
            placeholder="Access instructions, maintenance preferences, roommate arrangements...",
            default_value=RecordState.form_values["notes"],
            key=f"notes-{RecordState.form_key}",
            class_name="mt-2 w-full resize-none rounded-lg border border-gray-300 bg-white px-3 py-2 text-sm font-medium text-gray-900 placeholder:text-gray-400 focus:border-violet-500 focus:ring-2 focus:ring-violet-200 outline-hidden",
        ),
        class_name="flex w-full flex-col",
    )


def form_group(title: str, icon: str, *children) -> rx.Component:
    return rx.el.div(
        rx.el.div(
            rx.icon(icon, class_name="h-4 w-4 text-violet-600"),
            rx.el.span(
                title,
                class_name="text-xs font-semibold uppercase tracking-wide text-gray-500",
            ),
            class_name="flex items-center gap-2",
        ),
        rx.el.div(
            *children,
            class_name="mt-3 grid grid-cols-1 gap-4 sm:grid-cols-2",
        ),
        class_name="border-t border-gray-100 pt-5 first:border-t-0 first:pt-0",
    )


def record_form() -> rx.Component:
    return rx.el.form(
        rx.el.div(
            form_group(
                "Room",
                "bed-double",
                input_field("Room number", "room", "204"),
                select_field(
                    "Building", "building", RecordState.building_options
                ),
                input_field("Floor", "floor", "2", "number"),
                select_field(
                    "Room type", "room_type", RecordState.room_type_options
                ),
                select_field("Status", "status", RecordState.status_options),
                select_field(
                    "Lease term", "lease_term", RecordState.lease_term_options
                ),
            ),
            form_group(
                "Resident",
                "user-round",
                input_field("Primary resident", "tenant", "Jordan Rivera"),
                input_field("Roommate (optional)", "roommate", "Sam Okafor"),
                input_field(
                    "Email", "tenant_email", "jordan.rivera@mail.com", "email"
                ),
                input_field(
                    "Phone", "tenant_phone", "+1 (415) 555-0142", "tel"
                ),
                input_field("Occupants", "occupants", "1", "number"),
                input_field("Capacity", "capacity", "2", "number"),
            ),
            form_group(
                "Lease & dates",
                "file-text",
                input_field("Checked in", "check_in", "", "date"),
                input_field("Lease start", "lease_start", "", "date"),
                input_field("Lease end", "lease_end", "", "date"),
                input_field("Next payment", "next_payment", "", "date"),
            ),
            form_group(
                "Rent & payments",
                "banknote",
                input_field("Monthly rent", "rent", "1450", "number"),
                input_field("Deposit held", "deposit", "2175", "number"),
                input_field("Outstanding balance", "balance", "0", "number"),
                select_field(
                    "Payment status",
                    "payment_status",
                    RecordState.payment_status_options,
                ),
                input_field("Last payment", "last_payment", "", "date"),
            ),
            form_group(
                "Emergency contact",
                "life-buoy",
                input_field("Contact name", "emergency_name", "Alex Rivera"),
                select_field(
                    "Relationship",
                    "emergency_relation",
                    RecordState.relation_options,
                ),
                input_field(
                    "Contact phone",
                    "emergency_phone",
                    "+1 (628) 555-0199",
                    "tel",
                ),
            ),
            rx.el.div(
                notes_field(), class_name="border-t border-gray-100 pt-5"
            ),
            rx.cond(
                RecordState.form_error != "",
                rx.el.div(
                    rx.icon(
                        "circle-alert",
                        class_name="mt-0.5 h-4 w-4 shrink-0 text-red-600",
                    ),
                    rx.el.p(
                        RecordState.form_error,
                        class_name="text-sm font-medium text-red-700",
                    ),
                    class_name="flex items-start gap-2 rounded-lg border border-red-200 bg-red-50 p-3",
                ),
                rx.el.div(),
            ),
            class_name="flex flex-col gap-5 px-5 py-5 sm:px-6",
        ),
        rx.el.div(
            rx.el.button(
                "Cancel",
                type="button",
                on_click=RecordState.close_dialog,
                class_name="rounded-lg border border-gray-300 bg-white px-4 py-2 text-sm font-semibold text-gray-700 transition-colors hover:bg-gray-50",
            ),
            rx.el.button(
                rx.icon("check", class_name="h-4 w-4"),
                rx.el.span(RecordState.submit_label),
                type="submit",
                class_name="flex items-center gap-2 rounded-lg bg-violet-600 px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-violet-700",
            ),
            class_name="sticky bottom-0 flex items-center justify-end gap-3 border-t border-gray-200 bg-white px-5 py-4 sm:px-6",
        ),
        on_submit=RecordState.submit_record,
        reset_on_submit=False,
        class_name="flex w-full flex-col",
    )


def record_dialog() -> rx.Component:
    return rx.cond(
        RecordState.is_open,
        rx.el.div(
            rx.el.div(
                rx.el.div(
                    rx.el.div(
                        rx.el.h2(
                            RecordState.dialog_title,
                            class_name="text-lg font-semibold tracking-tight text-gray-900",
                        ),
                        rx.el.p(
                            RecordState.dialog_subtitle,
                            class_name="mt-1 text-sm font-medium text-gray-500",
                        ),
                        class_name="min-w-0",
                    ),
                    rx.el.button(
                        rx.icon("x", class_name="h-4 w-4"),
                        type="button",
                        on_click=RecordState.close_dialog,
                        aria_label="Close record form",
                        class_name="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border border-gray-200 bg-white text-gray-500 transition-colors hover:bg-gray-50 hover:text-gray-900",
                    ),
                    class_name="sticky top-0 z-10 flex items-start justify-between gap-3 border-b border-gray-200 bg-white px-5 py-4 sm:px-6",
                ),
                record_form(),
                class_name="max-h-[88vh] w-full max-w-3xl overflow-y-auto rounded-xl border border-gray-200 bg-white",
            ),
            class_name="fixed inset-0 z-50 flex items-start justify-center overflow-y-auto bg-gray-900/40 p-4 py-8 backdrop-blur-sm",
        ),
        rx.el.div(),
    )
