import type { Metadata } from "next";
import { siteConfig } from "@/lib/siteConfig";

type PageSeo = {
  title: string;
  description: string;
  path?: string;
};

export function buildMetadata({ title, description, path = "/" }: PageSeo) {
  const url = new URL(path, siteConfig.siteUrl);

  const metadata: Metadata = {
    title,
    description,
    metadataBase: new URL(siteConfig.siteUrl),
    alternates: {
      canonical: url
    },
    openGraph: {
      title,
      description,
      url,
      siteName: siteConfig.name,
      locale: "es_ES",
      type: "website"
    },
    twitter: {
      card: "summary_large_image",
      title,
      description
    }
  };

  return metadata;
}

