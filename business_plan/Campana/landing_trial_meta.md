# Brief de landing — Trial 15 días, arquitectura Meta-safe

> Mantenido por `/product`. Brief accionable para `/front` sobre `Landing_SynapseAI/`. Objetivo único de la página: **activación del trial de 15 días**. Restricción de diseño: que el rastreo de Meta no clasifique el dominio como servicios financieros / asesoría.
>
> Voz y reglas: skill `synapse-escenarios`. Precios (NO van en esta página): `../Pricing_y_Pagos/pricing_strategy.md`.

---

## 0. La distinción que ordena todo el documento

| | |
|---|---|
| ✅ **Reposicionar** | Escribir la página para que describa con precisión lo que el producto realmente es: software de decisión y gestión de riesgo. Todo el mundo ve lo mismo. **Esto es lo que hacemos.** |
| ❌ **Cloaking** | Mostrarle contenido distinto al revisor/rastreador que al usuario. Deformar palabras para esquivar filtros. Redirecciones condicionales. **Es violación por sí sola y cuesta la cuenta entera. Nunca.** |

Meta rastrea la URL de destino, no solo el creativo. Una pieza con copy impecable se rechaza igual si la landing dice "rentabilidad" ocho veces. Pero la solución no es esconder: es que la página diga la verdad más precisa sobre el producto, que resulta ser también la que cumple.

---

## 1. El reposicionamiento

**De:** "indicador de trading que te manda señales"
**A:** "software que convierte tu plan en notificaciones ejecutables"

Los dos describen el mismo producto. El segundo es más preciso —el sistema no aconseja, automatiza— y no cae en ninguna categoría regulada.

| Eje | Antes | Ahora |
|---|---|---|
| Categoría | Señales / trading | Software de decisión · automatización de alertas |
| Beneficio principal | Resultados | Decisiones eliminadas, tiempo recuperado, disciplina sostenida |
| Prueba | Estadísticas de rendimiento | El mecanismo + lo que el producto **no** hace |
| Conversión | Compra | Prueba gratuita de software, sin tarjeta |

---

## 2. Arquitectura de páginas

Separar la página del anuncio de la página de producto. No es cloaking — **todo es público y accesible para cualquiera**, incluido el revisor. Es la arquitectura de embudo normal de cualquier SaaS.

```
/  (o /prueba)     ← LANDING DEL ANUNCIO · aquí vive el píxel
                     Software, mecanismo, trial. Sin cifras de rendimiento.
                     Sin bróker. Sin precios. Un solo CTA.

/metodo            ← Detalle técnico: telemetría, racha de pérdidas, cómo se calcula el riesgo.
                     Enlazada desde el pie, no desde el hero. No es destino de anuncio.

/planes            ← Precios post-trial. NO enlazada desde la landing del anuncio.

(post-registro)    ← Bróker, bono, activación. Nada de esto es rastreable desde el anuncio.
```

**Regla dura:** desde la landing del anuncio no puede salir ningún enlace a bróker, bono, depósito ni checkout. Meta rastrea los enlaces salientes.

---

## 3. Narrativa sección por sección

### 3.1 Hero

**H1:** *Tu plan de trading, convertido en notificaciones.*

**Subtítulo:** *El software detecta las condiciones que tú ya definiste y te envía la decisión completa al celular: qué, dónde, y cuánto arriesgas en dólares. Sin analizar gráficos. Sin calcular lotes a las nueve de la mañana.*

**CTA único:** `Probar 15 días gratis` → *Sin tarjeta. Sin instalar nada.*

**Visual del hero: el teléfono con la notificación, no el gráfico.** El gráfico de velas es el reflejo visual de la categoría y es justo lo que activa la clasificación. Además, la notificación con el riesgo en dólares es el atributo que la propia audiencia eligió como más valioso (61%).

> ⚠️ El hero actual (`components/hero.tsx` + `chart-mockup.tsx`) tiene el gráfico de velas como firma visual. Para la landing del anuncio hay que invertir la jerarquía: teléfono primero, gráfico como textura de fondo desenfocada o fuera.

### 3.2 El problema — en tercera persona

