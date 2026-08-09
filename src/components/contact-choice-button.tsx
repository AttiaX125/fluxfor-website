"use client";

import { useState, useRef, useEffect } from "react";
import { Phone, MessageCircle } from "lucide-react";
import { siteConfig } from "@/lib/site-config";

const WHATSAPP_NUMBER = "201044944974"; // international format, no leading 0 or +
const PHONE_NUMBER = siteConfig.phone;

type ContactChoiceButtonProps = {
  className?: string;
  label?: string;
};

export function ContactChoiceButton({ className, label = "Contact Us" }: ContactChoiceButtonProps) {
  const [open, setOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div ref={containerRef} className="relative inline-block">
      <button type="button" onClick={() => setOpen((v) => !v)} className={className}>
        {label}
      </button>

      {open && (
        <div className="absolute right-0 top-full z-20 mt-2 w-56 overflow-hidden rounded-lg border border-border-c bg-surface-1 shadow-xl">
          <a href={`tel:${PHONE_NUMBER.replace(/[^\d+]/g, "")}`} className="flex items-center gap-3 px-4 py-3 text-[14px] text-text-primary transition-colors hover:bg-surface-2">
            <Phone size={16} className="text-brand-blue" />
            Call Us
          </a>
          <a href={`https://wa.me/${WHATSAPP_NUMBER}`} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 px-4 py-3 text-[14px] text-text-primary transition-colors hover:bg-surface-2">
            <MessageCircle size={16} className="text-brand-cyan" />
            Chat on WhatsApp
          </a>
        </div>
      )}
    </div>
  );
}