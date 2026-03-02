import Image from "next/image";
import { Container } from "@/components/Container";
import { Card } from "@/components/Card";
import { SectionHeading } from "@/components/SectionHeading";
import { Button } from "@/components/Button";
import { Badge } from "@/components/Badge";
import { ContactForm } from "@/components/ContactForm";
import { OpeningHours } from "@/components/OpeningHours";
import { HashScroll } from "@/components/HashScroll";
import { buildMetadata } from "@/lib/seo";
import {
  getFullAddress,
  getWhatsAppUrl,
  siteConfig
} from "@/lib/siteConfig";
import { productCategories, products } from "@/lib/mockData";

export const metadata = buildMetadata({
  title: "Supermercado ecológico en Alhaurín de la Torre",
  description:
    "Alimentación bio, fruta y verdura, cosmética natural y suplementación. Servicios: naturopatía, masajes y talleres/retiros. Contacto rápido por WhatsApp y teléfono.",
  path: "/"
});

export default function HomePage() {
  const address = getFullAddress();
  const mapsSrc = `https://www.google.com/maps?q=${encodeURIComponent(
    address
  )}&output=embed`;

  return (
    <div>
      <HashScroll />

      <section id="inicio" className="scroll-mt-20 bg-sand-50">
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
              <Button href="#productos" variant="secondary">
                Ver productos
              </Button>
              <Button href="#servicios" variant="secondary">
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

      <section
        id="productos"
        className="scroll-mt-20 bg-sand-50"
        aria-label="Productos"
      >
        <Container className="py-14">
          <SectionHeading
            eyebrow="Productos"
            title="Categorías y ejemplos"
            description="Una muestra orientativa. Para stock y novedades, lo más rápido es escribir por WhatsApp."
          />

          <div className="mt-6">
            <Button href={getWhatsAppUrl()} target="_blank" rel="noreferrer">
              Consultar por WhatsApp
            </Button>
          </div>

          <div className="mt-10">
            <SectionHeading
              eyebrow="Categorías"
              title="Lo que puedes encontrar"
              description="Sustituye estas imágenes y textos por contenido real cuando esté listo."
            />
            <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
              {productCategories.map((c) => (
                <Card key={c.slug} className="overflow-hidden p-0">
                  <Image
                    src={c.image.src}
                    alt={c.image.alt}
                    width={800}
                    height={600}
                    className="h-40 w-full object-cover"
                  />
                  <div className="p-5">
                    <div className="text-base font-bold text-ink-900">
                      {c.title}
                    </div>
                    <p className="mt-2 text-sm text-ink-800/80">
                      {c.description}
                    </p>
                  </div>
                </Card>
              ))}
            </div>
          </div>

          <div className="mt-12">
            <SectionHeading
              eyebrow="Ejemplos"
              title="Productos (mock data)"
              description="Listado de ejemplo. Ajusta/añade productos en lib/mockData.ts."
            />
            <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {products.map((p) => (
                <Card key={p.id}>
                  <div className="flex items-start justify-between gap-4">
                    <div className="text-base font-bold text-ink-900">
                      {p.name}
                    </div>
                    <span className="text-xs font-semibold text-leaf-700">
                      {p.categorySlug.replaceAll("-", " ")}
                    </span>
                  </div>
                  <p className="mt-2 text-sm text-ink-800/80">{p.description}</p>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {p.tags.map((t) => (
                      <span
                        key={t}
                        className="rounded-full bg-white px-2.5 py-1 text-xs text-ink-800 ring-1 ring-ink-900/10"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </Card>
              ))}
            </div>

            <div className="mt-10 rounded-2xl border border-ink-900/10 bg-white p-5">
              <div className="text-sm font-semibold text-ink-900">
                Consulta disponibilidad por WhatsApp
              </div>
              <p className="mt-2 text-sm text-ink-800/80">
                Por ser un comercio local, el stock puede variar por temporada y
                proveedores.
              </p>
              <div className="mt-4">
                <Button href={getWhatsAppUrl()} target="_blank" rel="noreferrer">
                  Consultar ahora
                </Button>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section
        id="servicios"
        className="scroll-mt-20"
        aria-label="Servicios"
      >
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

          <div className="mt-12 grid gap-10">
            <div>
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
                    <Button
                      href={getWhatsAppUrl()}
                      target="_blank"
                      rel="noreferrer"
                    >
                      Reservar por WhatsApp
                    </Button>
                    <Button href="#contacto" variant="secondary">
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
            </div>

            <div>
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
                    <Button
                      href={getWhatsAppUrl()}
                      target="_blank"
                      rel="noreferrer"
                    >
                      Reservar por WhatsApp
                    </Button>
                    <Button
                      href={`mailto:${siteConfig.email}`}
                      variant="secondary"
                    >
                      Pedir información
                    </Button>
                  </div>
                </Card>
              </div>
            </div>

            <div>
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
                    <div className="text-lg font-bold text-ink-900">
                      {x.title}
                    </div>
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
            </div>
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

      <section
        id="sobre"
        className="scroll-mt-20 bg-sand-50"
        aria-label="Sobre"
      >
        <Container className="py-14">
          <SectionHeading
            eyebrow="Sobre"
            title="Una tienda eco, cercana y de barrio"
            description="Placeholders: ajusta con la historia y valores reales."
          />

          <div className="mt-8 grid gap-4 md:grid-cols-3">
            <Card>
              <div className="text-lg font-bold text-ink-900">Cercanía</div>
              <p className="mt-2 text-sm text-ink-800/80">
                Te atendemos con calma y orientación clara (placeholder).
              </p>
            </Card>
            <Card>
              <div className="text-lg font-bold text-ink-900">Calidad</div>
              <p className="mt-2 text-sm text-ink-800/80">
                Selección de productos bio y naturales (placeholder).
              </p>
            </Card>
            <Card>
              <div className="text-lg font-bold text-ink-900">
                Bienestar integral
              </div>
              <p className="mt-2 text-sm text-ink-800/80">
                Alimentación + hábitos + servicios (placeholder).
              </p>
            </Card>
          </div>

          <div className="mt-10 grid gap-4 md:grid-cols-2 md:items-center">
            <div className="relative overflow-hidden rounded-3xl border border-ink-900/10 bg-white shadow-soft">
              <Image
                src="/images/about-1.svg"
                alt="Foto de tienda (placeholder)"
                width={1200}
                height={900}
                className="h-auto w-full"
              />
            </div>
            <div className="relative overflow-hidden rounded-3xl border border-ink-900/10 bg-white shadow-soft">
              <Image
                src="/images/about-2.svg"
                alt="Producto ecológico (placeholder)"
                width={1200}
                height={900}
                className="h-auto w-full"
              />
            </div>
          </div>
          <p className="mt-6 max-w-3xl text-sm text-ink-800/80">
            {/* TODO (cliente): añade aquí texto real sobre certificaciones, proveedores o especialidades */}
            Puedes destacar aquí: proximidad, marcas favoritas, productos sin
            gluten/vegano, etc.
          </p>
        </Container>
      </section>

      <section
        id="contacto"
        className="scroll-mt-20"
        aria-label="Contacto"
      >
        <Container className="py-14">
          <SectionHeading
            eyebrow="Contacto"
            title="Hablemos"
            description="WhatsApp y llamada para consultas rápidas. Email o formulario para mensajes más detallados."
          />
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

        <Container className="grid gap-6 pb-14 md:grid-cols-2">
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

