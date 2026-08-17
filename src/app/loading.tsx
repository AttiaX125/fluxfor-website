export default function Loading() {
  return (
    <div className="fixed inset-0 z-[200] flex items-center justify-center bg-brand-ink">
      <svg viewBox="0 0 40 40" fill="none" className="h-16 w-16" aria-label="Loading">
        <path
          d="M4 6L18 20L4 34"
          stroke="currentColor"
          strokeWidth="4.5"
          strokeLinecap="square"
          className="text-white"
          pathLength={1}
          style={{
            strokeDasharray: 1,
            strokeDashoffset: 1,
            animation: "draw-x 1.4s ease-in-out infinite",
          }}
        />
        <path
          d="M36 6L22 20M22 20L26 24M30 28L36 34"
          stroke="url(#fluxfor-loading-gradient)"
          strokeWidth="4.5"
          strokeLinecap="square"
          pathLength={1}
          style={{
            strokeDasharray: 1,
            strokeDashoffset: 1,
            animation: "draw-x 1.4s ease-in-out infinite 0.15s",
          }}
        />
        <defs>
          <linearGradient id="fluxfor-loading-gradient" x1="20" y1="6" x2="36" y2="34">
            <stop stopColor="#2451E0" />
            <stop offset="1" stopColor="#22C7E5" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}