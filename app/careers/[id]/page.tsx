import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { CvForm } from "@/components/CvForm";
import { SiteShell } from "@/components/SiteShell";
import { publicJobs, readStore } from "@/lib/store";

export const dynamicParams = false;

type Params = { id: string };

export async function generateStaticParams() {
  const store = await readStore();
  const jobs = publicJobs(store);
  if (jobs.length === 0) return [{ id: "unpublished" }];
  return jobs.map((job) => ({ id: job.id }));
}

export async function generateMetadata({ params }: { params: Promise<Params> }): Promise<Metadata> {
  const { id } = await params;
  const store = await readStore();
  const job = publicJobs(store).find((item) => item.id === id);
  if (!job) return { title: "Opportunity" };
  return { title: job.title, description: job.summary };
}

export default async function JobPage({ params }: { params: Promise<Params> }) {
  const { id } = await params;
  const store = await readStore();
  const job = publicJobs(store).find((item) => item.id === id);
  if (!job) {
    return (
      <SiteShell>
        <article className="bg-white">
          <div className="mx-auto w-full max-w-[800px] px-5 py-16 sm:px-8">
            <h1 className="font-heading text-4xl font-semibold text-navy">No published opportunity</h1>
            <p className="mt-4 leading-8 text-ink">Vacancies appear here after they are approved for publication.</p>
            <Link href="/careers" className="mt-8 inline-flex min-h-12 items-center bg-teal px-6 font-semibold text-white">
              Back to careers
            </Link>
          </div>
        </article>
      </SiteShell>
    );
  }

  return (
    <SiteShell>
      <article className="bg-white">
        <div className="mx-auto w-full max-w-[800px] px-5 py-12 sm:px-8 sm:py-16">
          <Breadcrumbs
            items={[
              { href: "/", label: "Home" },
              { href: "/careers", label: "Careers" },
              { label: job.title },
            ]}
          />
          <p className="mt-6 text-sm font-semibold tracking-wide text-teal">
            {job.location} · {job.type}
            {job.category ? ` · ${job.category}` : ""}
          </p>
          <h1 className="mt-3 font-heading text-4xl font-semibold tracking-tight text-navy">{job.title}</h1>
          <p className="mt-4 text-sm text-ink">
            Application deadline: <span className="font-semibold">{job.deadline || "To be confirmed"}</span>
          </p>
          <p className="mt-6 text-lg leading-8 text-ink">{job.summary}</p>
          <div className="mt-6 whitespace-pre-wrap leading-8 text-muted">{job.description}</div>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#apply" className="inline-flex min-h-12 items-center bg-teal px-6 font-semibold text-white">
              Apply
            </a>
            <Link href="/careers" className="inline-flex min-h-12 items-center px-6 font-semibold text-navy ring-1 ring-navy/15">
              All opportunities
            </Link>
          </div>
        </div>
      </article>
      <section id="apply" className="scroll-mt-24 bg-mist">
        <div className="mx-auto w-full max-w-[800px] px-5 py-12 sm:px-8">
          <h2 className="font-heading text-2xl font-semibold text-navy">Apply for this role</h2>
          <div className="mt-6 bg-white p-6">
            <CvForm jobId={job.id} jobTitle={job.title} />
          </div>
        </div>
      </section>
    </SiteShell>
  );
}
