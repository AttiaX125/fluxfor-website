"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { productSlug, type CatalogProduct } from "@/lib/data/non-electric-protection-products";

const PAGE_SIZE = 6;

export function ProductCatalog({
  products,
  categoryHref,
}: {
  products: CatalogProduct[];
  categoryHref?: string;
}) {
  const [page, setPage] = useState(0);
  const totalPages = Math.ceil(products.length / PAGE_SIZE);
  const start = page * PAGE_SIZE;
  const current = products.slice(start, start + PAGE_SIZE);

  const goTo = (p: number) => {
    setPage(Math.max(0, Math.min(totalPages - 1, p)));
    if (typeof window !== "undefined") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <div>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {current.map((p) => {
          const cardInner = (
            <>
              <div className="relative aspect-[4/3] w-full overflow-hidden bg-white">
                <Image
                  src={p.image}
                  alt={p.title}
                  fill
                  className="object-contain p-4 transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <div className="p-5">
                <h3 className="text-[16px] font-semibold text-text-primary">{p.title}</h3>
                <p className="mt-1.5 line-clamp-2 text-[13px] leading-relaxed text-text-secondary">
                  {p.description}
                </p>
              </div>
            </>
          );

          const cardClasses =
            "group overflow-hidden rounded-[10px] border border-border-c bg-surface-1 transition-all hover:-translate-y-1 hover:border-brand-blue hover:shadow-xl hover:shadow-brand-blue/[0.08]";

          if (categoryHref) {
            return (
              <Link key={p.id} href={`${categoryHref}/${productSlug(p)}`} className={cardClasses}>
                {cardInner}
              </Link>
            );
          }

          return (
            <div key={p.id} className={cardClasses}>
              {cardInner}
            </div>
          );
        })}
      </div>

      {totalPages > 1 && (
        <div className="mt-12 flex items-center justify-center gap-2">
          <button
            type="button"
            onClick={() => goTo(page - 1)}
            disabled={page === 0}
            aria-label="Previous page"
            className="flex h-9 w-9 items-center justify-center rounded-full border border-border-c bg-surface-1 text-text-primary transition-colors hover:border-brand-cyan disabled:opacity-30"
          >
            <ChevronLeft size={16} />
          </button>

          {Array.from({ length: totalPages }).map((_, i) => (
            <button
              key={i}
              type="button"
              onClick={() => goTo(i)}
              aria-label={`Go to page ${i + 1}`}
              aria-current={i === page}
              className={`h-9 min-w-9 rounded-full px-3 font-mono text-[13px] transition-colors ${
                i === page
                  ? "bg-brand-blue text-white"
                  : "border border-border-c bg-surface-1 text-text-secondary hover:border-brand-cyan"
              }`}
            >
              {i + 1}
            </button>
          ))}

          <button
            type="button"
            onClick={() => goTo(page + 1)}
            disabled={page === totalPages - 1}
            aria-label="Next page"
            className="flex h-9 w-9 items-center justify-center rounded-full border border-border-c bg-surface-1 text-text-primary transition-colors hover:border-brand-cyan disabled:opacity-30"
          >
            <ChevronRight size={16} />
          </button>
        </div>
      )}
    </div>
  );
}