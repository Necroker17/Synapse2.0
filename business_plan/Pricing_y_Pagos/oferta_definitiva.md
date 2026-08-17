# La oferta definitiva — análisis y recomendación

> Mantenido por `/product`. Documento de decisión: evalúa la propuesta de Juan (depósito de $300 en el broker → 1 mes de indicador) frente a la escalera de planes vigente, con el mercado (`estudio_mercado_competencia.md`) y la economía real como criterio. **Estado: recomendación entregada, pendiente de aprobación del usuario.** Hasta que se apruebe, la fuente de verdad sigue siendo `pricing_strategy.md`.

---

## 1. Resumen ejecutivo

Tres conclusiones, en orden de importancia:

1. **La oferta de Juan no es un plan, es un canal de adquisición.** Cobrarle al broker en vez de al usuario no es una opción de precio: cambia quién es el cliente. Tratarla como cuarto plan sería un error de categoría. Tratarla como "el broker me paga el costo de adquisición" es una idea buena y usable.
2. **$300 de depósito es técnicamente inviable con este producto.** No es una opinión comercial: con la distancia de stop de la señal documentada, el lote **mínimo posible** ya arriesga 5.9% de una cuenta de $300. Detalle en §2. Es el hallazgo que más cambia la propuesta.
3. **La escalera de precios actual está rota** — PREMIUM cuesta más por mes que PRO. Se arregla sin bajar precios, repositionando PREMIUM. Detalle en §3.

---

## 2. 🔴 El problema de los $300

### La aritmética

Tomando la señal documentada en `Landing_SynapseAI/lib/stats.ts` (que es el snapshot verificado del producto):

```
Entrada:  4169.92
Stop:     4152.28
Distancia de stop:  17.64 puntos
```

En XAUUSD, 1 lote = 100 oz, así que **0.01 lotes (el mínimo que acepta la mayoría de brokers) arriesga $17.64 en esta señal.**

> Verificación cruzada: el panel muestra 0.06 lotes con riesgo "100 USD". 17.64 × 6 = $105.84. Cuadra. El dato es internamente consistente.

Ahora aplicá eso a una cuenta de $300:

| | Cuenta $300 | Cuenta $1,000 | Cuenta $2,000 |
|---|---|---|---|
| Riesgo por operación (lote mínimo 0.01) | **5.88%** | 1.76% | 0.88% |
| Drawdown en la racha máx. documentada (5 pérdidas) | **−26.1%** | −8.5% | −4.3% |
| ¿Puede el usuario bajar el riesgo? | **No.** Ya está en el lote mínimo | Sí | Sí |

### Por qué esto es descalificante

**El usuario de $300 no tiene ninguna palanca.** No puede reducir el tamaño de posición porque ya está en el mínimo del broker. Está obligado a arriesgar ~6% por operación en un sistema cuya propia telemetría documenta rachas de 5 pérdidas seguidas. Pierde un cuarto de la cuenta en un evento que el producto sabe que ocurre y que es completamente normal.

Y hay algo peor que la matemática: **contradice el producto.** Synapse vende gestión de riesgo automática y "dejá de sabotearte". Una oferta que trae usuarios estructuralmente incapaces de gestionar el riesgo vende exactamente lo contrario de lo que promete el producto. El primer cliente de $300 que se queme va a escribir una reseña, y va a tener razón.

Además, esos usuarios **nunca compran un plan**: una cuenta de $300 en drawdown no genera $197 para una herramienta.

### La corrección

Si se hace una oferta por depósito, el mínimo debe ser **$1,000** (1.76% por operación — aceptable), e idealmente **$2,000** (0.88% — el rango en el que el producto funciona como está diseñado).

Esto reduce el volumen de gente que califica. Es intencional: filtra hacia el usuario que puede usar el producto sin quemarse, que es el mismo que después paga un plan.

> ⚠️ Verificar antes de publicar: si el broker ofrece **cuentas cent o micro** con lote mínimo efectivo menor, el umbral baja. Rehacer esta tabla con el contrato real del broker en la mano — la conclusión depende del lote mínimo, no del número $300 en sí.

---

## 3. 🔴 La escalera de precios está invertida

| Plan | Precio | Duración | $/mes |
|---|---|---|---|
| STANDARD | $197 | 3 meses | $65.67 |
| PRO | $299 | 6 meses | $49.83 |
| PREMIUM | $699 | 12 meses | **$58.25** ← más caro que PRO |

Comprometerse al doble de tiempo cuesta **$8.42 más por mes**. Todo comprador que divida — y en trading dividen todos — llega a que PRO es la opción racional y PREMIUM no tiene sentido económico.

