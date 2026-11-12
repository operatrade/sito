import Image from "next/image";
import { sectors } from "@/content/site";
import type { Dictionary } from "@/i18n/dictionaries";

export function Sectors({ t }: { t: Dictionary["sectors"] }) {
  return (
    <section className="section" id="sectors">
      <div className="wrap">
        <div className="section-head">
          <div>
            <p className="eyebrow">{t.eyebrow}</p>
            <h2>{t.title}</h2>
          </div>
          <p>{t.lead}</p>
        </div>
        <div className="sector-grid">
          {sectors.map((sector, i) => {
            const item = t.items[sector.key];
            return (
              <figure className="tile reveal" key={sector.key}>
                <Image
                  src={sector.photo}
                  alt=""
                  fill
                  sizes={i === 0 ? "(max-width: 720px) 92vw, 800px" : "(max-width: 720px) 92vw, (max-width: 1080px) 46vw, 400px"}
                  placeholder="blur"
                />
                <figcaption>
                  <span>{item.title}</span>
                  <small>{item.text}</small>
                </figcaption>
              </figure>
            );
          })}
        </div>
      </div>
    </section>
  );
}
