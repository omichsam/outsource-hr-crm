import Image from "next/image";
import type { Service } from "@/lib/content/services";
import { ButtonLink } from "./ButtonLink";
import { ServiceGlyph } from "./ServiceGlyph";

export function ServiceBlock({ service, index }: { service: Service; index: number }) {
  const flipped = index % 2 === 1;
  return (
    <article id={service.slug} className={`scroll-mt-24 ${index % 2 === 0 ? "bg-white" : "bg-mist"}`}>
      <div className="mx-auto grid w-full max-w-[1200px] items-center gap-10 px-5 py-16 sm:px-8 lg:grid-cols-2 lg:gap-16 lg:py-20">
        <div className={`relative ${flipped ? "lg:order-2" : ""}`}>
          <div className="relative aspect-[4/3] overflow-hidden bg-mist">
            <Image
              src={service.image}
              alt={service.imageAlt}
              fill
              className="object-cover"
              sizes="(min-width: 1024px) 50vw, 100vw"
            />
          </div>
        </div>
        <div>
          <div className="flex h-11 w-11 items-center justify-center bg-teal/10 text-teal">
            <ServiceGlyph name={service.icon} />
          </div>
          <h2 className="mt-5 font-heading text-3xl font-semibold tracking-tight text-navy sm:text-4xl">{service.title}</h2>
          <p className="mt-4 text-lg leading-8 text-ink">{service.introduction}</p>
          <p className="mt-4 leading-7 text-muted">{service.description}</p>
          <div className="mt-8 grid gap-8 sm:grid-cols-2">
            <div>
              <h3 className="text-xs font-semibold tracking-[0.16em] text-teal">ACTIVITIES</h3>
              <ul className="mt-3 space-y-2 text-sm leading-6 text-ink">
                {service.activities.map((item) => (
                  <li key={item} className="border-l-2 border-gold pl-3">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-xs font-semibold tracking-[0.16em] text-teal">CLIENT BENEFITS</h3>
              <ul className="mt-3 space-y-2 text-sm leading-6 text-ink">
                {service.benefits.map((item) => (
                  <li key={item} className="border-l-2 border-gold pl-3">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <h3 className="mt-8 text-xs font-semibold tracking-[0.16em] text-teal">HOW THE SERVICE IS DELIVERED</h3>
          <p className="mt-3 leading-7 text-muted">{service.delivery}</p>
          <div className="mt-8">
            <ButtonLink href={`/contact?enquiry=service&service=${service.slug}`}>Enquire about this service</ButtonLink>
          </div>
        </div>
      </div>
    </article>
  );
}