### Dos formas de arreglarlo

**Opción A — bajar PREMIUM a $497** ($41.42/mes). Escalera limpia y descendente: $65.67 → $49.83 → $41.42.
- ✅ Simple, tres tiers reales, ancla fuerte.
- ❌ Cuesta **$182 de margen neto por venta** ($629.30 → $447.30 después de Hotmart).

**Opción B — sacar PREMIUM de la escalera de duración** ✅ **recomendada**.

El error de origen fue precificar PREMIUM por meses. Su valor no son los 12 meses, es la **mentoría 1 a 1 del Grupo Elite**. Se vende en su propio bloque, con su propia lógica, sin tabla comparativa de $/mes al lado.

- La escalera de duración queda con dos tiers coherentes: STANDARD $197 (3m) → PRO $299 (6m).
- PREMIUM $699 pasa a ser "Grupo Elite — acompañamiento 1 a 1, 12 meses".
- ✅ No cuesta un peso de margen.
- ✅ Es honesto: sí es un producto distinto.
- ✅ **Como tier de duración, $699 está caro. Como producto de mentoría, está barato** — el mercado cobra $150–500/mes por paquetes con mentoría (`estudio_mercado_competencia.md` §1B), o sea $1,800–6,000 al año. El mismo número es caro o barato según cómo se enmarque, y hoy está enmarcado de la peor manera. Hay margen para subirlo más adelante.

---

## 4. La oferta definitiva propuesta

Una sola puerta de entrada, y en el día 15 una decisión con dos formas de pagar.

### Entrada (sin cambios)

**Trial de 15 días.** Sin tarjeta, sin depósito. Bono de $30 del broker, 3 módulos de Hotmart Club, WhatsApp abierto. Funciona; no se toca todavía (ver §6).

### Día 15 — dos rutas de pago al mismo producto

**Ruta 1 — Pago directo** *(la ruta principal)*

| | STANDARD | PRO |
|---|---|---|
| Duración | 3 meses | 6 meses |
| Lanzamiento | **$197** ($65.67/mes) | **$299** ($49.83/mes) |
| Oficial | $249 | $397 |
| | Indicador + señales + comunidad + clases + módulos | Todo lo anterior + señales VIP + soporte prioritario |

Más, en bloque aparte: **Grupo Elite — $699 / 12 meses**, con mentoría 1 a 1.

**Nuevo: pago en cuotas vía Hotmart.** Los $197 al contado son la barrera más alta del embudo (el competidor típico cobra $39–60 el primer mes). Fraccionar baja la barrera **sin bajar el precio ni romper el compromiso de 3 meses**. Es el ajuste de mayor impacto y menor costo de toda la propuesta.

**Ruta 2 — Cuenta financiada** *(la idea de Juan, corregida)*

> Abrí y fondeá tu cuenta con **$1,000 o más** con nuestro broker aliado y **el acceso de 3 meses va incluido**.

- Mínimo **$1,000**, no $300 (§2).
- Entrega **3 meses**, no 1 — para igualar el producto de la Ruta 1 y respetar la ventana estadística mínima.
- **No es un plan.** No aparece como cuarta columna en la tabla de precios. Es una forma alternativa de pagar el mismo STANDARD, para el usuario que no quiere pagar en efectivo por una herramienta pero igual iba a fondear una cuenta.

### Por qué la Ruta 2 no es un modelo de ingreso

El CPA del broker se paga **una sola vez por cliente, jamás se repite**. A partir del mes 4 ese usuario consume soporte, WhatsApp y clases sin generar un peso. Si la Ruta 2 fuera el negocio, el negocio sería una cinta transportadora de gente nueva que nunca acumula base instalada.

El encuadre correcto es: **el broker paga tu costo de adquisición.** La Ruta 2 entrega un cliente a CAC cero que después renueva por la Ruta 1. El ingreso es la renovación; el CPA es el subsidio de entrada.

### Lo que falta para poder decidir la Ruta 2

**Bloqueante: nadie ha visto el contrato del broker.** Referencias públicas de 2026 ponen el CPA estándar en $150–250 por cliente, y $200–400 por FTD en mercados Tier 2/3 (Colombia entra ahí). Pero esas cifras son para depósitos altos: **un FTD de $300 cae en el escalón más bajo de la tabla, probablemente $50–150**, y casi todos los programas exigen volumen mínimo operado además del depósito, con cláusula de reversión si el cliente retira pronto.

