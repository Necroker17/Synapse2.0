# CLAUDE.md — Synapse AI Scanner Landing Page

Eres un agente de desarrollo frontend especializado en construir landing pages de alta conversión. Tu misión en esta sesión es construir la landing page completa de **Synapse AI Scanner v3.0** — un indicador premium de TradingView para operar Oro (XAUUSD) y Plata (XAGUSD).

---

## Stack tecnológico

```
Next.js 15       — App Router (/app directory)
Tailwind CSS     — utility-first, mobile-first
shadcn/ui        — componentes base (Button, Card, Badge)
Framer Motion    — animaciones de entrada por scroll
```

El proyecto vive en este directorio: `marketing/Landing_page/synapse-landing/`

Si no existe, inicia con:
```bash
npx create-next-app@latest synapse-landing --typescript --tailwind --app --no-src-dir --import-alias "@/*"
cd synapse-landing
npx shadcn@latest init
npx shadcn@latest add button card badge
npm install framer-motion
```

---

## Sistema de diseño

### Colores (agregar a `tailwind.config.ts`)
```ts
colors: {
  brand: {
    orange:  '#F97316',
    purple:  '#7C3AED',
    blue:    '#3B82F6',
    green:   '#22c55e',
    wa:      '#25D366',   // WhatsApp green
    dark:    '#09090B',   // fondo principal
    surface: '#0d0d14',   // tarjetas
    border:  '#1f1f2e',   // bordes
    muted:   '#A1A1AA',   // texto secundario
  }
}
```

### Tipografía
- Font: `Inter` (Google Fonts, weights 400/600/700/900)
- Headlines: `font-black` (900), `leading-tight`
- Body: `font-normal`, `text-sm`, `text-muted`

### Principios de diseño
- **Mobile-first**: diseña para 390px primero, luego expande con `md:` y `lg:`
- Fondo base: `#09090B` (casi negro)
- Bordes: `1px solid #1f1f2e`
- Tarjetas: `bg-[#0d0d14]`
- Texto destacado: `text-[#F97316]` (naranja)
- Solo usar glass-morphism con `backdrop-blur` en navbar

---

## Assets disponibles

Todos los assets están en `../assets/` (relativo al proyecto Next.js) o cópialos a `public/assets/`.

### Logo
- `logo_synapse_principal_neurona_azul_purpura.png`

### Hero (video + mockups)
- `content/VIDEOS/CREATIVO 3 - LANDING .mp4` ← **video principal del hero**
- `mockup_desktop_monitor_grafico_synapse_dark.png`
- `mockup_tablet_celular_alerta_whatsapp_lluvia.png`

### Features / Producto
- `mockup_celular_alerta_lockscreen_xauusd_urgente.png`
- `mockup_laptop_fondeo_passed_certified_trader.png`
- `organica_captura_real_alerta_sell_xauusd_consola.jpeg`
- `organica_grafico_senales_buy_sell_tp1_tp2_multiples.jpeg`

### Stats
- `organica_dashboard_stats_winrate_588_netprofit.jpeg`

### Testimonios (usar las 4)
- `testimonio_chat_laura_primer_trade_tremendas_ventas.png`
- `testimonio_chat_laura_balance_tp1_indicador.png`
- `testimonio_chat_3dias_profit_balance_237.png`
- `testimonio_grafico_sell_tp2_790pips_balance_84.png`

### Pricing
- `pricing_tres_planes_comparativa_119_197_299.png`
- `pricing_card_trimestral_119_3meses.png`
- `pricing_card_semestral_197_premium_6meses.png`
- `pricing_card_anual_299_deluxe_1ano.png`  ← (el precio real es $297, no $299)

### CTA Final
- `merch_tarjeta_founder_access_invite_only_mano.png`

### Mobile / Lifestyle
- `mockup_vertical_laptop_celular_alerta_wa.png`
- `mockup_vertical_celular_lockscreen_alerta_xauusd.png`

---

## Estructura de secciones (mobile-first, en orden)

```
[Navbar]          sticky · logo + CTA naranja
[S1 Hero]         badge → headline → sub → VIDEO → botón WhatsApp
[S2 Cómo funciona] 4 pasos verticales con iconos
[S3 Testimonios]  4 screenshots reales del grupo de Telegram
[S4 Stats]        KPIs reales del dashboard · imagen del dashboard
[S5 Pricing]      3 tarjetas verticales (mobile stack)
[S6 CTA Final]    founder card + Invite-Only + botón WhatsApp grande
[Footer]          logo + links + disclaimer de riesgo
```

