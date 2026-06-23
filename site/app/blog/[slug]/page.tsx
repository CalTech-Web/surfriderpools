import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import PageHero, { Prose } from "@/components/PageHero";
import CTASection from "@/components/CTASection";
import JsonLd from "@/components/JsonLd";
import { breadcrumbSchema, articleSchema, faqSchema } from "@/lib/schema";
import { posts, getPost } from "@/lib/blog";

export function generateStaticParams() {
  return posts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) return {};
  const keywords = [
    post.focusKeyword,
    post.secondaryKeyword,
    post.longTailKeyword,
  ].filter(Boolean) as string[];
  return {
    title: post.title,
    description: post.excerpt,
    ...(keywords.length ? { keywords } : {}),
    alternates: { canonical: `/blog/${post.slug}` },
    openGraph: {
      type: "article",
      title: post.title,
      description: post.excerpt,
      images: [{ url: post.image }],
      publishedTime: post.date,
    },
  };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();

  const crumbs = [
    { label: "Home", href: "/" },
    { label: "Blog", href: "/blog" },
    { label: post.title, href: `/blog/${post.slug}` },
  ];

  return (
    <>
      <JsonLd
        data={[
          breadcrumbSchema(crumbs),
          articleSchema(post),
          ...(post.faqs && post.faqs.length > 0 ? [faqSchema(post.faqs)] : []),
        ]}
      />
      <PageHero title={post.title} crumbs={crumbs} />

      <article className="py-16 md:py-20">
        <div className="mx-auto max-w-3xl container-px">
          <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-sm">
            <span className="font-semibold text-ocean-600">By Surfrider Pool Service Team</span>
            <span className="text-navy-800/40">|</span>
            <time dateTime={post.date} className="font-semibold uppercase tracking-wider text-navy-800/60">
              {post.dateLabel}
            </time>
          </div>
          <div className="relative mt-5 aspect-[16/9] overflow-hidden rounded-3xl shadow-lg">
            <Image
              src={post.image}
              alt={post.imageAlt}
              fill
              priority
              sizes="(max-width: 768px) 100vw, 768px"
              className="object-cover"
            />
          </div>
          <div className="mt-10">
            <Prose>
              {post.body ? (
                <div className="space-y-5" dangerouslySetInnerHTML={{ __html: post.body }} />
              ) : (
                post.paragraphs?.map((p, i) => (
                  <p key={i} dangerouslySetInnerHTML={{ __html: p }} />
                ))
              )}
            </Prose>
          </div>
          {post.faqs && post.faqs.length > 0 && (
            <div className="mt-14">
              <h2 className="font-display text-2xl font-bold text-navy-900">
                Frequently asked questions
              </h2>
              <div className="mt-6 space-y-4">
                {post.faqs.map((f) => (
                  <details
                    key={f.q}
                    className="group rounded-2xl border border-aqua-50 bg-white p-5 shadow-sm"
                  >
                    <summary className="flex cursor-pointer items-center justify-between gap-4 font-display text-lg font-semibold text-navy-900 marker:content-['']">
                      {f.q}
                      <svg
                        width="20"
                        height="20"
                        viewBox="0 0 20 20"
                        fill="none"
                        aria-hidden="true"
                        className="shrink-0 text-ocean-600 transition-transform group-open:rotate-180"
                      >
                        <path d="M5 8l5 5 5-5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </summary>
                    <p className="mt-3 leading-relaxed text-navy-800/85">{f.a}</p>
                  </details>
                ))}
              </div>
            </div>
          )}
          {post.resources && post.resources.length > 0 && (
            <div className="mt-12 rounded-2xl border border-aqua-50 bg-aqua-50/50 p-6 md:p-8">
              <h2 className="font-display text-xl font-bold text-navy-900">Helpful resources</h2>
              <p className="mt-1 text-sm text-navy-800/75">
                Trusted, third party references for safe and healthy pool care.
              </p>
              <ul className="mt-4 space-y-3">
                {post.resources.map((r) => (
                  <li key={r.url}>
                    <a
                      href={r.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group inline-flex items-center gap-2 font-semibold text-ocean-600 hover:text-aqua-500"
                    >
                      {r.label}
                      <span className="text-xs font-normal text-navy-800/55">({r.source})</span>
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden="true" className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
                        <path d="M7 17 17 7M9 7h8v8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          )}
          <div className="mt-12 border-t border-aqua-50 pt-8">
            <Link href="/blog" className="inline-flex items-center gap-1 font-semibold text-ocean-600">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                <path d="M13 8H3M7 4 3 8l4 4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              Back to all posts
            </Link>
          </div>
        </div>
      </article>

      <CTASection />
    </>
  );
}
