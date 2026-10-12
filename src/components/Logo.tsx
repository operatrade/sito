export function ArchMark({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 30 38" fill="none" stroke="currentColor" aria-hidden="true">
      <path d="M1.5 37V15A13.5 13.5 0 0 1 28.5 15V37" strokeWidth="1.3" />
      <path d="M7 37V16A8 8 0 0 1 23 16V37" strokeWidth=".9" />
      <path d="M0 37.4h30" strokeWidth="1.3" />
      <path d="M15 1.5v3" strokeWidth="1.3" />
    </svg>
  );
}

export function Logo({ href }: { href: string }) {
  return (
    <a className="logo" href={href} aria-label="Opera Trade">
      <ArchMark />
      <span className="logo-word">
        <b>OPERA TRADE</b>
        <small>ITALIA · BAKU</small>
      </span>
    </a>
  );
}
