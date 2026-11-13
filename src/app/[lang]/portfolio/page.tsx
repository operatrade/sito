import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Header } from "@/components/Header";
import { ArrowIcon } from "@/components/Icons";
import { PortfolioGallery, type GalleryProject } from "@/components/PortfolioGallery";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { Footer } from "@/components/sections/Footer";
import { portfolio } from "@/content/portfolio";
import { site } from "@/content/site";
import { fallbackLocale, hasLocale, locales, openGraphLocales } from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionaries";

export async function generateMetadata({ params }: PageProps<"/[lang]/portfolio">): Promise<Metadata> {
  const { lang } = await params;
  if (!hasLocale(lang)) return {};
  const t = (await getDictionary(lang)).portfolio;
  const cover = portfolio[0].photos[0].image;
  return {
    title: t.meta.title,
    description: t.meta.description,
    alternates: {
      canonical: `/${lang}/portfolio`,
      languages: {
        ...Object.fromEntries(locales.map((code) => [code, `/${code}/portfolio`])),
        "x-default": `/${fallbackLocale}/portfolio`,
      },
    },
    openGraph: {
      type: "website",
      siteName: "Opera Trade",
      title: t.meta.title,
      description: t.meta.description,
      url: `/${lang}/portfolio`,
      locale: openGraphLocales[lang],
      images: [{ url: cover.src, width: cover.width, height: cover.height }],
    },
  };
}

export default async function PortfolioPage({ params }: PageProps<"/[lang]/portfolio">) {
  const { lang: locale } = await params;
  if (!hasLocale(locale)) notFound();
  const dict = await getDictionary(locale);
  const t = dict.portfolio;

  // Texts are resolved here, so the browser receives only this language and only what the gallery shows.
  const projects: GalleryProject[] = portfolio.map((project) => ({
    key: project.key,
    sector: project.sector,
    title: t.projects[project.key].title,
    text: t.projects[project.key].text,
    photos: project.photos.map((photo) => ({ image: photo.image, caption: t.rooms[photo.room] })),
  }));

  return (
    <>
      <Header locale={locale} nav={dict.nav} loginUrl={site.managementUrl} page="portfolio" />
      <main>
        <section className="pf-intro">
          <div className="wrap">
            <a className="pf-back" href={`/${locale}`}>
              ← {t.back}
            </a>
            <p className="eyebrow">{t.eyebrow}</p>
            <h1>
              {t.titleStart}
              <em>{t.titleEmphasis}</em>
            </h1>
            <p className="lead">{t.lead}</p>
            <p className="pf-note">{t.note}</p>
          </div>
        </section>

        <PortfolioGallery
          projects={projects}
          labels={{
            filterLabel: t.filterLabel,
            filters: t.filters,
            enlarge: t.enlarge,
            close: t.close,
            previous: t.previous,
            next: t.next,
          }}
        />

        <section className="pf-cta dark">
          <div className="wrap">
            <h2>{t.cta.title}</h2>
            <p>{t.cta.text}</p>
            <a className="btn btn-light" href={`/${locale}#contact`}>
              <span>{t.cta.button}</span>
              <ArrowIcon />
            </a>
          </div>
        </section>
      </main>
      <Footer t={dict.footer} nav={dict.nav} locale={locale} page="portfolio" />
      <WhatsAppButton label={dict.contact.direct.whatsapp} />
    </>
  );
}
