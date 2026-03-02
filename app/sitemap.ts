import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/siteConfig";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = siteConfig.siteUrl;
  const now = new Date();
  const routes = ["/"];

  return routes.map((path) => ({
    url: new URL(path, base).toString(),
    lastModified: now,
    changeFrequency: "monthly",
    priority: path === "/" ? 1 : 0.7
  }));
}
