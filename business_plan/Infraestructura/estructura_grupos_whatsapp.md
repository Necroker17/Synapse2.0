# Los 3 Grupos de WhatsApp — Estrategia Interna

> **Estado:** propuesta, pendiente de confirmación de `/product`.
>
> **Alcance:** estrategia de contenido y de operación de cada grupo. La automatización (Make / Manychat) la maneja el equipo técnico y queda fuera de este documento.
>
> **Reemplaza** el mapa de 6 espacios de `business_plan/Crecimiento/grupo_gratuito_estrategia.md` §1 y el modelo de 2 grupos de `arquitectura_final_embudo.md` §3.

---

## 0. La base numérica

**[DATO — definido por Juan]**

### Cómo opera el indicador

| Concepto | Pips | En USD a 0.01 lotes |
|---|---|---|
| Sesiones | Nueva York (7:00-11:00) · Asia (18:00-22:00), UTC-5 | — |
| Stop Loss | 160 | **$16** |
| TP1 | 160 | **$16** (1R) |
| TP2 | 320 totales | **$32** (2R) |
| Break-even | Al alcanzar TP1 | Riesgo pasa a $0 |

### Distribución de los cierres ganadores

De las operaciones que ganan: **60% cierran en TP1** ($16) y **40% corren hasta TP2** ($32).

De ahí sale el número más útil para explicar el sistema: **una operación ganadora promedio deja $22,40** (0,6 × $16 + 0,4 × $32). Contra un riesgo de $16, eso es un **1,4R efectivo**, no el 2R teórico del TP2. Es el número honesto y es el que conviene usar en el manual y en los grupos, porque describe lo que realmente pasa.

> ⚠️ **Cuidado al comunicarlo:** este 60/40 es la distribución *entre las ganadoras*, no un porcentaje de aciertos. Dicho como "de 10 operaciones ganamos 6 en TP1 y 4 en TP2" se lee como un 100% de efectividad, que no es lo que significa. La fórmula segura es: *"de cada 10 operaciones ganadoras, 6 cierran en TP1 y 4 llegan a TP2"*. El win rate es otro número y vive en las métricas pendientes de reconciliar (`synapse_messaging_bible.md` §6).

### Capital de entrada

El riesgo por operación es **fijo en $16** porque 0.01 es el lote mínimo: no se puede bajar. Entonces el capital define cuántos intentos soporta la cuenta.

| Capital | Riesgo/operación | % del capital | Operaciones de margen |
|---|---|---|---|
| **$160** | $16 | 10% | **10** — mínimo para operar |
| **$500** | $16 | 3,2% | 31 |
| **$1.000** | $16 | 1,6% | 62 |

**Cómo se comunica:** $160 es el **mínimo para empezar**, no el recomendado. Decirlo así es honesto y además vende mejor — muestra que la barrera de entrada es baja *y* que hay un camino de crecimiento, en vez de dar a entender que $160 es lo óptimo.

---

## 1. Los 3 grupos

| # | Grupo | Quién entra | Pregunta que responde | Trabajo que hace |
|---|---|---|---|---|
| **1** | **Punto de Partida** | Trial recién reclamado | *"¿Por dónde empiezo?"* | Que use bien el trial y se conecte con el ecosistema |
| **2** | **Sala de Testimonios** | Trial vencido sin comprar · no-recompra | *"¿Qué me estoy perdiendo?"* | Demanda acumulada |
| **3** | **Sala de Operación** | Clientes con plan activo | *"¿Qué hago ahora?"* | Entregar señales y sostener disciplina |

**El principio que ordena todo:** cada grupo responde **una sola pregunta**. Si un grupo intenta responder dos, se satura y la gente lo silencia — y un grupo silenciado ya no se reactiva.

```
Reclama trial ──▶ GRUPO 1 (15 días)
                     │
                     ├── compra ──▶ GRUPO 3 (permanente)
                     │
                     └── no compra ──▶ GRUPO 2 (indefinido)
                                          │
                                          └── compra después ──▶ GRUPO 3
```

Nadie sale del ecosistema por no haber comprado: sale del Grupo 1 y cae en el Grupo 2. El Grupo 2 no es un cementerio, es la sala de espera.

---

## 2. Grupo 1 · Punto de Partida

