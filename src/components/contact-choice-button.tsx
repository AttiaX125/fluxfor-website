"use client";

import { useEffect, useRef, useState } from "react";
import { MessageCircle, Phone } from "lucide-react";

const PHONE_NUMBER = "201044944974"; // Egypt number: no + or leading 0
const PHONE_TEL_HREF = `tel:+${PHONE_NUMBER}`;
const WHATSAPP_URL = `https://wa.me/${PHONE_NUMBER}`;

type ContactChoiceButtonProps = {
  className?: string;
  label?: string;
};

export function ContactChoiceButton({
  className,
  label = "Contact Us",
}: ContactChoiceButtonProps) {
  const [open, setOpen] = useState(false);
  const [coords, setCoords] = useState({ top: 0, left: 0 });

  const buttonRef = useRef<HTMLButtonElement>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      const target = event.target as Node;

      if (
        buttonRef.current &&
        !buttonRef.current.contains(target) &&
        dropdownRef.current &&
        !dropdownRef.current.contains(target)
      ) {
        setOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  useEffect(() => {
    if (!open || !buttonRef.current) return;

    const rect = buttonRef.current.getBoundingClientRect();
    const dropdownWidth = 224; // Tailwind w-56
    const margin = 16;

    let left = rect.right - dropdownWidth;
    left = Math.max(
      margin,
      Math.min(left, window.innerWidth - dropdownWidth - margin),
    );

    setCoords({
      top: rect.bottom + 8,
      left,
    });
  }, [open]);

  return (
    <>
      <button
        ref={buttonRef}
        type="button"
        onClick={() => setOpen((value) => !value)}
        className={className}
      >
        {label}
      </button>

      {open && (
        <div
          ref={dropdownRef}
          style={{ top: coords.top, left: coords.left }}
          className="fixed z-[200] w-56 overflow-hidden rounded-lg border border-border-c bg-surface-1 shadow-xl"
        >
          <a
            href={PHONE_TEL_HREF}
            className="flex items-center gap-3 px-4 py-3 text-[14px] text-text-primary transition-colors hover:bg-surface-2"
          >
            <Phone size={16} className="text-brand-blue" />
            Call Us
          </a>

          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 px-4 py-3 text-[14px] text-text-primary transition-colors hover:bg-surface-2"
          >
            <MessageCircle size={16} className="text-brand-cyan" />
            Chat on WhatsApp
          </a>
        </div>
      )}
    </>
  );
}