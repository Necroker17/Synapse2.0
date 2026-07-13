# Proyección de Ingresos de Embajadores — Matriz de Escenarios

> Mantenido por `/product`. Complementa a `ambassador_earnings_projection.md` (que desarrolla un solo escenario a detalle trimestral). Este documento cruza distintos niveles de volumen y de retención para un solo embajador, usando la misma lógica de comisión de `ambassador_program.md` (50% primera venta, 25% en cada re-consumo posterior). Ningún número de esta matriz está medido — son proyecciones hipotéticas para planear, no cifras comprometidas.

---

## 1. Fórmula general (para recalcular cualquier combinación)

Para un embajador con **n** clientes nuevos por mes (constante 12 meses), plan **STANDARD** a precio **P**, y una tasa de retención trimestral **r** (probabilidad de que un cliente reconsuma en su siguiente ventana de renovación, aplicada de forma compuesta: quien renueva vuelve a tener la misma probabilidad `r` de renovar otra vez 3 meses después):

```
comisión_anual = n × P × [6 + 2.25r + 1.5r² + 0.75r³]
```

Esta fórmula ya integra: 12 meses de primeras ventas (comisión 50%) + las cadenas de reconsumo que caen dentro de la ventana de 12 meses (1ra, 2da y 3ra renovación de cada cohorte mensual). Es la misma matemática usada en `ambassador_earnings_projection.md`, generalizada para cualquier `n` y `r`.

Para pasar de "un embajador" a un grupo, se multiplica por el número de embajadores con ese mismo perfil.

---

## 2. Ejes de la matriz

**Volumen mensual (n) — niveles de desempeño:**

| Nivel | Clientes nuevos/mes |
|---|---|
| Principiante | 3 |
| Promedio | 5 |
| Consistente (caso base ya detallado en `ambassador_earnings_projection.md`) | 10 |
| Alto rendimiento | 15 |
| Élite | 20 |

**Retención trimestral (r) — escenarios hipotéticos, no medidos:**

| Escenario | r |
|---|---|
| Conservador | 20% |
| Base | 40% |
| Optimista | 60% |

---

## 3. Matriz — comisión ANUAL de UN embajador, precio oficial STANDARD ($249)

| Nivel (n/mes) | Conservador (20%) | Base (40%) | Optimista (60%) |
|---|---|---|---|
| Principiante (3) | $4,868 | $5,369 | $6,015 |
| Promedio (5) | $8,112 | $8,949 | $10,025 |
| Consistente (10) | $16,225 | $17,898 | $20,049 |
| Alto rendimiento (15) | $24,337 | $26,847 | $30,074 |
| Élite (20) | $32,450 | $35,796 | $40,099 |

---

## 4. Matriz — comisión ANUAL de UN embajador, precio de lanzamiento STANDARD ($197)

| Nivel (n/mes) | Conservador (20%) | Base (40%) | Optimista (60%) |
|---|---|---|---|
| Principiante (3) | $3,851 | $4,248 | $4,759 |
| Promedio (5) | $6,418 | $7,080 | $7,931 |
| Consistente (10) | $12,837 | $14,160 | $15,862 |
| Alto rendimiento (15) | $19,255 | $21,241 | $23,794 |
| Élite (20) | $25,673 | $28,321 | $31,725 |

---

## 5. Cómo leer esta matriz

- **El volumen (n) pesa más que la retención (r):** pasar de "Promedio" a "Consistente" (5→10, ×2 volumen) duplica la comisión; pasar de retención Conservador a Optimista (20%→60%, ×3) en el mismo nivel de volumen solo sube la comisión ~20-24%. La retención mejora el ingreso, pero el volumen de adquisición es lo que más mueve la aguja — coherente con que la comisión de primera venta (50%) es el doble de la de reconsumo (25%).
- **Escalar a un grupo:** para "10 embajadores nivel Consistente, escenario Base, precio oficial" → $17,898 × 10 = $178,981 (así se obtuvo el total del escenario ya usado en `../Finanzas/profit_split.md` y `../Finanzas/financial_model.md`).
- Para un grupo mixto (ej. 3 Principiantes + 5 Promedio + 2 Consistentes), se suma la comisión anual de cada perfil según su fila correspondiente.

---

## 6. Qué NO resuelve esta matriz

- Las tasas de retención (20/40/60%) son supuestos de planeación, no datos medidos — en cuanto exista una tasa real de reconsumo (`tasa_reconsumo` en `../Finanzas/financial_model.md`), esta matriz debe recalcularse con el dato real usando la fórmula de la sección 1.
- Asume que todas las ventas y reconsumos son plan STANDARD — no contempla mezcla con PRO/PREMIUM (que tienen comisiones mayores en términos absolutos por ser planes más caros, aunque el % es el mismo).
- Asume precio de renovación igual al de la primera compra (mismo pendiente ya señalado en `../Pricing_y_Pagos/pricing_strategy.md` sección 3 y en `ambassador_earnings_projection.md` sección 4).
- No incluye los costos operativos de Synapse (`../Finanzas/financial_model.md`) — esta matriz es exclusivamente el ingreso del embajador, no el margen de la empresa.
