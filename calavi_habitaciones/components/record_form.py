import reflex as rx

from calavi_habitaciones.states.record_state import RecordState


def field_error(name: str) -> rx.Component:
    return rx.cond(
        RecordState.errors[name] != "",
        rx.el.p(
            RecordState.errors[name],
            class_name="mt-1.5 text-xs font-medium text-danger-600",
        ),
        rx.el.div(),
    )

def room_summary_field() -> rx.Component:
    return rx.el.div(
        rx.el.div(
            rx.el.button(
                rx.icon("plus", stroke_width=3, size=20),
                "",
                type="button",
                on_click=RecordState.open_room_subform,
                class_name="w-full items-center justify-center gap-2 rounded-lg bg-brand-600 px-2 py-2 text-sm font-semibold text-white transition-colors hover:bg-brand-700 sm:w-auto",
            ),
            class_name="flex items-center justify-center",
        ),
        rx.cond(
            RecordState.selected_room_id != "",
            rx.el.div(
                rx.el.p(
                    RecordState.selected_room["room"],
                    class_name="text-sm font-semibold text-neutral-900",
                ),
                rx.el.p(                    
                    "Piso: " + RecordState.selected_room["floor"]
                    + " · Tipo de cama: " + RecordState.selected_room["bed_type"],
                    class_name="text-xs text-neutral-500",
                ),
                class_name="mt-2 rounded-lg border border-neutral-200 bg-neutral-50 px-3 py-2",
            ),
            rx.el.p(
                "Sin habitación seleccionada",
                class_name="mt-2 text-sm italic text-neutral-400",
            ),
        ),
        class_name="flex w-full flex-col",
    )


def tenant_summary_field() -> rx.Component:
    return rx.el.div(
        rx.el.div(
            rx.el.button(
                rx.icon("plus", stroke_width=3, size=20),
                    "",
                    type="button",
                    on_click=RecordState.open_tenant_subform,
                    class_name="w-full items-center justify-center gap-2 rounded-lg bg-brand-600 px-2 py-2 text-sm font-semibold text-white transition-colors hover:bg-brand-700 sm:w-auto",
            ),
            class_name="flex items-center justify-center",
        ),
        rx.cond(
            RecordState.selected_tenant_id != "",
            rx.el.div(
                rx.el.p(
                    RecordState.selected_tenant["tenant"],
                    class_name="text-sm font-semibold text-neutral-900",
                ),
                rx.el.p(
                    rx.hstack(
                        rx.icon("file-user", size=20),
                        RecordState.selected_tenant["tenant_dni"],
                        rx.icon("mail", size=20),
                        RecordState.selected_tenant["tenant_email"],
                        rx.icon("phone", size=20),
                        RecordState.selected_tenant["tenant_phone"],
                        class_name="text-xs text-neutral-500",
                        align="center"
                    ),
                ),
                class_name="mt-2 rounded-lg border border-neutral-200 bg-neutral-50 px-3 py-2",
            ),
            rx.el.p(
                "Sin inquilino seleccionado",
                class_name="mt-2 text-sm italic text-neutral-400",
            ),
        ),
        class_name="flex w-full flex-col",
    )

def input_field(
    label: str,
    name: str,
    placeholder: str = "",
    input_type: str = "text",
    on_change: rx.EventHandler | None = None,
    field_key: rx.Var | str | None = None,
) -> rx.Component:
    return rx.el.div(
        rx.el.label(
            label,
            html_for=f"record-{name}",
            class_name="text-xs font-semibold uppercase tracking-wide text-neutral-500",
        ),
        rx.el.input(
            id=f"record-{name}",
            name=name,
            type=input_type,
            placeholder=placeholder,
            default_value=RecordState.form_values[name],
            key=field_key if field_key is not None else f"{name}-{RecordState.form_key}",
            on_change=on_change,
            class_name=rx.cond(
                RecordState.errors[name] != "",
                "mt-2 w-full rounded-lg border border-danger-300 bg-neutral-100 px-3 py-2 text-sm font-medium text-neutral-900 placeholder:text-neutral-400 focus:border-danger-500 focus:ring-2 focus:ring-danger-200 outline-hidden",
                "mt-2 w-full rounded-lg border border-neutral-300 bg-neutral-100 px-3 py-2 text-sm font-medium text-neutral-900 placeholder:text-neutral-400 focus:border-brand-500 focus:ring-2 focus:ring-brand-200 outline-hidden",
            ),
        ),
        field_error(name),
        class_name="flex w-full flex-col",
    )

