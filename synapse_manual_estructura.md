# Manual Oficial de Operación y Disciplina — Estructura Completa

> Consolida la propuesta original del Manual (v1.0) con los módulos que le faltaban para que una persona pueda instalar el indicador y llegar sola a su primera operación bien ejecutada.
>
> **Cuándo se entrega:** al instalar el indicador, no al registrarse. Es el momento de máxima intención — ya tiene el indicador en pantalla y quiere usarlo. Entregado antes, se archiva sin abrir.
>
> **Por qué el manual y no el grupo:** el trial es continuo y la gente entra cualquier día, así que cualquier currículo publicado en el grupo llega a destiempo. El manual es autoguiado: cada persona empieza en su paso 1. El grupo acompaña, el manual enseña (`business_plan/Infraestructura/estructura_grupos_whatsapp.md` §2). Más adelante todo esto migra al school.

## El hueco que tenía la v1.0

La propuesta original saltaba de "qué es Synapse" (Módulo 2) directo a "gestión del riesgo" (Módulo 3), sin explicar nunca **cómo instalarlo, cómo leer una alerta ni qué estrategia elegir**. Es decir: enseñaba la filosofía y los errores, pero no el uso. Justo el tramo donde se pierde el 45% que nunca llega a operar.

Los módulos **3, 4 y 5 son nuevos** y cubren ese tramo.

---

## Estructura final · 11 módulos

| # | Módulo | Estado | Qué resuelve |
|---|---|---|---|
| 1 | Bienvenida a Synapse | v1.0 | Marca, filosofía: *"la disciplina vale más que cualquier indicador"* |
| 2 | Qué es y qué NO es | v1.0 | Expectativas: qué hace, qué no hace, qué esperar y qué no |
| **3** | **Instalación y configuración** | 🆕 | Dejarlo andando: TradingView, alertas activas, notificación al celular |
| **4** | **Cómo leer una alerta** | 🆕 | Entrada, SL, TP1, TP2 y qué significa cada número en dólares |
| **5** | **Elige tu estrategia** | 🆕 | TP1 o TP2 · y si usa break-even o no. **La decisión central del sistema** |
| 6 | Gestión del Riesgo | v1.0 ⚠️ | Cuánto capital hace falta y por qué el riesgo es fijo |
| 7 | Interpretación de resultados | v1.0 ⚠️ | Leer win rate y profit factor sin falsas expectativas |
| 8 | Los 7 Errores Más Frecuentes | v1.0 | Cada error con su forma correcta |
| 9 | Casos Prácticos | v1.0 | Trader A respeta el plan · Trader B no |
| 10 | Checklist Antes de Operar | v1.0 | Consulta rápida en el momento de ejecutar |
| 11 | Contrato del Trader Synapse | v1.0 | Compromiso simbólico de cierre |

---

## Los tres módulos nuevos

### Módulo 3 · Instalación y configuración

El módulo que hoy no existe y sin el cual nada del resto importa.

1. Agregar el indicador en TradingView (invite-only ya concedido).
2. Configurarlo en **XAUUSD, temporalidad M15**.
3. Activar las alertas y verificar que lleguen al celular.
4. **Verificación:** *"si ves esto en pantalla, ya está andando."*
5. Qué hacer si algo falla, y a dónde escribir.

> El punto 4 es el más importante del módulo. La encuesta recogió literalmente *"dificultades técnicas"* y *"ni lo he usado"*: la persona necesita una confirmación visual inequívoca de que quedó bien instalado, no una instrucción más.

### Módulo 4 · Cómo leer una alerta

La alerta anotada, campo por campo, con su equivalente en dólares:

| Campo | Qué es | A 0.01 lotes |
|---|---|---|
| Entrada | Precio de apertura | — |
| Stop Loss | 160 pips | **$16** — lo máximo que puedes perder |
| TP1 | 160 pips | **$16** |
| TP2 | 320 pips totales | **$32** |

