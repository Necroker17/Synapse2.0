import { Navbar } from "@/components/navbar";
import { HeroTrial } from "@/components/hero-trial";
import { ProblemSection } from "@/components/problem-section";
import { DecisionsSection } from "@/components/decisions-section";
import { HowItLooks } from "@/components/how-it-looks";
import { NotAdvice } from "@/components/not-advice";
import { TrialClose } from "@/components/trial-close";
import { Footer } from "@/components/footer";

/**
 * Landing del anuncio — objetivo único: activación del trial de 15 días.
 *
 * Arquitectura y restricciones: `business_plan/Campana/landing_trial_meta.md`.
 * Reglas que NO se pueden romper en esta página:
 *  - Cero cifras de rendimiento (win rate, PF, pips). Viven en /metodo.
 *  - Cero enlaces salientes a bróker, bono o checkout.
 *  - Cero precios. La página de planes no se enlaza desde aquí.
 *  - El problema se redacta en tercera persona.
 *  - Un solo CTA.
 */
export default function Home() {
  return (
    <>
      <Navbar />
      <main className="mx-auto max-w-6xl px-0 lg:px-6">
        <HeroTrial />
        <ProblemSection />
        <DecisionsSection />
        <HowItLooks />
        <NotAdvice />
        <TrialClose />
      </main>
      <Footer />
    </>
  );
}
