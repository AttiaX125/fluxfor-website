import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { AboutHero } from "@/components/about/about-hero";
import { MissionVision } from "@/components/about/mission-vision";
import { Values } from "@/components/about/values";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "FLUXFOR is a specialized provider of integrated engineering solutions for critical infrastructure. Learn our mission, vision, values, and milestones.",
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  return (
    <>
      <AboutHero />
      <MissionVision />
      <Values />

      <section className="px-4 py-24 sm:px-6 lg:px-8">
        <div className="relative mx-auto max-w-[1240px] overflow-hidden rounded-[20px] border border-white/10 bg-gradient-to-r from-brand-ink via-brand-ink-3 to-brand-blue-2 px-8 py-12 sm:px-14 sm:py-14">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 opacity-[0.06] [mask-image:radial-gradient(ellipse_70%_60%_at_70%_50%,black,transparent)] [background-image:linear-gradient(rgba(255,255,255,0.4)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.4)_1px,transparent_1px)] [background-size:48px_48px]"
          />
          <div className="relative flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-center">
            <h2 className="font-display text-[24px] font-semibold text-white sm:text-[28px]">
              Let&apos;s build something that lasts.
            </h2>
            <Link
              href="/contact"
              className="group inline-flex flex-none items-center gap-2 rounded-md bg-gradient-to-r from-brand-blue to-brand-cyan px-6 py-3.5 text-[14px] font-semibold text-white transition-opacity hover:opacity-90"
            >
              Talk to an Engineer
              <ArrowRight size={15} className="transition-transform group-hover:translate-x-0.5" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}