# Flujos de Automatización — Escenarios de Make, Manychat y WhatsApp API

> Mantenido por `/product`. Documento técnico que especifica los flujos lógicos, webhooks y disparadores para automatizar el embudo de captación, retención y cobros de Synapse AI Scanner.

---

## 1. Mapeo de Escenarios en Make (ex Integromat)

Make actúa como el integrador central (router de datos). Se requieren 4 escenarios principales:

### Escenario 1: Registro en Landing → Creación de Registro y Disparo de Secuencia
* **Disparador (Trigger):** Webhook recibido desde el formulario de la Landing (`Landing_SynapseAI` o `Landing_Meli`).
* **Flujo lógico:**
  1. Recibir datos del prospecto: Nombre, Email, WhatsApp (código de país + número), y Username de TradingView (opcional en este paso).
  2. **Acción Sheets:** Agregar una fila en la pestaña `DB_Usuarios` de Google Sheets.
     * `Status` = `Trial_Pendiente`
     * `Fecha Inicio` = Fecha actual
     * `Fecha Fin` = Fecha actual + 15 días
     * `Origen` = Formulario Landing (o ID de embajador si se lee de la URL/cookie)
  3. **Acción Manychat:** Enviar evento a Manychat a través de su API para iniciar la secuencia de WhatsApp.
     * Enviar variables: `Nombre`, `Email`, `trial_start_date`, `trial_end_date`.
     * Aplicar Tag: `trial_activo`.
  4. **Acción Notificación:** Enviar mensaje al grupo de WhatsApp del equipo administrador (vía WhatsApp API):
     * *"🔔 Nueva solicitud de Trial: [Nombre] | TV User: [TV_Username]. Activar acceso por 15 días en TradingView."*

### Escenario 2: Notificación de Compra de Hotmart → Activación de Membresía
* **Disparador (Trigger):** Webhook de Hotmart (Evento: `PURCHASE_APPROVED`).
* **Flujo lógico:**
  1. Recibir datos de compra: Email comprador, Producto/Plan (STANDARD, PRO, PREMIUM), ID de Transacción, Monto Bruto, Comisión de Afiliado, ID de Afiliado.
  2. **Acción Sheets (Búsqueda):** Buscar fila en `DB_Usuarios` por el correo electrónico del comprador.
     * *Si existe:* Actualizar fila. `Status` = `Activo`, `Plan Actual` = Nombre de Plan, `Fecha Inicio` = Fecha de hoy, `Fecha Fin` = Fecha hoy + duración del plan (3, 6 o 12 meses).
     * *Si no existe (compra directa sin pasar por el trial):* Crear fila nueva con los datos de Hotmart.
  3. **Acción Sheets (Contabilidad):** Agregar fila en la pestaña `Historial_Pagos` con los detalles contables de la venta.
  4. **Acción Manychat:**
     * Remover Tag: `trial_activo` / `trial_vencido`.
     * Aplicar Tag: `cliente_activo`.
     * Actualizar Custom User Fields (CUFs): `current_plan` = Plan comprado, `payment_status` = `Approved`.
     * Si no se tiene el Username de TradingView (compra directa), disparar un flujo automatizado de WhatsApp que pida con urgencia el username.
  5. **Acción Notificación (Admin):** Alerta al equipo para activar la membresía manual en TradingView (ej: 3 meses para STANDARD).

### Escenario 3: Control Diario de Expiración de Accesos
* **Disparador (Trigger):** Tarea programada (Schedule) de Make ejecutada diariamente a las 00:05 UTC-5.
* **Flujo lógico:**
  1. **Acción Sheets (Búsqueda):** Buscar en `DB_Usuarios` todos los registros donde `Fecha Fin` sea igual a "Ayer" (o hoy) y su estado sea `Trial` o `Activo`.
  2. **Ruta de decisión:**
     * **Si era un Trial:**
       * Actualizar Sheets: `Status` = `Trial_Vencido`.
       * Llamar Manychat: Remover Tag `trial_activo` y aplicar Tag `trial_vencido`. Disparar flujo de WhatsApp con oferta de conversión.
       * Notificar Admin: *"❌ Trial Expirado: [Nombre] | TV User: [TV_Username]. Remover acceso en TradingView."*
     * **Si era una Membresía (STANDARD/PRO/PREMIUM):**
       * Actualizar Sheets: `Status` = `Membresía_Vencida`.
       * Llamar Manychat: Remover Tag `cliente_activo` y aplicar Tag `cliente_vencido`. Disparar secuencia de reactivación.
       * Notificar Admin: *"❌ Membresía Expirada: [Nombre] | TV User: [TV_Username] (Plan: [Plan]). Remover acceso en TradingView."*

