/**
 * Envío de eventos al píxel de Meta.
 *
 * Arquitectura y justificación: `business_plan/Campana/landing_trial_meta.md` §5.
 * - Se optimiza por `Lead` mientras el volumen semanal de `StartTrial` no llegue
 *   a ~50 (hoy hay 5 activaciones totales; optimizar por StartTrial dejaría el
 *   conjunto de anuncios en aprendizaje permanente).
 * - NUNCA usar `Purchase` para un trial gratuito: no hubo transacción.
 * - NUNCA enviar datos financieros (saldos, tamaño de cuenta) en los parámetros.
 */

type MetaEvent = "PageView" | "ViewContent" | "Lead" | "StartTrial";

type Fbq = (
  command: "track",
  event: MetaEvent,
  params?: Record<string, string | number>
) => void;

declare global {
  interface Window {
    fbq?: Fbq;
  }
}

/** No-op si el píxel no está instalado — la landing funciona igual sin él. */
export function track(
  event: MetaEvent,
  params?: Record<string, string | number>
) {
  if (typeof window === "undefined" || typeof window.fbq !== "function") return;
  window.fbq("track", event, params);
}
