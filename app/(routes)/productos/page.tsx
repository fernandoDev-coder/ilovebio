import Image from "next/image";
import { Container } from "@/components/Container";
import { Card } from "@/components/Card";
import { Badge } from "@/components/Badge";
import { Button } from "@/components/Button";
import { SectionHeading } from "@/components/SectionHeading";
import { buildMetadata } from "@/lib/seo";
import { productCategories, products } from "@/lib/mockData";
import { getWhatsAppUrl } from "@/lib/siteConfig";

export const metadata = buildMetadata({
  title: "Productos ecológicos y categorías",
  description:
    "Categorías destacadas y ejemplos de productos: fruta y verdura, alimentación bio, cosmética bio y suplementación. Consulta disponibilidad por WhatsApp.",
  path: "/productos"
});

export default function ProductosPage() {
  return (
    <div>
      <section className="bg-sand-50">
        <Container className="py-14">
          <Badge>Productos</Badge>
          <h1 className="mt-3 text-4xl font-extrabold tracking-tight text-ink-900">
            Categorías y ejemplos
          </h1>
          <p className="mt-3 max-w-2xl text-ink-800/80">
            Una muestra orientativa. Para stock y novedades, lo más rápido es
            escribir por WhatsApp.
          </p>
          <div className="mt-6">
            <Button href={getWhatsAppUrl()} target="_blank" rel="noreferrer">
              Consultar por WhatsApp
            </Button>
          </div>
        </Container>
      </section>

      <section>
        <Container className="py-14">
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
        </Container>
      </section>

      <section className="bg-sand-50">
        <Container className="py-14">
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
        </Container>
      </section>
    </div>
  );
}