### Escenario 4: Reembolso o Cancelación de Hotmart
* **Disparador (Trigger):** Webhook de Hotmart (Eventos: `PURCHASE_REFUNDED` o `PURCHASE_CHARGEBACK`).
* **Flujo lógico:**
  1. Recibir email del cliente e ID de Transacción.
  2. **Acción Sheets:** Buscar registro y actualizar `Status` = `Inactivo` (o `Reembolsado`).
  3. **Acción Sheets (Contabilidad):** Registrar el reembolso con saldo negativo en `Historial_Pagos`.
  4. **Acción Manychat:** Remover Tag `cliente_activo`, aplicar Tag `cuenta_cancelada`.
  5. **Acción Notificación (Admin):** Alerta urgente para remover acceso en TradingView inmediatamente.

---

## 2. Variables y Configuración en Manychat

Para que Manychat procese y segmente a los usuarios de manera automatizada a través de la WhatsApp API, se debe utilizar la siguiente estructura de campos y etiquetas.

### 2.1 Campos Personalizados de Usuario (Custom User Fields - CUFs)
* `tv_username` (Text): El nombre de usuario oficial en TradingView.
* `trial_start_date` (Date/Time): Fecha de inicio del trial de 15 días.
* `trial_end_date` (Date/Time): Fecha en la que caduca el acceso gratis.
* `current_plan` (Text): STANDARD, PRO, PREMIUM o Ninguno.
* `payment_status` (Text): Pending, Approved, Refunded, Expired.
* `affiliate_id` (Text): Identificador del embajador que refirió al usuario.

### 2.2 Etiquetas (Tags) de Control
* `trial_activo`: Usuario en el período de 15 días gratis.
* `trial_vencido`: Pasaron 15 días y no compró ninguna membresía.
* `cliente_activo`: Usuario con pago aprobado y membresía vigente.
* `cliente_vencido`: Membresía de 3/6/12 meses expirada.
* `username_error`: Se intentó dar de alta en TradingView pero el username ingresado no existe.
* `reembolso_solicitado`: El cliente pidió devolución en Hotmart.

---

## 3. Secuencia de WhatsApp por Hito de Trial (Manychat)

El Experimento 1 (`business_plan/Crecimiento/product_growth_tasks.md`) se estructura en Manychat con esta secuencia temporal basada en días transcurridos desde el registro:

```
[Día 1: Registro] ──► Mensaje de bienvenida + Paso 1: Activar bono broker $30 + Guía de acceso a Hotmart Club M1
       │
[Día 3] ───────────► Check de Activación: "¿Ya pudiste añadir el indicador a tu gráfico de TradingView?"
       │
[Día 7] ───────────► Testimonio curado / Prueba Social + Check de progreso
       │
[Día 10] ──────────► (Experimento 3) Oferta de Conversión Anticipada con precio de lanzamiento limitado
       │
[Día 13] ──────────► Recordatorio de expiración de Trial (Faltan 48 horas) + CTA a checkout Hotmart
       │
[Día 15] ──────────► Cierre de Trial: Acceso suspendido temporalmente + Link de renovación / compra
```

---

## 4. Requerimientos Técnicos para Landings

Las landing pages (`Landing_SynapseAI` y `Landing_Meli`) deben capturar el ID de referido del embajador en la URL (ej: `synapse.net/?ref=EMBAJADOR123`) y:
1. Almacenar el ID del embajador en una cookie local o variable de sesión.
2. Inyectar de manera oculta ese `ref_id` en el formulario de registro del trial.
3. Asegurar que, al dispararse el formulario hacia Make, el ID de referido sea enviado para que la base de datos de Google Sheets y Manychat registren la atribución correcta desde el día 1.
