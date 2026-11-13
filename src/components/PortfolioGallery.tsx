"use client";

import Image, { type StaticImageData } from "next/image";
import { useEffect, useRef, useState } from "react";
import type { PortfolioSector } from "@/content/portfolio";

export type GalleryProject = {
  key: string;
  sector: PortfolioSector;
  title: string;
  text: string;
  photos: ReadonlyArray<{ image: StaticImageData; caption: string }>;
};

export type GalleryLabels = {
  filterLabel: string;
  filters: Record<"all" | PortfolioSector, string>;
  enlarge: string;
  close: string;
  previous: string;
  next: string;
};

type Filter = "all" | PortfolioSector;
type Opened = { project: number; photo: number };

const SECTORS: readonly PortfolioSector[] = ["home", "hotel", "contract"];

/** The photo `delta` places away within the same project, wrapping around at both ends. */
function advance(current: Opened | null, delta: number, projects: GalleryProject[]): Opened | null {
  if (!current) return current;
  const count = projects[current.project].photos.length;
  return { project: current.project, photo: (current.photo + delta + count) % count };
}

/**
 * The /portfolio page body: sector filter, one grid per project and a full-screen viewer.
 * The viewer is a native <dialog>, so Escape, focus trapping and focus return come from the browser.
 */
export function PortfolioGallery({ projects, labels }: { projects: GalleryProject[]; labels: GalleryLabels }) {
  const [filter, setFilter] = useState<Filter>("all");
  const [opened, setOpened] = useState<Opened | null>(null);
  const dialog = useRef<HTMLDialogElement>(null);
  const touchStart = useRef<number | null>(null);
  const isOpen = opened !== null;

  useEffect(() => {
    const element = dialog.current;
    if (!element) return;
    if (isOpen && !element.open) element.showModal();
    if (!isOpen && element.open) element.close();
  }, [isOpen]);

  const step = (delta: number) => setOpened((current) => advance(current, delta, projects));

  useEffect(() => {
    if (!isOpen) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key !== "ArrowRight" && event.key !== "ArrowLeft") return;
      setOpened((current) => advance(current, event.key === "ArrowRight" ? 1 : -1, projects));
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [isOpen, projects]);

  const project = opened ? projects[opened.project] : null;
  const photo = opened && project ? project.photos[opened.photo] : null;
  const sectors = SECTORS.filter((sector) => projects.some((p) => p.sector === sector));

  return (
    <>
      <div className="wrap">
        <div className="pf-filters" role="group" aria-label={labels.filterLabel}>
          {(["all", ...sectors] as const).map((value) => (
            <button key={value} type="button" aria-pressed={filter === value} onClick={() => setFilter(value)}>
              {labels.filters[value]}
            </button>
          ))}
        </div>

        {projects.map((p, index) => {
          const wideLastOnPhone = (p.photos.length - 1) % 2 === 1;
          return (
            <article
              className="pf-project"
              key={p.key}
              id={p.key}
              aria-labelledby={`${p.key}-title`}
              hidden={filter !== "all" && filter !== p.sector}
            >
              <header className="pf-head">
                <span className="pf-num" aria-hidden="true">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <div>
                  <p className="pf-sector">{labels.filters[p.sector]}</p>
                  <h2 id={`${p.key}-title`}>{p.title}</h2>
                </div>
                <p className="pf-text">{p.text}</p>
              </header>
              <div className="pf-grid">
                {p.photos.map((ph, i) => (
                  <button
                    type="button"
                    key={i}
                    className={`pf-tile${wideLastOnPhone && i === p.photos.length - 1 ? " pf-wide-phone" : ""}`}
                    onClick={() => setOpened({ project: index, photo: i })}
                    title={labels.enlarge}
                  >
                    <Image
                      src={ph.image}
                      alt={`${ph.caption} · ${p.title}`}
                      fill
                      sizes={i === 0 ? "(max-width: 720px) 92vw, 820px" : "(max-width: 720px) 46vw, 400px"}
                      placeholder="blur"
                    />
                    <span className="pf-caption">{ph.caption}</span>
                  </button>
                ))}
              </div>
            </article>
          );
        })}
      </div>

      <dialog
        ref={dialog}
        className="lightbox"
        aria-label={project?.title}
        onClose={() => setOpened(null)}
        onClick={(event) => event.target === event.currentTarget && setOpened(null)}
        onTouchStart={(event) => (touchStart.current = event.touches[0].clientX)}
        onTouchEnd={(event) => {
          if (touchStart.current === null) return;
          const distance = event.changedTouches[0].clientX - touchStart.current;
          touchStart.current = null;
          if (Math.abs(distance) > 50) step(distance < 0 ? 1 : -1);
        }}
      >
        {project && photo && opened ? (
          <>
            <button type="button" className="lb-btn lb-close" aria-label={labels.close} onClick={() => setOpened(null)}>
              ×
            </button>
            <figure className="lb-figure" onClick={(event) => event.target === event.currentTarget && setOpened(null)}>
              <Image
                key={`${opened.project}-${opened.photo}`}
                src={photo.image}
                alt={`${photo.caption} · ${project.title}`}
                sizes="100vw"
                className="lb-img"
              />
              <figcaption>
                <span>
                  {project.title} · {photo.caption}
                </span>
                <span className="lb-count">
                  {opened.photo + 1} / {project.photos.length}
                </span>
              </figcaption>
            </figure>
            {project.photos.length > 1 ? (
              <>
                <button type="button" className="lb-btn lb-prev" aria-label={labels.previous} onClick={() => step(-1)}>
                  ‹
                </button>
                <button type="button" className="lb-btn lb-next" aria-label={labels.next} onClick={() => step(1)}>
                  ›
                </button>
              </>
            ) : null}
          </>
        ) : null}
      </dialog>
    </>
  );
}
