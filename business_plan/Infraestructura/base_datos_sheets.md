# Google Sheets DB — Estructura de Base de Datos y Contabilidad

> Mantenido por `/product`. Este documento define la arquitectura exacta de la hoja de cálculo en Google Sheets que servirá como base de datos de usuarios, registro contable de cobros y panel de control de comisiones y repartos del negocio.

---

## 1. Diseño de Pestañas y Columnas

La hoja de cálculo de Google Sheets debe contener exactamente las siguientes 4 pestañas para mantener el orden de la información.

### Pestaña 1: `DB_Usuarios` (Base de Datos Maestra)
Esta pestaña registra a todos los usuarios que inician un trial o compran un plan. Cada fila es un usuario único.

| Columna | Nombre de Columna | Formato / Tipo | Descripción / Fórmula |
|---|---|---|---|
| **A** | `ID_Usuario` | Texto | Código autoincremental: `USR-0001`, `USR-0002`... |
| **B** | `Fecha_Registro` | Fecha y Hora | YYYY-MM-DD HH:MM:SS (registrado por Make) |
| **C** | `Nombre` | Texto | Nombre completo ingresado por el usuario |
| **D** | `Email` | Texto (Llave única) | Correo electrónico principal del cliente |
| **E** | `WhatsApp` | Texto | Formato internacional: `+573001234567` |
| **F** | `TradingView_Username` | Texto | Nombre exacto en TradingView (¡sensible a mayúsculas/minúsculas!) |
| **G** | `Status` | Lista desplegable | `Trial_Pendiente`, `Trial_Activo`, `Trial_Vencido`, `Membresia_Activa`, `Membresia_Vencida`, `Reembolsado`, `Error_Username` |
| **H** | `Plan_Actual` | Lista desplegable | `Trial`, `STANDARD`, `PRO`, `PREMIUM` |
| **I** | `Fecha_Inicio` | Fecha | YYYY-MM-DD (fecha en que arranca el plan/trial actual) |
| **J** | `Fecha_Fin` | Fecha | YYYY-MM-DD (fecha en que expira el plan/trial actual) |
| **K** | `ID_Transaccion_Hotmart` | Texto | ID de transacción de Hotmart (vacío si es trial) |
| **L** | `ID_Embajador` | Texto | Código del embajador que refirió (ej: `EMB-001`). Vacío si es directa. |
| **M** | `Notas` | Texto | Observaciones de soporte (ej. "Tenía typo en username") |
| **N** | `Ultima_Actualizacion` | Fecha y Hora | Fecha del último cambio en la fila |

---

### Pestaña 2: `Historial_Pagos` (Contabilidad y Margen Bruto)
Cada fila representa un cobro procesado por Hotmart. Es el registro de caja del negocio.

| Columna | Nombre de Columna | Formato | Descripción / Fórmula |
|---|---|---|---|
| **A** | `ID_Pago` | Texto | Código único de control: `PAG-0001`, `PAG-0002`... |
| **B** | `Fecha_Transaccion` | Fecha | Fecha en que Hotmart aprobó el pago |
| **C** | `Email_Cliente` | Texto | Cruzable con `DB_Usuarios` |
| **D** | `Producto_Plan` | Lista | `STANDARD`, `PRO`, `PREMIUM` |
| **E** | `Precio_Vendido_USD` | Moneda ($) | Precio bruto pagado por el cliente (ej: `$197.00`) |
| **F** | `Fee_Pasarela_USD` | Moneda ($) | **Fórmula:** `=ROUND((E2 * 0.099) + 0.50, 2)` (Comisión de Hotmart) |
| **G** | `Comision_Embajador_USD` | Moneda ($) | Comisión del afiliado. **Fórmula:** `=IF(ISBLANK(J2), 0, E2 * IF(COUNTIFS($C$2:C2, C2, $D$2:D2, D2)=1, 0.50, 0.25))` *(50% en la primera venta de ESE plan para ese email — incluye upgrades a un plan superior, que cuentan como "primera vez en ese plan"; 25% en cada renovación del mismo plan en adelante. Decisión oficial 2026-07-16, ver `../Embajadores/ambassador_program.md` sección 1. La versión anterior de esta fórmula contaba solo por email, sin distinguir plan — eso pagaba 25% en un upgrade, lo cual ya no aplica)* |
| **H** | `Margen_Bruto_USD` | Moneda ($) | **Fórmula:** `=E2 - F2 - G2` (Margen neto antes de costos fijos) |
| **I** | `ID_Transaccion_Hotmart` | Texto | ID único de transacción en Hotmart |
| **J** | `ID_Embajador` | Texto | ID del embajador. Si es vacío, la celda G calcula `$0` de comisión |
| **K** | `Status_Pago` | Lista | `Aprobado`, `Reembolsado` |

