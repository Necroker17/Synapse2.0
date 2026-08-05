# Los 3 Grupos de WhatsApp — Estructura, Mejoradores de Conversión y Administración Automatizable

> **Estado:** propuesta detallada, pendiente de confirmación de `/product`.
>
> **Reemplaza** el mapa de 6 espacios de `business_plan/Crecimiento/grupo_gratuito_estrategia.md` §1 y el modelo de 2 grupos de `arquitectura_final_embudo.md` §3. Se apoya en `procesos_manuales.md` §3 (protocolo de soporte de Meli), `flujos_automatizacion.md` (tags y escenarios que ya existen) y en la propuesta de *Manual de Bienvenida* (documento externo, v1.0).

---

## 0. Marco operativo del indicador (base de todo lo demás)

**[DATO — definido por Juan, sesión de trabajo]**

| Concepto | Valor | En USD a 0.01 lotes |
|---|---|---|
| Sesiones | Nueva York (7:00-11:00) y Asia (18:00-22:00), UTC-5 | — |
| Stop Loss | 160 pips | **$16** |
| TP1 | 160 pips | **$16** (1R) |
| TP2 | 320 pips totales | **$32** (2R) |
| Break-even automático | Al alcanzar TP1 | Riesgo pasa a $0 |

La operación busca **2 veces lo que arriesga**. A 0.01 lotes —el lote mínimo— el riesgo es fijo en $16: no se puede bajar más. Quien tenga más capital escala el lotaje; quien tenga menos, no tiene margen de ajuste hacia abajo.

### Esto corrige un señalamiento mío anterior

En la versión previa marqué los "$16 por operación" del Módulo 3 del Manual como un error, comparándolos contra los $3.50 de un ejemplo de alerta de la documentación de marca. **La cifra del Manual es la correcta**: 160 pips a 0.01 lotes son exactamente $16. El ejemplo de $3.50 corresponde a un stop de 35 pips y no representa la operativa real del indicador — ese ejemplo es el que está desactualizado, y conviene corregirlo donde aparezca para que no siga generando confusión.

### Lo que sí conviene cambiar en el Módulo 3: invertir la tabla

El riesgo en dólares es **fijo** ($16) porque 0.01 es el mínimo. Entonces la variable no es cuánto arriesgar, es **cuánto capital hace falta** para que esos $16 representen un riesgo sano:

| Capital | Riesgo por operación | % del capital | Lectura |
|---|---|---|---|
| $320 | $16 | **5%** | Agresivo — 6 pérdidas seguidas cuestan el 30% de la cuenta |
| $800 | $16 | **2%** | Límite superior de lo razonable |
| $1.600 | $16 | **1%** | Conservador, es el estándar de gestión profesional |

Presentarlo así ("para operar al 2% necesitas $800") es más honesto y más útil que "con $320 arriesga $16", y le da al usuario un objetivo de capitalización claro en vez de empujarlo a operar sub-capitalizado. **Sigue en pie el otro señalamiento del Módulo 3:** la línea *"Ganancia estimada: 80 USD mensuales"* es una proyección de rentabilidad impresa en el documento oficial de bienvenida y choca con el compromiso de no prometer rentabilidades. La ganancia no se proyecta, se reporta después con números reales.

**Propagación pendiente:** este marco (160 pips / $16 / 2R) debería bajar también a `indicador_synapse.md`, `synapse_messaging_bible.md` y a la skill `synapse-escenarios`, donde hoy vive el ejemplo de $3.50.

---

## 1. Los 3 grupos

| # | Grupo | Quién entra | Pregunta que responde | Trabajo que hace |
|---|---|---|---|---|
| **1** | **Punto de Partida** | Trial recién reclamado | *"¿Por dónde empiezo?"* | Que use bien el trial y se conecte con el ecosistema |
| **2** | **Sala de Testimonios** | Trial vencido sin comprar · no-recompra | *"¿Qué me estoy perdiendo?"* | Demanda acumulada — que vea a otros construyendo |
| **3** | **Sala de Operación** | Clientes con plan activo | *"¿Qué hago ahora?"* | Entregar señales y sostener disciplina |

