"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { fadeUp } from "@/app/components/motion";

const WA_LINK =
  "https://wa.me/573116403562?text=Activar%20mis%207%20días%20gratis%20de%20IA%20en%20Trading%20View";

export default function Hero() {
  return (
    <section className="relative pt-24 pb-16 px-4 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] rounded-full opacity-20 blur-3xl"
          style={{ background: "radial-gradient(ellipse, #7C3AED 0%, transparent 70%)" }}
        />
      </div>

      <div className="relative max-w-6xl mx-auto">
        <div className="md:grid md:grid-cols-[1fr_auto] md:gap-12 md:items-center">
          <div className="flex flex-col gap-5">
            <motion.div
              custom={0}
              initial="hidden"
              animate="visible"
              variants={fadeUp}
            >
              <span className="inline-flex items-center gap-2 text-sm font-medium px-3 py-1.5 rounded-full border border-[#1f1f2e] bg-[#0d0d14] text-[#A1A1AA]">
                <span className="w-2 h-2 rounded-full bg-[#7C3AED] flex-shrink-0" />
                Synapse AI Scanner · Para TradingView
              </span>
            </motion.div>

            <motion.h1
              custom={1}
              initial="hidden"
              animate="visible"
              variants={fadeUp}
              className="text-4xl md:text-5xl lg:text-6xl font-black leading-tight tracking-tight"
            >
              Deja de sabotearte
              <br />
              <span className="text-[#F97316]">cada vez que operas.</span>
            </motion.h1>

            <motion.p
              custom={2}
              initial="hidden"
              animate="visible"
              variants={fadeUp}
              className="text-[#A1A1AA] text-base md:text-lg leading-relaxed max-w-lg"
            >
              El 90% de traders pierde por no seguir sus propias reglas. Synapse
              AI toma esa decisión por ti — con matemática, no con emociones.
            </motion.p>

            {/* Mobile video — portrait, between copy and CTA */}
            <motion.div
              custom={3}
              initial="hidden"
              animate="visible"
              variants={fadeUp}
              className="md:hidden flex justify-center pt-1"
            >
              <video
                playsInline
                controls
                poster="/videos/hero-poster.jpg"
                src="/videos/hero.mp4"
                className="w-full max-w-[320px] rounded-xl border border-[#1f1f2e] shadow-lg"
                aria-label="Video demo de Synapse AI Scanner en acción"
              />
            </motion.div>

            <motion.div
              custom={4}
              initial="hidden"
              animate="visible"
              variants={fadeUp}
              className="flex flex-col gap-3"
            >
              <Link
                href={WA_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#1eb855] text-white font-bold text-base px-6 py-4 rounded-xl transition-colors duration-200 cursor-pointer min-h-[52px] w-full md:w-auto md:self-start"
                aria-label="Prueba Synapse AI 7 días gratis vía WhatsApp"
              >
                <svg
                  className="w-5 h-5 flex-shrink-0"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                Prueba 7 días gratis
              </Link>
              <p className="text-xs text-[#A1A1AA] text-center md:text-left">
                Redirige a WhatsApp · Sin tarjeta de crédito
              </p>
            </motion.div>
          </div>

          {/* Desktop video — portrait ratio, fixed height, auto width */}
          <motion.div
            custom={3}
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            className="hidden md:flex md:justify-center md:items-center"
          >
            <video
              playsInline
              controls
              poster="/videos/hero-poster.jpg"
              src="/videos/hero.mp4"
              className="h-[480px] w-auto rounded-xl border border-[#1f1f2e] shadow-2xl"
              aria-label="Video demo de Synapse AI Scanner en acción"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
