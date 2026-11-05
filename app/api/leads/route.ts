import { NextResponse } from "next/server";
import { nid } from "@/lib/ids";
import { readStore, writeStore } from "@/lib/store";
import { services } from "@/lib/content/services";
import { enquiryTypes } from "@/lib/content/company";

const emailOk = (value: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);

export async function POST(request: Request) {
  const body = await request.json().catch(() => ({}));
  const name = String(body.name || "").trim();
  const email = String(body.email || "").trim();
  const phone = String(body.phone || "").trim();
  const organisation = String(body.organisation || "").trim();
  const enquiryType = String(body.enquiryType || "").trim();
  const service = String(body.service || "").trim();
  const message = String(body.message || "").trim();
  const fields: Record<string, string> = {};
  if (name.length < 2) fields.name = "Enter your full name.";
  if (!emailOk(email)) fields.email = "Enter a valid email address.";
  if (phone.length < 7) fields.phone = "Enter a telephone number.";
  if (!enquiryTypes.includes(enquiryType as (typeof enquiryTypes)[number])) {
    fields.enquiryType = "Select an enquiry type.";
  }
  if (enquiryType === "Service enquiry" && !services.some((item) => item.slug === service)) {
    fields.service = "Select the service you want to discuss.";
  }
  if (message.length < 12) fields.message = "Enter a short message so we know how to help.";
  if (message.length > 5000) fields.message = "Please shorten the message.";
  if (Object.keys(fields).length) {
    return NextResponse.json({ error: "Check the highlighted fields.", fields }, { status: 400 });
  }

  const store = await readStore();
  store.leads.unshift({
    id: nid("lead"),
    name: name.slice(0, 160),
    email: email.slice(0, 160),
    phone: phone.slice(0, 40),
    organisation: organisation.slice(0, 160),
    enquiryType,
    service,
    message: message.slice(0, 5000),
    source: "contact",
    jobId: "",
    status: "new",
    createdAt: new Date().toISOString(),
  });
  await writeStore(store);
  return NextResponse.json({ ok: true });
}
