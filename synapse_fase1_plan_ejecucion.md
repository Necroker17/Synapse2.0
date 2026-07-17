# Synapse Fase 1 — Plan de Ejecución (Historias + Carruseles)

> Plan completo para producir, vos o quien genere las piezas: 15 historias (5 días × 3) + 5 carruseles. No son diseños — son los prompts, guiones y el orden de ejecución. Fuente: `synapse_launch_blueprint.md` (Fase 1), `synapse_fase1_historias_guion.md` (guion de historias, ya actualizado con tu copy final), `synapse_narrative_assets.md` (assets que alimentan cada día).
>
> **Regla dura de toda la fase:** Synapse no aparece, no se menciona, no se vende. Ningún CTA pide activar trial ni nombra el producto — el CTA es siempre de bajo compromiso (comentar, guardar, compartir).

## 0. Nota sobre las skills pedidas

Busqué `plantilla-marketing-contenido` y `carrusel-dicotomico` en tu cuenta — existen y están habilitadas (`SearchSkills` las encontró), pero al invocarlas con la herramienta `Skill` en esta sesión de Claude Code devuelven "Unknown skill" (probé también con `synapse-escenarios`, mismo error). Es un problema de este entorno — esas skills viven en claude.ai pero no están sincronizadas a esta sesión de Code, no algo que pueda resolver desde acá. Apliqué directamente la misma lógica que describen sus fichas (parrilla con hooks/creencia/canal, y carrusel de 6 diapositivas por dicotomía extrema con CTA de baja fricción) para no bloquear el plan. Si te importa usar la skill original literalmente, decime y lo retomamos desde la app de claude.ai.

## 1. Especificación visual maestra (aplica a las 15 historias)

Formato: **1080×1920, imagen estática (NO video)**. Estilo premium, minimalista, fondo oscuro con detalles dorados y blancos, estética financiera/trading. Velas japonesas desenfocadas y elementos financieros elegantes de fondo (bokeh, no nítido). Tipografía grande, alto contraste, blanca con acentos dorados en palabras clave. **Sin logos ni marcas.**

**Bloque de estilo reutilizable** (pegalo al principio de cada prompt de imagen):

```
Vertical static image 1080x1920, premium minimalist financial/trading aesthetic.
Dark background (near-black) with elegant gold and white accent details.
Soft, blurred Japanese candlestick chart elements in the background — bokeh,
not sharp, purely atmospheric. Large, bold, high-contrast white typography,
centered, with subtle gold accent on 1-2 key words. No logos, no brand marks,
no people, no additional text beyond what's specified.
```

**Nota de producción:** los modelos de generación de imágenes (Nano Banana Pro u otro) suelen fallar al renderizar texto largo con precisión. Si el texto sale mal, generá la pieza SIN texto (quitando la línea de texto del prompt) y sobreponé el texto después en Canva o CapCut con una tipografía sans-serif bold blanca/dorada — mismo resultado, cero riesgo de errores tipográficos.

## 2. Los 15 prompts (uno por historia)

### Día 1 — ¿Y si el problema nunca fue el mercado?

**Historia 1**
> [Bloque de estilo] + Scene: a single elegant blurred candlestick chart trending downward, with a subtle thin red horizontal line suggesting a stop-loss level being crossed. Overlay text in bold white centered typography: "¿Cuántas veces has dicho: 'El mercado me sacó'?"

**Historia 2**
> [Bloque de estilo] + Scene: the same blurred candlestick motif now continuing upward past a faded dashed red line, reaching a soft gold horizontal line higher up. Overlay text: "¿Y si el mercado nunca te sacó... sino que tú cambiaste el plan?"

**Historia 3**
> [Bloque de estilo] + Scene: no chart, clean dark background only. Overlay text, three lines: "¿Qué crees que hace perder más dinero?" / "A) El mercado" / "B) Mis decisiones". Leave empty negative space in the lower third for an Instagram poll sticker.
> **Sticker (nativo de IG, no en la imagen):** Encuesta A/B.

### Día 2 — Mover el Stop Loss

