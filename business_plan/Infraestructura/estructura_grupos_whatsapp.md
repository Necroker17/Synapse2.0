# Estructura de los 3 Grupos de WhatsApp — Contenido, Frecuencia y Experiencia de Usuario

> **Estado:** propuesta detallada, pendiente de confirmación de `/product`.
>
> **Reemplaza** el mapa de 6 espacios de `business_plan/Crecimiento/grupo_gratuito_estrategia.md` §1 y el modelo de 2 grupos de `arquitectura_final_embudo.md` §3 (decisión 3). Se apoya en `procesos_manuales.md` §3 (protocolo de soporte de Meli), `flujos_automatizacion.md` (tags y secuencias que ya existen) y en la propuesta de *Manual de Bienvenida* (documento externo, v1.0).

---

## 0. Resumen de la estructura

| # | Grupo | Quién entra | Trabajo que hace | Señales en tiempo real |
|---|---|---|---|---|
| 1 | **Sala de Operación** | Acceso activo (pago + trial vigente) | Entregar señales y sostener disciplina | ✅ Sí — es el único |
| 2 | **Comunidad Synapse** | Abierto: fríos, trial, vencidos, clientes | Prueba social y educación permanente | ❌ Nunca |
| 3 | **Punto de Partida** | Trial recién reclamado (rota cada 15 días) | Activar al usuario que nunca opera | ❌ No |

**El principio que ordena todo:** cada grupo responde a **una sola pregunta** que el usuario se está haciendo en ese momento de su recorrido. Si un grupo intenta responder dos preguntas a la vez, se satura y la gente lo silencia.

- Grupo 3 responde: *"¿Por dónde empiezo?"*
- Grupo 1 responde: *"¿Qué hago ahora?"*
- Grupo 2 responde: *"¿Esto realmente funciona para gente como yo?"*

---

## 1. Dos decisiones que hay que tomar antes de montar esto

### Decisión A — ¿El usuario en trial entra a la Sala de Operación? **(la más importante)**

El planteamiento inicial dice "grupo 1 para las personas que ya pagaron". Tomado literal, el usuario en trial **nunca recibiría una alerta por WhatsApp** durante sus 15 días. Eso choca de frente con el dato más fuerte que tenemos: **el 61% de la audiencia (20 de 33) eligió "recibir las alertas con el riesgo exacto en $USD en el celular" como el atributo más valioso del producto** [DATO — `synapse_messaging_bible.md` §4]. Es el diferencial #1 y ningún competidor mapeado lo ofrece completo.

Si el trial no demuestra el diferencial #1, el trial no demuestra el producto.

**Recomendación:** el Grupo 1 es de **acceso activo**, no de "ya pagó" — entran los clientes y también el trial vigente. Es exactamente lo que ya decidió `arquitectura_final_embudo.md` §3 y lo que el sistema ya soporta (Manychat entrega el link a quien tenga tag `trial_activo` **o** `cliente_activo`). La salida al vencer el trial ya está contemplada en el barrido manual semanal de `procesos_manuales.md` §1.2.

**Si se prefiere que el Grupo 1 sea estrictamente de pagos**, entonces hay que decidir cómo recibe alertas el trial: 1 a 1 vía Manychat (más costo operativo) o solo viendo el indicador en su propio TradingView (trial más débil, conversión previsiblemente peor). No recomiendo esta vía, pero es viable si la prioridad es blindar la señal.

### Decisión B — ¿Dónde conversa la gente?

Tres grupos, y ninguno está designado como espacio de conversación abierta. En WhatsApp, un grupo con señales **y** charla libre hace que las señales se pierdan entre mensajes: el usuario abre el grupo, ve 40 mensajes sin leer, y no encuentra la alerta. Es el fallo de experiencia más común en grupos de señales.

**Recomendación:** Grupo 1 abierto a conversación, pero con dos reglas mecánicas:
1. **Cada señal se fija (pin)** al publicarse.
2. **El resultado se publica como respuesta (reply) al mensaje original de la señal**, nunca suelto. Así el hilo entrada → resultado queda trazable aunque haya ruido en el medio.

La alternativa —grupo de solo-administradores— protege perfecto la señal pero mata la comunidad, que es justamente parte de lo que se está vendiendo. La regla del pin + reply da el 80% del beneficio sin ese costo.

---

## 2. Grupo 1 · Sala de Operación

