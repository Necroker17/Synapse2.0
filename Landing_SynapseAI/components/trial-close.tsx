"use client";

import { motion, MotionConfig } from "framer-motion";
import Link from "next/link";
import { TrialCta } from "@/components/trial-form";

/**
 * Cierre de la landing: el trial.
 *
 * ⚠️ PENDIENTE DE CONFIRMACIÓN (bloqueante, ver
 * `business_plan/Campana/landing_trial_meta.md` §3.6): la línea "no necesitas
 * abrir ninguna cuenta nueva" solo puede publicarse si el trial corre
 * exclusivamente sobre TradingView. Si exige abrir cuenta de bróker, el
 * registro pasa a ser el alta a un producto financiero y hay que reescribir
 * esta sección entera.
 */
export function TrialClose() {
  return (
    <MotionConfig reducedMotion="user">
      <motion.section
        id="prueba"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="scroll-mt-20 px-4 pb-24 pt-24 md:px-6 md:pb-32 md:pt-32 lg:px-0"
      >
        <div className="flex flex-col items-center gap-7 rounded-xl border border-tv-border bg-tv-panel-2 px-6 py-14 text-center md:py-20">
          <h2 className="max-w-2xl text-balance text-3xl font-black leading-tight tracking-tight text-white md:text-5xl">
            Pruébalo 15 días
          </h2>

          <p className="max-w-lg text-base leading-relaxed text-tv-text">
            Sin tarjeta. Sin compromiso. Funciona sobre TradingView — no
            necesitas abrir ninguna cuenta nueva para probarlo.
          </p>

          <TrialCta />

          <p className="max-w-md text-xs leading-relaxed text-tv-text-dim">
            Cada acceso se activa manualmente sobre tu usuario de TradingView,
            así que puede tomar algunas horas.
          </p>

          <Link
            href="/metodo"
            className="rounded text-xs font-semibold text-tv-text-dim underline decoration-tv-border underline-offset-4 transition-colors hover:text-white"
          >
            Ver cómo funciona por dentro y los datos del sistema
          </Link>
        </div>
      </motion.section>
    </MotionConfig>
  );
}
