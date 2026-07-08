/**
 * Snapshot de telemetría verificado (spec Landing_SynapseAI).
 * ÚNICA fuente de datos duros de la landing — no redondear ni derivar
 * valores nuevos fuera de este archivo.
 */
export const TELEMETRY = {
  symbol: "XAUUSD",
  asset: "Oro",
  timeframe: "M15",
  coreVersion: "Claude Opus 4.8",
  signals: 188,
  winRateTp1: "55.9%",
  wonTp1: 105,
  lostTp1: 82,
  tp2Rate: "35.1%",
  tp2Hits: 66,
  profitFactor: "1.86",
  maxWinStreak: 14,
  maxLossStreak: 5,
  weeklyProfitPips: "+1723.1",
  monthlyProfitPips: "+1086.7",
} as const;

export const SIGNAL_PANEL = {
  signal: "BUY SIGNAL",
  status: "DISPONIBLE",
  lots: "0.06",
  entry: "4169.92",
  sl: "4152.28",
  tp1: "4187.56",
  tp2: "4205.20",
  riskUsd: "100 USD",
} as const;

/** Niveles numéricos para posicionar líneas en el mockup del gráfico. */
export const LEVELS = {
  entry: 4169.92,
  sl: 4152.28,
  tp1: 4187.56,
  tp2: 4205.2,
} as const;
