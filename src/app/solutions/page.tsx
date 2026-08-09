import type { Metadata } from "next";
import { ComingSoon } from "@/components/coming-soon";

export const metadata: Metadata = {
  title: "Solutions",
  description: "Purpose-built engineering solutions for utilities, renewables, industrial, and data center clients.",
  alternates: { canonical: "/solutions" },
};

export default function SolutionsPage() {
  return (
    <ComingSoon
      eyebrow="Solutions"
      title="Purpose-built for the industries we serve."
      description="Industry-by-industry breakdowns are coming to this page next."
    />
  );
}
