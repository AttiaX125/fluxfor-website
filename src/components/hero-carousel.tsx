"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Link from "next/link";
import { ChevronLeft, ChevronRight } from "lucide-react";

type Slide = {
  eyebrow: string;
  title: string;
  description: string;
  ctaLabel: string;
  ctaHref: string;
  accent: string;
};

const slides: Slide[] = [
  {
    eyebrow: "Integrated Engineering Solutions",
    title: "Powering progress. Delivering reliability.",
    description:
      "FLUXFOR designs, builds, and maintains the systems that keep critical infrastructure running — from substation to grid edge.",
    ctaLabel: "Discover more",
    ctaHref: "/about",
    accent: "from-brand-ink via-brand-ink-3 to-brand-blue-2",
  },
  {
    eyebrow: "Featured Solution",
    title: "Substation modernization, without the downtime.",
    description:
      "Phased retrofits that keep the surrounding grid live — zero unplanned outages across 180+ delivered projects.",
    ctaLabel: "Explore Solutions",
    ctaHref: "/solutions",
    accent: "from-brand-ink via-[#0d3a5c] to-brand-cyan/40",
  },
  {
    eyebrow: "Products",
    title: "Authorized distributor for the hardware you spec.",
    description:
      "Transformers, switchgear, and controls — backed by our own field-services team, not a reseller hotline.",
    ctaLabel: "View Products",
    ctaHref: "/products",
    accent: "from-brand-ink via-brand-blue-2 to-brand-blue",
  },
  {
    eyebrow: "Field Services",
    title: "24/7 emergency response, dispatched near you.",
    description:
      "Crews positioned across our regional facilities, ready around the clock when critical infrastructure can't wait.",
    ctaLabel: "See Our Coverage",
    ctaHref: "/services#field-services",
    accent: "from-brand-ink via-[#122a52] to-brand-ink-3",
  },
];

const AUTOPLAY_MS = 6000;

export function HeroCarousel() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const goTo = useCallback((i: number) => {
    setIndex((i + slides.length) % slides.length);
  }, []);

  useEffect(() => {
    if (paused) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    timerRef.current = setInterval(() => {
      setIndex((i) => (i + 1) % slides.length);
    }, AUTOPLAY_MS);
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [paused]);

  const slide = slides[index];

  return (
    <section className="px-4 pt-[96px] sm:px-6 sm:pt-[104px] lg:px-8">
      <div
        className="relative mx-auto max-w-[1400px] overflow-hidden rounded-[28px] border border-white/10"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
        role="region"
        aria-roledescription="carousel"
        aria-label="Featured highlights"
      >
        <div
          className={`relative flex min-h-[520px] items-center bg-gradient-to-br ${slide.accent} transition-all duration-700 sm:min-h-[560px]`}
        >
          {/* ambient grid texture */}
          <div
            aria-hidden="true"
            className="absolute inset-0 opacity-40 [mask-image:radial-gradient(ellipse_70%_60%_at_65%_35%,black,transparent)] [background-image:linear-gradient(rgba(255,255,255,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.08)_1px,transparent_1px)] [background-size:56px_56px]"
          />
          {/* flux-line accent */}
          <svg
            aria-hidden="true"
            viewBox="0 0 400 420"
            className="pointer-events-none absolute -right-10 top-1/2 hidden h-[420px] w-[400px] -translate-y-1/2 opacity-70 md:block"
            fill="none"
          >
            <path d="M10 20 L180 200 L10 380" stroke="#F5F7FA" strokeWidth="2.5" strokeLinecap="round" opacity="0.5" />
            <path d="M390 20 L220 190" stroke="#2451E0" strokeWidth="2.5" strokeLinecap="round" />
            <path d="M270 240 L390 380" stroke="#22C7E5" strokeWidth="2.5" strokeLinecap="round" />
            <circle cx="180" cy="200" r="3" fill="#22C7E5" opacity="0.8" />
          </svg>

          <div className="relative z-10 max-w-[640px] px-8 py-16 sm:px-12 lg:px-16">
            <div className="eyebrow text-brand-cyan">{slide.eyebrow}</div>
            <h1 className="mt-4 font-display text-[clamp(30px,4.4vw,48px)] font-semibold leading-[1.08] text-white">
              {slide.title}
            </h1>
            <p className="mt-5 max-w-[500px] text-[16px] leading-relaxed text-white/70">
              {slide.description}
            </p>
            <Link
              href={slide.ctaHref}
              className="mt-8 inline-flex items-center gap-2 rounded-md bg-white/10 px-6 py-3 text-[14px] font-semibold text-white ring-1 ring-inset ring-white/25 backdrop-blur-sm transition-colors hover:bg-white/15"
            >
              {slide.ctaLabel}
            </Link>
          </div>
        </div>

        {/* Arrows */}
        <button
          type="button"
          onClick={() => goTo(index - 1)}
          aria-label="Previous slide"
          className="absolute left-3 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-black/20 text-white backdrop-blur-sm transition-colors hover:bg-black/35 sm:left-5"
        >
          <ChevronLeft size={22} />
        </button>
        <button
          type="button"
          onClick={() => goTo(index + 1)}
          aria-label="Next slide"
          className="absolute right-3 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-black/20 text-white backdrop-blur-sm transition-colors hover:bg-black/35 sm:right-5"
        >
          <ChevronRight size={22} />
        </button>

        {/* Dots */}
        <div className="absolute bottom-6 left-1/2 flex -translate-x-1/2 gap-2">
          {slides.map((s, i) => (
            <button
              key={s.title}
              type="button"
              onClick={() => goTo(i)}
              aria-label={`Go to slide ${i + 1}: ${s.title}`}
              aria-current={i === index}
              className={`h-[6px] rounded-full transition-all ${
                i === index ? "w-6 bg-white" : "w-[6px] bg-white/40 hover:bg-white/60"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
