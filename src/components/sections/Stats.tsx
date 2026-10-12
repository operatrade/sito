import { stats } from "@/content/site";
import type { Dictionary } from "@/i18n/dictionaries";

export function Stats({ t }: { t: Dictionary["stats"] }) {
  return (
    <div className="stats">
      <div className="wrap stats-grid">
        {stats.map((stat) => (
          <div className="stat reveal" key={stat.key}>
            <div className="stat-num">
              {stat.value}
              {"suffix" in stat && <sup>{stat.suffix}</sup>}
            </div>
            <p>{t[stat.key]}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