**Pregunta que responde:** *"¿Qué hago ahora?"*
**Estado emocional del que entra:** pagó (o está probando) y quiere que le demuestren que valió la pena.
**Riesgo principal:** que el silencio de los días sin señal se lea como abandono.

### Contenido y frecuencia

| Momento | Pieza | Frecuencia | Por qué |
|---|---|---|---|
| Sesión NY (7:00-11:00) y Asia (18:00-22:00) | **Señal en tiempo real** con entrada, stop, riesgo en USD y break-even | Cuando exista — nunca forzada | El core del producto. Horarios ya fijados en `procesos_manuales.md` §3.1 |
| Al cerrar cada operación | **Resultado**, ganada o perdida, como reply a la señal | Por operación | El compromiso #1 de la marca es no ocultar perdedoras |
| Día sin señal | **"Hoy no hubo alerta"** explícito | Cada día que aplique | Sin esto el silencio parece abandono. Además ataca la sobre-operativa (27.3% de la encuesta): *"si no hay alerta, no hay operación, y eso también es el sistema funcionando"* |
| Lunes | **Recap de la semana** con números reales | 1x semana | ⚠️ Bloqueado hasta reconciliar métricas (`synapse_messaging_bible.md` §6) |
| Miércoles | **Recordatorio de disciplina** — un error del Módulo 5 del Manual, rotando | 1x semana | Convierte el manual en hábito, no en PDF olvidado |
| Fin de semana | **Clase en vivo** | 1x semana | Ya comprometido en la estructura de comunidad |
| Jueves | **Encuesta semanal** (ver §5) | 1x semana | |

**Total: ~4 publicaciones propias por semana + las señales.** Suficiente para que el grupo se sienta vivo sin saturar a quien solo quiere la alerta.

### Mensaje fijado permanente

El **Checklist Antes de Operar** (Módulo 7 del Manual). Es lo que el usuario necesita tener a un toque de distancia en el momento exacto de ejecutar.

---

## 3. Grupo 2 · Comunidad Synapse (testimonios y experiencias)

**Pregunta que responde:** *"¿Esto realmente funciona para gente como yo?"*
**Quién entra:** abierto — prospectos fríos, trial activo, trial vencido sin convertir, y clientes que quieran quedarse.
**Regla dura:** cero señales en tiempo real, siempre. Solo resultados ya cerrados.

### El problema con "grupo de experiencias positivas"

Planteado como espacio de **solo** experiencias positivas, este grupo trabaja en contra del objetivo declarado del propio Manual. El Manual arranca diciendo que *"una parte importante de los usuarios obtiene resultados diferentes utilizando exactamente las mismas señales"* y que eso *"crea la percepción errónea de que el indicador no funciona"*.

Un muro de solo ganancias **produce** esa percepción: el usuario nuevo ve puros wins, tiene su primera pérdida —que era estadísticamente esperable— y concluye que el indicador está roto o que él es el problema. Es la primera causa de abandono temprano.

**Recomendación:** el grupo es de **experiencias reales**, con tres tipos de contenido, no uno:
1. **Testimonios de resultado** (con permiso explícito y disclaimer de riesgo).
2. **Testimonios de proceso** — *"volví a seguir mi plan"*. La investigación encontró que lo más valioso para el usuario no fue "gané dinero" sino recuperar el proceso [DATO — investigación de mercado].
3. **Una pérdida bien gestionada por mes**, mostrada con su riesgo pre-definido. Ningún competidor hace esto: es el activo de confianza más diferenciado que tiene la marca, y calibra expectativas antes de que la pérdida ocurra.

### Contenido y frecuencia

| Día | Pieza | Nota |
|---|---|---|
| Lunes | Resultado de la semana anterior (ya cerrado) | Ataca la objeción #1: verificabilidad |
| Martes | Pieza educativa — serie autosabotaje (`synapse_serie_autosabotaje_prompts.md`) | Rotar tema, no repetir dos semanas seguidas |
| Miércoles | Testimonio real (rotar entre resultado y proceso) | Verificar permiso antes de publicar |
| Viernes | Anuncio de la clase en vivo | |
| 1x al mes | **"Así se ve una pérdida bien gestionada"** | El activo diferenciador |
| Días 1-3 y 13-17 | Oferta explícita (ventanas de quincena) | Fuera de esas ventanas: máximo 1 mención suave por semana |

**Total: 4-5 publicaciones por semana.**

### Mensaje fijado permanente

Prueba social + cómo activar el trial de 15 días. Siempre visible para quien entra nuevo, sin depender de que alguien lo repita.