def notes_field() -> rx.Component:
    return rx.el.div(
        rx.el.label(
            "Observaciones",
            html_for="record-notes",
            class_name="text-xs font-semibold uppercase tracking-wide text-neutral-500",
        ),
        rx.el.textarea(
            id="record-notes",
            name="notes",
            rows="3",
            placeholder="",
            default_value=RecordState.form_values["notes"],
            key=f"notes-{RecordState.form_key}",
            class_name="mt-2 w-full resize-none rounded-lg border border-neutral-300 bg-neutral-100 px-3 py-2 text-sm font-medium text-neutral-900 placeholder:text-neutral-400 focus:border-brand-500 focus:ring-2 focus:ring-brand-200 outline-hidden",
        ),
        class_name="flex w-full flex-col",
    )


def form_group(title: str, icon: str, *children) -> rx.Component:
    return rx.el.div(
        rx.el.div(
            rx.icon(icon, class_name="h-4 w-4 text-brand-600"),
            rx.el.span(
                title,
                class_name="text-xs font-semibold uppercase tracking-wide text-neutral-500",
            ),
            class_name="flex items-center gap-2",
        ),
        rx.el.div(
            *children,
            class_name="mt-3 grid grid-cols-1 gap-4 sm:grid-cols-2",
        ),
        class_name="border-t border-neutral-100 pt-5 first:border-t-0 first:pt-0",
    )

def room_subform_dialog() -> rx.Component:
    return rx.dialog.root(
        rx.dialog.content(
            rx.el.div(
                rx.dialog.title("Habitación", class_name="text-base font-semibold text-neutral-900"),
                rx.dialog.close(
                    rx.el.button(
                        rx.icon("x", class_name="h-4 w-4"),
                        type="button",
                        class_name="flex h-7 w-7 items-center justify-center rounded-lg border border-neutral-200 text-neutral-500 hover:bg-neutral-50",
                    ),
                ),
                class_name="flex items-center justify-between border-b border-neutral-200 px-5 py-3",
            ),
            rx.el.div(
                rx.el.div(
                    rx.el.label(
                        "Habitación existente (sin arrendamiento activo)",
                        class_name="text-xs font-semibold uppercase tracking-wide text-neutral-500",
                    ),
                    rx.el.select(
                        rx.el.option("-- Crear nueva habitación --", value=""),
                        rx.foreach(
                            RecordState.room_available,
                            lambda r: rx.el.option(r["room"], value=r["id"]),
                        ),
                        value=RecordState.room_subform_selected_id,
                        on_change=RecordState.set_room_subform_selected_id,
                        class_name="mt-2 w-full rounded-lg border border-neutral-300 bg-white px-3 py-2 text-sm outline-hidden",
                    ),
                    class_name="flex flex-col",
                ),
                rx.cond(
                    RecordState.room_subform_selected_id == "",
                    rx.el.div(
                        rx.el.div(
                            rx.el.label("Número", class_name="text-xs font-semibold uppercase tracking-wide text-neutral-500"),
                            rx.el.input(
                                default_value=RecordState.room_subform_room,
                                on_change=RecordState.set_room_subform_room,
                                class_name="mt-2 w-full rounded-lg border border-neutral-300 px-3 py-2 text-sm outline-hidden",
                            ),
                            class_name="flex flex-col",
                        ),
                        rx.el.div(
                            rx.el.label("Piso", class_name="text-xs font-semibold uppercase tracking-wide text-neutral-500"),
                            rx.el.input(
                                default_value=RecordState.room_subform_floor,
                                on_change=RecordState.set_room_subform_floor,
                                class_name="mt-2 w-full rounded-lg border border-neutral-300 px-3 py-2 text-sm outline-hidden",
                            ),
                            class_name="flex flex-col",
                        ),
                        rx.el.div(
                            rx.el.label("Tipo de cama", class_name="text-xs font-semibold uppercase tracking-wide text-neutral-500"),
                            rx.el.select(
                                rx.foreach(RecordState.bed_type_options, lambda o: rx.el.option(o, value=o)),
                                value=RecordState.room_subform_bed_type,
                                on_change=RecordState.set_room_subform_bed_type,
                                class_name="mt-2 w-full rounded-lg border border-neutral-300 px-3 py-2 text-sm outline-hidden",
                            ),
                            class_name="flex flex-col",
                        ),
                        class_name="mt-4 grid grid-cols-2 gap-3",
                    ),
                    rx.el.div(),
                ),
                rx.cond(
                    RecordState.room_subform_error != "",
                    rx.el.p(RecordState.room_subform_error, class_name="mt-3 text-xs font-medium text-danger-600"),
                    rx.el.div(),
                ),
                class_name="px-5 py-4",
            ),
            rx.el.div(
                rx.dialog.close(
                    rx.el.button("Cancelar", type="button", class_name="rounded-lg border border-neutral-300 bg-white px-4 py-2 text-sm font-semibold text-neutral-700 hover:bg-neutral-50"),
                ),
                rx.el.button(
                    "Usar esta habitación", type="button", on_click=RecordState.confirm_room_subform,
                    class_name="rounded-lg bg-brand-600 px-4 py-2 text-sm font-semibold text-white hover:bg-brand-700",
                ),
                class_name="flex items-center justify-end gap-3 border-t border-neutral-200 px-5 py-3",
            ),
            class_name="w-full max-w-md rounded-xl border border-neutral-200 bg-white p-0",
        ),
        open=RecordState.room_subform_open,
        on_open_change=RecordState.set_room_subform_open,
    )


