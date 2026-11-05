import type { MetadataRoute } from "next";
import { articles } from "@/lib/content/insights";
import { services } from "@/lib/content/services";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";
  const paths = ["", "/about", "/services", "/industries", "/careers", "/insights", "/contact", "/privacy", "/terms"];
  const now = new Date();
  return [
    ...paths.map((path) => ({ url: `${base}${path || "/"}`, lastModified: now })),
    ...services.map((service) => ({ url: `${base}/services/${service.slug}`, lastModified: now })),
    ...articles.map((article) => ({
      url: `${base}/insights/${article.slug}`,
      lastModified: new Date(`${article.date}T00:00:00`),
    })),
  ];
}
