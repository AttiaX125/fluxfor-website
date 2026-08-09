import Link from "next/link";
import { Logo } from "@/components/logo";
import { footerNav, siteConfig } from "@/lib/site-config";

function LinkedInIcon() {
  return (
    <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor" aria-hidden="true">
      <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.02-3.03-1.85-3.03-1.85 0-2.14 1.45-2.14 2.94v5.66H9.36V9h3.41v1.56h.05c.47-.9 1.63-1.85 3.36-1.85 3.6 0 4.27 2.37 4.27 5.45v6.29zM5.34 7.43a2.06 2.06 0 110-4.12 2.06 2.06 0 010 4.12zM7.12 20.45H3.56V9h3.56v11.45z" />
    </svg>
  );
}

export function Footer() {
  return (
    <footer className="relative bg-brand-ink px-4 pb-7 pt-12 text-white sm:px-6 lg:px-8">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-brand-cyan to-transparent" />

      <div className="mx-auto max-w-[1240px]">
        <div className="grid grid-cols-1 gap-8 border-b border-white/10 pb-10 sm:grid-cols-3">
          <div className="sm:col-span-2 lg:col-span-1">
            <Logo />
            <p className="mt-3.5 max-w-[240px] text-[13.5px] leading-relaxed text-brand-steel">
              {siteConfig.description}
            </p>
            <Link
              href={siteConfig.social.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="FLUXFOR on LinkedIn"
              className="mt-5 inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/15 text-brand-steel transition-colors hover:border-brand-cyan hover:text-brand-cyan"
            >
              <LinkedInIcon />
            </Link>
          </div>

          {Object.entries(footerNav).map(([heading, links]) => (
            <div key={heading}>
              <h5 className="font-mono text-[11px] uppercase tracking-[0.14em] text-brand-steel-dim">
                {heading}
              </h5>
              <ul className="mt-4 flex flex-col gap-0.5">
                {links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="group inline-flex items-center gap-1.5 py-1.5 text-[14px] text-brand-steel transition-colors hover:text-brand-cyan"
                    >
                      <span className="h-[3px] w-[3px] shrink-0 rounded-full bg-brand-cyan opacity-0 transition-opacity group-hover:opacity-100" />
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="flex flex-col gap-3 pt-6 text-[12.5px] text-brand-steel-dim sm:flex-row sm:items-center sm:justify-between">
          <span>© {new Date().getFullYear()} {siteConfig.legalName}. All rights reserved.</span>
          <span className="font-mono text-[11.5px] tracking-wide">{siteConfig.location} — Engineering Services</span>
        </div>
      </div>
    </footer>
  );
}