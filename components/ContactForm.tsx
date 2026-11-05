"use client";

import { useEffect, useState } from "react";
import { enquiryTypes } from "@/lib/content/company";
import { services } from "@/lib/content/services";
import { apiUrl, staticFormMessage, staticHost } from "@/lib/hosting";

const field =
  "mt-1.5 min-h-12 w-full border border-line bg-white px-3 text-base font-normal text-ink outline-none transition focus:border-teal";

export function ContactForm({
  defaultEnquiry = "",
  defaultService = "",
}: {
  defaultEnquiry?: string;
  defaultService?: string;
}) {
  const [pending, setPending] = useState(false);
  const [done, setDone] = useState(false);
  const [formError, setFormError] = useState("");
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [enquiry, setEnquiry] = useState(defaultEnquiry);
  const [service, setService] = useState(defaultService);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const requested = params.get("enquiry");
    const nextEnquiry =
      requested === "consultation"
        ? "Request a consultation"
        : requested === "service"
          ? "Service enquiry"
          : enquiryTypes.find((item) => item === requested) || "";
    const requestedService = params.get("service") || "";
    if (nextEnquiry) setEnquiry(nextEnquiry);
    if (services.some((item) => item.slug === requestedService)) setService(requestedService);
  }, []);

  async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries()) as Record<string, string>;
    const next = validate(data);
    setErrors(next);
    setFormError("");
    if (Object.keys(next).length) return;
    if (staticHost) {
      setFormError(staticFormMessage);
      return;
    }
    setPending(true);
    const response = await fetch(apiUrl("/api/leads"), {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });
    setPending(false);
    if (!response.ok) {
      const body = (await response.json().catch(() => ({}))) as { error?: string; fields?: Record<string, string> };
      if (body.fields) setErrors(body.fields);
      setFormError(body.error || "We could not send your enquiry. Check your connection and try again.");
      return;
    }
    form.reset();
    setDone(true);
  }

  if (done) {
    return (
      <div className="border border-teal/30 bg-teal/5 px-5 py-6" role="status">
        <h2 className="font-heading text-2xl font-semibold text-navy">Enquiry received</h2>
        <p className="mt-2 leading-7 text-ink">
          Thank you. Your message has been received. A member of the team will respond using the details you provided.
          Contact details published on this website are still being confirmed, so please keep the email address you
          entered available.
        </p>
      </div>
    );
  }

  return (
    <form className="grid gap-4" onSubmit={onSubmit} noValidate>
      {staticHost && <p className="text-sm leading-6 text-muted">{staticFormMessage}</p>}
      <Field label="Full name" name="name" autoComplete="name" error={errors.name} required />
      <Field label="Email" name="email" type="email" autoComplete="email" error={errors.email} required />
      <Field label="Telephone" name="phone" type="tel" autoComplete="tel" error={errors.phone} required />
      <Field label="Organisation" name="organisation" autoComplete="organization" error={errors.organisation} />
      <label className="text-sm font-semibold text-navy">
        Enquiry type
        <select
          name="enquiryType"
          value={enquiry}
          onChange={(event) => setEnquiry(event.target.value)}
          className={field}
          required
          aria-invalid={Boolean(errors.enquiryType)}
        >
          <option value="">Select an enquiry type</option>
          {enquiryTypes.map((type) => (
            <option key={type} value={type}>
              {type}
            </option>
          ))}
        </select>
        {errors.enquiryType && <span className="mt-1 block font-normal text-red-800">{errors.enquiryType}</span>}
      </label>
      <label className="text-sm font-semibold text-navy">
        Service of interest
        <select
          name="service"
          value={service}
          onChange={(event) => setService(event.target.value)}
          className={field}
          aria-invalid={Boolean(errors.service)}
        >
          <option value="">Select a service, if relevant</option>
          {services.map((service) => (
            <option key={service.slug} value={service.slug}>
              {service.title}
            </option>
          ))}
        </select>
        {errors.service && <span className="mt-1 block font-normal text-red-800">{errors.service}</span>}
      </label>
      <label className="text-sm font-semibold text-navy">
        Message
        <textarea name="message" required className={`${field} min-h-36 py-3`} aria-invalid={Boolean(errors.message)} />
        {errors.message && <span className="mt-1 block font-normal text-red-800">{errors.message}</span>}
      </label>
      {formError && (
        <p className="text-sm text-red-800" role="alert">
          {formError}
        </p>
      )}
      <button
        type="submit"
        disabled={pending}
        className="inline-flex min-h-12 items-center justify-center bg-teal px-6 font-semibold text-white transition hover:bg-teal-dark disabled:opacity-60"
      >
        {pending ? "Sending…" : "Send enquiry"}
      </button>
    </form>
  );
}

function Field({
  label,
  name,
  type = "text",
  autoComplete,
  error,
  required,
}: {
  label: string;
  name: string;
  type?: string;
  autoComplete?: string;
  error?: string;
  required?: boolean;
}) {
  return (
    <label className="text-sm font-semibold text-navy">
      {label}
      <input name={name} type={type} autoComplete={autoComplete} required={required} aria-invalid={Boolean(error)} className={field} />
      {error && <span className="mt-1 block font-normal text-red-800">{error}</span>}
    </label>
  );
}

function validate(data: Record<string, string>) {
  const errors: Record<string, string> = {};
  if (!data.name || data.name.trim().length < 2) errors.name = "Enter your full name.";
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email || "")) errors.email = "Enter a valid email address.";
  if (!data.phone || data.phone.trim().length < 7) errors.phone = "Enter a telephone number.";
  if (!data.enquiryType) errors.enquiryType = "Select an enquiry type.";
  if (data.enquiryType === "Service enquiry" && !data.service) errors.service = "Select the service you want to discuss.";
  if (!data.message || data.message.trim().length < 12) errors.message = "Enter a short message so we know how to help.";
  return errors;
}
