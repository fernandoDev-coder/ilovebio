import { siteConfig } from "@/lib/siteConfig";

export function getLocalBusinessJsonLd() {
  // Nota: no incluimos horario real en schema.org porque ahora es placeholder.
  // Añádelo cuando el cliente confirme el horario definitivo.
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: siteConfig.name,
    legalName: siteConfig.legalName ?? siteConfig.name,
    description: siteConfig.description,
    url: siteConfig.siteUrl,
    telephone: siteConfig.phoneE164,
    email: siteConfig.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: siteConfig.address.streetAddress,
      addressLocality: siteConfig.address.addressLocality,
      addressRegion: siteConfig.address.addressRegion,
      postalCode: siteConfig.address.postalCode,
      addressCountry: siteConfig.address.addressCountry
    },
    sameAs: [siteConfig.social.instagram, siteConfig.social.facebook]
  };

  return jsonLd;
}
