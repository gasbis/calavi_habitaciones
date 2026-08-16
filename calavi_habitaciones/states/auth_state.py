import logging
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
    verify_password,
)


class AdminCredential(TypedDict):
    email: str
    password: str
    name: str
    role: str
    active: bool


class AdminUser(TypedDict):
    email: str
    name: str
    role: str


class AdminDirectoryEntry(TypedDict):
    email: str
    name: str
    role: str
    active: bool


EMPTY_ADMIN_USER: AdminUser = AdminUser(
    email="",
    name="",
    role="",
)


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
            )
            self.admin_users = [
                AdminDirectoryEntry(**user) for user in list_admin_accounts()
            ]
            from calavi_habitaciones.states.occupancy_state import OccupancyState

            occupancy = await self.get_state(OccupancyState)
            occupancy._sync_rooms()
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
