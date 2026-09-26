"""Cliente mínimo para mandar SMS vía la API de Twilio.

Copiado del proyecto gestion-cartera (services/twilio_sms.py), donde ya
se usa para los avisos de RADAR. Aquí sirve para avisar a los
administradores cuando un alquiler pasa a "Caduca pronto" o "Caducado"
(ver services/lease_alerts.py).

Variables de entorno necesarias (en `.env` en local y en las variables
del servicio en Railway, nunca en el código):
- TWILIO_ACCOUNT_SID
- TWILIO_AUTH_TOKEN
- TWILIO_SMS_FROM   (número de Twilio en formato internacional,
  p.ej. "+16105461454")
"""

import os

import httpx

BASE_URL = "https://api.twilio.com/2010-04-01"


def _config() -> tuple[str, str, str]:
    account_sid = os.environ.get("TWILIO_ACCOUNT_SID")
    auth_token = os.environ.get("TWILIO_AUTH_TOKEN")
    numero_origen = os.environ.get("TWILIO_SMS_FROM")
    faltan = [
        nombre
        for nombre, valor in [
            ("TWILIO_ACCOUNT_SID", account_sid),
            ("TWILIO_AUTH_TOKEN", auth_token),
            ("TWILIO_SMS_FROM", numero_origen),
        ]
        if not valor
    ]
    if faltan:
        raise RuntimeError(
            "Faltan variables de entorno para Twilio: " + ", ".join(faltan)
        )
    return account_sid, auth_token, numero_origen


def enviar_sms(mensaje: str, numero_destino: str) -> None:
    """Manda `mensaje` por SMS a `numero_destino` (formato internacional,
    p.ej. "+34600000000"). Lanza una excepción con el detalle que
    devuelva Twilio si el envío falla."""
    account_sid, auth_token, numero_origen = _config()
    respuesta = httpx.post(
        f"{BASE_URL}/Accounts/{account_sid}/Messages.json",
        auth=(account_sid, auth_token),
        data={"From": numero_origen, "To": numero_destino, "Body": mensaje},
        timeout=10,
    )
    try:
        respuesta.raise_for_status()
    except httpx.HTTPStatusError as e:
        # Twilio devuelve un JSON con "message" y "code" explicando el
        # motivo; lo añadimos para no tener que ir a sus logs.
        raise RuntimeError(
            f"Twilio respondió {respuesta.status_code}: {respuesta.text}"
        ) from e