Nunca en segunda persona. La política de Atributos Personales de Meta prohíbe afirmar la situación del visitante, y "¿estás perdiendo dinero?" es causa habitual de rechazo.

**Título:** *El plan no falla en el papel. Falla a las 9:07.*

**Cuerpo:** *Casi todo trader tiene reglas escritas. El problema aparece cuando hay que aplicarlas con el mercado abierto, el pulso acelerado y treinta segundos para decidir. Ahí es donde el plan y la persona se separan.*

Sujeto: "casi todo trader", "la persona", "uno". Nunca "tú".

### 3.3 Qué hace exactamente — el corazón de la página

Las cinco decisiones eliminadas. Es la sección más importante por dos motivos: es lo que de verdad vende, y es intrínsecamente lenguaje de automatización, no de asesoría.

| # | La pregunta que ya no se hace | Lo que entrega el software |
|---|---|---|
| 1 | ¿Entro o espero? | Punto de entrada definido |
| 2 | ¿Dónde pongo el límite? | Nivel de salida definido |
| 3 | ¿Cuánto arriesgo? | La cifra exacta en dólares, calculada sobre el tamaño mínimo |
| 4 | ¿Protejo lo que llevo? | Movimiento a punto de equilibrio, automático |
| 5 | ¿Qué hago ahora? | Ejecutar o dejar pasar. No hay tercera opción |

### 3.4 Cómo se ve

Las tres pantallas en secuencia (patrón ya validado en la landing): llega la notificación → los campos → *"Nivel de equilibrio alcanzado · Riesgo actual $0 · Ya no había nada que decidir."*

### 3.5 🔑 Lo que este software NO hace

**La sección de mayor apalancamiento de toda la página.** Va visible y arriba, no en el pie.

> **Esto no es asesoría financiera.**
> - No ejecuta operaciones. Tú decides si tomas cada una.
> - No administra tu dinero. Nunca tenemos acceso a tu cuenta.
> - No promete resultados. Ningún sistema puede.
> - No es una recomendación de inversión. Es una herramienta que aplica reglas.
> - No garantiza que la próxima operación salga bien. Hubo cinco resultados negativos seguidos y está documentado.

Hace tres cosas a la vez:
1. **Compliance:** es exactamente lo que un revisor humano necesita leer para no clasificarte como asesoría.
2. **Conversión:** ningún competidor lo escribe. Decir primero lo que no haces compra credibilidad para todo lo demás.
3. **Marca:** es el manifiesto de honestidad hecho sección.

### 3.6 El trial

*15 días. Sin tarjeta. Sin compromiso.*
*Funciona sobre TradingView — no necesitas abrir ninguna cuenta nueva para probarlo.*

> ⚠️ **Confirmar antes de publicar:** si el trial exige abrir cuenta de bróker, esa última línea no se puede escribir y toda la arquitectura cambia — pasaría a ser el registro a un producto financiero. Si el trial es solo del software sobre TradingView, es una prueba de SaaS y es la posición más defendible que existe. **Es la pregunta más importante de este brief.**

### 3.7 Pie

Disclaimer de riesgo completo (el actual de `footer.tsx` sirve tal cual), descargo de TradingView, y enlace discreto a `/metodo`.

---

## 4. Léxico de la página

| ❌ No aparece en la landing del anuncio | ✅ Se usa en su lugar |
|---|---|
| señales | notificaciones · alertas |
| invertir · inversión | usar · operar |
| ganancias · rentabilidad · profit | *(no aparece)* |
| rendimiento · win rate · % de acierto | *(mover a `/metodo`)* |
| bróker · depósito · apalancamiento · bono | *(no aparece)* |
| asesoría · asesor · recomendación | software · herramienta · sistema |
| ingresos · dinero extra · libertad financiera | *(prohibido por marca y por plataforma)* |
| "¿estás perdiendo…?" | "casi todo trader…" |

### La decisión incómoda: la telemetría sale de la landing

Win rate 55.9%, PF 1.86 y los +1723 pips son datos de rendimiento. En una página rastreada por Meta, eso es una afirmación financiera y es de los disparadores más fuertes de clasificación.

