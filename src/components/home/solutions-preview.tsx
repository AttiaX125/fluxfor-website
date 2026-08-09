import Link from "next/link";
import { ArrowRight } from "lucide-react";

const solutions = [
  {
    title: "Utilities & Transmission",
    description: "Grid resilience at scale, with phased modernization and zero unplanned outages.",
    href: "/solutions#utilities",
  },
  {
    title: "Oil & Gas",
    description: "Ruggedized systems and rapid dispatch crews for remote, harsh-environment sites.",
    href: "/solutions#oil-gas",
  },
  {
    title: "Renewable Energy",
    description: "In-house interconnection studies that keep projects on schedule.",
    href: "/solutions#renewables",
  },
  {
    title: "Industrial Manufacturing",
    description: "Redundant power design and predictive maintenance for zero-tolerance lines.",
    href: "/solutions#industrial",
  },
  {
    title: "Data Centers",
    description: "N+1 architectures verified through live load testing for strict SLAs.",
    href: "/solutions#data-centers",
  },
  {
    title: "Custom Engagements",
    description: "Don't see your industry? We scope custom projects every week.",
    href: "/contact",
  },
];

export function SolutionsPreview() {
  return (
    <section className="bg-surface-2/40 px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-[1240px]">
        <div className="max-w-[640px]">
          <div className="eyebrow text-brand-blue-2 dark:text-brand-cyan">Solutions</div>
          <h2 className="mt-4 font-display text-[clamp(24px,2.8vw,34px)] font-semibold leading-tight text-text-primary">
            Purpose-built for the industries we serve.
          </h2>
          <p className="mt-3 max-w-[520px] text-[15px] leading-relaxed text-text-secondary">
            Every sector loads its infrastructure differently — our solutions start
            with your constraints, not a generic template.
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {solutions.map((s) => (
            <Link
              key={s.title}
              href={s.href}
              className="group rounded-[10px] border border-border-c bg-surface-1 p-6 transition-all hover:-translate-y-1 hover:border-brand-blue"
            >
              <h3 className="text-[16px] font-semibold text-text-primary">{s.title}</h3>
              <p className="mt-2 text-[13.5px] leading-relaxed text-text-secondary">
                {s.description}
              </p>
              <span className="mt-3.5 inline-flex items-center gap-1.5 text-[12.5px] font-semibold text-brand-blue">
                Read more
                <ArrowRight size={12} className="transition-transform group-hover:translate-x-1" />
              </span>
            </Link>
          ))}
        </div>

        <div className="mt-10 text-center">
          <Link
            href="/solutions"
            className="inline-flex items-center gap-2 text-[14px] font-semibold text-brand-blue hover:underline"
          >
            Read more about our Solutions <ArrowRight size={15} />
          </Link>
        </div>
      </div>
    </section>
  );
}
