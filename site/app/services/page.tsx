import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import { Section, Eyebrow, Heading } from "@/components/Section";
import ServiceCard from "@/components/ServiceCard";
import CTASection from "@/components/CTASection";
import Faq from "@/components/Faq";
import JsonLd from "@/components/JsonLd";
import { breadcrumbSchema, faqSchema } from "@/lib/schema";
import { services, faqs } from "@/lib/site";

export const metadata: Metadata = {
  title: "Pool Services in Pinellas County",
  description:
    "Professional pool cleaning, pool repair, and pressure washing across Pinellas County and Tampa Bay. Explore the full range of services from Surfrider Pool Service.",
  alternates: { canonical: "/services" },
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
        subtitle="Comprehensive pool care for homes and businesses across Pinellas County and Tampa Bay. Cleaning, repair, and pressure washing, all handled by one local team."
        crumbs={crumbs}
      />

      <Section>
        <div className="mx-auto max-w-2xl text-center">
          <Eyebrow>What We Do</Eyebrow>
          <Heading>One team for everything your pool needs</Heading>
          <p className="mt-4 text-navy-800/80">
            From regular maintenance to repairs and outdoor surfaces, we keep your
            pool clean, safe, and enjoyable year round. Choose a service below to
            learn more.
          </p>
        </div>
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {services.map((s) => (
            <ServiceCard key={s.slug} service={s} />
          ))}
        </div>
      </Section>

      <section className="bg-aqua-50/60 py-16 md:py-24">
        <div className="mx-auto max-w-6xl container-px">
          <div className="mx-auto max-w-2xl text-center">
            <Eyebrow>Service FAQ</Eyebrow>
            <Heading>Good to know before you book</Heading>
          </div>
          <div className="mt-10">
            <Faq items={faqs} />
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
