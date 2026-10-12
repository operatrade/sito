import type { Metadata } from "next";
import { Cormorant_Garamond, Manrope } from "next/font/google";
import { photos, site } from "@/content/site";
import { fallbackLocale, hasLocale, locales, openGraphLocales } from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionaries";
import "../globals.css";

const serif = Cormorant_Garamond({
  subsets: ["latin", "latin-ext", "cyrillic"],
  weight: ["400", "500"],
  style: ["normal", "italic"],
  variable: "--font-serif",
  display: "swap",
});

const sans = Manrope({
  subsets: ["latin", "latin-ext", "cyrillic"],
  variable: "--font-sans",
  display: "swap",
});

export async function generateStaticParams() {
  return locales.map((lang) => ({ lang }));
}

export async function generateMetadata({ params }: LayoutProps<"/[lang]">): Promise<Metadata> {
  const { lang } = await params;
  const locale = hasLocale(lang) ? lang : fallbackLocale;
  const dict = await getDictionary(locale);
  return {
    metadataBase: new URL(site.url),
    title: dict.meta.title,
    description: dict.meta.description,
    alternates: {
      canonical: `/${locale}`,
      languages: { ...Object.fromEntries(locales.map((code) => [code, `/${code}`])), "x-default": `/${fallbackLocale}` },
    },
    openGraph: {
      type: "website",
      siteName: "Opera Trade",
      title: dict.meta.title,
      description: dict.meta.description,
      url: `/${locale}`,
      locale: openGraphLocales[locale],
      images: [{ url: photos.heroLiving.src, width: photos.heroLiving.width, height: photos.heroLiving.height }],
    },
  };
}

export default async function RootLayout({ children, params }: LayoutProps<"/[lang]">) {
  const { lang } = await params;
  return (
    <html lang={hasLocale(lang) ? lang : fallbackLocale} className={`${serif.variable} ${sans.variable}`}>
      <body>{children}</body>
    </html>
  );
}
