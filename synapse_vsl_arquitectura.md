# Synapse VSL — Arquitectura (40–45 min)

> Arquitectura de la VSL de venta, antes del guion línea por línea. Depende de `synapse_messaging_bible.md` como fuente de verdad de mensaje — cada acto cita el capítulo del que se apoya. No escribir el guion completo hasta resolver el bloqueante de §1.
>
> **Mantenido por `/product`.**

## 0. Objetivo de la VSL

**No es vender un indicador.** Es lograr que el prospecto llegue por sí mismo a esta conclusión:

> "Mi problema nunca fue encontrar entradas. Mi problema siempre fue que yo mismo destruía las buenas entradas."

Cuando esa creencia cambia, Synapse deja de compararse con otros indicadores o grupos de señales y pasa a verse como la solución a un problema distinto — coherente con el **Enemy** (`synapse_messaging_bible.md` §1) y la **Big Idea** (§2).

---

## 1. Bloqueante antes de escribir el guion completo

**La historia de origen no está documentada.** `synapse_messaging_bible.md` y `marca_synapse.md` ya lo marcan como brecha abierta — no existe todavía una respuesta a:

> **¿Cuál fue el momento que hizo que el fundador decidiera crear Synapse AI?**

Esta historia es el puente entre el Acto 3 (falsa solución) y el Acto 4 (descubrimiento) — sin ella, el Acto 4 se queda en una demostración de producto en vez de un relato de origen, y toda la arquitectura pierde su bisagra emocional. **No conviene escribir el guion línea por línea sin esto.**

Preguntas a resolver con el fundador para reconstruirla:
- ¿Qué estaba operando/viviendo el fundador cuando decidió construir esto — una pérdida propia, la de alguien cercano, un patrón que vio repetirse en una comunidad?
- ¿Por qué la solución fue "quitarle la decisión al trader" y no "enseñarle mejor disciplina"? ¿Qué experiencia concreta lo llevó a esa conclusión específica?
- ¿Hay un momento o una operación puntual que se pueda contar con detalle (fecha, contexto, cifra) en vez de hablar en abstracto?

## 2. Arquitectura por actos

| Acto | Minutaje | Objetivo | Se apoya en (Messaging Bible) |
|---|---|---|---|
| 1 — El patrón invisible | 0–5 min | Hacer que el espectador recuerde una experiencia propia; romper la creencia de que necesita "otra estrategia" | Creencias §5 |
| 2 — El enemigo real | 5–10 min | Nombrar al enemigo verdadero: la versión emocional del trader, no el bróker/mercado/noticias | Enemy §1 |
| 3 — La falsa solución | 10–15 min | Desmontar cursos/indicadores/más horas de gráfico como soluciones que no atacan la causa real | Enemy §1, Creencias §5 |
| 4 — El descubrimiento | 15–22 min | Nace Synapse como descubrimiento, no como producto — **bloqueado por §1** | Big Idea §2, Nueva Oportunidad §3 |
| 5 — El mecanismo único | 22–30 min | Explicar el flujo en lenguaje simple, sin tecnicismo | Mecanismo único §4 |
| 6 — Demostración | 30–34 min | Mostrar el flujo real: TradingView → alerta → WhatsApp → entrada → SL → TP → riesgo → resultado | Mecanismo único §4, Claims permitidos §8 |
| 7 — Evidencia | 34–37 min | Solo evidencia verificable: historial, funcionamiento del flujo, testimonios reales | Claims permitidos §8, Claims prohibidos §9 |
| 8 — La oferta | 37–42 min | Presentar el ecosistema completo, no una herramienta aislada | Oferta (`pricing_strategy.md`) |
| 9 — Cierre | 42–45 min | CTA por decisión, no por miedo | One Liner §12 |

### Acto 1 — El patrón invisible (0–5 min)

**Hook**, con pausa entre preguntas:

> ¿Alguna vez una operación iba exactamente como la planeaste... pero terminaste perdiendo porque moviste el Stop Loss?
>
> ¿Y cuántas veces has cerrado una operación ganadora demasiado pronto... solo para verla llegar al Take Profit minutos después?

**Ruptura de creencia:**

> Si esto te pasa, probablemente no necesitas otra estrategia. Probablemente ya tienes una. Lo que no tienes es una forma de seguirla cuando aparecen las emociones.

### Acto 2 — El enemigo real (5–10 min)

El enemigo **no es** el bróker, el mercado ni las noticias. Es la versión emocional del trader. Mostrar visualmente: mover el SL, revenge trading, FOMO, cerrar antes de TP.

> La emoción no destruye tu cuenta cuando estás tranquilo. La destruye exactamente en el segundo en que tienes que decidir.

### Acto 3 — La falsa solución (10–15 min)

Desmontar: más cursos, más indicadores, más estrategias, más horas frente al gráfico.

> Ninguna estrategia funciona si quien la ejecuta cambia las reglas cada cinco minutos.

