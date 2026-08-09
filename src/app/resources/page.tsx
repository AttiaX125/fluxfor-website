import type { Metadata } from "next";
import { ComingSoon } from "@/components/coming-soon";

export const metadata: Metadata = {
  title: "Resources",
  description: "Case studies, technical guides, and field notes from the FLUXFOR engineering team.",
  alternates: { canonical: "/resources" },
};

export default function ResourcesPage() {
  return (
    <ComingSoon
      eyebrow="Resources"
      title="Field notes, case studies, and technical guides."
      description="Our resource library is coming to this page next."
    />
  );
}
