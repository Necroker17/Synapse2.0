# Estudio de mercado — cómo se vende lo que vende Synapse

> Mantenido por `/product`. Investigación de agosto 2026 sobre precios y modelos comerciales de herramientas comparables. Insumo de `oferta_definitiva.md`. Los precios de terceros son públicos y verificables en las fuentes citadas al final; **no** son datos de Synapse y no se mezclan con `../Finanzas/`.

---

## 1. El mercado no es uno, son tres

Synapse compite simultáneamente en tres categorías que el comprador percibe como distintas y que tienen precios muy diferentes. Esto es lo primero que hay que entender, porque determina contra quién te compara el cliente.

### Categoría A — Indicadores / plataformas de análisis

Software que se instala en el gráfico. El comprador es un trader que quiere una herramienta.

| Producto | Precio | Modelo |
|---|---|---|
| LuxAlgo | $39.99–$59.99/mes | Suscripción mensual/anual, tier gratuito de entrada |
| TrendSpider | $39–$159/mes | Suscripción, descuento anual fuerte (hasta −45% en promos) |
| TradingView (la plataforma base) | $14.95–$239.95/mes | Suscripción |
| 9toNone (invite-only) | $299/año (~$25/mes) | Acceso anual |

**Rango de referencia: $25–60/mes** para el grueso del mercado.

### Categoría B — Salas de señales (Gold / XAUUSD)

Alguien te manda la operación. El comprador quiere un resultado, no una herramienta.

| Segmento | Precio |
|---|---|
| Salas VIP retail (el grueso) | $30–$100/mes |
| Paquetes premium / con mentoría | $150–$500+/mes |
| GoldSignals.co | $1,799/año (~$150/mes) |
| Proveedor típico con opción lifetime | $89/mes o $279 lifetime |

Dato relevante: **las salas de oro se sitúan en la parte alta de la banda** porque XAUUSD es donde se concentra la demanda retail. Ese es el activo de Synapse.

### Categoría C — Formación / mentoría

El comprador quiere aprender. Precios de $300 a varios miles, sin banda estable — se venden por autoridad del instructor, no por features.

**Synapse es las tres cosas a la vez** (indicador + señales + comunidad + clases en vivo + módulos). Eso es una fortaleza de propuesta y un problema de comunicación: si el prospecto lo mete mentalmente en la categoría A, $197 le parece caro; si lo mete en la B o C, le parece barato.

---

## 2. Dónde cae Synapse hoy

Precio por mes de servicio entregado, según `pricing_strategy.md`:

| Plan | Precio lanzamiento | Duración | **$/mes** | Precio oficial | **$/mes** |
|---|---|---|---|---|---|
| STANDARD | $197 | 3 meses | **$65.67** | $249 | $83.00 |
| PRO | $299 | 6 meses | **$49.83** | $397 | $66.17 |
| PREMIUM | $699 | 12 meses | **$58.25** | $799 | $66.58 |

Veredicto de posicionamiento: **$50–66/mes deja a Synapse en el techo de la categoría A y en la mitad de la categoría B.** Para el bundle que entrega (indicador + señales + comunidad + clases + educación), el precio es defendible e incluso está por debajo de lo que cobraría una sala de oro con mentoría. El techo real no lo pone el valor entregado, lo pone la **falta de historial público verificable** — que es exactamente el punto débil que se detalla en §4.

### 🔴 Hallazgo: la escalera de precios está rota

Mirá la columna `$/mes` otra vez:

```
STANDARD  3 meses  →  $65.67/mes
PRO       6 meses  →  $49.83/mes   ← más barato ✅
PREMIUM  12 meses  →  $58.25/mes   ← MÁS CARO que PRO ❌
```

**Comprometerse al doble de tiempo cuesta $8.42 más por mes.** La escalera sube, baja y vuelve a subir. Con los precios oficiales pasa lo mismo ($83 → $66.17 → $66.58).

Consecuencia: cualquier comprador que divida (y en trading dividen todos) concluye que **PRO es la opción racional y PREMIUM es una trampa**. En la práctica no tienes tres planes, tienes dos y un señuelo mal construido — un señuelo debe hacer ver *mejor* al plan objetivo, no ser objetivamente peor que el de al lado.