**Recomendación: mover el bloque numérico a `/metodo`** y dejar en la landing del anuncio el mecanismo y la sección de "lo que no hace".

Tiene un costo real: se pierde el activo de credibilidad principal en la página de conversión. Lo compensan tres cosas: la sección 3.5 genera confianza por una vía distinta (honestidad en lugar de números), el trial gratis es en sí mismo la prueba, y `/metodo` queda a un clic para quien lo busque.

Si aun así se decide dejar la telemetría, hay que asumir que la clasificación como servicios financieros es probable y planificar la campaña con esa restricción, no contra ella.

---

## 5. Píxel y eventos

### Eventos

| Evento | Cuándo dispara | Uso |
|---|---|---|
| `PageView` | Carga de la landing | Base |
| `ViewContent` | Visita a `/metodo` o scroll >70% | Señal de intención |
| `Lead` | Envío del formulario | **Optimizar por aquí al inicio** |
| `StartTrial` | Acceso confirmado en TradingView | Métrica real de negocio |

**No usar `Purchase` para un trial gratuito.** Reportar una compra con valor cuando no hubo transacción distorsiona la optimización y es reporte incorrecto.

### Por qué optimizar por `Lead` y no por `StartTrial`

Meta necesita del orden de ~50 conversiones semanales por conjunto de anuncios para salir de la fase de aprendizaje. **Hoy hay 5 activaciones de trial en total** (`metricas_embudo.md`). Optimizar por `StartTrial` con ese volumen deja el conjunto en aprendizaje permanente y el algoritmo entrega sin señal.

Secuencia: arrancar por `Lead` → cuando el volumen semanal de `StartTrial` se acerque a 50, migrar.

### Datos que nunca se envían al píxel

Ni saldos, ni tamaño de cuenta, ni nada financiero en Advanced Matching o parámetros personalizados. Solo los identificadores estándar hasheados que ya soporta la herramienta.

---

## 6. Fuera de la página

- **Verificar el dominio** en Business Manager antes de escalar el gasto.
- **Declarar la categoría de negocio con precisión.** Si lo que se vende es software, la categoría honesta es software/tecnología. Declarar mal es una violación distinta y peor — esto no es un campo para optimizar.
- **Si el objetivo a mediano plazo es pautar productos financieros de forma sostenida, el camino real es pedir la autorización que corresponda en cada país.** Reposicionar la landing resuelve la clasificación de una página; no sustituye una autorización cuando el negocio sí requiere una.
- **La oferta de $3 → $30 no se pauta en Meta.** Un incentivo monetario atado a la apertura de cuenta es justo el patrón restringido. Va por canales propios: orgánico, WhatsApp, lista, embajadores.

---

## 7. Checklist de publicación

- [ ] Ni una sola cifra de rendimiento en la landing del anuncio
- [ ] Cero enlaces salientes a bróker, bono o checkout
- [ ] El problema está redactado en tercera persona
- [ ] La sección "lo que NO hace" está visible sin hacer scroll largo
- [ ] El hero muestra el teléfono, no el gráfico de velas
- [ ] Un solo CTA en toda la página
- [ ] Disclaimer de riesgo en el pie
- [ ] Dominio verificado y categoría de negocio declarada con precisión
- [ ] Confirmado si el trial requiere o no cuenta de bróker *(bloqueante)*

---

## 8. Nota de coherencia de campaña

Hay dos ofertas corriendo en paralelo y conviene no mezclarlas:

| | Oferta | Canal | Página |
|---|---|---|---|
| A | Trial 15 días gratis | **Meta** | Esta landing |
| B | $3 → $30 operables + 1 mes | Orgánico, WhatsApp, embajadores | Página aparte, sin píxel de Meta |

Los creativos de `creativos_oferta_tripwire.md` están escritos para B. Los guiones marcados como aptos para pauta cierran en A. Revisar que ninguna pieza mande tráfico pagado a la página de B.

---

## Registro

| Fecha | Evento |
|---|---|
| 2026-08-16 | Creación. Brief de reposicionamiento de landing para conversión a trial sin clasificación financiera. |
