"use client";

import { useState } from "react";
import { motion, MotionConfig } from "framer-motion";
import { Settings2 } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { TELEMETRY } from "@/lib/stats";

/**
 * Réplica interactiva del cuadro de inputs del indicador. Estado local
 * puramente demostrativo: enseña lo simple que es configurarlo, no
 * calcula señales reales.
 */
export function ParamsPanel() {
  const [capital, setCapital] = useState("10000");
  const [riskPct, setRiskPct] = useState(1);
  const [trendFilter, setTrendFilter] = useState(true);
  const [sessionFilter, setSessionFilter] = useState(true);

  const inputCls =
    "h-11 w-full rounded-md border border-tv-border bg-tv-bg px-3 font-mono text-sm text-white focus-visible:border-tv-blue focus-visible:outline-2 focus-visible:outline-tv-blue/50";

  return (
    <MotionConfig reducedMotion="user">
      <section
        id="parametros"
        className="mx-auto max-w-7xl scroll-mt-20 px-4 py-16 md:px-6 md:py-24"
      >
        <div className="grid items-center gap-8 lg:grid-cols-2 lg:gap-14">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-tv-blue">
              Configuración en 30 segundos
            </p>
            <h2 className="mt-3 text-3xl font-black leading-tight text-white md:text-4xl">
              Tu riesgo, tus reglas.
              <br />
              El scanner hace el resto.
            </h2>
            <p className="mt-4 max-w-lg text-base leading-relaxed text-tv-text">
              Defines tu capital y el porcentaje que arriesgas por operación —
              como en la ventana de ajustes de cualquier indicador de
              TradingView. Synapse AI convierte eso en lotes, stop loss y
              objetivos exactos en cada señal de {TELEMETRY.asset}{" "}
              {TELEMETRY.timeframe}. Nada de calculadoras aparte ni decisiones
              en caliente.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.12 }}
          >
            <Card className="border-tv-border bg-tv-panel shadow-2xl shadow-black/40">
              <CardHeader className="border-b border-tv-border">
                <CardTitle className="flex items-center gap-2 text-sm font-bold text-white">
                  <Settings2 className="size-4 text-tv-text-dim" aria-hidden="true" />
                  Synapse AI Scanner — Ajustes
                  <span className="ml-auto font-mono text-[10px] font-semibold uppercase text-tv-text-dim">
                    Inputs
                  </span>
                </CardTitle>
              </CardHeader>
              <CardContent className="grid gap-5 pt-5">
                <div className="grid gap-1.5">
                  <label
                    htmlFor="param-capital"
                    className="text-xs font-bold uppercase tracking-wide text-tv-text-dim"
                  >
                    Capital de la cuenta (USD)
                  </label>
                  <input
                    id="param-capital"
                    type="text"
                    inputMode="numeric"
                    value={capital}
                    onChange={(e) =>
                      setCapital(e.target.value.replace(/[^\d]/g, ""))
                    }
                    className={inputCls}
                  />
                </div>

                <div className="grid gap-1.5">
                  <div className="flex items-baseline justify-between">
                    <label
                      htmlFor="param-risk"
                      className="text-xs font-bold uppercase tracking-wide text-tv-text-dim"
                    >
                      Riesgo por operación
                    </label>
                    <output
                      htmlFor="param-risk"
                      className="font-mono text-sm font-bold text-tv-blue"
                    >
                      {riskPct.toFixed(1)}%
                    </output>
                  </div>
                  <input
                    id="param-risk"
                    type="range"
                    min={0.5}
                    max={3}
                    step={0.5}
                    value={riskPct}
                    onChange={(e) => setRiskPct(Number(e.target.value))}
                    className="h-11 w-full cursor-pointer accent-[#2962ff]"
                  />
                  <p className="text-[11px] text-tv-text-dim">
                    Con {riskPct.toFixed(1)}% de ${Number(capital || "0").toLocaleString("en-US")}{" "}
                    USD, el scanner dimensiona el lote automáticamente.
                  </p>
                </div>

                {(
                  [
                    {
                      id: "param-trend",
                      label: "Filtro de tendencia",
                      hint: "Solo señales a favor del flujo dominante",
                      value: trendFilter,
                      set: setTrendFilter,
                    },
                    {
                      id: "param-session",
                      label: "Filtro de sesión",
                      hint: "Opera solo en horas de liquidez del Oro",
                      value: sessionFilter,
                      set: setSessionFilter,
                    },
                  ] as const
                ).map((f) => (
                  <div
                    key={f.id}
                    className="flex items-center justify-between gap-4 rounded-md border border-tv-border bg-tv-panel-2/60 px-3 py-2.5"
                  >
                    <div>
                      <label
                        htmlFor={f.id}
                        className="block cursor-pointer text-sm font-semibold text-white"
                      >
                        {f.label}
                      </label>
                      <p className="text-[11px] text-tv-text-dim">{f.hint}</p>
                    </div>
                    <button
                      id={f.id}
                      type="button"
                      role="switch"
                      aria-checked={f.value}
                      aria-label={f.label}
                      onClick={() => f.set(!f.value)}
                      className={`relative h-6 w-11 shrink-0 cursor-pointer rounded-full transition-colors duration-200 ${
                        f.value ? "bg-tv-blue" : "bg-tv-border"
                      }`}
                    >
                      <span
                        aria-hidden="true"
                        className={`absolute top-0.5 size-5 rounded-full bg-white transition-transform duration-200 ${
                          f.value ? "translate-x-[22px]" : "translate-x-0.5"
                        }`}
                      />
                    </button>
                  </div>
                ))}

                <p className="rounded-md bg-tv-bg px-3 py-2 font-mono text-[11px] text-tv-text-dim">
                  Panel demostrativo — los ajustes reales viven en la ventana de
                  inputs del indicador dentro de TradingView.
                </p>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>
    </MotionConfig>
  );
}
