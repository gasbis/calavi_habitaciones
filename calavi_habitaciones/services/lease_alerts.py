"""Aviso por SMS a los administradores cuando un alquiler "necesita
atención" (mismo criterio que el recuadro del header): caduca en 30
días o menos, o ya ha caducado.

Funciona igual que el chequeo de RADAR de gestion-cartera: una tarea de
fondo registrada con `app.register_lifespan_task` (ver
calavi_habitaciones.py) que vive dentro del proceso de la app, sin
depender de que nadie tenga la web abierta.

- Se revisa una vez al día, a las HORA_AVISO:MINUTO_AVISO (hora de
  Madrid). Si la app arranca después de esa hora (p.ej. tras un
  despliegue) y ese día aún no se ha revisado, se revisa al arrancar.
- Solo se avisa cuando un contrato CAMBIA de estado: al pasar a
  "Caduca pronto" y, más adelante, al pasar a "Caducado". El último
  estado avisado se guarda en OccupancyRecord.alert_status_sent, así
  que no se repite el SMS cada día.
- Si el contrato se prorroga y vuelve a "Activo", se rearma (se borra
  alert_status_sent) y volverá a avisar cuando toque de nuevo.
- Los contratos rescindidos no se revisan.
- Se manda UN SMS por administrador con todos los casos nuevos del día,
  solo a los administradores activos con teléfono de avisos.
- La tabla AlertRun hace de cerrojo por día: si hubiera más de una
  réplica de la app, solo una manda los SMS.
"""

import asyncio
import logging
from datetime import date, datetime, timedelta
from zoneinfo import ZoneInfo

from calavi_habitaciones.models import (
    _DISPLAY_FORMAT,
    _RECORD_STATUSES,
    claim_alert_run,
    lease_status,
    list_alert_phones,
    list_leases_for_alerts,
    set_lease_alert_status,
)
from calavi_habitaciones.services.twilio_sms import enviar_sms

ZONA_MADRID = ZoneInfo("Europe/Madrid")
HORA_AVISO = 9
MINUTO_AVISO = 5

ESTADO_ACTIVO = _RECORD_STATUSES[0]
ESTADO_CADUCA_PRONTO = _RECORD_STATUSES[1]
ESTADO_CADUCADO = _RECORD_STATUSES[2]


def _hora_aviso(dia: date) -> datetime:
    return datetime(dia.year, dia.month, dia.day, HORA_AVISO, MINUTO_AVISO, tzinfo=ZONA_MADRID)


def _proxima_ejecucion(ahora: datetime) -> datetime:
    candidata = _hora_aviso(ahora.date())
    if candidata <= ahora:
        candidata = _hora_aviso(ahora.date() + timedelta(days=1))
    return candidata


def _primer_nombre(nombre: str) -> str:
    partes = nombre.split()
    return partes[0] if partes else "?"


def _linea_caso(caso: dict, estado: str, hoy: date) -> str:
    cabecera = f"- Hab. {caso['room']} ({_primer_nombre(caso['tenant'])}): "
    try:
        fin = datetime.strptime(caso["lease_end"], _DISPLAY_FORMAT).date()
    except ValueError:
        return cabecera + estado.lower()
    if estado == ESTADO_CADUCADO:
        return cabecera + f"caducado desde el {caso['lease_end']}"
    dias = (fin - hoy).days
    cuando = "hoy" if dias == 0 else f"en {dias} dia{'' if dias == 1 else 's'}"
    return cabecera + f"caduca {cuando} ({caso['lease_end']})"


def construir_mensaje(casos: list[tuple[dict, str]], hoy: date) -> str:
    # Sin tildes a propósito: con caracteres fuera del alfabeto GSM el SMS
    # pasa a UCS-2 (70 caracteres por segmento en vez de 160) y cuesta más.
    lineas = ["Calavi - alquileres que necesitan atencion:"]
    lineas += [_linea_caso(caso, estado, hoy) for caso, estado in casos]
    return "\n".join(lineas)


def revisar_y_avisar(hoy: date | None = None) -> int:
    """Revisa todos los contratos vigentes y manda los SMS que toquen.
    Bloqueante (se llama desde un hilo aparte). Devuelve el número de
    casos nuevos avisados."""
    hoy = hoy or datetime.now(ZONA_MADRID).date()
    casos_nuevos: list[tuple[dict, str]] = []

    for caso in list_leases_for_alerts():
        estado = lease_status(caso["lease_end"], hoy)
        if estado in (ESTADO_CADUCA_PRONTO, ESTADO_CADUCADO):
            if caso["alert_status_sent"] != estado:
                casos_nuevos.append((caso, estado))
        elif estado == ESTADO_ACTIVO and caso["alert_status_sent"]:
            # Prorrogado: se rearma el aviso.
            set_lease_alert_status(caso["id"], None)

    if not casos_nuevos:
        logging.info("[AVISOS] Ningún alquiler nuevo que necesite atención.")
        return 0

    telefonos = list_alert_phones()
    if not telefonos:
        # No se marca nada como avisado: en cuanto algún administrador
        # añada su teléfono, el siguiente chequeo mandará el aviso.
        logging.warning(
            "[AVISOS] Hay %d caso(s) que necesitan atención pero ningún "
            "administrador activo tiene teléfono de avisos.",
            len(casos_nuevos),
        )
        return 0

    mensaje = construir_mensaje(casos_nuevos, hoy)
    enviado = False
    for telefono in telefonos:
        try:
            enviar_sms(mensaje, telefono)
            enviado = True
        except Exception as e:
            logging.error("[AVISOS] Fallo al mandar SMS a %s: %s", telefono, e)

    if enviado:
        for caso, estado in casos_nuevos:
            set_lease_alert_status(caso["id"], estado)
        return len(casos_nuevos)
    return 0


async def _ejecutar_si_toca(dia: date) -> None:
    clave = dia.isoformat()
    try:
        if not await asyncio.to_thread(claim_alert_run, clave):
            logging.info("[AVISOS] El chequeo del %s ya está hecho -- se salta.", clave)
            return
        avisados = await asyncio.to_thread(revisar_y_avisar, dia)
        logging.info("[AVISOS] Chequeo del %s terminado: %d caso(s) avisado(s).", clave, avisados)
    except Exception:
        logging.exception("[AVISOS] Fallo inesperado en el chequeo del %s", clave)


async def tarea_avisos_alquiler(app=None, starlette_app=None) -> None:
    """Tarea de fondo registrada en calavi_habitaciones.py."""
    print("[AVISOS] Tarea de avisos de alquiler arrancada.")
    try:
        ahora = datetime.now(ZONA_MADRID)
        if ahora >= _hora_aviso(ahora.date()):
            # Recuperar el chequeo de hoy si la app ha arrancado después
            # de la hora de aviso (el cerrojo evita repetirlo).
            await _ejecutar_si_toca(ahora.date())
        while True:
            proxima = _proxima_ejecucion(datetime.now(ZONA_MADRID))
            print(f"[AVISOS] Próximo chequeo: {proxima.strftime('%d/%m/%Y %H:%M')} (hora de Madrid).")
            await asyncio.sleep(max((proxima - datetime.now(ZONA_MADRID)).total_seconds(), 0))
            await _ejecutar_si_toca(proxima.date())
    except asyncio.CancelledError:
        print("[AVISOS] Tarea de avisos de alquiler detenida.")
        raise
