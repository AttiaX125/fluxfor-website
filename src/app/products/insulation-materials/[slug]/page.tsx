import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { insulationMaterialsProducts } from "@/lib/data/insulation-materials-products";
import { productSlug } from "@/lib/data/non-electric-protection-products";
import { ProductDetailView } from "@/components/products/product-detail-view";

export function generateStaticParams() {
  return insulationMaterialsProducts.map((p) => ({ slug: productSlug(p) }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const product = insulationMaterialsProducts.find((p) => productSlug(p) === slug);
  if (!product) return {};
  return {
    title: product.title,
    description: product.description,
  };
}

export default async function InsulationMaterialDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const product = insulationMaterialsProducts.find((p) => productSlug(p) === slug);
  if (!product) notFound();

  return (
    <ProductDetailView
      product={product}
      categoryLabel="Transformers Insulation Materials"
      categoryHref="/products/insulation-materials"
    />
  );
}