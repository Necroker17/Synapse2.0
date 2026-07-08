"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { fadeUp } from "@/app/components/motion";

const kpis = [
  {
    value: "58.8%",
    label: "Win Rate TP1",
    sub: "117 de 199 señales",
    color: "#22c55e",
  },
  {
    value: "43.7%",
    label: "Win Rate TP2",
    sub: "87 de 199 señales",
    color: "#3B82F6",
  },
  {
    value: "1.61",
    label: "Profit Factor",
    sub: "Global · verificado",
    color: "#7C3AED",
  },
  {
    value: "199",
    label: "Señales generadas",
    sub: "Período 30 · XAUUSD",
    color: "#F97316",
  },
];

export default function Stats() {
  return (
    <section id="stats" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          custom={0}
          className="text-center mb-12"
        >
          <p className="text-xs font-semibold tracking-widest text-[#A1A1AA] uppercase mb-3">
            Métricas verificadas
          </p>
          <h2 className="text-3xl md:text-4xl font-black leading-tight">
            199 señales.{" "}
            <span className="text-[#F97316]">Números reales.</span>
          </h2>
          <p className="text-[#A1A1AA] mt-3 text-sm">
            Datos del dashboard en vivo — XAUUSD · Claude Opus 4.8 · Período 30
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
          {kpis.map((kpi, i) => (
            <motion.div
              key={kpi.label}
              custom={i + 1}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              className="p-5 rounded-xl border border-[#1f1f2e] bg-[#0d0d14] flex flex-col gap-1"
            >
              <span
                className="text-3xl md:text-4xl font-black"
                style={{ color: kpi.color }}
              >
                {kpi.value}
              </span>
              <span className="font-semibold text-white text-sm">{kpi.label}</span>
              <span className="text-[#A1A1AA] text-xs">{kpi.sub}</span>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          custom={5}
          className="p-5 rounded-xl border border-[#22c55e]/30 bg-[#0d0d14] flex flex-col md:flex-row items-center gap-4 mb-6"
        >
          <div className="flex flex-col gap-1 text-center md:text-left">
            <span className="text-4xl md:text-5xl font-black text-[#22c55e]">
              +226,023
            </span>
            <span className="font-semibold text-white">pips Net Profit acumulado</span>
            <span className="text-[#A1A1AA] text-sm">117 Wins · 111 Losses</span>
          </div>
          <div className="hidden md:block w-px h-16 bg-[#1f1f2e] mx-4" aria-hidden="true" />
          <p className="text-[#A1A1AA] text-sm md:max-w-sm">
            Racha máx. ganadora: <strong className="text-white">12 wins</strong> ·{" "}
            Racha máx. perdedora: <strong className="text-white">6 losses</strong>
          </p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          custom={6}
          className="rounded-xl overflow-hidden border border-[#1f1f2e]"
        >
          <Image
            src="/assets/organica_dashboard_stats_winrate_588_netprofit.jpeg"
            alt="Dashboard de Synapse AI Scanner mostrando Win Rate 58.8% y Net Profit acumulado"
            width={1200}
            height={500}
            className="w-full object-cover"
            loading="lazy"
          />
        </motion.div>
      </div>
    </section>
  );
}
