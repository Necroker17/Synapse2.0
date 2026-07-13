# Reporte — Proyección Financiera y Reparto de Ganancias (Jul-Dic 2026)

> Preparado por `/product` para presentar a las 4 partes del negocio: Gustavo, Meli, Juan Zarate (fundador) y como referencia para el programa de embajadores. Consolida las proyecciones trabajadas en sesión — la fuente de verdad detallada de cada pieza vive en `../Pricing_y_Pagos/pricing_strategy.md`, `../Embajadores/ambassador_program.md`, `financial_model.md`, `../Pricing_y_Pagos/payment_processing.md` y `profit_split.md`; este documento es el resumen ejecutivo para compartir, no reemplaza a esos archivos.

**Esto es una proyección de planeación, no un compromiso de resultados.** Se basa en supuestos de ritmo de ventas y retención que aún no están medidos con datos reales — ver sección 5.

---

## 1. Resumen ejecutivo

| | Jul-Dic 2026 (6 meses) |
|---|---|
| Clientes que pagan (nuevos + reconsumos) | ≈ 506.5 |
| Facturación bruta total | **≈ $99,780.50** |
| Margen neto total (antes de costo de soporte, aún pendiente) | **≈ $41,820.93** |
| Gustavo (25%) | **≈ $10,455.23** |
| Reserva — impuestos/imprevistos/escalamiento (15%) | **≈ $6,273.14** |
| Juan Zarate, fundador (30%) | **≈ $12,546.28** |
| Meli (30%) | **≈ $12,546.28** |

Escenario base: retención trimestral 40%. Ver sección 6 para la versión con 35% (sensibilidad).

---

## 2. Supuestos del modelo (léase antes de presentar el número)

| Supuesto | Valor usado | Fuente |
|---|---|---|
| Plan vendido | STANDARD, precio de **lanzamiento** ($197) | `../Pricing_y_Pagos/pricing_strategy.md` |
| Comisión de embajadores | 50% primera venta, 25% re-consumo | `../Embajadores/ambassador_program.md` |
| Fee de pasarela de pago | Hotmart: 9.9% + $0.50 USD/transacción | `../Pricing_y_Pagos/payment_processing.md` |
| Costo fijo mensual del negocio | $140/mes (TradingView + Make + Manychat + Claude; Skool dado de baja) | `financial_model.md` §1.1 |
| Costo de soporte por cliente | **Pendiente de confirmar** — no está incluido en este número | `financial_model.md` §1.2 |
| Retención trimestral (reconsumo) | 40% (escenario base) / 35% (sensibilidad, sección 6) — **hipotético, no medido** | Definido en sesión |
| Ritmo de adquisición | Jul: conversión de golpe del grupo actual en trial (95 personas, 50% convierte). Ago-Sep: 5 embajadores comprometidos × 10 ventas/mes. Oct-Dic: salto a 10 embajadores × 10 ventas/mes. | Definido en sesión |
| Julio — atribución de comisión | Se asume que los 47.5 compradores de julio cuentan como venta vía embajador (50% comisión) — **si una parte de esos 95 no viene de ningún embajador, el margen real de julio sería mayor.** | Supuesto explícito, sin confirmar |

---

## 3. Proyección mes a mes (escenario base, 40% retención)

| Mes | Clientes nuevos | Reconsumos | Facturación | Margen neto |
|---|---|---|---|---|
| Julio | 47.5 | 0 | $9,357.50 | $3,588.27 |
| Agosto | 50 | 0 | $9,850.00 | $3,784.50 |
| Septiembre | 50 | 0 | $9,850.00 | $3,784.50 |
| Octubre | 100 | 19.0 | $23,443.00 | $10,136.06 |
| Noviembre | 100 | 20.0 | $23,640.00 | $10,263.80 |
| Diciembre | 100 | 20.0 | $23,640.00 | $10,263.80 |
| **Total** | **447.5** | **59.0** | **$99,780.50** | **$41,820.93** |

