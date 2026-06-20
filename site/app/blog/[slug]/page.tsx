import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import PageHero, { Prose } from "@/components/PageHero";
import CTASection from "@/components/CTASection";
import JsonLd from "@/components/JsonLd";
import { breadcrumbSchema, articleSchema } from "@/lib/schema";
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
  return {
    title: post.title,
    description: post.excerpt,
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
      <JsonLd data={[breadcrumbSchema(crumbs), articleSchema(post)]} />
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
              {post.paragraphs.map((p, i) => (
                <p key={i} dangerouslySetInnerHTML={{ __html: p }} />
              ))}
            </Prose>
          </div>
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