**Pregunta:** *"¿Por dónde empiezo?"*
**Duración:** los 15 días del trial. Cohorte rotativa.
**Objetivo:** que al terminar, la persona esté conectada con el ecosistema y quiera comprar.

**Es el grupo de mayor apalancamiento del negocio.** Cerca del **45% de los registrados no llega a operar la herramienta dentro de la ventana de prueba** [DATO — `synapse_messaging_bible.md` §6], y hoy no existe ninguna pieza de comunicación para ese momento. Es la fuga más grande del embudo, completamente desatendida.

### El problema estructural: la cohorte rota

El trial es continuo, sin fechas de corte. La gente entra cualquier día, así que **un contenido secuenciado "Día 1 → Día 15" publicado en el grupo le llega a destiempo a casi todos.** Quien entra un jueves cae en mitad de una conversación que no entiende.

**La solución: el grupo corre en ciclo semanal, no en secuencia de 15 días.** Cada semana recorre el arco completo del onboarding, así que quien entra cualquier día ve el ciclo entero dentro de sus primeros 7 días, y lo ve **dos veces** a lo largo del trial — la primera para aprender, la segunda para reforzar.

| Día | Bloque del ciclo | Contenido |
|---|---|---|
| Lunes | **Instalación** | Micro-tutorial: cómo dejarlo andando en TradingView |
| Martes | **Lectura de la alerta** | Qué significan SL 160 pips / $16, TP1, TP2, break-even |
| Miércoles | **Primera operación** | Invitación a dar el paso + celebración de quienes ya la hicieron |
| Jueves | **Gestión** | Por qué no se mueve el stop · el riesgo se aceptó al entrar |
| Viernes | **Proceso** | Cómo se lee un resultado, ganado o perdido |
| Fin de semana | **Ecosistema** | Clase en vivo + video del school |

### El hito que define todo

**Una operación completa vivida.** Si en 15 días la persona no vio una operación de principio a fin —entrada, TP1, break-even moviendo el stop, TP2—, no conectó con el producto: vio una demo. Todo el grupo debe estar diseñado alrededor de que ese hito ocurra, y ocurra temprano.

Por eso las señales en tiempo real **sí** deben entrar a este grupo. El **61% de la audiencia (20 de 33) eligió "recibir las alertas con el riesgo exacto en $USD en el celular" como el atributo más valioso del producto** [DATO — `synapse_messaging_bible.md` §4]. Es el diferencial #1. Un trial que no lo demuestra, no demuestra el producto.

### Mejoradores de uso

1. **Ritual de entrada.** Cada persona nueva recibe un saludo con nombre y una sola instrucción: *"empezá por el mensaje fijado"*. En un grupo de cohorte rotativa, sin ritual de entrada la gente se siente intrusa y se queda en silencio los 15 días.

2. **Kit de Bienvenida fijado**, con índice numerado: Manual → checklist → calculadora de riesgo → videos del school. Numerado, no como lista suelta: el usuario necesita saber cuál es el paso 1.

3. **Los videos del school como escalera, no como biblioteca.** Entregar 20 videos el día 1 abruma y nadie ve ninguno. Uno cada dos días, cada uno resolviendo el problema que le toca a esa altura del trial.

4. **Celebrar públicamente cada primera operación.** Convierte un hito privado en evidencia social y le muestra al que todavía no arrancó que alguien como él ya lo hizo. Es el mejor antídoto contra la fricción de activación.

5. **Progreso visible.** "Vas por el día 7 de 15." La ventana es corta; hacerla consciente crea urgencia real sin inventarla.

6. **La oferta llega al final, no al principio.** Días 13-15, después de que ya conectó. Ofertar el día 2 rompe la promesa del grupo —*"te ayudo a usarlo bien"*— y quema la confianza justo cuando se está construyendo.

7. **Contrato del Trader Synapse** (Módulo 8 del Manual) como cierre del onboarding. Funciona como dispositivo de compromiso, no como trámite.

### Reglas internas

- Publica solo el equipo; el grupo queda abierto a preguntas.
- Q&A atendido en las ventanas de sesión (ya en `procesos_manuales.md` §3.1).
- Al vencer el trial: sale del Grupo 1 y del Grupo 3, entra al Grupo 2.

---

