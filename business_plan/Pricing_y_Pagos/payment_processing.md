# Procesador de pago — Decisión y hoja de ruta

> Mantenido por `/product`. Fuente de verdad de la decisión de cobro. Depende de `pricing_strategy.md` (precios) y alimenta `fee_pago` en `../Finanzas/financial_model.md`.

**Decisión oficial (2026-07-10):** Fase 1 de lanzamiento con **Hotmart** como procesador único (checkout + suscripción + afiliados). Confirmado por el usuario tras investigación comparativa.

---

## 1. Por qué Hotmart y no otra opción (investigación 2026-07-10)

Ningún procesador combina "cobra PSE + Nequi + Apple Pay" con "paga automático en cripto por venta" en 2026. Comparativa:

| Opción | PSE/Nequi | Tarjeta int'l + Apple Pay | Payout cripto | Comisión | Fricción de montaje |
|---|---|---|---|---|---|
| **Hotmart** (elegido) | ✅ | Tarjeta ✅ / Apple Pay no confirmado | ❌ solo fiat | **9.9% + $0.50 USD/transacción** | Cero — trial, suscripción con tope de cobros y afiliados nativos |
| Wompi / PayU / ePayco (Colombia) | ✅ | Apple Pay no confirmado | ❌ solo fiat COP | 2.5%–3% | Alta — sin trial/suscripción/afiliados nativos, hay que construirlo |
| Stripe | ❌ Colombia no es país soportado, no procesa PSE/Nequi | ✅ | ✅ nativo (USDC, desde 2026) | 1.5% cripto / ~2.9%+$0.30 tarjeta | Alta — requiere LLC en EE.UU. (Stripe Atlas) |
| Gateways cripto puros (NOWPayments, Cryptomus) | ❌ | ❌ | ✅ | Bajas | Pierde PSE/Nequi/Apple Pay — malo para conversión |

Racional: sin capacidad de desarrollo dedicada hoy, el costo de construir suscripción + trial + tracking de afiliados a mano supera el ahorro de comisión de una pasarela local. Hotmart resuelve todo eso nativo desde el día uno.

## 2. Cómo se recibe en cripto (flujo manual, no automático)

Hotmart paga en fiat (retiro con $1 USD de fee). Para convertir a cripto: retiro periódico en lote → conversión a USDC vía exchange (Bitso, Binance) fuera de Hotmart. Es un paso manual, de bajo costo (~0.1–1%), que da control sobre el momento de conversión en vez de exposición a volatilidad venta por venta.

## 3. Roadmap de fases

- **Fase 1 (ahora):** Hotmart único procesador, todo el embudo (trial → STANDARD/PRO/PREMIUM) y el programa de embajadores corren sobre él.
- **Fase 2 (cuando haya volumen y margen validado):** sumar Wompi/PayU como segundo riel para checkout directo en la landing con tráfico colombiano (ahorra ~7 puntos de comisión vs. Hotmart). Hotmart se mantiene para ventas vía afiliados/embajadores e internacionales.
- **Fase 3 (opcional, no urgente):** Stripe vía LLC en EE.UU. si aparece tráfico internacional que pida Apple Pay o se quiera payout automático en USDC por venta. El mercado actual (LATAM/Colombia) pesa más hacia PSE/Nequi que Apple Pay.

## 4. Pendiente de verificar antes de operar el programa de embajadores

- Confirmar en el panel real de Hotmart si la comisión escalonada (50% primera venta / 25% re-consumo) es configurable nativamente o si hay que resolverlo con lógica externa.
- Automatización de entrega: Hotmart no integra nativamente con invite-only de TradingView — requiere Webhook (evento "compra aprobada") → Make → invitación en TradingView + alta en WhatsApp. Tarea técnica para `/ejecutor`, no bloqueante para documentar la decisión.
