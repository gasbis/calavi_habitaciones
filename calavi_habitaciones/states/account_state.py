import reflex as rx
import logging
from io import BytesIO
from openpyxl import Workbook
from calavi_habitaciones.models import (
    AccountEntry,
    to_display_date,
    to_input_date,
    create_account_entry,
    list_account_entries,
    get_account_entry,
    update_account_entry,
    delete_account_entry,
    business_start_date,
    _DISPLAY_FORMAT,
    ACCOUNTING_TAXONOMY,
    SUBCHAPTERS_WITH_CONSUM,
    )
from datetime import date, datetime

_FORM_KEYS: list[str] = [
    "mov_type", "mov_date", "concept", "chapter", "subchapter", "amount", "consum", "observ",
] 

_IRPF_GLOBAL_OPTION = "Todos"

_IRPF_COLUMNS: list[tuple[str, str]] = [
    ("mov_type", "Tipo"),
    ("mov_date", "Fecha"),
    ("concept", "Concepto"),
    ("chapter", "Capítulo"),
    ("subchapter", "Subcapítulo"),
    ("amount", "Importe"),
    ("consum", "Consumo"),
    ("observ", "Observaciones"),
    ("bill_url", "Factura (URL)"),
]

def _blank_errors() -> dict[str, str]:
    return {key: "" for key in _FORM_KEYS}

def _blank_form() -> dict[str, str]:
    values = {key: "" for key in _FORM_KEYS}
    return values

