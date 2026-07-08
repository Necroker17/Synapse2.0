"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { fadeUp } from "@/app/components/motion";

const WA_LINK =
  "https://wa.me/573116403562?text=Activar%20mis%207%20días%20gratis%20de%20IA%20en%20Trading%20View";

export default function CTAFinal() {
  return (
    <section
      className="relative py-24 px-4 overflow-hidden"
      style={{
        background:
          "linear-gradient(135deg, #0f0a1e 0%, #09090B 50%, #150b05 100%)",
      }}
    >
      <div
        className="absolute inset-0 pointer-events-none"
        aria-hidden="true"
      >
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full opacity-15 blur-3xl"
          style={{
            background:
              "radial-gradient(ellipse, #F97316 0%, transparent 70%)",
          }}
        />
      </div>

      <div className="relative max-w-2xl mx-auto text-center flex flex-col items-center gap-6">
        <motion.div
          custom={0}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
        >
          <Image
            src="/assets/merch_tarjeta_founder_access_invite_only_mano.png"
            alt="Tarjeta Founder Access — Invite Only de Synapse AI"
            width={280}
            height={180}
            className="rounded-2xl shadow-2xl mx-auto"
            loading="lazy"
          />
        </motion.div>

        <motion.div
          custom={1}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
        >
          <span className="inline-flex items-center gap-2 bg-[#F97316]/10 border border-[#F97316]/40 text-[#F97316] text-sm font-bold px-4 py-2 rounded-full">
            <svg className="w-4 h-4 flex-shrink-0" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z" />
            </svg>
            Acceso Invite-Only · Cupos limitados
          </span>
        </motion.div>

        <motion.h2
          custom={2}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          className="text-3xl md:text-4xl font-black leading-tight"
        >
          ¿Sigues perdiendo por<br />decisiones emocionales?
        </motion.h2>

        <motion.p
          custom={3}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          className="text-[#A1A1AA] text-base leading-relaxed max-w-lg"
        >
          Únete a los 41 traders que ya operan el Oro con estructura matemática
          — sin overtrading, sin FOMO, sin autosabotaje.
        </motion.p>

        <motion.div
          custom={4}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          className="flex flex-col items-center gap-3 w-full"
        >
          <Link
            href={WA_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2.5 bg-[#25D366] hover:bg-[#1eb855] text-white font-bold text-lg px-8 py-4 rounded-xl transition-colors duration-200 cursor-pointer min-h-[56px] w-full md:w-auto shadow-lg shadow-[#25D366]/20"
            aria-label="Activar Synapse AI 7 días gratis vía WhatsApp"
          >
            <svg className="w-5 h-5 flex-shrink-0" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
            Activar mis 7 días gratis
          </Link>
          <p className="text-[#A1A1AA] text-sm">
            → Configuración en 3 min · Sin tarjeta de crédito
          </p>
        </motion.div>
      </div>
    </section>
  );
}
