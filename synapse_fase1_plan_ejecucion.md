# Synapse Fase 1 — Plan de Ejecución (Historias + Carruseles)

> Plan completo para producir, vos o quien genere las piezas: 15 historias (5 días × 3) + 3 carruseles (skill `carrusel-dicotomico`). No son diseños — son los prompts, guiones y el orden de ejecución. Fuente: `synapse_launch_blueprint.md` (Fase 1), `synapse_fase1_historias_guion.md` (guion de historias, ya actualizado con tu copy final), `synapse_narrative_assets.md` (assets que alimentan cada día).
>
> **Regla dura de toda la fase:** Synapse no aparece, no se menciona, no se vende. Ningún CTA pide activar trial ni nombra el producto — el CTA es siempre de bajo compromiso (comentar, guardar, compartir).

## 0. Nota sobre las skills pedidas

Busqué `plantilla-marketing-contenido` y `carrusel-dicotomico` en tu cuenta — existen y están habilitadas (`SearchSkills` las encontró), pero al invocarlas con la herramienta `Skill` en esta sesión de Claude Code devuelven "Unknown skill" (probé también con `synapse-escenarios`, mismo error). Es un problema de este entorno — esas skills viven en claude.ai pero no están sincronizadas a esta sesión de Code. Para `carrusel-dicotomico` esto ya no aplica: subiste el archivo `.skill` directamente y lo apliqué literal (§3, sección "Los 3 carruseles"). `plantilla-marketing-contenido` sigue sin poder invocarse — se sigue aplicando la misma lógica por fuera.

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

## 3. Los 3 carruseles (skill `carrusel-dicotomico`, aplicada literal)

**Corrección de cuota:** la Fase 1 pide **3 carruseles** en total (`synapse_launch_blueprint.md` §6), no uno por día — una versión anterior de este documento tenía 5, ya corregido. Se eligieron los 3 temas con mejor formato de listicle/contraste: Día 1 (autosabotaje, panorama general), Día 2 (mover el Stop Loss, específico), Día 4 (falsa solución). Días 3 y 5 quedan cubiertos por sus historias/reel — sin carrusel propio.

**Resolución del choque skill vs. regla de Fase 1** (confirmada por el usuario): el Slide 4 (Mecanismo Único) nombra un sistema/protocolo genérico, **nunca "Synapse"** — el producto se reserva para la Fase 4. El Slide 6 (CTA) sí pide una acción de captación real (unirse al grupo de WhatsApp), pero apunta a comunidad, no a producto ni venta.

Plataforma asumida: Instagram, formato vertical 4:5.

---

### Carrusel 1 — "5 formas en las que un trader se sabotea sin darse cuenta"

**Concepto Core:** el 97% repite el mismo error de ejecución sin nombrarlo nunca; el 1% que deja de perder es el que primero aprende a reconocerlo.

**Slide 1 — El Gancho Dicotómico**
- Prompt Visual: Split-screen vertical 4:5. Izquierda: silueta borrosa de un trader frente a varias pantallas con gráficos rojos y líneas desordenadas, luz fría azulada, tensión. Derecha: silueta de un trader con una sola pantalla, un gráfico limpio con una caja verde de ganancia, luz cálida dorada, postura relajada. División marcada por una línea vertical delgada dorada.
- Copy en Imagen: Superior: "EL 97%" / Inferior: "EL 1%"

**Slide 2 — La Agitación**
- Prompt Visual: Primer plano de una mano moviendo el cursor hacia una orden de Stop Loss, gráfico en rojo cayendo, reloj de fondo marcando la madrugada, ambiente de estrés y cansancio.
- Copy en Imagen: "5 errores. Misma cuenta. Nunca los ves venir."

**Slide 3 — La Transición**
- Prompt Visual: El mismo trader mirando una bitácora con anotaciones tachadas, expresión de revelación al reconocer un patrón repetido, luz cambiando de fría a cálida.
- Copy en Imagen: "¿Y si el problema no era la estrategia?"

