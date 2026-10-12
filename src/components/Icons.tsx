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
