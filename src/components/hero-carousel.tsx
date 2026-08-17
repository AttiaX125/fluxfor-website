"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useTheme } from "next-themes";
import { ChevronLeft, ChevronRight } from "lucide-react";

type Slide = {
  eyebrow: string;
  title: string;
  ctaLabel: string;
  ctaHref: string;
  imageDark: string;
  imageLight: string;
};

const slides: Slide[] = [
  {
    eyebrow: "Protection",
    title: "Non-electric protection devices.",
    ctaLabel: "View Category",
    ctaHref: "/products/non-electric-protection",
    imageDark: "/images/home/products/non-electric-protection-dark.png",
    imageLight: "/images/home/products/non-electric-protection-light.png",
  },
  {
    eyebrow: "Insulation",
    title: "Transformer insulation materials.",
    ctaLabel: "View Category",
    ctaHref: "/products/insulation-materials",
    imageDark: "/images/home/products/insulation-materials-dark.png",
    imageLight: "/images/home/products/insulation-materials-light.png",
  },
  {
    eyebrow: "Bushings",
    title: "Transformer bushings, built to spec.",
    ctaLabel: "View Category",
    ctaHref: "/products/bushings",
    imageDark: "/images/home/products/bushings-dark.png",
    imageLight: "/images/home/products/bushings-light.png",
  },

    {
    eyebrow: "Software",
    title: "Software solutions for the grid.",
    ctaLabel: "Explore",
    ctaHref: "/products/software-solutions",
    imageDark: "/images/home/products/software-dark.png",
    imageLight: "/images/home/products/software-light.png",
  },
];

const AUTOPLAY_MS = 6000;

export function HeroCarousel() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const isDark = mounted && resolvedTheme === "dark";

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
        className="relative mx-auto max-w-[1400px] overflow-hidden rounded-[28px] border border-border-c"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
        role="region"
        aria-roledescription="carousel"
        aria-label="Featured categories"
      >
        <div className="relative min-h-[520px] sm:min-h-[560px]">
          <Image
            src={isDark ? slide.imageDark : slide.imageLight}
            alt={slide.title}
            fill
            priority={index === 0}
            className="object-cover"
          />

          {/* Readability overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/35 to-transparent" />

          <div className="relative z-10 flex min-h-[520px] max-w-[560px] flex-col justify-center px-8 py-16 sm:min-h-[560px] sm:px-12 lg:px-16">
            <div className="eyebrow text-brand-cyan">{slide.eyebrow}</div>
            <h1 className="mt-4 font-display text-[clamp(26px,3.6vw,40px)] font-semibold leading-[1.1] text-white">
              {slide.title}
            </h1>
            <Link
              href={slide.ctaHref}
              className="mt-7 inline-flex w-fit items-center gap-2 rounded-md bg-white/10 px-6 py-3 text-[14px] font-semibold text-white ring-1 ring-inset ring-white/25 backdrop-blur-sm transition-colors hover:bg-white/15"
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