Antes de prometerle nada a nadie hay que tener por escrito: (a) el CPA exacto por tramo de depósito, (b) si exige volumen operado, (c) la ventana de clawback, (d) si califica desde Colombia.

Sin esos cuatro datos, la Ruta 2 no se puede publicar — se estaría regalando 3 meses de producto contra un ingreso que nadie ha confirmado que existe.

---

## 5. ⚠️ El conflicto de interés (leer antes de firmar)

Hay que decirlo con precisión porque la diferencia es toda la diferencia:

| | Qué es | Veredicto |
|---|---|---|
| **CPA** | Pago único y fijo por cliente referido que deposita | ✅ Aceptable. Es una comisión de referido. Se resuelve con divulgación pública. |
| **Rebate por volumen** | Pago por cada lote que el cliente opera, para siempre | ❌ **Rechazar.** |

El rebate por volumen te paga más cuanto más opera el cliente. El producto vende *"dejá de sobre-operar, no te sabotees"*. Sería cobrar por lo contrario de lo que prometés — no un riesgo reputacional teórico, sino una contradicción que cualquier competidor puede señalar en un post y que es cierta.

La literatura del sector es explícita en que un proveedor de señales que recibe rebates del broker está en conflicto directo con su cliente. Con CPA plano el conflicto se limita al momento de la captación y se neutraliza divulgándolo.

**Recomendación operativa:** negociar **CPA plano únicamente**, rechazar cualquier componente de rebate por volumen aunque lo ofrezcan, y poner una línea visible en toda pieza que mencione la Ruta 2: *"Synapse recibe una comisión del broker por cada cuenta referida. No recibimos pago por tu volumen de operaciones."* Esa frase, además de ser correcta, es un diferenciador — nadie en el sector la escribe.

---

## 6. Lo que NO recomiendo cambiar todavía

**No agregar plan mensual.** El mercado lo hace ($39–60), pero un mes es más corto que la racha de pérdidas documentada del propio sistema (5 seguidas). Un cliente mensual que entra antes de esa racha cancela convencido de que el producto no sirve, cuando vio varianza normal. El problema real que resuelve el mensual —la barrera de entrada— se resuelve mejor con cuotas (§4).

**No pedir tarjeta en el trial todavía.** Los benchmarks son tentadores (opt-in 9–25% vs opt-out 31–60%), pero con 15 personas en total, agregar fricción arriba secaría el embudo y no se aprendería nada. Revisar cuando haya ~100 llegadas. Mientras tanto, el pedido de tarjeta encaja mejor en el día 10–12 como parte del experimento de conversión anticipada ya previsto en `../Crecimiento/product_growth_tasks.md`.

**No poner precio lifetime en el checkout.** Canibaliza directamente la conversión a recurrente. Sirve como jugada de recuperación de usuarios perdidos, más adelante.

---

## 7. Una advertencia sobre el método

Con 5 trials y cero conversiones cerradas, **no hay datos suficientes para decidir precio empíricamente.** Todo lo de este documento se apoya en estructura, aritmética del producto y comparables de mercado — no en el comportamiento medido de los clientes de Synapse, que aún no existe.

Eso está bien para arrancar: la escalera invertida y el problema de los $300 son errores demostrables sin datos de clientes. Pero significa que **la oferta que se apruebe ahora es una hipótesis, no una conclusión**, y que la instrumentación de `../Campana/metricas_embudo.md` es lo que la va a confirmar o tumbar. Conviene fijar desde ya cuándo se revisa: sugerido, a las 100 llegadas o a las 10 conversiones, lo que ocurra primero.

---

## 8. Decisiones que necesito de vos

| # | Decisión | Recomendación |
|---|---|---|
| 1 | ¿Se sube el mínimo de depósito de $300 a $1,000? | **Sí** — §2 |
| 2 | ¿PREMIUM baja a $497 (Opción A) o se saca de la escalera como producto de mentoría (Opción B)? | **Opción B** — §3 |
| 3 | ¿Se activa pago en cuotas de Hotmart para STANDARD? | **Sí** — es la palanca más barata del embudo |
| 4 | ¿Cuál es el CPA real del broker por tramo? | **Bloqueante** para publicar la Ruta 2 — §4 |
| 5 | ¿Se acepta CPA plano y se rechaza rebate por volumen? | **Sí**, y se divulga — §5 |
| 6 | ¿Fecha de corte del precio de lanzamiento? | Sigue pendiente desde 2026-07-06 |

---

## Registro

| Fecha | Evento |
|---|---|
| 2026-08-13 | Creación. Análisis de la propuesta de Juan + corrección de la escalera. Pendiente de aprobación. |
