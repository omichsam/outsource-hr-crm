import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { ServiceBlock } from "@/components/ServiceBlock";
import { SiteShell } from "@/components/SiteShell";
import { services } from "@/lib/content/services";

export const metadata: Metadata = {
  title: "Our Services",
  description:
    "HR outsourcing, recruitment, payroll, contract workforce management, training, advisory, temporary staffing and benefits administration.",
};

export default function ServicesPage() {
  return (
    <SiteShell>
      <PageHero
        eyebrow="OUR SERVICES"
        title="Comprehensive human resource solutions."
        lede="From finding the right talent to managing everyday workforce requirements, Avenyra Global provides HR services for organisations at different stages of growth."
        image="/images/meeting.jpg"
        imageAlt="Professionals meeting in a corporate boardroom"
      />
      <nav aria-label="Services" className="border-b border-line bg-white">
        <div className="mx-auto flex w-full max-w-[1200px] gap-2 overflow-x-auto px-5 py-4 sm:px-8">
          {services.map((service) => (
            <a
              key={service.slug}
              href={`#${service.slug}`}
              className="shrink-0 border border-line px-3 py-2 text-sm font-medium text-navy hover:border-teal hover:text-teal"
            >
              {service.title}
            </a>
          ))}
        </div>
      </nav>
      {services.map((service, index) => (
        <ServiceBlock key={service.slug} service={service} index={index} />
      ))}
    </SiteShell>
  );
}
