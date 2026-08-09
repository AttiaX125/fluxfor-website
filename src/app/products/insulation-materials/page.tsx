import { ProductCatalog } from "@/components/products/product-catalog";
import { insulationMaterialsProducts } from "@/lib/data/insulation-materials-products";

export default function InsulationMaterialsPage() {
  return (
    <main className="px-4 pb-24 pt-[112px] sm:px-6 sm:pt-[128px] lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mb-10 flex flex-col gap-2">
          <span className="font-mono text-xs uppercase tracking-widest text-brand-cyan">
            Products
          </span>
          <h1 className="font-display text-2xl font-medium text-text-primary sm:text-3xl">
            Transformers Insulation Materials
          </h1>
          <p className="max-w-2xl text-sm text-text-secondary">
            Wood, pressboard, and paper-based insulation components engineered
            for transformer winding, core, and structural support.
          </p>
        </div>
        <ProductCatalog
          products={insulationMaterialsProducts}
          categoryHref="/products/insulation-materials"
        />
      </div>
    </main>
  );
}