# Campaña — Adquisición en vivo

> Mantenido por `/product`. Carpeta operativa de la campaña publicitaria en curso (invitación al trial de 15 días). Aquí vive **lo que está pasando de verdad**: números medidos, no proyecciones. Las proyecciones viven en `../Finanzas/`.

## Regla de esta carpeta

**Solo entra dato observado.** Si un número no salió de contar personas reales, no va aquí — va a `../Finanzas/` marcado como supuesto. Esta carpeta es el contrapeso empírico del modelo financiero.

## Mapa

```
metricas_embudo.md            ← Definición de las etapas del embudo + registro de lo medido hasta hoy (fuente de verdad de conversión real)
creativos_oferta_tripwire.md  ← Base de producción de creativos (imagen + video) para la oferta de entrada de $3 — narrativa, conceptos, prompts y guiones, 7 mercados LATAM sin Colombia
guiones_meli_juan.md          ← Los 8 guiones a cámara listos para grabar (reparto Meli/Juan) + reglas de compliance Meta y tabla de sustitución léxica
landing_trial_meta.md         ← Brief para /front: reposicionamiento de la landing hacia conversión a trial sin que Meta clasifique el dominio como servicios financieros
```

## Estado

- **Campaña activa** desde agosto 2026. Objetivo del anuncio: inscripción al trial de 15 días.
- **Primer dato duro (2026-08-13):** 15 personas llegadas → 5 reclamaron el trial (33.3%).
- **Aún sin dato:** ninguna cohorte de trial ha cumplido los 15 días, así que la métrica norte (`trial → pago`) todavía no tiene un solo punto de medición.

## Pendientes de instrumentación

- [ ] Definir con precisión qué evento es "persona llegada" (impresión, clic, o lead con formulario enviado) — hoy el 33.3% no es interpretable sin esto. Ver `metricas_embudo.md` §1.
- [ ] Registrar la fecha de alta de cada trial para poder cerrar cohortes al día 15.
- [ ] Preguntar a los que NO reclamaron el trial por qué no — son 10 de 15, el número más grande del embudo.
