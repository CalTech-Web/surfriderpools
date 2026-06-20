import type { Metadata } from "next";
import Image from "next/image";
import PageHero from "@/components/PageHero";
import { Section, Eyebrow, Heading } from "@/components/Section";
import CTASection from "@/components/CTASection";
import JsonLd from "@/components/JsonLd";
import { breadcrumbSchema } from "@/lib/schema";
import { differentiators, process, site } from "@/lib/site";

export const metadata: Metadata = {
  title: "About Surfrider Pool Service",
  description:
    "Surfrider Pool Service is a local, owner operated pool company in Dunedin, Florida, serving Pinellas County and Tampa Bay with reliable cleaning, repair, and pressure washing.",
  alternates: { canonical: "/about" },
};

const crumbs = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
];

export default function AboutPage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema(crumbs)} />
      <PageHero
        title="About Surfrider Pool Service"
        subtitle="Local, owner operated pool care built on reliability, honest pricing, and real attention to every pool we maintain."
        crumbs={crumbs}
      />

      <Section>
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div className="relative aspect-[4/3] overflow-hidden rounded-3xl shadow-lg">
            <Image
              src="/images/about.jpg"
              alt="Luxury resort swimming pool with clean steps and clear water"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
          <div>
            <Eyebrow>Who We Are</Eyebrow>
            <Heading>Pool care that lets you actually enjoy your pool</Heading>
            <p className="mt-5 text-lg leading-relaxed text-navy-800/85">
              Surfrider Pool Service is a Dunedin based pool company serving homeowners
              and businesses across Pinellas County and the greater Tampa Bay area. We
              specialize in pool cleaning, repair, and pressure washing, with a focus
              on reliability and customer satisfaction.
            </p>
            <p className="mt-4 leading-relaxed text-navy-800/75">
              Our goal is simple. A clean, healthy pool should be effortless for the
              people who own it. We handle the cleaning, the chemistry, and the
              equipment so you can spend more time enjoying the water and less time
              worrying about upkeep.
            </p>
            <blockquote className="mt-6 border-l-4 border-aqua-500 bg-aqua-50/60 p-5 text-navy-900">
              &ldquo;A clean, healthy pool should be effortless for the people who own
              it. That is the whole job, and we take it seriously.&rdquo;
              <footer className="mt-2 text-sm font-semibold text-ocean-600">
                Todd, Owner
              </footer>
            </blockquote>
          </div>
        </div>
      </Section>

      <section className="bg-aqua-50/60 py-16 md:py-24">
        <div className="mx-auto max-w-6xl container-px">
          <div className="mx-auto max-w-2xl text-center">
            <Eyebrow>What Sets Us Apart</Eyebrow>
            <Heading>Why pool owners choose Surfrider</Heading>
          </div>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {differentiators.map((d) => (
              <div key={d.title} className="rounded-2xl border border-aqua-50 bg-white p-6 shadow-sm">
                <h3 className="text-lg text-navy-900">{d.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-navy-800/80">{d.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Section>
        <div className="mx-auto max-w-2xl text-center">
          <Eyebrow>How It Works</Eyebrow>
          <Heading>Simple from the first call</Heading>
        </div>
        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {process.map((p) => (
            <div key={p.step} className="rounded-2xl border border-aqua-50 p-6">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-aqua-500 font-display text-lg font-bold text-navy-950">
                {p.step}
              </div>
              <h3 className="mt-4 text-lg text-navy-900">{p.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-navy-800/80">{p.text}</p>
            </div>
          ))}
        </div>
        <p className="mt-10 text-center text-navy-800/80">
          Questions? Call us anytime at{" "}
          <a href={site.phoneHref} className="font-semibold text-ocean-600">
            {site.phone}
          </a>
          .
        </p>
      </Section>

      <CTASection />
    </>
  );
}
