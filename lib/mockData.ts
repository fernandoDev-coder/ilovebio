export type ProductCategory = {
  slug: string;
  title: string;
  description: string;
  image: {
    src: string;
    alt: string;
  };
};

export type Product = {
  id: string;
  name: string;
  categorySlug: string;
  description: string;
  tags: string[];
};

// TODO (cliente): reemplaza imágenes/texteos por contenido real.
export const productCategories: ProductCategory[] = [
  {
    slug: "fruta-verdura",
    title: "Fruta y verdura",
    description:
      "Selección de temporada con opciones ecológicas y proximidad cuando es posible.",
    image: { src: "/images/cat-fruta-verdura.svg", alt: "Fruta y verdura eco" }
  },
  {
    slug: "alimentacion-bio",
    title: "Alimentación bio",
    description:
      "Despensa diaria: cereales, legumbres, bebidas vegetales, snacks y más.",
    image: { src: "/images/cat-alimentacion.svg", alt: "Alimentación bio" }
  },
  {
    slug: "cosmetica-bio",
    title: "Cosmética bio",
    description:
      "Cuidado personal natural: higiene, facial, corporal y productos sin sulfatos.",
    image: { src: "/images/cat-cosmetica.svg", alt: "Cosmética bio" }
  },
  {
    slug: "suplementacion",
    title: "Suplementación",
    description:
      "Complementos y apoyo nutricional: vitaminas, minerales y fórmulas herbales.",
    image: { src: "/images/cat-suplementacion.svg", alt: "Suplementación" }
  }
];

export const products: Product[] = [
  {
    id: "p1",
    name: "Mix de frutos secos eco",
    categorySlug: "alimentacion-bio",
    description: "Ideal para snack o toppings. Sin azúcares añadidos.",
    tags: ["bio", "sin azúcar"]
  },
  {
    id: "p2",
    name: "Crema de manos natural",
    categorySlug: "cosmetica-bio",
    description: "Textura ligera con ingredientes de origen natural.",
    tags: ["natural", "piel sensible"]
  },
  {
    id: "p3",
    name: "Kombucha artesanal (varios sabores)",
    categorySlug: "alimentacion-bio",
    description: "Bebida fermentada refrescante. Consultar stock por WhatsApp.",
    tags: ["fermentado", "sin alcohol"]
  },
  {
    id: "p4",
    name: "Vitamina D3 + K2",
    categorySlug: "suplementacion",
    description: "Apoyo nutricional. Recomendación personalizada en tienda.",
    tags: ["suplemento", "consulta"]
  },
  {
    id: "p5",
    name: "Verduras de temporada",
    categorySlug: "fruta-verdura",
    description: "Variedad según temporada. Pregunta por las llegadas del día.",
    tags: ["fresco", "temporada"]
  },
  {
    id: "p6",
    name: "Champú sólido suave",
    categorySlug: "cosmetica-bio",
    description: "Alternativa sin plástico. Apto para uso frecuente.",
    tags: ["zero waste", "suave"]
  }
];

