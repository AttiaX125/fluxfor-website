import { HeroCarousel } from "@/components/hero-carousel";
import { CategoryGrid } from "@/components/products/category-grid";

export default function ProductsPage() {
  return (
    <main className="flex flex-col gap-16 pb-24">
      <HeroCarousel />

      <section className="px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mb-10 flex flex-col gap-2">
            <span className="font-mono text-xs uppercase tracking-widest text-brand-cyan">
              Our Range
            </span>
            <h2 className="font-display text-2xl font-medium text-text-primary sm:text-3xl">
              Product Categories
            </h2>
            <p className="max-w-2xl text-sm text-text-secondary">
              Explore our core product families, from protection devices to the software that keeps them running.
            </p>
          </div>
          <CategoryGrid />
        </div>
      </section>
    </main>
  );
}