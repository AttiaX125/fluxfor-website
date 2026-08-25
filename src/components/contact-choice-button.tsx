"use client";

import { useEffect, useRef, useState } from "react";
import type { MouseEvent as ReactMouseEvent } from "react";
import { MessageCircle, Phone, Check } from "lucide-react";

const PHONE_NUMBER = "201044944974"; // Egypt number: no + or leading 0
const PHONE_DISPLAY = "+20 10 4494 4974";
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
  const [copied, setCopied] = useState(false);
  const [isTouchDevice, setIsTouchDevice] = useState(true); // default to mobile behavior until checked

  const buttonRef = useRef<HTMLButtonElement>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setIsTouchDevice(window.matchMedia("(pointer: coarse)").matches);
  }, []);

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

  function handleCallClick(e: ReactMouseEvent<HTMLAnchorElement>): void {
    if (isTouchDevice) return; // let the tel: link behave normally on mobile

    e.preventDefault();
    navigator.clipboard
      .writeText(`+${PHONE_NUMBER.slice(0, 2)} ${PHONE_NUMBER.slice(2)}`)
      .then(() => {
        setCopied(true);
        setTimeout(() => {
          setCopied(false);
          setOpen(false);
        }, 1200);
      })
      .catch(() => {
        window.location.href = PHONE_TEL_HREF;
      });
  }

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
            onClick={handleCallClick}
            className="flex items-center gap-3 px-4 py-3 text-[14px] text-text-primary transition-colors hover:bg-surface-2"
          >
            {copied ? (
              <Check size={16} className="text-brand-cyan" />
            ) : (
              <Phone size={16} className="text-brand-blue" />
            )}
            {copied ? "Copied!" : isTouchDevice ? "Call Us" : PHONE_DISPLAY}
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