### Acto 4 — El descubrimiento (15–22 min)

Nace Synapse — como descubrimiento, no como producto. **Aquí va la historia de origen de §1.** La historia debe responder por qué decidieron construir una IA que tome la decisión: no para encontrar mejores entradas, sino para impedir que el trader destruya las buenas entradas ya encontradas.

Aquí aparece la Big Idea: *"El 90% pierde porque no sigue sus propias reglas."*

### Acto 5 — El mecanismo único (22–30 min)

No hablar de algoritmos ni de IA como tecnología. Hablar del flujo:

```
Mercado
  ↓
Filtro
  ↓
Solo aparecen setups válidos
  ↓
La IA calcula el riesgo
  ↓
Envía la alerta
  ↓
El trader ejecuta
  ↓
Break Even
  ↓
Gestión objetiva
```

Vender tranquilidad, no tecnología.

**Punto a integrar aquí [PROPUESTA]:** el flujo corre en **dos sesiones diarias independientes** (Nueva York y Asia, ver `ESTRATEGIA.md` y `synapse_messaging_bible.md` §4) — vale la pena mostrarlo en este acto como parte del mecanismo ("el filtro no descansa después de una sola ventana, corre dos veces al día"), no solo como un dato técnico suelto. Conecta directamente con el Acto 1: alguien que se perdió la señal de la mañana por estar en el trabajo todavía tiene la de la noche.

### Acto 6 — Demostración (30–34 min)

Muy visual: TradingView → alerta → WhatsApp → entrada → SL → TP → riesgo → resultado.

### Acto 7 — Evidencia (34–37 min)

Solo evidencia verificable: historial de operaciones, funcionamiento del flujo, testimonios auténticos, ejemplos reales de uso. Evitar exageraciones o afirmaciones que no puedan respaldarse — coherente con Claims permitidos/prohibidos (`synapse_messaging_bible.md` §8-9).

**⚠️ Dependencia dura:** este acto es exactamente donde vive la objeción #1 de la Messaging Bible (verificabilidad de resultados históricos, §6) — no grabar ni usar ningún número de historial en este acto hasta que esté reconciliado contra la fuente real (la alerta ya está puesta en §6 de la Bible sobre `Landing_SynapseAI/lib/stats.ts`).

### Acto 8 — La oferta (37–42 min)

Presentar el ecosistema, no un indicador aislado. El prospecto obtiene:

- Synapse AI Scanner (señales, cálculo automático de riesgo)
- Comunidad, clases, soporte
- Trial de 15 días
- Planes STANDARD / PRO / PREMIUM según el nivel elegido

La percepción debe ser la de un sistema completo. **Disclaimer de riesgo obligatorio en este acto** (ética comercial, `ESTRATEGIA.md` §2) — no está en la arquitectura original, hay que fijar en qué segundo exacto del guion aparece, en pantalla y en voz, no solo como letra pequeña.

### Acto 9 — Cierre (42–45 min)

CTA por decisión, no por miedo:

> Mañana puedes volver a abrir el gráfico y confiar otra vez en que esta vez no moverás el Stop. O puedes dejar que las reglas se ejecuten igual todos los días. La decisión sigue siendo tuya.

---

## 3. "Momentos de Sí"

Preguntas repartidas a lo largo de la VSL que el espectador responde mentalmente con "sí", aumentando identificación antes de presentar la solución:

- ¿Alguna vez moviste el Stop Loss y justo después el precio fue a tu objetivo?
- ¿Alguna vez cerraste una ganadora demasiado pronto?
- ¿Has pensado que tu problema era psicológico más que técnico?
- ¿Te ha pasado que una pérdida te llevó a abrir otra operación impulsivamente?
- ¿Has sentido que sabes qué hacer, pero no lo haces cuando llega el momento?

## 4. Cómo medir

- % de visualización hasta el bloque de la oferta (Acto 8).
- Conversión de espectadores a registros del trial de 15 días.
- Conversión del trial a planes de pago.

## 5. Siguiente experimento (80/20)

1. Definir la historia de origen (§1) — bloqueante.
2. Guion completo de 40–45 min siguiendo esta arquitectura.
3. Versión corta (12–15 min) para pruebas A/B en tráfico frío, antes de producir la versión definitiva.

## 6. Checklist de cumplimiento antes de grabar

- [ ] Historia de origen del Acto 4 confirmada con el fundador (§1).
- [ ] Números del Acto 7 verificados contra la fuente real, no contra el snapshot sin reconciliar (`synapse_messaging_bible.md` §6).
- [ ] Disclaimer de riesgo con momento exacto asignado en el guion (Acto 8 o 9).
- [ ] Ningún claim del Acto 7/8 cae en la lista de Claims prohibidos (`synapse_messaging_bible.md` §9).
- [ ] Si se menciona el mecanismo de doble sesión (Acto 5), usar los horarios exactos: NY 7:00–11:00 a.m., Asia 6:00–10:00 p.m., hora Colombia.
