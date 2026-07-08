"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { fadeUp } from "@/app/components/motion";

const WA_LINK =
  "https://wa.me/573116403562?text=Activar%20mis%207%20días%20gratis%20de%20IA%20en%20Trading%20View";

const CheckIcon = () => (
  <svg className="w-4 h-4 text-[#22c55e] flex-shrink-0 mt-0.5" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
);

const WhatsAppIcon = () => (
  <svg className="w-4 h-4 flex-shrink-0" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
  </svg>
);

const plans = [
  {
    name: "Trimestral",
    price: "$119",
    period: "/ 3 meses",
    monthly: "$39.67/mes",
    savings: null,
    featured: false,
    features: [
      "Acceso Synapse AI v3.0",
      "Alertas WhatsApp",
      "Dashboard KPIs",
      "Soporte estándar",
    ],
  },
  {
    name: "Semestral",
    price: "$197",
    period: "/ 6 meses",
    monthly: "$32.83/mes",
    savings: "Ahorras 17% vs. trimestral",
    featured: true,
    badge: "Más elegido",
    features: [
      "Acceso Synapse AI v3.0",
      "Alertas WhatsApp",
      "Dashboard KPIs",
      "Soporte prioritario",
      "Acceso a v3.1",
      "Ciclo completo de mercado",
    ],
  },
  {
    name: "Anual",
    price: "$297",
    period: "/ 12 meses",
    monthly: "$24.75/mes",
    savings: "3 meses GRATIS vs semestral×2",
    featured: false,
    features: [
      "Acceso Synapse AI v3.0",
      "Alertas WhatsApp",
      "Dashboard KPIs",
      "Soporte VIP",
      "Precio congelado",
      "Acceso anticipado v4.0",
    ],
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="py-20 px-4 bg-[#0d0d14]">
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
            Elige tu acceso
          </p>
          <h2 className="text-3xl md:text-4xl font-black leading-tight">
            Invierte menos que{" "}
            <span className="text-[#F97316]">una sola pérdida.</span>
          </h2>
          <p className="text-[#A1A1AA] mt-3 text-base">
            Un servicio de señales premium cobra $60–100/mes. Synapse AI desde $24.75/mes.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {plans.map((plan, i) => (
            <motion.div
              key={plan.name}
              custom={i + 1}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              className={`relative flex flex-col p-6 rounded-xl border bg-[#09090B] transition-all duration-200 ${
                plan.featured
                  ? "border-[#F97316] shadow-[0_0_30px_rgba(249,115,22,0.15)]"
                  : "border-[#1f1f2e]"
              }`}
            >
              {plan.featured && plan.badge && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <span className="inline-flex items-center gap-1 bg-[#F97316] text-white text-xs font-bold px-3 py-1 rounded-full whitespace-nowrap">
                    <svg className="w-3 h-3" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                      <path d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
                    </svg>
                    {plan.badge}
                  </span>
                </div>
              )}

              <div className="mb-5">
                <h3 className="font-bold text-[#A1A1AA] text-sm mb-3">{plan.name}</h3>
                <div className="flex items-end gap-1">
                  <span className="text-4xl font-black text-white">{plan.price}</span>
                  <span className="text-[#A1A1AA] text-sm mb-1">{plan.period}</span>
                </div>
                <p className="text-[#A1A1AA] text-sm mt-1">{plan.monthly}</p>
                {plan.savings && (
                  <p className="text-[#7C3AED] text-xs font-semibold mt-1">{plan.savings}</p>
                )}
              </div>

              <ul className="flex flex-col gap-2 mb-6 flex-1" role="list">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-start gap-2 text-sm text-[#A1A1AA]">
                    <CheckIcon />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>

              <Link
                href={WA_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className={`inline-flex items-center justify-center gap-2 font-semibold text-sm px-4 py-3 rounded-lg transition-colors duration-200 cursor-pointer min-h-[44px] ${
                  plan.featured
                    ? "bg-[#25D366] hover:bg-[#1eb855] text-white"
                    : "border border-[#1f1f2e] hover:border-[#F97316] text-white hover:text-[#F97316] bg-transparent"
                }`}
                aria-label={`Activar plan ${plan.name} vía WhatsApp`}
              >
                <WhatsAppIcon />
                Activar vía WhatsApp
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
