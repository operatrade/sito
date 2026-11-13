"use client";

import { useEffect, useState } from "react";
import { localeNames, locales, type Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/dictionaries";
import { LockIcon } from "./Icons";
import { Logo } from "./Logo";

/** Sections of the home page; "Projects" is the separate /portfolio page. */
const sections = [
  { id: "about", key: "about" },
  { id: "method", key: "method" },
  { id: "sectors", key: "sectors" },
  { id: "makers", key: "makers" },
] as const;

export type SitePage = "home" | "portfolio";

function LanguageLinks({ locale, label, path, onPick }: { locale: Locale; label: string; path: string; onPick?: () => void }) {
  return (
    <div className="langs" role="group" aria-label={label}>
      {locales.map((code) => (
        <a
          key={code}
          href={`/${code}${path}`}
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

export function Header({
  locale,
  nav,
  loginUrl,
  page = "home",
}: {
  locale: Locale;
  nav: Dictionary["nav"];
  loginUrl: string;
  page?: SitePage;
}) {
  // On the home page the links are anchors; elsewhere they lead back to the home page's sections.
  const home = page === "home" ? "" : `/${locale}`;
  const path = page === "home" ? "" : `/${page}`;
  const links = [
    ...sections.map((s) => ({ href: `${home}#${s.id}`, label: nav[s.key], current: false })),
    { href: `/${locale}/portfolio`, label: nav.projects, current: page === "portfolio" },
  ];
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
          <Logo href={page === "home" ? "#top" : `/${locale}`} />
          <nav className="nav" aria-label={nav.main}>
            {/* "Contact" is the button on the right: listing it here too would only crowd the bar. */}
            {links.map((link) => (
              <a key={link.href} href={link.href} aria-current={link.current ? "page" : undefined}>
                {link.label}
              </a>
            ))}
          </nav>
          <div className="header-tools">
            <a className="login-link" href={loginUrl} aria-label={nav.login}>
              <LockIcon />
              <span>{nav.login}</span>
            </a>
            <LanguageLinks locale={locale} label={nav.language} path={path} />
            <a className="btn btn-sm" href={`${home}#contact`}>
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
          {[...links, { href: `${home}#contact`, label: nav.contact, current: false }].map((link) => (
            <a key={link.href} href={link.href} aria-current={link.current ? "page" : undefined} onClick={close}>
              {link.label}
            </a>
          ))}
        </nav>
        <LanguageLinks locale={locale} label={nav.language} path={path} onPick={close} />
        <a className="login-link mobile-login" href={loginUrl}>
          <LockIcon />
          <span>{nav.login}</span>
        </a>
      </div>
    </>
  );
}
