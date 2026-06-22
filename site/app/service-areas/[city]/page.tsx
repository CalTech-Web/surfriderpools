import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import PageHero from "@/components/PageHero";
import { Section, Eyebrow, Heading } from "@/components/Section";
import ServiceCard from "@/components/ServiceCard";
import FaqSection from "@/components/FaqSection";
import PhoneLink from "@/components/PhoneLink";
import CTASection from "@/components/CTASection";
import JsonLd from "@/components/JsonLd";
import { differentiatorIcons } from "@/components/icons";
import { breadcrumbSchema } from "@/lib/schema";
import { services, faqs, differentiators, site } from "@/lib/site";
import { cities, getCityBySlug } from "@/lib/cities";

export function generateStaticParams() {
  return cities.map((c) => ({ city: c.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ city: string }>;
}): Promise<Metadata> {
  const { city: citySlug } = await params;
  const city = getCityBySlug(citySlug);
  if (!city) return {};

  const title = `Pool Service in ${city.name}, FL | Surfrider Pool Service`;
  const description = `Surfrider Pool Service provides reliable pool cleaning and repair in ${city.name}, FL. Chemicals included, free quotes. Call 727.403.7088.`;

  return {
    title,
    description,
    alternates: { canonical: `/service-areas/${city.slug}` },
    openGraph: {
      title,
      description,
      url: `/service-areas/${city.slug}`,
    },
  };
}

export default async function CityPage({
  params,
}: {
  params: Promise<{ city: string }>;
}) {
  const { city: citySlug } = await params;
  const city = getCityBySlug(citySlug);
  if (!city) notFound();

  const idx = cities.findIndex((c) => c.slug === city.slug);
  const nearby = cities[(idx + 1) % cities.length];

  const crumbs = [
    { label: "Home", href: "/" },
    { label: "Service Areas", href: "/service-areas" },
    { label: city.name, href: `/service-areas/${city.slug}` },
  ];

  const cityLocalBusiness = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": `${site.url}/service-areas/${city.slug}/#business`,
    name: site.name,
    url: `${site.url}/service-areas/${city.slug}`,
    telephone: site.phone,
    email: site.email,
    priceRange: "$$",
    address: {
      "@type": "PostalAddress",
      streetAddress: site.address.street,
      addressLocality: site.address.city,
      addressRegion: site.address.state,
      postalCode: site.address.zip,
      addressCountry: "US",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: site.geo.lat,
      longitude: site.geo.lng,
    },
    areaServed: { "@type": "City", name: city.name, addressRegion: "FL" },
    description: `Surfrider Pool Service provides pool cleaning and repair in ${city.name}, FL.`,
  };

  return (
    <>
      <JsonLd data={[cityLocalBusiness, breadcrumbSchema(crumbs)]} />

      <PageHero
        title={city.h1}
        subtitle={`Reliable pool cleaning and repair for ${city.name} homeowners. Free quotes, chemicals included.`}
        crumbs={crumbs}
      />

      {/* INTRO + NEIGHBORHOODS */}
      <Section>
        <div className="grid items-start gap-12 lg:grid-cols-2">
          {/* left: intro text + care tip */}
          <div>
            <Eyebrow>Pool Care in {city.name}</Eyebrow>
            <Heading>Your local pool team in {city.name}</Heading>
            <p className="mt-5 text-lg leading-relaxed text-navy-800/85">{city.introParagraph}</p>
            <p className="mt-4 leading-relaxed text-navy-800/75">
              From{" "}
              <Link href="/services" className="font-semibold text-ocean-600 hover:text-aqua-500">
                weekly pool cleaning to repairs
              </Link>
              , our {city.name} customers get dependable, local care. We also serve nearby{" "}
              <Link
                href={`/service-areas/${nearby.slug}`}
                className="font-semibold text-ocean-600 hover:text-aqua-500"
              >
                {nearby.name}
              </Link>
              .
            </p>

            {/* neighborhoods chip row */}
            <div className="mt-8">
              <p className="text-sm font-semibold uppercase tracking-wider text-navy-900/60">
                Neighborhoods we serve
              </p>
              <div className="mt-3 flex flex-wrap gap-2">
                {city.neighborhoods.map((n) => (
                  <span
                    key={n}
                    className="inline-flex items-center rounded-full border border-aqua-300 bg-aqua-50 px-4 py-1.5 text-sm font-medium text-ocean-600"
                  >
                    {n}
                  </span>
                ))}
              </div>
            </div>

            {/* local tip callout */}
            <div className="mt-8 rounded-2xl border border-aqua-200 bg-aqua-50/60 p-5">
              <p className="font-semibold text-navy-900">Local pool care tip</p>
              <p className="mt-1 text-sm leading-relaxed text-navy-800/80">{city.poolCareNote}</p>
            </div>

            <p className="mt-6 inline-flex flex-wrap items-center gap-x-1 text-navy-800/75">
              Not sure if we reach your street?
              <PhoneLink className="font-semibold text-ocean-600 hover:text-aqua-500" label={`Call ${site.phone}`} />
              and we will let you know right away.
            </p>
          </div>

          {/* right: pool image */}
          <div className="relative aspect-[4/3] overflow-hidden rounded-3xl shadow-lg lg:mt-2">
            <Image
              src="/images/gallery-2.jpg"
              alt={`Pool service in ${city.name}, FL`}
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
        </div>
      </Section>

      {/* SERVICES */}
      <section className="bg-aqua-50/60 py-16 md:py-24">
        <div className="mx-auto max-w-6xl container-px">
          <div className="mx-auto max-w-2xl text-center">
            <Eyebrow>What We Offer</Eyebrow>
            <Heading>Pool services available in {city.name}</Heading>
            <p className="mt-4 text-navy-800/80">
              All three services are available to {city.name} homeowners and businesses. Chemicals are always included.
            </p>
          </div>
          <div className="mt-10 grid gap-6 sm:grid-cols-2">
            {services.map((s) => (
              <ServiceCard key={s.slug} service={s} />
            ))}
          </div>
          <div className="mt-10 text-center">
            <Link
              href="/contact"
              className="inline-flex rounded-full bg-navy-900 px-7 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-navy-800"
            >
              Get a Free Quote
            </Link>
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <Section>
        <div className="mx-auto max-w-2xl text-center">
          <Eyebrow>Why Choose Surfrider</Eyebrow>
          <Heading>What sets us apart in {city.name}</Heading>
        </div>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {differentiators.map((d, i) => {
            const Icon = differentiatorIcons[i % differentiatorIcons.length];
            return (
              <div
                key={d.title}
                className="group rounded-2xl border border-aqua-50 bg-white p-6 shadow-sm transition-all hover:-translate-y-1 hover:border-aqua-300 hover:shadow-md"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-aqua-50 text-ocean-600 transition-colors group-hover:bg-aqua-500 group-hover:text-navy-950">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="mt-4 text-lg text-navy-900">{d.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-navy-800/80">{d.text}</p>
              </div>
            );
          })}
        </div>
      </Section>

      <FaqSection
        items={faqs}
        eyebrow={`${city.name} Pool FAQs`}
        title={`Common pool questions from ${city.name} homeowners`}
      />

      <CTASection
        title={`Ready for a cleaner pool in ${city.name}?`}
        text={`Get a free, no-obligation quote for pool service in ${city.name}, FL. Call us or send a message and we will take it from there.`}
      />
    </>
  );
}
