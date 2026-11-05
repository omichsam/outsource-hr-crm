import type { Metadata } from "next";
import { SiteShell } from "@/components/SiteShell";

export const metadata: Metadata = {
  title: "Terms & Conditions",
  description: "Terms for using the Avenyra Global website.",
};

export default function TermsPage() {
  return (
    <SiteShell>
      <article className="mx-auto w-full max-w-[760px] px-5 py-16 sm:px-8">
        <p className="text-xs font-semibold tracking-[0.16em] text-teal">TERMS</p>
        <h1 className="mt-3 font-heading text-4xl font-semibold text-navy">Terms & Conditions</h1>
        <div className="mt-8 space-y-4 leading-8 text-ink">
          <p>
            This website introduces Avenyra Global and provides a way to send an enquiry or a CV. It is not an offer of
            employment, and it is not a contract for services. A service begins only when the scope has been agreed
            separately.
          </p>
          <p>
            Content is provided in good faith. Where a fact has not been confirmed — including addresses, leadership,
            licences and client relationships — the page says so. Do not rely on a placeholder as a confirmed detail.
          </p>
          <p>
            Vacancies appear only when they are approved for publication. An empty careers list means there is nothing
            approved at that moment. Submitting a CV does not create an obligation to consider you for a particular role
            or to keep the CV for a stated period beyond the privacy notice.
          </p>
          <p>
            You agree not to upload unlawful material, malware, or a CV that is not yours to share. You are responsible
            for the accuracy of what you submit.
          </p>
          <p>
            These terms will be reviewed by the company’s legal advisers before they are treated as a final legal text.
            Questions about the website can be sent through the contact form.
          </p>
        </div>
      </article>
    </SiteShell>
  );
}
