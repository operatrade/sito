import Image from "next/image";
import { photos } from "@/content/site";
import type { Dictionary } from "@/i18n/dictionaries";
import { ArrowIcon } from "../Icons";

export function Hero({ t, places }: { t: Dictionary["hero"]; places: Dictionary["places"] }) {
  const route = [places.fano, places.baku, places.tirana, places.podgorica, places.middleEast];
  return (
    <section className="hero">
      <div className="wrap hero-grid">
        <div className="hero-copy">
          <p className="eyebrow">{t.eyebrow}</p>
          <h1>
            {t.titleStart}
            <em>{t.titleEmphasis}</em>
          </h1>
          <p className="lead">{t.lead}</p>
          <div className="hero-ctas">
            <a className="btn" href="#contact">
              <span>{t.primaryCta}</span>
              <ArrowIcon />
            </a>
            <a className="link-arrow" href="#partners">
              {t.secondaryCta} →
            </a>
          </div>
          <div className="hero-places">
            {route.map((place) => (
              <span key={place}>{place}</span>
            ))}
          </div>
        </div>
        <div className="hero-visual">
          <div className="arch-wrap">
            <figure className="arch">
              <Image
                src={photos.heroLiving}
                alt=""
                fill
                sizes="(max-width: 1080px) 92vw, 560px"
                loading="eager"
                fetchPriority="high"
                placeholder="blur"
              />
              <figcaption>{t.caption}</figcaption>
            </figure>
          </div>
          <figure className="inset">
            <Image src={photos.heroPendants} alt="" fill sizes="(max-width: 1080px) 40vw, 240px" placeholder="blur" />
          </figure>
          <div className="badge">
            <strong>19</strong>
            <span>{t.badge}</span>
          </div>
        </div>
      </div>
    </section>
  );
}
