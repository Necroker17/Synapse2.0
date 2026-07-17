# Estructura de contenido — Área de miembros Hotmart

> Mantenido por `/product`. Versión 3 (2026-07-12) — misma base simplificada del 2026-07-10, enriquecida con los elementos rescatados de `propuesta_modulo_skool.md` (documento previo hecho para Skool, ver comparación abajo). Objetivo único: que un usuario **sin conocimiento previo** aprenda a operar con el indicador — seguir señales y no sabotearlas. No enseña la lógica interna del indicador (EMA, engulfing, ATR, etc.) — eso queda fuera del alcance del alumno.

## 0. Decisión de plataforma (resuelta)

**Decisión oficial (2026-07-12):** la educación completa vive en **Hotmart Club**, no en Skool. Skool se da de baja (`../Finanzas/financial_model.md` §1.1). Ya se puede empezar a producir contenido real.

## 0.1 Qué se rescató de `propuesta_modulo_skool.md` y qué no

Rescatado: guion con gancho emocional antes que el setup técnico, CTA de compromiso por lección, la "Regla del Stop Diario", la advertencia de "mentalidad a 100 trades", y la bitácora como entregable descargable concreto. Descartado por decisión explícita de simplicidad: el módulo de lógica algorítmica (EMA/engulfing/ATR) — el alumno no necesita entenderlo. También se corrigió una referencia obsoleta a señales VIP en H1 — el producto solo opera M15 (`../../../manual_Strategy.md`).

---

## Los 3 módulos

### Módulo 1 — Enciende tu IA
Instalar el indicador y activar las alertas en el celular. Un solo objetivo: que le llegue su primera notificación push.

- **Lección 1.1 — El gancho (abre el módulo, antes de cualquier setup):** "¿Cuántas veces cerraste el día en pérdida sabiendo exactamente qué debías hacer, pero la emoción ganó?" → el autosabotaje es lo normal, no una falla personal → Synapse AI es el copiloto que decide con matemática en vez de emoción, para que tú no tengas que adivinar.
  *CTA:* comenta "me comprometo a no tocar el lotaje ni operar fuera de la sesión de NY estos 15 días."
- **Lección 1.2 — Instalación y vínculo de alertas:** paso a paso ya escrito en `../../manual_marketing.md` §5, reutilizable tal cual.
  *CTA:* sube una captura de tu alerta activa para confirmar que quedaste configurado.
- **Lección 1.3 — Cómo leer el semáforo:** verde = hay señal activa, naranja = ya tocó el primer objetivo, gris = no hay nada que hacer ahora.

### Módulo 2 — Cuando te llegue una alerta, haces esto
Las 4 notificaciones de WhatsApp que puede recibir y la única acción correspondiente a cada una — sin explicar el porqué técnico, solo la instrucción:
- **Entrada nueva:** abre la operación con el lotaje que te muestra la IA. Nada más.
- **TP1 tocado:** ya aseguraste ganancia en la mitad. No toques el Stop Loss, no cierres el resto.
- **TP2 tocado / Cierre en B.E. / Cierre por tiempo:** la operación terminó sola. No hay nada que decidir.

### Módulo 3 — La única regla que importa: no la toques
Disciplina mínima viable, sin teoría de psicología — 4 errores que arruinan el sistema y la instrucción contraria a cada uno:
- Mover el Stop Loss manualmente → no se toca, nunca.
- Cerrar una operación antes de tiempo por miedo → se deja correr, la IA ya calculó el riesgo.
- Abrir una operación fuera de la señal de la IA (por FOMO) → solo se opera lo que la IA marca.
- **No respetar la Regla del Stop Diario** → apaga la pantalla después de **1 ganancia en TP1/TP2 o 2 pérdidas seguidas** en el día. No hay una quinta oportunidad ese día.
- Checklist de 1 minuto antes de cada sesión (7:00 AM para Nueva York, 6:00 PM para Asia): ¿tengo las alertas activas? ¿configuré bien mi capital y riesgo%? Nada más.

**Nota de cierre del módulo — mentalidad a 100 trades:** no juzgues el sistema por las primeras 5-10 señales. Una racha corta de pérdidas o de aciertos no dice nada por sí sola; la IA se evalúa en el largo plazo, no en la primera semana. (Esta nota es la más importante del módulo para la retención — previene el abandono del trial por una mala racha temprana.)

**Entregable del módulo:** bitácora descargable (Notion/Excel) con 3 campos por operación: qué señal llegó, qué sentiste antes de seguirla, si la seguiste tal cual o no. No es teoría de journaling — es el registro que sostiene la Regla del Stop Diario y la mentalidad a 100 trades con datos propios del usuario.

---

## Mapa módulo → plan

Los 3 módulos se entregan completos desde el trial — es todo lo que un usuario necesita para operar. PRO y PREMIUM no agregan módulos nuevos de aprendizaje, solo sus entregables ya definidos en `../Pricing_y_Pagos/pricing_strategy.md` (señales VIP, soporte prioritario, Grupo Elite) — no requieren contenido educativo adicional.

## Checklist de producción

- [ ] Guion completo de las 5 lecciones (texto de video) — próxima sesión.
- [ ] Producir la plantilla de bitácora (Notion o Excel, decidir formato).
- [ ] Configurar los 3 módulos en Hotmart Club (módulos collapse, ruta lineal) una vez exista la cuenta/producto creado en Hotmart.
