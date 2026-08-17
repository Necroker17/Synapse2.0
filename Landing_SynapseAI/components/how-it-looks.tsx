"use client";

import { motion, MotionConfig } from "framer-motion";
import { PhoneAlert } from "@/components/phone-alert";

/**
 * "Cómo se ve" — la secuencia de dos pantallas: llega la alerta con todo
 * resuelto, y después el equilibrio alcanzado sin que el usuario decida nada.
 * Ver `business_plan/Campana/landing_trial_meta.md` §3.4.
 */

const STEPS = [
  {
    n: "01",
    title: "Llega la notificación",
    body: "Con los campos ya resueltos: entrada, nivel de salida y el riesgo exacto en dólares sobre el tamaño mínimo.",
    state: "alert" as const,
  },
  {
    n: "02",
    title: "El sistema protege solo",
    body: "Al alcanzar el primer objetivo mueve la salida al punto de entrada. Nadie tiene que decidir hasta dónde aguantar.",
    state: "resolved" as const,
  },
];

export function HowItLooks() {
  return (
    <MotionConfig reducedMotion="user">
      <section className="px-4 pt-24 md:px-6 md:pt-32 lg:px-0">
        <div className="flex flex-col gap-3">
          <span className="font-mono text-[11px] font-bold uppercase tracking-[0.19em] text-brand">
            Cómo se ve
          </span>
          <h2 className="max-w-2xl text-balance text-2xl font-black leading-tight tracking-tight text-white md:text-4xl">
            Dos pantallas. Ninguna decisión pendiente.
          </h2>
        </div>

        <div className="mt-12 grid gap-12 md:grid-cols-2 md:gap-8">
          {STEPS.map((s, i) => (
            <motion.div
              key={s.n}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.12 }}
              className="flex flex-col gap-6"
            >
              <PhoneAlert state={s.state} />
              <div className="mx-auto flex max-w-xs flex-col gap-2 text-center">
                <span className="font-mono text-xs font-bold tabular-nums text-tv-text-dim">
                  {s.n}
                </span>
                <h3 className="text-lg font-bold text-white">{s.title}</h3>
                <p className="text-sm leading-relaxed text-tv-text-dim">
                  {s.body}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </MotionConfig>
  );
}
