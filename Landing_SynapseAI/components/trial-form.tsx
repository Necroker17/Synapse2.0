"use client";

import { useState } from "react";
import { CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { track } from "@/lib/track";

type FormState = {
  fullName: string;
  email: string;
  whatsapp: string;
  tvUser: string;
};

const EMPTY: FormState = { fullName: "", email: "", whatsapp: "", tvUser: "" };

const FIELDS: Array<{
  key: keyof FormState;
  label: string;
  type: string;
  placeholder: string;
  autoComplete: string;
}> = [
  {
    key: "fullName",
    label: "Nombre completo",
    type: "text",
    placeholder: "Ana García",
    autoComplete: "name",
  },
  {
    key: "email",
    label: "Correo",
    type: "email",
    placeholder: "ana@correo.com",
    autoComplete: "email",
  },
  {
    key: "whatsapp",
    label: "Teléfono de WhatsApp",
    type: "tel",
    placeholder: "+52 1 55 1234 5678",
    autoComplete: "tel",
  },
  {
    key: "tvUser",
    label: "Usuario de TradingView",
    type: "text",
    placeholder: "tu_usuario_tv",
    autoComplete: "off",
  },
];

function validate(form: FormState): Partial<Record<keyof FormState, string>> {
  const errors: Partial<Record<keyof FormState, string>> = {};
  if (form.fullName.trim().length < 3)
    errors.fullName = "Escribe tu nombre completo.";
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(form.email.trim()))
    errors.email = "Revisa el formato del correo.";
  if (!/^\+?[\d\s-]{8,17}$/.test(form.whatsapp.trim()))
    errors.whatsapp = "Incluye el código de país, solo dígitos.";
  if (form.tvUser.trim().length < 3)
    errors.tvUser = "Es el usuario con el que entras a TradingView.";
  return errors;
}

function TrialFormFields() {
  const [form, setForm] = useState<FormState>(EMPTY);
  const [errors, setErrors] = useState<Partial<Record<keyof FormState, string>>>(
    {}
  );
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">(
    "idle"
  );

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const nextErrors = validate(form);
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) return;

    setStatus("sending");
    try {
      const res = await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      setStatus("sent");
      // Evento de optimización mientras el volumen de StartTrial sea bajo.
      track("Lead");
    } catch {
      setStatus("error");
    }
  }

  if (status === "sent") {
    return (
      <div className="flex flex-col items-center gap-3 py-6 text-center">
        <CheckCircle2 className="size-12 text-tv-green" aria-hidden="true" />
        <p className="text-lg font-bold text-white">Solicitud recibida</p>
        <p className="max-w-xs text-sm leading-relaxed text-tv-text-dim">
          Te escribimos por WhatsApp para activar el acceso de{" "}
          <span className="font-mono text-white">{form.tvUser}</span> en
          TradingView.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate>
      <div className="grid gap-4">
        {FIELDS.map((f) => (
          <div key={f.key} className="grid gap-1.5">
            <label
              htmlFor={`trial-${f.key}`}
              className="text-xs font-bold uppercase tracking-wide text-tv-text-dim"
            >
              {f.label}
            </label>
            <input
              id={`trial-${f.key}`}
              type={f.type}
              autoComplete={f.autoComplete}
              placeholder={f.placeholder}
              value={form[f.key]}
              onChange={(e) => {
                setForm({ ...form, [f.key]: e.target.value });
                if (errors[f.key]) setErrors({ ...errors, [f.key]: undefined });
              }}
              aria-invalid={Boolean(errors[f.key])}
              aria-describedby={
                errors[f.key] ? `trial-${f.key}-error` : undefined
              }
              className="h-11 rounded-md border border-tv-border bg-tv-bg px-3 text-sm text-white placeholder:text-tv-text-dim/60 focus-visible:border-tv-blue focus-visible:outline-2 focus-visible:outline-tv-blue/50"
            />
            {errors[f.key] && (
              <p
                id={`trial-${f.key}-error`}
                className="text-xs font-semibold text-tv-red"
              >
                {errors[f.key]}
              </p>
            )}
          </div>
        ))}
      </div>

      {status === "error" && (
        <p className="mt-3 rounded-md border border-tv-red/40 bg-tv-red/10 px-3 py-2 text-xs font-semibold text-tv-red">
          No pudimos enviar la solicitud. Inténtalo de nuevo en unos segundos.
        </p>
      )}

      <Button
        type="submit"
        disabled={status === "sending"}
        className="mt-5 h-12 w-full cursor-pointer bg-tv-green text-[15px] font-black text-white shadow-lg shadow-tv-green/25 transition-colors duration-200 hover:bg-tv-green/85 disabled:opacity-60"
      >
        {status === "sending" ? "Enviando…" : "Empezar mis 15 días"}
      </Button>
      <p className="mt-3 text-center text-[11px] leading-relaxed text-tv-text-dim">
        Usamos tus datos solo para activar tu acceso. Sin spam.
      </p>
    </form>
  );
}

/**
 * CTA único de la landing. Se repite en hero y cierre, siempre con el mismo
 * texto — ver `business_plan/Campana/landing_trial_meta.md` §7 (un solo CTA).
 */
export function TrialCta({
  size = "lg",
  className = "",
}: {
  size?: "lg" | "md";
  className?: string;
}) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button
          className={`cursor-pointer bg-tv-green font-black text-white shadow-lg shadow-tv-green/25 transition-colors duration-200 hover:bg-tv-green/85 ${
            size === "lg" ? "h-13 px-7 text-base" : "h-11 px-5 text-sm"
          } ${className}`}
        >
          Probar 15 días gratis
        </Button>
      </DialogTrigger>
      <DialogContent className="border-tv-border bg-tv-panel sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="text-xl font-black text-white">
            Empieza tus 15 días
          </DialogTitle>
          <DialogDescription className="text-sm text-tv-text-dim">
            Cuatro datos y activamos el acceso en tu cuenta de TradingView.
          </DialogDescription>
        </DialogHeader>
        <TrialFormFields />
      </DialogContent>
    </Dialog>
  );
}
