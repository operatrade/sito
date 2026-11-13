import Image from "next/image";
import { gallery, site } from "@/content/site";
import type { Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/dictionaries";
import { ArrowIcon } from "../Icons";

// Column spans live in globals.css (.shot-wide 7, .shot-narrow 5, .shot-third 4 of 12).
const sizes = {
  wide: "(max-width: 720px) 92vw, 720px",
  narrow: "(max-width: 720px) 92vw, 520px",
  third: "(max-width: 720px) 92vw, 400px",
} as const;

export function Projects({ t, locale }: { t: Dictionary["projects"]; locale: Locale }) {
  return (
    <section className="section" id="projects">
      <div className="wrap">
        <div className="section-head">
          <div>
            <p className="eyebrow">{t.eyebrow}</p>
            <h2>{t.title}</h2>
          </div>
          <div className="section-head-aside">
            {site.draft && <p>{t.note}</p>}
            <a className="btn" href={`/${locale}/portfolio`}>
              <span>{t.more}</span>
              <ArrowIcon />
            </a>
          </div>
        </div>
        <div className="gallery">
          {gallery.map((item) => (
            <figure className={`shot shot-${item.size} reveal`} key={item.key}>
              <div className="shot-media">
                <Image src={item.photo} alt="" fill sizes={sizes[item.size]} placeholder="blur" />
                {item.render ? (
                  <span className="tag">{t.render}</span>
                ) : (
                  site.draft && <span className="tag">{t.sample}</span>
                )}
              </div>
              <figcaption>{t.captions[item.key]}</figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
