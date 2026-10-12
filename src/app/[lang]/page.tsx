import { Header } from "@/components/Header";
import { RevealOnScroll } from "@/components/RevealOnScroll";
import { About } from "@/components/sections/About";
import { Audience } from "@/components/sections/Audience";
import { Contact } from "@/components/sections/Contact";
import { Footer } from "@/components/sections/Footer";
import { Founder } from "@/components/sections/Founder";
import { Hero } from "@/components/sections/Hero";
import { Method } from "@/components/sections/Method";
import { Partners } from "@/components/sections/Partners";
import { Projects } from "@/components/sections/Projects";
import { Stats } from "@/components/sections/Stats";
import { Supply } from "@/components/sections/Supply";
import { Where } from "@/components/sections/Where";
import { site } from "@/content/site";
import { notFound } from "next/navigation";
import { hasLocale } from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionaries";

export default async function HomePage({ params }: PageProps<"/[lang]">) {
  const { lang: locale } = await params;
  if (!hasLocale(locale)) notFound();
  const dict = await getDictionary(locale);

  return (
    <>
      {site.draft && <div className="ribbon">{dict.draft.ribbon}</div>}
      <Header locale={locale} nav={dict.nav} />
      <main>
        <Hero t={dict.hero} places={dict.places} />
        <Stats t={dict.stats} />
        <About t={dict.about} />
        <Audience t={dict.audience} />
        <Method t={dict.method} />
        <Supply t={dict.supply} />
        <Partners t={dict.partners} />
        <Projects t={dict.projects} />
        <Where t={dict.where} map={dict.map} places={dict.places} />
        <Founder t={dict.founder} draftNote={dict.draft.quoteNote} />
        <Contact t={dict.contact} locale={locale} />
      </main>
      <Footer t={dict.footer} nav={dict.nav} />
      <RevealOnScroll />
    </>
  );
}