## 3. Grupo 2 · Sala de Testimonios

**Pregunta:** *"¿Qué me estoy perdiendo?"*
**Quién entra:** terminó el trial sin comprar, o no renovó.
**Regla dura:** cero señales en tiempo real. Solo resultados ya cerrados.

### La estrategia: demanda acumulada, no urgencia inventada

El objetivo es legítimo, pero hay que separar dos cosas que se parecen:

- ✅ **Demanda acumulada real:** mostrar lo que efectivamente está pasando — otros operando, otros sosteniendo su proceso, otros construyendo. La sensación de quedarse afuera la produce **la evidencia**, no el anuncio.
- ❌ **Urgencia fabricada:** cupos inventados, "últimas horas", contadores falsos. En un grupo compuesto **específicamente por gente que ya dijo que no**, es contraproducente: son la audiencia más escéptica del ecosistema. Un truco detectado acá no solo no convierte, cierra la puerta para siempre.

### El error a evitar: el muro de solo ganancias

Este grupo está formado por gente que probó el indicador, **muy probablemente vivió una pérdida**, y decidió no comprar. Un feed de puros aciertos les confirma exactamente lo que ya piensan: *"a otros les funciona, a mí no"*. Los aleja en vez de acercarlos.

**Tres tipos de contenido, no uno:**

| Tipo | Qué muestra | Frecuencia |
|---|---|---|
| **Testimonio de resultado** | Operación cerrada, con disclaimer y permiso | 1x semana |
| **Testimonio de proceso** | *"Volví a seguir mi plan"* — lo que la investigación encontró como lo más valioso para el usuario, por encima de "gané dinero" | 1x semana |
| **Una pérdida bien gestionada** | Con su riesgo pre-definido: $16, aceptado antes de entrar | 1x mes |

La pérdida bien gestionada es contraintuitiva pero es el activo de confianza más fuerte de la marca, y ningún competidor lo hace. Acá específicamente responde la objeción silenciosa que todos tienen: *"a mí me tocó perder"*.

### Ritmo semanal

| Día | Pieza |
|---|---|
| Lunes | Resultado de la semana anterior, ya cerrado |
| Martes | Pieza educativa — serie autosabotaje (`synapse_serie_autosabotaje_prompts.md`) |
| Miércoles | Testimonio (rotando resultado / proceso) |
| Viernes | Anuncio de clase en vivo, **abierta a este grupo** |
| 1x mes | "Así se ve una pérdida bien gestionada" |
| **Días 1-3 y 13-17** | Ventana de reactivación: oferta explícita |

Fuera de las ventanas de quincena: máximo 1 mención suave de oferta por semana. Ofertar todos los días satura y contradice el registro de la marca.

### Mejoradores de conversión

1. **Las ventanas de quincena son el motor.** Días 1-3 y 13-17, sincronizadas con la liquidez del cliente (`arquitectura_final_embudo.md`, decisión 4). Es la única audiencia donde la oferta directa y sostenida tiene sentido: ya conocen el producto, la barrera es decisión, no información.

2. **Acceso a la clase en vivo.** Que sigan viendo el valor en directo, no solo en capturas. Es el recordatorio más honesto de lo que se están perdiendo.

3. **Mostrar la escalera de capital.** Mucha gente no compró por capital, no por producto. Ver que $160 es el mínimo y que hay camino hacia $500 y $1.000 convierte un "no puedo" en "todavía no". Es una objeción que se disuelve con información, no con presión.

### Reglas internas

Solo publica el equipo. Es un grupo de observación, no de conversación — y esa es su fuerza: nadie tiene que exponerse para estar ahí.

---

## 4. Grupo 3 · Sala de Operación

**Pregunta:** *"¿Qué hago ahora?"*
**Estado emocional:** pagó, y quiere que le demuestren que valió la pena.
**Riesgo principal:** que el silencio de los días sin señal se lea como abandono.

### Ritmo

| Momento | Pieza |
|---|---|
| Sesión NY y Asia | **Señal**: entrada, SL 160 pips ($16), TP1, TP2, break-even |
| Al cerrar | **Resultado**, ganada o perdida, como *respuesta* a la señal |
| Día sin señal | **"Hoy no hubo alerta"**, explícito |
| Lunes | **Recap semanal** con números reales ⚠️ |
| Miércoles | **Recordatorio de disciplina** — un error del Módulo 5, rotando |
| Fin de semana | **Clase en vivo** |
| Jueves | **Encuesta de proceso** (§5) |