Cierra con la idea que sostiene todo el sistema: **el riesgo se conoce y se acepta antes de entrar, no durante.**

### Módulo 5 · Elige tu estrategia

El módulo más importante del manual, y el que hoy no existe en ninguna parte.

| | **Estrategia TP1** | **Estrategia TP2** |
|---|---|---|
| Cierra en | 160 pips | 320 pips |
| Ganancia por acierto | $16 | $32 |
| Win rate | 60% | 40% |
| Cada 10 operaciones | 6 ganadas · 4 perdidas | 4 ganadas · 6 perdidas |
| Resultado | +$96 − $64 = **+$32** | +$128 − $96 = **+$32** |

**Las dos dejan exactamente lo mismo.** La diferencia no está en el dinero, está en lo que cada una exige: TP1 gana más seguido y es emocionalmente sostenible; TP2 gana el doble por acierto pero pierde 6 de cada 10, con rachas perdedoras más largas.

**El peor resultado posible es elegir TP2 y abandonarla a mitad de camino:** te comes las pérdidas de TP2 sin quedarte para cobrar sus ganancias.

**El break-even es la tercera decisión, y es opcional.** Protege —una operación que se iba a stop cierra en $0— pero cuesta: una que baja, no toca el stop y después sí llega a TP, se cierra en $0. Saca de operaciones que habrían ganado. Los win rates de la tabla son **sin** break-even.

El módulo termina pidiendo que la persona **escriba cuál eligió**. Esa decisión se declara después en el grupo, donde se vuelve compromiso público.

---

## Dos correcciones a módulos de la v1.0

### Módulo 6 · Gestión del Riesgo ⚠️

**Invertir la tabla.** El riesgo es **fijo en $16** porque 0.01 es el lote mínimo. La variable no es cuánto arriesgar, es cuánto capital hace falta:

| Capital | Riesgo/operación | % del capital | Operaciones de margen |
|---|---|---|---|
| **$160** | $16 | 10% | 10 — mínimo para operar |
| **$500** | $16 | 3,2% | 31 |
| **$1.000** | $16 | 1,6% | 62 |

$160 es el **mínimo para empezar**, no el recomendado. Y como TP2 pierde 6 de cada 10 con rachas más largas, con $160 la estrategia natural de arranque es TP1.

**Quitar la línea *"Ganancia estimada: 80 USD mensuales"*.** Sobre una cuenta de $320 es un 25% mensual proyectado, impreso en el documento oficial que recibe cada usuario nuevo. Choca con el compromiso de no prometer rentabilidades y contradice el objetivo declarado del propio manual de evitar falsas expectativas.

### Módulo 7 · Interpretación de resultados ⚠️

**Nunca decir "60%" a secas.** Un 60% y un 40% mencionados juntos, sin decir a qué estrategia pertenecen, se leen como un 100% de efectividad. La fórmula segura siempre nombra la estrategia: *"operando a TP1, 6 de cada 10 operaciones son ganadoras"*.

---

## Cómo se conecta con los grupos

| Módulo | Dónde reaparece |
|---|---|
| 5 · Elige tu estrategia | Grupo 3: cada cliente declara la suya al entrar y el grupo se la recuerda |
| 8 · Los 7 errores | Grupo 3, recordatorio de disciplina de los miércoles · Grupo 2, serie de autosabotaje |
| 10 · Checklist | Mensaje fijado permanente del Grupo 3 |
| 11 · Contrato | Cierre del onboarding en el Grupo 1 |

## Pendientes

1. Producir los módulos 3, 4 y 5.
2. Aplicar las dos correcciones a los módulos 6 y 7.
3. Asociar videos del school a cada módulo, a medida que existan.
4. Revisar la promesa de *"break-even automático"* en copy ya publicado (landing, estructura de alerta, skill `synapse-escenarios`): en realidad lo gestiona cada persona.
