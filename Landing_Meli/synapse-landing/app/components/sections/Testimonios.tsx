"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { fadeIn } from "@/app/components/motion";

const testimonios = [
  {
    src: "/assets/testimonio_chat_laura_primer_trade_tremendas_ventas.png",
    alt: "Testimonio de Laura — primer trade con Synapse AI, tremendas ganancias",
  },
  {
    src: "/assets/testimonio_chat_3dias_profit_balance_237.png",
    alt: "Testimonio — 3 días de profit, balance +$237",
  },
  {
    src: "/assets/testimonio_grafico_sell_tp2_790pips_balance_84.png",
    alt: "Testimonio — señal SELL TP2 alcanzado, +790 pips, balance 84%",
  },
  {
    src: "/assets/testimonio_chat_laura_balance_tp1_indicador.png",
    alt: "Testimonio de Laura — balance tras alcanzar TP1 con el indicador",
  },
];

export default function Testimonios() {
  return (
    <section className="py-20 px-4 bg-[#0d0d14]">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
          custom={0}
          className="text-center mb-12"
        >
          <p className="text-xs font-semibold tracking-widest text-[#A1A1AA] uppercase mb-3">
            Lo que dicen los traders
          </p>
          <h2 className="text-3xl md:text-4xl font-black leading-tight">
            Resultados reales.{" "}
            <span className="text-[#F97316]">Sin filtros.</span>
          </h2>
          <div className="mt-4 inline-flex items-center gap-2 bg-[#22c55e]/10 border border-[#22c55e]/30 text-[#22c55e] text-sm font-semibold px-4 py-2 rounded-full">
            <svg className="w-4 h-4 flex-shrink-0" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            41 traders verificados
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {testimonios.map((t, i) => (
            <motion.div
              key={t.src}
              custom={i + 1}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
              className="rounded-xl overflow-hidden border border-[#1f1f2e] shadow-xl"
            >
              <Image
                src={t.src}
                alt={t.alt}
                width={600}
                height={400}
                className="w-full object-cover"
                loading="lazy"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
