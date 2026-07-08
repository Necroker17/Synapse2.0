# Proyección de Ingresos para Embajadores — 12 Meses

> Mantenido por `/product`. Proyección de cuánto gana UN embajador (y el grupo de 10) bajo un escenario concreto de volumen y retención. A diferencia de `financial_model.md`, esta proyección no depende de los costos operativos pendientes (fee de pago, costo de soporte) — esos son costos de Synapse, no afectan la comisión que recibe el embajador. Sí depende de la política de renovación (ver nota al final), que aún está pendiente de decidir.

---

## 1. Escenario usado

- Cada embajador trae **10 clientes nuevos por mes**, constante durante 12 meses, todos plan **STANDARD**, primera venta (comisión 50%).
- De cada cohorte de clientes, **40% renueva a los 3 meses** (comisión 25%); de esos, 40% vuelve a renovar 3 meses después, y así sucesivamente (retención compuesta: 40% → 16% → 6.4% del total original, en términos absolutos: de 10 nuevos, renuevan 4 → luego 1.6 → luego 0.64 por mes de esa cohorte específica).
- Grupo de referencia: **10 embajadores** con este mismo comportamiento (100 clientes nuevos/mes en total entre todos).

---

## 2. Ingreso de UN embajador — por trimestre

Usando precio de lanzamiento STANDARD ($197):

| Trimestre | Clientes nuevos | Reconsumos | Comisión por nuevos (50%) | Comisión por reconsumos (25%) | Comisión total del trimestre |
|---|---|---|---|---|---|
| Q1 (mes 1-3) | 30 | 0 | $2,955 | $0 | **$2,955** |
| Q2 (mes 4-6) | 30 | 12 | $2,955 | $591 | **$3,546** |
| Q3 (mes 7-9) | 30 | 16.8 | $2,955 | $827.40 | **$3,782.40** |
| Q4 (mes 10-12) | 30 | 18.72 | $2,955 | $921.96 | **$3,876.96** |
| **Total 12 meses** | **120** | **47.52** | **$11,820** | **$2,340.36** | **≈ $14,160.36** |

Si el precio usado es el oficial STANDARD ($249) en vez de lanzamiento:

| Trimestre | Comisión total del trimestre |
|---|---|
| Q1 | $3,735 |
| Q2 | $4,482 |
| Q3 | $4,780.80 |
| Q4 | $4,900.32 |
| **Total 12 meses** | **≈ $17,898.12** |

**Lectura clave para el brief a embajadores:** el ingreso mensual de un embajador NO es plano — arranca en ~$985/mes (precio lanzamiento) o ~$1,245/mes (precio oficial) en el mes 1-3, solo con primeras ventas, y sube a ~$1,292/mes (lanzamiento) o ~$1,633/mes (oficial) hacia el mes 10-12 según se acumulan los reconsumos de sus propios clientes. Este es un argumento de venta legítimo para reclutar embajadores: su ingreso crece con el tiempo sin necesitar más esfuerzo de adquisición, mientras mantengan el ritmo de 10 clientes nuevos/mes.

---

## 3. Ingreso combinado — los 10 embajadores

| | 12 meses (precio lanzamiento) | 12 meses (precio oficial) |
|---|---|---|
| Comisión total pagada a los 10 embajadores | **≈ $141,603.60** | **≈ $178,981.20** |
| Promedio por embajador | ≈ $14,160.36 | ≈ $17,898.12 |

(Estas cifras coinciden con el total de comisiones calculado en el escenario de negocio completo de la conversación — ver también `financial_model.md` para el margen neto de Synapse en el mismo escenario.)

---

## 4. Qué NO está resuelto todavía

- **Política de renovación (pendiente, ver `pricing_strategy.md` sección 3):** esta proyección asume que la renovación se cobra al mismo precio que la primera compra (lanzamiento o el oficial, consistente en toda la cohorte). Si en la práctica la renovación siempre es a precio oficial aunque la primera venta fue de lanzamiento, el ingreso real del embajador quedaría entre los dos escenarios de la tabla.
- Esta proyección asume que el 40% de retención trimestral es una suposición hipotética para efectos de planeación — no es un dato medido todavía. En cuanto exista una tasa de reconsumo real (ver `tasa_reconsumo` en `financial_model.md` sección 4), esta hoja debe recalcularse con el dato real.
- Asume ritmo constante de 10 clientes nuevos/mes por embajador durante los 12 meses — en la realidad el ritmo de cada embajador variará.
