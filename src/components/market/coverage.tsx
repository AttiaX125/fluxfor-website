"use client";

import Image from "next/image";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

const countries = [
  "Egypt", "Saudi Arabia", "UAE", "Qatar", "Kuwait", "Bahrain", "Oman",
  "Jordan"
];

export function Coverage() {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  const mapSrc =
    mounted && resolvedTheme === "dark"
      ? "/images/coverage-map-dark.png"
      : "/images/coverage-map-light.png";

  return (
    <section className="px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-[1240px]">
        <h2 className="font-display text-[clamp(22px,2.6vw,30px)] font-semibold text-text-primary">
          Our Coverage
        </h2>
        <p className="mt-3 max-w-[560px] text-[15px] leading-relaxed text-text-secondary">
          We deliver engineering and field services across {countries.length} countries
          throughout the Middle East.
        </p>

        <div className="mt-10 grid grid-cols-1 items-center gap-10 lg:grid-cols-2">
          <div className="relative mx-auto aspect-square w-full max-w-[480px] overflow-hidden rounded-[10px] border border-border-c bg-surface-1">
            {mounted && (
              <Image
                src={mapSrc}
                alt="FLUXFOR coverage across the Middle East"
                fill
                className="object-cover"
                priority
              />
            )}
          </div>

          <div>
            <div className="flex flex-wrap gap-2.5">
              {countries.map((c) => (
                <span
                  key={c}
                  className="rounded-full border border-border-c bg-surface-1 px-4 py-2 font-mono text-[13px] text-text-primary"
                >
                  {c}
                </span>
              ))}
            </div>
            <p className="mt-6 text-[13.5px] leading-relaxed text-text-secondary">
              Don&apos;t see your country? We scope projects outside our core
              footprint regularly — reach out and we&apos;ll tell you honestly
              whether we&apos;re the right fit.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}