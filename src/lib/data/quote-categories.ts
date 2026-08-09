import { nonElectricProtectionProducts } from "./non-electric-protection-products";
import { insulationMaterialsProducts } from "./insulation-materials-products";
import { bushingsProducts } from "./bushings-products";
import { coreMaterialsProducts } from "./core-materials-products";

function toOptions(products: { id: string; title: string }[]) {
  return products.map((p) => ({ value: `${p.id}-${p.title}`, label: p.title }));
}

export const subProductMap: Record<string, { value: string; label: string }[]> = {
  "Non-Electric Protection Devices": [
    ...toOptions(nonElectricProtectionProducts),
    { value: "not-sure", label: "Not sure yet" },
  ],
  "Transformers Insulation Materials": [
    ...toOptions(insulationMaterialsProducts),
    { value: "not-sure", label: "Not sure yet" },
  ],
  "Transformers Bushing": [
    ...toOptions(bushingsProducts),
    { value: "not-sure", label: "Not sure yet" },
  ],
  "Transformer Core & Lamination Materials": [
    ...toOptions(coreMaterialsProducts),
    { value: "not-sure", label: "Not sure yet" },
  ],
  "Software Solutions": [
    { value: "draftsight", label: "DraftSight Software" },
    { value: "not-sure", label: "Not sure yet" },
  ],
  Other: [{ value: "other", label: "Not sure / other" }],
};

export const categories = Object.keys(subProductMap);