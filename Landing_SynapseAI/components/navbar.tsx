"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { BrainCircuit } from "lucide-react";

/**
 * Navbar de la landing de anuncio.
 *
 * Un solo CTA en toda la página y nada que compita con él: se quitaron los
 * enlaces de sección para no repartir la atención, y no hay enlace a precios
 * ni a nada externo — Meta rastrea los enlaces salientes.
 * Ver `business_plan/Campana/landing_trial_meta.md` §2 y §7.
 */
export function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-tv-border bg-tv-bg/80 backdrop-blur-md">
      <div className="mx-auto flex h-14 max-w-6xl items-center justify-between gap-3 px-4 md:px-6">
        <Link
          href="/"
          className="flex min-w-0 items-center gap-2.5"
          aria-label="Synapse AI — inicio"
        >
          {/* Logo real: reemplazar por <Image src="/logo-synapse.png" width={32} height={32} /> */}
          <span
            aria-hidden="true"
            className="flex size-8 shrink-0 items-center justify-center rounded-md border border-dashed border-brand/60 bg-brand/10"
          >
            <BrainCircuit className="size-4.5 text-brand" />
          </span>
          <span className="truncate text-[15px] font-bold tracking-tight text-white">
            Synapse<span className="text-brand"> AI</span>
          </span>
          <Badge
            variant="outline"
            className="hidden border-tv-border font-mono text-[10px] text-tv-text-dim sm:inline-flex"
          >
            para TradingView
          </Badge>
        </Link>

        <Button
          asChild
          className="h-9 cursor-pointer bg-tv-green px-4 font-bold text-white transition-colors duration-200 hover:bg-tv-green/85"
        >
          <a href="#prueba">Probar gratis</a>
        </Button>
      </div>
    </header>
  );
}
