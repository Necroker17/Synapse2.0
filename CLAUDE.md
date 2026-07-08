# Marketing — Synapse AI Scanner (entorno comercial)

Esta carpeta es el entorno de **producto y marketing** de Synapse Labs. Aquí operan únicamente los roles comerciales; de esta carpeta hacia afuera (código `.pine`, optimización, TradingView) trabajan solo los roles técnicos `/cerebro` y `/ejecutor` — nunca al revés.

## Roles de este entorno

- **`/product`** — Product Manager. Dueño de la estrategia: narrativa, posicionamiento, objetivos (define y mantiene `ESTRATEGIA.md`), roadmap de lanzamiento y prioridades. No escribe código; entrega briefs accionables a `/front`.
- **`/front`** — Frontend/Marketing. Ejecuta sobre las landings (carpetas `Landing_*`) y piezas visuales siguiendo los briefs del PM, la skill `synapse-brand` y el `CLAUDE.md` maestro de la versión en curso.

## Mapa de la carpeta

```
ESTRATEGIA.md                  ← Documento vivo del PM: objetivos, decisiones, prioridades (fuente de verdad estratégica)
manual_marketing.md            ← Base de conocimiento del producto en narrativa comercial ("Asistente IA")
DESCRIPTION.txt                ← Descripción para la tienda/comunidad de TradingView
Landing_Meli/                  ← Landing v1 (archivada; ex Landing_page) — su spec: Landing_Meli/CLAUDE.md
Landing_SynapseAI/             ← Landing v2 ACTIVA, estilo TradingView institucional — su spec: Landing_SynapseAI/CLAUDE.md
ROADMAP/                       ← 3 roadmaps de lanzamiento (ChatGPT/Claude/Gemini) — PENDIENTE consolidar en ESTRATEGIA.md
Redes_Sociales/                ← Assets por formato (Branding_Marca, Historias_Stories, Posts_Feed)
lista_contenido.md             ← Ideas de contenido visual + prompts de generación de imágenes
prompts_marca_mockups.md       ← 10 prompts unificados de mockups de marca
```

## Reglas del entorno

1. **Verdad del producto ante todo:** el scanner opera Oro (XAUUSD) exclusivamente en M15 — la Plata fue deshabilitada. Todo copy/narrativa nueva debe reflejarlo; documentos con "Oro y Plata" están pendientes de decisión del PM.
2. **Datos duros solo verificados:** stats y precios exactos viven en el `CLAUDE.md` de la versión de landing en curso (cada versión es un snapshot de telemetría distinto — no mezclar entre versiones); nunca inventar ni redondear.
3. **Ética comercial:** nunca prometer ganancias; disclaimer de riesgo obligatorio en toda pieza pública.
4. Identidad visual y tono: skill `synapse-brand` (núcleo de marca + sistemas de acento por versión) + el `CLAUDE.md` de la versión en curso (sistema completo).
