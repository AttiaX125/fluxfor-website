import Image from "next/image";

export function MarketHero() {
  return (
    <section className="px-4 pb-14 pt-[112px] sm:px-6 sm:pt-[128px] lg:px-8">
      <div className="mx-auto grid max-w-[1240px] grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">
        <div>
          <div className="eyebrow text-brand-blue-2 dark:text-brand-cyan">Market</div>
          <h1 className="mt-4 font-display text-[clamp(28px,4vw,42px)] font-semibold leading-[1.1] text-text-primary">
            Powering the Gulf Coast&apos;s Growth
          </h1>
          <p className="mt-5 max-w-[520px] text-[15.5px] leading-relaxed text-text-secondary">
            The U.S. is investing heavily in grid modernization, renewable
            interconnection, and industrial capacity — driving strong demand
            for reliable power infrastructure. We&apos;re built to support that
            growth, from Houston outward.
          </p>
        </div>

        <div className="relative aspect-[4/3] overflow-hidden rounded-[20px] border border-white/10">
          <Image
            src="/images/market-hero-skyline.png"
            alt="Middle East skyline with iconic landmarks representing FLUXFOR's regional market"
            fill
            className="object-cover"
            priority
          />
        </div>
      </div>
    </section>
  );
}