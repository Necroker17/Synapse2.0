# Programa de Embajadores — Comisiones

> Mantenido por `/product`. Fuente de verdad de la estructura de comisiones para embajadores/afiliados que venden el Scanner. Depende de `../Pricing_y_Pagos/pricing_strategy.md` (planes y precios) — cualquier cambio de precio ahí impacta el cálculo de comisión aquí.

**Decisión oficial (2026-07-06):** comisión escalonada por cliente referido, no un 50% recurrente plano de por vida.

---

## 1. Estructura de comisión

| Evento | Comisión |
|---|---|
| Primera venta de un cliente referido (STANDARD, PRO o PREMIUM) | **50%** del valor pagado por el cliente |
| Segunda re-compra del mismo cliente en adelante (renovaciones/re-consumos posteriores) | **25%** del valor pagado, en cada re-consumo, sin límite de tiempo mientras el cliente siga activo bajo ese embajador |

**Por qué esta estructura y no 50% recurrente plano:** el 50% recompensa lo más caro de reemplazar — la adquisición de un cliente nuevo. El 25% en adelante sigue premiando la retención sin comprometer el margen indefinidamente al mismo nivel que la venta inicial. Un embajador que trae un cliente que se queda años sigue ganando, pero la casa recupera más margen a partir del segundo ciclo.

---

## 2. Supuesto pendiente de confirmar con el usuario

- **Qué cuenta como "re-consumo":** se asume que es cualquier nueva compra del mismo cliente después de la primera (renovación del mismo plan o upgrade a un plan superior). Si el negocio quiere tratar un *upgrade* de plan de forma distinta a una *renovación* del mismo plan, hay que definirlo aquí antes de comunicarlo a los embajadores.
- **Segunda compra vs. "en adelante":** se interpreta que el 25% aplica desde la segunda compra **y todas las siguientes** (no solo la segunda). Confirmar si es la lectura correcta.

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
