import { site } from "@/content/site";
import { WhatsAppLogo } from "./Icons";

/** Round WhatsApp button that stays in the bottom-right corner while the page scrolls. */
export function WhatsAppButton({ label }: { label: string }) {
  return (
    <a className="wa-float" href={site.whatsapp} target="_blank" rel="noopener noreferrer" aria-label={label} title={label}>
      <WhatsAppLogo />
    </a>
  );
}
