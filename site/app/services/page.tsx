import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import { Section, Eyebrow, Heading } from "@/components/Section";
import ServiceCard from "@/components/ServiceCard";
import CTASection from "@/components/CTASection";
import FaqSection from "@/components/FaqSection";
import JsonLd from "@/components/JsonLd";
import { breadcrumbSchema, faqSchema } from "@/lib/schema";
import { services, faqs } from "@/lib/site";

export const metadata: Metadata = {
  title: "Pool Services in Pinellas County",
  description:
    "Professional pool cleaning and pool repair across Pinellas County. Explore the full range of services from Surfrider Pool Service.",
  alternates: { canonical: "/services" },
  openGraph: {
    title: "Pool Services in Pinellas County | Surfrider Pool Service",
    description:
      "Pool cleaning and repair for homes and businesses across Pinellas County. One local team for everything your pool needs.",
    url: "/services",
  },
};

const crumbs = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
];

export default function ServicesPage() {
  return (
    <>
      <JsonLd data={[breadcrumbSchema(crumbs), faqSchema(faqs)]} />
      <PageHero
        title="Our Pool Services"
        subtitle="Comprehensive pool care for homes and businesses across Pinellas County. Cleaning and repair, all handled by one local team."
        crumbs={crumbs}
      />

      <Section>
        <div className="mx-auto max-w-2xl text-center">
          <Eyebrow>What We Do</Eyebrow>
          <Heading>One team for everything your pool needs</Heading>
          <p className="mt-4 text-navy-800/80">
            From regular maintenance to expert repairs, we keep your pool clean,
            safe, and enjoyable year round. Choose a service below to learn more.
          </p>
        </div>
        <div className="mt-12 grid gap-6 sm:grid-cols-2">
          {services.map((s) => (
            <ServiceCard key={s.slug} service={s} />
          ))}
        </div>
        <p className="mx-auto mt-10 max-w-2xl text-center text-navy-800/80">
          We serve homeowners across Pinellas County, including{" "}
          <Link href="/service-areas/dunedin" className="font-semibold text-ocean-600 hover:text-aqua-500">
            Dunedin
          </Link>
          ,{" "}
          <Link href="/service-areas/clearwater" className="font-semibold text-ocean-600 hover:text-aqua-500">
            Clearwater
          </Link>
          , and{" "}
          <Link href="/service-areas" className="font-semibold text-ocean-600 hover:text-aqua-500">
            many more nearby areas
          </Link>
          .
        </p>
      </Section>

      <FaqSection items={faqs} eyebrow="Service FAQ" title="Good to know before you book" />

      <CTASection />
    </>
  );
}
