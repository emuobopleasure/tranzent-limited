"use client";

import { useState } from "react";
import Modal from "./Modal";

const SERVICE_OPTIONS = [
  "Vehicle Transportation",
  "Enclosed & High-Value Haul",
  "Fleet & Dealer Logistics",
  "Mobility Consulting",
  "General Inquiry",
];

const initialState = { name: "", email: "", phone: "", service: "", message: "" };

export default function ContactForm() {
  const [values, setValues] = useState(initialState);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState("idle"); // idle | submitting | success

  function update(field, value) {
    setValues((v) => ({ ...v, [field]: value }));
    if (errors[field]) setErrors((e) => ({ ...e, [field]: undefined }));
  }

  function validate() {
    const next = {};
    if (!values.name.trim()) next.name = "Please tell us your full name.";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) next.email = "Enter a valid email address.";
    if (!values.phone.trim()) next.phone = "A phone number helps us reach you faster.";
    if (!values.service) next.service = "Select the service you're inquiring about.";
    if (!values.message.trim() || values.message.trim().length < 10)
      next.message = "Give us a few details — at least 10 characters.";
    return next;
  }

  function handleSubmit(e) {
    e.preventDefault();
    const next = validate();
    setErrors(next);
    if (Object.keys(next).length > 0) return;

    setStatus("submitting");
    // Wire your real API call in here — resolve to "success" on a 2xx
    // response and "error" on a failed request/timeout. The small random
    // failure below exists only so the error modal is easy to preview.
    window.setTimeout(() => {
      const requestSucceeded = Math.random() > 0.12;
      if (requestSucceeded) {
        setStatus("success");
        setValues(initialState);
      } else {
        setStatus("error");
      }
    }, 900);
  }

  function closeModal() {
    setStatus("idle");
  }

  return (
    <>
    <form
      onSubmit={handleSubmit}
      noValidate
      className="rounded-3xl border border-line bg-white p-7 shadow-card sm:p-10"
    >
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
        <div className="sm:col-span-1">
          <label htmlFor="name" className="field-label">
            Full Name
          </label>
          <input
            id="name"
            type="text"
            autoComplete="name"
            value={values.name}
            onChange={(e) => update("name", e.target.value)}
            aria-invalid={Boolean(errors.name)}
            aria-describedby={errors.name ? "name-error" : undefined}
            className="field-input"
            placeholder="Adaeze Okoye"
          />
          {errors.name && (
            <p id="name-error" className="mt-2 text-[13px] text-accent-600">
              {errors.name}
            </p>
          )}
        </div>

        <div className="sm:col-span-1">
          <label htmlFor="phone" className="field-label">
            Phone Number
          </label>
          <input
            id="phone"
            type="tel"
            autoComplete="tel"
            value={values.phone}
            onChange={(e) => update("phone", e.target.value)}
            aria-invalid={Boolean(errors.phone)}
            aria-describedby={errors.phone ? "phone-error" : undefined}
            className="field-input"
            placeholder="+234 800 000 0000"
          />
          {errors.phone && (
            <p id="phone-error" className="mt-2 text-[13px] text-accent-600">
              {errors.phone}
            </p>
          )}
        </div>

        <div className="sm:col-span-2">
          <label htmlFor="email" className="field-label">
            Email Address
          </label>
          <input
            id="email"
            type="email"
            autoComplete="email"
            value={values.email}
            onChange={(e) => update("email", e.target.value)}
            aria-invalid={Boolean(errors.email)}
            aria-describedby={errors.email ? "email-error" : undefined}
            className="field-input"
            placeholder="you@company.com"
          />
          {errors.email && (
            <p id="email-error" className="mt-2 text-[13px] text-accent-600">
              {errors.email}
            </p>
          )}
        </div>

        <div className="sm:col-span-2">
          <label htmlFor="service" className="field-label">
            Service or Inquiry Type
          </label>
          <div className="relative">
            <select
              id="service"
              value={values.service}
              onChange={(e) => update("service", e.target.value)}
              aria-invalid={Boolean(errors.service)}
              aria-describedby={errors.service ? "service-error" : undefined}
              className="field-input appearance-none pr-11"
            >
              <option value="" disabled>
                Select a service
              </option>
              {SERVICE_OPTIONS.map((opt) => (
                <option key={opt} value={opt}>
                  {opt}
                </option>
              ))}
            </select>
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-ink-400"
              aria-hidden="true"
            >
              <path d="M4 6l4 4 4-4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
          {errors.service && (
            <p id="service-error" className="mt-2 text-[13px] text-accent-600">
              {errors.service}
            </p>
          )}
        </div>

        <div className="sm:col-span-2">
          <label htmlFor="message" className="field-label">
            Tell us what needs to move
          </label>
          <textarea
            id="message"
            rows={5}
            value={values.message}
            onChange={(e) => update("message", e.target.value)}
            aria-invalid={Boolean(errors.message)}
            aria-describedby={errors.message ? "message-error" : undefined}
            className="field-input resize-none"
            placeholder="Vehicle make/model, origin and destination, preferred timeline, and any special handling requirements."
          />
          {errors.message && (
            <p id="message-error" className="mt-2 text-[13px] text-accent-600">
              {errors.message}
            </p>
          )}
        </div>
      </div>

      <button
        type="submit"
        disabled={status === "submitting"}
        className="btn-primary mt-8 w-full sm:w-auto"
      >
        {status === "submitting" ? "Sending…" : "Submit Inquiry"}
        {status !== "submitting" && (
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
            <path d="M2 12 12 2M12 2H4M12 2v8" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        )}
      </button>
      <p className="mt-4 text-[12.5px] text-ink-400">
        By submitting, you agree to be contacted by Tranzent regarding your inquiry.
      </p>
    </form>

    <Modal open={status === "success"} onClose={closeModal}>
      <button
        type="button"
        onClick={closeModal}
        aria-label="Close"
        className="absolute right-5 top-5 flex h-9 w-9 items-center justify-center rounded-full text-ink-400 transition-colors duration-200 hover:bg-mist hover:text-ink-900"
      >
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
          <path d="M2 2l12 12M14 2 2 14" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
        </svg>
      </button>
      <div className="flex flex-col items-center pt-2 text-center">
        <span className="flex h-16 w-16 items-center justify-center rounded-full bg-secondary-50 text-secondary-600">
          <svg width="30" height="30" viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <path
              d="M20 6 9 17l-5-5"
              stroke="currentColor"
              strokeWidth="2.4"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeDasharray="48"
              className={status === "success" ? "animate-draw-check" : ""}
            />
          </svg>
        </span>
        <h3 className="mt-6 font-display text-2xl font-semibold text-ink-900">
          Inquiry received.
        </h3>
        <p className="mt-3 max-w-xs text-[15px] leading-relaxed text-ink-500">
          A member of the Tranzent team will reach out within one business day
          with a routed quote.
        </p>
        <button type="button" onClick={closeModal} className="btn-secondary mt-8">
          Done
        </button>
      </div>
    </Modal>

    <Modal open={status === "error"} onClose={closeModal}>
      <button
        type="button"
        onClick={closeModal}
        aria-label="Close"
        className="absolute right-5 top-5 flex h-9 w-9 items-center justify-center rounded-full text-ink-400 transition-colors duration-200 hover:bg-mist hover:text-ink-900"
      >
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
          <path d="M2 2l12 12M14 2 2 14" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
        </svg>
      </button>
      <div className="flex flex-col items-center pt-2 text-center">
        <span className={`flex h-16 w-16 items-center justify-center rounded-full bg-accent-50 text-accent-600 ${status === "error" ? "animate-shake" : ""}`}>
          <svg width="30" height="30" viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <path d="M12 8v5M12 16.5v.01" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" />
            <circle cx="12" cy="12" r="9.25" stroke="currentColor" strokeWidth="2" />
          </svg>
        </span>
        <h3 className="mt-6 font-display text-2xl font-semibold text-ink-900">
          Something went wrong.
        </h3>
        <p className="mt-3 max-w-xs text-[15px] leading-relaxed text-ink-500">
          We couldn&rsquo;t send your inquiry. Please check your connection
          and try again, or reach us directly at hello@tranzent.co.
        </p>
        <button
          type="button"
          onClick={closeModal}
          className="btn-primary mt-8"
        >
          Try again
        </button>
      </div>
    </Modal>
    </>
  );
}
