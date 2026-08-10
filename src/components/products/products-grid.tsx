import Link from "next/link";
import { ArrowRight } from "lucide-react";
import {
  TransformerIllustration,
  SwitchgearIllustration,
  ControlPanelIllustration,
  MonitoringIllustration,
} from "@/components/product-illustrations";

const products = [
  {
    id: "transformers",
    title: "Power Transformers",
    description:
      "Need to fulfill a wide range of requirements depending on the application — sized and rated for power and distribution use, from 500kVA to 50MVA.",
    illustration: <TransformerIllustration uid="catalog" />,
    href: "/contact?product=transformers",
  },
  {
    id: "switchgear",
    title: "Switchgear & Protection",
    description:
      "Enable transformer and feeder operations to run safely and efficiently — metal-clad switchgear and protective relaying rated up to 38kV.",
    illustration: <SwitchgearIllustration uid="catalog" />,
    href: "/contact?product=switchgear",
  },
  {
    id: "controls",
    title: "Control Panels",
    description:
      "Custom PLC and RTU enclosures that bring logic, communications, and protection into a single coordinated panel, rated NEMA 4X.",
    illustration: <ControlPanelIllustration uid="catalog" />,
    href: "/contact?product=controls",
  },
  {
    id: "monitoring",
    title: "Monitoring & Sensors — eDevices",
    description:
      "Enable continuous monitoring and data gathering of asset health. Our eDevices line covers real-time telemetry, alerting, and remote diagnostics.",
    illustration: <MonitoringIllustration uid="catalog" />,
    href: "/contact?product=monitoring",
  },
 {
    id: "software-solutions",
    title: "Software Solutions — DraftSight",
    description:
      "The 2D drafting and 3D design platform our own engineering team drafts with — full DWG compatibility, zero workflow disruption.",
    illustration: (
      // eslint-disable-next-line @next/next/no-img-element
      <img
        src="https://picsum.photos/seed/fluxfor-draftsight/640/480"
        alt="Engineering drafting software interface"
        className="h-full w-full object-cover"
      />
    ),
    href: "/products/software-solutions",
  },
];

export function ProductsGrid() {
  return (
    <section className="px-4 pb-24 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-[1240px]">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((p) => (
            <div
              key={p.id}
              id={p.id}
              className="group scroll-mt-24 overflow-hidden rounded-[10px] border border-border-c bg-surface-1 transition-all hover:-translate-y-1 hover:border-brand-blue hover:shadow-xl hover:shadow-brand-blue/[0.08]"
            >
              <div className="aspect-[4/3] w-full overflow-hidden">{p.illustration}</div>
              <div className="p-6">
                <h2 className="text-[19px] font-semibold text-text-primary">{p.title}</h2>
                <p className="mt-3 line-clamp-2 text-[14px] leading-relaxed text-text-secondary">
                  {p.description}
                </p>
                <Link
                  href={p.href}
                  className="mt-4 inline-flex items-center gap-1.5 text-[13px] font-semibold text-brand-blue"
                >
                  Read more
                  <ArrowRight size={13} className="transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}