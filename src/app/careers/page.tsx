import type { Metadata } from "next";
import { ComingSoon } from "@/components/coming-soon";

export const metadata: Metadata = {
  title: "Careers",
  description: "Join the FLUXFOR team — open roles in engineering, field services, and operations.",
  alternates: { canonical: "/careers" },
};

export default function CareersPage() {
  return (
    <ComingSoon
      eyebrow="Careers"
      title="Join the team building critical infrastructure."
      description="Open roles are coming to this page next."
    />
  );
}
