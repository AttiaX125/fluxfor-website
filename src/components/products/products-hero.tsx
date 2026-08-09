import Link from "next/link";
import { ChevronRight } from "lucide-react";

export function ProductsHero() {
  return (
    <>
      <section className="pt-[72px]">
        <div className="relative h-[240px] w-full overflow-hidden rounded-b-[48px] border-b border-white/10 sm:h-[300px]">
          <BannerIllustration />
        </div>
      </section>

      <section className="px-4 pb-16 pt-10 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-[1240px]">
          <nav aria-label="Breadcrumb" className="flex items-center gap-1.5 text-[13px] text-text-secondary">
            <Link href="/" className="underline-offset-2 hover:text-brand-blue hover:underline">
              Home
            </Link>
            <ChevronRight size={13} />
            <span className="text-text-primary">Products</span>
          </nav>

          <h1 className="mt-8 text-center font-display text-[clamp(34px,5vw,56px)] font-bold text-text-primary">
            Products
          </h1>

          <p className="mx-auto mt-6 max-w-[720px] text-center text-[15.5px] leading-relaxed text-text-secondary">
            Transformers, switchgear, and controls for power and distribution
            applications. Our offer includes digital and conventional hardware
            for utility, industrial, and special applications — we&apos;ll help
            you define the right product and the right level of monitoring for
            your asset.
          </p>
        </div>
      </section>
    </>
  );
}

function BannerIllustration() {
  return (
    <svg
      viewBox="0 0 1400 300"
      className="h-full w-full"
      preserveAspectRatio="xMidYMid slice"
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="productsBanner" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#0A1428" />
          <stop offset="55%" stopColor="#153099" />
          <stop offset="100%" stopColor="#2451E0" />
        </linearGradient>
      </defs>
      <rect width="1400" height="300" fill="url(#productsBanner)" />

      <g opacity="0.15" stroke="#F5F7FA">
        {Array.from({ length: 24 }).map((_, i) => (
          <line key={`v${i}`} x1={i * 58} y1="0" x2={i * 58} y2="300" strokeWidth="1" />
        ))}
        {Array.from({ length: 6 }).map((_, i) => (
          <line key={`h${i}`} x1="0" y1={i * 58} x2="1400" y2={i * 58} strokeWidth="1" />
        ))}
      </g>

      <g transform="translate(560,60)" stroke="#22C7E5" strokeWidth="1.6" fill="none">
        <rect x="0" y="60" width="160" height="140" rx="4" />
        <circle cx="80" cy="130" r="26" />
        <circle cx="80" cy="130" r="4" fill="#22C7E5" />
        <path d="M40 60 L40 20 M80 60 L80 10 M120 60 L120 20" />
        <path d="M20 200 L20 220 M140 200 L140 220" stroke="#8492AC" />
      </g>

      <path
        d="M900 240 L1000 140 M1000 140 L1030 170 M1040 180 L1120 100"
        stroke="#22C7E5"
        strokeWidth="2.5"
        strokeLinecap="round"
        opacity="0.85"
      />
      <path
        d="M180 220 L280 120"
        stroke="#F5F7FA"
        strokeWidth="2"
        strokeLinecap="round"
        opacity="0.35"
      />
    </svg>
  );
}