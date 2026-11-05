import { promises as fs } from "fs";
import path from "path";
import { NextResponse } from "next/server";
import { employmentTypes, experienceBands, qualifications } from "@/lib/content/company";
import { nid } from "@/lib/ids";
import { readStore, writeStore } from "@/lib/store";

const maxBytes = 5 * 1024 * 1024;
const uploadDir = path.join(process.cwd(), "data", "private-uploads");

function text(form: FormData, key: string) {
  return String(form.get(key) || "").trim();
}

export async function POST(request: Request) {
  const form = await request.formData().catch(() => null);
  if (!form) return NextResponse.json({ error: "Could not read the form." }, { status: 400 });

  const name = text(form, "name");
  const email = text(form, "email");
  const phone = text(form, "phone");
  const location = text(form, "location");
  const qualification = text(form, "qualification");
  const specialisation = text(form, "specialisation");
  const experience = text(form, "experience");
  const employmentType = text(form, "employmentType");
  const jobId = text(form, "jobId");
  const file = form.get("cv");

  if (name.length < 2 || name.length > 160) return NextResponse.json({ error: "Enter your full name." }, { status: 400 });
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) return NextResponse.json({ error: "Enter a valid email address." }, { status: 400 });
  if (phone.length < 7 || phone.length > 40) return NextResponse.json({ error: "Enter a telephone number." }, { status: 400 });
  if (location.length < 2 || location.length > 120) return NextResponse.json({ error: "Enter your current location." }, { status: 400 });
  if (!qualifications.includes(qualification as (typeof qualifications)[number])) {
    return NextResponse.json({ error: "Select your highest qualification." }, { status: 400 });
  }
  if (specialisation.length < 2 || specialisation.length > 160) {
    return NextResponse.json({ error: "Enter your area of specialisation." }, { status: 400 });
  }
  if (!experienceBands.includes(experience as (typeof experienceBands)[number])) {
    return NextResponse.json({ error: "Select your years of experience." }, { status: 400 });
  }
  if (!employmentTypes.includes(employmentType as (typeof employmentTypes)[number])) {
    return NextResponse.json({ error: "Select a preferred employment type." }, { status: 400 });
  }
  if (form.get("consent") !== "yes") {
    return NextResponse.json({ error: "Consent is required before we can keep your CV." }, { status: 400 });
  }
  if (!(file instanceof File)) return NextResponse.json({ error: "Attach your CV as a PDF or DOCX file." }, { status: 400 });

  const lower = file.name.toLowerCase();
  const isPdf = lower.endsWith(".pdf");
  const isDocx = lower.endsWith(".docx");
  if (!isPdf && !isDocx) return NextResponse.json({ error: "Use a PDF or DOCX file." }, { status: 400 });
  if (file.size > maxBytes || file.size < 32) {
    return NextResponse.json({ error: "The CV must be a PDF or DOCX file of 5 MB or less." }, { status: 400 });
  }

  const bytes = Buffer.from(await file.arrayBuffer());
  const signature = bytes.subarray(0, 4).toString("utf8");
  if (isPdf && !signature.startsWith("%PDF")) {
    return NextResponse.json({ error: "That PDF could not be read. Export it again and retry." }, { status: 400 });
  }
  if (isDocx && (bytes[0] !== 0x50 || bytes[1] !== 0x4b)) {
    return NextResponse.json({ error: "That DOCX could not be read. Export it again and retry." }, { status: 400 });
  }

  const id = nid("app");
  const safeName = file.name.replace(/[^a-zA-Z0-9._-]/g, "_").slice(-80);
  const storedFile = `${id}-${safeName}`;
  await fs.mkdir(uploadDir, { recursive: true });
  await fs.writeFile(path.join(uploadDir, storedFile), bytes);

  const store = await readStore();
  store.applications = store.applications || [];
  store.applications.unshift({
    id,
    name,
    email,
    phone,
    location,
    qualification,
    specialisation,
    experience,
    employmentType,
    jobId,
    fileName: file.name.slice(0, 180),
    storedFile,
    consent: true,
    createdAt: new Date().toISOString(),
  });
  await writeStore(store);
  return NextResponse.json({ ok: true });
}
