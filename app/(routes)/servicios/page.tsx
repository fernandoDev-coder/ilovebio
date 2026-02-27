import Image from "next/image";
import { Container } from "@/components/Container";
import { Card } from "@/components/Card";
import { SectionHeading } from "@/components/SectionHeading";
import { Button } from "@/components/Button";
import { Badge } from "@/components/Badge";
import { buildMetadata } from "@/lib/seo";
import { getWhatsAppUrl, siteConfig } from "@/lib/siteConfig";

export const metadata = buildMetadata({
  title: "Servicios: naturopatía, masajes y talleres",
  description:
    "Servicios orientados al bienestar: consulta de naturopatía, masajes y talleres/retiros. Reserva por WhatsApp o email.",
  path: "/servicios"
});

export default function ServiciosPage() {
  return (
    <div>
      <section className="bg-sand-50">
        <Container className="py-14">
          <Badge>Servicios</Badge>
          <h1 className="mt-3 text-4xl font-extrabold tracking-tight text-ink-900">
            Bienestar y acompañamiento
          </h1>
          <p className="mt-3 max-w-2xl text-ink-800/80">
            Secciones con contenido placeholder. Ajusta textos, duración y
            precios cuando el cliente los confirme.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Button href={getWhatsAppUrl()} target="_blank" rel="noreferrer">
              Reservar por WhatsApp
            </Button>
            <Button href={`mailto:${siteConfig.email}`} variant="secondary">
              Reservar por email
            </Button>
          </div>
        </Container>
      </section>

      <section>
        <Container className="py-14">
          <SectionHeading
            eyebrow="1:1"
            title="Consulta de naturopatía"
            description="Enfoque natural, hábitos y orientación (placeholder)."
          />
          <div className="mt-8 grid gap-4 md:grid-cols-2 md:items-center">
            <Card>
              <ul className="grid gap-2 text-sm text-ink-800/80">
                <li>• Entrevista inicial y objetivos (placeholder)</li>
                <li>• Recomendación de hábitos y alimentación (placeholder)</li>
                <li>• Plan de seguimiento opcional (placeholder)</li>
              </ul>
              <div className="mt-5 flex flex-wrap gap-3">
                <Button href={getWhatsAppUrl()} target="_blank" rel="noreferrer">
                  Reservar por WhatsApp
                </Button>
                <Button href="/contacto" variant="secondary">
                  Consultar dudas
                </Button>
              </div>
            </Card>
            <div className="relative overflow-hidden rounded-3xl border border-ink-900/10 bg-white shadow-soft">
              <Image
                src="/images/service-naturopatia.svg"
                alt="Consulta de naturopatía (placeholder)"
                width={1200}
                height={900}
                className="h-auto w-full"
              />
            </div>
          </div>
        </Container>
      </section>

      <section className="bg-sand-50">
        <Container className="py-14">
          <SectionHeading
            eyebrow="Cuerpo"
            title="Servicio de masajes"
            description="Relajación, descarga y bienestar (placeholder)."
          />
          <div className="mt-8 grid gap-4 md:grid-cols-2 md:items-center">
            <div className="relative overflow-hidden rounded-3xl border border-ink-900/10 bg-white shadow-soft md:order-1">
              <Image
                src="/images/service-masajes.svg"
                alt="Servicio de masajes (placeholder)"
                width={1200}
                height={900}
                className="h-auto w-full"
              />
            </div>
            <Card className="md:order-2">
              <ul className="grid gap-2 text-sm text-ink-800/80">
                <li>• Sesiones de 30/60 min (placeholder)</li>
                <li>• Personalización según molestias (placeholder)</li>
                <li>• Recomendaciones post-sesión (placeholder)</li>
              </ul>
              <div className="mt-5 flex flex-wrap gap-3">
                <Button href={getWhatsAppUrl()} target="_blank" rel="noreferrer">
                  Reservar por WhatsApp
                </Button>
                <Button href={`mailto:${siteConfig.email}`} variant="secondary">
                  Pedir información
                </Button>
              </div>
            </Card>
          </div>
        </Container>
      </section>

      <section>
        <Container className="py-14">
          <SectionHeading
            eyebrow="Comunidad"
            title="Talleres y retiros"
            description="Actividades puntuales (placeholder): alimentación consciente, bienestar, etc."
          />
          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {[
              {
                title: "Taller de hábitos",
                desc: "Sesión práctica y materiales (placeholder)."
              },
              {
                title: "Cata/degustación bio",
                desc: "Descubre productos y combinaciones (placeholder)."
              },
              {
                title: "Retiro de bienestar",
                desc: "Experiencia de fin de semana (placeholder)."
              }
            ].map((x) => (
              <Card key={x.title}>
                <div className="text-lg font-bold text-ink-900">{x.title}</div>
                <p className="mt-2 text-sm text-ink-800/80">{x.desc}</p>
                <div className="mt-5">
                  <Button
                    href={getWhatsAppUrl()}
                    target="_blank"
                    rel="noreferrer"
                  >
                    Solicitar fechas
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </Container>
      </section>
    </div>
  );
}

