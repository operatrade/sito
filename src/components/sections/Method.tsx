import type { Dictionary } from "@/i18n/dictionaries";

const numerals = ["I", "II", "III", "IV"];

export function Method({ t }: { t: Dictionary["method"] }) {
  return (
    <section className="section dark" id="method">
      <div className="wrap">
        <div className="section-head">
          <div>
            <p className="eyebrow">{t.eyebrow}</p>
            <h2>
              {t.titleStart}
              <em>{t.titleEmphasis}</em>
            </h2>
          </div>
        </div>
        <ol className="steps">
          {t.steps.map((step, i) => (
            <li className="step reveal" key={step.title}>
              <span className="step-num" aria-hidden="true">
                {numerals[i]}
              </span>
              <h3>{step.title}</h3>
              <p>{step.text}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
