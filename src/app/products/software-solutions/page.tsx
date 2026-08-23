import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ChevronRight, Check, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Software Solutions — DraftSight",
  description:
    "FLUXFOR is an authorized reseller of DraftSight, a professional 2D drafting and 3D design platform with full DWG compatibility.",
  alternates: { canonical: "/products/software-solutions" },
};

const benefits = [
  "Full DWG compatibility — create, edit, view, and mark up 2D and 3D files without conversion loss",
  "Cut documentation time with automation tools built for repetitive drafting tasks",
  "Manage large, multi-sheet projects without losing track of revisions",
  "Built-in hardware libraries speed up BOMs, callouts, and standard parts",
  "Dark mode interface designed for long drafting sessions",
  "Flexible standalone or network licensing that scales with your team",
];

const capabilities = [
  {
    title: "Core 2D Drafting",
    items: [
      "Lines, polylines, arcs, circles, hatches, and annotation tools",
      "Move, copy, rotate, mirror, trim, and pattern commands",
      "Layer, block, and external reference management",
      "Plot output to printer, plotter, or file",
    ],
  },
  {
    title: "Productivity & Automation",
    items: [
      "Macros and APIs for custom, repeatable workflows",
      "Drawing compare to catch revisions automatically",
      "Raster-to-vector conversion for scanned floor plans and logos",
      "Batch printing across multiple sheets and drawings",
    ],
  },
  {
    title: "3D Modeling & Integration",
    items: [
      "Sketch-based solids and surface generation",
      "Parametric 2D constraints for precise geometry",
      "Rendering and simulation workflows via partner integrations",
    ],
  },
  {
    title: "Enterprise Support",
    items: [
      "Standalone or concurrent network licensing",
      "Compliance tracking across your organization",
      "Direct technical support from FLUXFOR, not a ticket queue",
    ],
  },
];

export default function SoftwareSolutionsPage() {
  return (
    <>
      <section className="px-4 pb-16 pt-[112px] sm:px-6 sm:pt-[128px] lg:px-8">
        <div className="mx-auto max-w-[1240px]">
          <nav aria-label="Breadcrumb" className="flex items-center gap-1.5 text-[13px] text-text-secondary">
            <Link href="/" className="hover:text-brand-blue hover:underline underline-offset-2">Home</Link>
            <ChevronRight size={13} />
            <Link href="/products" className="hover:text-brand-blue hover:underline underline-offset-2">Products</Link>
            <ChevronRight size={13} />
            <span className="text-text-primary">Software Solutions</span>
          </nav>

          <div className="mt-10 grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">
            <div>
              <div className="eyebrow text-brand-blue-2 dark:text-brand-cyan">Software Solutions</div>
              <h1 className="mt-4 font-display text-[clamp(28px,4vw,42px)] font-semibold leading-[1.1] text-text-primary">
                DraftSight — 2D Drafting & 3D Design
              </h1>
              <p className="mt-5 max-w-[520px] text-[15.5px] leading-relaxed text-text-secondary">
                FLUXFOR is an authorized reseller of DraftSight — the CAD platform
                our own engineering team drafts substation layouts and panel
                schematics with. Full native DWG compatibility means your existing
                drawings and workflows carry over without disruption.
              </p>
              <Link
                href="/contact?product=software-solutions"
                className="group mt-8 inline-flex items-center gap-2 rounded-md bg-gradient-to-r from-brand-blue to-brand-cyan px-6 py-3 text-[14px] font-semibold text-white transition-opacity hover:opacity-90"
              >
                Request Licensing Options
                <ArrowRight size={15} className="transition-transform group-hover:translate-x-0.5" />
              </Link>
            </div>

            {/* PHOTO 1 — hero image (placeholder until real photo is ready) */}
            <div className="relative aspect-[4/3] overflow-hidden rounded-[16px] border border-border-c bg-surface-1 shadow-2xl shadow-brand-blue/[0.06]">
              <Image
                src="https://picsum.photos/seed/fluxfor-software-1/900/675"
                alt="DraftSight CAD interface"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* PHOTO 2 — "in action" showcase, browser-chrome style for a UI screenshot */}
      <section className="px-4 pb-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-[1240px]">
          <div className="overflow-hidden rounded-[14px] border border-border-c bg-surface-1 shadow-2xl shadow-brand-blue/[0.06]">
            <div className="flex items-center gap-1.5 border-b border-border-c bg-surface-2/60 px-4 py-2.5">
              <span className="h-2.5 w-2.5 rounded-full bg-[#FF5F57]" />
              <span className="h-2.5 w-2.5 rounded-full bg-[#FEBC2E]" />
              <span className="h-2.5 w-2.5 rounded-full bg-[#28C840]" />
              <span className="ml-3 font-mono text-[11px] text-text-secondary">DraftSight — substation-layout-rev4.dwg</span>
            </div>
            <div className="relative aspect-[16/9] w-full">
              <Image
                src="https://picsum.photos/seed/fluxfor-software-2/1600/900"
                alt="DraftSight drafting workspace showing a substation layout"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-border-c px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-[1240px]">
          <h2 className="font-display text-[clamp(22px,2.6vw,28px)] font-semibold text-text-primary">
            Why teams switch to DraftSight
          </h2>
          <div className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2">
            {benefits.map((b) => (
              <div key={b} className="flex items-start gap-3">
                <Check size={18} strokeWidth={2} className="mt-0.5 flex-none text-brand-blue" />
                <p className="text-[14.5px] leading-relaxed text-text-secondary">{b}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-surface-2/40 px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-[1240px]">
          <h2 className="font-display text-[clamp(22px,2.6vw,28px)] font-semibold text-text-primary">
            Capabilities
          </h2>
          <div className="mt-8 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {capabilities.map((cap) => (
              <div key={cap.title}>
                <h3 className="text-[15px] font-semibold text-text-primary">{cap.title}</h3>
                <ul className="mt-3 flex flex-col gap-2.5">
                  {cap.items.map((item) => (
                    <li key={item} className="text-[13px] leading-relaxed text-text-secondary">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="relative mx-auto max-w-[1240px] overflow-hidden rounded-[20px] border border-white/10 bg-gradient-to-r from-brand-ink via-brand-ink-3 to-brand-blue-2 px-8 py-10 sm:px-12">
          <div className="flex flex-col items-start justify-between gap-5 sm:flex-row sm:items-center">
            <div>
              <h2 className="font-display text-[22px] font-semibold text-white sm:text-[26px]">
                Standalone or network — we&apos;ll help you pick.
              </h2>
              <p className="mt-1.5 max-w-[480px] text-[14px] text-brand-steel">
                DraftSight is developed by Dassault Systèmes. FLUXFOR handles licensing, setup, and support.
              </p>
            </div>
            <Link
              href="/contact?product=software-solutions"
              className="inline-flex flex-none items-center gap-2 rounded-md bg-white/10 px-6 py-3 text-[14px] font-semibold text-white ring-1 ring-inset ring-white/25"
            >
              Request a Quotation <ArrowRight size={15} />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}