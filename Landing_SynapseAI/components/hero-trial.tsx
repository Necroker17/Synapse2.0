"use client";

import { motion, MotionConfig } from "framer-motion";
import { PhoneAlert } from "@/components/phone-alert";
import { TrialCta } from "@/components/trial-form";

/**
 * Hero de la landing de anuncio.
 *
 * Jerarquía invertida respecto de la v2 original: el protagonista es el
 * teléfono con la notificación, no el gráfico de velas. Ver
 * `business_plan/Campana/landing_trial_meta.md` §3.1.
 */
export function HeroTrial() {
  return (
    <MotionConfig reducedMotion="user">
      <section className="px-4 pt-14 md:px-6 md:pt-20 lg:px-0">
        <div className="grid items-center gap-12 lg:grid-cols-[minmax(0,1fr)_320px] lg:gap-16">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col items-start gap-6"
          >
            <span className="rounded-md border border-tv-border bg-tv-panel px-2.5 py-1 font-mono text-[11px] font-bold uppercase tracking-widest text-tv-text-dim">
              Software para TradingView
            </span>

            <h1 className="text-balance text-4xl font-black leading-[1.05] tracking-tight text-white md:text-5xl lg:text-[3.4rem]">
              Tu plan de trading,
              <br />
              convertido en notificaciones.
            </h1>

            <p className="max-w-xl text-base leading-relaxed text-tv-text md:text-lg">
              El software detecta las condiciones que tú ya definiste y te envía
              la decisión completa al celular: qué, dónde, y cuánto arriesgas en
              dólares. Sin analizar gráficos. Sin calcular lotes a las nueve de
              la mañana.
            </p>

            <div className="flex flex-col items-start gap-3">
              <TrialCta />
              <p className="font-mono text-xs text-tv-text-dim">
                15 días · Sin tarjeta · Sin instalar nada
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
          >
            <PhoneAlert />
          </motion.div>
        </div>
      </section>
    </MotionConfig>
  );
}
