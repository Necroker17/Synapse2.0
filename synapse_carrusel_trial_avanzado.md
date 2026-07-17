# Carrusel — Agitación para trial avanzado (semana 3, alto interés)

> Skill `carrusel-dicotomico` aplicada a un segmento nuevo: usuarios que llevan ~3 semanas probando el indicador y ya vieron impacto real en su operativa — no son Fase 1 (frío, sin mención de producto). Son audiencia caliente, cerca o después del punto de decisión del trial de 15 días. Synapse se nombra, y el CTA sí es de conversión.
>
> **Encaje en el sistema:** no había un asset para este momento del embudo — se agrega como **Asset 17 — Transformación en 3 semanas** en `synapse_narrative_assets.md`, mapeado a Fase 6 (Conversión) / Fase 7 (Cierre), y conecta con los experimentos de retención ya definidos en `business_plan/Crecimiento/product_growth_tasks.md` (Experimento 1: hito día 13-15; Experimento 3: oferta de conversión anticipada día 10-12).
>
> **Regla que sí aplica acá (a diferencia de Fase 1):** nunca prometer ganancias ni resultados garantizados — el disclaimer de riesgo es obligatorio (`ESTRATEGIA.md` §2, `synapse_messaging_bible.md` §9). La agitación se apoya en la experiencia real del usuario (menos autosabotaje, más disciplina), no en cifras de rentabilidad.

## Concepto Core

El trader que vuelve a decidir solo pierde justo lo que construyó en 3 semanas. El que se queda con el sistema, no vuelve atrás.

## Guion del carrusel (6 diapositivas)

**Slide 1 — El Gancho Dicotómico**
- Objetivo: contraste inmediato entre el "antes" caótico y el "ahora" con 3 semanas de sistema.
- Prompt Visual: Split-screen vertical 4:5. Izquierda: trader estresado rodeado de gráficos desordenados, captura borrosa de un chat mostrando un Stop Loss movido, luz fría azulada. Derecha: el mismo trader 3 semanas después, calmado, celular en mano mostrando una alerta limpia con SL/TP ya definidos, luz cálida dorada.
- Copy en Imagen: Superior: "HACE 3 SEMANAS" / Inferior: "HOY"

**Slide 2 — La Agitación (el costo de volver atrás)**
- Objetivo: agitar el costo de no continuar, no el costo de no empezar — esta audiencia ya empezó.
- Prompt Visual: El trader mirando un calendario/reloj con el trial por terminar, la mano dudando sobre un botón de "cancelar", el gráfico de fondo empezando a verse caótico otra vez.
- Copy en Imagen: "Volver a decidir solo cuesta más de lo que crees."

**Slide 3 — La Transición**
- Objetivo: el personaje recuerda el punto de partida y mide la distancia recorrida.
- Prompt Visual: El trader con un recuerdo visual superpuesto — su primera semana caótica junto a su semana actual ordenada — expresión de comprensión.
- Copy en Imagen: "3 semanas atrás no sabías si esto iba a funcionar."

**Slide 4 — El Mecanismo Único**
- Objetivo: atribuir la transformación al sistema — acá sí se nombra el producto, es audiencia que ya lo usa.
- Prompt Visual: El trader con el celular mostrando el panel de Synapse (semáforo en verde "DISPONIBLE", alerta con riesgo ya calculado), postura de confianza.
- Copy en Imagen: "Synapse ya tomó esa decisión por ti, 3 semanas seguidas."

**Slide 5 — La Transformación**
- Objetivo: mostrar el resultado tangible — libertad de no estar pegado a la pantalla, no una cifra de ganancia.
- Prompt Visual: El trader en un ambiente relajado (café, aire libre), una notificación de WhatsApp discreta de fondo, sin necesidad de mirar gráficos, expresión de calma y control.
- Copy en Imagen: "No dejaste de operar. Dejaste de sabotearte."

**Slide 6 — El Cierre de Respuesta Directa**
- Objetivo: conversión real hacia el plan pago — audiencia caliente, CTA directo.
- Prompt Visual: Mockup limpio de las tres tarjetas de plan (STANDARD/PRO/PREMIUM) o un único botón "Continuar con Synapse", estética premium oscuro/dorado.
- Copy en Imagen: "Tu trial está por terminar. No vuelvas a decidir solo."

## Caption

> 3 semanas atrás, no sabías si esto iba a funcionar.
>
> Hoy ya viste la diferencia: menos Stop Loss movidos, menos cierres por miedo, decisiones con matemática en vez de impulso.
>
> Tu trial está por terminar — y volver a decidir solo, justo en el momento en que más cuesta seguir el plan, no tiene por qué ser la única opción.
>
> Escribinos "CONTINUAR" y te mostramos qué plan te conviene según cómo estuviste operando estas 3 semanas.
>
> ⚠️ Operar instrumentos apalancados conlleva riesgo real de pérdida de capital. El rendimiento pasado no garantiza resultados futuros. Synapse es una herramienta de análisis y gestión de riesgo, no un servicio de asesoría financiera — la decisión final de cada operación es siempre tuya.

## Notas de ejecución

- **CTA "CONTINUAR":** igual que los otros carruseles con palabra clave, definir quién responde manualmente o automatizar el trigger en Manychat.
- **No usar cifras de win rate/profit factor en esta pieza** — la objeción #1 de verificabilidad (`synapse_messaging_bible.md` §6) sigue sin reconciliarse en `Landing_SynapseAI/lib/stats.ts`; la agitación se apoya en la experiencia cualitativa del propio usuario, no en estadísticas agregadas.
- **Segmentación real:** si "3 semanas" describe usuarios que ya pasaron el trial de 15 días y llevan unos días como clientes pagos, el CTA "tu trial está por terminar" del Slide 6/caption no aplica — cambiar a "¿seguimos para el próximo mes?" o equivalente. Confirmar en qué punto exacto del embudo está este grupo antes de publicar.