**El principio que ordena todo:** cada grupo responde **una sola pregunta**. Si un grupo intenta responder dos, se satura y la gente lo silencia — y un grupo silenciado es un grupo muerto que además ya no se puede reactivar.

**El flujo entre grupos:**

```
Reclama trial ──▶ GRUPO 1 (15 días)
                     │
                     ├── compra ──▶ GRUPO 3 (permanente)
                     │
                     └── no compra ──▶ GRUPO 2 (indefinido, se reactiva por quincenas)
                                          │
                                          └── compra después ──▶ GRUPO 3
```

Nadie sale del ecosistema por no haber comprado: sale del Grupo 1 y cae en el Grupo 2, donde sigue viendo prueba social. El Grupo 2 no es un cementerio, es la sala de espera.

---

## 2. Qué se puede automatizar de verdad en WhatsApp (leer antes de diseñar nada)

Este es el punto que define toda la estrategia de administración, y conviene tenerlo claro antes de construir:

**La API oficial de WhatsApp sí soporta mensajes a grupos desde 2026, pero con un tope de 8 miembros por grupo** ([Meta for Developers · Groups API](https://developers.facebook.com/documentation/business-messaging/whatsapp/groups)). Ese límite la deja fuera para grupos de comunidad de decenas o cientos de personas. En la práctica: **no se puede automatizar la publicación en un grupo grande de WhatsApp por vía oficial.**

Las opciones reales, con su costo:

| Vía | Publica en grupos grandes | Automatizable | Riesgo |
|---|---|---|---|
| **API oficial (Cloud API / Manychat / Make)** | ❌ Máx. 8 miembros | ✅ Total | Ninguno |
| **Canales de WhatsApp** | ✅ Sin límite de seguidores | ❌ Publicación manual | Ninguno |
| **Librerías no oficiales** (Baileys, whatsapp-web.js) | ✅ | ✅ | ⚠️ Viola términos de servicio. Riesgo real de baneo del número principal del negocio |

### La conclusión arquitectónica

**La automatización no vive en el grupo. Vive en el 1 a 1.**

- **Lo automatizable** (Make + Manychat, y en gran parte **ya está construido**): detectar quién entró, quién no se activó, quién vence, quién compró; enviar la secuencia por hitos; entregar el link del grupo; disparar el aviso a Meli para que intervenga.
- **Lo manual** (pero reducido a una checklist corta y con contenido pre-producido en lote): publicar en el grupo.

Esto no es una limitación que haya que superar: es la división correcta. El grupo aporta **pertenencia y prueba social** —cosas que solo funcionan si se sienten humanas—, y el 1 a 1 aporta **la intervención personalizada en el momento exacto**, que es donde la automatización rinde.

### Recomendación concreta: el Grupo 2 debería ser un Canal, no un grupo

El Grupo 2 es unidireccional por naturaleza —la gente mira lo que otros logran, no conversa—. Convertirlo en **Canal de WhatsApp** trae tres ventajas y ninguna pérdida:

1. Escala sin límite de miembros.
2. Cero solicitudes falsas de ingreso y cero moderación.
3. El usuario no siente que "lo metieron a un grupo de ventas": sigue un canal, y lo puede dejar de seguir sin el costo social de salirse de un grupo. Menos fricción para entrar, más permanencia.

---

## 3. Grupo 1 · Punto de Partida (trial recién reclamado)

**Pregunta:** *"¿Por dónde empiezo?"*
**Duración:** los 15 días del trial. Cohorte rotativa.
**Objetivo declarado:** que al terminar el trial la persona esté conectada con el ecosistema y quiera comprar.

**Es el grupo de mayor apalancamiento del negocio.** Cerca del **45% de los registrados no llega a operar la herramienta dentro de la ventana de prueba** [DATO — `synapse_messaging_bible.md` §6], y hoy no existe ninguna pieza de comunicación para ese momento. Es la fuga más grande del embudo y está completamente desatendida.

### El detalle de diseño crítico: la cohorte rota

El trial es continuo, sin fechas de corte (`arquitectura_final_embudo.md`, decisión 1). La gente entra cualquier día, así que un contenido secuenciado "Día 1 → Día 15" publicado *en el grupo* le llega a destiempo a casi todos.

**La separación correcta —y la infraestructura ya existe:**

- **Secuencia personalizada por hitos** (Días 1, 3, 7, 10, 13, 15) → **Manychat, 1 a 1**. Ya está construida en `flujos_automatizacion.md`. Es 100% automatizable.
- **El grupo** → solo contenido *evergreen*, que sirve igual a quien entró ayer y a quien entró hace diez días.

Sin esta separación el grupo se vuelve confuso y la gente lo silencia en 48 horas.

### Estructura del grupo

| Elemento | Contenido | Frecuencia | Auto / Manual |
|---|---|---|---|
| **Mensaje fijado** | Kit de Bienvenida: Manual + checklist + calculadora de riesgo + índice de videos del school | Permanente | Manual (una vez) |
| **Videos del school** | Uno por bloque temático, incrustados de forma progresiva | 2x semana | Manual · contenido pre-producido |
| **Micro-tutorial evergreen** | Instalación, dónde ver la alerta, qué temporalidad, cómo leer el SL/TP | 3x semana | Manual · **se produce una vez y se recicla en cada cohorte** |
| **Señales en tiempo real** | Las dos sesiones | Cuando existan | Manual |
| **"Tu primera operación"** | Invitación a avisar cuando la hagan | 2x semana | Manual |
| **Q&A abierto** | Meli responde dudas técnicas en las ventanas de sesión | Diario | Manual — ya en `procesos_manuales.md` §3.1 |
| **Encuesta de activación** | Ver §6 | 1x semana | Manual publicar · **auto la acción** |
| **Contrato del Trader** | Módulo 8 del Manual | Cierre del onboarding | Manual |

**Punto clave sobre las señales:** recomiendo que el trial **sí** reciba alertas en tiempo real. El **61% de la audiencia (20 de 33) eligió "recibir las alertas con el riesgo exacto en $USD en el celular" como el atributo más valioso del producto** [DATO — `synapse_messaging_bible.md` §4]. Es el diferencial #1 y ningún competidor lo ofrece completo. Un trial que no lo demuestra, no demuestra el producto. Publicar la misma señal en dos grupos es un copy-paste adicional, costo operativo despreciable.

### Mejoradores de conversión

1. **El hito que define todo: una operación completa vivida.** Si en 15 días la persona no vio al menos una operación de principio a fin —entrada, TP1, break-even automático moviendo el stop, TP2—, no conectó con el producto, vio una demo. Todo el grupo debería estar diseñado alrededor de que ese hito ocurra. Es el "momento de sí" real.

2. **Celebrar públicamente cada primera operación.** Convierte un hito privado en evidencia social, y le muestra al que todavía no arrancó que gente como él ya lo hizo. Es el mejor antídoto contra la fricción de activación.

3. **Progreso visible de cohorte.** "Vas por el día 7 de 15" — la ventana es corta y hacerla consciente crea urgencia real, sin inventarla.

4. **La oferta llega al final, no al principio.** Días 13-15, después de que ya conectó. Ofertar el día 2 rompe la promesa del grupo ("te ayudo a usarlo bien") y quema la confianza justo cuando se está construyendo.

5. **Los videos del school como escalera, no como biblioteca.** Entregar 20 videos el día 1 abruma y nadie ve ninguno. Uno cada dos días, cada uno resolviendo el problema que le toca a esa altura del trial.

### Administración

- **Entrada:** automática. Manychat entrega el link 1 a 1 al detectar tag `trial_activo`. Ya construido.
- **Durante:** publicación manual desde una checklist corta (ver §7), con contenido pre-producido en lote.
- **Salida:** al vencer el trial, sale del Grupo 1 y del Grupo 3, y entra al Grupo 2. La detección es automática (Make Escenario 3 ya escanea vencimientos a diario); la remoción del grupo es manual, en el barrido semanal que ya existe para revocar TradingView.

---

## 4. Grupo 2 · Sala de Testimonios (trial vencido · no-recompra)

**Pregunta:** *"¿Qué me estoy perdiendo?"*
**Quién entra:** quien terminó el trial sin comprar, y quien no renovó.
**Regla dura:** cero señales en tiempo real, siempre. Solo resultados ya cerrados.

### Sobre el FOMO: cuál funciona y cuál rompe la marca

El objetivo es demanda acumulada, y eso es legítimo. Pero hay que separar dos cosas que se parecen y no son iguales:

- ✅ **FOMO real:** mostrar lo que efectivamente está pasando. Otros operando, otros sosteniendo su proceso, otros construyendo. La sensación de quedarse afuera la produce **la evidencia**, no el anuncio.
- ❌ **Urgencia fabricada:** cupos inventados, "últimas horas", contadores falsos. Está prohibido por los compromisos de marca y, en un grupo compuesto **específicamente por gente que ya dijo que no**, es contraproducente: son la audiencia más escéptica que tenés. Un truco detectado en este grupo no solo no convierte, cierra la puerta para siempre.

### El problema con "solo experiencias positivas"

Un muro de únicamente ganancias trabaja en contra del objetivo del propio Manual, que arranca diciendo que los usuarios obtienen resultados distintos con las mismas señales y concluyen que el indicador falla. Un feed de puros wins **produce** esa conclusión: el usuario ve solo aciertos, recuerda su propia pérdida durante el trial, y decide que el producto no funciona para él. En una audiencia que ya no compró, ese es exactamente el pensamiento que hay que desarmar.

**La estructura correcta son tres tipos de contenido, no uno:**

| Tipo | Qué muestra | Frecuencia |
|---|---|---|
| **Testimonio de resultado** | Operación cerrada, con disclaimer y permiso | 1x semana |
| **Testimonio de proceso** | *"Volví a seguir mi plan"* — lo que la investigación encontró como lo más valioso para el usuario, por encima de "gané dinero" | 1x semana |
| **Una pérdida bien gestionada** | Con su riesgo pre-definido: $16, aceptado antes de entrar | 1x mes |

La pérdida bien gestionada es contraintuitiva pero es el activo de confianza más fuerte que tiene la marca, y ningún competidor lo hace. En este grupo específicamente, es lo que responde la objeción silenciosa que todos tienen: *"a mí me tocó perder"*.

### Estructura y frecuencia

| Día | Pieza | Auto / Manual |
|---|---|---|
| Lunes | Resultado de la semana anterior (ya cerrado) | Manual |
| Martes | Pieza educativa — serie autosabotaje (`synapse_serie_autosabotaje_prompts.md`) | Manual · ya producida |
| Miércoles | Testimonio (rotando resultado / proceso) | Manual |
| Viernes | Anuncio de clase en vivo — **abierta a este grupo** | Manual |
| 1x mes | "Así se ve una pérdida bien gestionada" | Manual |
| **Días 1-3 y 13-17** | **Ventana de reactivación**: oferta explícita | Semi-auto (ver abajo) |

**Total: 4 publicaciones por semana.** Fuera de las ventanas de quincena, máximo 1 mención suave de oferta por semana.

### Mejoradores de conversión

1. **Las ventanas de quincena son el motor de este grupo.** Días 1-3 y 13-17, sincronizadas con la liquidez del cliente (`arquitectura_final_embudo.md`, decisión 4). Es la única audiencia del ecosistema donde la oferta directa y sostenida tiene sentido: ya conocen el producto, la barrera es decisión, no información.

2. **La oferta se dispara 1 a 1, no en el grupo.** Acá está el mayor apalancamiento de automatización de todo el sistema: Make ya sabe quién tiene tag `trial_vencido`, y Manychat puede enviarles la oferta individualmente en la ventana de quincena. Automatizable al 100% hoy, sin infraestructura nueva. El grupo sostiene el clima; el 1 a 1 cierra.

3. **Acceso a la clase en vivo.** Que sigan viendo el valor en directo, no solo en capturas. Es el recordatorio más honesto de lo que se están perdiendo.

4. **Encuesta de objeciones** (§6). Este grupo es la única fuente real de la respuesta a *"¿por qué no compraste?"*, una brecha declarada y nunca cerrada (`synapse_messaging_bible.md` §16).

### Administración

**Recomendación: montarlo como Canal de WhatsApp, no como grupo** (ver §2). Es unidireccional por naturaleza, escala sin límite, no genera moderación ni solicitudes falsas, y el usuario lo puede dejar de seguir sin el costo social de salirse de un grupo — lo que reduce la fricción de entrada.

Si se mantiene como grupo, la regla es: solo administradores publican.

---

## 5. Grupo 3 · Sala de Operación (clientes con plan activo)

**Pregunta:** *"¿Qué hago ahora?"*
**Estado emocional:** pagó, y quiere que le demuestren que valió la pena.
**Riesgo principal:** que el silencio de los días sin señal se lea como abandono.

### Estructura y frecuencia

| Momento | Pieza | Frecuencia | Auto / Manual |
|---|---|---|---|
| Sesión NY y Asia | **Señal**: entrada, SL 160 pips ($16), TP1, TP2, break-even | Cuando exista | Manual |
| Al cerrar | **Resultado**, ganada o perdida, como *respuesta* a la señal | Por operación | Manual |
| Día sin señal | **"Hoy no hubo alerta"** explícito | Cada día que aplique | Manual |
| Lunes | **Recap semanal** con números reales | 1x semana | Manual ⚠️ |
| Miércoles | **Recordatorio de disciplina** — un error del Módulo 5, rotando | 1x semana | Manual · pre-producido |
| Fin de semana | **Clase en vivo** | 1x semana | Manual |
| Jueves | **Encuesta de proceso** (§6) | 1x semana | Manual publicar · auto la acción |

⚠️ El recap de los lunes queda bloqueado hasta reconciliar las métricas (`synapse_messaging_bible.md` §6).

**El "hoy no hubo alerta" no es relleno.** Sin él, el silencio parece abandono y el cliente que pagó empieza a preguntarse si el producto sirve. Con él, ataca directamente la sobre-operativa (27.3% de la encuesta): *si no hay alerta, no hay operación, y eso también es el sistema funcionando*.

### Dos reglas mecánicas para que la señal no se pierda

En WhatsApp, un grupo con señales **y** conversación libre hace que las alertas se entierren entre mensajes. Es el fallo de experiencia más común en grupos de señales, y en un grupo de clientes que pagan es directamente causa de cancelación.

1. **Cada señal se fija (pin)** al publicarse.
2. **El resultado se publica como respuesta (reply) al mensaje original de la señal**, nunca suelto. El hilo entrada → resultado queda trazable aunque haya ruido.

La alternativa —solo administradores— protege la señal pero mata la comunidad, que es parte de lo que se vendió. Pin + reply da casi todo el beneficio sin ese costo.

### Mensaje fijado permanente

El **Checklist Antes de Operar** (Módulo 7 del Manual): lo que el usuario necesita a un toque de distancia en el momento exacto de ejecutar.

### Mejoradores de conversión y retención

1. **La retención se gana con proceso, no con más señales.** Un cliente que sigue su plan y pierde renueva; uno que gana rompiendo el plan, no. La encuesta de proceso de los jueves es el instrumento central de esto.

2. **Escalera STANDARD → PRO → PREMIUM.** El upsell nativo en checkout ya está disponible (`monetizacion_hotmart.md`) y no requiere producto nuevo: los planes son acumulativos. El grupo es donde se hace visible qué hay en el nivel de arriba.

3. **El cliente satisfecho como canal de adquisición.** Mencionar el programa de embajadores acá convierte retención en captación sin costo de pauta.

4. **Aviso de renovación anticipado, 1 a 1.** Make Escenario 3 ya detecta vencimientos. Que la renovación llegue como recordatorio útil y no como corte de servicio.

---

## 6. La encuesta semanal — una por grupo, cada una con un trabajo distinto

**La encuesta no es relleno de engagement: es un instrumento de medición.** Cada una devuelve un dato que hoy no existe y dispara una acción concreta y automatizable.

| Grupo | Día | Pregunta | Opciones | Acción que dispara |
|---|---|---|---|---|
| **1 · Punto de Partida** | Martes | *"¿Ya hiciste tu primera operación con Synapse?"* | ✅ Sí · ⏳ Todavía no · ❓ Tengo una duda técnica | **El instrumento más valioso del sistema.** Identifica con nombre y apellido a quién está dentro del 45% que no se activa, **mientras todavía queda trial por delante**. Cada ⏳ y cada ❓ dispara contacto 1 a 1 de Meli ese mismo día |
| **2 · Testimonios** | Jueves | *"¿Qué es lo que más te frena hoy?"* | Objeciones rotativas | Cierra una brecha declarada: nunca se validaron las objeciones con usuarios reales. Las respuestas más repetidas se responden públicamente la semana siguiente, y alimentan el copy de las ventanas de quincena |
| **3 · Sala de Operación** | Jueves | *"En tus últimas 5 operaciones, ¿respetaste tu plan?"* | 🟢 Las 5 · 🟡 Algunas · 🔴 Ninguna | Mide **proceso, no resultado**. Quien responde 🔴 dos semanas seguidas recibe contacto 1 a 1 antes de que abandone — es señal temprana de cancelación |

La publicación de la encuesta es manual (limitación de §2), pero **la lectura y la acción sí se automatizan**: las respuestas se vuelcan a `DB_Usuarios` y Make dispara la intervención. Ese es el patrón general de todo este documento — **manual para publicar, automático para actuar**.

---

## 7. Tabla maestra de automatización

Qué está construido, qué falta, y qué no se puede automatizar por diseño.

| Disparador | Acción | Herramienta | Estado |
|---|---|---|---|
| Reclama trial | Crear fila + tag `trial_activo` | Make Esc. 1 | ✅ Construido |
| Tag `trial_activo` | Enviar link del Grupo 1, 1 a 1 | Manychat | 🔧 Ajuste menor: agregar el link al mensaje de Día 1 |
| Días 1/3/7/10/13/15 | Secuencia de hitos del trial | Manychat | ✅ Construido |
| Encuesta: responde ⏳ o ❓ | Avisar a Meli para contacto 1 a 1 | Make + Sheets | ⬜ Por construir — **máxima prioridad** |
| Día 13 del trial | Enviar la oferta, 1 a 1 | Manychat | ⬜ Por construir |
| Trial vence sin compra | Tag `trial_vencido` + mover a Grupo 2 | Make Esc. 3 (detección) | ✅ Detección construida · remoción del grupo manual |
| Compra | Tag `cliente_activo` + link Grupo 3 + avisar admin | Make Esc. 2 | ✅ Construido |
| Ventana quincena (1-3, 13-17) | Campaña de oferta a `trial_vencido`, 1 a 1 | Manychat | ⬜ Por construir — **mayor apalancamiento del Grupo 2** |
| Membresía por vencer | Recordatorio de renovación | Make Esc. 3 | ✅ Construido |
| **Publicar en cualquier grupo** | — | — | ❌ **No automatizable** (§2). Checklist manual diaria |

### La checklist diaria de administración (lo único verdaderamente manual)

Todo el contenido se pre-produce en lote una vez por semana. La ejecución diaria queda en:

1. Publicar señales de las dos sesiones en Grupos 1 y 3 · fijar cada una.
2. Publicar resultado como respuesta a cada señal.
3. Si no hubo señal, publicar el aviso de "hoy no hubo alerta".
4. Publicar la pieza del día que corresponda al calendario de cada grupo.
5. Responder Q&A en las ventanas de sesión.

Realista: **15-20 minutos al día**, más un bloque semanal de producción de contenido.

---

## 8. Próximos pasos, por orden de impacto

1. **Construir la automatización de la encuesta del Grupo 1** (⏳/❓ → aviso a Meli). Es el único mecanismo que ataca la fuga del 45% mientras todavía hay tiempo de rescatar a la persona. Máxima prioridad de todo el documento.
2. **Montar el Grupo 1** con el Kit de Bienvenida fijado y los primeros videos del school.
3. **Corregir el Módulo 3 del Manual** (§0): invertir la tabla de capital y quitar la proyección de $80 mensuales.
4. **Decidir si el Grupo 2 va como Canal** (recomendado) o como grupo.
5. **Construir la campaña de quincena 1 a 1** para `trial_vencido` — es el motor de conversión del Grupo 2 y es 100% automatizable con lo que ya existe.
6. **Propagar el marco de 160 pips / $16 / 2R** a `indicador_synapse.md`, `synapse_messaging_bible.md` y la skill `synapse-escenarios`.
7. Reconciliar las métricas pendientes para desbloquear el recap de los lunes.
