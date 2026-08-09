import { ContactChoiceButton } from "@/components/contact-choice-button";

export function PromoBanner() {
  return (
    <section className="px-4 py-6 sm:px-6 lg:px-8">
      <div className="relative mx-auto max-w-[1240px] rounded-[20px] border border-white/10 bg-gradient-to-r from-brand-ink via-brand-ink-3 to-brand-blue-2 px-8 py-9 sm:px-12">
        <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden rounded-[20px]">
          <div className="absolute -right-16 -top-16 h-56 w-56 rounded-full border border-white/10" />
        </div>
        <div className="relative flex flex-col items-start justify-between gap-5 sm:flex-row sm:items-center">
          <div>
            <h2 className="font-display text-[22px] font-semibold text-white sm:text-[26px]">
              Always open for you.
            </h2>
            <p className="mt-1.5 max-w-[480px] text-[14px] text-brand-steel">
              Emergency field response, dispatched near you — 365 days a year, 24/7.
            </p>
          </div>
          <ContactChoiceButton label="Contact Us" className="inline-flex flex-none items-center gap-2 rounded-md bg-white/10 px-6 py-3 text-[14px] font-semibold text-white ring-1 ring-inset ring-white/25 transition-colors hover:bg-white/15" />
        </div>
      </div>
    </section>
  );
}