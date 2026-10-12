import type { MetadataRoute } from "next";
import { site } from "@/content/site";
import { locales } from "@/i18n/config";

export default function sitemap(): MetadataRoute.Sitemap {
  const languages = Object.fromEntries(locales.map((code) => [code, `${site.url}/${code}`]));
  return locales.map((code) => ({
    url: `${site.url}/${code}`,
    changeFrequency: "monthly",
    priority: code === "it" ? 1 : 0.8,
    alternates: { languages },
  }));
}
