# /loop prompt — Synapse AI Scanner Landing Page

> Copia el bloque de abajo y pégalo en Claude Code con `/loop`

---

```
Eres el agente ejecutor de la landing page de Synapse AI Scanner v3.0.

Tu objetivo es construir una landing page de alta conversión, mobile-first, con Next.js 15 + Tailwind + shadcn/ui + Framer Motion.

---

## PASO 0 — Lee estos documentos ANTES de escribir cualquier código (OBLIGATORIO)

Lee cada archivo en este orden exacto usando la herramienta Read:

1. `CLAUDE.md` — instrucciones maestras: stack, diseño, assets, copy, stats, precios, reglas
2. `../briefing_marketing_audiovisual.md` — ángulos de venta, ganchos de copy, USP del producto
3. `../manual_marketing.md` — posicionamiento de marca y tono de comunicación

No escribas una sola línea de código hasta haber leído los 3 documentos. Si alguno no existe, continúa con los que sí están disponibles.

---

## PASO 1 — Activa tus skills (OBLIGATORIO)

Después de leer los documentos, invoca estos skills en este orden:

**1. Skill ui-ux-pro-max** (tu guía de diseño principal)
Usa la herramienta `Skill` con `skill: "ui-ux-pro-max"`.
Este skill contiene 67 estilos, 96 paletas, 57 font pairings, reglas de accesibilidad y UX para landing pages con Tailwind + shadcn/ui. Aplica sus reglas en cada componente que construyas, especialmente:
- Touch targets mínimo 44×44px en todos los botones mobile
- Contraste mínimo 4.5:1 en texto sobre fondos oscuros
- `prefers-reduced-motion` para animaciones Framer Motion
- Espacio reservado para imágenes async (evita content jumping)
- Font size mínimo 16px en body mobile

**2. Skill frontend-design** (patrones de implementación frontend)
Usa la herramienta `Skill` con `skill: "frontend-design"`.
Aplica sus patrones para estructurar componentes Next.js 15, manejo de imágenes con `next/image` y arquitectura del App Router.

**3. Plugin context7** (documentación actualizada)
Cuando necesites verificar una API específica de Next.js 15, Tailwind CSS, shadcn/ui o Framer Motion, usa context7 para consultar la documentación actualizada en lugar de asumir por tu entrenamiento.
Ejemplo: antes de usar `useInView` de Framer Motion, consulta context7 para confirmar la API correcta en la versión actual.

---

## Reglas de iteración

Trabaja en fases iterativas. En cada iteración:
1. Completa UNA fase de la lista de abajo
2. Verifica que compile sin errores (`npm run build` o `npm run dev`)
3. Reporta qué completaste y cuál es la siguiente fase
4. Continúa a la siguiente fase sin esperar confirmación

---

## FASE 1 — Setup del proyecto

- Crea el proyecto Next.js 15 en `synapse-landing/` (si no existe)
- Instala dependencias: tailwindcss, shadcn/ui, framer-motion
- Configura `tailwind.config.ts` con los colores de marca del CLAUDE.md
- Configura `app/layout.tsx` con: fuente Inter, fondo `#09090B`, color base blanco
- Copia todos los assets de `../assets/` a `public/assets/`
- Copia el video de `../content/VIDEOS/CREATIVO 3 - LANDING .mp4` a `public/videos/hero.mp4`
- Verifica que `npm run dev` corra sin errores

Checkpoint: servidor corriendo en localhost:3000 con fondo oscuro ✓

---

## FASE 2 — Navbar

Archivo: `app/components/sections/Navbar.tsx`

- Sticky, `z-50`, `backdrop-blur-md`, fondo `rgba(9,9,11,0.9)`
- Izquierda: logo (imagen `logo_synapse_principal_neurona_azul_purpura.png`) + texto "Synapse AI"
- Derecha: botón naranja "Prueba 7 días gratis →" que abre el link de WhatsApp
- En móvil: solo logo + botón (sin links de navegación)
- En desktop (`md:`): agrega links de navegación — Features · Resultados · Precios

---

## FASE 3 — Hero (S1)

Archivo: `app/components/sections/Hero.tsx`

