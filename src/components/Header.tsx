"use client";

import { useEffect, useState } from "react";
import { localeNames, locales, type Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/dictionaries";
import { Logo } from "./Logo";

const sections = [
  { id: "about", key: "about" },
  { id: "method", key: "method" },
  { id: "supply", key: "supply" },
  { id: "partners", key: "partners" },
  { id: "projects", key: "projects" },
  { id: "contact", key: "contact" },
] as const;

function LanguageLinks({ locale, label, onPick }: { locale: Locale; label: string; onPick?: () => void }) {
  return (
    <div className="langs" role="group" aria-label={label}>
      {locales.map((code) => (
        <a
          key={code}
          href={`/${code}`}
          hrefLang={code}
          lang={code}
          title={localeNames[code]}
          aria-current={code === locale ? "true" : undefined}
          onClick={onPick}
        >
          {code.toUpperCase()}
        </a>
      ))}
    </div>
  );
}

export function Header({ locale, nav }: { locale: Locale; nav: Dictionary["nav"] }) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!menuOpen) return;
    const onKey = (event: KeyboardEvent) => event.key === "Escape" && setMenuOpen(false);
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [menuOpen]);

  const close = () => setMenuOpen(false);

  return (
    <>
      <header className={`site-header${scrolled ? " scrolled" : ""}`} id="top">
        <div className="wrap header-row">
          <Logo href="#top" />
          <nav className="nav" aria-label={nav.main}>
            {sections.map((s) => (
              <a key={s.id} href={`#${s.id}`}>
                {nav[s.key]}
              </a>
            ))}
          </nav>
          <div className="header-tools">
            <LanguageLinks locale={locale} label={nav.language} />
            <a className="btn btn-sm" href="#contact">
              {nav.cta}
            </a>
            <button
              className="burger"
              type="button"
              aria-label={nav.menu}
              aria-expanded={menuOpen}
              aria-controls="mobile-menu"
              onClick={() => setMenuOpen(true)}
            >
              <span />
            </button>
          </div>
        </div>
      </header>

      <div className={`mobile-menu${menuOpen ? " open" : ""}`} id="mobile-menu" aria-hidden={!menuOpen} inert={!menuOpen}>
        <button className="close" type="button" aria-label={nav.close} onClick={close}>
          ×
        </button>
        <nav aria-label={nav.main}>
          {sections.map((s) => (
            <a key={s.id} href={`#${s.id}`} onClick={close}>
              {nav[s.key]}
            </a>
          ))}
        </nav>
        <LanguageLinks locale={locale} label={nav.language} onPick={close} />
      </div>
    </>
  );
}
