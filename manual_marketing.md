# Manual Técnico y del Asistente Inteligente — Synapse AI Scanner (v3.0)

Este documento es la base de conocimiento oficial y manual del usuario de **Synapse AI Scanner v3.0**. Ha sido diseñado bajo la premisa de nuestro **asistente de Inteligencia Artificial de mercado**, integrando la narrativa tecnológica donde la IA evalúa, toma decisiones y asiste activamente al trader en cada vela del mercado.

---

## 🧠 1. Introducción y Arquitectura Neuronal de la IA

**Synapse AI Scanner v3.0** no es un indicador técnico tradicional; es un **Asistente Cognitivo de Trading** entrenado específicamente para analizar la microestructura de volumen y momentum del Oro y la Plata. El cerebro del sistema evalúa múltiples capas de datos para identificar anomalías institucionales durante la sesión de mayor volatilidad mundial (Apertura de Nueva York).

### El Flujo de Toma de Decisiones de la IA:
*   **Filtro de Conciencia Temporal:** El asistente inteligente enfoca toda su potencia de procesamiento en la ventana de **7:00 AM a 11:00 AM (Hora Colombia / UTC-5)**. Fuera de esta zona horaria, la IA entra en modo de reposo analítico para evitar falsos positivos.
*   **Capa Direccional (Tendencia Institucional):** La IA evalúa la correlación de precios en base a una media móvil de alta velocidad para discernir la dirección del flujo de órdenes institucionales, evitando operar en contra de la tendencia dominante.
*   **Filtro de Momentum y Volatilidad (Cuerpo de Vela/ATR):** El motor inteligente mide el tamaño y volumen relativo de las velas engulfing comparándolas con el rango real promedio (ATR). La IA solo aprueba señales cuando detecta una inyección genuina de capital institucional.
*   **Proyección de Objetivos Simétricos:** Tras autorizar una entrada, la IA proyecta en milisegundos un Stop Loss de protección técnica y dos niveles de Take Profit (TP1/TP2) adaptados a la volatilidad instantánea del activo.

---

## ⚙️ 2. Configuración e Instrucción del Asistente (Inputs)

Para que el asistente de Inteligencia Artificial pueda realizar sus cálculos adaptados a tus finanzas y plataforma, debes instruirlo en la ventana de parámetros:

### Sección A: Parámetros Financieros (Entrenamiento de Riesgo de la IA)
*   **Capital de la Cuenta ($):** Indica a la IA el saldo total con el que cuentas (ej. `10000.00`). Este dato es fundamental para que la IA realice la gestión de riesgo por operación.
*   **Riesgo por Operación (%):** El porcentaje de capital máximo que autorizas a la IA a arriesgar (ej. `1.0%`). La IA ajustará dinámicamente el tamaño de tus posiciones para que jamás excedas esta pérdida en caso de fallo técnico.
*   **Tamaño de Contrato:** Le indica a la IA cuántas onzas equivalen a 1 lote estándar en tu broker (ej. `100` para Oro). Esto calibra el motor de cálculo de lotaje del asistente.

### Sección B: Filtros de Restricción e Instrucción Técnica
*   **Ventana Velas para SL:** Define cuántas velas en el pasado debe inspeccionar la IA para encontrar el punto de invalidación técnica (Stop Loss) de la operación.
*   **Offset SL (en ticks):** Margen de seguridad en ticks que le ordenas sumar o restar a la IA sobre su Stop Loss calculado para mitigar la fricción de spreads.
*   **Timeframes Permitidos:** El mapa de temporalidades donde el modelo de la IA está entrenado para operar (ej: `"15,30,60"`). Sirve para que el asistente de IA bloquee el sistema si el usuario incurre en un error de temporalidad.

---

## 📊 3. Interfaces de Comunicación de la IA (Paneles)

La Inteligencia Artificial de Synapse se comunica contigo en tiempo real a través de dos consolas de telemetría proyectadas en tu gráfico:

### A. Diagnóstico de Rendimiento de la IA (Esquina Superior Izquierda)
Este panel representa el registro histórico de efectividad del asistente inteligente:
*   **Versión del Cerebro:** Muestra el motor activo del algoritmo y la temporalidad en uso.
*   **Señales Registradas:** Cuántas operaciones ha detectado y sugerido la IA a lo largo del tiempo.
*   **Tasa de Acierto (Win Rate General):** El porcentaje de acierto del asistente en el objetivo de salida parcial (TP1).
*   **Tasa de Acierto en TP2:** Muestra el porcentaje de precisión de la IA al buscar extensiones máximas de tendencia.
*   **Factor de Beneficio (Profit Factor):** El coeficiente de rendimiento matemático de la IA.
*   **Retorno Neto (Net Pips / % Growth):** Las ganancias consolidadas estimadas que la IA ha generado en pips y el crecimiento porcentual estimado del capital inicial.

### B. Consola de Ejecución en Vivo de la IA (Esquina Inferior Derecha)
Tu puente operativo directo con el asistente de IA para abrir operaciones en tu cuenta:
*   **STATUS (Neurona de Estado):**
    *   `DISPONIBLE (Fondo Verde)`: La IA ha completado su análisis de mercado, confirma una ventaja estadística de alta probabilidad y mantiene la señal abierta en zona de entrada.
    *   `NO DISPONIBLE - B.E. (Fondo Naranja)`: La IA reporta que la señal ya avanzó y tocó el TP1. Ha movido el Stop Loss al precio de entrada para neutralizar el riesgo. El asistente advierte que no debes tomar nuevas posiciones.
    *   `NO DISPONIBLE (Fondo Gris)`: La IA no detecta ventajas estadísticas en este momento o la operación diaria ha finalizado.