**Historia 1**
> [Bloque de estilo] + Scene: blurred candlestick chart with a soft gold line marking a stop-loss level, price approaching it gently. Overlay text: "Mover el Stop parece protegerte..."

**Historia 2**
> [Bloque de estilo] + Scene: same chart, the gold stop-loss line now shown shifted further down/away, with a faint red zone showing extended loss. Overlay text: "Pero muchas veces solo retrasa aceptar una pérdida."

**Historia 3**
> [Bloque de estilo] + Scene: clean dark background only. Overlay text: "¿Has movido un Stop esta semana?" Leave lower third empty for sticker.
> **Sticker:** Encuesta Sí/No.

### Día 3 — Cerrar antes de tiempo

**Historia 1**
> [Bloque de estilo] + Scene: blurred candlestick chart rising steadily toward a soft gold target line, not yet reached. Overlay text: "¿Alguna vez cerraste una operación ganadora demasiado pronto?"

**Historia 2**
> [Bloque de estilo] + Scene: same chart, now showing the candles continuing past the point where it was closed, reaching the gold target line, with a faint marker where the exit happened. Overlay text: "Minutos después llegó exactamente al Take Profit... sin ti."

**Historia 3**
> [Bloque de estilo] + Scene: clean dark background only. Overlay text: "¿Qué sientes cuando una operación empieza a ganar?" Leave lower third empty for sticker.
> **Sticker:** Encuesta (emojis de opción o escala).

### Día 4 — La falsa solución

**Historia 1**
> [Bloque de estilo] + Scene: no chart — instead, a soft blurred arrangement of abstract minimal financial/UI icon shapes (generic chart lines, gear, magnifier) suggesting "tools", loosely scattered, gold and white line-art style. Overlay text: "Otro indicador. Otro curso. Otra estrategia."

**Historia 2**
> [Bloque de estilo] + Scene: same abstract icon arrangement, now dimmed/faded to suggest they didn't work. Overlay text: "¿Y si el problema nunca fue la información?"

**Historia 3**
> [Bloque de estilo] + Scene: clean dark background only. Overlay text: "¿Cuántos indicadores has probado?" Leave lower third empty for sticker.
> **Sticker:** Slider o encuesta numérica.

### Día 5 — El enemigo real

**Historia 1**
> [Bloque de estilo] + Scene: a single soft blurred candlestick chart, calm, with a subtle glowing point in the center suggesting a moment of decision (no hands, no people — just abstract light). Overlay text: "El mercado no cambia tus reglas."

**Historia 2**
> [Bloque de estilo] + Scene: same composition, the glowing point now slightly distorted/flickering to suggest emotional interference. Overlay text: "Tú las cambias cuando aparecen las emociones."

**Historia 3**
> [Bloque de estilo] + Scene: clean dark background only. Overlay text, list style: "¿Qué emoción te hace cometer más errores?" / "Miedo · FOMO · Impaciencia · Venganza". Leave lower third empty for sticker.
> **Sticker:** Encuesta de 4 opciones (o cuestionario).

## 3. Los 5 guiones de carrusel (dicotomía extrema, 6 diapositivas)

Estructura de la skill de carruseles: portada con dicotomía extrema → agitación del dolor por contraste → CTA de baja fricción. En Fase 1 el CTA nunca es de captación (no hay chat/lead), es de engagement puro (comentar, guardar).

### Carrusel Día 1 — "5 formas en las que un trader se sabotea sin darse cuenta"

1. **Portada:** "El 1% protege su capital. El 99% lo destruye sin darse cuenta." — 5 formas en las que un trader se sabotea sin darse cuenta.
2. "1. Mueve el Stop Loss 'solo un poco' — y convierte una pérdida controlada en una pérdida grande. 2. Cierra la ganadora antes de tiempo — por miedo a que 'se devuelva'."
3. "3. Entra por FOMO — sin que su propio análisis lo respalde."
4. "4. Hace revenge trading — abre otra operación para 'recuperar' la anterior. 5. Cambia de estrategia cada semana — sin darle tiempo a ninguna de funcionar."
5. "Ninguna de estas 5 es un problema de mercado. Las 5 son un problema de ejecución."
6. **CTA:** "¿Cuál de estas 5 te identifica más? Coméntalo. Guarda este post para releerlo antes de tu próxima operación."

