// Shared SVG illustrations for product cards, used on both the home page
// preview grid and the full /products catalog. Each uses a unique gradient
// id (suffixed by the component) so multiple instances can render on the
// same page without id collisions.

export function TransformerIllustration({ uid = "1" }: { uid?: string }) {
  const gradId = `pg-transformer-${uid}`;
  return (
    <svg viewBox="0 0 300 200" className="h-full w-full" preserveAspectRatio="xMidYMid slice">
      <rect width="300" height="200" fill={`url(#${gradId})`} />
      <rect x="105" y="80" width="90" height="80" fill="none" stroke="#22C7E5" strokeWidth="1.5" />
      <line x1="150" y1="40" x2="150" y2="80" stroke="#22C7E5" strokeWidth="1.5" />
      <line x1="120" y1="160" x2="120" y2="180" stroke="#8492AC" strokeWidth="1.2" />
      <line x1="180" y1="160" x2="180" y2="180" stroke="#8492AC" strokeWidth="1.2" />
      <defs>
        <linearGradient id={gradId} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#0A1428" />
          <stop offset="100%" stopColor="#142c58" />
        </linearGradient>
      </defs>
    </svg>
  );
}

export function SwitchgearIllustration({ uid = "1" }: { uid?: string }) {
  const gradId = `pg-switchgear-${uid}`;
  return (
    <svg viewBox="0 0 300 200" className="h-full w-full" preserveAspectRatio="xMidYMid slice">
      <rect width="300" height="200" fill={`url(#${gradId})`} />
      <rect x="85" y="55" width="130" height="105" fill="none" stroke="#2451E0" strokeWidth="1.5" />
      <line x1="85" y1="90" x2="215" y2="90" stroke="#2451E0" strokeWidth="1" />
      <line x1="85" y1="125" x2="215" y2="125" stroke="#2451E0" strokeWidth="1" />
      <defs>
        <linearGradient id={gradId} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#0A1428" />
          <stop offset="100%" stopColor="#153099" />
        </linearGradient>
      </defs>
    </svg>
  );
}

export function ControlPanelIllustration({ uid = "1" }: { uid?: string }) {
  const gradId = `pg-controls-${uid}`;
  return (
    <svg viewBox="0 0 300 200" className="h-full w-full" preserveAspectRatio="xMidYMid slice">
      <rect width="300" height="200" fill={`url(#${gradId})`} />
      <rect x="120" y="55" width="60" height="90" fill="none" stroke="#8492AC" strokeWidth="1.5" />
      <circle cx="150" cy="80" r="7" fill="none" stroke="#8492AC" strokeWidth="1.2" />
      <line x1="132" y1="115" x2="168" y2="115" stroke="#8492AC" strokeWidth="1.2" />
      <line x1="132" y1="128" x2="168" y2="128" stroke="#8492AC" strokeWidth="1.2" />
      <defs>
        <linearGradient id={gradId} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#0A1428" />
          <stop offset="100%" stopColor="#122a52" />
        </linearGradient>
      </defs>
    </svg>
  );
}
export function SoftwareIllustration({ uid = "1" }: { uid?: string }) {
  const gradId = `pg-software-${uid}`;
  return (
    <svg viewBox="0 0 300 200" className="h-full w-full" preserveAspectRatio="xMidYMid slice">
      <rect width="300" height="200" fill={`url(#${gradId})`} />
      <rect x="80" y="50" width="140" height="90" rx="3" fill="none" stroke="#22C7E5" strokeWidth="1.5" />
      <path d="M100 130 L200 130 M140 140 L160 140" stroke="#8492AC" strokeWidth="1.2" />
      <path d="M105 65 L145 65 M105 78 L165 78 M105 91 L135 91" stroke="#2451E0" strokeWidth="1.2" />
      <circle cx="180" cy="100" r="18" fill="none" stroke="#22C7E5" strokeWidth="1.2" />
      <path d="M172 100 L188 100 M180 92 L180 108" stroke="#22C7E5" strokeWidth="1" />
      <defs>
        <linearGradient id={gradId} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#0A1428" />
          <stop offset="100%" stopColor="#153099" />
        </linearGradient>
      </defs>
    </svg>
  );
}
export function MonitoringIllustration({ uid = "1" }: { uid?: string }) {
  const gradId = `pg-monitoring-${uid}`;
  return (
    <svg viewBox="0 0 300 200" className="h-full w-full" preserveAspectRatio="xMidYMid slice">
      <rect width="300" height="200" fill={`url(#${gradId})`} />
      <circle cx="150" cy="100" r="42" fill="none" stroke="#22C7E5" strokeWidth="1.5" />
      <circle cx="150" cy="100" r="62" fill="none" stroke="#22C7E5" strokeWidth="1" opacity="0.5" />
      <circle cx="150" cy="100" r="3" fill="#22C7E5" />
      <defs>
        <linearGradient id={gradId} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#0A1428" />
          <stop offset="100%" stopColor="#0d3a5c" />
        </linearGradient>
      </defs>
    </svg>
  );
}