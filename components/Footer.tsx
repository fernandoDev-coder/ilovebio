import Link from "next/link";
import { Container } from "@/components/Container";
import { OpeningHours } from "@/components/OpeningHours";
import { getFullAddress, getWhatsAppUrl, siteConfig } from "@/lib/siteConfig";

export function Footer() {
  return (
    <footer className="border-t border-ink-900/10 bg-sand-50">
      <Container className="grid gap-8 py-12 md:grid-cols-3">
        <div className="space-y-3">
          <div className="text-base font-extrabold text-ink-900">
            {siteConfig.name}
          </div>
          <p className="text-sm text-ink-800/80">{siteConfig.tagline}</p>
          <div className="text-sm text-ink-800/80">
            <div>{getFullAddress()}</div>
            <div>
              <a className="underline" href={`tel:${siteConfig.phoneE164}`}>
                {siteConfig.phone}
              </a>
            </div>
            <div>
              <a className="underline" href={`mailto:${siteConfig.email}`}>
                {siteConfig.email}
              </a>
            </div>
          </div>
        </div>

        <div className="space-y-3">
          <div className="text-sm font-semibold text-ink-900">Enlaces</div>
          <div className="grid gap-2 text-sm">
            <Link className="underline" href="/productos">
              Productos
            </Link>
            <Link className="underline" href="/servicios">
              Servicios
            </Link>
            <Link className="underline" href="/sobre">
              Sobre
            </Link>
            <Link className="underline" href="/contacto">
              Contacto
            </Link>
            <a
              className="underline"
              href={getWhatsAppUrl()}
              target="_blank"
              rel="noreferrer"
            >
              Hablar por WhatsApp
            </a>
          </div>
        </div>

        <div className="space-y-3">
          <div className="text-sm font-semibold text-ink-900">Horario</div>
          <OpeningHours />
          <div className="text-xs text-ink-800/70">
            {/* TODO (cliente): confirma y ajusta el horario real en lib/siteConfig.ts */}
            * Horario mostrado como ejemplo editable.
          </div>
        </div>
      </Container>

      <div className="border-t border-ink-900/10 py-6">
        <Container className="flex flex-col gap-3 text-xs text-ink-800/70 md:flex-row md:items-center md:justify-between">
          <div>
            © {new Date().getFullYear()} {siteConfig.name}. Todos los derechos
            reservados.
          </div>
          <div className="flex gap-3">
            <a
              className="underline"
              href={siteConfig.social.instagram}
              target="_blank"
              rel="noreferrer"
            >
              Instagram
            </a>
            <a
              className="underline"
              href={siteConfig.social.facebook}
              target="_blank"
              rel="noreferrer"
            >
              Facebook
            </a>
          </div>
        </Container>
      </div>
    </footer>
  );
}
