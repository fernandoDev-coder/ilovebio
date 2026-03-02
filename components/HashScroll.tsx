"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

function scrollToHash() {
  const hash = window.location.hash;
  if (!hash || hash.length < 2) return;
  const id = decodeURIComponent(hash.slice(1));
  const el = document.getElementById(id);
  if (!el) return;

  el.scrollIntoView({ behavior: "smooth", block: "start" });
}

export function HashScroll() {
  const pathname = usePathname();

  useEffect(() => {
    if (pathname !== "/") return;

    const onHashChange = () => scrollToHash();
    window.addEventListener("hashchange", onHashChange);

    requestAnimationFrame(() => {
      scrollToHash();
    });

    return () => window.removeEventListener("hashchange", onHashChange);
  }, [pathname]);

  return null;
}

