import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import { Section, Eyebrow, Heading } from "@/components/Section";
import CTASection from "@/components/CTASection";
import PhoneLink from "@/components/PhoneLink";
import JsonLd from "@/components/JsonLd";
import { differentiatorIcons } from "@/components/icons";
import { breadcrumbSchema } from "@/lib/schema";
import { differentiators, process } from "@/lib/site";

export const metadata: Metadata = {
  title: "About Surfrider Pool Service",
  description:
    "Surfrider Pool Service is a local, owner operated pool company in Dunedin, Florida, serving Pinellas County with reliable cleaning and repair.",
  alternates: { canonical: "/about" },
  openGraph: {
    title: "About Surfrider Pool Service | Dunedin's Local Pool Company",
    description:
      "Learn about Surfrider Pool Service, a locally owned pool care company serving Dunedin and Pinellas County. Professional, reliable, and community focused.",
    url: "/about",
  },
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
              and businesses{" "}
              <Link href="/service-areas" className="font-semibold text-ocean-600 hover:text-aqua-500">
                across Pinellas County
              </Link>
              . We specialize in{" "}
              <Link href="/services" className="font-semibold text-ocean-600 hover:text-aqua-500">
                pool cleaning and repair
              </Link>
              , with a focus on reliability and customer satisfaction.
            </p>
            <p className="mt-4 leading-relaxed text-navy-800/75">
              Our goal is simple. A clean, healthy pool should be effortless for the
              people who own it. We handle the cleaning, the{" "}
              <a
                href="https://en.wikipedia.org/wiki/Water_chlorination"
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-ocean-600 underline decoration-aqua-400 underline-offset-2 hover:text-aqua-500"
              >
                chemistry
              </a>
              , and the equipment so you can spend more time enjoying the water and
              less time worrying about upkeep.
            </p>
            <blockquote className="mt-6 rounded-2xl border-l-4 border-aqua-500 bg-aqua-50/60 p-5 text-navy-900">
              &ldquo;A clean, healthy pool should be effortless for the people who own
              it. That is our job, and we take it seriously.&rdquo;
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
        </div>
      </section>

      <Section>
        <div className="mx-auto max-w-2xl text-center">
          <Eyebrow>How It Works</Eyebrow>
          <Heading>Simple from the first call</Heading>
        </div>
        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {process.map((p) => (
            <div key={p.step} className="rounded-2xl border border-aqua-50 bg-white p-6 shadow-sm">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-aqua-500 font-display text-lg font-bold text-navy-950">
                {p.step}
              </div>
              <h3 className="mt-4 text-lg text-navy-900">{p.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-navy-800/80">{p.text}</p>
            </div>
          ))}
        </div>
        <p className="mt-10 inline-flex w-full flex-wrap items-center justify-center gap-x-1 text-center text-navy-800/80">
          Questions? Call us anytime at
          <PhoneLink className="font-semibold text-ocean-600 hover:text-aqua-500" />.
        </p>
      </Section>

      <CTASection />
    </>
  );
}
