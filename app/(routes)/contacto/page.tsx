import { Container } from "@/components/Container";
import { Card } from "@/components/Card";
import { SectionHeading } from "@/components/SectionHeading";
import { Badge } from "@/components/Badge";
import { Button } from "@/components/Button";
import { ContactForm } from "@/components/ContactForm";
import { OpeningHours } from "@/components/OpeningHours";
import { buildMetadata } from "@/lib/seo";
import { getFullAddress, getWhatsAppUrl, siteConfig } from "@/lib/siteConfig";

export const metadata = buildMetadata({
  title: "Contacto",
  description:
    "Contacta con I love bio supermercado ecológico: WhatsApp, llamada, email y ubicación en Alhaurín de la Torre (Málaga).",
  path: "/contacto"
});

export default function ContactoPage() {
  const address = getFullAddress();
  const mapsSrc = `https://www.google.com/maps?q=${encodeURIComponent(
    address
  )}&output=embed`;

  return (
    <div>
      <section className="bg-sand-50">
        <Container className="py-14">
          <Badge>Contacto</Badge>
          <h1 className="mt-3 text-4xl font-extrabold tracking-tight text-ink-900">
            Hablemos
          </h1>
          <p className="mt-3 max-w-2xl text-ink-800/80">
            WhatsApp y llamada para consultas rápidas. Email o formulario para
            mensajes más detallados.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Button href={getWhatsAppUrl()} target="_blank" rel="noreferrer">
              WhatsApp
            </Button>
            <Button href={`tel:${siteConfig.phoneE164}`} variant="secondary">
              Llamar
            </Button>
            <Button href={`mailto:${siteConfig.email}`} variant="secondary">
              Email
            </Button>
          </div>
        </Container>
      </section>

      <section>
        <Container className="grid gap-6 py-14 md:grid-cols-2">
          <Card>
            <SectionHeading
              eyebrow="Datos"
              title="Información de contacto"
              description="Datos reales del comercio (editable en lib/siteConfig.ts)."
            />
            <div className="mt-6 grid gap-2 text-sm text-ink-800/80">
              <div>
                <span className="font-semibold text-ink-900">Dirección: </span>
                {address}
              </div>
              <div>
                <span className="font-semibold text-ink-900">Teléfono: </span>
                <a className="underline" href={`tel:${siteConfig.phoneE164}`}>
                  {siteConfig.phone}
                </a>
              </div>
              <div>
                <span className="font-semibold text-ink-900">Email: </span>
                <a className="underline" href={`mailto:${siteConfig.email}`}>
                  {siteConfig.email}
                </a>
              </div>
              <div className="flex gap-3 pt-2">
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
            </div>
          </Card>

          <Card>
            <SectionHeading
              eyebrow="Horario"
              title="Horario (editable)"
              description="Este bloque se controla desde lib/siteConfig.ts."
            />
            <div className="mt-6">
              <OpeningHours />
              <p className="mt-4 text-xs text-ink-800/70">
                {/* TODO (cliente): confirma el horario real */}
                * Horario placeholder.
              </p>
            </div>
          </Card>
        </Container>
      </section>

      <section className="bg-sand-50">
        <Container className="grid gap-6 py-14 md:grid-cols-2 md:items-start">
          <Card>
            <SectionHeading
              eyebrow="Mensaje"
              title="Formulario de contacto"
              description="Sin backend: valida en cliente y abre tu app de email."
            />
            <div className="mt-6">
              <ContactForm />
            </div>
          </Card>

          <Card className="overflow-hidden p-0">
            <div className="p-5">
              <SectionHeading
                eyebrow="Ubicación"
                title="Cómo llegar"
                description="Mapa embebido con la dirección del negocio."
              />
            </div>
            <div className="aspect-[4/3] w-full overflow-hidden border-t border-ink-900/10">
              <iframe
                title="Mapa: I love bio supermercado ecológico"
                src={mapsSrc}
                className="h-full w-full"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </Card>
        </Container>
      </section>
    </div>
  );
}
