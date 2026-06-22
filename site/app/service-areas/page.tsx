import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import { Section, Eyebrow, Heading } from "@/components/Section";
import ServiceCard from "@/components/ServiceCard";
import CTASection from "@/components/CTASection";
import PhoneLink from "@/components/PhoneLink";
import JsonLd from "@/components/JsonLd";
import { PulsingMarker } from "@/components/icons";
import { breadcrumbSchema } from "@/lib/schema";
import { serviceAreas, services, site } from "@/lib/site";
import { cities } from "@/lib/cities";

export const metadata: Metadata = {
  title: "Service Areas in Pinellas County",
  description:
    "Surfrider Pool Service provides pool cleaning and repair in Dunedin, Clearwater, Palm Harbor, Tarpon Springs, Safety Harbor, Oldsmar, and across Pinellas County.",
  alternates: { canonical: "/service-areas" },
  openGraph: {
    title: "Service Areas in Pinellas County | Surfrider Pool Service",
    description:
      "Surfrider Pool Service provides pool cleaning and repair in Dunedin, Clearwater, Palm Harbor, Tarpon Springs, Safety Harbor, Oldsmar, and across Pinellas County.",
    url: "/service-areas",
  },
};

const crumbs = [
  { label: "Home", href: "/" },
  { label: "Service Areas", href: "/service-areas" },
];

export default function ServiceAreasPage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema(crumbs)} />
      <PageHero
        title="Service Areas"
        subtitle="Proudly serving Pinellas County with reliable, local pool care."
        crumbs={crumbs}
      />

      <Section>
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div>
            <Eyebrow>Where We Work</Eyebrow>
            <Heading>Local pool care across Pinellas County</Heading>
            <p className="mt-5 text-lg leading-relaxed text-navy-800/85">
              Based in Dunedin, we serve homeowners and businesses throughout the
              area. If you do not see your town listed, give us a call. There is a
              good chance we cover it.
            </p>
            <ul className="mt-8 grid grid-cols-2 gap-x-4 gap-y-3 sm:grid-cols-3">
              {cities.map((city) => (
                <li key={city.slug}>
                  <Link
                    href={`/service-areas/${city.slug}`}
                    className="flex items-center gap-2.5 font-semibold text-ocean-600 hover:text-aqua-500 transition-colors"
                  >
                    <PulsingMarker />
                    {city.name}
                  </Link>
                </li>
              ))}
              {serviceAreas
                .filter((area) => !cities.some((c) => c.name === area))
                .map((area) => (
                  <li key={area} className="flex items-center gap-2.5 text-navy-800">
                    <PulsingMarker />
                    {area}
                  </li>
                ))}
            </ul>
            <p className="mt-8 inline-flex flex-wrap items-center gap-x-1 text-navy-800/80">
              Not sure if we reach you?
              <PhoneLink className="font-semibold text-ocean-600 hover:text-aqua-500" label={`Call ${site.phone}`} />
              and we will let you know right away.
            </p>
            <div className="mt-6 rounded-2xl border border-aqua-50 bg-aqua-50/60 p-5 text-sm text-navy-800/85">
              <p><span className="font-semibold text-navy-900">Hours:</span> {site.hours}</p>
              <p className="mt-1.5">{site.emergencyNote}</p>
            </div>
          </div>
          <div className="relative aspect-[4/3] overflow-hidden rounded-3xl shadow-lg">
            <Image
              src="/images/gallery-4.jpg"
              alt="Backyard pool and outdoor living space in Pinellas County"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
        </div>
      </Section>

      <section className="bg-aqua-50/60 py-16 md:py-24">
        <div className="mx-auto max-w-6xl container-px">
          <div className="mx-auto max-w-2xl text-center">
            <Eyebrow>Available Everywhere We Serve</Eyebrow>
            <Heading>Services offered in your area</Heading>
            <p className="mt-4 text-navy-800/80">
              From weekly cleaning to repairs, one local team handles it all.
            </p>
          </div>
          <div className="mt-10 grid gap-6 sm:grid-cols-2">
            {services.map((s) => (
              <ServiceCard key={s.slug} service={s} />
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