Orden mobile (de arriba a abajo):
1. Badge: chip con punto púrpura + "Synapse AI Scanner · Para TradingView"
2. Headline: "Deja de sabotearte" (línea 1) + "cada vez que operas." en naranja (línea 2) — font-black, text-4xl
3. Sub: "El 90% de traders pierde por no seguir sus propias reglas. Synapse AI toma esa decisión por ti — con matemática, no con emociones."
4. VIDEO: `<video autoPlay muted loop playsInline src="/videos/hero.mp4">` con border-radius 12px, aspect-video, w-full
5. Botón WhatsApp verde: "💬 Prueba 7 días gratis" — abre `https://wa.me/573116403562?text=Activar%20mis%207%20días%20gratis%20de%20IA%20en%20Trading%20View`
6. Nota: "Redirige a WhatsApp · Sin tarjeta de crédito" — text-xs text-muted

En desktop (`md:`): convierte en split — copy izquierda (col-span-1), video derecha (col-span-1)

Animación: fadeInUp con framer-motion, stagger de 0.1s entre elementos

---

## FASE 4 — Cómo funciona (S2)

Archivo: `app/components/sections/HowItWorks.tsx`

- Label: "CÓMO FUNCIONA" — text-xs tracking-widest text-muted
- Título: "Tu trading en **piloto automático.**" — "piloto automático" en naranja
- Sub: "Sin análisis manuales. Sin horas mirando gráficos. Sin decisiones emocionales."
- 4 pasos en columna (móvil) / 2×2 grid (desktop):
  1. 🔍 "Synapse AI escanea el mercado" — el algoritmo analiza volatilidad, momentum y estructura. Solo actúa cuando la matemática está a tu favor.
  2. 📱 "Recibes la señal en WhatsApp" — dirección, entrada, SL, TP1, TP2 y riesgo exacto en USD por micro-lote.
  3. ⚡ "Ejecutas en 5 segundos" — abres MetaTrader, colocas la orden con los números ya calculados. Sin pensar, sin dudar.
  4. 🛡️ "Break-Even automático" — al tocar TP1, tu stop se mueve a entrada. Tu riesgo queda en cero sin que hagas nada.
- Cada paso: ícono en círculo coloreado + título bold + descripción text-muted
- Imagen de apoyo (opcional desktop): `organica_captura_real_alerta_sell_xauusd_consola.jpeg`

---

## FASE 5 — Testimonios (S3)

Archivo: `app/components/sections/Testimonios.tsx`

- Label: "LO QUE DICEN LOS TRADERS"
- Título: "Resultados reales." + "Sin filtros." en naranja
- Badge verde: "✅ 41 traders verificados"
- Grid 1 columna (móvil) / 2×2 (desktop) con las 4 imágenes:
  - `testimonio_chat_laura_primer_trade_tremendas_ventas.png`
  - `testimonio_chat_3dias_profit_balance_237.png`
  - `testimonio_grafico_sell_tp2_790pips_balance_84.png`
  - `testimonio_chat_laura_balance_tp1_indicador.png`
- Cada imagen: `next/image`, `rounded-xl`, `border border-[#1f1f2e]`, shadow oscuro
- Animación: fadeIn escalonado al hacer scroll

---

## FASE 6 — Stats (S4)

Archivo: `app/components/sections/Stats.tsx`

- Label: "MÉTRICAS VERIFICADAS"
- Título: "199 señales." + "Números reales." en naranja
- Sub: "Datos del dashboard en vivo — XAUUSD · Claude Opus 4.8 · Período 30"
- Grid 2×2 de KPI cards (móvil) / 4 columnas (desktop):
  - **58.8%** — Win Rate TP1 · 117 de 199
  - **43.7%** — Win Rate TP2 · 87 de 199
  - **1.61** — Profit Factor global
  - **199** — Señales generadas
- Card full-width: **+226,023 pips** — Net Profit acumulado · 117W · 111L
- Imagen del dashboard: `organica_dashboard_stats_winrate_588_netprofit.jpeg` con `next/image`, rounded-xl, border
- Texto aclaratorio pequeño: "Racha máx. ganadora: 12 wins · Racha máx. perdedora: 6 losses"

