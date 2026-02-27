"use client";

import { useMemo, useState } from "react";
import { cn } from "@/lib/utils";
import { siteConfig } from "@/lib/siteConfig";

type FormState = {
  name: string;
  phone: string;
  email: string;
  message: string;
};

function validateEmail(value: string) {
  if (!value) return true;
  return /^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/.test(value);
}

export function ContactForm({ className }: { className?: string }) {
  const [values, setValues] = useState<FormState>({
    name: "",
    phone: "",
    email: "",
    message: ""
  });
  const [touched, setTouched] = useState<Record<keyof FormState, boolean>>({
    name: false,
    phone: false,
    email: false,
    message: false
  });

  const errors = useMemo(() => {
    const next: Partial<Record<keyof FormState, string>> = {};
    if (!values.name.trim()) next.name = "Indica tu nombre.";
    if (!values.message.trim()) next.message = "Escribe tu mensaje.";
    if (values.email && !validateEmail(values.email))
      next.email = "Email no válido.";
    return next;
  }, [values]);

  const canSubmit = Object.keys(errors).length === 0;

  function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setTouched({ name: true, phone: true, email: true, message: true });
    if (!canSubmit) return;

    const subject = encodeURIComponent(`Contacto web — ${values.name}`);
    const body = encodeURIComponent(
      [
        `Nombre: ${values.name}`,
        values.phone ? `Teléfono: ${values.phone}` : undefined,
        values.email ? `Email: ${values.email}` : undefined,
        "",
        values.message
      ]
        .filter(Boolean)
        .join("\\n")
    );

    window.location.href = `mailto:${siteConfig.email}?subject=${subject}&body=${body}`;
  }

  function setField<K extends keyof FormState>(key: K, value: string) {
    setValues((v) => ({ ...v, [key]: value }));
  }

  function fieldError(key: keyof FormState) {
    if (!touched[key]) return undefined;
    return errors[key];
  }

  return (
    <form onSubmit={onSubmit} className={cn("grid gap-4", className)} noValidate>
      <div className="grid gap-1.5">
        <label className="text-sm font-medium text-ink-900" htmlFor="name">
          Nombre *
        </label>
        <input
          id="name"
          name="name"
          value={values.name}
          onChange={(e) => setField("name", e.target.value)}
          onBlur={() => setTouched((t) => ({ ...t, name: true }))}
          className={cn(
            "h-11 rounded-xl border px-3 text-sm outline-none transition",
            fieldError("name")
              ? "border-red-400 focus:ring-2 focus:ring-red-200"
              : "border-ink-900/10 focus:ring-2 focus:ring-leaf-100"
          )}
          autoComplete="name"
          required
        />
        {fieldError("name") ? (
          <p className="text-sm text-red-600">{fieldError("name")}</p>
        ) : null}
      </div>

      <div className="grid gap-1.5">
        <label className="text-sm font-medium text-ink-900" htmlFor="phone">
          Teléfono (opcional)
        </label>
        <input
          id="phone"
          name="phone"
          value={values.phone}
          onChange={(e) => setField("phone", e.target.value)}
          onBlur={() => setTouched((t) => ({ ...t, phone: true }))}
          className="h-11 rounded-xl border border-ink-900/10 px-3 text-sm outline-none transition focus:ring-2 focus:ring-leaf-100"
          autoComplete="tel"
        />
      </div>

      <div className="grid gap-1.5">
        <label className="text-sm font-medium text-ink-900" htmlFor="email">
          Email (opcional)
        </label>
        <input
          id="email"
          name="email"
          value={values.email}
          onChange={(e) => setField("email", e.target.value)}
          onBlur={() => setTouched((t) => ({ ...t, email: true }))}
          className={cn(
            "h-11 rounded-xl border px-3 text-sm outline-none transition",
            fieldError("email")
              ? "border-red-400 focus:ring-2 focus:ring-red-200"
              : "border-ink-900/10 focus:ring-2 focus:ring-leaf-100"
          )}
          autoComplete="email"
          inputMode="email"
        />
        {fieldError("email") ? (
          <p className="text-sm text-red-600">{fieldError("email")}</p>
        ) : null}
      </div>

      <div className="grid gap-1.5">
        <label className="text-sm font-medium text-ink-900" htmlFor="message">
          Mensaje *
        </label>
        <textarea
          id="message"
          name="message"
          value={values.message}
          onChange={(e) => setField("message", e.target.value)}
          onBlur={() => setTouched((t) => ({ ...t, message: true }))}
          className={cn(
            "min-h-[120px] rounded-xl border px-3 py-2 text-sm outline-none transition",
            fieldError("message")
              ? "border-red-400 focus:ring-2 focus:ring-red-200"
              : "border-ink-900/10 focus:ring-2 focus:ring-leaf-100"
          )}
          required
        />
        {fieldError("message") ? (
          <p className="text-sm text-red-600">{fieldError("message")}</p>
        ) : null}
      </div>

      <button
        type="submit"
        className={cn(
          "inline-flex h-11 items-center justify-center rounded-xl px-4 text-sm font-semibold text-white transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-leaf-600",
          canSubmit ? "bg-leaf-600 hover:bg-leaf-700" : "bg-ink-900/20"
        )}
      >
        Enviar (abre tu email)
      </button>

      <noscript>
        <p className="text-sm text-ink-800/80">
          JavaScript está desactivado. Puedes escribirnos directamente a{" "}
          <a className="underline" href={`mailto:${siteConfig.email}`}>
            {siteConfig.email}
          </a>
          .
        </p>
      </noscript>
    </form>
  );
}

