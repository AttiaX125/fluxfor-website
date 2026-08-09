import type { Metadata } from "next";
import { HeroCarousel } from "@/components/hero-carousel";
import { Pillars } from "@/components/home/pillars";
import { StatsBand } from "@/components/home/stats-band";
import { PromoBanner } from "@/components/home/promo-banner";

import { SolutionsPreview } from "@/components/home/solutions-preview";
import { ProductsPreview } from "@/components/home/products-preview";

export const metadata: Metadata = {
  title: "Home",
  description: "FLUXFOR designs, builds, and maintains integrated engineering solutions for critical infrastructure — power systems, switchgear, and 24/7 field services.",
  alternates: { canonical: "/" },
};

export default function HomePage() {
  return (
    <>
      <HeroCarousel />
      <Pillars />
      <StatsBand />
      <PromoBanner />
      <ProductsPreview />
      <SolutionsPreview />
    </>
  );
}