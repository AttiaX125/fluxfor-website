"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronDown, Menu, X } from "lucide-react";
import { Logo } from "@/components/logo";
import { ThemeToggle } from "@/components/theme-toggle";
import { navItems } from "@/lib/site-config";

function isActive(pathname: string, href: string) {
  const base = href.split("#")[0];
  if (base === "/") return pathname === "/";
  return pathname === base || pathname.startsWith(`${base}/`);
}

export function Navbar() {
  const pathname = usePathname();
  const [openMenu, setOpenMenu] = useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileSubOpen, setMobileSubOpen] = useState<string | null>(null);
  const navRef = useRef<HTMLElement>(null);

  useEffect(() => {
    function onClickOutside(e: MouseEvent) {
      if (navRef.current && !navRef.current.contains(e.target as Node)) {
        setOpenMenu(null);
      }
    }
    document.addEventListener("click", onClickOutside);
    return () => document.removeEventListener("click", onClickOutside);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  const [prevPathname, setPrevPathname] = useState(pathname);
  if (pathname !== prevPathname) {
    setPrevPathname(pathname);
    setMobileOpen(false);
    setMobileSubOpen(null);
  }

  return (
    <header className="fixed inset-x-0 top-0 z-[100] border-b border-white/[0.09] bg-[rgba(10,20,40,0.86)] backdrop-blur-md">
      <nav ref={navRef} className="mx-auto flex h-[72px] max-w-[1240px] items-center justify-between px-6 lg:px-8" aria-label="Primary">
        <Link href="/" className="flex-none" aria-label="FLUXFOR home">
          <Logo />
        </Link>

        <ul className="hidden items-center gap-1 lg:flex">
          {navItems.map((item) => {
            const active = isActive(pathname, item.href);
            return (
              <li key={item.label} className="relative">
                {item.children ? (
                  <button type="button" onClick={() => setOpenMenu(openMenu === item.label ? null : item.label)} aria-expanded={openMenu === item.label} aria-current={active ? "page" : undefined} className={`relative flex items-center gap-1 rounded-md px-4 py-2.5 text-[14px] font-medium transition-colors ${active ? "text-white" : "text-brand-steel hover:text-white"}`}>
                    {item.label}
                    <ChevronDown size={14} className={`transition-transform ${openMenu === item.label ? "rotate-180" : ""}`} />
                    {active && <span className="absolute inset-x-4 -bottom-px h-[2px] rounded-full bg-gradient-to-r from-brand-blue to-brand-cyan" />}
                  </button>
                ) : (
                  <Link href={item.href} aria-current={active ? "page" : undefined} className={`relative block rounded-md px-4 py-2.5 text-[14px] font-medium transition-colors ${active ? "text-white" : "text-brand-steel hover:text-white"}`}>
                    {item.label}
                    {active && <span className="absolute inset-x-4 -bottom-px h-[2px] rounded-full bg-gradient-to-r from-brand-blue to-brand-cyan" />}
                  </Link>
                )}

                {item.children && openMenu === item.label && (
                  <div className="absolute left-0 top-full mt-2 w-72 overflow-hidden rounded-md border border-white/10 bg-brand-ink-2 py-2 shadow-2xl">
                    {item.children.map((child) => (
                      <Link key={child.href} href={child.href} onClick={() => setOpenMenu(null)} className="block px-4 py-3 transition-colors hover:bg-white/5">
                        <span className="block text-[14px] font-medium text-white">{child.label}</span>
                        {child.description && <span className="mt-0.5 block text-[12.5px] text-brand-steel">{child.description}</span>}
                      </Link>
                    ))}
                  </div>
                )}
              </li>
            );
          })}
        </ul>

        <div className="flex items-center gap-4">
          <ThemeToggle />
          <Link href="/contact" className="hidden items-center gap-2 rounded-md bg-gradient-to-r from-brand-blue to-brand-cyan px-5 py-[11px] text-[14px] font-semibold text-white transition-transform hover:-translate-y-px sm:inline-flex">
            Request a Quotation
          </Link>
          <button type="button" onClick={() => setMobileOpen((v) => !v)} aria-label={mobileOpen ? "Close menu" : "Open menu"} aria-expanded={mobileOpen} className="flex h-9 w-9 items-center justify-center text-white lg:hidden">
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </nav>

      {/* Mobile menu overlay */}
      <div className={`fixed inset-0 top-[72px] z-[100] h-[calc(100vh-72px)] overflow-y-auto bg-brand-ink px-6 py-6 transition-opacity lg:hidden ${mobileOpen ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"}`}>
        <ul className="mt-2 flex flex-col">
          {navItems.map((item) => {
            const active = isActive(pathname, item.href);
            return (
              <li key={item.label} className="border-b border-white/10">
                <div className="flex items-center justify-between">
                  <Link href={item.href} onClick={() => setMobileOpen(false)} aria-current={active ? "page" : undefined} className={`flex flex-1 items-center gap-2.5 py-4 font-display text-[19px] ${active ? "text-brand-cyan" : "text-white"}`}>
                    {active && <span className="h-1.5 w-1.5 flex-none rounded-full bg-brand-cyan" />}
                    {item.label}
                  </Link>
                  {item.children && (
                    <button type="button" aria-label={`Toggle ${item.label} submenu`} onClick={() => setMobileSubOpen(mobileSubOpen === item.label ? null : item.label)} className="p-4 text-white">
                      <ChevronDown size={18} className={`transition-transform ${mobileSubOpen === item.label ? "rotate-180" : ""}`} />
                    </button>
                  )}
                </div>
                {item.children && mobileSubOpen === item.label && (
                  <ul className="pb-3 pl-1">
                    {item.children.map((child) => (
                      <li key={child.href}>
                        <Link href={child.href} onClick={() => setMobileOpen(false)} className="block py-2.5 text-[15px] text-brand-steel">
                          {child.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            );
          })}
        </ul>

        <Link href="/contact" onClick={() => setMobileOpen(false)} className="mt-6 flex items-center justify-center rounded-md bg-gradient-to-r from-brand-blue to-brand-cyan px-5 py-3 text-[14px] font-semibold text-white">
          Request a Quotation
        </Link>
      </div>
    </header>
  );
}