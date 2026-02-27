"use client";

import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import { getWhatsAppUrl } from "@/lib/siteConfig";

export function WhatsAppFloat() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  if (!mounted) return null;

  return (
    <a
      href={getWhatsAppUrl()}
      target="_blank"
      rel="noreferrer"
      className={cn(
        "fixed bottom-5 right-5 z-50 inline-flex items-center gap-2 rounded-full bg-leaf-600 px-4 py-3 text-sm font-semibold text-white shadow-soft transition hover:bg-leaf-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-leaf-600"
      )}
      aria-label="Abrir chat de WhatsApp"
    >
      <span
        aria-hidden="true"
        className="inline-block h-2.5 w-2.5 rounded-full bg-white/90"
      />
      WhatsApp
    </a>
  );
}

