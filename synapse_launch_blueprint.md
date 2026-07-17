# Synapse Launch Blueprint

> Arquitectura de fases del lanzamiento (contenido, secuencia, intención), antes de escribir una sola historia o reel. Comparte el mismo arco narrativo que `synapse_vsl_arquitectura.md` (dolor → agitación → nueva oportunidad → descubrimiento → deseo/evidencia → oferta → cierre) aplicado a formato largo (VSL) vs. formato de secuencia (redes/email/WhatsApp). Depende de `synapse_messaging_bible.md` como fuente de mensaje.
>
> **Mantenido por `/product`.**

## 0. Decisión previa: tipo de lanzamiento

**[PROPUESTA — recomendación, no decisión cerrada]** Esto cambia toda la planificación de fases, así que conviene cerrarlo antes de bajar el detalle de contenido de cada una.

| Opción | Descripción |
|---|---|
| Lanzamiento clásico (10–14 días) | Genera intensidad, concentra la atención, funciona bien para una primera salida al mercado |
| Lanzamiento perpetuo | Siempre abierto, apoyado en automatizaciones y optimización continua |
| **Modelo híbrido** | Captación continua hacia el trial de 15 días + campañas de lanzamiento periódicas para impulsar la conversión a STANDARD/PRO/PREMIUM |

**Recomendación: modelo híbrido.** Encaja con la estructura ya existente del negocio (trial de 15 días siempre abierto + comunidad de WhatsApp + planes escalonados, `pricing_strategy.md`) — mantiene un flujo constante de nuevos usuarios mientras aprovecha ventanas de mayor intensidad para cerrar ventas y recolectar prueba social entre campañas.

**Si se confirma**, esto debe pasar a `ESTRATEGIA.md` como decisión fechada (igual que el resto de decisiones de negocio) — es el tipo de elección que determina cómo se planifican todas las fases de abajo, no solo un detalle de ejecución.

## 1. Fase 0 — Preparación (7–10 días)

**Objetivo:** afinar activos, crear expectativa sin vender, preparar comunidad.

**Entregables:**
- Optimización de perfiles
- Landing revisada
- WhatsApp listo
- Automatizaciones
- Creatividades

## 2. Las 7 fases del arco narrativo

| Fase | Objetivo psicológico | Equivalente en `synapse_messaging_bible.md` / VSL |
|---|---|---|
| 1 — Conciencia | Que el trader descubra: *"mi problema no es el mercado"*. No se habla todavía de Synapse, solo del dolor. | Enemy §1 / Acto 1-2 de la VSL |
| 2 — Agitación | Que piense: *"llevo años intentando arreglar esto de la forma equivocada"*. Se rompen falsas creencias. | Creencias §5 / Acto 3 de la VSL |
| 3 — Nueva oportunidad | *"Tal vez el problema no sea aprender más. Tal vez sea dejar de decidir."* | Nueva Oportunidad §3 (mismo capítulo, mismo nombre) |
| 4 — Descubrimiento | Aparece Synapse — no como producto, como consecuencia lógica. | Big Idea §2 / Acto 4 de la VSL — **mismo bloqueante: falta la historia de origen (ver §4 abajo)** |
| 5 — Deseo | Demostraciones, resultados verificables, behind the scenes, comparaciones, prueba social. | Mecanismo único §4, Claims permitidos §8 / Actos 5-7 de la VSL |
| 6 — Conversión | CTA, oferta, urgencia, bonos. | Oferta (`pricing_strategy.md`) / Acto 8 de la VSL |
| 7 — Cierre | Últimas objeciones, FAQ, recordatorios, última llamada. | Objeciones §6 / Acto 9 de la VSL |

**Regla de secuencia:** en la Fase 1 y 2 no se menciona Synapse — el producto solo puede aparecer a partir de la Fase 4. Publicar contenido de producto antes de tiempo rompe el arco (el prospecto no habrá terminado de admitir que el problema es la ejecución, no el mercado).

## 3. Plantilla de desglose por fase

Antes de escribir una sola historia, cada fase se baja a este nivel de detalle — duración, objetivo psicológico puntual, y cuántas piezas de cada tipo. Esto evita que las historias sean publicaciones aisladas y las convierte en una secuencia con intención: para cada pieza se sabe qué emoción busca, qué creencia quiere cambiar, cuál es su CTA, y cómo se conecta con la siguiente.

### Fase 1 (ejemplo ya definido)

| Campo | Valor |
|---|---|
| Duración | 5 días |
| Objetivo psicológico | Que el prospecto admita que el problema es él |
| Historias | 15 |
| Reels | 4 |
| Carruseles | 3 |
| Emails | 2 |
| WhatsApp | 3 |
| Lives | 1 |

### Fases 2–7 (pendiente — misma plantilla)

**[PENDIENTE]** Repetir este mismo desglose (duración, objetivo psicológico, historias/reels/carruseles/emails/WhatsApp/lives) para las fases 2 a 7 antes de escribir el guion de una sola pieza. Sin esto, cualquier historia que se escriba hoy es una publicación aislada, no parte de la secuencia.

## 4. Bloqueante compartido con la VSL: historia de origen

La Fase 4 (Descubrimiento) tiene la misma dependencia dura que el Acto 4 de la VSL (`synapse_vsl_arquitectura.md` §1): sin la historia real de por qué el fundador decidió construir una IA que le quita la decisión al trader —en vez de, por ejemplo, un curso de disciplina—, esta fase se queda en una demostración de producto en vez de un relato de descubrimiento. Es el mismo hueco documentado en `marca_synapse.md` §7 y `synapse_messaging_bible.md` §16.

**No conviene bajar el detalle de contenido de la Fase 4 (ni escribir el Acto 4 de la VSL) hasta resolver esto.** Las fases 1, 2, 3, 5, 6 y 7 sí se pueden desarrollar en paralelo — no dependen de la historia de origen.

## 5. Cómo medir

Para la secuencia de historias/contenido de lanzamiento:
- Tasa de visualización completa de las historias.
- Respuestas e interacciones (encuestas, preguntas, DMs).
- Clics hacia el formulario del trial.

**Conexión con la métrica norte del negocio:** todo esto es upstream de la métrica norte oficial ya definida en `ESTRATEGIA.md` §1 — % de trials que llegan al día 15 y convierten a pago. Las métricas de esta sección miden si el Blueprint está llevando gente al trial (Fases 1-4); la conversión real del negocio se mide después, con los experimentos de retención ya definidos en `business_plan/Crecimiento/product_growth_tasks.md`.

## 6. Próximos pasos

1. Confirmar el modelo de lanzamiento (§0) — condiciona cómo se planifica todo lo demás.
2. Resolver la historia de origen (§4) — bloqueante de la Fase 4 y del Acto 4 de la VSL.
3. Bajar el desglose de la plantilla (§3) a las fases 2–7.
4. Recién ahí, escribir el guion de cada pieza — historia por historia, reel por reel — ya sabiendo qué emoción, qué creencia y qué CTA le corresponde a cada una.
