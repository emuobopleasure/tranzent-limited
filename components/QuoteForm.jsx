"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import Modal from "./Modal";
import { SuccessModalContent, ErrorModalContent } from "./ModalStatus";
import RouteEstimate from "./RouteEstimate";
import {
  NIGERIA_STATES,
  estimateRoadDistanceKm,
  estimateDurationLabel,
} from "@/lib/nigeria-locations";

const VEHICLE_TYPES = [
  "Sedan / Saloon Car",
  "SUV / Crossover",
  "Pickup Truck",
  "Van / Minibus",
  "Motorcycle",
  "Heavy Truck / Bus",
  "Other",
];

const SERVICE_OPTIONS = [
  "Driven Vehicle Transport",
  "Open Vehicle Haulage",
  "Enclosed Vehicle Haulage",
  "Vehicle Recovery & Towing",
  "Spare Parts Procurement & Delivery",
  "Vehicle Inspection & Document Validation",
  "Vehicle Recovery & Automotive Services",
  "General Inquiry",
];

// Only these actually move a vehicle from A to B — everything else (spare
// parts, inspections, general questions) doesn't need vehicle/location/map
// fields cluttering the form.
const DELIVERY_SERVICES = [
  "Driven Vehicle Transport",
  "Open Vehicle Haulage",
  "Enclosed Vehicle Haulage",
  "Vehicle Recovery & Towing",
];

// Matches the order fields are validated in, so "scroll to first error"
// always jumps to whichever one the reader would encounter first visually.
const FIELD_ORDER = [
  "name",
  "email",
  "phone",
  "serviceType",
  "vehicleType",
  "vehicleMakeModel",
  "pickupState",
  "pickupCity",
  "pickupAddress",
  "deliveryState",
  "deliveryCity",
  "deliveryAddress",
  "preferredDate",
];

const initialState = {
  name: "",
  email: "",
  phone: "",
  serviceType: "",
  vehicleType: "",
  vehicleMakeModel: "",
  pickupState: "",
  pickupCity: "",
  pickupAddress: "",
  deliveryState: "",
  deliveryCity: "",
  deliveryAddress: "",
  preferredDate: "",
  message: "",
};

const todayStr = new Date().toISOString().slice(0, 10);

function formatMinutes(totalMinutes) {
  const h = Math.floor(totalMinutes / 60);
  const m = Math.round(totalMinutes % 60);
  if (h === 0) return `~${m}m`;
  if (m === 0) return `~${h}h`;
  return `~${h}h ${m}m`;
}

