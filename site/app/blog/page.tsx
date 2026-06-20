import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import { Section } from "@/components/Section";
import CTASection from "@/components/CTASection";
import JsonLd from "@/components/JsonLd";
import { breadcrumbSchema } from "@/lib/schema";
import { posts } from "@/lib/blog";

export const metadata: Metadata = {
  title: "Pool Care Blog & Tips",
  description:
    "Pool care tips, maintenance advice, and guides from Surfrider Pool Service in Pinellas County, Florida.",
  alternates: { canonical: "/blog" },
};

const crumbs = [
  { label: "Home", href: "/" },
  { label: "Blog", href: "/blog" },
];

export default function BlogPage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema(crumbs)} />
      <PageHero
        title="Pool Care Blog"
        subtitle="Tips and advice to help you keep your pool clean, healthy, and ready to swim."
        crumbs={crumbs}
      />

      <Section>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {posts.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="group flex flex-col overflow-hidden rounded-2xl border border-aqua-50 bg-white shadow-sm transition-all hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="relative aspect-[16/10] overflow-hidden">
                <Image
                  src={post.image}
                  alt={post.imageAlt}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="flex flex-1 flex-col p-6">
                <time className="text-xs font-semibold uppercase tracking-wider text-ocean-600">
                  {post.dateLabel}
                </time>
                <h2 className="mt-2 text-xl text-navy-900">{post.title}</h2>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-navy-800/80">
                  {post.excerpt}
                </p>
                <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-ocean-600">
                  Read more
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true" className="transition-transform group-hover:translate-x-1">
                    <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span>
              </div>
            </Link>
          ))}
        </div>
      </Section>

      <CTASection />
    </>
  );
}
