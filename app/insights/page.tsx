import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { PageHero } from "@/components/PageHero";
import { SiteShell } from "@/components/SiteShell";
import { articles, formatDate, insightCategories } from "@/lib/content/insights";

export const metadata: Metadata = {
  title: "Insights",
  description:
    "Notes from Avenyra Global on HR management, recruitment, employment practices, payroll, careers and leadership.",
};

export default function InsightsPage() {
  return (
    <SiteShell>
      <PageHero
        eyebrow="INSIGHTS"
        title="Clear thinking for people at work."
        lede="Short editorial notes on managing teams, hiring carefully and running the everyday work of a people function."
        image="/images/workshop.jpg"
        imageAlt="African professionals working together at computers"
      />
      <section className="bg-white">
        <div className="mx-auto w-full max-w-[1200px] px-5 py-12 sm:px-8">
          <ul className="flex flex-wrap gap-2" aria-label="Categories">
            {insightCategories.map((category) => (
              <li key={category} className="border border-line px-3 py-1.5 text-sm text-navy">
                {category}
              </li>
            ))}
          </ul>
          <div className="mt-10 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
            {articles.map((article) => (
              <article key={article.slug} className="flex flex-col border border-line">
                <div className="relative aspect-[16/10]">
                  <Image src={article.image} alt={article.imageAlt} fill className="object-cover" sizes="(min-width: 1280px) 30vw, (min-width: 768px) 50vw, 100vw" />
                </div>
                <div className="flex flex-1 flex-col p-5">
                  <p className="text-xs font-semibold tracking-[0.14em] text-teal">
                    {article.category.toUpperCase()} · {formatDate(article.date)}
                  </p>
                  <h2 className="mt-3 font-heading text-xl font-semibold leading-snug text-navy">
                    <Link href={`/insights/${article.slug}`}>{article.title}</Link>
                  </h2>
                  <p className="mt-3 flex-1 text-sm leading-6 text-muted">{article.description}</p>
                  <Link href={`/insights/${article.slug}`} className="mt-4 text-sm font-semibold text-teal">
                    Read more
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </SiteShell>
  );
}
