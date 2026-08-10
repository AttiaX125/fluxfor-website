"use client";

import { useState, useRef, useEffect } from "react";
import { Phone, MessageCircle } from "lucide-react";
import { siteConfig } from "@/lib/site-config";

const WHATSAPP_NUMBER = "201044944974"; // international format, no leading 0 or +
const PHONE_DIGITS = siteConfig.phone.replace(/\D/g, ""); // e.g. "7135550148"
const PHONE_TEL_HREF = `tel:+${PHONE_DIGITS}`;

type ContactChoiceButtonProps = {
  className?: string;
  label?: string;
};

export function ContactChoiceButton({ className, label = "Contact Us" }: ContactChoiceButtonProps) {
  const [open, setOpen] = useState(false);
  const [coords, setCoords] = useState({ top: 0, left: 0 });
  const buttonRef = useRef<HTMLButtonElement>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (
        buttonRef.current && !buttonRef.current.contains(e.target as Node) &&
        dropdownRef.current && !dropdownRef.current.contains(e.target as Node)
      ) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  useEffect(() => {
    if (!open || !buttonRef.current) return;
    const rect = buttonRef.current.getBoundingClientRect();
    const dropdownWidth = 224; // w-56
    const margin = 16;
    let left = rect.right - dropdownWidth;
    left = Math.max(margin, Math.min(left, window.innerWidth - dropdownWidth - margin));
    setCoords({ top: rect.bottom + 8, left });
  }, [open]);

  return (
    <>
      <button ref={buttonRef} type="button" onClick={() => setOpen((v) => !v)} className={className}>
        {label}
      </button>

      {open && (
        <div ref={dropdownRef} style={{ top: coords.top, left: coords.left }} className="fixed z-[200] w-56 overflow-hidden rounded-lg border border-border-c bg-surface-1 shadow-xl">
          <a href={PHONE_TEL_HREF} className="flex items-center gap-3 px-4 py-3 text-[14px] text-text-primary transition-colors hover:bg-surface-2">
            <Phone size={16} className="text-brand-blue" />
            Call Us
          </a>
          <a href={`https://wa.me/${WHATSAPP_NUMBER}`} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 px-4 py-3 text-[14px] text-text-primary transition-colors hover:bg-surface-2">
            <MessageCircle size={16} className="text-brand-cyan" />
            Chat on WhatsApp
          </a>
        </div>
      )}
    </>
  );
}