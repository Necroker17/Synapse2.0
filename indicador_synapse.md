# Synapse AI Indicator — Qué es, cómo funciona y qué soluciona

> Documento de referencia comercial sobre el producto (Synapse AI Scanner / Synapse AI Indicator). Consolida en un solo lugar el qué, el cómo, el por qué y el impacto en la vida del trader, para usarse como fuente al redactar landing, ads, VSL o contenido educativo.
>
> **Fuente de verdad de los datos duros:** `Landing_SynapseAI/lib/stats.ts` (snapshot de telemetría vigente). Producto real: **Oro (XAUUSD), exclusivamente M15**, sesión Nueva York 7:00–11:00 (hora Colombia, UTC-5). La Plata fue deshabilitada — no se menciona como activo operable.

---

## 1. Qué es

**Synapse AI Indicator** es un indicador/escáner algorítmico para TradingView, de acceso Invite-Only, que analiza en tiempo real el par **XAUUSD en temporalidad M15** durante la ventana de apertura de Nueva York y le entrega al trader una señal completa y accionable: dirección, punto de entrada, Stop Loss, dos Take Profit (TP1/TP2) y el tamaño de posición exacto según su capital y riesgo definidos.

No es un simple dibujo de flechas sobre el gráfico: es un sistema de reglas fijas que reemplaza el criterio manual y emocional del trader en el momento más frágil de la operativa — el instante de decidir si se entra o no.

## 2. Qué hace

- **Detecta la señal:** escanea cada vela de M15 en XAUUSD durante la sesión NY y determina si existe una oportunidad de entrada (compra o venta).
- **Calcula los niveles de la operación:** Stop Loss de protección técnica y dos objetivos de Take Profit (TP1/TP2), ajustados a la volatilidad del momento.
- **Calcula el tamaño de la posición:** en función del capital de la cuenta y el % de riesgo que el trader definió, entrega el lotaje exacto a colocar en el bróker (ej. `0.06 lotes`) y el riesgo en USD de esa operación.
- **Gestiona el ciclo de vida de la señal:** una vez que el precio toca TP1, mueve el Stop Loss a break-even y actualiza el estado para que el trader sepa si la señal sigue disponible, ya está protegida o ya finalizó.
- **Muestra su propio historial de desempeño:** un panel en el gráfico con señales registradas, win rate a TP1, win rate a TP2, profit factor, racha máxima de aciertos/fallos y retorno acumulado — para que el trader pueda auditar el sistema, no solo confiar en él a ciegas.
- **Avisa fuera de TradingView:** vía alertas nativas, puede notificar al celular del trader (compatible con reenvío a WhatsApp/Telegram) con el detalle completo de la operación.
- **Se autolimita:** si se usa en un activo distinto a XAUUSD o en una temporalidad no autorizada, se apaga y muestra una advertencia en pantalla — evita que el trader lo use fuera de las condiciones en las que fue validado.

## 3. Cómo lo hace

El indicador sigue un flujo de filtros secuenciales; una señal solo se emite si pasa **todos** los filtros, no solo uno:

1. **Filtro de ventana horaria.** Concentra el análisis únicamente en la sesión de mayor volumen institucional (7:00–11:00 a.m. hora Colombia). Fuera de esa ventana no evalúa señales nuevas, para no operar en tramos de baja liquidez donde el ruido genera falsos positivos.
2. **Capa direccional (tendencia).** Evalúa una media móvil de referencia para establecer la dirección dominante del precio y descarta señales que vayan en contra de esa tendencia.
3. **Filtro de momentum y volatilidad.** Mide el cuerpo y volumen relativo de velas tipo engulfing contra el rango real promedio (ATR). Solo valida la señal si el movimiento es lo suficientemente grande como para representar una entrada real de volumen, no una fluctuación menor.
4. **Proyección de niveles.** Con la señal ya validada, calcula el Stop Loss (con margen de offset en ticks configurable) y dos Take Profit proporcionales a la volatilidad detectada.
5. **Motor de gestión de riesgo.** Con tres datos que el trader configura una sola vez (capital de la cuenta, % de riesgo por operación y tamaño de contrato del bróker), aplica la fórmula `(Capital × Riesgo%) / Distancia al SL` para devolver el lotaje exacto y el riesgo en USD — eliminando el cálculo manual, que es una de las fuentes de error más comunes en cuentas pequeñas.
6. **Capa visual.** Dibuja en el gráfico cajas de riesgo/beneficio (rojo/verde) que se extienden con cada vela, y dos paneles fijos: uno de diagnóstico histórico (arriba a la izquierda) y uno de ejecución en vivo (abajo a la derecha) con estado `DISPONIBLE` / `BREAK-EVEN` / `NO DISPONIBLE`.
7. **Capa de notificación.** Se apoya en el motor de alertas de TradingView para redactar automáticamente un mensaje estructurado (dirección, activo, temporalidad, entrada, SL, TPs, riesgo por micro-lote) listo para reenviar a WhatsApp o Telegram.

