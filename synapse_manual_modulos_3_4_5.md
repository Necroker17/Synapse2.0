# Manual Synapse · Módulos 3, 4 y 5 — Texto completo

> Los tres módulos que le faltaban a la v1.0 y que cubren el tramo donde se pierde el 45% que nunca llega a operar: instalar, leer una alerta, elegir estrategia. Ver `synapse_manual_estructura.md` para la estructura de los 11 módulos.
>
> **Todo lo que sigue es texto de cara al usuario**, listo para maquetar. Las notas del equipo van marcadas `[NOTA]` y no se imprimen.

---

# Módulo 3 · Instalación y configuración

**Al terminar este módulo vas a tener el indicador funcionando en tu pantalla.** Toma menos de cinco minutos y no necesitas saber programar ni configurar nada complejo.

## Paso 1 · Confirma tu acceso

Synapse es un indicador de acceso privado en TradingView. Nosotros te lo habilitamos con tu nombre de usuario.

Tu nombre de usuario de TradingView **distingue mayúsculas de minúsculas y no admite errores**. Si lo escribiste mal al registrarte, el acceso no llega. Lo encuentras en TradingView, en el menú de tu perfil, arriba de tu foto.

Si no estás seguro de haberlo escrito bien, escríbenos antes de seguir. Es el error más común y el más fácil de resolver.

## Paso 2 · Abre el gráfico correcto

Synapse opera **un solo par y una sola temporalidad**:

- **Par:** XAUUSD (Oro contra dólar)
- **Temporalidad:** M15 (15 minutos)

No es una limitación, es una decisión. El sistema está calibrado para ese mercado y ese marco de tiempo. En cualquier otro par o temporalidad, lo que veas en pantalla no corresponde al sistema que estás probando.

## Paso 3 · Agrega el indicador

En TradingView, abre el menú de **Indicadores** y busca la sección de **scripts de solo invitación**. Ahí va a aparecer Synapse AI Scanner. Haz clic y se carga sobre tu gráfico.

## Paso 4 · Verifica que quedó andando

Este es el paso que la mayoría se salta, y es el que evita que te quedes semanas creyendo que algo funciona cuando no.

**Ya está listo si ves esto:**

- El nombre del indicador aparece en la esquina superior izquierda de tu gráfico.
- El gráfico dice XAUUSD y 15m.
- Los trazos del indicador se dibujan sobre las velas.

Si alguna de las tres no se cumple, todavía no está andando. No sigas al Módulo 4: escríbenos y lo resolvemos en minutos.

> `[NOTA]` Aquí va una captura de pantalla real señalando los tres puntos. Es el elemento más importante del módulo: la persona necesita una confirmación visual inequívoca, no una instrucción más.

## Paso 5 · Dónde llegan las alertas

**Las alertas te llegan a tu WhatsApp**, en el grupo al que te sumamos al empezar tu prueba. No tienes que configurar nada para recibirlas.

El indicador en tu pantalla y la alerta en tu teléfono son dos caras de lo mismo: la alerta te dice qué hacer, el gráfico te deja ver por qué. Al principio vas a usar más la alerta. Con el tiempo, el gráfico te va a hacer entender el sistema.

> `[NOTA]` Confirmar con el equipo técnico si el usuario además puede o debe crear sus propias alertas en TradingView. Si es así, agregar el paso aquí. Si no, esta sección queda como está.

## Si algo no funciona

Escríbenos en el grupo. Las dudas técnicas se responden en horario de sesión: **7:00 a 11:00 y 18:00 a 22:00** (hora Colombia).

No te quedes trabado en silencio. La mitad de las personas que no llegan a operar es porque algo pequeño falló al principio y no lo preguntaron.

---

# Módulo 4 · Cómo leer una alerta

Una alerta de Synapse trae **todo lo que necesitas decidir, ya calculado**. No hay que interpretarla ni completarla: se lee y se ejecuta.

## La alerta, campo por campo

| Campo | Qué es | A 0.01 lotes |
|---|---|---|
| **Par** | Siempre XAUUSD | — |
| **Dirección** | Compra o venta | — |
| **Entrada** | El precio al que se abre la operación | — |
| **Stop Loss** | 160 pips desde la entrada | **$16** |
| **TP1** | 160 pips a favor | **$16** |
| **TP2** | 320 pips a favor | **$32** |

## Qué significa cada número, en plata

**Stop Loss: $16.** Es lo máximo que puedes perder en esa operación. No "más o menos": es el número exacto, y lo sabes antes de entrar.

**TP1: $16.** Si la operación llega ahí, ganaste lo mismo que estabas arriesgando.

**TP2: $32.** El doble de lo que arriesgaste.

Todos estos números son a **0.01 lotes**, el tamaño mínimo. Si operas con más lotaje, todos se multiplican igual: al doble de lotaje, el doble de riesgo y el doble de ganancia.

## La idea que sostiene todo el sistema

**El riesgo se conoce y se acepta antes de entrar, nunca durante.**

