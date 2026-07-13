# Mejores prácticas — Hotmart Club (área de miembros)

> Mantenido por `/product`. Investigación (2026-07-10) sobre cómo estructurar un producto de membresía/curso en Hotmart para maximizar la métrica norte del negocio: **% de trials que llegan al día 15 y convierten a pago** (`../../ESTRATEGIA.md` §1).

---

## 1. Cómo se organiza el contenido en Hotmart Club

- La unidad de organización es el **módulo** — agrupa clases en distintos formatos: texto, video, transmisiones en vivo, quizzes y anuncios.
- Tipos de módulo disponibles:
  - **Módulo principal:** incluido en la compra; puede ofrecerse gratis como muestra para prospectos (útil como imán de conversión en la landing o el trial).
  - **Módulo adicional:** desbloqueado sin costo extra para quien ya compró (ideal para el upsell STANDARD→PRO→PREMIUM, que ya es acumulativo por diseño — ver `../Pricing_y_Pagos/pricing_strategy.md`).
  - **Módulo adicional pago:** contenido exclusivo que se desbloquea con pago aparte (no aplica a nuestro modelo hoy, planes ya son acumulativos).
- **"Píldoras de contenido":** piezas reutilizables que se insertan en varias clases sin duplicar producción — sirve para reutilizar, por ejemplo, la explicación del "espacio para respirar" (break-even) en varios módulos sin regrabar.
- **Módulos Collapse:** al entrar, un solo módulo queda abierto y el resto colapsado — fuerza una ruta de aprendizaje lineal en vez de que el usuario salte al azar y se pierda.

## 2. Onboarding — la primera experiencia importa más que el volumen de contenido

- El onboarding es el primer contacto real del alumno con el curso tras la compra; una buena primera experiencia reduce la inseguridad, ordena los próximos pasos y aumenta fuertemente la continuidad en los primeros días — el tramo más crítico para la retención.
- **Concepto de "quick win":** el alumno necesita sentir progreso real en los primeros días. Los primeros módulos deben ser **cortos, directos y con transformación percibida inmediata** — no una introducción teórica larga.
- Aplicado a nuestro embudo: el trial ya dura 15 días (decisión oficial) — el quick win debe caer en las primeras 48-72h del trial, no al final. Esto es directamente la métrica norte: si el "quick win" llega tarde, el trial se abandona antes del día 15.

## 3. Por qué se abandona un curso (y cómo se previene)

- Las causas principales de abandono: falta de enganche, expectativas mal alineadas al inicio, y poca interacción a lo largo del curso.
- El soporte inexistente convierte dudas en barreras, y las barreras en abandono — reforzar el rol del WhatsApp abierto (ya parte del embudo) como canal de soporte activo, no solo de prueba social.
- **Feedback por módulo:** una pregunta simple al final de cada módulo ("¿qué podría mejorar de este módulo?") revela fricciones de claridad, ritmo o profundidad antes de que se traduzcan en abandono — barato de implementar (encuesta nativa de Hotmart Club), alto valor de señal temprana.
- **Intervención temprana:** los datos de customer success muestran que intervenir con un alumno inactivo antes del día 14 de inactividad tiene 3-5x más éxito que intervenir después del día 30 — refuerza que la secuencia de WhatsApp por hito del Experimento 1 (`../Crecimiento/product_growth_tasks.md`) debe disparar *dentro* de la ventana de 15 días del trial, no después.
- Hotmart Club trae reportes nativos de progreso/engagement por alumno y soporta gamificación y tracking de avance — usar esos reportes como fuente de datos para el trial health score ya listado en el backlog de growth.

## 4. Estructura recomendada de contenido de trading/psicología (referencia externa)

Cursos de psicología de trading bien valorados incluyen, como mínimo:
- Fundamentos de psicología del trading (qué son los sesgos cognitivos, por qué el cerebro sabotea el plan).
- Reconocimiento de emociones y patrones de autosabotaje específicos (revenge trading, FOMO, sobreoperar).
- Técnicas de control emocional aplicadas (journaling, respiración, checklist pre-operación).
- Métodos para sostener la disciplina diaria — no solo teoría, sino rutina.
- Revisión de operativa real con análisis emocional (aplicado a nuestro caso: revisar señales reales del scanner y el estado emocional del trader en ese momento).

Esto valida — con fuente externa, no solo con nuestra intuición de marca — que el ángulo aprobado de autosabotaje (`../../ESTRATEGIA.md` §2) es contenido de valor real y no solo un gancho de copy: es la estructura curricular estándar de la categoría, y lo distintivo de Synapse es que la IA reemplaza la parte más frágil de ese proceso (la decisión en caliente) en vez de solo enseñar a resistirla con fuerza de voluntad.

## 5. Traducción directa a decisiones de estructura (aplicadas en `estructura_contenido.md`)

1. Módulo 1 debe ser corto y entregar un quick win verificable en las primeras 48-72h del trial (no una introducción larga a la IA).
2. Ruta lineal con módulos collapse — evita que el usuario se pierda entre teoría de psicología, teoría de la IA y ejecución práctica.
3. Un checkpoint de feedback por módulo (pregunta simple) para detectar fricción antes del día 15.
4. La revisión de operativa real con journaling emocional es un módulo recurrente (no un módulo único), pensado para sostenerse durante toda la vigencia del plan (STANDARD/PRO/PREMIUM), no solo el trial.
