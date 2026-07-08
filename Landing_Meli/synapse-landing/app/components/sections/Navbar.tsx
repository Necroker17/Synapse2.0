"use client";

import Image from "next/image";
import Link from "next/link";

const WA_LINK =
  "https://wa.me/573116403562?text=Activar%20mis%207%20días%20gratis%20de%20IA%20en%20Trading%20View";

export default function Navbar() {
  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md"
      style={{ background: "rgba(9,9,11,0.9)", borderBottom: "1px solid #1f1f2e" }}
    >
      <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
        <div className="flex items-center gap-2.5">
          <Image
            src="/assets/logo_synapse_principal_neurona_azul_purpura.png"
            alt="Synapse AI logo"
            width={36}
            height={36}
            priority
            className="rounded-lg"
          />
          <span className="font-bold text-white text-base tracking-tight">
            Synapse AI
          </span>
        </div>

        <div className="hidden md:flex items-center gap-8 text-sm text-[#A1A1AA]">
          <a href="#como-funciona" className="hover:text-white transition-colors duration-200 cursor-pointer">
            Features
          </a>
          <a href="#stats" className="hover:text-white transition-colors duration-200 cursor-pointer">
            Resultados
          </a>
          <a href="#pricing" className="hover:text-white transition-colors duration-200 cursor-pointer">
            Precios
          </a>
        </div>

        <Link
          href={WA_LINK}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 bg-[#F97316] hover:bg-[#ea6c0a] text-white font-semibold text-sm px-4 py-2.5 rounded-lg transition-colors duration-200 cursor-pointer min-h-[44px]"
          aria-label="Prueba Synapse AI 7 días gratis vía WhatsApp"
        >
          Prueba 7 días gratis →
        </Link>
      </div>
    </nav>
  );
}
