"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { useTheme } from "next-themes";

interface ProductCategory {
  id: string;
  title: string;
  href: string;
  image?: string;
  imageLight?: string;
  imageDark?: string;
}

const categories: ProductCategory[] = [
  {
    id: "non-electric-protection",
    title: "Non-Electric Protection Devices",
    href: "/products/non-electric-protection",
    imageLight: "/images/home/products/non-electric-protection-light.png",
    imageDark: "/images/home/products/non-electric-protection-dark.png",
  },
  {
    id: "insulation-materials",
    title: "Transformers Insulation Materials",
    href: "/products/insulation-materials",
    imageLight: "/images/home/products/insulation-materials-light.png",
    imageDark: "/images/home/products/insulation-materials-dark.png",
  },
  {
    id: "bushings",
    title: "Transformers Bushing",
    href: "/products/bushings",
    imageLight: "/images/home/products/bushings-light.png",
    imageDark: "/images/home/products/bushings-dark.png",
  },
  {
    id: "software-solutions",
    title: "Software Solutions",
    href: "/products/software-solutions",
    image: "https://picsum.photos/seed/fluxfor-software/640/480",
  },
  {
    id: "core-materials",
    title: "Transformer Core & Lamination Materials",
    href: "/products/core-materials",
    image: "/images/products/core-materials/crgo-lamination-cores.png",
  },
];

export function CategoryGrid() {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const isDark = mounted && resolvedTheme === "dark";

  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
      {categories.map((category) => {
        const src = category.imageLight && category.imageDark
          ? (isDark ? category.imageDark : category.imageLight)
          : category.image!;

        return (
          <Link key={category.id} href={category.href} className="group relative flex flex-col overflow-hidden rounded-[10px] border border-border-c bg-surface-1 transition-all duration-300 hover:-translate-y-1 hover:border-brand-cyan">
            <div className="relative aspect-[4/3] w-full overflow-hidden">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={src} alt={category.title} className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-ink/70 via-transparent to-transparent" />
            </div>
            <div className="flex flex-1 items-center justify-between gap-3 p-5">
              <h3 className="font-display text-base font-medium text-text-primary">{category.title}</h3>
              <span className="shrink-0 text-brand-cyan transition-transform duration-300 group-hover:translate-x-1">→</span>
            </div>
          </Link>
        );
      })}
    </div>
  );
}