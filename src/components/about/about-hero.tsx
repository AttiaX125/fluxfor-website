"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { useTheme } from "next-themes";

export function AboutHero() {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const isDark = mounted && resolvedTheme === "dark";

  return (
    <section className="px-4 pb-20 pt-[112px] sm:px-6 sm:pt-[128px] lg:px-8">
      <div className="mx-auto grid max-w-[1240px] grid-cols-1 items-center gap-14 lg:grid-cols-2 lg:gap-20">
        <div>
          <div className="eyebrow text-brand-blue-2 dark:text-brand-cyan">About Us</div>
          <h1 className="mt-5 font-display text-[clamp(30px,4.4vw,46px)] font-semibold leading-[1.08] text-text-primary">
            Built on Partnership.
            <br />
            Engineered for Performance.
          </h1>
          <p className="mt-6 max-w-[520px] text-[15.5px] leading-relaxed text-text-secondary">
            FLUXFOR is a specialized provider of integrated engineering solutions
            for critical infrastructure. We design, build, and maintain the power
            systems our clients depend on — delivering technical excellence,
            responsive field support, and reliable service at every stage of the
            asset lifecycle.
          </p>
        </div>

        <div className="relative aspect-[4/3] overflow-hidden rounded-[20px] border border-white/10">
          <Image src={isDark ? "/images/about/hero-dark.png" : "/images/about/hero-light.png"} alt="FLUXFOR engineers at a power infrastructure site" fill className="object-cover" priority />
          {/* brand-tinted overlay so any photo reads as part of the FLUXFOR system */}
          <div className="absolute inset-0 bg-gradient-to-t from-brand-ink/60 via-brand-ink/10 to-transparent" />
          <div className="absolute inset-0 bg-brand-blue-2 mix-blend-color opacity-[0.12]" />
        </div>
      </div>
    </section>
  );
}