⚠️ El recap de los lunes queda bloqueado hasta reconciliar las métricas (`synapse_messaging_bible.md` §6).

**El "hoy no hubo alerta" no es relleno.** Sin él, el silencio parece abandono y el cliente que pagó empieza a dudar del producto. Con él, ataca directamente la sobre-operativa (27,3% de la encuesta): *si no hay alerta, no hay operación, y eso también es el sistema funcionando*.

### Dos reglas para que la señal no se pierda

En WhatsApp, un grupo con señales **y** conversación libre entierra las alertas entre mensajes. Es el fallo más común en grupos de señales, y en un grupo de clientes que pagan es causa directa de cancelación.

1. **Cada señal se fija (pin)** al publicarse.
2. **El resultado se publica como respuesta al mensaje original de la señal**, nunca suelto. El hilo entrada → resultado queda trazable aunque haya ruido.

La alternativa —solo administradores— protege la señal pero mata la comunidad, que es parte de lo que se vendió. Pin + reply da casi todo el beneficio sin ese costo.

### Mensaje fijado permanente

El **Checklist Antes de Operar** (Módulo 7 del Manual): lo que el usuario necesita a un toque de distancia en el momento exacto de ejecutar.

### Mejoradores de retención

1. **La retención se gana con proceso, no con más señales.** Un cliente que sigue su plan y pierde renueva; uno que gana rompiendo el plan, no. La encuesta de los jueves es el instrumento central de esto.

2. **Enseñar a leer el 1,4R.** El cliente que espera 2R en cada operación se frustra cuando el 60% cierra en TP1. Explicar la distribución real desde el principio previene la sensación de "el indicador no rinde lo que prometió" — que es la causa #1 de cancelación temprana.

3. **Escalera STANDARD → PRO → PREMIUM.** Los planes son acumulativos; el grupo es donde se hace visible qué hay en el nivel de arriba, sin empujar.

4. **El cliente satisfecho como canal de adquisición.** Mencionar el programa de embajadores acá convierte retención en captación.

---

## 5. La encuesta semanal

Una por grupo, cada una con un trabajo distinto. **No es relleno de engagement: es un instrumento de medición** que devuelve un dato que hoy no existe.

| Grupo | Día | Pregunta | Opciones | Para qué sirve |
|---|---|---|---|---|
| **1 · Punto de Partida** | Martes | *"¿Ya hiciste tu primera operación con Synapse?"* | ✅ Sí · ⏳ Todavía no · ❓ Tengo una duda técnica | **El más valioso de los tres.** Identifica quién está dentro del 45% que no se activa, **mientras todavía queda trial por delante**. Cada ⏳ y cada ❓ es un contacto 1 a 1 ese mismo día |
| **2 · Testimonios** | Jueves | *"¿Qué es lo que más te frena hoy?"* | Objeciones rotativas | Cierra una brecha declarada: nunca se validaron las objeciones con usuarios reales. Alimenta el copy de las ventanas de quincena |
| **3 · Sala de Operación** | Jueves | *"En tus últimas 5 operaciones, ¿respetaste tu plan?"* | 🟢 Las 5 · 🟡 Algunas · 🔴 Ninguna | Mide **proceso, no resultado**. Quien responde 🔴 dos semanas seguidas es señal temprana de cancelación |

---

## 6. Próximos pasos

1. **Montar el Grupo 1** con el Kit de Bienvenida fijado y el ciclo semanal de §2. Es el que ataca la fuga más grande.
2. **Producir en lote el ciclo semanal evergreen** del Grupo 1 — se hace una vez y sirve para todas las cohortes.
3. **Corregir el Módulo 3 del Manual**: incorporar la tabla de capital ($160 / $500 / $1.000) y quitar la línea *"Ganancia estimada: 80 USD mensuales"*, que es una proyección de rentabilidad y choca con el compromiso de no prometerlas.
4. **Definir el redactado del 60/40** para que en ningún material se lea como un 100% de efectividad (§0).
5. Reconciliar las métricas pendientes para desbloquear el recap de los lunes.