**Slide 4 — El Mecanismo Único**
- Prompt Visual: El trader con una única regla escrita y enmarcada frente a su escritorio, postura firme, pantalla ordenada de fondo, luz dorada envolvente.
- Copy en Imagen: "El Protocolo de Decisión Fija."

**Slide 5 — La Transformación**
- Prompt Visual: El trader relajado lejos de la pantalla, celular en mano con una notificación limpia, expresión de calma y control.
- Copy en Imagen: "Opera con reglas. No con impulsos."

**Slide 6 — El Cierre de Respuesta Directa**
- Prompt Visual: Mockup simple de un chat de WhatsApp con un mensaje de bienvenida a un grupo, ícono de comunidad, estética oscura y dorada, sin logos.
- Copy en Imagen: "Comenta 'AUTOSABOTAJE' y te sumo al grupo."

**Caption:**
> 5 formas en las que un trader se sabotea sin darse cuenta 👇
>
> 1️⃣ Mueve el Stop Loss "solo un poco"
> 2️⃣ Cierra la ganadora antes de tiempo
> 3️⃣ Entra por FOMO
> 4️⃣ Hace revenge trading después de perder
> 5️⃣ Cambia de estrategia cada semana
>
> Ninguna de las 5 es un problema de mercado.
>
> ¿Cuál te identifica más? Comenta el número 👇
>
> Si querés seguir esta conversación cada semana, comenta "AUTOSABOTAJE" y te sumo al grupo.

---

### Carrusel 2 — "Por qué mover el Stop Loss casi nunca mejora el resultado"

**Concepto Core:** el 97% mueve el Stop para "darle espacio"; el 1% solo lo mueve cuando el plan lo dice, nunca cuando el miedo lo pide.

**Slide 1 — El Gancho Dicotómico**
- Prompt Visual: Split-screen. Izquierda: gráfico de velas cayendo con una línea de Stop Loss siendo arrastrada más abajo por un cursor, ambiente tenso en rojo. Derecha: mismo tipo de gráfico con el Stop Loss fijo, intacto, activándose limpio, ambiente sereno en dorado.
- Copy en Imagen: Superior: "LO MUEVO" / Inferior: "LO RESPETO"

**Slide 2 — La Agitación**
- Prompt Visual: Primer plano de una pantalla mostrando una pérdida más grande de lo planeado, con el nivel original del Stop Loss marcado en gris tenue muy por encima del cierre real.
- Copy en Imagen: "Ese 'un poco más' costó el doble."

**Slide 3 — La Transición**
- Prompt Visual: Trader mirando dos gráficos lado a lado — uno con el SL movido (pérdida grande) y otro hipotético con el SL respetado (pérdida chica) — expresión de darse cuenta.
- Copy en Imagen: "El Stop no era el enemigo."

**Slide 4 — El Mecanismo Único**
- Prompt Visual: Una mano trazando con precisión una única línea de Stop Loss sobre un gráfico antes de abrir la operación, con un candado dorado simbólico sobre esa línea.
- Copy en Imagen: "La Regla del Stop Bloqueado."

**Slide 5 — La Transformación**
- Prompt Visual: Trader tranquilo viendo cómo su Stop Loss se activa sin drama, cerrando la laptop después, sin mirar dos veces.
- Copy en Imagen: "Perder poco. Seguir en el juego."

**Slide 6 — El Cierre de Respuesta Directa**
- Prompt Visual: Mockup de chat de WhatsApp, mensaje de bienvenida, ícono de comunidad, estética oscura y dorada, sin logos.
- Copy en Imagen: "Comenta 'STOP' y te sumo al grupo."