def tenant_subform_dialog() -> rx.Component:
    return rx.dialog.root(
        rx.dialog.content(
            rx.el.div(
                rx.dialog.title("Inquilino", class_name="text-base font-semibold text-neutral-900"),
                rx.dialog.close(
                    rx.el.button(
                        rx.icon("x", class_name="h-4 w-4"),
                        type="button",
                        class_name="flex h-7 w-7 items-center justify-center rounded-lg border border-neutral-200 text-neutral-500 hover:bg-neutral-50",
                    ),
                ),
                class_name="flex items-center justify-between border-b border-neutral-200 px-5 py-3",
            ),
            rx.el.div(
                rx.el.div(
                    rx.el.label(
                        "Inquilino existente (sin arrendamiento activo)",
                        class_name="text-xs font-semibold uppercase tracking-wide text-neutral-500",
                    ),
                    rx.el.select(
                        rx.el.option("-- Crear nuevo inquilino --", value=""),
                        rx.foreach(
                            RecordState.tenant_available,
                            lambda t: rx.el.option(t["tenant"], value=t["id"]),
                        ),
                        value=RecordState.tenant_subform_selected_id,
                        on_change=RecordState.set_tenant_subform_selected_id,
                        class_name="mt-2 w-full rounded-lg border border-neutral-300 bg-white px-3 py-2 text-sm outline-hidden",
                    ),
                    class_name="flex flex-col",
                ),
                rx.cond(
                    RecordState.tenant_subform_selected_id == "",
                    rx.el.div(
                        rx.el.div(
                            rx.el.label("Nombre y apellidos", class_name="text-xs font-semibold uppercase tracking-wide text-neutral-500"),
                            rx.el.input(
                                default_value=RecordState.tenant_subform_tenant,
                                on_change=RecordState.set_tenant_subform_tenant,
                                class_name="mt-2 w-full rounded-lg border border-neutral-300 px-3 py-2 text-sm outline-hidden",
                            ),
                            class_name="flex flex-col",
                        ),
                        rx.el.div(
                            rx.el.label("Documento de identidad", class_name="text-xs font-semibold uppercase tracking-wide text-neutral-500"),
                            rx.el.input(
                                default_value=RecordState.tenant_subform_dni,
                                on_change=RecordState.set_tenant_subform_dni,
                                class_name="mt-2 w-full rounded-lg border border-neutral-300 px-3 py-2 text-sm outline-hidden",
                            ),
                            class_name="flex flex-col",
                        ),
                        rx.el.div(
                            rx.el.label("Email", class_name="text-xs font-semibold uppercase tracking-wide text-neutral-500"),
                            rx.el.input(
                                default_value=RecordState.tenant_subform_email,
                                on_change=RecordState.set_tenant_subform_email,
                                type="email",
                                class_name="mt-2 w-full rounded-lg border border-neutral-300 px-3 py-2 text-sm outline-hidden",
                            ),
                            class_name="flex flex-col",
                        ),
                        rx.el.div(
                            rx.el.label("Teléfono", class_name="text-xs font-semibold uppercase tracking-wide text-neutral-500"),
                            rx.el.input(
                                default_value=RecordState.tenant_subform_phone,
                                on_change=RecordState.set_tenant_subform_phone,
                                type="tel",
                                class_name="mt-2 w-full rounded-lg border border-neutral-300 px-3 py-2 text-sm outline-hidden",
                            ),
                            class_name="flex flex-col",
                        ),
                        class_name="mt-4 grid grid-cols-2 gap-3",
                    ),
                    rx.el.div(),
                ),
                rx.cond(
                    RecordState.tenant_subform_error != "",
                    rx.el.p(RecordState.tenant_subform_error, class_name="mt-3 text-xs font-medium text-danger-600"),
                    rx.el.div(),
                ),
                class_name="px-5 py-4",
            ),
            rx.el.div(
                rx.dialog.close(
                    rx.el.button("Cancelar", type="button", class_name="rounded-lg border border-neutral-300 bg-white px-4 py-2 text-sm font-semibold text-neutral-700 hover:bg-neutral-50"),
                ),
                rx.el.button(
                    "Usar este inquilino", type="button", on_click=RecordState.confirm_tenant_subform,
                    class_name="rounded-lg bg-brand-600 px-4 py-2 text-sm font-semibold text-white hover:bg-brand-700",
                ),
                class_name="flex items-center justify-end gap-3 border-t border-neutral-200 px-5 py-3",
            ),
            class_name="w-full max-w-md rounded-xl border border-neutral-200 bg-white p-0",
        ),
        open=RecordState.tenant_subform_open,
        on_open_change=RecordState.set_tenant_subform_open,
    )

