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
Estas cifras **solo pueden aparecer en `/metodo`**, nunca en la landing del anuncio.

> ⚠️ **Inconsistencia abierta:** `105 W + 82 L = 187`, pero se declaran **188** señales. El win rate (55.9%) y el TP2 (35.1%) están calculados sobre 188. Por eso `/metodo` **omite a propósito el desglose W/L** — publicar ambos números juntos mostraría la contradicción. Reponer el desglose cuando el PM confirme cuál cifra es la correcta.

- XAUUSD (Oro) M15 · Núcleo **Claude Opus 4.8** (badge LIVE rojo pulsante).
- Win Rate TP1 **55.9%** (105W / 82L de 188 señales) · TP2 **35.1%** (66) · PF **1.86**.
- Racha máx: **14W / 5L** · Weekly **+1723.1 pips** · Monthly **+1086.7 pips**.
- Señal activa: BUY, STATUS DISPONIBLE, Lotes 0.06, Entrada 4169.92, SL 4152.28, TP1 4187.56, TP2 4205.20, Riesgo 100 USD.

## Arquitectura de rutas (reestructurada 2026-08-16)

La página se reorganizó para que **Meta no clasifique el dominio como servicios financieros**. Brief completo y justificación: `business_plan/Campana/landing_trial_meta.md`. No revertir sin leerlo.

```
/          ← LANDING DEL ANUNCIO. Objetivo único: activar el trial de 15 días.
             Software, mecanismo, trial. CERO cifras de rendimiento.
/metodo/    ← Detalle técnico + telemetría + ChartMockup + ParamsPanel.
             Pública y rastreable; simplemente no es destino de anuncio.
```

La separación es arquitectura de embudo normal, **no cloaking**: todo el mundo ve exactamente lo mismo. Nunca servir contenido distinto a un revisor.

### `app/page.tsx`

1. `Navbar` — sticky glass, logo (placeholder). **Un solo CTA** verde "Probar gratis"; se quitaron los enlaces de sección para no repartir la atención.
2. `HeroTrial` — H1 "Tu plan de trading, convertido en notificaciones" + `PhoneAlert` como firma visual.
3. `ProblemSection` — "El plan no falla en el papel. Falla a las 9:07." **Siempre en tercera persona.**
4. `DecisionsSection` — las 5 decisiones eliminadas. El corazón de la página.
5. `HowItLooks` — dos `PhoneAlert` en secuencia: alerta entrante → equilibrio alcanzado.
6. `NotAdvice` — "Esto no es asesoría financiera". Sección de mayor apalancamiento; va visible, nunca en el pie.
7. `TrialClose` — el trial + enlace discreto a `/metodo`.
8. `Footer` — disclaimer de riesgo completo + descargo TradingView (obligatorio).

### Reglas duras de `/` (romperlas revierte el reposicionamiento)

- **Cero cifras de rendimiento** (win rate, PF, pips). Viven en `/metodo`.
- **Cero enlaces salientes** a bróker, bono o checkout — Meta rastrea los enlaces.
- **Cero precios.** `/planes` no se enlaza desde aquí.
- El problema se redacta en tercera persona: "casi todo trader", nunca "tú".
- "Notificación"/"alerta", nunca "señal". "Software"/"herramienta", nunca "asesoría".
- Un solo CTA en toda la página.

### Firma visual: el teléfono, no el gráfico

`components/phone-alert.tsx` reemplaza a `ChartMockup` como hero. El gráfico de velas es el reflejo visual de la categoría "producto financiero" y es lo que dispara la clasificación; además, la alerta con el riesgo en dólares es el atributo que la propia audiencia eligió como más valioso. `ChartMockup` sigue vivo y se usa en `/metodo`.

### Componentes huérfanos tras la reestructura

`invite-card.tsx` e `image-placeholder.tsx` ya no se importan en ninguna ruta. Se conservan sin borrar: el primero por si vuelve la ficha invite-only en otra página, el segundo porque la regla de imágenes lo sigue exigiendo cuando entren las capturas reales. Si en la próxima revisión siguen sin uso, borrarlos.

### Píxel

`lib/track.ts` — no-op si el píxel no está instalado. Se dispara `Lead` al enviar el formulario. **Optimizar por `Lead`, no por `StartTrial`**, mientras el volumen semanal no se acerque a 50 (hoy hay 5 activaciones totales). Nunca usar `Purchase` para un trial gratuito.

## Leads — sin backend todavía

`app/api/lead/route.ts` **fue eliminado** (2026-08-16). Era un stub que validaba y hacía `console.log`: no persistía nada, registraba datos personales en los logs y bloqueaba el export estático.

El formulario (`components/trial-form.tsx`) ahora hace POST **directo desde el cliente** a `process.env.NEXT_PUBLIC_LEAD_WEBHOOK` — el webhook de Make que alimenta la base en Sheets (`business_plan/Infraestructura/flujos_automatizacion.md`). Enviar desde el cliente hace que funcione igual en el export estático y en un servidor.

**Mientras la variable no esté definida, el formulario entra en modo vista previa:** valida y muestra la interfaz, pero no finge un envío ni recoge datos que se perderían. Para activarlo: definir `LEAD_WEBHOOK` como secreto del repo (lo consume el workflow) o `NEXT_PUBLIC_LEAD_WEBHOOK` en el entorno del hosting.

## Dos destinos de build

| Comando | Destino | Qué hace |
|---|---|---|
| `npm run build` | Vercel / servidor | Build normal |
| `GH_PAGES=1 npm run build` | GitHub Pages | Export estático a `out/`, con `basePath: /Synapse2.0` |

La condición vive en `next.config.ts`. El despliegue a Pages lo hace `.github/workflows/deploy-pages.yml`.

> ⚠️ El workflow publica **solo `Landing_SynapseAI/out`**, nunca la raíz del repo. Un sitio de GitHub Pages es público aunque el repositorio sea privado, y `business_plan/` contiene el reparto entre socios, el pricing y los datos de campaña. No cambiar el `path` del artefacto.

## Regla de imágenes

NO insertar assets reales hasta que el usuario lo pida. Todo hueco de imagen usa `components/image-placeholder.tsx` (borde punteado, icono, nombre de archivo esperado y dimensiones fijas via aspect-ratio) para que el asset entre sin mover la maquetación. Pendientes: `logo-synapse.png` (navbar/footer, 32×32), `captura-senal-buy.png` (640×400), `captura-dashboard.png` (640×400).

## Reglas duras

- Mobile-first (390px base → `md:` → `lg:`); sin scroll horizontal.
- Copy: vende liberarse del autosabotaje, NUNCA promete ganancias. "Invite-Only" solo en la ficha/CTA final. Oro M15 exclusivo (nada de Plata).
- `#25D366` reservado a WhatsApp (hoy sin uso: el CTA es formulario).
- Verificación visual real antes de cerrar: `npm run dev` + capturas a 390px y desktop.