IMPORTANTE: Usar exactamente estos números. No inventar ni redondear.

---

## FASE 7 — Pricing (S5)

Archivo: `app/components/sections/Pricing.tsx`

- Label: "ELIGE TU ACCESO"
- Título: "Invierte menos que" + "una sola pérdida." en naranja
- Sub: "Un servicio de señales premium cobra $60–100/mes. Synapse AI desde $24.75/mes."
- Stack vertical en móvil / 3 columnas en desktop:

**Tarjeta 1 — Trimestral**
- $119 / 3 meses · $39.67/mes
- Features: Acceso Synapse AI v3.0, Alertas WhatsApp, Dashboard KPIs, Soporte estándar
- Botón secundario (outline): "💬 Activar vía WhatsApp"

**Tarjeta 2 — Semestral ★ (DESTACADA)**
- Badge "⭐ MÁS ELEGIDO" en la parte superior
- Borde naranja `border-[#F97316]`
- $197 / 6 meses · $32.83/mes · "Ahorras 17% vs. trimestral" en color púrpura
- Features: Todo lo del trimestral + Soporte prioritario + Acceso a v3.1 + Ciclo completo de mercado
- Botón principal verde WhatsApp: "💬 Activar vía WhatsApp"

**Tarjeta 3 — Anual**
- $297 / 12 meses · $24.75/mes · "3 meses GRATIS vs pagar semestral×2" en púrpura
- Features: Todo lo del semestral + Soporte VIP + Precio congelado + Acceso anticipado v4.0
- Botón secundario: "💬 Activar vía WhatsApp"

Todos los botones → mismo link de WhatsApp del CLAUDE.md

---

## FASE 8 — CTA Final (S6)

Archivo: `app/components/sections/CTAFinal.tsx`

- Fondo: gradiente oscuro `from-[#0f0a1e] via-[#09090B] to-[#150b05]` + glow radial naranja sutil
- Imagen centrada: `merch_tarjeta_founder_access_invite_only_mano.png` — 80px ancho, redondeada
- Badge ÚNICO "🔒 Acceso Invite-Only · Cupos limitados" — naranja, solo aquí en toda la página
- Headline: "¿Sigues perdiendo por decisiones emocionales?"
- Sub: "Únete a los 41 traders que ya operan el Oro con estructura matemática — sin overtrading, sin FOMO, sin autosabotaje."
- Botón WhatsApp grande: "💬 Activar mis 7 días gratis"
- Nota bajo el botón: "→ Configuración en 3 min · Sin tarjeta de crédito"

---

## FASE 9 — Footer

Archivo: `app/components/sections/Footer.tsx`

- Logo + "Synapse AI · Scanner v3.0"
- Links: Features · Precios · WhatsApp
- Disclaimer OBLIGATORIO:
  > "⚠️ El trading de instrumentos financieros conlleva riesgo significativo de pérdida de capital. Los resultados históricos no garantizan rendimientos futuros. Synapse AI Scanner es una herramienta de análisis técnico y no constituye asesoramiento financiero. Opera solo con capital que puedas permitirte perder."
- © 2026 Synapse Labs · Todos los derechos reservados

---

## FASE 10 — Ensamblado y pulido final

Archivo: `app/page.tsx`

- Importa y ensambla todos los componentes en orden
- Verifica que el scroll entre secciones sea fluido
- Revisa que todas las animaciones framer-motion tengan `viewport={{ once: true }}`
- Prueba que el link de WhatsApp funcione en todos los botones
- Verifica que el video del hero tenga autoPlay, muted, loop, playsInline
- Ejecuta `npm run build` — debe completar sin errores
- Reporta la URL local donde se puede visualizar la landing completa

---

## Reglas de iteración

- Trabaja una fase a la vez, en orden
- Después de cada fase: compila, verifica, reporta brevemente
- Si encuentras un error: corrígelo antes de avanzar a la siguiente fase
- No esperes aprobación entre fases — avanza automáticamente
- Si hay un bloqueo real (asset faltante, error no resolvible): repórtalo y espera instrucciones
```
