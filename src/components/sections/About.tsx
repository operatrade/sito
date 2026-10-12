import Image from "next/image";
import { photos } from "@/content/site";
import type { Dictionary } from "@/i18n/dictionaries";

const numerals = ["i.", "ii.", "iii."];

export function About({ t }: { t: Dictionary["about"] }) {
  const [first, ...rest] = t.paragraphs;
  return (
    <section className="section" id="about">
      <div className="wrap about-grid">
        <figure className="about-img reveal">
          <Image src={photos.aboutLiving} alt="" fill sizes="(max-width: 1080px) 92vw, 500px" placeholder="blur" />
        </figure>
        <div className="about-copy">
          <p className="eyebrow">{t.eyebrow}</p>
          <h2>{t.title}</h2>
          <p className="dropcap">{first}</p>
          {rest.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
          <div className="pillars">
            {t.pillars.map((pillar, i) => (
              <div className="pillar reveal" key={pillar.title}>
                <small>{numerals[i]}</small>
                <h3>{pillar.title}</h3>
                <p>{pillar.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
