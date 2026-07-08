"use client";

import { motion, MotionConfig } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { ChartMockup } from "@/components/chart-mockup";
import { TELEMETRY } from "@/lib/stats";

const fadeUp = {
  initial: { opacity: 0, y: 18 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
} as const;

export function Hero() {
  return (
    <MotionConfig reducedMotion="user">
      <section className="mx-auto max-w-7xl px-4 pt-10 md:px-6 md:pt-16 lg:px-0">
        <motion.p
          {...fadeUp}
          transition={{ duration: 0.5 }}
          className="text-xs font-bold uppercase tracking-[0.2em] text-tv-blue"
        >
          Indicador para TradingView · {TELEMETRY.asset} ({TELEMETRY.symbol}) ·{" "}
          {TELEMETRY.timeframe}
        </motion.p>

        <motion.h1
          {...fadeUp}
          transition={{ duration: 0.5, delay: 0.08 }}
          className="mt-3 max-w-3xl text-4xl font-black leading-tight text-white md:text-6xl"
        >
          Synapse AI Indicator
        </motion.h1>

        <motion.div
          {...fadeUp}
          transition={{ duration: 0.5, delay: 0.16 }}
          className="mt-4 flex flex-wrap items-center gap-2"
        >
          <span className="text-sm font-semibold text-tv-text-dim">
            por <span className="text-white">Synapse Labs</span>
          </span>
          <Badge className="bg-brand/15 font-mono text-[11px] font-bold text-[#a78bfa]">
            Núcleo {TELEMETRY.coreVersion}
          </Badge>
          <Badge
            variant="outline"
            className="border-tv-border font-mono text-[11px] text-tv-text-dim"
          >
            {TELEMETRY.signals} señales auditadas
          </Badge>
        </motion.div>

        <motion.p
          {...fadeUp}
          transition={{ duration: 0.5, delay: 0.24 }}
          className="mt-5 max-w-2xl text-base leading-relaxed text-tv-text md:text-lg"
        >
          El 90% de los traders pierde por no seguir sus propias reglas. Synapse
          AI toma esa decisión por ti: detecta la señal en {TELEMETRY.asset}{" "}
          {TELEMETRY.timeframe} y calcula entrada, stop loss, TP1, TP2 y el
          tamaño de lote exacto para tu riesgo — con matemática, no con
          emociones.
        </motion.p>

        <motion.div
          {...fadeUp}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-8"
        >
          <ChartMockup />
          <p className="mt-2 text-center font-mono text-[11px] text-tv-text-dim">
            Recreación fiel del indicador en gráfico. Snapshot de telemetría
            real — Win Rate TP1 {TELEMETRY.winRateTp1} · Profit Factor{" "}
            {TELEMETRY.profitFactor}.
          </p>
        </motion.div>
      </section>
    </MotionConfig>
  );
}
