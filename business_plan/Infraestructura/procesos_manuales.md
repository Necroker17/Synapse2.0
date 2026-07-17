# Procesos Manuales y Soporte Operativo

> Mantenido por `/product`. Describe los procedimientos operativos manuales de Synapse AI Scanner. Al no contar con automatización directa para la plataforma de TradingView, estos procesos son críticos para mantener la integridad del negocio y la satisfacción del cliente.

---

## 1. Activación y Control de Accesos en TradingView

TradingView **no ofrece una API pública** para gestionar el acceso a scripts tipo *Invite-Only* (Solo Invitados). Por lo tanto, el alta y baja de usuarios debe realizarse de forma manual.

### 1.1 Proceso de Alta (Activación de Acceso)
Cuando se recibe una alerta de activación (vía Make/Google Sheets por nuevo Trial o compra aprobada):

1. **Obtener el Username:** Extrae el nombre de usuario de TradingView desde la base de datos de Google Sheets.
2. **Validar el formato:** Asegúrate de que no tenga espacios ni caracteres no permitidos. Si parece un correo electrónico o nombre real, contacta al usuario para confirmar su username real en TradingView.
3. **Acceder a TradingView:**
   * Entra a TradingView (Web o Desktop) con la cuenta administradora de la marca.
   * Abre un gráfico cualquiera.
   * Ve al panel de **Pine Editor** o haz clic derecho sobre el indicador **Synapse AI Scanner** (versión de producción) en tu lista de scripts publicados.
   * Selecciona **Manage Access** (Administrar accesos) o **Invite-Only script settings**.
4. **Agregar Usuario:**
   * Introduce el username exacto en la barra de búsqueda.
   * Haz clic en **Add** (Agregar).
   * Confirma la acción.
5. **Notificar al usuario:** Marca el estado como **"Activo"** en la base de datos de Google Sheets e indica en Manychat que se envíe el mensaje automático con las instrucciones para que el usuario cargue el indicador en su gráfico.

### 1.2 Proceso de Baja (Revocación de Acceso)
Semanalmente (o mediante alertas automatizadas de vencimiento de Make):

1. **Identificar Vencidos:** Revisa la lista de accesos vencidos en la pestaña `DB_Usuarios` de Google Sheets (aquellos cuya `Fecha Fin` sea igual o menor a la fecha de hoy y su estado sea "Trial" o "Vencido").
2. **Retirar Acceso en TradingView:**
   * Abre la sección **Manage Access** del script en TradingView.
   * Busca al usuario en la lista de invitados activos.
   * Haz clic en la **"X"** o en el botón de eliminar junto a su nombre.
3. **Actualizar la DB:** Cambia el estado del usuario en Google Sheets a **"Vencido"** o **"Inactivo"**.
4. **Disparar Flujo de Recuperación:** Activa la etiqueta correspondiente en Manychat para que el usuario reciba la secuencia de oferta de reactivación/renovación.

---

## 2. Validación de Cuentas de TradingView (Higiene de Datos)

Un problema frecuente es que el usuario escriba mal su nombre de usuario en TradingView durante el registro (ej. ingresa su correo, su nombre real, o comete un error de dedo).

### Flujo de validación:
* **Paso 1 (Automatizado):** Manychat solicita el usuario y muestra un GIF/imagen corta explicando dónde encontrarlo (Menú de perfil -> Nombre sobre el avatar).
* **Paso 2 (Manual si hay error):** Si al intentar agregarlo en TradingView el sistema devuelve "User not found" (Usuario no encontrado):
  1. No inventes el nombre ni lo adivines.
  2. En la base de datos de Google Sheets, marca el estado como `Error de Username`.
  3. Esto debe disparar una alerta en Make que envía un mensaje automático por WhatsApp al usuario: *"Hola [Nombre], detectamos un problema con tu usuario de TradingView '[Input]'. ¿Podrías confirmarnos tu nombre de usuario exacto tal como aparece en tu perfil? Aquí tienes una guía de cómo encontrarlo..."*

---

## 3. Seguimientos y Soporte de Conversión (Rol Comercial - Meli)

El soporte durante los 15 días del trial es el motor de conversión más potente del negocio. Meli lidera este frente con el siguiente protocolo:

### 3.1 Soporte en el Grupo Abierto de WhatsApp
* **Frecuencia:** Revisión constante durante las dos sesiones del indicador — Nueva York (7:00 a 11:00 UTC-5) y Asia (6:00 a 10:00 p.m. UTC-5) — con 2-3 chequeos rápidos adicionales fuera de esas ventanas.
* **Acciones:**
  * Dar la bienvenida a los nuevos integrantes del trial.
  * Publicar capturas de pantalla de operaciones exitosas del día (con el disclaimer de riesgo obligatorio).
  * Responder dudas operativas comunes (ej. "a qué hora opera el indicador", "en qué temporalidad").

### 3.2 Intervención Manual en Caso de Bajo Engagement (Trial Health Score)
* Si un usuario en trial llega al **Día 7** y la base de datos indica que no ha asistido a clases en vivo o ha manifestado dudas, Meli realiza un contacto 1 a 1 vía WhatsApp:
  > *"Hola [Nombre], vi que entraste al trial de Synapse AI hace una semana. Quería saber si ya pudiste instalar el indicador en tu gráfico o si necesitas que te eche una mano en una llamada rápida de 5 minutos."*

---

## 4. Conciliación de Pagos y Auditoría Financiera

Para asegurar que todas las comisiones de los embajadores y los repartos de los socios sean correctos:

* **Conciliación de Hotmart:** El día 1 de cada mes se descarga el reporte de ventas brutas de Hotmart y se cruza contra la pestaña `Historial_Pagos` de Google Sheets.
* **Control de Reembolsos (Chargebacks):**
  * Si un cliente solicita reembolso dentro del período de garantía de Hotmart, la plataforma enviará un webhook.
  * Se debe retirar el acceso en TradingView inmediatamente (máximo 24 horas después de la notificación).
  * Se marca el registro del pago como `Reembolsado` en Google Sheets para descontarlo del balance neto del mes.
