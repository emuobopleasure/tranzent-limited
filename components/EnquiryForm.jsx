"use client";

import { useState } from "react";
import Modal from "./Modal";
import { ErrorModalContent, SuccessModalContent } from "./ModalStatus";

const initialState = { name: "", email: "", phone: "", message: "" };

export default function EnquiryForm() {
    const [values, setValues] = useState(initialState);
    const [errors, setErrors] = useState({});
    const [status, setStatus] = useState("idle"); // idle | submitting | success | error

    function update(field, value) {
        setValues((v) => ({ ...v, [field]: value }));
        if (errors[field]) setErrors((e) => ({ ...e, [field]: undefined }));
    }

    function validate() {
        const next = {};
        if (!values.name.trim()) next.name = "Please tell us your full name.";
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) next.email = "Enter a valid email address.";
        if (!values.phone.trim()) next.phone = "A phone number helps us reach you faster.";
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
        fetch("/api/submit-form", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                formType: "enquiry",
                ...values,
            }),
        })
            .then((res) => (res.ok ? res.json() : Promise.reject(res)))
            .then(() => {
                setStatus("success");
                setValues(initialState);
            })
            .catch(() => {
                setStatus("error");
            });
    }

    function closeModal() {
        setStatus("idle");
    }

    return (
        <>
            <form onSubmit={handleSubmit} noValidate className="rounded-3xl border-line bg-white p-7 sm:p-10">
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                    <div>
                        <label htmlFor="name" className="field-label">Full Name</label>
                        <input
                            id="name"
                            type="text"
                            autoComplete="name"
                            value={values.name}
                            onChange={(e) => update("name", e.target.value)}
                            aria-invalid={Boolean(errors.name)}
                            className="field-input"
                            placeholder="Adaeze Okoye"
                        />
                        {errors.name && <p className="mt-2 text-[13px] text-accent-600">{errors.name}</p>}
                    </div>

                    <div>
                        <label htmlFor="phone" className="field-label">Phone Number</label>
                        <input
                            id="phone"
                            type="tel"
                            autoComplete="tel"
                            value={values.phone}
                            onChange={(e) => update("phone", e.target.value)}
                            aria-invalid={Boolean(errors.phone)}
                            className="field-input"
                            placeholder="+234 800 000 0000"
                        />
                        {errors.phone && <p className="mt-2 text-[13px] text-accent-600">{errors.phone}</p>}
                    </div>

                    <div className="sm:col-span-2">
                        <label htmlFor="email" className="field-label">Email Address</label>
                        <input
                            id="email"
                            type="email"
                            autoComplete="email"
                            value={values.email}
                            onChange={(e) => update("email", e.target.value)}
                            aria-invalid={Boolean(errors.email)}
                            className="field-input"
                            placeholder="you@company.com"
                        />
                        {errors.email && <p className="mt-2 text-[13px] text-accent-600">{errors.email}</p>}
                    </div>

                    <div className="sm:col-span-2">
                        <label htmlFor="message" className="field-label">How can we help?</label>
                        <textarea
                            id="message"
                            rows={5}
                            value={values.message}
                            onChange={(e) => update("message", e.target.value)}
                            aria-invalid={Boolean(errors.message)}
                            className="field-input resize-none"
                            placeholder="Tell us what you need, and we'll get back to you shortly."
                        />
                        {errors.message && <p className="mt-2 text-[13px] text-accent-600">{errors.message}</p>}
                    </div>
                </div>

                <button type="submit" disabled={status === "submitting"} className="btn-primary mt-8 w-full sm:w-auto">
                    {status === "submitting" ? "Sending…" : "Submit Enquiry"}
                    {status !== "submitting" && (
                        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                            <path d="M2 12 12 2M12 2H4M12 2v8" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    )}
                </button>
                <p className="mt-4 text-[12.5px] text-ink-400">
                    By submitting, you agree to be contacted by Tranzent regarding your enquiry.
                </p>
                <p className="mt-3 text-[12.5px] text-ink-400">
                    Need to move a vehicle instead?{" "}

                    <a href="/quote" className="font-medium text-primary-600 underline underline-offset-2 hover:text-primary-700">
                        Request a quote here
                    </a>.
                </p>
            </form>

            <Modal open={status === "success"} onClose={closeModal}>
                <SuccessModalContent
                    title="Enquiry received."
                    message="A member of the Tranzent team will reach out within one business day."
                    onClose={closeModal}
                />
            </Modal>

            <Modal open={status === "error"} onClose={closeModal}>
                <ErrorModalContent
                    message="We couldn't send your enquiry. Please check your connection and try again, or reach us directly at hello@tranzent.co."
                    onClose={closeModal}
                />
            </Modal>
        </>
    );
}