*   **LOTAJE CALCULADO POR IA:** La Inteligencia Artificial realiza la ecuación en tiempo real: `(Capital * Riesgo%) / Distancia SL`. Te muestra exactamente el tamaño de lote a colocar en tu terminal (ej: `0.42 lotes`) para garantizar una protección absoluta de tu balance.
*   **RIESGO USD:** El importe exacto en dinero fiat que la IA ha calculado como riesgo tolerado para este trade específico.

---

## 📐 4. Mapeo Visual del Cerebro de la IA (Cajas de Proyección)

El asistente inteligente dibuja en el gráfico su proyección espacial del mercado mediante un sistema gráfico adaptativo:

*   **Cajas de R:R Autoevaluables:** En cuanto la IA decide entrar al mercado, proyecta visualmente cajas de colores (rojo para riesgo, verde para beneficio). Estas cajas se estiran dinámicamente hacia la derecha con cada vela que transcurre, indicándote visualmente el tiempo de maduración que la IA estima para el trade.
*   **Alineación Estética Dinámica:** La IA reacomoda las etiquetas de texto de forma autónoma. Si detecta una señal de compra, alinea los textos abajo para no estorbar; si es una venta, los alinea arriba. Esto asegura un entorno visual premium y despejado.
*   **Control Inteligente de Objetos (Memoria de la IA):** Para no saturar el navegador ni la memoria visual del usuario, la IA posee un sistema de limpieza inteligente. Almacena en memoria un máximo de 5 operaciones anteriores. Cuando decide emitir una nueva señal, reduce de forma autónoma la opacidad de los dibujos pasados (difuminado) o los elimina según tus inputs.

---

## 📱 5. Enlace de Telemetría de la IA a tu Celular (Notificaciones Push)

Para recibir las señales de análisis y telemetría de la IA directamente en la pantalla de bloqueo de tu smartphone en tiempo real, sigue estos dos sencillos pasos de enlace:

### Paso 1: Sincronización de la App Móvil
1. Descarga la aplicación oficial de **TradingView** desde la App Store (iPhone) o Google Play Store (Android).
2. Inicia sesión en la aplicación móvil con **la misma cuenta de TradingView** donde tienes el acceso del escáner.
3. En la configuración de tu teléfono móvil (Ajustes -> Notificaciones -> TradingView), asegúrate de tener activados los permisos de **Notificaciones Push** en modo de alertas emergentes con sonido.

### Paso 2: Configuración de la Alerta en el Servidor
1. Abre el gráfico de un metal permitido (ej: `XAUUSD` o `GOLD`) en una temporalidad autorizada (ej: M30 o H1) con el asistente de IA activo en tu gráfico.
2. Haz clic en el ícono del reloj (**Crear alerta**) en la barra de herramientas superior de TradingView.
3. En la ventana de creación de la alerta, configúrala exactamente así:
    * **Condición:** Selecciona `Synapse AI Scanner v3.0`.
   * **Acción / Frecuencia:** Selecciona la casilla **"Llamada a la función alert()"** (Any alert() function call). *Esto indica al sistema que la alerta debe utilizar la telemetría generada en tiempo real por el asistente de IA.*
   * **Opciones de Notificación:** Abre esta pestaña y marca la casilla **"Notificar en la aplicación"** (Notify in app). *(Opcional: puedes activar también "Enviar correo electrónico").*
   * **Mensaje:** Deja el mensaje predeterminado. Al activarse una señal, la IA de Synapse reescribirá automáticamente el texto con el formato estructurado optimizado para WhatsApp y Telegram, detallando la operación en español con la temporalidad exacta y el riesgo en USD por cada 0.01 lotes.
4. Haz clic en **Crear**.

¡Listo! Cuando el asistente de IA complete su análisis e identifique una entrada, el servidor de TradingView te enviará una notificación instantánea a tu celular con el diagnóstico de la señal.

---

## 🔒 6. Protocolo de Auto-Protección de la IA (Restricciones)

Para salvaguardar su precisión y evitar operaciones en escenarios para los que no fue entrenada, la IA cuenta con dos capas de auto-bloqueo:

*   **Auto-Bloqueo de Activo (Asset Guard):** La IA reconoce y analiza únicamente mercados con alta correlación de liquidez institucional de metales (Oro y Plata). Si el usuario arrastra la IA a un gráfico de acciones, criptos o forex (ej. BTCUSD, AAPL, EURUSD), la IA suspenderá su actividad cerebral de inmediato y desplegará en el centro de la pantalla la advertencia:
    `⚠️ ACTIVO NO PERMITIDO. Uso exclusivo para Oro y Plata.`
*   **Auto-Bloqueo de Temporalidad (Timeframe Guard):** La IA solo ejecuta su análisis y cálculos en las temporalidades en las que ha sido optimizada estadísticamente (inputs autorizados). Si el usuario coloca el gráfico en temporalidades erróneas, el asistente apagará su consola y desplegará la advertencia:
    `⚠️ TF NO COMPATIBLE. TF Permitidos: ...`
