import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function CompanyIntro() {
  return (
    <section className="px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto flex max-w-[1240px] flex-col items-start justify-between gap-6 lg:flex-row lg:items-end">
        <div className="max-w-[720px]">
          <div className="eyebrow text-brand-blue-2 dark:text-brand-cyan">FLUXFOR Group</div>
          <h2 className="mt-4 font-display text-[clamp(24px,2.8vw,34px)] font-semibold leading-tight text-text-primary">
            Full lifecycle engineering, consulting, and after-sales support for critical infrastructure.
          </h2>
        </div>
        <Link
          href="/about"
          className="inline-flex flex-none items-center gap-2 rounded-md border border-border-c px-5 py-3 text-[14px] font-semibold text-text-primary transition-colors hover:border-brand-blue hover:text-brand-blue"
        >
          See more <ArrowRight size={15} />
        </Link>
      </div>
    </section>
  );
}
