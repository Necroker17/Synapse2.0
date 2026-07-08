"use client";

import { motion, MotionConfig } from "framer-motion";
import { Activity, CandlestickChart } from "lucide-react";
import { TELEMETRY, SIGNAL_PANEL, LEVELS } from "@/lib/stats";

/* ------------------------------------------------------------------ */
/* Datos del gráfico: serie determinista (idéntica en server/cliente) */
/* ------------------------------------------------------------------ */

const CLOSES = [
  4150.4, 4148.9, 4146.2, 4147.8, 4151.3, 4153.9, 4152.6, 4155.4, 4158.1,
  4156.3, 4159.7, 4162.4, 4160.8, 4157.9, 4155.2, 4156.8, 4159.4, 4161.9,
  4164.6, 4162.7, 4160.1, 4162.9, 4165.8, 4168.2, 4166.4, 4163.8, 4165.1,
  4167.7, 4170.3, 4168.6, 4166.9, 4168.4, 4171.2, 4173.6, 4171.4, 4169.92,
];

const WICK = [
  1.9, 1.2, 2.1, 1.4, 1.8, 1.1, 1.6, 2.0, 1.3, 1.7, 1.2, 1.9, 1.5, 2.2, 1.4,
  1.1, 1.8, 1.3, 2.0, 1.6, 1.2, 1.5, 1.9, 1.4, 1.7, 2.1, 1.2, 1.6, 1.8, 1.3,
  1.5, 1.1, 1.7, 1.4, 1.9, 1.6,
];

type Candle = { o: number; h: number; l: number; c: number };

const CANDLES: Candle[] = CLOSES.map((c, i) => {
  const o = i === 0 ? 4149.2 : CLOSES[i - 1];
  return { o, c, h: Math.max(o, c) + WICK[i], l: Math.min(o, c) - WICK[i] };
});

/* Geometría del SVG */
const W = 760;
const H = 430;
const P_TOP = 4212;
const P_BOT = 4142;
const CANDLE_W = 11;
const GAP = 6.5;
const X0 = 14;

const y = (price: number) => ((P_TOP - price) / (P_TOP - P_BOT)) * H;

const GREEN = "#089981";
const RED = "#f23645";

