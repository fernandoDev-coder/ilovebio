import Image from "next/image";
import { Container } from "@/components/Container";
import { Card } from "@/components/Card";
import { SectionHeading } from "@/components/SectionHeading";
import { Button } from "@/components/Button";
import { Badge } from "@/components/Badge";
import { buildMetadata } from "@/lib/seo";
import { getWhatsAppUrl } from "@/lib/siteConfig";

export const metadata = buildMetadata({
  title: "Supermercado ecológico en Alhaurín de la Torre",
  description:
    "Alimentación bio, fruta y verdura, cosmética natural y suplementación. Servicios: naturopatía, masajes y talleres/retiros. Contacto rápido por WhatsApp y teléfono.",
  path: "/"
});

export default function HomePage() {
  return (
    <div>
      <section className="bg-sand-50">
        <Container className="grid gap-10 py-14 md:grid-cols-2 md:items-center">
          <div className="space-y-6">
            <Badge>Eco / Natural / Premium sencillo</Badge>
            <h1 className="text-4xl font-extrabold tracking-tight text-ink-900 sm:text-5xl">
              Supermercado ecológico en Alhaurín de la Torre
            </h1>
            <p className="max-w-xl text-base leading-relaxed text-ink-800/80">
              Un espacio cercano para tu compra bio y bienestar: productos
              ecológicos, opciones sin procesados y asesoramiento personalizado.
            </p>
            <div className="flex flex-wrap gap-3">
              <Button href="/productos" variant="secondary">
                Ver productos
              </Button>
              <Button href="/servicios" variant="secondary">
                Ver servicios
              </Button>
              <Button href={getWhatsAppUrl()} target="_blank" rel="noreferrer">
                Hablar por WhatsApp
              </Button>
            </div>
            <p className="text-xs text-ink-800/70">
              {/* TODO (cliente): ajusta este texto si quieres enfatizar marcas/certificaciones */}
              Atención personalizada y recomendaciones según tus necesidades.
            </p>
          </div>

          <div className="relative overflow-hidden rounded-3xl border border-ink-900/10 bg-white shadow-soft">
            <Image
              src="/images/hero-eco.svg"
              alt="Interior de supermercado ecológico (placeholder)"
              width={1200}
              height={900}
              priority
              className="h-auto w-full"
            />
          </div>
        </Container>
      </section>

      <section>
        <Container className="py-14">
          <SectionHeading
            eyebrow="Beneficios"
            title="Compra eco con confianza"
            description="Lo esencial de una tienda local: calidad, cercanía y selección cuidada."
          />
          <div className="mt-8 grid gap-4 md:grid-cols-3">
            <Card>
              <div className="text-lg font-bold text-ink-900">Calidad eco</div>
              <p className="mt-2 text-sm text-ink-800/80">
                Productos ecológicos y opciones naturales para el día a día.
              </p>
            </Card>
            <Card>
              <div className="text-lg font-bold text-ink-900">
                Atención personalizada
              </div>
              <p className="mt-2 text-sm text-ink-800/80">
                Te ayudamos a elegir según objetivos, intolerancias o estilo de
                vida.
              </p>
            </Card>
            <Card>
              <div className="text-lg font-bold text-ink-900">
                Productos frescos
              </div>
              <p className="mt-2 text-sm text-ink-800/80">
                Fruta y verdura con rotación. Pregunta por la llegada de
                temporada.
              </p>
            </Card>
          </div>
        </Container>
      </section>

      <section className="bg-sand-50">
        <Container className="py-14">
          <SectionHeading
            eyebrow="Categorías"
            title="Destacados de tienda"
            description="Explora lo más buscado: alimentación bio, cosmética natural y suplementación."
          />
          <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {[
              {
                title: "Fruta y verdura",
                desc: "Temporada y proximidad (según disponibilidad).",
                img: "/images/cat-fruta-verdura.svg"
              },
              {
                title: "Alimentación bio",
                desc: "Despensa completa para tu rutina.",
                img: "/images/cat-alimentacion.svg"
              },
              {
                title: "Cosmética bio",
                desc: "Cuidado personal natural y responsable.",
                img: "/images/cat-cosmetica.svg"
              },
              {
                title: "Suplementación",
                desc: "Apoyo nutricional con recomendación.",
                img: "/images/cat-suplementacion.svg"
              }
            ].map((c) => (
              <Card key={c.title} className="overflow-hidden p-0">
                <Image
                  src={c.img}
                  alt={c.title}
                  width={800}
                  height={600}
                  className="h-40 w-full object-cover"
                />
                <div className="p-5">
                  <div className="text-base font-bold text-ink-900">
                    {c.title}
                  </div>
                  <p className="mt-2 text-sm text-ink-800/80">{c.desc}</p>
                </div>
              </Card>
            ))}
          </div>
          <div className="mt-8">
            <Button href="/productos" variant="secondary">
              Ver todas las categorías
            </Button>
          </div>
        </Container>
      </section>

      <section>
        <Container className="py-14">
          <SectionHeading
            eyebrow="Servicios"
            title="Bienestar con enfoque natural"
            description="Servicios en tienda para acompañarte: consulta, masajes y actividades."
          />
          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {[
              {
                title: "Naturopatía",
                desc: "Consulta orientativa y hábitos de bienestar (placeholder)."
              },
              {
                title: "Masajes",
                desc: "Sesiones para relajación y recuperación (placeholder)."
              },
              {
                title: "Talleres / Retiros",
                desc: "Actividades puntuales y experiencias (placeholder)."
              }
            ].map((s) => (
              <Card key={s.title}>
                <div className="text-lg font-bold text-ink-900">{s.title}</div>
                <p className="mt-2 text-sm text-ink-800/80">{s.desc}</p>
              </Card>
            ))}
          </div>
          <div className="mt-8">
            <Button href="/servicios" variant="secondary">
              Ver servicios
            </Button>
          </div>
        </Container>
      </section>

      <section className="bg-ink-900">
        <Container className="py-14">
          <div className="grid gap-6 md:grid-cols-2 md:items-center">
            <div>
              <h2 className="text-3xl font-extrabold tracking-tight text-white">
                ¿Te ayudamos por WhatsApp?
              </h2>
              <p className="mt-3 text-white/80">
                Consulta disponibilidad, dudas sobre productos o reserva de
                servicios en un minuto.
              </p>
            </div>
            <div className="flex md:justify-end">
              <Button href={getWhatsAppUrl()} target="_blank" rel="noreferrer">
                Hablar por WhatsApp
              </Button>
            </div>
          </div>
        </Container>
      </section>

      <section className="bg-sand-50">
        <Container className="py-14">
          <SectionHeading
            eyebrow="Testimonios"
            title="Opiniones de clientes"
            description="Placeholders — añade reseñas reales cuando el cliente las facilite."
          />
          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {[
              {
                quote:
                  "“Trato cercano y buena selección. Me orientaron con suplementos.”",
                name: "Cliente local"
              },
              {
                quote:
                  "“Tienda bonita, productos bio de calidad y opciones sin gluten.”",
                name: "Reseña"
              },
              {
                quote:
                  "“Muy cómodo para consultar por WhatsApp antes de pasarme.”",
                name: "Vecino/a"
              }
            ].map((t, idx) => (
              <Card key={idx}>
                <p className="text-sm text-ink-800/80">{t.quote}</p>
                <div className="mt-3 text-sm font-semibold text-ink-900">
                  {t.name}
                </div>
              </Card>
            ))}
          </div>
        </Container>
      </section>
    </div>
  );
}

