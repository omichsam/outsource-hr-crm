"use client";

import { useState } from "react";
import { employmentTypes, experienceBands, qualifications } from "@/lib/content/company";
import { apiUrl, staticFormMessage, staticHost } from "@/lib/hosting";

const field =
  "mt-1.5 min-h-12 w-full border border-line bg-white px-3 text-base font-normal text-ink outline-none transition focus:border-teal";

const maxBytes = 5 * 1024 * 1024;

export function CvForm({ jobId = "", jobTitle = "" }: { jobId?: string; jobTitle?: string }) {
  const [pending, setPending] = useState(false);
  const [done, setDone] = useState(false);
  const [formError, setFormError] = useState("");
  const [errors, setErrors] = useState<Record<string, string>>({});

  async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);
    const next = validate(data);
    setErrors(next);
    setFormError("");
    if (Object.keys(next).length) return;
    if (staticHost) {
      setFormError(staticFormMessage);
      return;
    }
    setPending(true);
    const response = await fetch(apiUrl("/api/applications"), { method: "POST", body: data });
    setPending(false);
    if (!response.ok) {
      const body = (await response.json().catch(() => ({}))) as { error?: string };
      setFormError(body.error || "We could not submit your CV. Check the file and try again.");
      return;
    }
    form.reset();
    setDone(true);
  }

  if (done) {
    return (
      <div className="border border-teal/30 bg-teal/5 px-5 py-6" role="status">
        <h2 className="font-heading text-2xl font-semibold text-navy">CV received</h2>
        <p className="mt-2 leading-7 text-ink">
          Thank you. Your details and CV have been received. They are stored privately for recruitment follow-up and are
          not published on this website.
        </p>
      </div>
    );
  }

  return (
    <form className="grid gap-4" onSubmit={onSubmit} noValidate>
      {staticHost && <p className="text-sm leading-6 text-muted">{staticFormMessage}</p>}
      {jobTitle && (
        <p className="border border-line bg-mist px-4 py-3 text-sm text-ink">
          Applying for <span className="font-semibold">{jobTitle}</span>
        </p>
      )}
      <input type="hidden" name="jobId" value={jobId} />
      <div className="grid gap-4 sm:grid-cols-2">
        <Text label="Full name" name="name" autoComplete="name" error={errors.name} required />
        <Text label="Email address" name="email" type="email" autoComplete="email" error={errors.email} required />
        <Text label="Telephone number" name="phone" type="tel" autoComplete="tel" error={errors.phone} required />
        <Text label="Current location" name="location" error={errors.location} required />
      </div>
      <Select label="Highest qualification" name="qualification" options={qualifications} error={errors.qualification} />
      <Text label="Area of specialisation" name="specialisation" error={errors.specialisation} required />
      <div className="grid gap-4 sm:grid-cols-2">
        <Select label="Years of experience" name="experience" options={experienceBands} error={errors.experience} />
        <Select label="Preferred employment type" name="employmentType" options={employmentTypes} error={errors.employmentType} />
      </div>
      <label className="text-sm font-semibold text-navy">
        CV upload
        <input
          name="cv"
          type="file"
          accept=".pdf,.docx,application/pdf,application/vnd.openxmlformats-officedocument.wordprocessingml.document"
          className="mt-1.5 block w-full text-sm font-normal file:mr-4 file:min-h-11 file:border-0 file:bg-navy file:px-4 file:text-sm file:font-semibold file:text-white"
          aria-invalid={Boolean(errors.cv)}
          required
        />
        <span className="mt-1 block font-normal text-muted">PDF or DOCX, up to 5 MB.</span>
        {errors.cv && <span className="mt-1 block font-normal text-red-800">{errors.cv}</span>}
      </label>
      <label className="flex items-start gap-3 text-sm font-normal leading-6 text-ink">
        <input name="consent" type="checkbox" value="yes" className="mt-1 h-4 w-4 accent-teal" aria-invalid={Boolean(errors.consent)} />
        <span>
          I consent to Avenyra Global processing my personal data and CV for recruitment purposes. I understand my
          information will not be published and that I may ask for it to be deleted.
        </span>
      </label>
      {errors.consent && <p className="text-sm text-red-800">{errors.consent}</p>}
      {formError && (
        <p className="text-sm text-red-800" role="alert">
          {formError}
        </p>
      )}
      <button
        type="submit"
        disabled={pending}
        className="inline-flex min-h-12 items-center justify-center bg-teal px-6 font-semibold text-white hover:bg-teal-dark disabled:opacity-60"
      >
        {pending ? "Submitting…" : "Submit your CV"}
      </button>
    </form>
  );
}

function Text({
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

function Select({
  label,
  name,
  options,
  error,
}: {
  label: string;
  name: string;
  options: readonly string[];
  error?: string;
}) {
  return (
    <label className="text-sm font-semibold text-navy">
      {label}
      <select name={name} defaultValue="" className={field} required aria-invalid={Boolean(error)}>
        <option value="">Select</option>
        {options.map((option) => (
          <option key={option}>{option}</option>
        ))}
      </select>
      {error && <span className="mt-1 block font-normal text-red-800">{error}</span>}
    </label>
  );
}

function validate(data: FormData) {
  const errors: Record<string, string> = {};
  const read = (key: string) => String(data.get(key) || "").trim();
  if (read("name").length < 2) errors.name = "Enter your full name.";
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(read("email"))) errors.email = "Enter a valid email address.";
  if (read("phone").length < 7) errors.phone = "Enter a telephone number.";
  if (read("location").length < 2) errors.location = "Enter your current location.";
  if (!read("qualification")) errors.qualification = "Select your highest qualification.";
  if (read("specialisation").length < 2) errors.specialisation = "Enter your area of specialisation.";
  if (!read("experience")) errors.experience = "Select your years of experience.";
  if (!read("employmentType")) errors.employmentType = "Select a preferred employment type.";
  const file = data.get("cv");
  if (!(file instanceof File) || !file.name) {
    errors.cv = "Attach your CV as a PDF or DOCX file.";
  } else {
    const lower = file.name.toLowerCase();
    if (!lower.endsWith(".pdf") && !lower.endsWith(".docx")) errors.cv = "Use a PDF or DOCX file.";
    else if (file.size > maxBytes) errors.cv = "The file must be 5 MB or smaller.";
    else if (file.size < 32) errors.cv = "That file looks empty. Choose your CV again.";
  }
  if (data.get("consent") !== "yes") errors.consent = "Consent is required before we can keep your CV.";
  return errors;
}
