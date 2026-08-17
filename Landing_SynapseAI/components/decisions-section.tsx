"use client";

import { motion, MotionConfig } from "framer-motion";

/**
 * Las cinco decisiones eliminadas — el corazón de la página.
 *
 * Es lo que de verdad vende y, además, es intrínsecamente lenguaje de
 * automatización y no de asesoría: describe lo que el software hace, no lo que
 * el usuario debería hacer con su dinero.
 * Ver `business_plan/Campana/landing_trial_meta.md` §3.3.
 */

const DECISIONS: Array<{ q: string; a: string }> = [
  { q: "¿Entro o espero?", a: "Punto de entrada definido" },
  { q: "¿Dónde pongo el límite?", a: "Nivel de salida definido" },
  {
    q: "¿Cuánto arriesgo?",
    a: "La cifra exacta en dólares, calculada sobre el tamaño mínimo",
  },
  {
    q: "¿Protejo lo que llevo?",
    a: "Movimiento a punto de equilibrio, automático",
  },
  {
    q: "¿Qué hago ahora?",
    a: "Ejecutar o dejar pasar. No hay tercera opción",
  },
];

export function DecisionsSection() {
  return (
    <MotionConfig reducedMotion="user">
      <section className="px-4 pt-24 md:px-6 md:pt-32 lg:px-0">
        <div className="flex flex-col gap-3">
          <span className="font-mono text-[11px] font-bold uppercase tracking-[0.19em] text-brand">
            Qué hace exactamente
          </span>
          <h2 className="max-w-2xl text-balance text-2xl font-black leading-tight tracking-tight text-white md:text-4xl">
            Cinco preguntas que dejas de hacerte
          </h2>
        </div>

        <ol className="mt-10 grid gap-px overflow-hidden rounded-xl border border-tv-border bg-tv-border">
          {DECISIONS.map((d, i) => (
            <motion.li
              key={d.q}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.06 }}
              className="grid items-baseline gap-2 bg-tv-panel px-5 py-5 md:grid-cols-[2.5rem_minmax(0,1fr)_minmax(0,1.1fr)] md:gap-6 md:px-7"
            >
              <span className="font-mono text-sm font-bold tabular-nums text-tv-text-dim">
                {String(i + 1).padStart(2, "0")}
              </span>
              <span className="text-base font-bold text-white">{d.q}</span>
              <span className="text-sm leading-relaxed text-tv-text-dim">
                {d.a}
              </span>
            </motion.li>
          ))}
        </ol>
      </section>
    </MotionConfig>
  );
}