class AccountState(rx.State):
    is_open: bool = False
    editing_id: str = ""
    form_key: int = 0
    form_values: dict[str, str] = _blank_form()
    errors: dict[str, str] = _blank_errors()
    form_error: str = ""
    move_type: str = ""
    chapter: str = ""
    subchapter: str = ""
    bill_url: str = ""
    notice: str = ""
    form_key: int = 0
    mode: str = "create"
    entries: list[dict] = []
    delete_target_id: str = ""
    delete_error: str = ""
    notice: str = ""
    account_search: str = ""
    show_bill_link_modal: bool = False
    bill_url_draft: str = ""
    irpf_dialog_open: bool = False
    irpf_year: str = ""
    
    @rx.var
    def sorted_entries(self) -> list[dict]:
        def sort_key(e):
            try:
                return datetime.strptime(e["mov_date"], _DISPLAY_FORMAT).date()
            except ValueError:
                return date.min
        return sorted(self.entries, key=sort_key, reverse=True)

    @rx.var
    def dialog_title(self) -> str:
        return "Editar movimiento" if self.mode == "edit" else "Nuevo movimiento"

    @rx.var
    def submit_label(self) -> str:
        return "Guardar cambios" if self.mode == "edit" else "Alta"
    
    @rx.var
    def move_type_options(self) -> list[str]:
        return list(ACCOUNTING_TAXONOMY.keys())
    
    @rx.var
    def chapter_options(self) -> list[str]:
        return list(ACCOUNTING_TAXONOMY.get(self.move_type, {}).keys())
    
    @rx.var
    def subchapter_options(self) -> list[str]:
        return ACCOUNTING_TAXONOMY.get(self.move_type, {}).get(self.chapter, [])
    
    @rx.var
    def show_consum(self) -> bool:
        return self.subchapter in SUBCHAPTERS_WITH_CONSUM
    
    @rx.var
    def account_filtered_search(self) -> list[dict]:
        query = self.account_search.strip().lower()
        if not query:
           return self.sorted_entries
        return [
            entrie
            for entrie in self.sorted_entries
            if query in entrie["mov_type"].lower()
            or query in entrie["chapter"].lower()
            or query in entrie["subchapter"].lower()
        ]

    @rx.var
    def irpf_available_years(self) -> list[str]:
        start = business_start_date()
        start_year = start.year if start else date.today().year
        current_year = date.today().year
        if start_year > current_year:
            start_year = current_year
        years = [str(year) for year in range(current_year, start_year - 1, -1)]
        return [_IRPF_GLOBAL_OPTION] + years
    
    @rx.event
    def open_bill_url(self, url: str):
        """Abre la factura en una pestaña nueva (usado desde el listado)."""
        return rx.call_script(f'window.open("{url}", "_blank", "noopener,noreferrer")')
        
    @rx.event#para el icono de factura del formulario
    def open_bill_icon(self):
        """Click en el icono del formulario: abre el enlace si existe, si no abre el modal."""
        if self.bill_url:
            return rx.call_script(f'window.open("{self.bill_url}", "_blank", "noopener,noreferrer")')
        self.bill_url_draft = self.bill_url
        self.show_bill_link_modal = True
        
    @rx.event
    def set_bill_url_draft(self, value: str):
        self.bill_url_draft = value

    @rx.event
    def save_bill_url_draft(self):
        self.bill_url = self.bill_url_draft.strip()
        self.show_bill_link_modal = False

    @rx.event
    def close_bill_link_modal(self):
        self.show_bill_link_modal = False

    @rx.event
    async def open_irpf_dialog(self):
        from calavi_habitaciones.states.auth_state import AuthState
        auth = await self.get_state(AuthState)
        if not auth.is_authenticated:
            return
        if not self.irpf_year:
            self.irpf_year = str(date.today().year)
        self.irpf_dialog_open = True

    @rx.event
    def set_irpf_year(self, value: str):
        self.irpf_year = value

    @rx.event
    def close_irpf_dialog(self):
        self.irpf_dialog_open = False

    @rx.event
    def download_irpf(self):
        """Genera un Excel con los asientos de accountingentry del año elegido (o todos) y lo descarga."""
        try:
            all_entries = list_account_entries()
            if self.irpf_year == _IRPF_GLOBAL_OPTION:
                selected_entries = all_entries
            else:
                selected_entries = []
                for entry in all_entries:
                    try:
                        mov_date = datetime.strptime(entry["mov_date"], _DISPLAY_FORMAT).date()
                    except ValueError:
                        continue
                    if str(mov_date.year) == self.irpf_year:
                        selected_entries.append(entry)

            def sort_key(entry: dict):
                try:
                    return datetime.strptime(entry["mov_date"], _DISPLAY_FORMAT).date()
                except ValueError:
                    return date.min

            selected_entries = sorted(selected_entries, key=sort_key)

            workbook = Workbook()
            sheet = workbook.active
            sheet.title = "IRPF"
            sheet.append([label for _, label in _IRPF_COLUMNS])
            for entry in selected_entries:
                sheet.append([entry.get(key, "") for key, _ in _IRPF_COLUMNS])

            buffer = BytesIO()
            workbook.save(buffer)
            buffer.seek(0)

            label = "todos" if self.irpf_year == _IRPF_GLOBAL_OPTION else self.irpf_year
            self.irpf_dialog_open = False
            return rx.download(data=buffer.getvalue(), filename=f"IRPF_{label}.xlsx")
        except Exception as e:
            logging.exception(f"Error: {e}")
            self.notice = "No se ha podido generar el Excel. Por favor inténtalo de nuevo."
        
    @rx.event
    def set_account_search(self, value: str):
        self.account_search = value
    
    @rx.event
    def set_move_type(self, value: str):
        self.move_type = value
        self.chapter = ""
        self.subchapter = ""
        
    @rx.event
    def set_chapter(self, value: str):
        self.chapter = value
        self.subchapter = ""
        
    @rx.event
    def set_subchapter(self, value: str):
        self.subchapter = value
    
    @rx.event
    def set_is_open(self, value: bool):
        self.is_open = value
        
    @rx.event
    async def open_create(self):
        from calavi_habitaciones.states.auth_state import AuthState
        auth = await self.get_state(AuthState)
        if not auth.is_authenticated:
            return
        self._reset_form()
        self.is_open = True
        self.bill_url = ""
        
    @rx.event
    def close_dialog(self):
        self.is_open = False
        self._reset_form()
        
    @rx.event
    async def submit_record(self, form_data: dict):
        try:
            from calavi_habitaciones.states.auth_state import AuthState
            auth = await self.get_state(AuthState)
            if not auth.is_authenticated:
                return
            data = {key: str(form_data.get(key, "")).strip() for key in _FORM_KEYS}
            self.form_values = data            
            errors = self._validate(data)
            self.errors = errors
            if any(errors.values()):
                self.form_error = "Por favor, rellene los campos resaltados antes de validar."
                return
            self.form_error = ""
            # record_id = self.editing_id
            record = AccountEntry(
                mov_type=self.move_type,
                mov_date=to_display_date(data["mov_date"]),
                concept=data["concept"],
                chapter=self.chapter,
                subchapter=self.subchapter,
                amount=float(data["amount"]),
                consum=float(data["consum"]) if self.show_consum and data["consum"] else 0.0,
                observ=data["observ"],
                bill_url=self.bill_url,
            )

            if self.mode == "edit":
                if not update_account_entry(self.editing_id, record):
                    self.form_error = "Este registro no existe."
                    return
                message = "El movimiento ha sido actualizado."
            else:
                new_id = create_account_entry(record)
                if new_id == "":
                    self.form_error = "El registro no se ha guardado. Por favor inténtalo de nuevo."
                    return
                message = "El movimiento ha sido dado de alta."

            self._sync_entries()
            self.is_open = False
            self._reset_form()
            self.notice = message
            yield rx.toast(message, duration=2500)
        except Exception as e:
            logging.exception(f"Error: {e}")
            self.form_error = "El registro no se ha guardado. Por favor inténtalo de nuevo."
        
    @rx.event
    async def load(self):
        from calavi_habitaciones.states.auth_state import AuthState
        auth = await self.get_state(AuthState)
        if not auth.is_authenticated:
            return
        self._sync_entries()
        
    @rx.event
    async def open_edit(self, entry_id: str):
        from calavi_habitaciones.states.auth_state import AuthState
        auth = await self.get_state(AuthState)
        if not auth.is_authenticated:
            return
        entry = get_account_entry(entry_id)
        if not entry:
            return
        self.mode = "edit"
        self.editing_id = entry["id"]
        self.move_type = entry["mov_type"]
        self.chapter = entry["chapter"]
        self.subchapter = entry["subchapter"]
        self.bill_url = entry.get("bill_url", "")
        self.form_values = {
            "mov_type": entry["mov_type"],
            "mov_date": to_input_date(entry["mov_date"]),
            "concept": entry["concept"],
            "chapter": entry["chapter"],
            "subchapter": entry["subchapter"],
            "amount": f"{entry['amount']:.2f}",
            "consum": f"{entry['consum']:.2f}" if entry["consum"] else "",
            "observ": entry["observ"],
            "bill_url": entry["bill_url"],
        }
        self.errors = _blank_errors()
        self.form_error = ""
        self.form_key += 1
        self.is_open = True
        
    @rx.event
    async def request_delete(self):
        from calavi_habitaciones.states.auth_state import AuthState
        auth = await self.get_state(AuthState)
        if not auth.is_authenticated:
            return
        self.delete_target_id = self.editing_id
        self.delete_error = ""

    @rx.event
    def cancel_delete(self):
        self.delete_target_id = ""

    @rx.event
    async def confirm_delete(self):
        from calavi_habitaciones.states.auth_state import AuthState
        auth = await self.get_state(AuthState)
        if not auth.is_authenticated:
            return
        if not delete_account_entry(self.delete_target_id):
            self.delete_error = "No se ha podido borrar el registro."
            return
        self._sync_entries()
        self.delete_target_id = ""
        self.is_open = False
        self._reset_form()
        self.notice = "El movimiento ha sido eliminado."
        yield rx.toast("Movimiento eliminado", duration=2500)

    @rx.event
    def set_delete_target_open(self, value: bool):
        if not value:
            self.delete_target_id = ""
        
    def _sync_entries(self):
        self.entries = list_account_entries()

    def _reset_form(self):
        self.form_values = _blank_form()
        self.errors = _blank_errors()
        self.form_error = ""
        self.move_type = ""
        self.chapter = ""
        self.subchapter = ""
        self.form_key += 1
        self.mode = "create"
        self.editing_id = ""
        self.bill_url = ""
        
    def _validate(self, data: dict[str, str]) -> dict[str, str]:
        errors = _blank_errors()

        if not self.move_type:
            errors["mov_type"] = "El tipo de movimiento es obligatorio."

        if not to_display_date(data["mov_date"]):
            errors["mov_date"] = "La fecha es obligatoria."

        if not self.chapter:
            errors["chapter"] = "El capítulo es obligatorio."
            
        if not self.subchapter:
            errors["subchapter"] = "El subcapítulo es obligatorio."

        try:
            float(data["amount"])
        except ValueError:
            errors["amount"] = "El importe debe ser un número."

        if self.show_consum:
            try:
                float(data["consum"])
            except ValueError:
                errors["consum"] = "El consumo es obligatorio para este subcapítulo."

        return errors
    