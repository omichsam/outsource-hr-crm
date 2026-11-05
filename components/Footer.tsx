import Link from "next/link";
import { contactDetails, nav } from "@/lib/content/company";
import { services } from "@/lib/content/services";
import { Logo } from "./Logo";

function SocialIcon({ name }: { name: "LinkedIn" | "Facebook" | "Instagram" }) {
  const paths = {
    LinkedIn:
      "M4.7 3.3A1.8 1.8 0 1 1 4.7 6.9 1.8 1.8 0 0 1 4.7 3.3zM3.2 8.2h3V20h-3V8.2zM9.2 8.2h2.9v1.6h.1c.4-.8 1.4-1.7 2.9-1.7 3.1 0 3.7 2 3.7 4.7V20h-3v-5.9c0-1.4 0-3.2-2-3.2s-2.3 1.5-2.3 3.1V20h-3V8.2z",
    Facebook: "M14 8h3V4h-3c-2.8 0-5 2.2-5 5v3H6v4h3v8h4v-8h3.2l.8-4H13V9c0-.6.4-1 1-1z",
    Instagram:
      "M8 3h8a5 5 0 0 1 5 5v8a5 5 0 0 1-5 5H8a5 5 0 0 1-5-5V8a5 5 0 0 1 5-5zm8 2H8a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h8a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3zm-4 3.2A3.8 3.8 0 1 1 8.2 12 3.8 3.8 0 0 1 12 8.2zm0 2A1.8 1.8 0 1 0 13.8 12 1.8 1.8 0 0 0 12 10.2zM17.4 6.6a1 1 0 1 1-1 1 1 1 0 0 1 1-1z",
  };
  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4" aria-hidden>
      <path fill="currentColor" d={paths[name]} />
    </svg>
  );
}

const companyLinks = nav.filter((item) => ["/", "/about", "/industries", "/contact"].includes(item.href));

export function Footer() {
  return (
    <footer className="bg-navy text-white">
      <div className="h-px bg-gold" />
      <div className="mx-auto grid w-full max-w-[1200px] gap-12 px-5 py-16 sm:px-8 md:grid-cols-2 lg:grid-cols-12">
        <div className="lg:col-span-4">
          <Logo tone="light" />
          <p className="mt-6 max-w-sm text-sm leading-7 text-white/75">
            Avenyra Global provides human resource outsourcing, recruitment and workforce solutions for organisations
            that want dependable support for their people.
          </p>
          <p className="mt-4 font-heading text-xs tracking-[0.18em] text-gold">PEOPLE. POTENTIAL. PROGRESS.</p>
        </div>
        <div className="lg:col-span-2">
          <h2 className="text-xs font-semibold tracking-[0.16em] text-gold">COMPANY</h2>
          <ul className="mt-4 space-y-2.5 text-sm text-white/80">
            {companyLinks.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="hover:text-white">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="lg:col-span-3">
          <h2 className="text-xs font-semibold tracking-[0.16em] text-gold">SERVICES</h2>
          <ul className="mt-4 space-y-2.5 text-sm text-white/80">
            {services.map((service) => (
              <li key={service.slug}>
                <Link href={`/services/${service.slug}`} className="hover:text-white">
                  {service.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="lg:col-span-3">
          <h2 className="text-xs font-semibold tracking-[0.16em] text-gold">CAREERS & INSIGHTS</h2>
          <ul className="mt-4 space-y-2.5 text-sm text-white/80">
            <li>
              <Link href="/careers" className="hover:text-white">
                Current opportunities
              </Link>
            </li>
            <li>
              <Link href="/careers#submit-cv" className="hover:text-white">
                Submit your CV
              </Link>
            </li>
            <li>
              <Link href="/insights" className="hover:text-white">
                Insights
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-white">
                Contact Us
              </Link>
            </li>
          </ul>
          <h2 className="mt-8 text-xs font-semibold tracking-[0.16em] text-gold">CONTACT</h2>
          <ul className="mt-4 space-y-2 text-sm text-white/75">
            {contactDetails.slice(0, 4).map((item) => (
              <li key={item.label}>
                <span className="text-white/50">{item.label}: </span>
                {item.value}
              </li>
            ))}
          </ul>
          <div className="mt-5 flex gap-3" aria-label="Social media">
            {[
              "LinkedIn",
              "Facebook",
              "Instagram",
            ].map((label) => (
              <span
                key={label}
                title={`${label} profile to be confirmed`}
                className="inline-flex h-10 w-10 items-center justify-center border border-white/15 text-white/80"
              >
                <SocialIcon name={label as "LinkedIn" | "Facebook" | "Instagram"} />
                <span className="sr-only">{label} profile to be confirmed</span>
              </span>
            ))}
          </div>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="mx-auto flex w-full max-w-[1200px] flex-col gap-3 px-5 py-5 text-xs text-white/60 sm:flex-row sm:items-center sm:justify-between sm:px-8">
          <p>© {new Date().getFullYear()} Avenyra Global. All rights reserved.</p>
          <div className="flex gap-5">
            <Link href="/privacy" className="hover:text-white">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-white">
              Terms & Conditions
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
