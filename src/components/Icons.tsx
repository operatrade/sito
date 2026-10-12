type IconProps = { className?: string };

const stroke = {
  fill: "none",
  stroke: "currentColor",
  strokeLinecap: "round",
  strokeLinejoin: "round",
} as const;

export function ArrowIcon() {
  return (
    <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.4" aria-hidden="true">
      <path d="M1 8h13M9 3l5 5-5 5" />
    </svg>
  );
}

export function CompassIcon({ className }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" {...stroke} aria-hidden="true">
      <circle cx="12" cy="4" r="1.6" />
      <path d="M11.3 5.5L5 21M12.7 5.5L19 21M7.6 14.5h8.8" />
    </svg>
  );
}

export function BuildingIcon({ className }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" {...stroke} aria-hidden="true">
      <path d="M5 21V3h14v18M3 21h18" />
      <path d="M9 7h1.5M13.5 7H15M9 11h1.5M13.5 11H15M9 15h1.5M13.5 15H15M10.5 21v-3h3v3" />
    </svg>
  );
}

export function CrateIcon({ className }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" {...stroke} aria-hidden="true">
      <path d="M3 7.5L12 3l9 4.5-9 4.5-9-4.5z" />
      <path d="M3 7.5v9L12 21l9-4.5v-9M12 12v9" />
    </svg>
  );
}

export function HouseIcon({ className }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" {...stroke} aria-hidden="true">
      <path d="M3 11l9-7 9 7" />
      <path d="M5 9.5V21h14V9.5" />
      <path d="M10 21v-6h4v6" />
    </svg>
  );
}

export function PhoneIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.3" aria-hidden="true">
      <path d="M5 3h4l2 5-2.5 1.5a11 11 0 0 0 6 6L16 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 5a2 2 0 0 1 2-2z" />
    </svg>
  );
}

export function MailIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.3" aria-hidden="true">
      <rect x="3" y="5" width="18" height="14" rx="1" />
      <path d="M3 6l9 7 9-7" />
    </svg>
  );
}

export function PersonIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.3" aria-hidden="true">
      <circle cx="12" cy="8" r="4" />
      <path d="M4 21c1.5-4 4.5-6 8-6s6.5 2 8 6" />
    </svg>
  );
}

export function WhatsAppIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.3" aria-hidden="true">
      <path d="M4 20l1.3-4A8 8 0 1 1 8.4 19z" />
      <path d="M9 9.5c.3 2 2.3 4.3 5 5l1.2-1.2-1.8-1-1 .8c-.9-.4-1.6-1.1-2-2l.8-1-1-1.8z" />
    </svg>
  );
}

// Official WhatsApp glyph, from Simple Icons (CC0): https://simpleicons.org/?q=whatsapp
export function WhatsAppLogo() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
    </svg>
  );
}
