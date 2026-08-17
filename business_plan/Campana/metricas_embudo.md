# Métricas del embudo — datos observados

> Mantenido por `/product`. Registro de conversión **real** de la campaña. Toda cifra aquí tiene fecha y tamaño de muestra. Prohibido escribir un porcentaje sin el `n` al lado.

---

## 1. Las etapas del embudo (definiciones)

El embudo tiene cinco etapas. Hoy solo medimos la transición 2→3.

| # | Etapa | Evento que la marca | ¿Medida hoy? |
|---|---|---|---|
| 1 | **Impresión** | El anuncio se muestra | ❌ (vive en el panel de ads) |
| 2 | **Llegada** | La persona aterriza en el punto de captación | ⚠️ **definición ambigua — ver abajo** |
| 3 | **Trial reclamado** | La persona completa el alta y recibe acceso en TradingView | ✅ |
| 4 | **Trial activo día 15** | Llega al final del trial sin abandonar | ❌ (ninguna cohorte ha cumplido 15 días) |
| 5 | **Pago** | Compra STANDARD/PRO/PREMIUM | ❌ |

**⚠️ Ambigüedad bloqueante en la etapa 2.** Las "15 personas" pueden ser tres cosas muy distintas: gente que hizo clic en el anuncio, gente que abrió la conversación de WhatsApp, o gente que envió el formulario de Google. El 33.3% significa algo completamente diferente en cada caso:

- Si son **clics**, 33.3% es un resultado excelente.
- Si son **conversaciones abiertas**, 33.3% es normal.
- Si son **formularios enviados** (gente que ya dio nombre, correo y teléfono), 33.3% es **malo** — significa que 2 de cada 3 personas que ya hicieron el trabajo difícil se cayeron en el paso administrativo de activar el acceso, que es un problema de fricción operativa, no de marketing.

Sin cerrar esta definición no se puede decidir dónde invertir. Es la primera pregunta a resolver.

---

## 2. Lo medido

### Cohorte 1 — agosto 2026

| Métrica | Valor | n |
|---|---|---|
| Llegadas | 15 | — |
| Trials reclamados | 5 | 15 |
| **Tasa de reclamo** | **33.3%** | 15 |
| Trials que llegaron al día 15 | *(sin cerrar)* | — |
| Conversión a pago | *(sin dato)* | — |

---

## 3. Cómo leer el 33.3% (importante)

**El número es real pero todavía no es planificable.** Con 5 éxitos en 15 intentos, el intervalo de confianza al 95% va de **15.2% a 58.2%** (Wilson). Es decir: la tasa verdadera podría ser la mitad de lo observado, o casi el doble. Ambas cosas son compatibles con los datos de hoy.

Consecuencia práctica: **no construir el modelo financiero sobre 33%.** Si se necesita un número para proyectar, usar el extremo pesimista (15%) y tratar cualquier cosa mejor como upside. Un plan que solo funciona si la tasa es 33% es un plan que tiene ~50% de probabilidad de estar mal.

Para estrechar el rango hace falta volumen: con ~100 llegadas el intervalo baja a unos ±9 puntos, que ya sirve para decidir.

**Lo que sí se puede afirmar hoy:** 10 de 15 personas no reclamaron el trial. Independientemente de la precisión estadística, esa es la fuga más grande del embudo y es la única que se puede investigar **preguntando**, sin esperar más volumen. Cinco conversaciones con gente que no activó valen más que otras 100 impresiones.

---

## 4. El dato que falta y que decide todo

La métrica norte oficial (`ESTRATEGIA.md` §1) es **trial → pago**, y hoy vale `null`. Ninguna cohorte ha cumplido 15 días.

Referencia externa para calibrar expectativas: en SaaS, los trials **sin tarjeta de crédito** ("opt-in", que es el caso de Synapse) convierten entre 9% y 25% según el estudio, con mediana alrededor de 14%. Los trials **con tarjeta al inicio** ("opt-out", se cobra solo si no cancelas) convierten entre 31% y 60%.

Esa diferencia — 3 a 4 veces — es la palanca más grande que existe en el embudo, y es una decisión de diseño, no de esfuerzo. Está desarrollada en `../Pricing_y_Pagos/oferta_definitiva.md` §6.

**Advertencia de traslado:** estos benchmarks son de SaaS, no de herramientas de trading, y el público de Synapse es más frío y más escéptico que el de un software B2B. Sirven para ordenar magnitudes y para comparar opt-in vs opt-out entre sí; **no** para poner una meta.

---

## 5. Registro de cambios

| Fecha | Cambio |
|---|---|
| 2026-08-13 | Creación. Primer dato de campaña cargado (5/15). |
