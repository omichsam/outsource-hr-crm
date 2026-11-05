import Image from "next/image";
import Link from "next/link";
import { SiteShell } from "@/components/SiteShell";
import { Reveal } from "@/components/Reveal";
import { ButtonLink } from "@/components/ButtonLink";
import { ServiceGlyph } from "@/components/ServiceGlyph";
import { company, differentiators, principles, process } from "@/lib/content/company";
import { industries } from "@/lib/content/industries";
import { services } from "@/lib/content/services";

export default function HomePage() {
  return (
    <SiteShell>
      <section className="bg-white">
        <div className="mx-auto grid w-full max-w-[1200px] items-center gap-12 px-5 py-14 sm:px-8 lg:grid-cols-12 lg:py-20">
          <Reveal className="lg:col-span-6">
            <p className="text-[11px] font-semibold tracking-[0.22em] text-teal">{company.eyebrow.toUpperCase()}</p>
            <h1 className="mt-4 font-heading text-[2.55rem] font-semibold leading-[1.05] tracking-tight text-navy sm:text-5xl lg:text-[3.4rem]">
              {company.headline}
            </h1>
            <p className="mt-5 max-w-xl text-base leading-8 text-muted sm:text-lg">{company.hero}</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <ButtonLink href="/services">Explore Our Services</ButtonLink>
              <ButtonLink href="/contact?enquiry=consultation" variant="secondary">
                Partner With Us
              </ButtonLink>
            </div>
            <p className="mt-8 text-sm font-medium tracking-wide text-navy/80">
              HR Outsourcing <span className="mx-2 text-gold">|</span>
              Recruitment <span className="mx-2 text-gold">|</span>
              Payroll Management <span className="mx-2 text-gold">|</span>
              Workforce Solutions
            </p>
          </Reveal>
          <Reveal className="relative lg:col-span-6" delay={0.08}>
            <div className="absolute -bottom-3 -right-3 hidden h-[92%] w-[92%] border border-gold sm:block" aria-hidden />
            <div className="relative aspect-[4/5] overflow-hidden bg-mist sm:aspect-[5/4] lg:aspect-[4/5]">
              <Image
                src="/images/hero.jpg"
                alt="African professionals in discussion around a boardroom table"
                fill
                priority
                className="object-cover"
                sizes="(min-width: 1024px) 48vw, 100vw"
              />
            </div>
          </Reveal>
        </div>
      </section>

      <section className="bg-mist">
        <div className="mx-auto grid w-full max-w-[1200px] items-center gap-12 px-5 py-16 sm:px-8 lg:grid-cols-12 lg:py-24">
          <Reveal className="relative lg:col-span-5">
            <div className="relative aspect-[4/5] overflow-hidden">
              <Image
                src="/images/professional.jpg"
                alt="An African professional standing beside an office window"
                fill
                className="object-cover"
                sizes="(min-width: 1024px) 40vw, 100vw"
              />
            </div>
          </Reveal>
          <Reveal className="lg:col-span-7" delay={0.06}>
            <h2 className="font-heading text-3xl font-semibold tracking-tight text-navy sm:text-4xl">
              Building Better Workplaces Through People-Centred Solutions.
            </h2>
            <div className="mt-6 max-w-2xl space-y-4 text-base leading-8 text-ink">
              <p>
                People are the foundation of every successful organisation. Managing a workforce requires more than
                filling positions; it requires the right people, effective processes and professional human resource
                support.
              </p>
              <p>
                Avenyra Global partners with organisations to provide flexible and dependable HR solutions that simplify
                workforce management, strengthen employee engagement and support organisational growth.
              </p>
            </div>
            <ol className="mt-8 grid gap-4 sm:grid-cols-3">
              {principles.map((item, index) => (
                <li key={item.title} className="border-t-2 border-gold bg-white p-4">
                  <p className="text-xs font-semibold tracking-[0.16em] text-teal">0{index + 1}</p>
                  <h3 className="mt-2 font-heading text-lg font-semibold text-navy">{item.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-muted">{item.text}</p>
                </li>
              ))}
            </ol>
          </Reveal>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto w-full max-w-[1200px] px-5 py-16 sm:px-8 lg:py-24">
          <Reveal>
            <h2 className="max-w-3xl font-heading text-3xl font-semibold tracking-tight text-navy sm:text-4xl">
              Comprehensive Human Resource Solutions.
            </h2>
            <p className="mt-4 max-w-3xl leading-8 text-muted">
              From finding the right talent to managing everyday workforce requirements, Avenyra Global provides a range
              of HR services designed to support organisations at different stages of growth.
            </p>
          </Reveal>
          <div className="mt-10 grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
            {services.map((service, index) => (
              <Reveal key={service.slug} delay={(index % 4) * 0.05}>
                <article className="group flex h-full flex-col border border-line bg-white p-6 transition duration-300 hover:-translate-y-1 hover:border-teal/40 motion-reduce:transition-none motion-reduce:hover:translate-y-0">
                  <div className="flex items-center justify-between">
                    <span className="flex h-11 w-11 items-center justify-center bg-mist text-teal transition group-hover:bg-teal group-hover:text-white">
                      <ServiceGlyph name={service.icon} />
                    </span>
                    <span className="font-heading text-sm text-gold">0{index + 1}</span>
                  </div>
                  <h3 className="mt-5 font-heading text-xl font-semibold text-navy">{service.title}</h3>
                  <p className="mt-3 flex-1 text-sm leading-6 text-muted">{service.summary}</p>
                  <Link href={`/services/${service.slug}`} className="mt-5 text-sm font-semibold text-teal">
                    Learn more
                  </Link>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-mist">
        <div className="mx-auto grid w-full max-w-[1200px] gap-10 px-5 py-16 sm:px-8 lg:grid-cols-12 lg:py-24">
          <Reveal className="lg:col-span-4">
            <h2 className="font-heading text-3xl font-semibold tracking-tight text-navy sm:text-4xl">
              Your Workforce Deserves the Right Support.
            </h2>
          </Reveal>
          <div className="lg:col-span-8">
            <ul className="divide-y divide-line border-y border-line">
              {differentiators.map((item, index) => (
                <li key={item.title} className="grid gap-3 py-6 sm:grid-cols-[4rem_1fr] sm:gap-6">
                  <span className="font-heading text-2xl font-semibold text-gold">0{index + 1}</span>
                  <div>
                    <h3 className="font-heading text-xl font-semibold text-navy">{item.title}</h3>
                    <p className="mt-2 max-w-2xl leading-7 text-muted">{item.text}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto w-full max-w-[1200px] px-5 py-16 sm:px-8 lg:py-24">
          <Reveal>
            <h2 className="max-w-3xl font-heading text-3xl font-semibold tracking-tight text-navy sm:text-4xl">
              Supporting Organisations Across Diverse Industries.
            </h2>
          </Reveal>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {industries.map((industry) => (
              <Link key={industry.slug} href={`/industries#${industry.slug}`} className="group relative block min-h-56 overflow-hidden">
                <Image
                  src={industry.image}
                  alt={industry.imageAlt}
                  fill
                  className="object-cover transition duration-500 group-hover:scale-[1.03] motion-reduce:transition-none motion-reduce:group-hover:scale-100"
                  sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
                />
                <span className="absolute inset-0 bg-gradient-to-t from-navy via-navy/25 to-navy/10" />
                <span className="absolute inset-x-0 bottom-0 p-5 font-heading text-lg font-semibold leading-snug text-white">
                  {industry.title}
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-mist">
        <div className="mx-auto w-full max-w-[1200px] px-5 py-16 sm:px-8 lg:py-24">
          <Reveal>
            <h2 className="font-heading text-3xl font-semibold tracking-tight text-navy sm:text-4xl">
              A Simple Approach. Meaningful Results.
            </h2>
          </Reveal>
          <ol className="relative mt-12 grid gap-10 md:grid-cols-4">
            <span className="absolute left-0 right-0 top-5 hidden h-px bg-gold md:block" aria-hidden />
            {process.map((item) => (
              <li key={item.step} className="relative border-l border-gold pl-6 md:border-0 md:pl-0">
                <span className="relative z-10 flex h-10 w-10 items-center justify-center bg-navy font-heading text-sm font-semibold text-white">
                  {item.step}
                </span>
                <h3 className="mt-4 font-heading text-xl font-semibold text-navy">{item.title}</h3>
                <p className="mt-2 leading-7 text-muted">{item.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto grid w-full max-w-[1200px] items-center gap-10 px-5 py-16 sm:px-8 lg:grid-cols-2 lg:py-24">
          <Reveal>
            <h2 className="font-heading text-3xl font-semibold tracking-tight text-navy sm:text-4xl">
              Talent Creates Possibilities. Opportunities Create Futures.
            </h2>
            <p className="mt-5 max-w-xl text-lg leading-8 text-ink">
              We connect talented individuals with organisations seeking capable, motivated and skilled professionals.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <ButtonLink href="/careers">Explore Job Opportunities</ButtonLink>
              <ButtonLink href="/careers#submit-cv" variant="secondary">
                Submit Your CV
              </ButtonLink>
            </div>
          </Reveal>
          <Reveal delay={0.06}>
            <div className="relative aspect-[16/11] overflow-hidden">
              <Image
                src="/images/careers.jpg"
                alt="Two African professionals in conversation at a meeting table"
                fill
                className="object-cover"
                sizes="(min-width: 1024px) 50vw, 100vw"
              />
            </div>
          </Reveal>
        </div>
      </section>

      <section className="bg-navy text-white">
        <div className="mx-auto w-full max-w-[1200px] px-5 py-16 sm:px-8 lg:py-20">
          <h2 className="max-w-3xl font-heading text-3xl font-semibold tracking-tight sm:text-4xl">
            Let&apos;s Build a Stronger Workforce Together.
          </h2>
          <p className="mt-4 max-w-2xl text-lg leading-8 text-white/80">
            Every organisation deserves the right people and the right HR support. Let Avenyra Global help you develop
            workforce solutions that support your goals.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <ButtonLink href="/contact?enquiry=consultation" variant="primary">
              Request a Consultation
            </ButtonLink>
            <ButtonLink href="/contact" variant="outlineLight">
              Contact Our Team
            </ButtonLink>
          </div>
        </div>
      </section>
    </SiteShell>
  );
}
