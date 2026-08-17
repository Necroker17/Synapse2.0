"use client";

import { motion, MotionConfig } from "framer-motion";
import { X } from "lucide-react";

/**
 * "Lo que este software NO hace" — la sección de mayor apalancamiento de la
 * página. Va visible y arriba, nunca en el pie.
 *
 * Hace tres cosas a la vez (ver `business_plan/Campana/landing_trial_meta.md` §3.5):
 *  1. Compliance: es lo que un revisor necesita leer para no clasificar el
 *     dominio como asesoría financiera.
 *  2. Conversión: ningún competidor lo escribe. Decir primero lo que NO haces
 *     compra credibilidad para todo lo demás.
 *  3. Marca: es el manifiesto de honestidad hecho sección.
 */

const NOTS: Array<{ head: string; body: string }> = [
  {
    head: "No ejecuta operaciones",
    body: "Tú decides si tomas cada una. El software avisa; no opera por ti.",
  },
  {
    head: "No administra tu dinero",
    body: "Nunca tenemos acceso a tu cuenta ni a tus fondos.",
  },
  {
    head: "No promete resultados",
    body: "Ningún sistema puede. Cualquiera que te lo prometa te está mintiendo.",
  },
  {
    head: "No es una recomendación de inversión",
    body: "Es una herramienta que aplica reglas y calcula riesgo.",
  },
  {
    head: "No garantiza que la próxima salga bien",
    body: "Hubo cinco resultados negativos seguidos y está documentado.",
  },
];

export function NotAdvice() {
  return (
    <MotionConfig reducedMotion="user">
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="px-4 pt-24 md:px-6 md:pt-32 lg:px-0"
      >
        <div className="rounded-xl border border-tv-border bg-tv-panel p-6 md:p-10">
          <div className="flex flex-col gap-3">
            <span className="font-mono text-[11px] font-bold uppercase tracking-[0.19em] text-tv-red">
              Léelo antes de registrarte
            </span>
            <h2 className="text-balance text-2xl font-black leading-tight tracking-tight text-white md:text-3xl">
              Esto no es asesoría financiera
            </h2>
            <p className="max-w-2xl text-sm leading-relaxed text-tv-text-dim">
              Preferimos que sepas exactamente qué estás probando. Si después de
              leer esto no te sirve, mejor no te registres hoy.
            </p>
          </div>

          <ul className="mt-8 grid gap-px overflow-hidden rounded-lg border border-tv-border bg-tv-border md:grid-cols-2">
            {NOTS.map((n) => (
              <li
                key={n.head}
                className="flex items-start gap-3 bg-tv-panel-2 px-5 py-4"
              >
                <span
                  aria-hidden="true"
                  className="mt-0.5 flex size-5 shrink-0 items-center justify-center rounded border border-tv-red/40 bg-tv-red/10"
                >
                  <X className="size-3 text-tv-red" />
                </span>
                <div className="flex flex-col gap-1">
                  <p className="text-sm font-bold text-white">{n.head}</p>
                  <p className="text-[13px] leading-relaxed text-tv-text-dim">
                    {n.body}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </motion.section>
    </MotionConfig>
  );
}
