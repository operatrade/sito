import { site } from "@/content/site";
import type { Dictionary } from "@/i18n/dictionaries";

function RouteMap({ t, places }: { t: Dictionary["map"]; places: Dictionary["places"] }) {
  // Simplified projection of real coordinates: x ≈ (longitude − 6) × 11 + 20, y ≈ (47 − latitude) × 14 + 15.
  return (
    <svg className="map reveal" viewBox="30 0 600 370" role="img" aria-label={t.label}>
      <g className="grat">
        <path d="M64 0V370M174 0V370M284 0V370M394 0V370M504 0V370M614 0V370" strokeDasharray="2 6" />
        <path d="M30 43H630M30 113H630M30 183H630M30 253H630M30 323H630" strokeDasharray="2 6" />
      </g>
      <text className="sea" x="110" y="240">
        {t.mediterranean}
      </text>
      <text className="sea" x="300" y="58">
        {t.blackSea}
      </text>
      <text className="sea" x="622" y="186" textAnchor="end">
        {t.caspianSea}
      </text>
      <path className="route" d="M97 59 Q136 44 169 86" />
      <path className="route" d="M97 59 Q300 -48 503 107" />
      <path className="route" d="M97 59 Q330 250 562 318" />
      <circle className="dot" cx="169" cy="86" r="3.5" />
      <circle className="dot" cx="562" cy="318" r="3.5" />
      <circle className="ring" cx="97" cy="59" r="10" />
      <circle className="hub" cx="97" cy="59" r="5.5" />
      <circle className="ring" cx="503" cy="107" r="10" />
      <circle className="hub" cx="503" cy="107" r="5.5" />
      <text className="lbl" x="84" y="63" textAnchor="end">
        {places.fano}
      </text>
      <text className="lbl lbl-sm" x="84" y="80" textAnchor="end">
        HQ
      </text>
      <text className="lbl" x="180" y="88">
        {places.tirana} · {places.podgorica}
      </text>
      <text className="lbl lbl-sm" x="180" y="105">
        {t.balkans}
      </text>
      <text className="lbl" x="503" y="136" textAnchor="middle">
        {places.baku}
      </text>
      <text className="lbl lbl-sm" x="503" y="153" textAnchor="middle">
        {t.office}
      </text>
      <text className="lbl" x="572" y="346" textAnchor="end">
        {places.middleEast}
      </text>
    </svg>
  );
}

export function Where({ t, map, places }: { t: Dictionary["where"]; map: Dictionary["map"]; places: Dictionary["places"] }) {
  const office = site.regionalOffice;
  return (
    <section className="section dark" id="where">
      <div className="wrap where-grid">
        <div>
          <p className="eyebrow">{t.eyebrow}</p>
          <h2>
            {t.titleStart}
            <em>{t.titleEmphasis}</em>
          </h2>
          <p className="where-text">{t.text}</p>
          <div className="offices">
            <div className="office reveal">
              <small>{t.headquarters.label}</small>
              <h3>Fano</h3>
              <p>{t.headquarters.address}</p>
            </div>
            <div className="office reveal">
              <small>{t.regionalOffice.label}</small>
              <h3>{places.baku}</h3>
              <p>
                {office.building}, {t.regionalOffice.floor}
                <br />
                {office.street}, {office.postcode} {places.baku}
              </p>
            </div>
          </div>
        </div>
        <RouteMap t={map} places={places} />
      </div>
    </section>
  );
}
