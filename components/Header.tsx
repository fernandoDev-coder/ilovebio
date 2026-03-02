import { Container } from "@/components/Container";
import { Button } from "@/components/Button";
import { getWhatsAppUrl, siteConfig } from "@/lib/siteConfig";

const navLinkClassName =
  "rounded-lg px-3 py-2 text-sm font-medium text-ink-800 transition-colors duration-200 ease-out hover:bg-ink-900/5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-leaf-600 motion-reduce:transition-none";

export function Header() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-ink-900/10 bg-white/80 backdrop-blur">
      <Container className="flex h-16 items-center justify-between gap-3">
        <div className="flex items-center gap-4">
          <a
            href="#inicio"
            className="rounded-lg px-2 py-1 text-sm font-extrabold tracking-tight text-ink-900 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-leaf-600"
            aria-label={`${siteConfig.name} - Inicio`}
          >
            I love bio
          </a>
          <nav className="hidden items-center gap-1 md:flex" aria-label="Navegación">
            <a className={navLinkClassName} href="#inicio">
              Inicio
            </a>
            <a className={navLinkClassName} href="#productos">
              Productos
            </a>
            <a className={navLinkClassName} href="#servicios">
              Servicios
            </a>
            <a className={navLinkClassName} href="#sobre">
              Sobre
            </a>
            <a className={navLinkClassName} href="#contacto">
              Contacto
            </a>
          </nav>
        </div>

        <div className="flex items-center gap-2">
          <Button
            href={getWhatsAppUrl()}
            target="_blank"
            rel="noreferrer"
            variant="secondary"
            className="hidden sm:inline-flex"
          >
            WhatsApp
          </Button>
          <Button href={`tel:${siteConfig.phoneE164}`} variant="primary">
            Llamar
          </Button>
        </div>
      </Container>
    </header>
  );
}
