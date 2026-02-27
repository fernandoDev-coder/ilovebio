export type OpeningHoursDay = {
  label: string;
  hours: string;
};

export type SiteConfig = {
  /** Cambia este valor cuando tengas el dominio final (p. ej. https://www.tudominio.com). */
  siteUrl: string;
  name: string;
  legalName?: string;
  tagline: string;
  description: string;
  address: {
    streetAddress: string;
    addressLocality: string;
    addressRegion: string;
    postalCode: string;
    addressCountry: string;
  };
  phone: string;
  /** Teléfono en formato enlazable (E.164) sin espacios. */
  phoneE164: string;
  email: string;
  social: {
    instagram: string;
    facebook: string;
  };
  whatsapp: {
    /** Teléfono en formato internacional SIN espacios (solo dígitos). */
    phoneE164Digits: string;
    /** Mensaje por defecto (editable). */
    defaultMessage: string;
  };
  openingHours: OpeningHoursDay[];
};

export const siteConfig: SiteConfig = {
  // TODO (cliente): sustituye por el dominio final cuando se publique.
  siteUrl: "https://example.com",
  name: "I love bio supermercado ecológico",
  legalName: "I love bio supermercado ecológico",
  tagline: "Eco, natural y cercano en Alhaurín de la Torre",
  description:
    "Supermercado ecológico en Alhaurín de la Torre (Málaga) con alimentación bio, fruta y verdura, cosmética natural, suplementación y servicios como naturopatía, masajes y talleres.",
  address: {
    streetAddress: "C/ San Juan, 41",
    addressLocality: "Alhaurín de la Torre",
    addressRegion: "Málaga",
    postalCode: "29130",
    addressCountry: "ES"
  },
  phone: "+34 689 94 41 07",
  phoneE164: "+34689944107",
  email: "ilovebio2017@gmail.com",
  social: {
    instagram: "https://www.instagram.com/ilovebiosupermercadoecologico/",
    facebook: "https://www.facebook.com/ilovebiosupermercadoecologico/"
  },
  whatsapp: {
    phoneE164Digits: "34689944107",
    // TODO (cliente): personaliza el texto inicial del chat.
    defaultMessage:
      "Hola, me gustaría consultar disponibilidad y horarios. ¿Podéis ayudarme?"
  },
  // TODO (cliente): edita aquí el horario real (ahora es placeholder).
  openingHours: [
    { label: "Lunes", hours: "09:30–14:00 / 17:30–20:30" },
    { label: "Martes", hours: "09:30–14:00 / 17:30–20:30" },
    { label: "Miércoles", hours: "09:30–14:00 / 17:30–20:30" },
    { label: "Jueves", hours: "09:30–14:00 / 17:30–20:30" },
    { label: "Viernes", hours: "09:30–14:00 / 17:30–20:30" },
    { label: "Sábado", hours: "10:00–14:00" },
    { label: "Domingo", hours: "Cerrado" }
  ]
};

export function getFullAddress(config: SiteConfig = siteConfig) {
  const a = config.address;
  return `${a.streetAddress}, ${a.postalCode} ${a.addressLocality}, ${a.addressRegion}`;
}

export function getWhatsAppUrl(
  message: string = siteConfig.whatsapp.defaultMessage
) {
  const text = encodeURIComponent(message);
  return `https://wa.me/${siteConfig.whatsapp.phoneE164Digits}?text=${text}`;
}
