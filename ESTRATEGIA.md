# ESTRATEGIA — Synapse AI Scanner (documento vivo del PM)

> Mantenido por el rol `/product`. Toda decisión estratégica se registra aquí con fecha y racional. Los briefs derivados se entregan a `/front` (landing/visual) o al usuario (contenido/ads).

## 1. Objetivos

- **Métrica norte (decidida 2026-07-06):** % de trials que llegan al día 15 y convierten a pago (STANDARD, PRO o PREMIUM). Toda priorización de experimentos de producto/marketing debe justificarse contra esta métrica.
- Pendiente: horizonte temporal del objetivo (ej. % objetivo a alcanzar y para cuándo) — aún no definido.

## 2. Posicionamiento y narrativa vigente

- Ángulo aprobado: **liberarse del autosabotaje** — "la IA toma la decisión por ti, con matemática, no con emociones". No se venden resultados.
- Producto real: Oro (XAUUSD), exclusivamente M15, sesión NY 7:00–11:00 (UTC-5), invite-only en TradingView.
- ⚠️ Deuda de narrativa detectada (2026-07-04): `manual_marketing.md` y `Landing_Meli/CLAUDE.md (ex Landing_page)` aún dicen "Oro y Plata" — decidir y corregir en cascada.

## 3. Decisiones

| Fecha | Decisión | Racional |
|---|---|---|
| 2026-07-04 | Oferta unificada: **15 días gratis** (reemplaza "7 días" en toda pieza pública, incluido el texto del link de WhatsApp). | Decisión del usuario en sesión de consultoría CRO; toda referencia a "7 días" queda obsoleta y debe corregirse en cascada (Hero.tsx, CTAFinal.tsx, Navbar, Landing_Meli/CLAUDE.md (ex Landing_page)). |
| 2026-07-04 | La landing se rediseña con jerarquía psicológica dolor→giro→prueba→acción (reporte CRO entregado por /product). | Eliminar el sesgo del creador (features técnicas) y anclar la conversión en los dolores reales del trader: violar el propio plan, revenge trading, culpa. Pendiente brief formal a /front. |
| 2026-07-06 | Modelo de negocio oficial: **membresías de tiempo fijo, Invite-Only** (STANDARD 3m / PRO 6m / PREMIUM 12m) + embudo de trial de 15 días (bono broker $30, Skool M1, WhatsApp abierto). Se descarta el profit-share manual. | Priorizar escalabilidad — el profit-share requiere verificación manual de resultados por usuario y no escala; la membresía de tiempo fijo da ingreso predecible y onboarding instantáneo. Detalle completo en `business_plan/pricing_strategy.md`. |
| 2026-07-06 | Métrica norte oficial: % de trials que llegan al día 15 y convierten a pago. | Es la métrica que conecta directamente el embudo de trial (15 días) con el ingreso; todo experimento de retención (`business_plan/product_growth_tasks.md`) se prioriza contra esta métrica. |
| 2026-07-06 | El precio de lanzamiento tiene **fecha de corte fija** (no "hasta agotar cupos"). Fecha exacta aún no definida por el usuario. | Una fecha fija sostiene una urgencia real y verificable en el copy ("hasta el [fecha]"), a diferencia de cupos que son difíciles de auditar públicamente sin exponer números de ventas. |
| 2026-07-06 | Herramienta de automatización para el Experimento 1 (secuencia de WhatsApp por hito de trial): **Manychat**, integrado con las landings en construcción. | Ya disponible/aprobado por el usuario — reduce el esfuerzo estimado del Experimento 1 de "medio" a "bajo-medio" (no requiere aprobación de WhatsApp Business API desde cero). |
| 2026-07-06 | Comisión de embajadores: **escalonada, no 50% recurrente plano** — 50% en la primera venta de cada cliente referido, 25% en cada re-consumo posterior. Se descarta el 50% recurrente de por vida propuesto originalmente. | El 50% plano de por vida no tiene tope de riesgo de margen a largo plazo; escalonar premia la adquisición (lo más caro) sin comprometer el margen indefinidamente al mismo nivel. **Sin validar contra margen real** — el usuario confirmó que el margen neto por plan aún no está calculado; pendiente antes de lanzar el programa. Detalle en `business_plan/ambassador_program.md`. |

## 4. Backlog estratégico

- [ ] Consolidar los 3 roadmaps de `ROADMAP/` en un único plan accionable (sección 1 y 3 de este doc) y archivar los originales.
- [ ] Resolver la discrepancia Oro/Plata en toda la comunicación (manual, landing, DESCRIPTION.txt).
- [ ] Auditar la narrativa de la landing sección por sección contra el ángulo de autosabotaje.
- [ ] Definir métricas de conversión de la landing y cómo medirlas.
- [ ] Propagar el modelo de pricing oficial (`business_plan/pricing_strategy.md`) a `manual_marketing.md`, `DESCRIPTION.txt` y la landing activa (`Landing_SynapseAI/`) — hoy ninguna pieza pública refleja los 3 planes ni el embudo de trial de 15 días.
- [ ] Definir fecha de corte del precio de lanzamiento y política de renovación (¿precio oficial o precio de adquisición se mantiene?) — ver nota pendiente en `business_plan/pricing_strategy.md` sección 3.
- [ ] Priorizar y correr los experimentos de retención trial→pago de `business_plan/product_growth_tasks.md` (secuencia WhatsApp por hito → oferta de conversión anticipada → trial health score).
- [ ] Calcular el margen neto por plan (precio − costos) para validar que la comisión de embajadores (50%/25%) deja margen sano, especialmente en el peor caso (cliente PREMIUM con varias renovaciones) — ver `business_plan/ambassador_program.md` sección 3. Bloqueante antes de lanzar el programa de embajadores.
- [ ] Confirmar con el usuario qué cuenta como "re-consumo" (¿renovación del mismo plan y upgrade cuentan igual?) — ver `business_plan/ambassador_program.md` sección 2.
- [ ] Definir requerimiento técnico de tracking de referidos (código/link único por embajador) antes de operar el programa.
- [ ] Llenar las variables de costo/volumen restantes de `business_plan/financial_model.md` (fee de pago, costo de soporte, trials/mes, tasa de conversión, mix de planes, % vía embajador, tasa de re-consumo) en cuanto existan cifras reales, y correr el prompt de `business_plan/google_sheets_prompt.md` cuando la conexión de Claude Code a Google Sheets esté lista.

## 5. Modelo de negocio

Ver `business_plan/pricing_strategy.md` (fuente de verdad de pricing y embudo), `business_plan/product_growth_tasks.md` (backlog de experimentos de retención), `business_plan/ambassador_program.md` (comisiones de embajadores), `business_plan/financial_model.md` (fórmulas de margen y costos operativos confirmados) y `business_plan/ambassador_earnings_projection.md` (proyección de ingresos de embajadores a 12 meses, escenario hipotético).