def record_form() -> rx.Component:
    return rx.el.form(
        rx.el.div(
            form_group("Habitación", "bed-double", room_summary_field()),
            form_group("Inquilino", "user-round", tenant_summary_field()),
            form_group(
                "Contrato",
                "file-text",
                input_field("Fecha de inicio", "lease_start", "", "date", on_change=RecordState.set_lease_start),
                input_field("Fecha de finalización", "lease_end", "", "date", field_key=f"lease_end-{RecordState.lease_end_key}"),
                input_field("Precio mensual", "rent", "", "number"),
                input_field("Fianza", "deposit", "", "number"),
            ),
            rx.el.div(
                notes_field(), class_name="border-t border-neutral-100 pt-5"
            ),
            rx.cond(
                RecordState.form_error != "",
                rx.el.div(
                    rx.icon(
                        "circle-alert",
                        class_name="mt-0.5 h-4 w-4 shrink-0 text-danger-600",
                    ),
                    rx.el.p(
                        RecordState.form_error,
                        class_name="text-sm font-medium text-danger-700",
                    ),
                    class_name="flex items-start gap-2 rounded-lg border border-danger-200 bg-danger-50 p-3",
                ),
                rx.el.div(),
            ),
            class_name="flex flex-col gap-5 px-5 py-5 sm:px-6",
        ),
        rx.el.div(
            rx.el.button(
                "Cancelar",
                type="button",
                on_click=RecordState.close_dialog,
                class_name="rounded-lg border border-neutral-300 bg-neutral-100 px-4 py-2 text-sm font-semibold text-neutral-700 transition-colors hover:bg-neutral-50",
            ),
            rx.el.button(
                rx.icon("check", class_name="h-4 w-4"),
                rx.el.span(RecordState.submit_label),
                type="submit",
                class_name="flex items-center gap-2 rounded-lg bg-brand-600 px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-brand-700",
            ),
            class_name="sticky bottom-0 flex items-center justify-end gap-3 border-t border-neutral-200 bg-white px-5 py-4 sm:px-6",
        ),
        on_submit=RecordState.submit_record,
        reset_on_submit=False,
        class_name="flex w-full flex-col",
    )


def record_dialog() -> rx.Component:
    return rx.dialog.root(
        rx.dialog.content(
            rx.el.div(
                rx.el.div(
                    rx.dialog.title(
                        RecordState.dialog_title,
                        class_name="text-lg font-semibold tracking-tight text-neutral-900",
                    ),
                    rx.dialog.description(
                        RecordState.dialog_subtitle,
                        class_name="mt-1 text-sm font-medium text-neutral-500",
                    ),
                    class_name="min-w-0",
                ),
                rx.dialog.close(
                    rx.el.button(
                        rx.icon("x", class_name="h-4 w-4"),
                        type="button",
                        aria_label="Close record form",
                        class_name="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border border-neutral-200 bg-white text-neutral-500 transition-colors hover:bg-neutral-50 hover:text-neutral-900",
                    ),
                ),
                class_name="sticky top-0 z-10 flex items-start justify-between gap-3 border-b border-neutral-200 bg-white px-5 py-4 sm:px-6",
            ),
            record_form(),
            class_name="max-h-[88vh] w-full max-w-3xl overflow-y-auto rounded-xl border border-neutral-200 bg-white p-0",
        ),
        open=RecordState.is_open,
        on_open_change=RecordState.set_is_open,
    )
