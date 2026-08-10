import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function ComingSoon({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description: string;
}) {
  return (
    <section className="px-4 pb-24 pt-[160px] sm:px-6 lg:px-8">
      <div className="mx-auto max-w-[760px] text-center">
        <div className="eyebrow justify-center text-brand-blue-2 dark:text-brand-cyan">
          {eyebrow}
        </div>
        <h1 className="mt-4 font-display text-[clamp(28px,4vw,44px)] font-semibold leading-tight text-text-primary">
          {title}
        </h1>
        <p className="mt-4 text-[16px] leading-relaxed text-text-secondary">
          {description}
        </p>
        <p className="mt-2 text-[13px] text-text-secondary">
          This page is under construction — full content is coming next.
        </p>
        <Link
          href="/contact"
          className="mt-8 inline-flex items-center gap-2 rounded-md bg-gradient-to-r from-brand-blue to-brand-cyan px-6 py-3 text-[14px] font-semibold text-white"
        >
          Talk to an Engineer <ArrowRight size={15} />
        </Link>
      </div>
    </section>
  );
}
