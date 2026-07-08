import { ImageIcon, type LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

type ImagePlaceholderProps = {
  /** Archivo esperado, ej. "logo-synapse.png" */
  file: string;
  /** Qué debe mostrarse ahí, ej. "Logo neurona violeta" */
  label: string;
  width: number;
  height: number;
  icon?: LucideIcon;
  className?: string;
};

/**
 * Contenedor listo para next/image: reserva las dimensiones exactas
 * (width/height) para que al colocar el asset real no se mueva la
 * maquetación. Reemplazar el interior por:
 *   <Image src={`/${file}`} alt={label} width={width} height={height} />
 */
export function ImagePlaceholder({
  file,
  label,
  width,
  height,
  icon: Icon = ImageIcon,
  className,
}: ImagePlaceholderProps) {
  return (
    <div
      style={{ aspectRatio: `${width} / ${height}`, maxWidth: width }}
      className={cn(
        "flex w-full flex-col items-center justify-center gap-2 rounded-lg",
        "border-2 border-dashed border-tv-border bg-tv-panel-2/50 text-center",
        className
      )}
      role="img"
      aria-label={`Espacio reservado para imagen: ${label}`}
    >
      <Icon className="size-6 text-tv-text-dim" aria-hidden="true" />
      <p className="px-3 text-xs font-semibold text-tv-text-dim">{label}</p>
      <p className="px-3 font-mono text-[10px] text-tv-text-dim/70">
        {file} · {width}×{height}
      </p>
    </div>
  );
}
