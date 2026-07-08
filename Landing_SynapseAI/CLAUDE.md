# Landing_SynapseAI — Spec maestra (Landing v2, estilo TradingView institucional)

Landing **ACTIVA** de Synapse AI Scanner. Replica la página de detalles de un script oficial de TradingView con acabado premium y alta conversión. Esta spec destila el prompt de ejecución original (2026-07-05) y es la fuente de verdad de la versión — ante conflicto con otras landings, gana este archivo. Identidad de marca transversal: skill `synapse-brand`.

## Stack

- Next.js **15** (App Router, `--turbopack`) + TypeScript. App en la raíz de esta carpeta.
- Tailwind CSS v4 (tokens en `app/globals.css` vía `@theme inline`).
- shadcn/ui (radix): `button`, `card`, `badge`, `dialog` en `components/ui/`.
- Framer Motion (siempre `viewport={{ once: true }}` y `MotionConfig reducedMotion="user"`).
- Lucide React para iconos. Fuente Inter 400/600/700/900 (`--font-sans`) + Geist Mono para datos numéricos.
- Comandos: `npm run dev` · `npm run lint` · `npm run build` (cero errores, cero warnings).

## Design tokens (clases `tv-*` y `brand`)

| Token | Hex | Uso |
|---|---|---|
| `tv-bg` | `#09090B` | Fondo global |
| `tv-panel` | `#131722` | Paneles/cards principales |
| `tv-panel-2` | `#1e222d` | Superficies secundarias, ficha invitación |
| `tv-border` | `#2a2e39` | Todos los bordes |
| `tv-blue` | `#2962ff` | Acento primario, CTA navbar, entrada BUY |
| `tv-green` | `#089981` | SOLO wins/profit/TP + botón del formulario |
| `tv-red` | `#f23645` | SOLO pérdidas/SL/riesgo + badge LIVE |
| `brand` | `#7C3AED` | Morado de marca: logo, dashboard telemetría |
| `tv-text` / `tv-text-dim` | `#d1d4dc` / `#868993` | Texto/texto secundario |

## Datos verificados (snapshot de telemetría — NO alterar ni redondear)

Única fuente en código: **`lib/stats.ts`** (`TELEMETRY`, `SIGNAL_PANEL`, `LEVELS`).

- XAUUSD (Oro) M15 · Núcleo **Claude Opus 4.8** (badge LIVE rojo pulsante).
- Win Rate TP1 **55.9%** (105W / 82L de 188 señales) · TP2 **35.1%** (66) · PF **1.86**.
- Racha máx: **14W / 5L** · Weekly **+1723.1 pips** · Monthly **+1086.7 pips**.
- Señal activa: BUY, STATUS DISPONIBLE, Lotes 0.06, Entrada 4169.92, SL 4152.28, TP1 4187.56, TP2 4205.20, Riesgo 100 USD.

## Estructura de la página (`app/page.tsx`)

1. `Navbar` — sticky glass, logo (placeholder), CTA azul "Instalar gratis".
2. `Hero` — H1 "Synapse AI Indicator" + narrativa autosabotaje + `ChartMockup` (firma visual: velas SVG animadas del Oro M15, niveles TP/SL, dashboard morado, neurona verde — todo en código, no imagen).
3. Strip de `ImagePlaceholder` — capturas reales pendientes.
4. `InviteCard` — ficha lateral sticky (lg): réplica caja invite-only de TradingView. CTA verde "Instalar en mi cuenta (Prueba Gratuita)" → Dialog con **formulario de lead** (decisión del usuario, reemplaza al botón de WhatsApp): Nombre completo, Correo, Teléfono de WhatsApp, Usuario de TradingView.
5. `ParamsPanel` — réplica interactiva de los inputs (capital, % riesgo, filtros); demostrativo, estado local.
6. `Footer` — disclaimer de riesgo completo + descargo TradingView (obligatorio).

## Leads — SIN backend aún

`app/api/lead/route.ts` es un **stub** (valida 4 campos, `console.log`, responde 200). Punto de integración futuro: email/CRM/Google Sheet. El formulario (`components/invite-card.tsx`) ya valida client-side y tiene estado de éxito/error.

## Regla de imágenes

NO insertar assets reales hasta que el usuario lo pida. Todo hueco de imagen usa `components/image-placeholder.tsx` (borde punteado, icono, nombre de archivo esperado y dimensiones fijas via aspect-ratio) para que el asset entre sin mover la maquetación. Pendientes: `logo-synapse.png` (navbar/footer, 32×32), `captura-senal-buy.png` (640×400), `captura-dashboard.png` (640×400).

## Reglas duras

- Mobile-first (390px base → `md:` → `lg:`); sin scroll horizontal.
- Copy: vende liberarse del autosabotaje, NUNCA promete ganancias. "Invite-Only" solo en la ficha/CTA final. Oro M15 exclusivo (nada de Plata).
- `#25D366` reservado a WhatsApp (hoy sin uso: el CTA es formulario).
- Verificación visual real antes de cerrar: `npm run dev` + capturas a 390px y desktop.