Cuando abres la operación, ya sabes que puedes perder $16. Ya lo decidiste. Entonces, si el precio se te va en contra, no hay nada nuevo que resolver: eso ya estaba contemplado.

Esa es la diferencia entre operar con un sistema y operar con la emoción del momento. No es que sientas menos. Es que ya no tienes que decidir mientras lo sientes.

## Qué NO te dice la alerta

Con la misma claridad: **la alerta no te dice que la operación va a ganar.**

Ninguna operación individual está garantizada, y ningún sistema acierta siempre. Lo que la alerta te da es un riesgo definido, un objetivo definido y una decisión que no depende de cómo te sientas ese día.

Una operación que termina en stop loss **no es una falla del sistema**. Es uno de los resultados previstos, y su costo ya estaba calculado antes de abrirla.

---

# Módulo 5 · Elige tu estrategia

> `[NOTA]` Confirmar los porcentajes de este módulo contra las métricas reconciliadas antes de imprimir. Van al documento oficial que recibe cada usuario, así que conviene que salgan del histórico verificado.

Este es el módulo más importante del manual.

Synapse te da dos objetivos en cada operación: TP1 y TP2. **Tú eliges con cuál vas a operar, y sostienes esa elección.** No se mezclan, y no se cambia a mitad de camino.

## Por qué existen dos

Muchas operaciones llegan a TP1, se devuelven y terminan en stop loss. Si tu objetivo era TP1, esa operación fue una ganancia. Si tu objetivo era TP2, fue una pérdida.

Es la misma operación. Cambia el resultado según con qué estrategia la estés operando. Por eso hay que elegir antes, no después.

## Las dos estrategias

| | **Estrategia TP1** | **Estrategia TP2** |
|---|---|---|
| Cierras en | 160 pips | 320 pips |
| Ganas por acierto | $16 | $32 |
| Operaciones ganadoras | 6 de cada 10 | 4 de cada 10 |
| Cada 10 operaciones | +$96 y −$64 | +$128 y −$96 |
| **Resultado** | **+$32** | **+$32** |

## Las dos dejan exactamente lo mismo

Léelo de nuevo, porque es contraintuitivo: **+$32 cada 10 operaciones, con cualquiera de las dos.**

La diferencia no está en el dinero. Está en lo que cada una te exige:

**TP1 gana más seguido.** 6 de cada 10 operaciones cierran a favor. Ves resultados con frecuencia, las rachas malas son más cortas, y es mucho más fácil de sostener emocionalmente.

**TP2 gana el doble por acierto, pero pierde 6 de cada 10.** Vas a ver más operaciones en rojo que en verde, y las rachas perdedoras son más largas. Exige mucho más aguante y más capital de respaldo.

## El error más caro que puedes cometer

**Elegir TP2 y abandonarla a mitad de una racha perdedora.**

Si eliges TP2, vas a atravesar rachas de varias pérdidas seguidas: es parte del diseño. Si en medio de esa racha te cambias a TP1, ya te comiste las pérdidas de TP2 y no te quedaste para cobrar sus ganancias. Te llevas lo peor de las dos.

Por eso la elección se hace **una vez, al principio, con la cabeza fría**. No en medio de una racha, que es exactamente cuando peor se decide.

## Cuál elegir

**Si estás empezando, o tu capital está cerca del mínimo: TP1.** Rachas más cortas, más ganadoras, mucho más sostenible mientras aprendes el sistema.

**TP2 encaja mejor cuando ya tienes capital de respaldo** y comprobaste que puedes ver seis operaciones en rojo sin cambiar tu plan.

Ninguna de las dos es superior. La mejor estrategia es la que **puedes sostener**, no la que se ve mejor en una tabla.

## La tercera decisión: el break-even

El break-even es mover tu stop loss al precio de entrada cuando la operación ya va a favor. Es **opcional** y lo decides tú.

**Lo que protege:** una operación que iba a favor y se devuelve al stop, cierra en $0 en vez de perder $16.

**Lo que cuesta:** una operación que baja, no llega a tocar el stop, y después sí llega a tu objetivo, se te cierra en $0. El break-even te saca de operaciones que habrían ganado.

No hay respuesta correcta. Protege capital y cuesta ganancias. Los porcentajes de la tabla de arriba son **sin** break-even.

## Tu elección

Escríbelo antes de seguir. Después la vas a declarar en el grupo, y eso hace mucho más probable que la sostengas.

> **Mi estrategia es:** ☐ TP1  ☐ TP2
>
> **Uso break-even:** ☐ Sí  ☐ No
>
> **Me comprometo a sostenerla durante al menos 20 operaciones antes de evaluarla.**

Veinte operaciones no es un número arbitrario: es el mínimo para que se note el comportamiento del sistema por encima del azar. Evaluar una estrategia con tres operaciones no te dice nada sobre la estrategia, solo sobre esas tres operaciones.

---

*El trading implica riesgo real de pérdida de capital. Nada de lo que compartimos es asesoría financiera, y los resultados pasados no garantizan resultados futuros.*