## 4. Para qué lo hace (el problema de fondo)

El producto no nace para "predecir el mercado" — nace para atacar la causa número uno por la que los traders pierden dinero, que casi nunca es la falta de una buena estrategia: **el 90% de los traders pierde por no seguir sus propias reglas.** Entran tarde por miedo a quedarse afuera, mueven el Stop Loss cuando el precio se acerca, calculan mal el lotaje bajo presión, o abren una operación de revancha después de una pérdida.

Synapse AI Indicator existe para sacar esa decisión de las manos del impulso y ponerla en manos de una regla matemática fija, evaluada exactamente igual todos los días: la misma ventana horaria, el mismo criterio de tendencia, el mismo filtro de volumen, el mismo cálculo de riesgo. El sistema no tiene un mal día emocional.

## 5. Qué soluciona

- **Autosabotaje operativo:** el trader deja de ser el que decide "en caliente" si respeta o no su plan — el indicador ya decidió con criterios fijos antes de que la emoción entre en juego.
- **Revenge trading:** al no emitir señales nuevas fuera de sus filtros, evita la tentación de "recuperar" una pérdida con una entrada improvisada.
- **Fatiga visual y tiempo perdido buscando setups:** el trader ya no necesita mirar el gráfico vela por vela tratando de identificar manualmente un patrón válido.
- **Errores de cálculo de lotaje:** el riesgo se define una vez (capital y %) y se aplica de forma idéntica en cada operación, sin cuentas mentales bajo presión.
- **Falta de objetividad sobre el propio desempeño:** el panel de estadísticas expone el historial real (win rate, profit factor, rachas) para que el trader tome decisiones informadas sobre el sistema que está usando, en vez de operar "a ciegas" o solo con la sensación del último trade.
- **Dependencia de estar frente a la pantalla:** gracias a las alertas al celular, el trader puede enterarse de una señal válida sin tener que vigilar el gráfico en vivo durante toda la sesión de Nueva York.

## 6. Cómo impacta la vida de un trader

- **Recupera tiempo:** no necesita quedarse pegado a la pantalla las cuatro horas de la sesión NY; la notificación llega a su celular cuando hay algo que revisar.
- **Reduce la carga emocional de operar:** la decisión de "¿entro o no entro?" deja de ser un debate interno en tiempo real — el criterio ya está aplicado antes de que el trader tenga que resistir un impulso.
- **Gana consistencia:** al aplicar siempre la misma lógica de entrada, salida y riesgo, dos operaciones bajo las mismas condiciones se tratan exactamente igual, en vez de depender del estado de ánimo del día.
- **Protege su capital de forma no negociable:** el % de riesgo por operación se respeta siempre porque el lotaje se calcula automáticamente — el trader no puede "sobre-apalancarse" por error de cálculo o por convicción excesiva en una operación.
- **Puede auditar su propio proceso:** con el panel de rendimiento a la vista, el trader ve datos reales de win rate y profit factor en vez de depender de su memoria selectiva ("solo recuerdo mis mejores trades").
- **Opera desde cualquier lugar:** al no depender de estar mirando el gráfico, la señal lo alcanza igual si está en el trabajo, en la calle o fuera de su computador.

La decisión final de ejecutar o no cada operación siempre es del trader — el indicador es una herramienta de análisis y gestión de riesgo, no un gestor automático ni un asesor financiero.

---

## 7. Snapshot de rendimiento (dato duro, no promesa)

Estos números provienen del snapshot de telemetría vigente en `Landing_SynapseAI/lib/stats.ts` y describen el historial auditado del indicador, no una proyección de resultados futuros:

| Métrica | Valor |
|---|---|
| Activo / temporalidad | XAUUSD (Oro) · M15 |
| Señales auditadas | 188 |
| Win Rate TP1 | 55.9% (105 ganadas / 82 perdidas) |
| Win Rate TP2 | 35.1% (66 señales) |
| Profit Factor | 1.86 |
| Racha máxima | 14 ganadas / 5 perdidas |
| Retorno semanal (histórico) | +1723.1 pips |
| Retorno mensual (histórico) | +1086.7 pips |

## 8. Advertencia de riesgo (obligatoria en toda pieza pública)

> Operar divisas, metales y otros instrumentos apalancados conlleva un alto nivel de riesgo y puede no ser adecuado para todos los inversores: existe la posibilidad de perder parte o la totalidad del capital invertido. El rendimiento pasado no garantiza resultados futuros. Las estadísticas mostradas corresponden a un snapshot de telemetría del indicador y no constituyen una promesa de ganancias. Synapse AI es una herramienta de análisis y gestión de riesgo, no un servicio de asesoría financiera; la decisión final de cada operación es siempre tuya. Opera únicamente con dinero que puedas permitirte perder y, si lo necesitas, busca asesoría de un profesional independiente.