**Caption:**
> Por qué mover el Stop Loss casi nunca mejora el resultado 👇
>
> El Stop Loss no es un obstáculo. Es el punto donde tu análisis dijo: "si llega aquí, me equivoqué."
>
> Moverlo no cambia si te equivocaste. Solo cambia cuánto te cuesta admitirlo.
>
> ¿Has movido un Stop esta semana? Comentá sin filtro 👇
>
> Si querés seguir esta conversación, comenta "STOP" y te sumo al grupo.

---

### Carrusel 3 — "Todo lo que probablemente ya compraste..."

**Concepto Core:** el 97% compra la próxima herramienta; el 1% deja de buscar afuera lo que tiene que resolver adentro.

**Slide 1 — El Gancho Dicotómico**
- Prompt Visual: Split-screen. Izquierda: escritorio saturado con múltiples pestañas de indicadores, cursos y PDFs abiertos, expresión de agobio. Derecha: escritorio limpio con una sola pantalla y una única regla escrita, expresión de foco.
- Copy en Imagen: Superior: "MÁS HERRAMIENTAS" / Inferior: "UNA REGLA"

**Slide 2 — La Agitación**
- Prompt Visual: Collage de íconos de indicadores/cursos genéricos amontonados y tachados uno por uno, ambiente de frustración acumulada.
- Copy en Imagen: "3 indicadores. 2 cursos. Mismo resultado."

**Slide 3 — La Transición**
- Prompt Visual: Trader mirando fijamente esos íconos apagados, con una pregunta flotando visualmente sobre su cabeza, luz cambiando de fría a cálida.
- Copy en Imagen: "¿Y si el problema nunca fue la información?"

**Slide 4 — El Mecanismo Único**
- Prompt Visual: Trader cerrando todas las pestañas menos una, con un único documento abierto: una regla de ejecución simple y clara, luz dorada envolvente.
- Copy en Imagen: "El Protocolo de Ejecución Única."

**Slide 5 — La Transformación**
- Prompt Visual: Trader con un solo cuaderno o nota, tranquilo, sin necesidad de abrir más pestañas, expresión de alivio y simplicidad.
- Copy en Imagen: "Menos herramientas. Más consistencia."

**Slide 6 — El Cierre de Respuesta Directa**
- Prompt Visual: Mockup de chat de WhatsApp, mensaje de bienvenida, ícono de comunidad, estética oscura y dorada, sin logos.
- Copy en Imagen: "Comenta 'HERRAMIENTAS' y te sumo al grupo."

**Caption:**
> Todo lo que probablemente ya compraste buscando "la solución"... 👇
>
> Otro indicador. Otro curso. Otra estrategia.
>
> Y aun así, seguiste tomando la misma decisión equivocada, en el mismo momento de siempre.
>
> ¿Cuántos indicadores has probado? Comentá el número 👇
>
> Si querés seguir esta conversación, comenta "HERRAMIENTAS" y te sumo al grupo.

## 4. Checklist de ejecución

1. **Generar las 15 imágenes** con el bloque de estilo maestro (§1) + la escena de cada historia (§2), en el generador que prefieras (Nano Banana Pro u otro).
2. **Revisar el texto renderizado por la IA.** Si sale mal, regenerar sin texto y sobreponerlo en Canva/CapCut.
3. **Generar los 6 slides de cada carrusel** (§3) con el mismo bloque de estilo — tipografía como protagonista, sin necesidad de gráfico de fondo en cada slide (alternar slide con chart borroso / slide solo tipografía para dar ritmo visual).
4. **Verificar la regla de fase** antes de publicar cualquier pieza: cero menciones de Synapse, cero CTA de trial — todos los CTA son comentar/guardar/compartir.
5. **Programar por día**, siguiendo el orden de la miniserie (cada día cierra con la pregunta que abre el siguiente, `synapse_fase1_historias_guion.md`).
6. **Emails, WhatsApp y lives** ya están guionados en `synapse_fase1_emails_whatsapp_lives.md` — con esto, la Fase 1 queda completamente guionada en sus 6 formatos.
