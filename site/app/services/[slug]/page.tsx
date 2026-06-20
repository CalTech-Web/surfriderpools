import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import PageHero from "@/components/PageHero";
import { Section, Eyebrow, Heading } from "@/components/Section";
import CTASection from "@/components/CTASection";
import Faq from "@/components/Faq";
import JsonLd from "@/components/JsonLd";
import { breadcrumbSchema, serviceSchema, faqSchema } from "@/lib/schema";
import { services, faqs, site } from "@/lib/site";

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);
  if (!service) return {};
  return {
    title: service.metaTitle,
    description: service.metaDescription,
    alternates: { canonical: `/services/${service.slug}` },
    openGraph: {
      title: service.metaTitle,
      description: service.metaDescription,
      images: [{ url: service.image }],
    },
  };
}

export default async function ServiceDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);
  if (!service) notFound();

  const others = services.filter((s) => s.slug !== service.slug);
  const crumbs = [
    { label: "Home", href: "/" },
    { label: "Services", href: "/services" },
    { label: service.title, href: `/services/${service.slug}` },
  ];

  return (
    <>
      <JsonLd
        data={[
          breadcrumbSchema(crumbs),
          serviceSchema(service),
          faqSchema(faqs),
        ]}
      />
      <PageHero title={service.title} subtitle={service.short} crumbs={crumbs} />

      <Section>
        <div className="grid items-start gap-12 lg:grid-cols-2">
          <div className="relative aspect-[4/3] overflow-hidden rounded-3xl shadow-lg">
            <Image
              src={service.image}
              alt={service.imageAlt}
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
          <div>
            <Eyebrow>{service.title}</Eyebrow>
            <Heading>What is included</Heading>
            <p className="mt-5 text-lg leading-relaxed text-navy-800/85">{service.blurb}</p>
            <ul className="mt-6 space-y-3">
              {service.features.map((f) => (
                <li key={f} className="flex items-start gap-3 text-navy-800">
                  <span className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-aqua-50 text-ocean-600">
                    <svg width="12" height="12" viewBox="0 0 18 18" fill="none" aria-hidden="true">
                      <path d="M3 9.5 7 13l8-8.5" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </span>
                  {f}
                </li>
              ))}
            </ul>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/contact"
                className="rounded-full bg-aqua-500 px-7 py-3.5 text-center text-sm font-semibold text-navy-950 transition-colors hover:bg-aqua-400"
              >
                Get a Free Quote
              </Link>
              <a
                href={site.phoneHref}
                className="rounded-full border border-navy-900 px-7 py-3.5 text-center text-sm font-semibold text-navy-900 transition-colors hover:bg-navy-900 hover:text-white"
              >
                Call {site.phone}
              </a>
            </div>
          </div>
        </div>
      </Section>

      <section className="bg-aqua-50/60 py-16 md:py-24">
        <div className="mx-auto max-w-6xl container-px">
          <div className="mx-auto max-w-2xl text-center">
            <Eyebrow>Common Questions</Eyebrow>
            <Heading>Good to know</Heading>
          </div>
          <div className="mt-10">
            <Faq items={faqs} />
          </div>
        </div>
      </section>

      <Section>
        <div className="mx-auto max-w-2xl text-center">
          <Eyebrow>More Services</Eyebrow>
          <Heading>Explore what else we offer</Heading>
        </div>
        <div className="mt-10 grid gap-6 sm:grid-cols-2">
          {others.map((o) => (
            <Link
              key={o.slug}
              href={`/services/${o.slug}`}
              className="group flex items-center gap-5 rounded-2xl border border-aqua-50 bg-white p-5 shadow-sm transition-all hover:-translate-y-0.5 hover:shadow-md"
            >
              <div className="relative h-20 w-24 shrink-0 overflow-hidden rounded-xl">
                <Image src={o.image} alt={o.imageAlt} fill sizes="96px" className="object-cover" />
              </div>
              <div>
                <h3 className="text-lg text-navy-900">{o.title}</h3>
                <p className="mt-1 text-sm text-navy-800/75">{o.short}</p>
              </div>
            </Link>
          ))}
        </div>
      </Section>

      <CTASection />
    </>
  );
}
