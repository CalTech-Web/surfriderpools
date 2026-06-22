import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import { Section } from "@/components/Section";
import { services } from "@/lib/site";
import { cities } from "@/lib/cities";
import { posts } from "@/lib/blog";

export const metadata: Metadata = {
  title: "Sitemap",
  description:
    "Browse every page on the Surfrider Pool Service website, including our pool cleaning and repair services across Pinellas County.",
  alternates: { canonical: "/sitemap" },
};

const crumbs = [
  { label: "Home", href: "/" },
  { label: "Sitemap", href: "/sitemap" },
];

function LinkList({ title, links }: { title: string; links: { label: string; href: string }[] }) {
  return (
    <div>
      <h2 className="font-display text-xl font-bold text-navy-900">{title}</h2>
      <ul className="mt-4 space-y-2">
        {links.map((l) => (
          <li key={l.href}>
            <Link href={l.href} className="text-ocean-600 transition-colors hover:text-aqua-500">
              {l.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function SitemapPage() {
  return (
    <>
      <PageHero
        title="Sitemap"
        subtitle="Every page on our site in one place. Find what you need quickly."
        crumbs={crumbs}
      />
      <Section>
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <LinkList
            title="Main"
            links={[
              { label: "Home", href: "/" },
              { label: "About", href: "/about" },
              { label: "Contact", href: "/contact" },
            ]}
          />
          <LinkList
            title="Services"
            links={[
              { label: "All Services", href: "/services" },
              ...services.map((s) => ({ label: s.title, href: `/services/${s.slug}` })),
            ]}
          />
          <LinkList
            title="Service Areas"
            links={[
              { label: "All Service Areas", href: "/service-areas" },
              ...cities.map((c) => ({ label: c.name, href: `/service-areas/${c.slug}` })),
            ]}
          />
          <LinkList
            title="Blog"
            links={[
              { label: "Blog", href: "/blog" },
              ...posts.map((p) => ({ label: p.title, href: `/blog/${p.slug}` })),
            ]}
          />
        </div>
        <div className="mt-12 border-t border-aqua-50 pt-8">
          <LinkList
            title="Legal"
            links={[
              { label: "Privacy Policy", href: "/privacy-policy" },
              { label: "Terms of Service", href: "/terms-of-service" },
            ]}
          />
        </div>
      </Section>
    </>
  );
}
