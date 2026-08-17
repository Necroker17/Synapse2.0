import { NextResponse } from "next/server";

/**
 * Captura de leads — SIN backend definitivo todavía.
 *
 * ⚠️ Los datos NO se persisten en ningún lado. Punto de integración pendiente
 * (Make → Google Sheets, ver `business_plan/Infraestructura/flujos_automatizacion.md`).
 * Hasta que exista, cualquier lead que entre por aquí se pierde: no publicar
 * esta ruta como alta real.
 *
 * No se registran nombre, correo ni teléfono en los logs: en un despliegue
 * público eso deja datos personales en la retención de logs del hosting sin
 * base legal ni política de borrado.
 */
export async function POST(request: Request) {
  const body = await request.json().catch(() => null);

  const required = ["fullName", "email", "whatsapp", "tvUser"] as const;
  if (
    body === null ||
    typeof body !== "object" ||
    required.some((k) => typeof body[k] !== "string" || body[k].trim() === "")
  ) {
    return NextResponse.json({ ok: false }, { status: 400 });
  }

  // Solo señal de volumen, sin datos personales.
  console.log("[lead] recibido");

  return NextResponse.json({ ok: true });
}
