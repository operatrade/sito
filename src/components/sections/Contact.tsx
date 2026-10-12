import { site } from "@/content/site";
import type { Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/dictionaries";
import { ContactForm } from "../ContactForm";
import { MailIcon, PersonIcon, PhoneIcon, WhatsAppIcon } from "../Icons";

export function Contact({ t, locale }: { t: Dictionary["contact"]; locale: Locale }) {
  return (
    <section className="section" id="contact">
      <div className="wrap contact-grid">
        <div>
          <p className="eyebrow">{t.eyebrow}</p>
          <h2>
            {t.titleStart}
            <em>{t.titleEmphasis}</em>
          </h2>
          <p className="lead contact-lead">{t.lead}</p>
          <ContactForm t={t.form} locale={locale} />
        </div>
        <aside className="direct reveal">
          <h3>{t.direct.title}</h3>
          <a href={site.phone.href}>
            <PhoneIcon />
            {site.phone.display}
          </a>
          <a href={`mailto:${site.emails.info}`}>
            <MailIcon />
            {site.emails.info}
          </a>
          <a href={`mailto:${site.emails.ceo}`}>
            <PersonIcon />
            {site.emails.ceo}
          </a>
          <a className="wa" href={site.whatsapp} target="_blank" rel="noopener noreferrer">
            <WhatsAppIcon />
            <span>{t.direct.whatsapp}</span>
          </a>
        </aside>
      </div>
    </section>
  );
}
