import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { SiteShell } from "@/components/SiteShell";
import { articles, formatDate, getArticle } from "@/lib/content/insights";

type Params = { slug: string };

export function generateStaticParams() {
  return articles.map((article) => ({ slug: article.slug }));
}

export async function generateMetadata({ params }: { params: Promise<Params> }): Promise<Metadata> {
  const { slug } = await params;
  const article = getArticle(slug);
  if (!article) return { title: "Insight" };
  return { title: article.title, description: article.description };
}

export default async function ArticlePage({ params }: { params: Promise<Params> }) {
  const { slug } = await params;
  const article = getArticle(slug);
  if (!article) notFound();
  const related = articles.filter((item) => item.slug !== article.slug && item.category === article.category);
  const more = (related.length ? related : articles.filter((item) => item.slug !== article.slug)).slice(0, 2);

  return (
    <SiteShell>
      <article>
        <header className="bg-navy text-white">
          <div className="mx-auto w-full max-w-[760px] px-5 py-14 sm:px-8">
            <Breadcrumbs
              tone="light"
              items={[
                { href: "/", label: "Home" },
                { href: "/insights", label: "Insights" },
                { label: article.title },
              ]}
            />
            <p className="mt-6 text-xs font-semibold tracking-[0.16em] text-gold">
              {article.category.toUpperCase()} · {formatDate(article.date)}
            </p>
            <h1 className="mt-4 font-heading text-4xl font-semibold leading-tight tracking-tight">{article.title}</h1>
            <p className="mt-4 text-lg leading-8 text-white/80">{article.description}</p>
          </div>
        </header>
        <div className="relative mx-auto aspect-[16/8] w-full max-w-[1000px]">
          <Image src={article.image} alt={article.imageAlt} fill className="object-cover" priority sizes="100vw" />
        </div>
        <div className="mx-auto w-full max-w-[720px] px-5 py-12 sm:px-8">
          <p className="text-sm text-muted">Avenyra Global Insights</p>
          <div className="mt-6 space-y-5 text-[1.05rem] leading-8 text-ink">
            {article.paragraphs.map((paragraph) => (
              <p key={paragraph.slice(0, 32)}>{paragraph}</p>
            ))}
          </div>
        </div>
      </article>
      <section className="bg-mist">
        <div className="mx-auto w-full max-w-[1000px] px-5 py-12 sm:px-8">
          <h2 className="font-heading text-2xl font-semibold text-navy">Related articles</h2>
          <div className="mt-6 grid gap-5 md:grid-cols-2">
            {more.map((item) => (
              <Link key={item.slug} href={`/insights/${item.slug}`} className="bg-white p-5 hover:text-teal">
                <p className="text-xs font-semibold tracking-wide text-teal">{item.category}</p>
                <h3 className="mt-2 font-heading text-xl font-semibold text-navy">{item.title}</h3>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </SiteShell>
  );
}
