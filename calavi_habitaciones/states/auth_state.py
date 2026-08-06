import logging
from typing import TypedDict

import reflex as rx

from calavi_habitaciones.models import (
    get_admin_account,
    hash_password,
    list_admin_accounts,
    seed_admin_accounts,
    set_admin_active,
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

    @rx.event
    async def sign_in(self, form_data: dict[str, str]):
        self.email_error = ""
        self.password_error = ""
        self.auth_error = ""
        try:
            email = form_data.get("email", "").strip().lower()
            password = form_data.get("password", "")

            if not email:
                self.email_error = "Enter your administrator email."
            elif "@" not in email or "." not in email.rsplit("@", 1)[-1]:
                self.email_error = "Enter a valid email address."

            if not password:
                self.password_error = "Enter your password."

            if self.email_error or self.password_error:
                return

            seed_admin_accounts()
            credential = get_admin_account(email)
            if (
                credential is None
                or not credential.active
                or not verify_password(password, credential.password_hash)
            ):
                self.auth_error = (
                    "We couldn't verify those administrator credentials."
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
            from calavi_habitaciones.models import seed_if_empty
            from calavi_habitaciones.states.occupancy_state import OccupancyState

            seed_if_empty()
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
                    "Administrator access is required to manage users."
                )
                return
            if email == self.current_user["email"]:
                self.management_notice = (
                    "Your own administrator access cannot be changed here."
                )
                return

            credential = get_admin_account(email)
            if credential is None:
                self.management_notice = (
                    "That administrator could not be found."
                )
                return

            next_active = not credential.active
            if not set_admin_active(email, next_active):
                self.management_notice = (
                    "Access could not be updated. Please try again."
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
            state_label = "enabled" if next_active else "disabled"
            self.management_notice = (
                f"{credential.name}'s access is now {state_label}."
            )
        except Exception as e:
            logging.exception(f"Error: {e}")
            self.management_notice = (
                "Access could not be updated. Please try again."
            )

            self.auth_error = (
                "Sign-in is temporarily unavailable. Please try again."
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
