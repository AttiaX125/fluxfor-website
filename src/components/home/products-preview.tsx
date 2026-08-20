"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { ArrowRight } from "lucide-react";

const products = [
  {
    title: "Transformers Bushing",
    description: "High-voltage porcelain, silicone, and epoxy resin bushings built to international and country-specific standards.",
    href: "/products/bushings",
    imageLight: "/images/home/products/bushings-light.png",
    imageDark: "/images/home/products/bushings-dark.png",
  },
    {
  title: "Transformer Core Materials",
  description:
    "High-quality electrical steel and amorphous metal materials engineered for efficient transformer cores and reliable magnetic performance.",
  href: "/products/core-materials",
    imageLight: "/images/home/products/transformer-light.png",
    imageDark: "/images/home/products/transformer-dark.png",
},
  {
    title: "Accessories and monitoring devices.",
    description: "Gas relays, pressure relief devices, oil level gauges, and temperature indicators for continuous transformer protection.",
    href: "/products/accessories-monitoring",
    imageLight: "/images/home/products/non-electric-protection-light.png",
    imageDark: "/images/home/products/non-electric-protection-dark.png",
  },

];

export function ProductsPreview() {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const isDark = mounted && resolvedTheme === "dark";

  return (
    <section className="px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-[1240px]">
        <div className="mx-auto max-w-[720px] text-center">
          <div className="eyebrow justify-center text-brand-blue-2 dark:text-brand-cyan">Products</div>
          <h2 className="mt-4 font-display text-[clamp(24px,2.8vw,34px)] font-semibold leading-tight text-text-primary">
            Hardware engineered to spec, not to shortcuts.
          </h2>
          <p className="mt-3 text-[15px] leading-relaxed text-text-secondary">
            Authorized distributor hardware across transformers, switchgear, and
            monitoring — backed by our own field-services team, not a reseller hotline.
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-3">
          {products.map((p) => (
            <Link key={p.title} href={p.href} className="group overflow-hidden rounded-[10px] border border-border-c bg-surface-1 transition-all hover:-translate-y-1 hover:border-brand-blue hover:shadow-xl hover:shadow-brand-blue/[0.08]">
              <div className="relative aspect-[4/3] w-full overflow-hidden">
                <Image src={isDark ? p.imageDark : p.imageLight} alt={p.title} fill className="object-cover transition-transform duration-500 group-hover:scale-105" />
              </div>
              <div className="p-6">
                <h3 className="text-[17px] font-semibold text-text-primary">{p.title}</h3>
                <p className="mt-2 text-[13.5px] leading-relaxed text-text-secondary">{p.description}</p>
                <span className="mt-4 inline-flex items-center gap-1.5 text-[13px] font-semibold text-brand-blue">
                  Read more
                  <ArrowRight size={13} className="transition-transform group-hover:translate-x-1" />
                </span>
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-10 text-center">
          <Link href="/products" className="inline-flex items-center gap-2 text-[14px] font-semibold text-brand-blue hover:underline">
            View All Products <ArrowRight size={15} />
          </Link>
        </div>
      </div>
    </section>
  );
}