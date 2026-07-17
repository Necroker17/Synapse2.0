# Synapse Labs / Synapse AI Scanner — Brief de marca

> Documento de referencia comercial: quién es la marca, qué ofrece, a quién le habla, cómo se comunica y por qué canales. Consolida lo verificado en el repo (`CLAUDE.md`, `ESTRATEGIA.md`, `manual_marketing.md`, `Landing_SynapseAI/CLAUDE.md`, `business_plan/Pricing_y_Pagos/pricing_strategy.md`, `Formularios/formulario_trial15dias.md`). Donde algo no está definido formalmente todavía, se marca explícitamente como pendiente — no se inventa.

---

## 1. Nombre de la marca y creador

- **Marca:** Synapse Labs.
- **Producto:** Synapse AI Scanner / Synapse AI Indicator (también "Synapse AI" a secas en copy corto).
- No hay un nombre de fundador expuesto como firma pública de marca. Internamente existen roles societarios (Fundador, y los socios estratégicos **Gustavo** — estrategia digital/monetización — y **Meli** — rol comercial, VSL/embudos y embajadores), con reparto de ganancia definido en `business_plan/Finanzas/profit_split.md`, pero eso es estructura interna del negocio, no identidad pública.

## 2. Cómo nació el proyecto y su propósito

- **Origen del proyecto:** no existe todavía un documento de "historia de origen" en el repo — pendiente de redactar con el fundador si se quiere usar en narrativa pública (ej. sección "sobre nosotros", email de bienvenida, VSL).
- **Propósito (esto sí está firme y documentado):** el producto no nace para "predecir el mercado", nace para atacar la causa número uno por la que los traders pierden dinero — que casi nunca es falta de estrategia, sino **no seguir sus propias reglas** (autosabotaje: revenge trading, mover el Stop Loss, entrar por impulso, cerrar antes de tiempo por miedo).
- **Ángulo oficial (no se cambia sin decisión de `/product`):**
  > "El 90% de los traders pierde por no seguir sus propias reglas. Synapse AI toma esa decisión por ti — con matemática, no con emociones."

## 3. Qué ofrece exactamente

**Producto base:** indicador/escáner algorítmico de acceso **Invite-Only en TradingView**, exclusivo para **Oro (XAUUSD), temporalidad M15**, con **dos sesiones diarias independientes** — Nueva York (7:00–11:00 a.m.) y Asia (6:00–10:00 p.m.), hora Colombia — cada una con su propia señal etiquetada y su propio win rate visible en el panel. El usuario elige qué señal seguir. Entrega señal de entrada, Stop Loss, dos Take Profit (TP1/TP2) y el lotaje calculado según capital y riesgo del trader. (Detalle técnico completo en `indicador_synapse.md`.)

**Envoltorio comercial (embudo):**

| Etapa | Qué incluye |
|---|---|
| Trial — 15 días gratis | Bono de $30 USD del bróker (sin depósito requerido) · 3 módulos de Hotmart Club (operar el indicador, leer alertas, disciplina) · grupo abierto de WhatsApp con clases gratuitas y prueba social |
| STANDARD (3 meses) | $197 USD lanzamiento ($249 precio oficial) · indicador + comunidad privada de señales en WhatsApp + clases/análisis en vivo |
| PRO (6 meses) | $299 USD lanzamiento ($397 oficial) · todo STANDARD + señales VIP de altos ratios + soporte prioritario |
| PREMIUM (12 meses) | $699 USD lanzamiento ($799 oficial) · todo PRO + acceso a "Grupo Elite" (mentoría 1 a 1) |

Cada tier es acumulativo (PRO incluye STANDARD, PREMIUM incluye PRO). El precio de lanzamiento es una oferta introductoria con fecha de corte fija (fecha exacta aún no confirmada por el usuario — no usar en piezas públicas hasta tenerla).

## 4. A quién le habla (cliente ideal)

