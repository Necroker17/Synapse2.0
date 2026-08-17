import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { ChartMockup } from "@/components/chart-mockup";
import { ParamsPanel } from "@/components/params-panel";
import { TELEMETRY } from "@/lib/stats";

export const metadata: Metadata = {
  title: "Cómo funciona por dentro — Synapse AI",
  description:
    "Detalle técnico del software: cómo calcula el riesgo, qué muestra en el gráfico y los datos del histórico registrado.",
};

/**
 * Página de detalle técnico.
 *
 * Aquí vive la telemetría, deliberadamente FUERA de la landing del anuncio:
 * las cifras de rendimiento son de los disparadores más fuertes de
 * clasificación como servicios financieros, y la landing es lo que Meta
 * rastrea. Ver `business_plan/Campana/landing_trial_meta.md` §4.
 *
 * Es pública y rastreable — la separación es arquitectura de embudo normal,
 * no cloaking: todo el mundo ve exactamente lo mismo.
 *
 * ⚠️ Se omite a propósito el desglose "105 W / 82 L": suma 187 y el total
 * declarado es 188 (ver `lib/stats.ts`). Publicar los dos números juntos
 * mostraría una contradicción. Reponer el desglose cuando el PM confirme cuál
 * de las dos cifras es la correcta.
 */

const METRICS: Array<{ label: string; value: string }> = [
  { label: "Señales registradas", value: String(TELEMETRY.signals) },
  { label: "Primer objetivo alcanzado", value: TELEMETRY.winRateTp1 },
  { label: "Segundo objetivo alcanzado", value: TELEMETRY.tp2Rate },
  { label: "Factor de beneficio", value: TELEMETRY.profitFactor },
  { label: "Racha positiva máxima", value: `${TELEMETRY.maxWinStreak}` },
  { label: "Racha negativa máxima", value: `${TELEMETRY.maxLossStreak}` },
];

export default function Metodo() {
  return (
    <>
      <Navbar />
      <main className="mx-auto max-w-6xl px-4 pb-24 pt-14 md:px-6 md:pt-20">
        <Link
          href="/"
          className="inline-flex items-center gap-2 rounded text-sm font-semibold text-tv-text-dim transition-colors hover:text-white"
        >
          <ArrowLeft className="size-4" aria-hidden="true" />
          Volver
        </Link>

        <h1 className="mt-8 max-w-3xl text-balance text-3xl font-black leading-tight tracking-tight text-white md:text-5xl">
          Cómo funciona por dentro
        </h1>
        <p className="mt-5 max-w-2xl text-base leading-relaxed text-tv-text">
          El software vigila {TELEMETRY.asset} ({TELEMETRY.symbol}) en{" "}
          {TELEMETRY.timeframe} durante la sesión de Nueva York. Cuando se
          cumplen las condiciones programadas, calcula los niveles y el riesgo
          en dólares, y envía la notificación. Aquí está el detalle y el
          histórico registrado.
        </p>

        {/* Histórico */}
        <section className="pt-16">
          <div className="flex flex-col gap-3">
            <span className="font-mono text-[11px] font-bold uppercase tracking-[0.19em] text-brand">
              Histórico registrado
            </span>
            <h2 className="text-2xl font-black tracking-tight text-white md:text-3xl">
              Los números, con sus rachas malas incluidas
            </h2>
          </div>

          <dl className="mt-8 grid gap-px overflow-hidden rounded-xl border border-tv-border bg-tv-border sm:grid-cols-2 lg:grid-cols-3">
            {METRICS.map((m) => (
              <div
                key={m.label}
                className="flex flex-col gap-1.5 bg-tv-panel px-5 py-5"
              >
                <dt className="text-xs font-semibold uppercase tracking-wide text-tv-text-dim">
                  {m.label}
                </dt>
                <dd className="font-mono text-2xl font-black tabular-nums text-white">
                  {m.value}
                </dd>
              </div>
            ))}
          </dl>

          <div className="mt-6 rounded-lg border border-tv-border bg-tv-panel p-5">
            <p className="text-sm leading-relaxed text-tv-text-dim">
              <span className="font-bold text-white">
                Publicamos la racha negativa a propósito.
              </span>{" "}
              Hubo {TELEMETRY.maxLossStreak} resultados negativos seguidos. Es
              parte normal de cualquier sistema y preferimos que lo sepas antes
              y no durante. Estas cifras corresponden a un registro interno del
              software sobre {TELEMETRY.signals} señales; no son una proyección
              ni una promesa de lo que va a pasar.
            </p>
          </div>
        </section>

        {/* Qué se ve en el gráfico */}
        <section className="pt-20">
          <div className="flex flex-col gap-3">
            <span className="font-mono text-[11px] font-bold uppercase tracking-[0.19em] text-brand">
              En el gráfico
            </span>
            <h2 className="text-2xl font-black tracking-tight text-white md:text-3xl">
              Qué dibuja sobre tu pantalla
            </h2>
          </div>
          <div className="mt-8">
            <ChartMockup />
          </div>
        </section>
      </main>

      <ParamsPanel />
      <Footer />
    </>
  );
}
