import Image from "next/image";
import { supplyCategories } from "@/content/site";
import type { Dictionary } from "@/i18n/dictionaries";

export function Supply({ t }: { t: Dictionary["supply"] }) {
  return (
    <section className="section" id="supply">
      <div className="wrap">
        <div className="section-head">
          <div>
            <p className="eyebrow">{t.eyebrow}</p>
            <h2>{t.title}</h2>
          </div>
        </div>
        <div className="supply-grid">
          {supplyCategories.map((category) => (
            <figure className="tile reveal" key={category.key}>
              <Image
                src={category.photo}
                alt=""
                fill
                sizes="(max-width: 720px) 46vw, (max-width: 1080px) 45vw, 290px"
                placeholder="blur"
              />
              <figcaption>
                <span>{t.categories[category.key]}</span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