---

### Pestaña 3: `Embajadores` (Control de Afiliados)
Lleva el acumulado de ventas y comisiones pendientes por pagar a cada embajador de la red.

| Columna | Nombre de Columna | Formato | Descripción / Fórmula |
|---|---|---|---|
| **A** | `ID_Embajador` | Texto | Código único: `EMB-001`, `EMB-002`... |
| **B** | `Nombre` | Texto | Nombre completo del embajador |
| **C** | `Email` | Texto | Email del embajador |
| **D** | `WhatsApp` | Texto | WhatsApp del embajador |
| **E** | `Codigo_Afiliado_Hotmart` | Texto | ID de afiliado en Hotmart para mapear compras |
| **F** | `Registros_Trial` | Entero | **Fórmula:** `=COUNTIFS(DB_Usuarios!$L$2:$L, A2)` |
| **G** | `Ventas_Totales` | Entero | **Fórmula:** `=COUNTIFS(Historial_Pagos!$J$2:$J, A2, Historial_Pagos!$K$2:$K, "Aprobado")` |
| **H** | `Comisiones_Acumuladas_USD` | Moneda ($) | **Fórmula:** `=SUMIFS(Historial_Pagos!$G$2:$G, Historial_Pagos!$J$2:$J, A2, Historial_Pagos!$K$2:$K, "Aprobado")` |
| **I** | `Pagos_Realizados_USD` | Moneda ($) | Registro manual de transferencias hechas al embajador (ej: `$150.00`) |
| **J** | `Saldo_Pendiente_USD` | Moneda ($) | **Fórmula:** `=H2 - I2` (Comisión acumulada menos lo ya pagado) |

---

### Pestaña 4: `Resumen_Mensual` (Dashboard de Socios y Reparto)
Agrupa las métricas financieras por mes y calcula automáticamente el reparto entre los socios.

#### Sección A: Métricas Clave del Mes
* **Trials Iniciados:** `=COUNTIFS(DB_Usuarios!$B$2:$B, ">="&A2, DB_Usuarios!$B$2:$B, "<"&EDATE(A2,1))` (Donde A2 es la fecha inicio del mes, ej: `2026-07-01`)
* **Clientes Nuevos:** `=COUNTIFS(Historial_Pagos!$B$2:$B, ">="&A2, Historial_Pagos!$B$2:$B, "<"&EDATE(A2,1), Historial_Pagos!$K$2:$K, "Aprobado")`
* **Tasa de Conversión (Métrica Norte):** `=IF(Trials_Iniciados=0, 0, Clientes_Nuevos / Trials_Iniciados)`

#### Sección B: P&L del Negocio
1. **Facturación Bruta (USD):** `=SUMIFS(Historial_Pagos!$E$2:$E, Historial_Pagos!$B$2:$B, ">="&A2, Historial_Pagos!$B$2:$B, "<"&EDATE(A2,1), Historial_Pagos!$K$2:$K, "Aprobado")`
2. **Total Fees Pasarela (USD):** `=SUMIFS(Historial_Pagos!$F$2:$F, Historial_Pagos!$B$2:$B, ">="&A2, Historial_Pagos!$B$2:$B, "<"&EDATE(A2,1), Historial_Pagos!$K$2:$K, "Aprobado")`
3. **Total Comisiones Afiliados (USD):** `=SUMIFS(Historial_Pagos!$G$2:$G, Historial_Pagos!$B$2:$B, ">="&A2, Historial_Pagos!$B$2:$B, "<"&EDATE(A2,1), Historial_Pagos!$K$2:$K, "Aprobado")`
4. **Costos Fijos del Negocio (USD):** Valor constante: `$140.00` (TradingView, Make, Manychat, Claude)
5. **Ganancia Libre (Margen Neto) (USD):** `Facturación Bruta - Total Fees - Total Comisiones - Costos Fijos`

#### Sección C: Reparto de Ganancia Libre (Decisión Oficial 2026-07-07)
* **Gustavo (Estrategia 25%):** `=Ganancia_Libre * 0.25`
* **Reserva Impuestos/Stack (15%):** `=Ganancia_Libre * 0.15`
* **Fundador (Usuario 30%):** `=Ganancia_Libre * 0.30`
* **Meli (Comercial 30%):** `=Ganancia_Libre * 0.30`