export default function ContactForm() {
  const [values, setValues] = useState(initialState);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState("idle"); // idle | submitting | success | error
  const [lastSubmissionWasDelivery, setLastSubmissionWasDelivery] = useState(false);

  const fieldRefs = useRef({});
  function registerRef(name) {
    return (el) => {
      fieldRefs.current[name] = el;
    };
  }

  const isDeliveryService = DELIVERY_SERVICES.includes(values.serviceType);

  const distanceKm = useMemo(
    () =>
      isDeliveryService
        ? estimateRoadDistanceKm(values.pickupState, values.deliveryState)
        : null,
    [isDeliveryService, values.pickupState, values.deliveryState]
  );
  const durationLabel = useMemo(
    () => estimateDurationLabel(distanceKm),
    [distanceKm]
  );

  // Optional live routing (OpenRouteService) — see app/api/route-distance.
  // If no API key is configured, or the request fails for any reason, this
  // silently falls back to the estimate above. Nothing breaks either way.
  const [liveRoute, setLiveRoute] = useState(null);
  const [liveStatus, setLiveStatus] = useState("idle"); // idle | loading | done

  useEffect(() => {
    if (
      !isDeliveryService ||
      !values.pickupState ||
      !values.deliveryState ||
      values.pickupState === values.deliveryState
    ) {
      setLiveRoute(null);
      setLiveStatus("idle");
      return;
    }

    let cancelled = false;
    setLiveRoute(null);
    setLiveStatus("loading");

    fetch("/api/route-distance", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        pickupState: values.pickupState,
        deliveryState: values.deliveryState,
      }),
    })
      .then((res) => (res.ok ? res.json() : Promise.reject(res)))
      .then((data) => {
        if (!cancelled) {
          setLiveRoute(data);
          setLiveStatus("done");
        }
      })
      .catch(() => {
        if (!cancelled) {
          setLiveRoute(null);
          setLiveStatus("done");
        }
      });

    return () => {
      cancelled = true;
    };
  }, [isDeliveryService, values.pickupState, values.deliveryState]);

  const finalDistanceKm = liveRoute?.distanceKm ?? distanceKm;
  const finalDurationLabel = liveRoute
    ? formatMinutes(liveRoute.durationMinutes)
    : durationLabel;

  function update(field, value) {
    setValues((v) => ({ ...v, [field]: value }));
    if (errors[field]) setErrors((e) => ({ ...e, [field]: undefined }));
  }

  function updateService(value) {
    const willBeDelivery = DELIVERY_SERVICES.includes(value);
    setValues((v) => {
      const next = { ...v, serviceType: value };
      if (!willBeDelivery) {
        next.vehicleType = "";
        next.vehicleMakeModel = "";
        next.pickupState = "";
        next.pickupCity = "";
        next.pickupAddress = "";
        next.deliveryState = "";
        next.deliveryCity = "";
        next.deliveryAddress = "";
        next.preferredDate = "";
      }
      return next;
    });
    setErrors({});
  }

  function validate() {
    const next = {};
    if (!values.name.trim()) next.name = "Please tell us your full name.";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) next.email = "Enter a valid email address.";
    if (!values.phone.trim()) next.phone = "A phone number helps us reach you faster.";
    if (!values.serviceType) next.serviceType = "Select the service you're requesting.";

    if (isDeliveryService) {
      if (!values.vehicleType) next.vehicleType = "Select a vehicle type.";
      if (!values.vehicleMakeModel.trim()) next.vehicleMakeModel = "Tell us the vehicle's make and model.";
      if (!values.pickupState) next.pickupState = "Select a pickup state.";
      if (!values.pickupCity.trim()) next.pickupCity = "Enter a pickup city or town.";
      if (!values.pickupAddress.trim()) next.pickupAddress = "Enter the full pickup address.";
      if (!values.deliveryState) next.deliveryState = "Select a delivery state.";
      if (!values.deliveryCity.trim()) next.deliveryCity = "Enter a delivery city or town.";
      if (!values.deliveryAddress.trim()) next.deliveryAddress = "Enter the full delivery address.";
      if (!values.preferredDate) next.preferredDate = "Select a preferred date.";
    }

    return next;
  }

  function scrollToFirstError(errorObj) {
    const firstField = FIELD_ORDER.find((name) => errorObj[name]);
    const el = firstField ? fieldRefs.current[firstField] : null;
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "center" });
      window.setTimeout(() => el.focus({ preventScroll: true }), 300);
    }
  }

  function handleSubmit(e) {
    e.preventDefault();
    const next = validate();
    setErrors(next);
    if (Object.keys(next).length > 0) {
      scrollToFirstError(next);
      return;
    }

    const wasDelivery = isDeliveryService; // snapshot before values reset

    setStatus("submitting");
    fetch("/api/submit-form", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        formType: "quote",
        ...values,
        distanceKm: finalDistanceKm,
      }),
    })
      .then((res) => (res.ok ? res.json() : Promise.reject(res)))
      .then(() => {
        setLastSubmissionWasDelivery(wasDelivery);
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
      <form onSubmit={handleSubmit} noValidate className="rounded-3xl border border-line bg-white p-7 shadow-card sm:p-10">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
          <div>
            <label htmlFor="name" className="field-label">Full Name</label>
            <input
              id="name"
              ref={registerRef("name")}
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
              ref={registerRef("phone")}
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
              ref={registerRef("email")}
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
            <label htmlFor="serviceType" className="field-label">Service Requested</label>
            <div className="relative">
              <select
                id="serviceType"
                ref={registerRef("serviceType")}
                value={values.serviceType}
                onChange={(e) => updateService(e.target.value)}
                aria-invalid={Boolean(errors.serviceType)}
                className="field-input appearance-none pr-11"
              >
                <option value="" disabled>Select a service</option>
                {SERVICE_OPTIONS.map((opt) => (
                  <option key={opt} value={opt}>{opt}</option>
                ))}
              </select>
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-ink-400" aria-hidden="true">
                <path d="M4 6l4 4 4-4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
            {errors.serviceType && <p className="mt-2 text-[13px] text-accent-600">{errors.serviceType}</p>}
          </div>
        </div>

        {isDeliveryService && (
          <>
            <div className="mt-9 border-t border-line pt-9">
              <h3 className="font-display text-base font-semibold text-ink-900">Vehicle Details</h3>
              <div className="mt-5 grid grid-cols-1 gap-6 sm:grid-cols-2">
                <div>
                  <label htmlFor="vehicleType" className="field-label">Vehicle Type</label>
                  <div className="relative">
                    <select
                      id="vehicleType"
                      ref={registerRef("vehicleType")}
                      value={values.vehicleType}
                      onChange={(e) => update("vehicleType", e.target.value)}
                      aria-invalid={Boolean(errors.vehicleType)}
                      className="field-input appearance-none pr-11"
                    >
                      <option value="" disabled>Select vehicle type</option>
                      {VEHICLE_TYPES.map((opt) => (
                        <option key={opt} value={opt}>{opt}</option>
                      ))}
                    </select>
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-ink-400" aria-hidden="true">
                      <path d="M4 6l4 4 4-4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                  {errors.vehicleType && <p className="mt-2 text-[13px] text-accent-600">{errors.vehicleType}</p>}
                </div>

                <div>
                  <label htmlFor="vehicleMakeModel" className="field-label">Vehicle Make &amp; Model</label>
                  <input
                    id="vehicleMakeModel"
                    ref={registerRef("vehicleMakeModel")}
                    type="text"
                    value={values.vehicleMakeModel}
                    onChange={(e) => update("vehicleMakeModel", e.target.value)}
                    aria-invalid={Boolean(errors.vehicleMakeModel)}
                    className="field-input"
                    placeholder="e.g. Toyota Camry 2019"
                  />
                  {errors.vehicleMakeModel && <p className="mt-2 text-[13px] text-accent-600">{errors.vehicleMakeModel}</p>}
                </div>
              </div>
            </div>

            <div className="mt-9 border-t border-line pt-9">
              <h3 className="font-display text-base font-semibold text-ink-900">Pickup Location</h3>
              <div className="mt-5 grid grid-cols-1 gap-6 sm:grid-cols-2">
                <div>
                  <label htmlFor="pickupState" className="field-label">State</label>
                  <div className="relative">
                    <select
                      id="pickupState"
                      ref={registerRef("pickupState")}
                      value={values.pickupState}
                      onChange={(e) => update("pickupState", e.target.value)}
                      aria-invalid={Boolean(errors.pickupState)}
                      className="field-input appearance-none pr-11"
                    >
                      <option value="" disabled>Select state</option>
                      {NIGERIA_STATES.map((s) => (
                        <option key={s.name} value={s.name}>{s.name}</option>
                      ))}
                    </select>
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-ink-400" aria-hidden="true">
                      <path d="M4 6l4 4 4-4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                  {errors.pickupState && <p className="mt-2 text-[13px] text-accent-600">{errors.pickupState}</p>}
                </div>

                <div>
                  <label htmlFor="pickupCity" className="field-label">City / Town</label>
                  <input
                    id="pickupCity"
                    ref={registerRef("pickupCity")}
                    type="text"
                    value={values.pickupCity}
                    onChange={(e) => update("pickupCity", e.target.value)}
                    aria-invalid={Boolean(errors.pickupCity)}
                    className="field-input"
                    placeholder="e.g. Ikeja"
                  />
                  {errors.pickupCity && <p className="mt-2 text-[13px] text-accent-600">{errors.pickupCity}</p>}
                </div>

                <div className="sm:col-span-2">
                  <label htmlFor="pickupAddress" className="field-label">Full Address</label>
                  <input
                    id="pickupAddress"
                    ref={registerRef("pickupAddress")}
                    type="text"
                    value={values.pickupAddress}
                    onChange={(e) => update("pickupAddress", e.target.value)}
                    aria-invalid={Boolean(errors.pickupAddress)}
                    className="field-input"
                    placeholder="Street address, landmark, or compound name"
                  />
                  {errors.pickupAddress && <p className="mt-2 text-[13px] text-accent-600">{errors.pickupAddress}</p>}
                </div>
              </div>
            </div>

            <div className="mt-9 border-t border-line pt-9">
              <h3 className="font-display text-base font-semibold text-ink-900">Delivery Location</h3>
              <div className="mt-5 grid grid-cols-1 gap-6 sm:grid-cols-2">
                <div>
                  <label htmlFor="deliveryState" className="field-label">State</label>
                  <div className="relative">
                    <select
                      id="deliveryState"
                      ref={registerRef("deliveryState")}
                      value={values.deliveryState}
                      onChange={(e) => update("deliveryState", e.target.value)}
                      aria-invalid={Boolean(errors.deliveryState)}
                      className="field-input appearance-none pr-11"
                    >
                      <option value="" disabled>Select state</option>
                      {NIGERIA_STATES.map((s) => (
                        <option key={s.name} value={s.name}>{s.name}</option>
                      ))}
                    </select>
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-ink-400" aria-hidden="true">
                      <path d="M4 6l4 4 4-4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                  {errors.deliveryState && <p className="mt-2 text-[13px] text-accent-600">{errors.deliveryState}</p>}
                </div>

                <div>
                  <label htmlFor="deliveryCity" className="field-label">City / Town</label>
                  <input
                    id="deliveryCity"
                    ref={registerRef("deliveryCity")}
                    type="text"
                    value={values.deliveryCity}
                    onChange={(e) => update("deliveryCity", e.target.value)}
                    aria-invalid={Boolean(errors.deliveryCity)}
                    className="field-input"
                    placeholder="e.g. Wuse"
                  />
                  {errors.deliveryCity && <p className="mt-2 text-[13px] text-accent-600">{errors.deliveryCity}</p>}
                </div>

                <div className="sm:col-span-2">
                  <label htmlFor="deliveryAddress" className="field-label">Full Address</label>
                  <input
                    id="deliveryAddress"
                    ref={registerRef("deliveryAddress")}
                    type="text"
                    value={values.deliveryAddress}
                    onChange={(e) => update("deliveryAddress", e.target.value)}
                    aria-invalid={Boolean(errors.deliveryAddress)}
                    className="field-input"
                    placeholder="Street address, landmark, or compound name"
                  />
                  {errors.deliveryAddress && <p className="mt-2 text-[13px] text-accent-600">{errors.deliveryAddress}</p>}
                </div>
              </div>

              <div className="mt-6">
                <RouteEstimate
                  origin={values.pickupState}
                  destination={values.deliveryState}
                  distanceKm={finalDistanceKm}
                  durationLabel={finalDurationLabel}
                  liveGeometry={liveRoute?.geometry}
                  isLive={Boolean(liveRoute)}
                  isLoadingRoute={liveStatus === "loading"}
                />
              </div>
            </div>

            <div className="mt-9 border-t border-line pt-9">
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                <div>
                  <label htmlFor="preferredDate" className="field-label">Preferred Collection Date</label>
                  <input
                    id="preferredDate"
                    ref={registerRef("preferredDate")}
                    type="date"
                    min={todayStr}
                    value={values.preferredDate}
                    onChange={(e) => update("preferredDate", e.target.value)}
                    aria-invalid={Boolean(errors.preferredDate)}
                    className="field-input"
                  />
                  {errors.preferredDate && <p className="mt-2 text-[13px] text-accent-600">{errors.preferredDate}</p>}
                </div>
              </div>
            </div>
          </>
        )}

        <div className="mt-9 border-t border-line pt-9">
          <label htmlFor="message" className="field-label">
            {isDeliveryService ? "Additional Details (optional)" : "Tell us more"}
          </label>
          <textarea
            id="message"
            rows={4}
            value={values.message}
            onChange={(e) => update("message", e.target.value)}
            className="field-input resize-none"
            placeholder={
              isDeliveryService
                ? "Share any details that will help us plan your shipment, such as access restrictions, timing preferences, or special handling instructions."
                : "Tell us what you need, and we'll get back to you with the details."
            }
          />
        </div>

        <button type="submit" disabled={status === "submitting"} className="btn-primary mt-9 w-full sm:w-auto">
          {status === "submitting"
            ? "Sending…"
            : isDeliveryService
              ? "Request Quote"
              : "Submit Enquiry"}
          {status !== "submitting" && (
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
              <path d="M2 12 12 2M12 2H4M12 2v8" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          )}
        </button>
        <p className="mt-4 text-[12.5px] text-ink-400">
          By submitting, you agree to be contacted by Tranzent regarding your request.
        </p>
      </form>

      <Modal open={status === "success"} onClose={closeModal}>
        <SuccessModalContent
          title={lastSubmissionWasDelivery ? "Quote request received." : "Enquiry received."}
          message={`A member of the Tranzent team will reach out within one business day${lastSubmissionWasDelivery ? " with a routed quote." : "."}`}
          onClose={closeModal}
        />
      </Modal>

      <Modal open={status === "error"} onClose={closeModal}>
        <ErrorModalContent
          message="We couldn't send your request. Please check your connection and try again, or reach us directly at hello@tranzent.co."
          onClose={closeModal}
        />
      </Modal>
    </>
  );
}