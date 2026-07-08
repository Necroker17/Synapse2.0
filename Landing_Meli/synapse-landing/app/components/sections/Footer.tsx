import Image from "next/image";
import Link from "next/link";

const WA_LINK =
  "https://wa.me/573116403562?text=Activar%20mis%207%20días%20gratis%20de%20IA%20en%20Trading%20View";

export default function Footer() {
  return (
    <footer className="border-t border-[#1f1f2e] bg-[#09090B] py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-8 mb-10">
          <div className="flex flex-col gap-3">
            <div className="flex items-center gap-2.5">
              <Image
                src="/assets/logo_synapse_principal_neurona_azul_purpura.png"
                alt="Synapse AI Scanner logo"
                width={32}
                height={32}
                className="rounded-lg"
                loading="lazy"
              />
              <span className="font-bold text-white">Synapse AI · Scanner v3.0</span>
            </div>
            <p className="text-[#A1A1AA] text-sm max-w-xs leading-relaxed">
              Indicador premium para TradingView. Opera el Oro y la Plata con
              inteligencia artificial.
            </p>
          </div>

          <nav aria-label="Footer navigation">
            <ul className="flex flex-col md:flex-row gap-4 md:gap-8" role="list">
              <li>
                <a
                  href="#como-funciona"
                  className="text-[#A1A1AA] hover:text-white text-sm transition-colors duration-200 cursor-pointer"
                >
                  Features
                </a>
              </li>
              <li>
                <a
                  href="#pricing"
                  className="text-[#A1A1AA] hover:text-white text-sm transition-colors duration-200 cursor-pointer"
                >
                  Precios
                </a>
              </li>
              <li>
                <Link
                  href={WA_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#25D366] hover:text-white text-sm transition-colors duration-200 cursor-pointer"
                >
                  WhatsApp
                </Link>
              </li>
            </ul>
          </nav>
        </div>

        <div className="border border-[#1f1f2e] rounded-xl p-4 mb-8 bg-[#0d0d14]">
          <p className="text-[#A1A1AA] text-xs leading-relaxed">
            <strong className="text-white">⚠️ Aviso de riesgo:</strong> El
            trading de instrumentos financieros conlleva riesgo significativo de
            pérdida de capital. Los resultados históricos no garantizan
            rendimientos futuros. Synapse AI Scanner es una herramienta de
            análisis técnico y no constituye asesoramiento financiero. Opera
            solo con capital que puedas permitirte perder.
          </p>
        </div>

        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
          <p className="text-[#A1A1AA] text-xs">
            © 2026 Synapse Labs · Todos los derechos reservados
          </p>
          <p className="text-[#A1A1AA] text-xs">
            TradingView · XAUUSD · XAGUSD
          </p>
        </div>
      </div>
    </footer>
  );
}
