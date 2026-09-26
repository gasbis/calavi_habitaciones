import asyncio
import logging
import re
from typing import TypedDict

import reflex as rx

from calavi_habitaciones.models import (
    create_admin_account,
    email_exists,
    get_admin_account,
    hash_password,
    list_admin_accounts,
    set_admin_active,
    set_admin_password,
    set_admin_phone,
    verify_password,
)


class AdminUser(TypedDict):
    email: str
    name: str
    role: str
    phone: str


class AdminDirectoryEntry(TypedDict):
    email: str
    name: str
    role: str
    active: bool
    phone: str


EMPTY_ADMIN_USER: AdminUser = AdminUser(
    email="",
    name="",
    role="",
    phone="",
)


def normalize_phone(raw: str) -> str | None:
    """Devuelve el teléfono en formato internacional ("+34600000000"),
    "" si viene vacío (= quitar el teléfono) o None si no es válido.
    Un número español de 9 cifras sin prefijo se asume +34."""
    phone = re.sub(r"[\s\-\.\(\)]", "", raw or "")
    if not phone:
        return ""
    if phone.startswith("00"):
        phone = "+" + phone[2:]
    if re.fullmatch(r"[6789]\d{8}", phone):
        phone = "+34" + phone
    if not re.fullmatch(r"\+\d{8,15}", phone):
        return None
    return phone


