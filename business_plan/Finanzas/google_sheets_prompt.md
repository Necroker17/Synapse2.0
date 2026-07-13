# Prompt listo — Modelo Financiero en Google Sheets

> Guardar aquí hasta que la conexión de Claude Code con Google Sheets esté lista. Pegar tal cual (ajustando la ruta si el repo se mueve) en una sesión que ya tenga el MCP de Sheets conectado.

---

Actúa como analista financiero. Vas a construir un modelo financiero en Google Sheets para Synapse AI Scanner a partir de tres documentos fuente en este repo — léelos primero, no inventes ningún dato que no esté ahí:

1. `indicators/v3-SynapseAI_Scanner/marketing/business_plan/Pricing_y_Pagos/pricing_strategy.md` — precios y duración de los 3 planes (STANDARD/PRO/PREMIUM).
2. `indicators/v3-SynapseAI_Scanner/marketing/business_plan/Embajadores/ambassador_program.md` — estructura de comisión de embajadores (50% primera venta, 25% re-consumos en adelante).
3. `indicators/v3-SynapseAI_Scanner/marketing/business_plan/Finanzas/financial_model.md` — las fórmulas exactas de margen y proyección, y la lista de variables de costo/volumen que AÚN NO tienen valor confirmado.

Crea una hoja de Google Sheets nueva con estas pestañas:

**Pestaña "Inputs"**
Todas las variables de la sección 1 y 4 de `financial_model.md` como celdas editables, resaltadas (fondo amarillo) porque hoy no tienen valor real: `fee_pago`, `costo_soporte_mensual`, `costo_herramientas_mensual`, `costo_fijo_mensual_negocio`, `trials_iniciados_mes`, `tasa_conversion_trial_pago`, `mix_planes` (3 celdas: % STANDARD/PRO/PREMIUM que sumen 100%), `%_ventas_via_embajador`, `tasa_reconsumo`. Pon un valor de ejemplo neutro (ej. 0) en cada una y dime explícitamente en el chat cuáles debo llenar con datos reales antes de confiar en el resultado.

**Pestaña "Margen por Venta"**
La matriz de 18 filas de la sección 3 de `financial_model.md` (3 planes × 3 tipos de venta × 2 niveles de precio), con las fórmulas de la sección 2 aplicadas como fórmulas de Sheets referenciando la pestaña Inputs — no como números fijos. Añade una columna de margen neto en % además del margen en USD. Resalta la fila de PREMIUM + re-consumo + precio oficial como el "escenario a vigilar".

**Pestaña "Proyección Mensual"**
La fórmula de la sección 4 de `financial_model.md` aplicada mes a mes para un horizonte de 12 meses, con columnas: clientes nuevos, clientes vía embajador vs. directos, ingreso bruto, comisión pagada, costos operativos totales, margen neto. Todo debe recalcularse solo si cambio cualquier celda de Inputs.

**Pestaña "Escenarios"**
Tres columnas lado a lado (Conservador / Base / Optimista) que dupliquen los inputs de volumen (`trials_iniciados_mes`, `tasa_conversion_trial_pago`, `tasa_reconsumo`) con valores distintos por escenario, y muestren el margen neto anual resultante de cada uno en una fila resumen al final.

Reglas duras:
- No inventes ningún número de costo o de volumen — todo input sin dato real debe quedar en 0 o vacío y marcado en amarillo.
- Todas las fórmulas deben ser fórmulas vivas de Sheets (referencias de celda), nunca valores pegados como texto.
- Al terminar, dame la lista exacta de celdas de Inputs que debo llenar con datos reales del negocio, en el orden en que más impactan el resultado.
