import type { Dictionary } from "@/i18n/dictionaries";
import { BuildingIcon, CompassIcon, CrateIcon, HouseIcon } from "../Icons";

// Same order as audience.items: architects, hotels & developers, retailers & importers, private residences.
const icons = [CompassIcon, BuildingIcon, CrateIcon, HouseIcon];

export function Audience({ t }: { t: Dictionary["audience"] }) {
  return (
    <section className="section alt" id="audience">
      <div className="wrap">
        <div className="section-head">
          <div>
            <p className="eyebrow">{t.eyebrow}</p>
            <h2>{t.title}</h2>
          </div>
        </div>
        <div className="aud-grid">
          {t.items.map((item, i) => {
            const Icon = icons[i];
            return (
              <article className="aud reveal" key={item.title}>
                <Icon />
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