---

## Narrativa y copy (NO cambiar el enfoque)

La landing NO vende resultados. Vende **liberarse del autosabotaje**.

### Ángulo principal
> El 90% de traders pierde por no seguir sus propias reglas.
> Synapse AI toma esa decisión por ti — con matemática, no con emociones.

### Headlines aprobados
- Hero: **"Deja de sabotearte cada vez que operas."**
- Cómo funciona: **"Tu trading en piloto automático."**
- Testimonios: **"Resultados reales. Sin filtros."**
- Stats: **"199 señales. Números reales."**
- Pricing: **"Invierte menos que una sola pérdida."**
- CTA Final: **"¿Sigues perdiendo por decisiones emocionales?"**

### Ángulos secundarios de copy (úsalos en el body text)
- Filtro sniper: solo opera cuando la matemática está a tu favor
- WhatsApp en 5 segundos: sin abrir un solo gráfico
- Prop firm: protege el capital, evita el overtrading
- Break-Even automático: riesgo queda en cero al tocar TP1

---

## Estadísticas verificadas (USAR EXACTAMENTE ESTOS)

Basadas en el dashboard real de TradingView (XAUUSD · Claude Opus 4.8 · Período 30):

| Métrica | Valor |
|---|---|
| Win Rate TP1 | **58.8%** (117 de 199) |
| Win Rate TP2 | **43.7%** (87 de 199) |
| Profit Factor | **1.61** |
| Total señales | **199** |
| Historial | **117W · 111L** |
| Net Profit | **+226,023 pips** |
| Racha máx. ganadora | 12 wins |
| Racha máx. perdedora | 6 losses |
| Beta-testers | 41 traders |

**NUNCA inventar estadísticas distintas a las de arriba.**

---

## Precios (USAR EXACTAMENTE ESTOS)

| Plan | Precio | Periodo | Copy ahorro |
|---|---|---|---|
| Trimestral | **$119** | 3 meses | $39.67/mes |
| Semestral ★ | **$197** | 6 meses | Ahorras 17% vs trimestral |
| Anual | **$297** | 12 meses | 3 meses GRATIS vs pagar semestral×2 |

El plan **Semestral** ($197) es el destacado (borde naranja, badge "MÁS ELEGIDO").

---

## CTA link (único para todos los botones)

```
https://wa.me/573116403562?text=Activar%20mis%207%20días%20gratis%20de%20IA%20en%20Trading%20View
```

Texto visible del botón: `💬 Prueba 7 días gratis` (hero/nav) o `💬 Activar mis 7 días gratis` (CTA final).

---

## Reglas de codificación

1. **Mobile-first siempre**: escribe el CSS base para móvil, luego `md:` para tablet y `lg:` para desktop.
2. **Sin comentarios** en el código a menos que sea un workaround no obvio.
3. **Componentes por sección**: un archivo por sección en `app/components/sections/`.
4. **Imágenes con `next/image`**: siempre `priority` en el hero, `loading="lazy"` en el resto.
5. **Video**: usar `<video autoPlay muted loop playsInline>` — NO usar controles de browser por defecto.
6. **Animaciones**: `framer-motion` `fadeInUp` con `viewport={{ once: true }}` para activar una sola vez.
7. **No inventar copy**: usar las headlines y ángulos definidos arriba.
8. **"Invite-Only" solo en S6 CTA Final** — no repetirlo en otras secciones.
9. **Accesibilidad básica**: `alt` en todas las imágenes, `aria-label` en botones de icono.
10. **TypeScript**: tipar todos los props de componentes.

---

## Lo que NO debes hacer

- ❌ Cambiar la narrativa a "resultados del indicador" — el foco es autosabotaje/reglas
- ❌ Inventar estadísticas o cambiar los números verificados
- ❌ Poner "Invite-Only" en el Hero o en Features
- ❌ Usar colores fuera del sistema de diseño definido
- ❌ Crear secciones adicionales no especificadas (FAQ, comparativa, etc.)
- ❌ Olvidar el disclaimer de riesgo en el footer
- ❌ Hacer la landing desktop-first y luego adaptarla a móvil
