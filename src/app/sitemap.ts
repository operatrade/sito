import type { MetadataRoute } from "next";
import { site } from "@/content/site";
import { locales } from "@/i18n/config";

/** The pages under each language: the home page and the project portfolio. */
const pages = [
  { path: "", priority: 1 },
  { path: "/portfolio", priority: 0.9 },
] as const;

export default function sitemap(): MetadataRoute.Sitemap {
  return pages.flatMap(({ path, priority }) => {
    const languages = Object.fromEntries(locales.map((code) => [code, `${site.url}/${code}${path}`]));
    return locales.map((code) => ({
      url: `${site.url}/${code}${path}`,
      changeFrequency: "monthly" as const,
      priority: code === "it" ? priority : priority * 0.8,
      alternates: { languages },
    }));
  });
}
