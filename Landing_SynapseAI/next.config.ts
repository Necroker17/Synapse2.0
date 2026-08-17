import type { NextConfig } from "next";

/**
 * Dos destinos con la misma base de código:
 *
 *  - **GitHub Pages** (`GH_PAGES=1 npm run build`): export estático bajo el
 *    subdirectorio `/Synapse2.0`. No admite route handlers, así que la captura
 *    de leads queda en modo vista previa (ver `components/trial-form.tsx`).
 *  - **Vercel** (`npm run build`): build normal, con servidor.
 *
 * `basePath` solo se aplica en Pages porque el sitio vive en
 * `necroker17.github.io/Synapse2.0`, no en la raíz del dominio.
 */
const isGitHubPages = process.env.GH_PAGES === "1";

const nextConfig: NextConfig = {
  ...(isGitHubPages
    ? {
        output: "export" as const,
        basePath: "/Synapse2.0",
        trailingSlash: true,
        images: { unoptimized: true },
      }
    : {}),
};

export default nextConfig;
