import { BellRing, Check } from "lucide-react";

/**
 * Hero visual de la landing: el teléfono con la notificación.
 *
 * Reemplaza al gráfico de velas como firma visual (ver
 * `business_plan/Campana/landing_trial_meta.md` §3.1): el gráfico es el reflejo
 * visual de la categoría "producto financiero" y es lo que dispara la
 * clasificación. Además, la alerta con el riesgo en dólares es el atributo que
 * la propia audiencia eligió como más valioso.
 *
 * Todo en código, no imagen.
 */

type Row = { label: string; value: string; tone?: "hi" | "dim" | "red" };

const ROWS: Row[] = [
  { label: "Entrada", value: "4169.92", tone: "hi" },
  { label: "Salida si va en contra", value: "4152.28", tone: "red" },
  { label: "Riesgo (0.01 lotes)", value: "17.64 USD", tone: "hi" },
];

export function PhoneAlert({
  state = "alert",
}: {
  /** `alert` = notificación entrante · `resolved` = equilibrio alcanzado */
  state?: "alert" | "resolved";
}) {
  return (
    <div className="mx-auto w-full max-w-[300px]">
      {/* Carcasa */}
      <div className="relative rounded-[2rem] border border-tv-border bg-tv-panel p-2.5 shadow-2xl shadow-black/60">
        <div className="absolute left-1/2 top-3.5 h-1 w-14 -translate-x-1/2 rounded-full bg-tv-border" />

        <div className="overflow-hidden rounded-[1.6rem] bg-tv-bg pb-5 pt-9">
          {/* Barra de estado */}
          <div className="flex items-center justify-between px-5 pb-4 font-mono text-[10px] text-tv-text-dim">
            <span>9:07</span>
            <span aria-hidden="true">▪▪▪ ▮</span>
          </div>

          {/* Tarjeta de notificación */}
          <div className="mx-3 rounded-xl border border-tv-border bg-tv-panel-2 p-3.5">
            <div className="flex items-center gap-2 border-b border-tv-border pb-2.5">
              <span
                aria-hidden="true"
                className="flex size-6 items-center justify-center rounded-md bg-brand/15 text-brand"
              >
                <BellRing className="size-3.5" />
              </span>
              <p className="text-[11px] font-bold text-white">Synapse AI</p>
              <p className="ml-auto font-mono text-[10px] text-tv-text-dim">
                ahora
              </p>
            </div>

            {state === "alert" ? (
              <div className="pt-3">
                <p className="font-mono text-[11px] font-bold tracking-wide text-white">
                  XAUUSD · M15
                </p>
                <dl className="mt-2.5 grid gap-1.5">
                  {ROWS.map((r) => (
                    <div
                      key={r.label}
                      className="flex items-baseline justify-between gap-3"
                    >
                      <dt className="text-[11px] text-tv-text-dim">{r.label}</dt>
                      <dd
                        className={`font-mono text-[11px] font-semibold tabular-nums ${
                          r.tone === "red" ? "text-tv-red" : "text-white"
                        }`}
                      >
                        {r.value}
                      </dd>
                    </div>
                  ))}
                </dl>
                <p className="mt-3 border-t border-tv-border pt-2.5 text-[10px] leading-relaxed text-tv-text-dim">
                  Ejemplo de notificación. No es una recomendación de inversión.
                </p>
              </div>
            ) : (
              <div className="pt-3">
                <div className="flex items-center gap-2">
                  <Check className="size-4 text-tv-green" aria-hidden="true" />
                  <p className="text-[11px] font-bold text-tv-green">
                    Nivel de equilibrio alcanzado
                  </p>
                </div>
                <dl className="mt-2.5 grid gap-1.5">
                  <div className="flex items-baseline justify-between gap-3">
                    <dt className="text-[11px] text-tv-text-dim">
                      Salida movida a
                    </dt>
                    <dd className="font-mono text-[11px] font-semibold tabular-nums text-white">
                      4169.92
                    </dd>
                  </div>
                  <div className="flex items-baseline justify-between gap-3">
                    <dt className="text-[11px] text-tv-text-dim">
                      Riesgo actual
                    </dt>
                    <dd className="font-mono text-[11px] font-semibold tabular-nums text-tv-green">
                      0.00 USD
                    </dd>
                  </div>
                </dl>
                <p className="mt-3 border-t border-tv-border pt-2.5 text-[10px] leading-relaxed text-tv-text-dim">
                  Ya no había nada que decidir.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
