import type { Metadata } from "next";
import { SiteShell } from "@/components/SiteShell";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "How Avenyra Global handles enquiries, candidate details and CVs submitted through this website.",
};

export default function PrivacyPage() {
  return (
    <SiteShell>
      <article className="mx-auto w-full max-w-[760px] px-5 py-16 sm:px-8">
        <p className="text-xs font-semibold tracking-[0.16em] text-teal">PRIVACY</p>
        <h1 className="mt-3 font-heading text-4xl font-semibold text-navy">Privacy Policy</h1>
        <p className="mt-4 text-sm text-muted">
          This notice describes how this website handles information. The registered entity, address and retention
          period marked in brackets are placeholders until management confirms them.
        </p>
        <div className="mt-8 space-y-4 leading-8 text-ink">
          <p>
            Avenyra Global (“we”) collects the details you choose to submit through the contact form or the CV form.
            That may include your name, email address, telephone number, organisation, enquiry, and, for candidates, your
            location, qualification, experience, employment preference and CV.
          </p>
          <p>
            We use contact enquiries to respond to organisations and individuals. We use candidate information only for
            recruitment follow-up. CVs are stored in a private area of the site’s administration system. They are not
            published, indexed, or shown on any public page.
          </p>
          <p>
            Do not send information you are not comfortable sharing for that purpose. You may ask us to correct or
            delete an enquiry or a CV. Until a confirmed contact address is published, use the same form and state that
            your message is a privacy request, including the email address you used originally.
          </p>
          <p>
            Data is kept for operational follow-up. The formal retention period is [to be confirmed by management].
            Access to enquiries and CVs is limited to people signed in to the administrative area.
          </p>
          <p>
            This website does not sell personal information. It does not place advertising trackers. Server logs may
            record a technical request in the ordinary operation of the host.
          </p>
          <p>Controller: [Legal name to be confirmed]. Address: [Physical address to be confirmed].</p>
        </div>
      </article>
    </SiteShell>
  );
}
