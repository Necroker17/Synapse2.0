import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "600", "700", "900"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Synapse AI Scanner v3.0 — Opera el Oro con IA",
  description:
    "Indicador premium para TradingView. Opera XAUUSD y XAGUSD con señales de alta probabilidad en WhatsApp. Prueba 7 días gratis.",
  keywords: ["TradingView", "indicador oro", "XAUUSD", "señales trading", "Synapse AI"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={`${inter.variable} h-full`}>
      <body className="min-h-full flex flex-col bg-[#09090B] text-white">
        {children}
      </body>
    </html>
  );
}
