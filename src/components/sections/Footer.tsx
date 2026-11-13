import { site } from "@/content/site";
import type { Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/dictionaries";
import type { SitePage } from "../Header";
import { Logo } from "../Logo";

export function Footer({ t, nav, locale, page = "home" }: { t: Dictionary["footer"]; nav: Dictionary["nav"]; locale: Locale; page?: SitePage }) {
  const home = page === "home" ? "" : `/${locale}`;
  const links = [
    [`${home}#about`, nav.about],
    [`${home}#sectors`, nav.sectors],
    [`${home}#method`, nav.method],
    [`${home}#makers`, nav.makers],
    [`/${locale}/portfolio`, nav.projects],
    [`${home}#contact`, nav.contact],
  ] as const;
  return (
    <footer className="site-footer">
      <div className="wrap">
        <div className="footer-top">
          <div>
            <Logo href={page === "home" ? "#top" : `/${locale}`} />
            <p className="footer-tag">{t.tagline}</p>
          </div>
          <nav className="footer-nav" aria-label={nav.main}>
            {links.map(([href, label]) => (
              <a key={href} href={href}>
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
