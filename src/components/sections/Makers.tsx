import type { Dictionary } from "@/i18n/dictionaries";

/** The range of manufacturers, from bespoke workshop to contract group: no brand names, no links. */
export function Makers({ t }: { t: Dictionary["makers"] }) {
  return (
    <section className="section alt" id="makers">
      <div className="wrap">
        <div className="section-head">
          <div>
            <p className="eyebrow">{t.eyebrow}</p>
            <h2>{t.title}</h2>
          </div>
          <p>{t.note}</p>
        </div>
        <div className="scale">
          <span>{t.scaleStart}</span>
          <span>{t.scaleEnd}</span>
        </div>
        <ol className="makers">
          {t.items.map((item) => (
            <li className="maker reveal" key={item.title}>
              <span className="maker-mark" aria-hidden="true">
                <i />
              </span>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
