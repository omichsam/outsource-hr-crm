import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { ServiceBlock } from "@/components/ServiceBlock";
import { SiteShell } from "@/components/SiteShell";
import { getService, services } from "@/lib/content/services";

type Params = { slug: string };

export function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({ params }: { params: Promise<Params> }): Promise<Metadata> {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) return { title: "Service" };
  return {
    title: service.title,
    description: service.summary,
  };
}

export default async function ServicePage({ params }: { params: Promise<Params> }) {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) notFound();
  const index = services.findIndex((item) => item.slug === service.slug);

  return (
    <SiteShell>
      <div className="border-b border-line bg-mist">
        <div className="mx-auto w-full max-w-[1200px] px-5 py-6 sm:px-8">
          <Breadcrumbs
            items={[
              { href: "/", label: "Home" },
              { href: "/services", label: "Our Services" },
              { label: service.title },
            ]}
          />
        </div>
      </div>
      <ServiceBlock service={service} index={index} />
      <section className="bg-mist">
        <div className="mx-auto w-full max-w-[1200px] px-5 py-12 sm:px-8">
          <h2 className="font-heading text-2xl font-semibold text-navy">Other services</h2>
          <ul className="mt-4 grid gap-3 sm:grid-cols-2">
            {services
              .filter((item) => item.slug !== service.slug)
              .map((item) => (
                <li key={item.slug}>
                  <Link href={`/services/${item.slug}`} className="text-teal hover:underline">
                    {item.title}
                  </Link>
                </li>
              ))}
          </ul>
        </div>
      </section>
    </SiteShell>
  );
}
