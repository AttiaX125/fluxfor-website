import { ShieldCheck, Target, Award, HeartHandshake } from "lucide-react";

const values = [
  {
    icon: ShieldCheck,
    title: "Accountability",
    description: "One team owns the outcome, from first drawing to last service call.",
  },
  {
    icon: Target,
    title: "Precision",
    description: "Specs are commitments. We test until the numbers hold.",
  },
  {
    icon: Award,
    title: "Excellence",
    description: "We pursue rigor in engineering and in how we treat every client.",
  },
  {
    icon: HeartHandshake,
    title: "Partnership",
    description: "We grow together with our clients and our distributor network.",
  },
];

export function Values() {
  return (
    <section className="relative overflow-hidden bg-brand-ink px-4 py-24 sm:px-6 lg:px-8">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.05] [mask-image:radial-gradient(ellipse_70%_60%_at_50%_0%,black,transparent)] [background-image:linear-gradient(rgba(255,255,255,0.4)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.4)_1px,transparent_1px)] [background-size:48px_48px]"
      />

      <div className="relative mx-auto max-w-[1240px]">
        <div className="text-center">
          <div className="eyebrow justify-center text-brand-cyan">What Drives Us</div>
          <h2 className="mt-4 font-display text-[clamp(24px,2.8vw,34px)] font-semibold text-white">
            Our Values
          </h2>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {values.map(({ icon: Icon, title, description }) => (
            <div
              key={title}
              className="rounded-[14px] border border-white/10 bg-white/[0.02] p-7 text-center transition-colors hover:border-brand-cyan/40"
            >
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full border border-white/15 bg-white/[0.04]">
                <Icon size={24} strokeWidth={1.6} className="text-brand-cyan" />
              </div>
              <h3 className="mt-5 text-[15.5px] font-semibold text-white">{title}</h3>
              <p className="mx-auto mt-2 max-w-[220px] text-[13.5px] leading-relaxed text-brand-steel">
                {description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}