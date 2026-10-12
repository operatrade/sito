import Image from "next/image";
import { projectPhotos, site } from "@/content/site";
import type { Dictionary } from "@/i18n/dictionaries";

// Wide, narrow, narrow, wide: matches the 7/5/5/7 column spans in globals.css.
const sizes = ["(max-width: 720px) 92vw, 680px", "(max-width: 720px) 92vw, 480px"];

export function Projects({ t }: { t: Dictionary["projects"] }) {
  return (
    <section className="section" id="projects">
      <div className="wrap">
        <div className="section-head">
          <div>
            <p className="eyebrow">{t.eyebrow}</p>
            <h2>{t.title}</h2>
          </div>
          {site.draft && <p>{t.note}</p>}
        </div>
        <div className="proj-grid">
          {t.items.map((project, i) => (
            <article className="proj reveal" key={project.title}>
              <figure className="proj-media">
                <Image
                  src={projectPhotos[i]}
                  alt=""
                  fill
                  sizes={sizes[i === 0 || i === 3 ? 0 : 1]}
                  placeholder="blur"
                />
                {site.draft && <span className="tag">{t.sample}</span>}
              </figure>
              <div className="proj-meta">
                <div>
                  <small>{project.place}</small>
                  <h3>{project.title}</h3>
                </div>
                <p>{project.scope}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
