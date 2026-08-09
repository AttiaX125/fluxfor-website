"use client";

import { useState } from "react";
import { categories, subProductMap } from "@/lib/data/quote-categories";

const countries = [
  "United States",
  "Canada",
  "Mexico",
  "United Kingdom",
  "United Arab Emirates",
  "Saudi Arabia",
  "Egypt",
  "Other",
];

const inputClasses =
  "w-full rounded-md border border-border-c bg-surface-page px-4 py-3 text-[14.5px] text-text-primary placeholder:text-text-secondary/70 transition-colors focus:border-brand-blue focus:outline-none";
const labelClasses = "block text-[12.5px] font-semibold text-text-secondary";

type Status = "idle" | "submitting" | "success" | "error";

export function QuoteForm() {
  const [category, setCategory] = useState("");
  const [status, setStatus] = useState<Status>("idle");
  const [errorMessage, setErrorMessage] = useState("");
  const subProducts = category ? subProductMap[category] ?? [] : [];

 async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget; // capture before any await — e.currentTarget is null afterward
    setStatus("submitting");
    setErrorMessage("");

    const formData = new FormData(form);
    const payload = Object.fromEntries(formData.entries());

    try {
      const res = await fetch("/api/quote", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        throw new Error(data.error || "Something went wrong.");
      }

      setStatus("success");
      form.reset();
      setCategory("");
    } catch (err) {
      setStatus("error");
      setErrorMessage(err instanceof Error ? err.message : "Something went wrong.");
    }
  }
  if (status === "success") {
    return (
      <div className="rounded-[14px] border border-border-c bg-surface-1 p-10 text-center">
        <h2 className="text-[19px] font-semibold text-text-primary">Request Sent</h2>
        <p className="mt-3 text-[14.5px] text-text-secondary">
          Thanks for reaching out — our team will get back to you shortly.
        </p>
        <button
          type="button"
          onClick={() => setStatus("idle")}
          className="mt-6 rounded-md border border-border-c px-6 py-2.5 text-[13.5px] font-semibold text-text-primary transition-colors hover:border-brand-cyan"
        >
          Submit Another Request
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="grid grid-cols-1 gap-10 rounded-[14px] border border-border-c bg-surface-1 p-6 sm:p-10 lg:grid-cols-2 lg:gap-14"
    >
      {/* Company Information */}
      <div>
        <h2 className="text-[15px] font-semibold text-text-primary">Company Information</h2>
        <div className="mt-5 flex flex-col gap-5">
          <div>
            <label className={labelClasses} htmlFor="companyName">
              Company Name <span className="text-brand-blue">*</span>
            </label>
            <input
              id="companyName"
              name="companyName"
              type="text"
              required
              placeholder="Enter company name"
              className={`${inputClasses} mt-2`}
            />
          </div>
          <div>
            <label className={labelClasses} htmlFor="contactPerson">
              Contact Person <span className="text-brand-blue">*</span>
            </label>
            <input
              id="contactPerson"
              name="contactPerson"
              type="text"
              required
              placeholder="Enter contact person"
              className={`${inputClasses} mt-2`}
            />
          </div>
          <div>
            <label className={labelClasses} htmlFor="email">
              Email <span className="text-brand-blue">*</span>
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              placeholder="Enter email address"
              className={`${inputClasses} mt-2`}
            />
          </div>
          <div>
            <label className={labelClasses} htmlFor="phone">
              Phone / WhatsApp <span className="text-brand-blue">*</span>
            </label>
            <input
              id="phone"
              name="phone"
              type="tel"
              required
              placeholder="Enter phone number"
              className={`${inputClasses} mt-2`}
            />
          </div>
          <div>
            <label className={labelClasses} htmlFor="country">
              Country <span className="text-brand-blue">*</span>
            </label>
            <select id="country" name="country" required defaultValue="" className={`${inputClasses} mt-2`}>
              <option value="" disabled>
                Select country
              </option>
              {countries.map((c) => (
                <option key={c} value={c}>
                  {c}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>

      {/* Requirements */}
      <div className="flex flex-col">
        <h2 className="text-[15px] font-semibold text-text-primary">Requirements</h2>
        <div className="mt-5 flex flex-1 flex-col gap-5">
          <div>
            <label className={labelClasses} htmlFor="category">
              Product Category <span className="text-brand-blue">*</span>
            </label>
            <select
              id="category"
              name="category"
              required
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className={`${inputClasses} mt-2`}
            >
              <option value="" disabled>
                Select category
              </option>
              {categories.map((c) => (
                <option key={c} value={c}>
                  {c}
                </option>
              ))}
            </select>
          </div>
          <div>
            <label className={labelClasses} htmlFor="subProduct">
              Sub-Product
            </label>
            <select
              id="subProduct"
              name="subProduct"
              disabled={!category}
              defaultValue=""
              className={`${inputClasses} mt-2 disabled:cursor-not-allowed disabled:opacity-50`}
            >
              <option value="" disabled>
                {category ? "Select sub-product" : "Choose a category first"}
              </option>
              {subProducts.map((s) => (
                <option key={s.value} value={s.label}>
                  {s.label}
                </option>
              ))}
            </select>
          </div>
          <div className="flex flex-1 flex-col">
            <label className={labelClasses} htmlFor="details">
              Additional Details
            </label>
            <textarea
              id="details"
              name="details"
              placeholder="Any other requirements or comments — site location, timeline, quantities, etc."
              className={`${inputClasses} mt-2 min-h-[168px] flex-1 resize-none`}
            />
          </div>
        </div>
      </div>

      {status === "error" && (
        <div className="lg:col-span-2">
          <p className="text-[13.5px] text-red-500">{errorMessage}</p>
        </div>
      )}

      <div className="lg:col-span-2">
        <button
          type="submit"
          disabled={status === "submitting"}
          className="w-full rounded-md bg-gradient-to-r from-brand-blue to-brand-cyan py-3.5 text-[14.5px] font-semibold text-white transition-opacity hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto sm:px-10"
        >
          {status === "submitting" ? "Sending..." : "Submit Request"}
        </button>
      </div>
    </form>
  );
}