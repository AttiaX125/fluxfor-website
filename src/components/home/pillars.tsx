import { Gauge, ShieldCheck, Share2 } from "lucide-react";

const pillars = [
  {
    icon: Gauge,
    title: "Engineered for Performance",
    description:
      "Every system is sized, modeled, and stress-tested before it ever reaches the field.",
  },
  {
    icon: ShieldCheck,
    title: "Built for Reliability",
    description:
      "Redundancy and rigorous testing are standard, not an upgrade, on everything we deliver.",
  },
  {
    icon: Share2,
    title: "Integrated for Impact",
    description:
      "Design, hardware, and field services under one roof — fewer handoffs, faster outcomes.",
  },
];

export function Pillars() {
  return (
    <div className="bg-brand-ink">
      <div className="mx-auto grid max-w-[1240px] grid-cols-1 divide-y divide-white/[0.09] border-y border-white/[0.09] sm:grid-cols-3 sm:divide-x sm:divide-y-0">
        {pillars.map(({ icon: Icon, title, description }) => (
          <div key={title} className="flex items-start gap-4 px-8 py-9">
            <Icon size={26} strokeWidth={1.6} className="mt-0.5 flex-none text-brand-cyan" />
            <div>
              <h3 className="text-[15px] font-semibold text-white">{title}</h3>
              <p className="mt-1.5 text-[13.5px] leading-relaxed text-brand-steel">
                {description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
