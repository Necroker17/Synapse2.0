"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { fadeUp } from "@/app/components/motion";

const steps = [
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-4.35-4.35m0 0A7.5 7.5 0 104.5 4.5a7.5 7.5 0 0012.15 12.15z" />
      </svg>
    ),
    color: "#7C3AED",
    title: "Synapse AI escanea el mercado",
    desc: "El algoritmo analiza volatilidad, momentum y estructura de volumen. Solo actúa cuando la matemática está a tu favor.",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 8.25h3m-3 3h3m-3 3h3" />
      </svg>
    ),
    color: "#3B82F6",
    title: "Recibes la señal en WhatsApp",
    desc: "Dirección, entrada, SL, TP1, TP2 y riesgo exacto en USD por micro-lote. Todo en 5 segundos.",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
      </svg>
    ),
    color: "#F97316",
    title: "Ejecutas en 5 segundos",
    desc: "Abres MetaTrader, colocas la orden con los números ya calculados. Sin pensar, sin dudar.",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
      </svg>
    ),
    color: "#22c55e",
    title: "Break-Even automático",
    desc: "Al tocar TP1, tu stop se mueve a entrada. Tu riesgo queda en cero sin que hagas nada.",
  },
];

export default function HowItWorks() {
  return (
    <section id="como-funciona" className="py-20 px-4">
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
            Cómo funciona
          </p>
          <h2 className="text-3xl md:text-4xl font-black leading-tight">
            Tu trading en{" "}
            <span className="text-[#F97316]">piloto automático.</span>
          </h2>
          <p className="text-[#A1A1AA] mt-3 text-base max-w-lg mx-auto">
            Sin análisis manuales. Sin horas mirando gráficos. Sin decisiones emocionales.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-12">
          {steps.map((step, i) => (
            <motion.div
              key={step.title}
              custom={i + 1}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              className="flex gap-4 p-5 rounded-xl border border-[#1f1f2e] bg-[#0d0d14] hover:border-[#2a2a3e] transition-colors duration-200"
            >
              <div
                className="flex-shrink-0 w-12 h-12 rounded-xl flex items-center justify-center"
                style={{ backgroundColor: `${step.color}20`, color: step.color }}
              >
                {step.icon}
              </div>
              <div>
                <h3 className="font-bold text-white mb-1">{step.title}</h3>
                <p className="text-[#A1A1AA] text-sm leading-relaxed">{step.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          custom={5}
          className="hidden md:block rounded-xl overflow-hidden border border-[#1f1f2e]"
        >
          <Image
            src="/assets/organica_captura_real_alerta_sell_xauusd_consola.jpeg"
            alt="Alerta real de Synapse AI Scanner en XAUUSD — señal de venta con TP1 y TP2"
            width={1200}
            height={400}
            className="w-full object-cover"
            loading="lazy"
          />
        </motion.div>
      </div>
    </section>
  );
}
