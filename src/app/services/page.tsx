import type { Metadata } from "next";
import { ComingSoon } from "@/components/coming-soon";

export const metadata: Metadata = {
  title: "Services",
  description: "Design & engineering, systems integration, and field services & maintenance for critical infrastructure.",
  alternates: { canonical: "/services" },
};

export default function ServicesPage() {
  return (
    <ComingSoon
      eyebrow="Services"
      title="Engineering that performs under load."
      description="Full details on our five service disciplines are coming to this page next."
    />
  );
}
