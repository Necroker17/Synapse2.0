"use client";

import { motion, MotionConfig } from "framer-motion";

/**
 * El problema, SIEMPRE en tercera persona.
 *
 * La política de Atributos Personales de Meta prohíbe afirmar o insinuar la
 * situación personal de quien ve el anuncio: "¿estás perdiendo dinero?" es
 * causa habitual de rechazo. Sujeto permitido: "casi todo trader", "la
 * persona", "uno". Nunca "tú".
 * Ver `business_plan/Campana/landing_trial_meta.md` §3.2.
 */
export function ProblemSection() {
  return (
    <MotionConfig reducedMotion="user">
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="px-4 pt-24 md:px-6 md:pt-32 lg:px-0"
      >
        <div className="max-w-3xl border-l-2 border-brand pl-6 md:pl-8">
          <h2 className="text-balance text-2xl font-black leading-tight tracking-tight text-white md:text-4xl">
            El plan no falla en el papel.
            <br />
            Falla a las 9:07.
          </h2>
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-tv-text">
            Casi todo trader tiene reglas escritas. El problema aparece cuando
            hay que aplicarlas con el mercado abierto, el pulso acelerado y
            treinta segundos para decidir. Ahí es donde el plan y la persona se
            separan.
          </p>
        </div>
      </motion.section>
    </MotionConfig>
  );
}
