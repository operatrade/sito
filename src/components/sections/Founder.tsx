import { site } from "@/content/site";
import type { Dictionary } from "@/i18n/dictionaries";

export function Founder({ t, draftNote }: { t: Dictionary["founder"]; draftNote: string }) {
  return (
    <section className="section alt" id="founder">
      <div className="wrap founder-grid">
        {/* Replace with Damiano's portrait (next/image inside .portrait) once available. */}
        <div className="portrait reveal">
          <b>DB</b>
          <span>{t.portraitPlaceholder}</span>
        </div>
        <div>
          <p className="eyebrow">{t.eyebrow}</p>
          <blockquote className="reveal">
            <span className="qmark" aria-hidden="true">
              “
            </span>
            <p className="quote">{t.quote}</p>
          </blockquote>
          <div className="sign">
            <div>
              <b>{t.name}</b>
              <small>{t.role}</small>
            </div>
          </div>
          {site.draft && <p className="draft-note">{draftNote}</p>}
        </div>
      </div>
    </section>
  );
}
