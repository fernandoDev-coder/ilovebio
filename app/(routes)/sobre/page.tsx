import Image from "next/image";
import { Container } from "@/components/Container";
import { Card } from "@/components/Card";
import { SectionHeading } from "@/components/SectionHeading";
import { Badge } from "@/components/Badge";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Sobre nosotros",
  description:
    "Conoce la historia y valores de I love bio supermercado ecológico en Alhaurín de la Torre (Málaga).",
  path: "/sobre"
});

export default function SobrePage() {
  return (
    <div>
      <section className="bg-sand-50">
        <Container className="py-14">
          <Badge>Sobre</Badge>
          <h1 className="mt-3 text-4xl font-extrabold tracking-tight text-ink-900">
            Una tienda eco, cercana y de barrio
          </h1>
          <p className="mt-3 max-w-2xl text-ink-800/80">
            {/* TODO (cliente): sustituye este texto por la historia real */}
            Nacimos con la idea de acercar una compra ecológica y consciente en
            Alhaurín de la Torre. Priorizamos selección cuidada, trato humano y
            recomendaciones sencillas para el día a día.
          </p>
        </Container>
      </section>

      <section>
        <Container className="py-14">
          <SectionHeading
            eyebrow="Valores"
            title="Lo que nos guía"
            description="Placeholders: ajusta con mensajes y pruebas sociales reales."
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
        </Container>
      </section>

      <section className="bg-sand-50">
        <Container className="py-14">
          <SectionHeading
            eyebrow="Por qué elegirnos"
            title="Experiencia premium sencilla"
            description="Una web rápida para encontrar lo importante y contactar en 1 clic."
          />
          <div className="mt-8 grid gap-4 md:grid-cols-2 md:items-center">
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
    </div>
  );
}

