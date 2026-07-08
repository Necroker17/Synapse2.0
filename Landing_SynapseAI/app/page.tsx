import { CandlestickChart, LayoutDashboard } from "lucide-react";
import { Navbar } from "@/components/navbar";
import { Hero } from "@/components/hero";
import { InviteCard } from "@/components/invite-card";
import { ParamsPanel } from "@/components/params-panel";
import { Footer } from "@/components/footer";
import { ImagePlaceholder } from "@/components/image-placeholder";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <div className="mx-auto max-w-7xl lg:grid lg:grid-cols-[minmax(0,1fr)_360px] lg:items-start lg:gap-8 lg:px-6">
          <div className="lg:min-w-0">
            <Hero />

            {/* Capturas reales del indicador — assets pendientes (regla de imágenes) */}
            <section
              aria-label="Capturas reales del indicador"
              className="px-4 pt-10 md:px-6 lg:px-0"
            >
              <div className="grid gap-4 sm:grid-cols-2">
                <ImagePlaceholder
                  file="captura-senal-buy.png"
                  label="Captura real: señal BUY con cajas TP/SL en el gráfico"
                  width={640}
                  height={400}
                  icon={CandlestickChart}
                />
                <ImagePlaceholder
                  file="captura-dashboard.png"
                  label="Captura real: dashboard de telemetría en TradingView"
                  width={640}
                  height={400}
                  icon={LayoutDashboard}
                />
              </div>
            </section>
          </div>

          {/* Ficha lateral de invitación (sticky en desktop) */}
          <div className="px-4 pt-10 md:px-6 lg:sticky lg:top-20 lg:px-0 lg:pt-16">
            <InviteCard />
          </div>
        </div>

        <ParamsPanel />
      </main>
      <Footer />
    </>
  );
}
