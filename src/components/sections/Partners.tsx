import { partnerGroups } from "@/content/site";
import type { Dictionary } from "@/i18n/dictionaries";

export function Partners({ t }: { t: Dictionary["partners"] }) {
  return (
    <section className="section alt" id="partners">
      <div className="wrap">
        <div className="section-head">
          <div>
            <p className="eyebrow">{t.eyebrow}</p>
            <h2>{t.title}</h2>
          </div>
          <p>{t.note}</p>
        </div>
        <div className="partners-grid">
          {partnerGroups.map((group) => (
            <div className="pgroup reveal" key={group.key}>
              <h3 className="pgroup-title">{t.groups[group.key]}</h3>
              <ul>
                {group.brands.map((brand) => (
                  <li key={brand}>{brand}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
