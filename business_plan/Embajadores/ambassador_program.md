# Programa de Embajadores — Comisiones

> Mantenido por `/product`. Fuente de verdad de la estructura de comisiones para embajadores/afiliados que venden el Scanner. Depende de `../Pricing_y_Pagos/pricing_strategy.md` (planes y precios) — cualquier cambio de precio ahí impacta el cálculo de comisión aquí.

**Decisión oficial (2026-07-06):** comisión escalonada por cliente referido, no un 50% recurrente plano de por vida.

---

## 1. Estructura de comisión

| Evento | Comisión |
|---|---|
| Primera venta de un cliente referido a un plan (STANDARD, PRO o PREMIUM) | **50%** del valor pagado por el cliente |
| Upgrade del mismo cliente a un plan superior (ej. STANDARD→PRO, PRO→PREMIUM) — **cuenta como primera venta de ESE plan** | **50%** del valor pagado en el upgrade |
| Renovación del cliente en el **mismo plan** que ya tiene, en adelante | **25%** del valor pagado, en cada renovación, sin límite de tiempo mientras el cliente siga activo bajo ese embajador |

**Decisión oficial (2026-07-16):** un upgrade a un plan superior se paga al **50%** (como si fuera una venta nueva), no al 25%. Solo las renovaciones del **mismo** plan que el cliente ya tiene pagan 25%. Esto resuelve la ambigüedad que existía en la sección 2 (versión anterior) entre "renovación" y "upgrade" — ya no se tratan igual.

**Ejemplo:** un cliente compra STANDARD (50%), renueva STANDARD una vez (25%), luego hace upgrade a PRO (50% del precio de PRO — no 25%), y después renueva PRO (25% del precio de PRO). El embajador cobra 50% cada vez que el cliente entra a un plan nuevo para él, y 25% en cada ciclo que se queda en el plan en el que ya está.

**Por qué esta estructura y no 50% recurrente plano:** el 50% recompensa lo más caro de reemplazar — la adquisición de un cliente nuevo (o de un cliente que decide gastar más). El 25% en las renovaciones del mismo plan sigue premiando la retención sin comprometer el margen indefinidamente al mismo nivel que una venta/upgrade. Un embajador que trae un cliente que se queda años y además hace upgrade sigue ganando en cada punto de esos, pero la casa recupera más margen en los ciclos de renovación simple.

---

## 2. Pendiente — solo queda por confirmar

- **Segunda compra vs. "en adelante":** se interpreta que el 25% aplica desde la segunda renovación del mismo plan **y todas las siguientes** (no solo la segunda). Confirmar si es la lectura correcta.
- La regla de upgrade ya está resuelta (ver sección 1) — el punto que quedaba pendiente en la versión anterior de este documento ("¿upgrade cuenta igual que renovación?") queda cerrado: **no**, cuenta como venta nueva al 50%.

---

## 3. Riesgo abierto — margen no calculado

El usuario confirmó (2026-07-06) que **el margen neto por plan aún no está calculado** (precio menos costos de infraestructura, soporte, bono del broker, etc.). Esta estructura de comisión (50% / 25%) se definió sin ese dato — es razonable como punto de partida frente a un 50% recurrente plano, pero **no está validada contra margen real**.

Antes de lanzar el programa a embajadores externos:
1. Calcular el costo real de servir un cliente por plan (no solo el bono del broker — también soporte, infraestructura de señales, etc.).
2. Verificar que precio − costo − comisión del embajador siga dejando margen positivo saludable, especialmente en el escenario "peor caso" (cliente PREMIUM que renueva varias veces con un embajador ganando 25% cada vez).
3. Si el margen no alcanza, ajustar aquí antes de comunicar cifras a nadie — nunca al revés.

---

## 4. Pendiente de definir (no bloqueante para documentar, sí para lanzar)

- Ventana de pago de comisión (¿al confirmarse el pago del cliente, o con algún período de gracia por reembolsos/chargebacks?).
- Qué pasa si el cliente cancela o no renueva — ¿el embajador pierde el derecho a comisión futura de ese cliente automáticamente?
- Tracking: cómo se atribuye un cliente a un embajador específico (código de referido, link único, etc.) — esto es un requerimiento técnico, no de este documento, pero debe resolverse antes de operar el programa.