class AuthState(rx.State):
    admin_users: list[AdminDirectoryEntry] = []
    is_authenticated: bool = False
    current_user: AdminUser = EMPTY_ADMIN_USER
    email_error: str = ""
    password_error: str = ""
    auth_error: str = ""
    management_notice: str = ""
    
    new_admin_open: bool = False
    new_admin_email_error: str = ""
    new_admin_password_error: str = ""
    new_admin_error: str = ""

    change_password_open: bool = False
    change_password_current_error: str = ""
    change_password_new_error: str = ""
    change_password_error: str = ""
    change_password_notice: str = ""

    phone_open: bool = False
    phone_error: str = ""
    phone_sending_test: bool = False

    @rx.event
    def load_admins(self):
        if not self.is_authenticated:
            return
        self.admin_users = [
            AdminDirectoryEntry(**user) for user in list_admin_accounts()
        ]
        
    @rx.event
    def set_new_admin_open(self, value: bool):
        self.new_admin_open = value
    
    @rx.event
    def set_change_password_open(self, value: bool):
        self.change_password_open = value
        
    @rx.event
    def open_new_admin(self):
        if not self.is_authenticated:
            return
        self.new_admin_email_error = ""
        self.new_admin_password_error = ""
        self.new_admin_error = ""
        self.new_admin_open = True

    @rx.event
    def close_new_admin(self):
        self.new_admin_open = False

    @rx.event
    def create_admin(self, form_data: dict):
        self.new_admin_email_error = ""
        self.new_admin_password_error = ""
        self.new_admin_error = ""
        if not self.is_authenticated:
            self.new_admin_error = "Se requiere acceso de administrador."
            return

        email = form_data.get("email", "").strip().lower()
        name = form_data.get("name", "").strip()
        role = form_data.get("role", "").strip()
        password = form_data.get("password", "")
        confirm = form_data.get("confirm_password", "")

        if not email or "@" not in email or "." not in email.rsplit("@", 1)[-1]:
            self.new_admin_email_error = "Introduce un correo válido."
        elif email_exists(email):
            self.new_admin_email_error = "Ya existe un administrador con ese correo."

        if len(password) < 8:
            self.new_admin_password_error = "La contraseña debe tener al menos 8 caracteres."
        elif password != confirm:
            self.new_admin_password_error = "Las contraseñas no coinciden."

        if self.new_admin_email_error or self.new_admin_password_error:
            return

        if not create_admin_account(email, name, role, password):
            self.new_admin_error = "No se ha podido crear el administrador. Inténtalo de nuevo."
            return

        self.admin_users = [AdminDirectoryEntry(**user) for user in list_admin_accounts()]
        self.new_admin_open = False
        self.management_notice = f"{name or email} ha sido añadido como administrador."
        
    @rx.event
    def open_change_password(self):
        if not self.is_authenticated:
            return
        self.change_password_current_error = ""
        self.change_password_new_error = ""
        self.change_password_error = ""
        self.change_password_notice = ""
        self.change_password_open = True

    @rx.event
    def close_change_password(self):
        self.change_password_open = False

    @rx.event
    def submit_change_password(self, form_data: dict):
        self.change_password_current_error = ""
        self.change_password_new_error = ""
        self.change_password_error = ""
        if not self.is_authenticated:
            self.change_password_error = "Debes iniciar sesión."
            return

        current_password = form_data.get("current_password", "")
        new_password = form_data.get("new_password", "")
        confirm_password = form_data.get("confirm_password", "")

        credential = get_admin_account(self.current_user["email"])
        if credential is None or not verify_password(current_password, credential.password_hash):
            self.change_password_current_error = "La contraseña actual no es correcta."
            return

        if len(new_password) < 8:
            self.change_password_new_error = "La nueva contraseña debe tener al menos 8 caracteres."
            return
        if new_password != confirm_password:
            self.change_password_new_error = "Las contraseñas no coinciden."
            return

        if not set_admin_password(self.current_user["email"], hash_password(new_password)):
            self.change_password_error = "No se ha podido actualizar la contraseña. Inténtalo de nuevo."
            return

        self.change_password_open = False
        self.change_password_notice = "Tu contraseña se ha actualizado correctamente."
        yield rx.toast(self.change_password_notice, duration=2500)

    @rx.event
    def set_phone_open(self, value: bool):
        self.phone_open = value

    @rx.event
    def open_phone(self):
        if not self.is_authenticated:
            return
        self.phone_error = ""
        self.phone_open = True

    @rx.event
    def submit_phone(self, form_data: dict):
        self.phone_error = ""
        if not self.is_authenticated:
            self.phone_error = "Debes iniciar sesión."
            return
        phone = normalize_phone(form_data.get("phone", ""))
        if phone is None:
            self.phone_error = "Introduce un móvil válido, p.ej. +34600000000."
            return
        email = self.current_user["email"]
        if not set_admin_phone(email, phone or None):
            self.phone_error = "No se ha podido guardar el teléfono. Inténtalo de nuevo."
            return
        self.current_user = AdminUser(**{**dict(self.current_user), "phone": phone})
        self.admin_users = [
            AdminDirectoryEntry(**{**dict(u), "phone": phone}) if u["email"] == email else u
            for u in self.admin_users
        ]
        self.phone_open = False
        yield rx.toast(
            "Teléfono guardado: recibirás los avisos por SMS."
            if phone
            else "Teléfono eliminado: ya no recibirás avisos por SMS.",
            duration=2500,
        )

    @rx.event
    async def send_test_sms(self):
        if not self.is_authenticated:
            return
        phone = self.current_user["phone"]
        if not phone:
            self.phone_error = "Primero guarda un teléfono."
            return
        from calavi_habitaciones.services.twilio_sms import enviar_sms

        self.phone_error = ""
        self.phone_sending_test = True
        yield
        try:
            await asyncio.to_thread(
                enviar_sms,
                "Calavi: SMS de prueba. Aqui recibiras los avisos de alquileres que necesitan atencion.",
                phone,
            )
            yield rx.toast(f"SMS de prueba enviado a {phone}.", duration=2500)
        except Exception as e:
            logging.error(f"Fallo al mandar SMS de prueba: {e}")
            self.phone_error = f"No se ha podido enviar el SMS: {e}"
        finally:
            self.phone_sending_test = False

    @rx.event
    async def sign_in(self, form_data: dict):
        self.email_error = ""
        self.password_error = ""
        self.auth_error = ""
        try:
            email = form_data.get("email", "").strip().lower()
            password = form_data.get("password", "")

            if not email:
                self.email_error = "Introduzce tu correo electrónico."
            elif "@" not in email or "." not in email.rsplit("@", 1)[-1]:
                self.email_error = "Entra un correo válido."

            if not password:
                self.password_error = "Ingresa tu contraseña."

            if self.email_error or self.password_error:
                return

            credential = get_admin_account(email)
            if (
                credential is None
                or not credential.active
                or not verify_password(password, credential.password_hash)
            ):
                self.auth_error = (
                    "No hemos podido verificar tus credenciales de administrador."
                )
                self.is_authenticated = False
                self.current_user = EMPTY_ADMIN_USER
                return

            self.is_authenticated = True
            self.current_user = AdminUser(
                email=credential.email,
                name=credential.name,
                role=credential.role,
                phone=credential.phone or "",
            )
            self.admin_users = [
                AdminDirectoryEntry(**user) for user in list_admin_accounts()
            ]
            from calavi_habitaciones.states.occupancy_state import OccupancyState

            occupancy = await self.get_state(OccupancyState)
            occupancy._sync_rooms()

            from calavi_habitaciones.states.account_summary_state import AccountSummaryState

            account_summary = await self.get_state(AccountSummaryState)
            account_summary._sync_entries()
        except Exception as e:
            logging.exception(f"Error: {e}")
            self.is_authenticated = False
            self.current_user = EMPTY_ADMIN_USER

    @rx.event
    def toggle_user_access(self, email: str):
        try:
            if not self.is_authenticated:
                self.management_notice = (
                    "Se requiere acceso de administrador para gestionar usuarios."
                )
                return
            if email == self.current_user["email"]:
                self.management_notice = (
                    "Tu acceso de administrador no puede modificarse aquí."
                )
                return

            credential = get_admin_account(email)
            if credential is None:
                self.management_notice = (
                    "Este administrador no ha podido ser encontrado."
                )
                return

            next_active = not credential.active
            if not set_admin_active(email, next_active):
                self.management_notice = (
                    "No se ha podido actualizar el acceso. Por favor, inténtalo de nuevo."
                )
                return

            updated_users = [
                AdminDirectoryEntry(
                    email=user["email"],
                    name=user["name"],
                    role=user["role"],
                    active=next_active
                    if user["email"] == email
                    else user["active"],
                    phone=user["phone"],
                )
                for user in self.admin_users
            ]
            self.admin_users = updated_users
            state_label = "activado" if next_active else "desactivado"
            self.management_notice = (
                f"{credential.name} tu usuario está ahora {state_label}."
            )
        except Exception as e:
            logging.exception(f"Error: {e}")
            self.management_notice = (
                "No se ha podido actualizar el acceso. Por favor, inténtalo de nuevo."
            )

            self.auth_error = (
                "Acceso no disponible en este momento. Inténtelo de nuevo."
            )

    @rx.event
    async def logout(self):
        try:
            self.is_authenticated = False
            self.current_user = EMPTY_ADMIN_USER
            self.email_error = ""
            self.password_error = ""
            self.auth_error = ""
            self.management_notice = ""
            from calavi_habitaciones.states.occupancy_state import OccupancyState

            occupancy = await self.get_state(OccupancyState)
            occupancy.selected_id = ""
        except Exception as e:
            logging.exception(f"Error: {e}")
            self.is_authenticated = False
            self.current_user = EMPTY_ADMIN_USER