import type { Metadata } from "next";
import { QuoteForm } from "@/components/contact/quote-form";
import { ContactChoiceButton } from "@/components/contact-choice-button";

export const metadata: Metadata = {
  title: "Request a Quotation",
  description:
    "Tell FLUXFOR about your project — an engineer reviews every request and responds within one business day.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <>
      <section className="px-4 pb-14 pt-[112px] sm:px-6 sm:pt-[128px] lg:px-8">
        <div className="mx-auto max-w-[1240px]">
          <div className="eyebrow text-brand-blue-2 dark:text-brand-cyan">
            Request a Quotation
          </div>
          <h1 className="mt-4 font-display text-[clamp(28px,4vw,42px)] font-semibold text-text-primary">
            Tell us your requirements.
          </h1>
          <p className="mt-3 max-w-[560px] text-[15px] leading-relaxed text-text-secondary">
            Fill out the form below and our team will get back to you shortly —
            an engineer reviews every request, not a sales queue.
          </p>

          <div className="mt-10">
            <QuoteForm />
          </div>
        </div>
      </section>

      <section className="px-4 pb-4 sm:px-6 lg:px-8">
        <div className="mx-auto flex max-w-[1240px] flex-col items-start justify-between gap-5 rounded-[14px] bg-brand-ink px-7 py-6 sm:flex-row sm:items-center sm:px-9">
          <div>
            <h2 className="text-[16px] font-semibold text-white">
              Prefer to talk to us directly?
            </h2>
            <p className="mt-1 text-[13.5px] text-brand-steel">
              Our team is ready to assist you.
            </p>
          </div>
          <ContactChoiceButton label="Contact Us" className="inline-flex flex-none items-center gap-2.5 rounded-md border border-white/20 px-6 py-3 text-[14px] font-semibold text-white transition-colors hover:border-brand-cyan hover:text-brand-cyan" />
        </div>
      </section>
    </>
  );
}