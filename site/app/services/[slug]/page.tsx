import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import PageHero from "@/components/PageHero";
import { Section, Eyebrow, Heading } from "@/components/Section";
import CTASection from "@/components/CTASection";
import FaqSection from "@/components/FaqSection";
import PhoneLink from "@/components/PhoneLink";
import JsonLd from "@/components/JsonLd";
import { CheckIcon } from "@/components/icons";
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
            <p
              className="mt-5 text-lg leading-relaxed text-navy-800/85 [&_a]:font-semibold [&_a]:text-ocean-600 [&_a]:underline [&_a]:decoration-aqua-400 [&_a]:underline-offset-2 hover:[&_a]:text-aqua-500"
              dangerouslySetInnerHTML={{ __html: service.blurb }}
            />
            <p className="mt-4 text-navy-800/75">
              Available to homeowners and businesses{" "}
              <Link href="/service-areas" className="font-semibold text-ocean-600 hover:text-aqua-500">
                throughout Pinellas County
              </Link>
              .
            </p>
            <ul className="mt-6 space-y-3">
              {service.features.map((f) => (
                <li key={f} className="flex items-start gap-3 text-navy-800">
                  <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-aqua-50 text-ocean-600">
                    <CheckIcon className="h-3.5 w-3.5" />
                  </span>
                  <span
                    className="[&_a]:font-semibold [&_a]:text-ocean-600 [&_a]:underline [&_a]:decoration-aqua-400 [&_a]:underline-offset-2 hover:[&_a]:text-aqua-500"
                    dangerouslySetInnerHTML={{ __html: f }}
                  />
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
              <PhoneLink
                className="rounded-full border border-navy-900 px-7 py-3.5 text-sm font-semibold text-navy-900 transition-colors hover:bg-navy-900 hover:text-white"
                label={`Call ${site.phone}`}
              />
            </div>
          </div>
        </div>
      </Section>

      <FaqSection items={faqs} eyebrow="Common Questions" title={`${service.title} questions, answered`} />

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
