# Modelo Financiero — Margen y Proyecciones

> Mantenido por `/product`. Este documento define las FÓRMULAS del margen por plan y de las proyecciones financieras. Los datos duros de precio y comisión ya están confirmados (`pricing_strategy.md`, `ambassador_program.md`); los costos operativos NO están confirmados todavía — aparecen aquí como variables de entrada, nunca como números inventados. Este archivo es el insumo directo para el prompt de Google Sheets (`google_sheets_prompt.md`).

---

## 1. Variables de entrada (a llenar con datos reales, hoy sin valor)

### 1.1 Costos fijos de herramientas (confirmados 2026-07-07)

`costo_fijo_mensual_negocio` — costos fijos del negocio, no atribuibles a un cliente individual (no escalan con el número de clientes, al menos al volumen actual):

| Herramienta | Costo mensual (USD) |
|---|---|
| TradingView Premium | $85 |
| Make (automatizaciones) | $10 |
| Manychat (secuencia WhatsApp, Experimento 1) | $25 |
| Skool | $10 |
| Claude | $20 |
| **Total `costo_fijo_mensual_negocio`** | **$150** |

### 1.2 Costos aún sin confirmar

| Variable | Qué representa | Valor |
|---|---|---|
| `fee_pago` | % de comisión de la pasarela de pago/procesador (Stripe, etc.) | *(pendiente)* |
| `costo_soporte_mensual` | Costo de soporte/comunidad por cliente activo al mes (moderación WhatsApp, clases en vivo, prorrateo de tiempo del equipo — es costo de tiempo/labor, no de herramienta, así que no está cubierto por la tabla 1.1) | *(pendiente)* |
| `costo_herramientas_mensual` (por cliente) | Prorrateo por cliente de alguna herramienta que sí escale con el número de clientes (si aplica alguna, distinta a los costos fijos de 1.1) | *(pendiente — probablemente $0 si ninguna herramienta cobra por cliente)* |

Nota importante: el **bono de $30 USD lo paga el broker**, no Synapse — confirmado en sesión anterior. No debe incluirse como costo de la empresa en este modelo.

Datos ya confirmados (no son variables, son constantes del modelo):

| Variable | Valor |
|---|---|
| `precio_standard` | $197 (lanzamiento) / $249 (oficial) — 3 meses |
| `precio_pro` | $299 (lanzamiento) / $397 (oficial) — 6 meses |
| `precio_premium` | $699 (lanzamiento) / $799 (oficial) — 12 meses |
| `comision_primera_venta` | 50% |
| `comision_reconsumo` | 25% (segunda compra del cliente en adelante) |

---

## 2. Fórmula de margen por venta individual

Para una venta de un cliente **referido por un embajador**:

```
ingreso_neto_pago      = precio_plan × (1 − fee_pago)
comision_embajador     = precio_plan × tasa_comision      [50% si es 1ra venta del cliente; 25% si es re-consumo]
costo_operativo_plan   = (costo_soporte_mensual + costo_herramientas_mensual_por_cliente) × duracion_meses_plan
margen_neto            = ingreso_neto_pago − comision_embajador − costo_operativo_plan
margen_neto_%          = margen_neto / precio_plan
```

Nota: esta fórmula de margen "por venta" NO incluye `costo_fijo_mensual_negocio` (los $150/mes de TradingView + Make + Manychat + Skool + Claude) porque ese costo no varía con el número de clientes — se resta a nivel negocio, no a nivel de una venta individual. Ver la fórmula de proyección mensual (sección 4) para dónde entra.

Para una venta **sin embajador** (adquisición directa, sin comisión):

```
margen_neto = ingreso_neto_pago − costo_operativo_plan
```

---

## 3. Matriz de escenarios (para Sheets — una fila por combinación)

| Plan | Duración (meses) | Tipo de venta | Tasa de comisión | Precio usado |
|---|---|---|---|---|
| STANDARD | 3 | Directa (sin embajador) | 0% | Lanzamiento y Oficial |
| STANDARD | 3 | 1ra venta (embajador) | 50% | Lanzamiento y Oficial |
| STANDARD | 3 | Re-consumo (embajador) | 25% | Lanzamiento y Oficial |
| PRO | 6 | Directa (sin embajador) | 0% | Lanzamiento y Oficial |
| PRO | 6 | 1ra venta (embajador) | 50% | Lanzamiento y Oficial |
| PRO | 6 | Re-consumo (embajador) | 25% | Lanzamiento y Oficial |
| PREMIUM | 12 | Directa (sin embajador) | 0% | Lanzamiento y Oficial |
| PREMIUM | 12 | 1ra venta (embajador) | 50% | Lanzamiento y Oficial |
| PREMIUM | 12 | Re-consumo (embajador) | 25% | Lanzamiento y Oficial |

18 filas en total (3 planes × 3 tipos de venta × 2 niveles de precio). Cada fila se resuelve con la fórmula de la sección 2 una vez llenas las variables de costo.

**Escenario peor caso a vigilar especialmente:** PREMIUM, re-consumo, precio oficial, con varias renovaciones acumuladas — es donde el 25% recurrente pesa más en términos absolutos ($199.75 USD por renovación de $799).

---

## 4. Variables adicionales para proyecciones (embudo completo)

Para proyectar ingresos y margen a nivel negocio (no solo por venta), se necesitan además:

| Variable | Qué representa |
|---|---|
| `trials_iniciados_mes` | Cuántos trials de 15 días arrancan por mes |
| `tasa_conversion_trial_pago` | % de trials que llegan al día 15 y convierten (la métrica norte ya definida en `ESTRATEGIA.md`) |
| `mix_planes` | % de conversiones que eligen STANDARD vs. PRO vs. PREMIUM |
| `%_ventas_via_embajador` | % de las conversiones que vienen de un embajador (vs. adquisición directa) |
| `tasa_reconsumo` | % de clientes que renuevan al menos una vez tras su primer ciclo |

Con estas variables, la proyección mensual es:

```
clientes_nuevos_mes        = trials_iniciados_mes × tasa_conversion_trial_pago
clientes_via_embajador      = clientes_nuevos_mes × %_ventas_via_embajador
clientes_directos           = clientes_nuevos_mes − clientes_via_embajador
ingreso_bruto_mes           = Σ (clientes_por_plan × precio_plan)
comision_pagada_mes         = Σ (clientes_via_embajador_por_plan × precio_plan × 50%)
                              + Σ (reconsumos_via_embajador_por_plan × precio_plan × 25%)
margen_neto_mes             = ingreso_bruto_mes − comision_pagada_mes − costo_fijo_mensual_negocio − costos_variables_totales_mes
```

Donde `costo_fijo_mensual_negocio` = $150/mes (sección 1.1, ya confirmado) y `costos_variables_totales_mes` = los costos de soporte/herramientas por cliente de la sección 1.2 (aún pendientes) × número de clientes activos ese mes.

Ninguna de estas variables tiene valor todavía — son los inputs que la hoja de Sheets debe dejar editables para correr distintos escenarios (optimista/base/conservador).

---

## 5. Qué NO hace este documento

No asume ninguna cifra de costo ni de volumen. Es deliberadamente un esqueleto de fórmulas para que la proyección financiera se construya sobre datos reales cuando existan, no sobre supuestos disfrazados de hechos.
