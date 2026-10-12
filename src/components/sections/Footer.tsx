import { site } from "@/content/site";
import type { Dictionary } from "@/i18n/dictionaries";
import { Logo } from "../Logo";

export function Footer({ t, nav }: { t: Dictionary["footer"]; nav: Dictionary["nav"] }) {
  const links = [
    ["about", nav.about],
    ["partners", nav.partners],
    ["method", nav.method],
    ["projects", nav.projects],
    ["supply", nav.supply],
    ["contact", nav.contact],
  ] as const;
  return (
    <footer className="site-footer">
      <div className="wrap">
        <div className="footer-top">
          <div>
            <Logo href="#top" />
            <p className="footer-tag">{t.tagline}</p>
          </div>
          <nav className="footer-nav" aria-label={nav.main}>
            {links.map(([id, label]) => (
              <a key={id} href={`#${id}`}>
                {label}
              </a>
            ))}
          </nav>
        </div>
        <div className="footer-bottom">
          <span>
            © Opera Trade · P.IVA / VAT {site.vatNumber} · {t.rights}
          </span>
          {/* Privacy and cookie pages still to be written: link them here when they exist. */}
        </div>
      </div>
    </footer>
  );
}