---

## 4. Grupo 3 · Punto de Partida (trial recién reclamado)

**Pregunta que responde:** *"¿Por dónde empiezo?"*

**Este es el grupo de mayor apalancamiento de los tres.** Cerca del **45% de los registrados no llegó a operar la herramienta dentro de la ventana de prueba** [DATO — `synapse_messaging_bible.md` §6], y hoy **no existe ninguna pieza de comunicación para ese momento del recorrido**. Es territorio virgen: el punto donde se pierde casi la mitad del embudo, sin nada construido para atenderlo.

### El detalle de diseño que hay que resolver: la cohorte rota

El trial es continuo, sin fechas de corte (`arquitectura_final_embudo.md`, decisión 1). Entonces la gente entra cualquier día, y un contenido secuenciado tipo "Día 1 → Día 15" publicado en el grupo le llega a destiempo a casi todo el mundo.

**La solución ya está construida:** la secuencia personalizada por hitos (Días 1, 3, 7, 10, 13, 15) ya vive en Manychat como mensajes 1 a 1 (`flujos_automatizacion.md`). Entonces:

- **La secuencia personalizada** → Manychat, 1 a 1, como ya funciona.
- **El grupo** → solo contenido *evergreen*, que sirve igual entre a quien entró ayer y a quien entró hace diez días.

Sin esta separación el grupo se vuelve confuso y la gente lo silencia en 48 horas.

### Contenido y frecuencia

| Pieza | Frecuencia | Nota |
|---|---|---|
| **Kit de Bienvenida fijado** — Manual + checklist + calculadora de riesgo | Permanente | El Material Complementario del Manual vive acá |
| **Micro-tutorial evergreen** (instalación, dónde ver la alerta, qué temporalidad) | 3x semana | Responde literalmente las dudas que la encuesta recogió: *"dificultades técnicas"*, *"ni lo he usado"* |
| **"Tu primera operación"** — invitación a avisar cuando la hagan | 2x semana | Convierte un hito privado en un momento social. Es el evento que define si el trial convierte o no |
| **Q&A abierto** — Meli responde dudas técnicas | Diario, en las ventanas de sesión | Ya está en el protocolo de `procesos_manuales.md` §3.1 |
| **Encuesta de activación** (ver §5) | 1x semana | El instrumento de detección más importante de los tres grupos |
| **Contrato del Trader Synapse** (Módulo 8 del Manual) | Al cerrar el onboarding | Compromiso simbólico: funciona como dispositivo de compromiso, no como trámite |

**Total: ~6 toques por semana.** Más intenso que los otros dos a propósito: la ventana son 15 días y el costo de no activarse es perder al usuario entero.

### Salida del grupo

Al vencer el trial, el usuario sale del Grupo 3 y del Grupo 1, y **permanece en el Grupo 2**. Así nadie queda fuera del ecosistema por no haber comprado todavía: sigue viendo prueba social y educación, que es exactamente lo que puede convertirlo más adelante. Se agrega al mismo barrido semanal que ya existe, sin proceso nuevo.

---

## 5. La encuesta semanal — una por grupo, cada una con un trabajo distinto

La clave: **la encuesta no es relleno de engagement, es un instrumento de medición.** Cada una devuelve un dato que hoy no tenemos y que dispara una acción concreta.

| Grupo | Día | Pregunta | Opciones | Qué se hace con la respuesta |
|---|---|---|---|---|
| **1 · Sala de Operación** | Jueves | *"En tus últimas 5 operaciones, ¿respetaste tu plan?"* | 🟢 Las 5 · 🟡 Algunas · 🔴 Ninguna | Mide **proceso, no resultado** — coherente con la filosofía de la marca. Quien responde 🔴 dos semanas seguidas recibe contacto 1 a 1 antes de que abandone |
| **2 · Comunidad** | Jueves | *"¿Qué es lo que más te frena hoy?"* | Opciones rotativas de objeciones reales | Cierra una brecha abierta declarada: **nunca se validaron las objeciones con usuarios reales** (`synapse_messaging_bible.md` §16). Las respuestas más repetidas se responden públicamente la semana siguiente |
| **3 · Punto de Partida** | Martes | *"¿Ya hiciste tu primera operación con Synapse?"* | ✅ Sí · ⏳ Todavía no · ❓ Tengo una duda técnica | **El instrumento más valioso del sistema.** Identifica por nombre y apellido quién está dentro del 45% que no se activa, mientras todavía hay tiempo de rescatarlo. Cada ⏳ y cada ❓ dispara contacto 1 a 1 de Meli ese mismo día |

