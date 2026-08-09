"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ChevronRight, Check, ArrowRight } from "lucide-react";
import type { CatalogProduct } from "@/lib/data/non-electric-protection-products";

export function ProductDetailView({
  product,
  categoryLabel,
  categoryHref,
}: {
  product: CatalogProduct;
  categoryLabel: string;
  categoryHref: string;
}) {
  const gallery = product.detail?.gallery?.length ? product.detail.gallery : [product.image];
  const [activeImage, setActiveImage] = useState(0);

  return (
    <main className="px-4 pb-24 pt-[112px] sm:px-6 sm:pt-[128px] lg:px-8">
      <div className="mx-auto max-w-7xl">
        {/* breadcrumb */}
        <nav aria-label="Breadcrumb" className="flex items-center gap-1.5 text-[13px] text-text-secondary">
          <Link href="/products" className="transition-colors hover:text-brand-cyan">
            Products
          </Link>
          <ChevronRight size={13} className="text-text-secondary/60" />
          <Link href={categoryHref} className="transition-colors hover:text-brand-cyan">
            {categoryLabel}
          </Link>
          <ChevronRight size={13} className="text-text-secondary/60" />
          <span className="text-text-primary">{product.title}</span>
        </nav>

        <div className="mt-8 grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16">
          {/* gallery */}
          <div>
            <div className="relative aspect-square w-full overflow-hidden rounded-[14px] border border-border-c bg-white">
              <Image
                src={gallery[activeImage]}
                alt={product.title}
                fill
                className="object-contain p-8"
                priority
              />
            </div>
            {gallery.length > 1 && (
              <div className="mt-4 grid grid-cols-4 gap-3">
                {gallery.map((img, i) => (
                  <button
                    key={img}
                    type="button"
                    onClick={() => setActiveImage(i)}
                    aria-label={`View image ${i + 1}`}
                    aria-current={i === activeImage}
                    className={`relative aspect-square overflow-hidden rounded-[8px] border bg-white transition-colors ${
                      i === activeImage ? "border-brand-blue" : "border-border-c hover:border-brand-cyan"
                    }`}
                  >
                    <Image src={img} alt="" fill className="object-contain p-2" />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* content */}
          <div>
            <span className="font-mono text-xs uppercase tracking-widest text-brand-cyan">
              {categoryLabel}
            </span>
            <h1 className="mt-2 font-display text-[26px] font-semibold leading-tight text-text-primary sm:text-[32px]">
              {product.title}
            </h1>
            <p className="mt-4 text-[14.5px] leading-relaxed text-text-secondary">
              {product.detail?.intro ?? product.description}
            </p>

            {product.detail?.specs && product.detail.specs.length > 0 && (
              <div className="mt-8 overflow-hidden rounded-[10px] border border-border-c">
                {product.detail.specs.map((spec, i) => (
                  <div
                    key={spec.label}
                    className={`flex flex-col gap-1 px-5 py-3.5 sm:flex-row sm:items-baseline sm:gap-4 ${
                      i % 2 === 0 ? "bg-surface-1" : "bg-surface-page"
                    }`}
                  >
                    <span className="w-full shrink-0 text-[12.5px] font-semibold text-text-secondary sm:w-[180px]">
                      {spec.label}
                    </span>
                    <span className="text-[13.5px] text-text-primary">{spec.value}</span>
                  </div>
                ))}
              </div>
            )}

            <Link
              href={`/contact?product=${encodeURIComponent(product.title)}`}
              className="group mt-8 inline-flex items-center gap-2 rounded-md bg-gradient-to-r from-brand-blue to-brand-cyan px-6 py-3.5 text-[14px] font-semibold text-white transition-opacity hover:opacity-90"
            >
              Request a Quote for This Product
              <ArrowRight size={15} className="transition-transform group-hover:translate-x-0.5" />
            </Link>
          </div>
        </div>

        {/* features & advantages */}
        {(product.detail?.features?.length || product.detail?.advantages?.length) && (
          <div className="mt-20 grid grid-cols-1 gap-10 border-t border-border-c pt-16 lg:grid-cols-2 lg:gap-16">
            {product.detail?.features && product.detail.features.length > 0 && (
              <div>
                <h2 className="text-[19px] font-semibold text-text-primary">Product Features</h2>
                <ul className="mt-5 flex flex-col gap-4">
                  {product.detail.features.map((f) => (
                    <li key={f} className="flex gap-3">
                      <span className="mt-0.5 flex h-5 w-5 flex-none items-center justify-center rounded-full bg-brand-blue/10">
                        <Check size={12} strokeWidth={2.5} className="text-brand-blue" />
                      </span>
                      <span className="text-[14px] leading-relaxed text-text-secondary">{f}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {product.detail?.advantages && product.detail.advantages.length > 0 && (
              <div>
                <h2 className="text-[19px] font-semibold text-text-primary">Product Advantages</h2>
                <ul className="mt-5 flex flex-col gap-4">
                  {product.detail.advantages.map((a) => (
                    <li key={a} className="flex gap-3">
                      <span className="mt-0.5 flex h-5 w-5 flex-none items-center justify-center rounded-full bg-brand-cyan/10">
                        <Check size={12} strokeWidth={2.5} className="text-brand-cyan" />
                      </span>
                      <span className="text-[14px] leading-relaxed text-text-secondary">{a}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        )}

        {/* applications */}
        {product.detail?.applications && product.detail.applications.length > 0 && (
          <div className="mt-16 border-t border-border-c pt-16">
            <h2 className="text-[19px] font-semibold text-text-primary">Applications</h2>
            <div className="mt-5 flex flex-wrap gap-2.5">
              {product.detail.applications.map((app) => (
                <span
                  key={app}
                  className="rounded-full border border-border-c bg-surface-1 px-4 py-2 text-[13px] text-text-primary"
                >
                  {app}
                </span>
              ))}
            </div>
          </div>
        )}
      </div>
    </main>
  );
}