import Link from "next/link";
import { SiteShell } from "@/components/SiteShell";

export default function NotFound() {
  return (
    <SiteShell>
      <section className="mx-auto w-full max-w-[720px] px-5 py-24 sm:px-8">
        <p className="text-xs font-semibold tracking-[0.16em] text-teal">404</p>
        <h1 className="mt-3 font-heading text-4xl font-semibold text-navy">This page is not available.</h1>
        <p className="mt-4 leading-7 text-muted">The address may be out of date, or the page may never have been published.</p>
        <Link href="/" className="mt-8 inline-flex min-h-12 items-center bg-teal px-6 font-semibold text-white">
          Back to the homepage
        </Link>
      </section>
    </SiteShell>
  );
}