No existe todavía un buyer persona formal (dolor/objeciones/lenguaje documentado aparte). Lo que sí perfila al cliente real es el **formulario de alta al trial, ya construido y en vivo** (`Formularios/formulario_trial15dias.md`), que segmenta por:

- **Tiempo en el trading:** desde menos de 6 meses hasta más de 3 años — no es un producto solo para principiantes ni solo para expertos.
- **Tipo de cuenta:** fondeo (prop firm), cuenta real propia o cuenta demo.
- **Mayor obstáculo declarado al operar** (pregunta central del formulario):
  - Autosabotaje emocional (miedo, venganza, cerrar antes de tiempo)
  - Sobre-operativa / overtrading (entrar por aburrimiento o necesidad)
  - Falta de capital disponible
  - Falta de tiempo para analizar gráficos durante el día

**Lectura del perfil:** no es un trader que necesita que le enseñen qué es una vela japonesa — es alguien que ya conoce el mercado pero se boicotea en la ejecución, o que no tiene tiempo de estar pegado al gráfico. El indicador vende quitarle esa fricción, no enseñarle trading desde cero.

*Pendiente:* formalizar esto en un avatar de cliente ideal (dolor específico, objeciones de compra, vocabulario que usa) si se va a usar para guionizar ads o VSL — el propio backlog de `Formularios/formulario_trial15dias.md` ya prevé un futuro "Formulario C" que capturaría objeciones anticipadas.

## 5. Estilo de comunicación

El `CLAUDE.md` maestro del proyecto apunta a la skill `synapse-brand` como fuente oficial de tono e identidad visual, pero **esa skill no está disponible/cargada en esta sesión** — este documento no puede citar sus reglas exactas de voz. Lo que sí se puede afirmar, verificado en el copy real ya aprobado en el repo:

- **Directo y confrontativo con el dolor**, no aspiracional: *"¿Sigues perdiendo por decisiones emocionales?"*, *"Deja de sabotearte cada vez que operas."*
- **Autoridad técnica sin tecnicismo excesivo** — habla de "matemática, no emociones", de filtros y reglas fijas, pero en lenguaje llano.
- **Estética premium / minimalista**: modo oscuro, acentos naranja vibrante y dorado sutil (asociado al oro), fotografía de producto de alta gama, cero desorden visual.
- **Límite ético no negociable:** nunca promete ganancias ni resultados. Toda pieza pública lleva disclaimer de riesgo obligatorio. Se vende el sistema (disciplina + matemática), no el resultado.

*Pendiente:* una guía de voz explícita (vocabulario permitido/prohibido, nivel de formalidad, uso de "tú" vs "usted", emojis sí/no por canal) sería recomendable si se va a delegar la redacción de copy a más de una persona.

## 6. Canales

| Canal | Rol |
|---|---|
| **WhatsApp** | Canal central de conversión y comunidad: grupo abierto durante el trial, comunidad privada de señales post-pago, automatizado con Manychat |
| **TradingView** | El producto en sí (Invite-Only) y sus alertas nativas, que disparan las notificaciones |
| **Landing web** (`Landing_SynapseAI`, activa) | Puerta de entrada: presenta el producto y dirige al formulario de trial |
| **Google Forms** | Alta oficial al trial de 15 días (formulario ya construido y en vivo) |
| **Hotmart / Hotmart Club** | Checkout, suscripción, afiliados y los 3 módulos de educación del trial (reemplazó a Skool desde 2026-07-12) |
| **Instagram y Telegram** | Contenido social (historias, posts, canal) — ver `lista_contenido.md` para línea gráfica |

---

## 7. Brechas abiertas (no completar sin validación del usuario/PM)

- Historia de origen del proyecto/fundador — no documentada.
- Buyer persona formal (dolor, objeciones, vocabulario) — hoy solo inferido del formulario de trial.
- Guía de voz de marca explícita — la skill `synapse-brand` existe referenciada pero no estaba disponible para consultar en esta sesión.
- Fecha de corte del precio de lanzamiento — pendiente de confirmación del usuario (ver `ESTRATEGIA.md`).
