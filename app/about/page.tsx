import type { Metadata } from "next";
import Image from "next/image";
import { PageHero } from "@/components/PageHero";
import { SiteShell } from "@/components/SiteShell";
import { leadership, principles, values } from "@/lib/content/company";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Avenyra Global is a people-centred human resource outsourcing, recruitment and workforce solutions company.",
};

export default function AboutPage() {
  return (
    <SiteShell>
      <PageHero
        eyebrow="ABOUT AVENYRA GLOBAL"
        title="A people-centred workforce partner."
        lede="Avenyra Global works with organisations that need practical human resource support, and with people looking for work that suits their skills."
        image="/images/team.jpg"
        imageAlt="An African facilitator leading a workshop discussion at a flipchart"
      />

      <section className="bg-white">
        <div className="mx-auto grid w-full max-w-[1200px] gap-10 px-5 py-16 sm:px-8 lg:grid-cols-12 lg:py-20">
          <div className="lg:col-span-4">
            <h2 className="font-heading text-3xl font-semibold text-navy">Who we are</h2>
          </div>
          <div className="max-w-3xl space-y-4 text-base leading-8 text-ink lg:col-span-8">
            <p>
              People are the foundation of every successful organisation. Managing a workforce requires more than filling
              positions; it requires the right people, effective processes and professional human resource support.
            </p>
            <p>
              Avenyra Global partners with organisations to provide flexible and dependable HR solutions that simplify
              workforce management, strengthen employee engagement and support organisational growth. The company serves
              businesses, institutions, government organisations, NGOs and job seekers.
            </p>
            <p className="text-muted">
              Founding dates, ownership details and a corporate history will be published here when the company supplies
              them. They are not estimated on this website.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-mist">
        <div className="mx-auto grid w-full max-w-[1200px] gap-6 px-5 py-16 sm:px-8 lg:grid-cols-2 lg:py-20">
          <article className="bg-white p-8">
            <p className="text-xs font-semibold tracking-[0.16em] text-teal">OUR VISION</p>
            <h2 className="mt-3 font-heading text-3xl font-semibold text-navy">Workplaces where people can do good work.</h2>
            <p className="mt-4 leading-8 text-muted">
              Organisations in which people are supported properly, and workforce decisions are made with care, clarity
              and a record that stands up to review.
            </p>
          </article>
          <article className="bg-navy p-8 text-white">
            <p className="text-xs font-semibold tracking-[0.16em] text-gold">OUR MISSION</p>
            <h2 className="mt-3 font-heading text-3xl font-semibold">Practical support for people and organisations.</h2>
            <p className="mt-4 leading-8 text-white/80">
              To provide human resource outsourcing, recruitment and workforce solutions that help organisations attract
              capable people, manage them well and pursue their objectives.
            </p>
          </article>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto w-full max-w-[1200px] px-5 py-16 sm:px-8 lg:py-20">
          <h2 className="font-heading text-3xl font-semibold text-navy">Our core values</h2>
          <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {values.map((value) => (
              <article key={value.title} className="border-t-2 border-gold pt-4">
                <h3 className="font-heading text-xl font-semibold text-navy">{value.title}</h3>
                <p className="mt-2 leading-7 text-muted">{value.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-mist">
        <div className="mx-auto grid w-full max-w-[1200px] items-center gap-10 px-5 py-16 sm:px-8 lg:grid-cols-2 lg:py-20">
          <div className="relative aspect-[4/3] overflow-hidden">
            <Image
              src="/images/colleagues.jpg"
              alt="African colleagues working on laptops in an open office"
              fill
              className="object-cover"
              sizes="(min-width: 1024px) 50vw, 100vw"
            />
          </div>
          <div>
            <h2 className="font-heading text-3xl font-semibold text-navy">Our commitment</h2>
            <p className="mt-4 leading-8 text-ink">
              Avenyra Global commits to a professional service approach: an agreed scope, respectful treatment of
              candidates and employees, and communication that a client can follow. We will not publish client names,
              placement figures, awards or licences until the company has confirmed them.
            </p>
            <ul className="mt-6 space-y-4">
              {principles.map((item) => (
                <li key={item.title}>
                  <h3 className="font-semibold text-navy">{item.title}</h3>
                  <p className="text-sm leading-6 text-muted">{item.text}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto w-full max-w-[1200px] px-5 py-16 sm:px-8 lg:py-20">
          <h2 className="font-heading text-3xl font-semibold text-navy">Leadership and management</h2>
          <p className="mt-3 max-w-3xl leading-7 text-muted">
            Photographs, names and biographies will replace these placeholders when management provides them. No
            individuals are invented here.
          </p>
          <div className="mt-8 grid gap-5 lg:grid-cols-3">
            {leadership.map((person) => (
              <article key={person.role} className="border border-line p-6">
                <div className="flex aspect-[4/3] items-center justify-center bg-mist text-center text-sm text-muted">
                  Photograph to be supplied
                </div>
                <h3 className="mt-5 font-heading text-xl font-semibold text-navy">{person.role}</h3>
                <p className="mt-1 text-sm font-semibold text-teal">{person.name}</p>
                <p className="mt-3 text-sm leading-6 text-muted">{person.bio}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-navy text-white">
        <div className="mx-auto w-full max-w-[1200px] px-5 py-16 sm:px-8 lg:py-20">
          <h2 className="font-heading text-3xl font-semibold">Company credentials</h2>
          <p className="mt-4 max-w-3xl leading-8 text-white/80">
            Registrations, licences, professional memberships and certifications will be listed in this section once
            Avenyra Global has confirmed them. None are displayed until they have been verified. This page does not imply
            a regulatory approval.
          </p>
        </div>
      </section>
    </SiteShell>
  );
}
