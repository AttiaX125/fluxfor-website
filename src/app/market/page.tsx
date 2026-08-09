import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { MarketHero } from "@/components/market/market-hero";
import { Coverage } from "@/components/market/coverage";

export const metadata: Metadata = {
  title: "Market",
  description: "The market forces driving demand for power infrastructure across the Gulf Coast, and the 14 states FLUXFOR serves.",
  alternates: { canonical: "/market" },
};

export default function MarketPage() {
  return (
    <>
      <MarketHero />
 
      <Coverage />

      <section className="px-4 pb-24 pt-4 sm:px-6 lg:px-8">
        <div className="relative mx-auto max-w-[1240px] overflow-hidden rounded-[20px] border border-white/10 bg-gradient-to-r from-brand-ink via-brand-ink-3 to-brand-blue-2 px-8 py-10 sm:px-12">
          <div className="flex flex-col items-start justify-between gap-5 sm:flex-row sm:items-center">
            <h2 className="font-display text-[22px] font-semibold text-white sm:text-[26px]">
              Outside our footprint? Let&apos;s talk anyway.
            </h2>
            <Link href="/contact" className="inline-flex flex-none items-center gap-2 rounded-md bg-gradient-to-r from-brand-blue to-brand-cyan px-6 py-3 text-[14px] font-semibold text-white">
              Request a Quotation <ArrowRight size={15} />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}