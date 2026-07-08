import { NextResponse } from "next/server";

/**
 * Stub de captura de leads — decisión de proyecto: sin backend aún.
 * Punto de integración futuro (email/CRM/Google Sheet); ver CLAUDE.md.
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

  console.log("[lead]", JSON.stringify(body));
  return NextResponse.json({ ok: true });
}
