import { ProductCatalog } from "@/components/products/product-catalog";
import { nonElectricProtectionProducts } from "@/lib/data/non-electric-protection-products";

export default function NonElectricProtectionPage() {
  return (
    <main className="px-4 pb-24 pt-[112px] sm:px-6 sm:pt-[128px] lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mb-10 flex flex-col gap-2">
          <span className="font-mono text-xs uppercase tracking-widest text-brand-cyan">
            Products
          </span>
          <h1 className="font-display text-2xl font-medium text-text-primary sm:text-3xl">
            Non-Electric Protection Devices
          </h1>
          <p className="max-w-2xl text-sm text-text-secondary">
            Mechanical and monitoring devices that protect transformers from
            pressure surges, gas buildup, and abnormal oil or winding conditions.
          </p>
        </div>
        <ProductCatalog
          products={nonElectricProtectionProducts}
          categoryHref="/products/non-electric-protection"
        />
      </div>
    </main>
  );
}