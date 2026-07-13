# Mecanismos de monetización de Hotmart — mapeo y recomendación

> Mantenido por `/product`. Investigación (2026-07-12) de todos los mecanismos de monetización que ofrece Hotmart como plataforma, más allá del checkout básico ya documentado en `../Pricing_y_Pagos/payment_processing.md`. Son **recomendaciones**, no decisiones tomadas — quedan pendientes de tu aprobación antes de propagarse a `../../ESTRATEGIA.md` o `../` (business_plan/).

---

## 1. Tabla de mecanismos

| Mecanismo | Qué es | Dato de referencia (fuente: investigación web 2026-07-12) |
|---|---|---|
| **Order bump** | Oferta adicional de un clic en el checkout mismo, sin interrumpir la compra | Convierte 30-40% de quienes llegan al checkout; rango de precio recomendado 10-25% del valor del producto principal |
| **Upsell** | Oferta de un producto superior (más caro/completo) antes o justo después de la compra | Mecanismo nativo de Hotmart, sin cifra propia — se apoya en la lógica de "siguiente paso tras la primera transformación" |
| **Downsell** | Oferta de rescate más accesible si el comprador rechaza el upsell | Mantiene relevancia ofreciendo una versión reducida, no un producto distinto |
| **Recuperación de carrito (email)** | Notificación automática a herramientas de email marketing cuando se detecta un carrito abandonado | Productores que usan al menos una solución de recuperación venden ~23% más; con las 3 segmentaciones de recuperación, 7.5% más |
| **Pago Inteligente (cuotas)** | El comprador divide el pago en cuotas mensuales con su tarjeta, sin que el productor asuma el riesgo de la cuota | Hasta 36% de recuperación de ventas que se habrían perdido por fricción de precio |
| **Coproducción** | Reparto automático de cada venta entre productor principal y coproductores, configurado a nivel de plataforma — el pago se hace solo, sin conciliación manual | Coproductores ilimitados; solo el productor principal responde fiscal/legalmente y puede modificar el producto |
| **Cupones de descuento** | Código que aplica descuento (% o valor fijo) a uno o varios planes, con fecha de vigencia | Configurable por plan específico o para todos los planes a la vez |
| **Afiliados "Múltiples Clics"** | Reparte la comisión de una venta entre el primer y el último afiliado que hizo clic con el mismo comprador | Alternativa a la regla estándar de "último clic"; solo se puede activar si el programa aún no tiene afiliados o no hay cupón configurado |
| **Mercado público + afiliación por aprobación** | El producto se lista en el Mercado de Hotmart (visibilidad orgánica a afiliados) pero se puede exigir que cada afiliado pida aprobación manual antes de promocionar | No es todo-o-nada: "Solo Afiliados previamente aprobados podrán promocionar el producto" es una opción disponible aun estando listado |

---

## 2. Recomendación para Synapse AI Scanner

Contrastado contra el modelo real (`../Pricing_y_Pagos/pricing_strategy.md`, `../Embajadores/ambassador_program.md`, ética comercial de `../../ESTRATEGIA.md` §2 — nunca prometer ganancias).

### Adoptar ahora (prioridad alta)

- **Upsell nativo STANDARD → PRO → PREMIUM en el checkout.** Es el fit más directo de todo el mapeo: los tres planes ya son acumulativos por diseño ("PRO incluye todo STANDARD"), así que el upsell no requiere crear ningún producto nuevo — solo mostrar la diferencia de precio en el momento de mayor intención de compra. Hoy esa decisión de upgrade no está monetizada en ningún punto del embudo.
- **Downsell de red de seguridad.** Si alguien abandona el checkout de PRO o PREMIUM, ofrecer STANDARD antes de perder la venta completa — mismo argumento: no es un producto nuevo, es una puerta de salida más barata dentro de lo que ya existe.
- **Mercado público + afiliación con aprobación manual.** Resuelve la falsa disyuntiva que planteaba antes: se gana visibilidad orgánica (afiliados descubriendo el producto sin que tengas que reclutarlos uno por uno) sin perder el control curado del programa de embajadores — cada solicitud de afiliación se aprueba manualmente igual que hoy.

