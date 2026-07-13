# Product Growth — Experimentos de Retención Trial → Pago

> Mantenido por `/product`. Backlog de experimentos de producto/automatización (no de diseño frontend) para mejorar la conversión entre el día 1 y el día 15 del trial. Cada experimento se prioriza y se registra su resultado en `../../ESTRATEGIA.md` una vez corrido.

Métrica norte oficial (decidida 2026-07-06, ver `../../ESTRATEGIA.md` sección 1): **% de trials que llegan al día 15 y convierten a STANDARD o superior**.

---

## Experimento 1 — Secuencia automatizada de WhatsApp por hito de trial

**Qué es:** automatizar mensajes disparados por tiempo transcurrido desde el registro (día 1, 3, 7, 10, 13, 15), no por campaña manual. Cada hito tiene un objetivo distinto:
- Día 1: confirmación + cómo activar el bono de $30 + primer paso en Skool M1.
- Día 3: check de activación — ¿ya conectaste el indicador a un gráfico?
- Día 7: testimonio/caso de éxito curado (mitad del trial).
- Día 10-12: aviso de que el precio de lanzamiento tiene fecha límite (urgencia real, no artificial).
- Día 13-15: última llamada + oferta de conversión.

**Por qué:** hoy el grupo de WhatsApp es abierto y manual — el mensaje correcto depende de que alguien lo dispare a tiempo. Una secuencia automatizada por hito garantiza que ningún usuario "se enfríe" por falta de seguimiento, sin depender de que el equipo esté monitoreando manualmente cada trial activo.

**Herramienta confirmada (2026-07-06):** Manychat, integrado con las landings en construcción — ya disponible, no requiere evaluar proveedor nuevo.

**Cómo se mide:** tasa de conversión de usuarios que recibieron la secuencia completa vs. los que no (si se lanza como A/B).

**Esfuerzo estimado:** bajo-medio (Manychat ya disponible; el trabajo restante es definir el flujo de los 6 mensajes/hitos y conectarlo al registro del trial en la landing).

---

## Experimento 2 — Trial Health Score (detección temprana de bajo engagement)

**Qué es:** un score simple por usuario en trial, calculado a partir de señales de activación disponibles (¿abrió el indicador al menos 1 vez esta semana?, ¿asistió a alguna clase en vivo?, ¿está activo en el grupo de WhatsApp?). Los usuarios con score bajo hacia el día 7-8 disparan una intervención (mensaje personalizado o llamada) antes de que el trial expire sin haberlos activado.

**Por qué:** no todos los trials fallan por falta de interés en el producto — muchos fallan porque el usuario nunca activó el indicador o no entendió cómo usarlo, y eso se detecta y corrige a tiempo si se mide. Sin este score, el primer síntoma de un trial "muerto" es la no conversión el día 15, cuando ya es tarde para intervenir.

**Por qué no es frontend:** es instrumentación/proceso interno (tracking de actividad + regla de alerta), no una pieza visual.

**Cómo se mide:** correlación entre score bajo temprano y no-conversión; tasa de "rescate" (usuarios de score bajo que sí convirtieron tras la intervención).

**Esfuerzo estimado:** medio-alto (requiere definir qué señales son medibles hoy sin instrumentación nueva costosa — probablemente empezar solo con "asistencia a clases en vivo" + "actividad en WhatsApp" como proxies, ya que la actividad dentro de TradingView no es trackeable directamente).

---

## Experimento 3 — Oferta de conversión anticipada (día 10-12)

**Qué es:** ofrecer explícitamente la posibilidad de convertir a STANDARD/PRO/PREMIUM antes de que termine el trial (día 10-12 en vez de esperar al día 15), usando como gancho el precio de lanzamiento con fecha límite real y la continuidad sin interrupción del acceso (no hay "hueco" entre que expira el trial y se activa la membresía).

**Por qué:** una parte de los usuarios decide comprar antes del día 15 pero no tiene un CTA claro para hacerlo hasta que el trial ya expiró — se pierde el momento de mayor intención de compra por no ofrecer el paso siguiente a tiempo. Es una automatización de secuencia/oferta, no una landing nueva.

**Cómo se mide:** % de conversiones que ocurren antes del día 15 vs. en el día 15 o después; total de conversiones (antes vs. después de introducir la oferta).

**Esfuerzo estimado:** bajo (reutiliza la secuencia del Experimento 1 — es una variante de mensaje/CTA en el hito de día 10-12, no requiere infraestructura nueva).

---

## Priorización sugerida

1. **Experimento 1** primero — es la base de infraestructura (secuencia por hito) que los otros dos experimentos reutilizan.
2. **Experimento 3** segundo — se monta sobre la secuencia del Experimento 1 con esfuerzo bajo adicional.
3. **Experimento 2** tercero — requiere más definición de qué señales de engagement son medibles hoy.

Pendiente de validar con el usuario: qué herramienta de automatización de WhatsApp está disponible/aprobada (WhatsApp Business API, Manychat, u otra) antes de comprometer el Experimento 1 a una implementación específica.
