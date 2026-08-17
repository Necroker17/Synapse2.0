import type { Metadata } from "next";
import { Inter, Geist_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "600", "700", "900"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

/**
 * Metadata de la landing del anuncio.
 *
 * Reescrita para no describir el producto como servicio de señales: Meta lee
 * el título y la descripción de la URL de destino. Léxico permitido en
 * `business_plan/Campana/landing_trial_meta.md` §4 — "software",
 * "notificaciones", nunca "señales", "rentabilidad" ni "inversión".
 */
export const metadata: Metadata = {
  title: "Synapse AI — Tu plan de trading, convertido en notificaciones",
  description:
    "Software para TradingView que detecta las condiciones que tú defines y te envía la decisión completa al celular: qué, dónde y cuánto arriesgas en dólares. Prueba 15 días, sin tarjeta.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={`dark ${inter.variable} ${geistMono.variable}`}>
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
