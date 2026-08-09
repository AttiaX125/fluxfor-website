import { ProductCatalog } from "@/components/products/product-catalog";
import { coreMaterialsProducts } from "@/lib/data/core-materials-products";

export default function CoreMaterialsPage() {
  return (
    <main className="px-4 pb-24 pt-[112px] sm:px-6 sm:pt-[128px] lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mb-10 flex flex-col gap-2">
          <span className="font-mono text-xs uppercase tracking-widest text-brand-cyan">
            Products
          </span>
          <h1 className="font-display text-2xl font-medium text-text-primary sm:text-3xl">
            Transformer Core & Lamination Materials
          </h1>
          <p className="max-w-2xl text-sm text-text-secondary">
            Electrical steel, amorphous strip, and core assemblies engineered
            for efficient, low-loss transformer performance.
          </p>
        </div>
        <ProductCatalog products={coreMaterialsProducts} />
      </div>
    </main>
  );
}