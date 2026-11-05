import type { Metadata } from "next";
import { Inter, Manrope } from "next/font/google";
import { company } from "@/lib/content/company";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter", display: "swap" });
const manrope = Manrope({ subsets: ["latin"], variable: "--font-manrope", display: "swap" });

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: `${company.name} — Empowering People. Strengthening Organisations.`,
    template: `%s · ${company.name}`,
  },
  description: company.metaDescription,
  openGraph: {
    title: `${company.name} — Empowering People. Strengthening Organisations.`,
    description: company.metaDescription,
    siteName: company.name,
    type: "website",
    locale: "en_KE",
    images: [
      {
        url: "/images/hero.jpg",
        alt: "African professionals in discussion around a boardroom table",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${company.name} — People. Potential. Progress.`,
    description: company.metaDescription,
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: company.name,
    slogan: company.tagline,
    description: company.metaDescription,
    url: siteUrl,
  };

  return (
    <html lang="en" className={`${inter.variable} ${manrope.variable}`}>
      <body className="bg-white font-sans text-ink antialiased">
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
        {children}
      </body>
    </html>
  );
}
