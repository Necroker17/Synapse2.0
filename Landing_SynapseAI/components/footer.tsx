import { BrainCircuit } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-tv-border bg-tv-panel">
      <div className="mx-auto max-w-7xl px-4 py-10 md:px-6">
        <div className="flex flex-col gap-6 md:flex-row md:items-start md:justify-between">
          <div className="flex items-center gap-2.5">
            <span
              aria-hidden="true"
              className="flex size-8 items-center justify-center rounded-md border border-dashed border-brand/60 bg-brand/10"
            >
              <BrainCircuit className="size-4.5 text-brand" />
            </span>
            <div>
              <p className="text-sm font-bold text-white">
                Synapse<span className="text-brand"> AI</span>
              </p>
              <p className="text-xs text-tv-text-dim">
                por Synapse Labs · Indicador para TradingView
              </p>
            </div>
          </div>
          <p className="max-w-xl text-xs leading-relaxed text-tv-text-dim">
            TradingView es una marca registrada de TradingView, Inc. Synapse AI
            es un script independiente publicado en su plataforma y no está
            afiliado, patrocinado ni respaldado por TradingView.
          </p>
        </div>

        <div className="mt-8 rounded-lg border border-tv-border bg-tv-bg p-4">
          <p className="text-xs font-bold uppercase tracking-widest text-tv-red">
            Advertencia de riesgo
          </p>
          <p className="mt-2 text-xs leading-relaxed text-tv-text-dim">
            Operar divisas, metales y otros instrumentos apalancados conlleva un
            alto nivel de riesgo y puede no ser adecuado para todos los
            inversores: existe la posibilidad de perder parte o la totalidad del
            capital invertido. El rendimiento pasado no garantiza resultados
            futuros. Las estadísticas mostradas corresponden a un snapshot de
            telemetría del indicador y no constituyen una promesa de ganancias.
            Synapse AI es una herramienta de análisis y gestión de riesgo, no un
            servicio de asesoría financiera; la decisión final de cada operación
            es siempre tuya. Opera únicamente con dinero que puedas permitirte
            perder y, si lo necesitas, busca asesoría de un profesional
            independiente.
          </p>
        </div>

        <p className="mt-6 text-center text-[11px] text-tv-text-dim">
          © {new Date().getFullYear()} Synapse Labs. Todos los derechos
          reservados.
        </p>
      </div>
    </footer>
  );
}