### Carrusel Día 2 — "Por qué mover el Stop Loss casi nunca mejora el resultado"

1. **Portada:** "Lo que crees que haces: 'Le doy un poco más de espacio para que respire.' Lo que en realidad haces: retrasar aceptar una pérdida que ya estaba decidida."
2. "El Stop Loss no es un obstáculo. Es el punto donde tu análisis dijo: 'si llega aquí, me equivoqué.'"
3. "Moverlo no cambia si te equivocaste. Solo cambia cuánto te cuesta admitirlo."
4. "La mayoría de las cuentas no explotan por una mala entrada."
5. "Explotan por una mala salida, repetida varias veces."
6. **CTA:** "¿Has movido un Stop esta semana? Coméntalo sin filtro — el primer paso es reconocerlo."

### Carrusel Día 3 — "¿Por qué el miedo a ganar existe?"

1. **Portada:** "Todos hablan del miedo a perder. Casi nadie habla del miedo a ganar en grande."
2. "Cerrar antes de tiempo no se siente como un error. Se siente como 'ser prudente'."
3. "Pero el precio no sabe que cerraste. Sigue subiendo... sin ti."
4. "El miedo a ganar viene de no creerte capaz de sostener una ganancia grande."
5. "Y por eso la cierras apenas empieza a doler la ansiedad de 'perder lo que ya tengo'."
6. **CTA:** "¿Qué sientes cuando una operación empieza a ganar? Coméntalo — es más común de lo que crees."

### Carrusel Día 4 — "Todo lo que probablemente ya compraste..."

1. **Portada:** "Otro indicador. Otro curso. Otra estrategia. ¿Alguno cambió realmente tu resultado?"
2. "El indicador #1 que compraste prometía 'entradas precisas'."
3. "El curso #2 que compraste prometía 'la estrategia definitiva'."
4. "La señal #3 que seguiste prometía 'resultados garantizados'."
5. "Y aun con todo eso, seguiste tomando la misma decisión equivocada, en el mismo momento de siempre."
6. **CTA:** "¿Cuántos indicadores has probado? Coméntalo — no hay juicio, solo patrón."

### Carrusel Día 5 — "Las decisiones impulsivas cuestan más que una mala estrategia"

1. **Portada:** "Una mala estrategia pierde poco a poco. Una decisión impulsiva puede perder todo de una vez."
2. "El mercado no cambia tus reglas."
3. "Tú las cambias — justo cuando aparece el miedo, el FOMO, la impaciencia o las ganas de recuperarte."
4. "Esa versión tuya no aparece todos los días."
5. "Aparece exactamente en el momento en que más cuesta seguir el plan."
6. **CTA:** "¿Qué emoción te hace cometer más errores: miedo, FOMO, impaciencia o venganza? Coméntalo."

## 4. Checklist de ejecución

1. **Generar las 15 imágenes** con el bloque de estilo maestro (§1) + la escena de cada historia (§2), en el generador que prefieras (Nano Banana Pro u otro).
2. **Revisar el texto renderizado por la IA.** Si sale mal, regenerar sin texto y sobreponerlo en Canva/CapCut.
3. **Generar los 6 slides de cada carrusel** (§3) con el mismo bloque de estilo — tipografía como protagonista, sin necesidad de gráfico de fondo en cada slide (alternar slide con chart borroso / slide solo tipografía para dar ritmo visual).
4. **Verificar la regla de fase** antes de publicar cualquier pieza: cero menciones de Synapse, cero CTA de trial — todos los CTA son comentar/guardar/compartir.
5. **Programar por día**, siguiendo el orden de la miniserie (cada día cierra con la pregunta que abre el siguiente, `synapse_fase1_historias_guion.md`).
6. **Los emails, WhatsApp y lives de cada día** (temas ya definidos en el mensaje del Blueprint) quedan pendientes de guion — este documento cubre historias y carruseles únicamente.