### Adoptar con condición

- **Pago Inteligente (cuotas)** — recomendado para PRO y PREMIUM ($299-799), donde el ticket es alto para el mercado LATAM y la fricción de precio es real (fue justamente el motivo por el que se investigó PSE/Nequi en `../Pricing_y_Pagos/payment_processing.md`). Condición: confirmar que el costo de la cuota no perfora el margen ya calculado en `../Finanzas/financial_model.md` §2.1 antes de activarlo.
- **Recuperación de carrito por email** — bajo esfuerzo, complementa directamente la secuencia de WhatsApp del Experimento 1 ya decidida en `../Crecimiento/product_growth_tasks.md`. Condición: no es prioridad si el volumen de tráfico al checkout todavía es bajo — mejor activarlo cuando ya haya carritos reales que recuperar.
- **Order bump** — el mecanismo con mejor conversión reportada (30-40%), pero **no hay todavía un complemento real y ético que ofrecer** en el checkout sin inventar algo. No activar hasta definir *qué* se ofrece (candidatos: mes adicional del mismo plan, acceso anticipado a un módulo). Bloqueante: definir la oferta, no el mecanismo en sí.

### Evaluar en profundidad (impacto en otro documento, no solo copy)

- **Coproducción.** Esto no es solo un mecanismo de venta — resuelve a nivel de plataforma una parte del pendiente abierto en `../Finanzas/profit_split.md`: hoy el reparto Gustavo 25% / reserva 15% / fundador 30% / Meli 30% está documentado pero no automatizado (requiere conciliación manual). La coproducción de Hotmart podría pagar automáticamente a Gustavo y Meli en cada venta según el % configurado, sin que nadie tenga que calcular ni transferir manualmente. **Importante:** esto resuelve la *mecánica de pago*, no el *vehículo legal* (equity vs. revenue share) que sigue siendo una decisión aparte y pendiente en `../Finanzas/profit_split.md` §2 — no confundir una cosa con la otra al comunicarlo a los socios.
- **Cupones de descuento** — candidato natural para instrumentar el "precio de lanzamiento con fecha de corte fija" ya decidido (`../Pricing_y_Pagos/pricing_strategy.md` §3): un cupón con fecha de expiración automatiza ese corte sin depender de cambiar el precio manualmente el día indicado. Pendiente solo de que el usuario confirme la fecha exacta (ya es un bloqueante conocido, no uno nuevo).

### No recomendado por ahora

- **Afiliados "Múltiples Clics".** La estructura escalonada 50%/25% ya decidida es más simple de operar y comunicar con la regla estándar de "último clic". Reconsiderar solo si en la práctica varios embajadores terminan compitiendo por el mismo comprador (hoy no hay evidencia de eso, es un programa que aún no ha lanzado).

---

## 3. Checklist de configuración (cuando se monte el producto real en Hotmart — nada de esto se ejecuta hoy)

- [ ] Configurar upsell STANDARD→PRO→PREMIUM y downsell de rescate en el flujo de checkout.
- [ ] Activar Mercado público + regla de afiliación "solo por aprobación".
- [ ] Definir la oferta concreta del order bump antes de activarlo.
- [ ] Verificar margen neto (`../Finanzas/financial_model.md` §2.1, una vez estén los costos operativos) antes de activar Pago Inteligente en PRO/PREMIUM.
- [ ] Configurar coproducción con % de Gustavo y Meli, coordinado con la decisión pendiente del vehículo legal en `../Finanzas/profit_split.md`.
- [ ] Crear el cupón de descuento de lanzamiento con fecha de expiración, una vez el usuario confirme la fecha de corte.