La encuesta del Grupo 3 convierte un problema que hoy se detecta tarde —o no se detecta— en una lista accionable cada semana. Ese solo cambio justifica la existencia del grupo.

---

## 6. Cómo el Manual alimenta los 3 grupos

El Manual no es un PDF que se entrega y se archiva: **es el calendario de contenido de los tres grupos.** Cada módulo tiene un lugar de residencia y una frecuencia de reaparición.

| Módulo del Manual | Dónde vive | Cómo reaparece |
|---|---|---|
| 1. Bienvenida · 2. Qué es y qué NO es | Grupo 3, fijado | Base del Kit de Bienvenida |
| 3. Gestión del Riesgo | Grupo 3 (aprendizaje) + Grupo 1 (refuerzo) | Recordatorio de disciplina de los miércoles |
| 4. Interpretación de Estadísticas | Grupo 2 | Acompaña cada recap de resultados — enseña a leerlos sin falsas expectativas |
| 5. Los 7 Errores Frecuentes | Grupos 1 y 2 | **Ya está construido:** la serie de 6 piezas de `synapse_serie_autosabotaje_prompts.md` cubre justamente estos errores |
| 6. Casos Prácticos (Trader A / Trader B) | Grupo 1 | Formato natural para el contenido del miércoles |
| 7. Checklist Antes de Operar | Grupo 1, fijado | Consulta permanente en el momento de ejecutar |
| 8. Contrato del Trader | Grupo 3 | Cierre del onboarding |

---

## 7. Dos cosas del Manual que hay que corregir antes de publicarlo

Ambas están en el **Módulo 3 (Gestión del Riesgo)** y van a ser leídas por cada usuario nuevo, así que conviene resolverlas antes de que el documento circule.

### 7.1 El riesgo por operación no cuadra con la cifra oficial de la marca

El Módulo 3 plantea: *cuenta de 320 USD, operar 0.01, riesgo aproximado 16 USD por operación.*

Pero la estructura de alerta oficial de Synapse documenta **riesgo de $3.50 por 0.01 lotes** en XAUUSD, y esa cifra es consistente (0.01 lote = 1 onza; un stop de 3.50 puntos de precio = $3.50 de riesgo). Para arriesgar $16 con 0.01 lotes haría falta un stop de 1600 puntos, muy lejos de lo que opera el indicador en M15.

Los $16 parecen venir de calcular el 5% de una cuenta de $320 — pero **5% por operación es un riesgo agresivo**, que contradice el mensaje de gestión conservadora del propio manual. Hay que decidir cuál de las dos cifras es la real y alinear todo el módulo, porque hoy se contradicen entre sí.

### 7.2 "Ganancia estimada: 80 USD mensuales" no puede ir en el manual

Son **$80 sobre una cuenta de $320 = 25% mensual**, impreso en el documento oficial de bienvenida que recibe todo usuario nuevo.

Esto viola directamente el compromiso #4 de la marca (*nunca prometer rentabilidades garantizadas*) y expone al negocio: es una proyección de rendimiento entregada por escrito a un cliente que paga. Además contradice el objetivo declarado del propio manual, que es *"evitar falsas expectativas"* (Módulo 4).

**Alternativa:** reemplazar la proyección de ganancia por el dato que sí es verificable y sí es útil — **cuánto arriesga por operación y cuántas operaciones soporta su cuenta**. Eso es gestión de riesgo real. La ganancia no se proyecta: se reporta después, con números reales.

---

## 8. Próximos pasos

1. **Resolver la Decisión A** (§1): ¿el trial entra a la Sala de Operación? Define si el trial demuestra o no el diferencial #1 del producto.
2. **Corregir el Módulo 3 del Manual** (§7) antes de que el documento circule.
3. **Montar el Grupo 3 primero.** De los tres es el único que ataca una fuga ya medida (~45%) con cero infraestructura nueva. Los otros dos ya existen en alguna forma; este no existe y es el que más pesa.
4. Activar las tres encuestas semanales desde la primera semana — son el mecanismo de menor esfuerzo y mayor retorno de todo el planteamiento.
5. Reconciliar las métricas pendientes (`synapse_messaging_bible.md` §6) para poder publicar el recap de los lunes en los Grupos 1 y 2.