**Lectura clave:** el margen neto casi se triplica de septiembre a octubre (~$3,785 → ~$10,136) por dos efectos combinados — duplicar embajadores (5→10) y que empiezan a caer los primeros reconsumos de julio. Octubre-diciembre concentran ≈$30,663 de los ≈$41,821 de margen neto de todo el semestre — el crecimiento real está en el último trimestre, no en el arranque.

---

## 4. Reparto de ganancias — mes a mes

| Mes | Gustavo (25%) | Reserva (15%) | Fundador (30%) | Meli (30%) |
|---|---|---|---|---|
| Julio | $897.07 | $538.24 | $1,076.48 | $1,076.48 |
| Agosto | $946.12 | $567.67 | $1,135.35 | $1,135.35 |
| Septiembre | $946.12 | $567.67 | $1,135.35 | $1,135.35 |
| Octubre | $2,534.01 | $1,520.41 | $3,040.82 | $3,040.82 |
| Noviembre | $2,565.95 | $1,539.57 | $3,079.14 | $3,079.14 |
| Diciembre | $2,565.95 | $1,539.57 | $3,079.14 | $3,079.14 |
| **Total 6 meses** | **$10,455.23** | **$6,273.14** | **$12,546.28** | **$12,546.28** |

Reparto vigente desde 2026-07-07 (`profit_split.md`): Gustavo 25%, reserva de impuestos/imprevistos/escalamiento 15%, y el 60% restante dividido 50/50 entre fundador y Meli (30% cada uno).

---

## 5. Roles que sustentan el reparto (contexto para cada parte)

- **Gustavo — estratega digital:** monetizar todas las ramas posibles del negocio.
- **Meli — rol comercial:** VSL, embudos digitales, y duplicar/potenciar a los embajadores del plan de comisiones.
- **Fundador (Juan Zarate):** dueño del producto y la operación.
- Ambos socios (Gustavo y Meli) confirmados con dedicación parcial (Synapse es uno de varios proyectos que manejan). El vehículo legal del reparto (equity con vesting vs. revenue share continuo) **aún no está formalizado** — ver `profit_split.md` sección 2.

---

## 6. Sensibilidad — si la retención real es 35% en vez de 40%

| | 40% (escenario base) | 35% (conservador) |
|---|---|---|
| Facturación total 6 meses | $99,780.50 | $98,327.62 |
| Margen neto total | $41,820.93 | $40,878.85 |
| Gustavo | $10,455.23 | $10,219.71 |
| Reserva | $6,273.14 | $6,131.83 |
| Fundador | $12,546.28 | $12,263.66 |
| Meli | $12,546.28 | $12,263.66 |

La diferencia entre 35% y 40% de retención pesa poco en este semestre (~$942 sobre el total) porque solo las cohortes de julio/agosto/septiembre alcanzan a tener un reconsumo dentro de esta ventana de 6 meses — el efecto de la retención se vuelve más importante a partir de 2027, cuando ya existan cohortes con 2 y 3 reconsumos acumulados.

---

## 7. Qué falta para que este número sea definitivo

1. **Costo de soporte por cliente activo** (moderación WhatsApp, clases en vivo) — no está restado todavía. Con ~120-150 clientes activos/mes hacia el Q4, este costo ya no es despreciable y es lo más urgente de cerrar antes de presentar esto como cifra final.
2. **Confirmar si los 47.5 compradores de julio realmente pagan comisión de embajador** o si una parte es adquisición directa (sin comisión) — afecta el margen de julio específicamente.
3. **Tasa de retención real** — 40%/35% son supuestos de planeación; en cuanto haya datos reales de las primeras renovaciones (a partir de octubre), este reporte debe recalcularse.
4. **Política de renovación de precio** (¿la reconsumo se cobra a precio de lanzamiento o precio oficial?) — este reporte asume que se mantiene el precio de lanzamiento en toda renovación dentro del semestre.
5. **Vehículo legal del reparto con Gustavo y Meli** (equity vs. revenue share) — pendiente de formalizar, ver `profit_split.md` sección 2.
