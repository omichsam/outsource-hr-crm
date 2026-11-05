import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { PageHero } from "@/components/PageHero";
import { SiteShell } from "@/components/SiteShell";
import { industries } from "@/lib/content/industries";

export const metadata: Metadata = {
  title: "Industries",
  description:
    "How Avenyra Global can support workforce needs in the public sector, development, finance, healthcare, engineering, manufacturing, hospitality and growing companies.",
};

export default function IndustriesPage() {
  return (
    <SiteShell>
      <PageHero
        eyebrow="INDUSTRIES"
        title="Supporting organisations across diverse industries."
        lede="Different workplaces create different workforce pressures. These notes describe the kind of support Avenyra Global can provide. They are not a list of current clients."
        image="/images/office.jpg"
        imageAlt="Portrait of an African professional in a workplace"
      />
      {industries.map((industry, index) => (
        <section key={industry.slug} id={industry.slug} className={`scroll-mt-24 ${index % 2 ? "bg-mist" : "bg-white"}`}>
          <div className="mx-auto grid w-full max-w-[1200px] items-center gap-10 px-5 py-16 sm:px-8 lg:grid-cols-2 lg:py-20">
            <div className={`relative aspect-[16/11] overflow-hidden ${index % 2 ? "lg:order-2" : ""}`}>
              <Image src={industry.image} alt={industry.imageAlt} fill className="object-cover" sizes="(min-width: 1024px) 50vw, 100vw" />
            </div>
            <div>
              <h2 className="font-heading text-3xl font-semibold tracking-tight text-navy">{industry.title}</h2>
              <p className="mt-4 leading-8 text-ink">{industry.introduction}</p>
              <h3 className="mt-6 text-xs font-semibold tracking-[0.16em] text-teal">TYPICAL WORKFORCE CHALLENGES</h3>
              <ul className="mt-3 space-y-2 text-sm leading-6 text-ink">
                {industry.challenges.map((item) => (
                  <li key={item} className="border-l-2 border-gold pl-3">
                    {item}
                  </li>
                ))}
              </ul>
              <h3 className="mt-6 text-xs font-semibold tracking-[0.16em] text-teal">RELEVANT SERVICES</h3>
              <p className="mt-3 text-sm leading-6 text-ink">{industry.services.join(" · ")}</p>
              <h3 className="mt-6 text-xs font-semibold tracking-[0.16em] text-teal">HOW AVENYRA GLOBAL CAN SUPPORT THE SECTOR</h3>
              <p className="mt-3 leading-7 text-muted">{industry.support}</p>
            </div>
          </div>
        </section>
      ))}
      <section className="bg-navy text-white">
        <div className="mx-auto flex w-full max-w-[1200px] flex-col items-start gap-4 px-5 py-14 sm:px-8">
          <h2 className="font-heading text-3xl font-semibold">Talk through the workforce you actually have.</h2>
          <Link href="/contact?enquiry=consultation" className="inline-flex min-h-12 items-center bg-teal px-6 font-semibold text-white">
            Request a Consultation
          </Link>
        </div>
      </section>
    </SiteShell>
  );
}