Esto es aritmética sobre datos propios, no opinión de mercado. Se corrige en `oferta_definitiva.md` §3.

---

## 3. El modelo de cobro: nadie vende como vende Synapse

Éste es el hallazgo estructural del estudio.

| Modelo | Quién lo usa | Entrada mínima del cliente |
|---|---|---|
| Suscripción mensual | LuxAlgo, TrendSpider, AlgoAlpha, casi toda la categoría A | $39–60 |
| Mensual + descuento anual | Estándar de la industria | $39 el primer mes |
| Mensual o lifetime | Salas de señales | $29–89 |
| **Bloque prepago de 3/6/12 meses, sin opción mensual** | **Synapse** | **$197** |

**Synapse pide 3 a 5 veces más dinero por adelantado que el competidor típico, a una audiencia fría, sin track record público.** Ese es el mayor obstáculo comercial que tiene la oferta actual, y no es un problema de copy: es de estructura.

**Pero el bloque prepago tiene una justificación honesta que Synapse no está usando.** Un mes es una ventana demasiado corta para juzgar un sistema de trading: la propia telemetría documenta una **racha máxima de 5 pérdidas seguidas**. Un cliente mensual que entra justo antes de esa racha cancela convencido de que el producto no sirve, cuando lo que vio fue varianza normal. El compromiso mínimo de 3 meses no es una imposición comercial, es la condición para que el cliente vea una muestra estadísticamente interpretable.

Eso convierte la mayor debilidad de la estructura en un argumento de venta y de integridad — pero solo si se dice explícitamente. Hoy no se dice en ninguna parte.

**Sobre lifetime:** la evidencia recomienda **no** ofrecerlo en el checkout principal (canibaliza directamente las conversiones de quien habría pagado recurrente). Sirve como jugada de recuperación hacia usuarios que ya se fueron. No es una decisión para ahora.

---

## 4. FODA competitivo

### Fortalezas

1. **Bundle triple a precio de categoría simple.** Compites en A pero entregas A+B+C. Ningún LuxAlgo te manda la señal al WhatsApp ni te da clase en vivo.
2. **Foco monoactivo.** Solo XAUUSD M15. Los competidores generalistas cubren todo y no dominan nada; el foco es creíble y es el activo de mayor demanda retail.
3. **Telemetría concreta y no redondeada.** 188 señales, PF 1.86, WR 55.9%, racha máxima documentada. La mayoría del mercado publica "85% win rate" sin muestra. Publicar la racha de **pérdidas** es un diferenciador de honestidad que casi nadie usa.
4. **Ángulo de marca ortogonal al mercado.** Todos venden "gana más". Synapse vende "deja de sabotearte". Es un espacio de mensaje vacío y defendible.
5. **Invite-only real.** Escasez estructural verdadera, no artificial.
6. **Gestión de riesgo integrada.** El dimensionamiento automático de lote es una función de *protección*, no de ganancia. Refuerza la narrativa y casi ningún competidor la tiene.

### Debilidades

1. **Sin historial público verificable.** Cero presencia en Myfxbook/FXBlue/TradingView público. La telemetría es autoreportada. Esto es lo que pone techo al precio.
2. **Barrera de entrada 3–5x el mercado** ($197 vs $39–60), sin opción de prueba pagada barata.
3. **Marca nueva y sin reseñas de terceros.** Los competidores tienen años de Trustpilot y Reddit.
4. **Escalera de precios incoherente** (§2).
5. **Dependencia de un canal manual.** La conversión ocurre en WhatsApp, con una persona. No escala y no se instrumenta solo.
6. **Ninguna pieza pública comunica la oferta.** La landing activa no menciona planes, precios ni el trial. Hoy el embudo depende enteramente de la conversación.

### Oportunidades

