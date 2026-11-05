import type { Metadata } from "next";
import { ContactForm } from "@/components/ContactForm";
import { SiteShell } from "@/components/SiteShell";
import { contactDetails } from "@/lib/content/company";

export const metadata: Metadata = {
  title: "Contact Us",
  description: "Start a conversation with Avenyra Global about human resource and recruitment support.",
};

export default function ContactPage() {
  return (
    <SiteShell>
      <section className="bg-navy text-white">
        <div className="mx-auto w-full max-w-[1200px] px-5 py-16 sm:px-8 lg:py-20">
          <p className="text-[11px] font-semibold tracking-[0.22em] text-gold">CONTACT</p>
          <h1 className="mt-4 max-w-3xl font-heading text-4xl font-semibold tracking-tight sm:text-5xl">
            Let&apos;s Start a Conversation.
          </h1>
          <p className="mt-4 max-w-2xl text-lg leading-8 text-white/80">
            Tell us about the workforce support you need. Published contact details below are placeholders until the
            company confirms them.
          </p>
        </div>
      </section>
      <section className="bg-white">
        <div className="mx-auto grid w-full max-w-[1200px] gap-12 px-5 py-16 sm:px-8 lg:grid-cols-[0.85fr_1.15fr]">
          <div>
            <h2 className="font-heading text-2xl font-semibold text-navy">Contact details</h2>
            <dl className="mt-6 space-y-4">
              {contactDetails.map((item) => (
                <div key={item.label}>
                  <dt className="text-xs font-semibold tracking-[0.14em] text-teal">{item.label.toUpperCase()}</dt>
                  <dd className="mt-1 text-ink">{item.value}</dd>
                </div>
              ))}
            </dl>
            <div className="mt-8 flex aspect-[16/10] items-center justify-center border border-dashed border-line bg-mist px-6 text-center text-sm leading-6 text-muted">
              Google Maps location — to be added when the office address is confirmed.
            </div>
          </div>
          <div className="border border-line p-6 sm:p-8">
            <h2 className="font-heading text-2xl font-semibold text-navy">Send an enquiry</h2>
            <div className="mt-6">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </SiteShell>
  );
}