function LevelLine({
  price,
  label,
  color,
  delay,
}: {
  price: number;
  label: string;
  color: string;
  delay: number;
}) {
  const yPos = y(price);
  return (
    <motion.g
      initial={{ opacity: 0, x: -12 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
    >
      <line
        x1={0}
        x2={W}
        y1={yPos}
        y2={yPos}
        stroke={color}
        strokeWidth={1.2}
        strokeDasharray="5 4"
        opacity={0.85}
      />
      <rect
        x={W - 158}
        y={yPos - 11}
        width={150}
        height={22}
        rx={4}
        fill={color}
        opacity={0.16}
      />
      <rect
        x={W - 158}
        y={yPos - 11}
        width={150}
        height={22}
        rx={4}
        fill="none"
        stroke={color}
        strokeWidth={1}
        opacity={0.6}
      />
      <text
        x={W - 150}
        y={yPos + 4}
        fill={color}
        fontSize={12.5}
        fontWeight={700}
        fontFamily="var(--font-geist-mono)"
      >
        {label}
      </text>
    </motion.g>
  );
}

function DashboardRow({ k, v, accent }: { k: string; v: string; accent?: string }) {
  return (
    <div className="flex items-baseline justify-between gap-3 border-b border-white/5 py-1 last:border-0">
      <dt className="text-[10px] font-semibold uppercase tracking-wide text-white/55">
        {k}
      </dt>
      <dd
        className="font-mono text-[11px] font-bold"
        style={{ color: accent ?? "#fff" }}
      >
        {v}
      </dd>
    </div>
  );
}

/**
 * Mockup digital del indicador en TradingView: velas del Oro M15,
 * niveles TP/SL, dashboard morado de telemetría y neurona de estado.
 * Todos los valores provienen de lib/stats.ts (snapshot verificado).
 */
export function ChartMockup() {
  return (
    <MotionConfig reducedMotion="user">
      <div
        id="grafico"
        className="overflow-hidden rounded-xl border border-tv-border bg-tv-panel shadow-2xl shadow-black/50"
      >
        {/* Barra superior estilo TradingView */}
        <div className="flex flex-wrap items-center gap-x-3 gap-y-1 border-b border-tv-border bg-tv-panel-2/60 px-3 py-2 md:px-4">
          <CandlestickChart className="size-4 text-tv-text-dim" aria-hidden="true" />
          <span className="text-sm font-bold text-white">
            {TELEMETRY.symbol}
          </span>
          <span className="font-mono text-xs text-tv-text-dim">
            {TELEMETRY.timeframe} · {TELEMETRY.asset} spot
          </span>
          <span className="ml-auto hidden font-mono text-xs text-tv-text-dim sm:block">
            O {SIGNAL_PANEL.entry} · Synapse AI Scanner
          </span>
        </div>

        <div className="md:flex md:items-stretch">
          {/* Gráfico de velas */}
          <div className="md:min-w-0 md:flex-1">
          <svg
            viewBox={`0 0 ${W} ${H}`}
            className="block w-full"
            role="img"
            aria-label={`Mockup del gráfico de ${TELEMETRY.asset} en ${TELEMETRY.timeframe} con niveles de entrada ${SIGNAL_PANEL.entry}, stop loss ${SIGNAL_PANEL.sl}, TP1 ${SIGNAL_PANEL.tp1} y TP2 ${SIGNAL_PANEL.tp2}`}
          >
            {/* Rejilla */}
            {[0.2, 0.4, 0.6, 0.8].map((f) => (
              <line
                key={f}
                x1={0}
                x2={W}
                y1={H * f}
                y2={H * f}
                stroke="#1e222d"
                strokeWidth={1}
              />
            ))}

            {/* Zona de riesgo y de objetivo */}
            <motion.rect
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 0.08 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 1.1 }}
              x={X0 + 28 * (CANDLE_W + GAP)}
              y={y(LEVELS.entry)}
              width={W - (X0 + 28 * (CANDLE_W + GAP))}
              height={y(LEVELS.sl) - y(LEVELS.entry)}
              fill={RED}
            />
            <motion.rect
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 0.08 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 1.1 }}
              x={X0 + 28 * (CANDLE_W + GAP)}
              y={y(LEVELS.tp2)}
              width={W - (X0 + 28 * (CANDLE_W + GAP))}
              height={y(LEVELS.entry) - y(LEVELS.tp2)}
              fill={GREEN}
            />

            {/* Velas */}
            {CANDLES.map((k, i) => {
              const x = X0 + i * (CANDLE_W + GAP);
              const up = k.c >= k.o;
              const color = up ? GREEN : RED;
              const bodyTop = y(Math.max(k.o, k.c));
              const bodyH = Math.max(2, Math.abs(y(k.o) - y(k.c)));
              return (
                <motion.g
                  key={i}
                  initial={{ opacity: 0, scaleY: 0.4 }}
                  whileInView={{ opacity: 1, scaleY: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.35, delay: 0.02 * i }}
                  style={{ transformOrigin: `${x + CANDLE_W / 2}px ${y(k.c)}px` }}
                >
                  <line
                    x1={x + CANDLE_W / 2}
                    x2={x + CANDLE_W / 2}
                    y1={y(k.h)}
                    y2={y(k.l)}
                    stroke={color}
                    strokeWidth={1.4}
                  />
                  <rect
                    x={x}
                    y={bodyTop}
                    width={CANDLE_W}
                    height={bodyH}
                    fill={color}
                    rx={1}
                  />
                </motion.g>
              );
            })}

            {/* Niveles de la operación (datos verificados) */}
            <LevelLine
              price={LEVELS.tp2}
              label={`TP2 ${SIGNAL_PANEL.tp2}`}
              color={GREEN}
              delay={1.35}
            />
            <LevelLine
              price={LEVELS.tp1}
              label={`TP1 ${SIGNAL_PANEL.tp1}`}
              color={GREEN}
              delay={1.25}
            />
            <LevelLine
              price={LEVELS.entry}
              label={`BUY ${SIGNAL_PANEL.entry}`}
              color="#2962ff"
              delay={1.05}
            />
            <LevelLine
              price={LEVELS.sl}
              label={`SL ${SIGNAL_PANEL.sl}`}
              color={RED}
              delay={1.15}
            />
          </svg>
          </div>

          {/* Dashboard morado de telemetría (columna lateral en md+) */}
          <motion.aside
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.7 }}
            aria-label="Dashboard de telemetría Synapse AI"
            className="border-t border-brand/40 bg-[#12101d] p-3 md:w-64 md:shrink-0 md:border-l md:border-t-0"
          >
            <div className="mb-2 flex items-center justify-between gap-2">
              <p className="text-[11px] font-black uppercase tracking-widest text-brand">
                Synapse AI · {TELEMETRY.symbol}
              </p>
              <span className="flex items-center gap-1.5 rounded-sm bg-tv-red/15 px-1.5 py-0.5">
                <motion.span
                  aria-hidden="true"
                  className="size-1.5 rounded-full bg-tv-red"
                  animate={{ opacity: [1, 0.25, 1] }}
                  transition={{ duration: 1.6, repeat: Infinity }}
                />
                <span className="text-[9px] font-black tracking-widest text-tv-red">
                  LIVE
                </span>
              </span>
            </div>
            <dl>
              <DashboardRow k="Núcleo" v={TELEMETRY.coreVersion} accent="#a78bfa" />
              <DashboardRow
                k="Win Rate TP1"
                v={TELEMETRY.winRateTp1}
                accent={GREEN}
              />
              <DashboardRow
                k="Señales"
                v={`${TELEMETRY.signals} · ${TELEMETRY.wonTp1}W/${TELEMETRY.lostTp1}L`}
              />
              <DashboardRow
                k="TP2 alcanzado"
                v={`${TELEMETRY.tp2Rate} (${TELEMETRY.tp2Hits})`}
                accent={GREEN}
              />
              <DashboardRow k="Profit Factor" v={TELEMETRY.profitFactor} accent={GREEN} />
              <DashboardRow
                k="Racha máx."
                v={`${TELEMETRY.maxWinStreak}W / ${TELEMETRY.maxLossStreak}L`}
              />
              <DashboardRow
                k="Semanal"
                v={`${TELEMETRY.weeklyProfitPips} pips`}
                accent={GREEN}
              />
              <DashboardRow
                k="Mensual"
                v={`${TELEMETRY.monthlyProfitPips} pips`}
                accent={GREEN}
              />
            </dl>
          </motion.aside>
        </div>

        {/* Neurona de estado (panel de señal) */}
        <div>
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.9 }}
            aria-label="Panel de señal activa"
            className="border-t border-tv-green/40 bg-[#0b1512] p-3"
          >
            <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
              <span className="flex items-center gap-2">
                <motion.span
                  aria-hidden="true"
                  className="size-2.5 rounded-full bg-tv-green shadow-[0_0_10px_#089981]"
                  animate={{ scale: [1, 1.25, 1] }}
                  transition={{ duration: 1.8, repeat: Infinity }}
                />
                <Activity className="size-4 text-tv-green" aria-hidden="true" />
                <span className="text-xs font-black tracking-wide text-tv-green">
                  {SIGNAL_PANEL.signal}
                </span>
              </span>
              <span className="rounded-sm bg-tv-green/15 px-2 py-0.5 text-[10px] font-black tracking-widest text-tv-green">
                STATUS {SIGNAL_PANEL.status}
              </span>
            </div>
            <dl className="mt-2 grid grid-cols-3 gap-x-4 gap-y-1 font-mono text-[11px] sm:grid-cols-6">
              {(
                [
                  ["Lotes", SIGNAL_PANEL.lots, "#fff"],
                  ["Entrada", SIGNAL_PANEL.entry, "#2962ff"],
                  ["SL", SIGNAL_PANEL.sl, RED],
                  ["TP1", SIGNAL_PANEL.tp1, GREEN],
                  ["TP2", SIGNAL_PANEL.tp2, GREEN],
                  ["Riesgo", SIGNAL_PANEL.riskUsd, "#fff"],
                ] as const
              ).map(([k, v, color]) => (
                <div key={k}>
                  <dt className="text-[9px] font-sans font-semibold uppercase tracking-wide text-white/50">
                    {k}
                  </dt>
                  <dd className="font-bold" style={{ color }}>
                    {v}
                  </dd>
                </div>
              ))}
            </dl>
          </motion.div>
        </div>
      </div>
    </MotionConfig>
  );
}
