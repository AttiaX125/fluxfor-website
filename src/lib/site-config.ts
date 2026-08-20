export const siteConfig = {
  name: "FLUXFOR",
  legalName: "FLUXFOR Integrated Solutions",
  tagline: "Powering Progress. Delivering Reliability.",
  description:
    "FLUXFOR designs, builds, and maintains integrated engineering solutions for critical infrastructure — from substation modernization to field services, backed by an authorized distributor network across power systems, switchgear, and controls.",
  url: "https://www.fluxfor.com",
  ogImage: "/og-image.jpg",
  location: "Houston, Texas",
  phone: "(713) 555-0148",
  email: "projects@fluxfor.com",
  social: {
    linkedin: "https://www.linkedin.com/company/fluxfor",
  },
} as const;

export type NavItem = {
  label: string;
  href: string;
  children?: { label: string; href: string; description?: string }[];
};

export const navItems: NavItem[] = [
  { label: "Home", href: "/" },
{
  label: "Products",
  href: "/products",
  children: [
    { label: "All Products", href: "/products" },
    { label: "Non-Electric Protection Devices", href: "/products/non-electric-protection" },
    { label: "Transformers Insulation Materials", href: "/products/insulation-materials" },
    { label: "Transformers Bushing", href: "/products/bushings" },
    { label: "Transformer Core & Lamination Materials", href: "/products/core-materials" },
    { label: "Software Solutions", href: "/products/software-solutions" },
  ],
},
  { label: "Market", href: "/market" },
  { label: "About Us", href: "/about" },
];

export const footerNav = {
  Company: [
    { label: "About Us", href: "/about" },
    { label: "Careers", href: "/careers" },
    { label: "Resources", href: "/resources" },
    { label: "Contact", href: "/contact" },
  ],
  Products: [
    { label: "All Products", href: "/products" },
    { label: "Accessories and Monitoring Devices", href: "/products/accessories-monitoring" },
    { label: "Transformers Insulation Materials", href: "/products/insulation-materials" },
    { label: "Transformers Bushing", href: "/products/bushings" },
    { label: "Transformer Core & Lamination Materials", href: "/products/core-materials" },
  ],
};