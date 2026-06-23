import type { MetadataRoute } from "next";
import { services, site } from "@/lib/site";
import { posts } from "@/lib/blog";
import { cities } from "@/lib/cities";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = site.url;
  const lastModified = new Date("2026-06-19");

  const staticRoutes = [
    { url: "", priority: 1.0 },
    { url: "/about", priority: 0.8 },
    { url: "/services", priority: 0.9 },
    { url: "/service-areas", priority: 0.8 },
    { url: "/blog", priority: 0.7 },
    { url: "/contact", priority: 0.8 },
    { url: "/sitemap", priority: 0.3 },
    { url: "/privacy-policy", priority: 0.3 },
    { url: "/terms-of-service", priority: 0.3 },
  ].map((r) => ({
    url: `${base}${r.url}`,
    lastModified,
    changeFrequency: "monthly" as const,
    priority: r.priority,
  }));

  const serviceRoutes = services.map((s) => ({
    url: `${base}/services/${s.slug}`,
    lastModified,
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  const blogRoutes = posts.map((p) => ({
    url: `${base}/blog/${p.slug}`,
    lastModified: new Date(p.date),
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  const cityRoutes = cities.map((c) => ({
    url: `${base}/service-areas/${c.slug}`,
    lastModified,
    changeFrequency: "monthly" as const,
    priority: 0.85,
  }));

  return [...staticRoutes, ...serviceRoutes, ...blogRoutes, ...cityRoutes];
}
