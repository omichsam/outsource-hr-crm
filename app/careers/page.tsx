import type { Metadata } from "next";
import { CvForm } from "@/components/CvForm";
import { JobBoard, type PublicVacancy } from "@/components/JobBoard";
import { PageHero } from "@/components/PageHero";
import { SiteShell } from "@/components/SiteShell";
import { publicJobs, readStore } from "@/lib/store";

export const metadata: Metadata = {
  title: "Careers",
  description:
    "View vacancies approved for publication by Avenyra Global, or submit your CV for future opportunities.",
};

export default async function CareersPage() {
  const store = await readStore();
  const jobs: PublicVacancy[] = publicJobs(store).map((job) => ({
    id: job.id,
    title: job.title,
    location: job.location,
    type: job.type,
    category: job.category || "General",
    summary: job.summary,
    deadline: job.deadline || "To be confirmed",
  }));

  return (
    <SiteShell>
      <PageHero
        eyebrow="CAREERS"
        title="Talent creates possibilities. Opportunities create futures."
        lede="We connect talented individuals with organisations seeking capable, motivated and skilled professionals. Only vacancies approved for publication are shown here."
        image="/images/careers.jpg"
        imageAlt="Two African professionals in conversation at a meeting table"
      />
      <section className="bg-white">
        <div className="mx-auto w-full max-w-[1200px] px-5 py-16 sm:px-8">
          <h2 className="font-heading text-3xl font-semibold text-navy">Current opportunities</h2>
          <div className="mt-8">
            <JobBoard jobs={jobs} />
          </div>
        </div>
      </section>
      <section id="submit-cv" className="scroll-mt-24 bg-mist">
        <div className="mx-auto grid w-full max-w-[1200px] gap-10 px-5 py-16 sm:px-8 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <h2 className="font-heading text-3xl font-semibold text-navy">Submit your CV</h2>
            <p className="mt-4 leading-7 text-muted">
              Use this form to register your details for future opportunities. PDF and DOCX files are accepted. Your CV
              is stored privately and is never shown on the public website.
            </p>
          </div>
          <div className="bg-white p-6 sm:p-8">
            <CvForm />
          </div>
        </div>
      </section>
    </SiteShell>
  );
}