1. **Verificación de terceros.** Conectar la cuenta a Myfxbook/FXBlue elimina de un golpe la debilidad #1 y justifica el precio del techo de banda. Es la acción de mayor retorno del listado.
2. **Garantía.** Nadie en el sector la ofrece — porque casi nadie puede. Una garantía condicionada a *seguir el sistema* (con la bitácora ya prevista en `../Hotmart/estructura_contenido.md` como prueba) diferencia sin prometer resultados y filtra al comprador impulsivo.
3. **El vacío de mensaje.** Toda la competencia vende codicia. El espacio "disciplina / anti-autosabotaje" está libre.
4. **Idioma y medio de pago.** El grueso de la categoría A es en inglés y cobra con tarjeta internacional. Español nativo + PSE/Nequi vía Hotmart es una ventaja real en LATAM.
5. **Pago fraccionado.** Hotmart soporta cuotas en LATAM: baja la barrera de los $197 sin tocar el precio ni romper el compromiso de 3 meses.
6. **La racha de pérdidas como material de marketing.** Publicar los drawdowns antes de que el cliente los viva es la mejor herramienta de retención que existe en este negocio.

### Amenazas

1. **Commoditización.** Salen decenas de indicadores de oro con IA por mes; el diferencial técnico no es defendible solo.
2. **Escrutinio regulatorio.** El sector de señales está bajo presión creciente. La ética comercial ya codificada (regla #3) es un activo de supervivencia, no burocracia.
3. **Riesgo reputacional por drawdown.** Una racha de 5 pérdidas con clientes mal capitalizados genera reseñas negativas permanentes. Se mitiga con el mínimo de capital (`oferta_definitiva.md` §2).
4. **Concentración en un activo.** Si el oro entra en régimen de baja volatilidad, no hay plan B.
5. **Dependencia de plataforma.** TradingView puede cambiar reglas de invite-only; Hotmart puede cambiar comisiones.

---

## 5. Lo que hay que copiar y lo que no

**Copiar:** el descuento por duración *real y monotónico* (industria estándar); el uso de una tabla comparativa de tiers acumulativos (ya se hace); la verificación de resultados por terceros.

**No copiar:** el mensual barato de $39 sin compromiso (rompe la ventana estadística mínima y llena el negocio de churn por varianza); las promesas de win rate sin muestra; el lifetime en el checkout principal.

---

## Fuentes

- [LuxAlgo Pricing](https://www.luxalgo.com/pricing/)
- [TrendSpider Platform Pricing](https://trendspider.com/pricing/)
- [TrendSpider Review 2026 — StockBrokers.com](https://www.stockbrokers.com/review/tools/trendspider)
- [TradingView Subscriptions: Pricing and Features](https://www.tradingview.com/pricing/)
- [Best Paid TradingView Indicators 2026 — Pineify](https://pineify.app/free-tools/best-paid-tradingview-indicators)
- [9toNone TradingView Indicator (Yearly Access)](https://mustangrider78.gumroad.com/l/9tonone-yearly)
- [How Much Do Forex Signals Cost? — JP Trading Capital](https://www.jptradingcapital.com/blog/en/forex-signals-cost)
- [Best XAUUSD / Gold Trading Signals in 2026 — ElectroIQ](https://electroiq.com/news/best-gold-signals-2026/)
- [Best Gold Signal Providers 2026 — FXPremiere](https://www.fxpremiere.com/best-gold-signal-providers-2026-top-xauusd-telegram-signals-ranked/)
- [Daily Forex Trading Signals — GoldSignals.co](https://goldsignals.co/)
- [A guide to lifetime subscriptions — RevenueCat](https://www.revenuecat.com/blog/growth/lifetime-subscriptions)
- [Should You Offer a Lifetime Subscription? — Airbridge](https://www.airbridge.io/en/blog/should-you-offer-a-lifetime-subscription)
- [Free Trial Conversion Statistics — Shno](https://www.shno.co/marketing-statistics/free-trial-conversion-statistics)
- [B2B SaaS Trial-to-Paid Conversion Benchmarks 2026 — Growthspree](https://www.growthspreeofficial.com/blogs/b2b-saas-trial-to-paid-conversion-rate-benchmarks-2026-by-trial-type-acv-length-credit-card)
