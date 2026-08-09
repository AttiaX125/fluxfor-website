export function LogoMark({ className = "h-8 w-8" }: { className?: string }) {
  return (
    <svg viewBox="0 0 40 40" fill="none" className={className} aria-hidden="true">
      <path
        d="M4 6L18 20L4 34"
        stroke="currentColor"
        strokeWidth="4.5"
        strokeLinecap="square"
        className="text-current"
      />
      <path
        d="M36 6L22 20M22 20L26 24M30 28L36 34"
        stroke="url(#fluxfor-logo-gradient)"
        strokeWidth="4.5"
        strokeLinecap="square"
      />
      <defs>
        <linearGradient id="fluxfor-logo-gradient" x1="20" y1="6" x2="36" y2="34">
          <stop stopColor="#2451E0" />
          <stop offset="1" stopColor="#22C7E5" />
        </linearGradient>
      </defs>
    </svg>
  );
}

export function Logo({ className = "" }: { className?: string }) {
  return (
    <span className={`inline-flex items-center gap-2.5 ${className}`}>
      <LogoMark className="h-7 w-7 text-white" />
      <span className="font-display text-[19px] font-bold tracking-tight text-white">
        FLUXFOR
      </span>
    </span>
  );
}
