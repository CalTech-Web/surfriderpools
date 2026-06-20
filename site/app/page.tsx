import Image from "next/image";
import Link from "next/link";
import { Section, Eyebrow, Heading } from "@/components/Section";
import ServiceCard from "@/components/ServiceCard";
import CTASection from "@/components/CTASection";
import FaqSection from "@/components/FaqSection";
import PhoneLink from "@/components/PhoneLink";
import JsonLd from "@/components/JsonLd";
import { PulsingMarker } from "@/components/icons";
import { faqSchema } from "@/lib/schema";
import { services, differentiators, process, faqs, serviceAreas, site } from "@/lib/site";

export default function Home() {
  return (
    <>
      <JsonLd data={faqSchema(faqs)} />

      {/* HERO */}
      <section className="relative overflow-hidden bg-navy-950">
        <Image
          src="/images/hero-pool.jpg"
          alt="Sparkling clean screened in swimming pool in Florida"
          fill
          priority
          sizes="100vw"
          className="object-cover opacity-45"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-navy-950/90 via-navy-950/70 to-transparent" />
        <div className="relative mx-auto max-w-6xl container-px py-24 md:py-32">
          <div className="max-w-2xl animate-fade-up">
            <Eyebrow>Pinellas County, Florida</Eyebrow>
            <h1 className="mt-3 text-4xl font-extrabold leading-tight text-white md:text-6xl text-balance">
              Your trusted partner for professional pool care
            </h1>
            <p className="mt-5 max-w-xl text-lg text-white/85">
              Surfrider Pool Service keeps your pool clean, safe, and ready to swim
              all year. Cleaning, repair, and pressure washing for homes and
              businesses across Pinellas County and Tampa Bay.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/contact"
                className="rounded-full bg-aqua-500 px-7 py-3.5 text-center text-sm font-semibold text-navy-950 transition-colors hover:bg-aqua-400"
              >
                Get a Free Quote
              </Link>
              <PhoneLink
                className="rounded-full border border-white/40 px-7 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-white/10"
                label={`Call ${site.phone}`}
              />
            </div>
            <div className="mt-8 flex flex-wrap gap-x-6 gap-y-2 text-sm text-white/75">
              <span className="flex items-center gap-2"><Check /> Chemicals included</span>
              <span className="flex items-center gap-2"><Check /> Free quotes</span>
              <span className="flex items-center gap-2"><Check /> Local & owner operated</span>
            </div>
          </div>
        </div>
      </section>

      {/* TRUST STRIP */}
      <section className="border-b border-aqua-50 bg-white">
        <div className="mx-auto grid max-w-6xl grid-cols-2 container-px py-5 gap-y-4 sm:grid-cols-4 sm:gap-y-0 sm:divide-x sm:divide-aqua-50">
          <div className="flex items-center gap-3 sm:px-6 first:pl-0 last:pr-0">
            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-aqua-50 text-ocean-600">
              <MapPin />
            </span>
            <div>
              <p className="text-sm font-bold text-navy-900">Dunedin, FL</p>
              <p className="text-xs text-navy-800/65">Local, owner operated</p>
            </div>
          </div>
          <div className="flex items-center gap-3 sm:px-6">
            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-aqua-50 text-ocean-600">
              <Tag />
            </span>
            <div>
              <p className="text-sm font-bold text-navy-900">Free Quotes</p>
              <p className="text-xs text-navy-800/65">On every service</p>
            </div>
          </div>
          <div className="flex items-center gap-3 sm:px-6">
            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-aqua-50 text-ocean-600">
              <Flask />
            </span>
            <div>
              <p className="text-sm font-bold text-navy-900">Chemicals Included</p>
              <p className="text-xs text-navy-800/65">No hidden add-ons</p>
            </div>
          </div>
          <div className="flex items-center gap-3 sm:px-6 last:pr-0">
            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-aqua-50 text-ocean-600">
              <Clock />
            </span>
            <div>
              <p className="text-sm font-bold text-navy-900">Mon to Sat</p>
              <p className="text-xs text-navy-800/65">8:00 AM to 6:00 PM</p>
            </div>
          </div>
        </div>
      </section>

      {/* INTRO */}
      <Section>
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div>
            <Eyebrow>Welcome to Surfrider Pool Service</Eyebrow>
            <Heading>Your trusted pool care partner in Pinellas County</Heading>
            <p className="mt-5 text-lg leading-relaxed text-navy-800/85">
              Surfrider Pool Service is dedicated to making pool care effortless. We
              provide reliable cleaning, repair, and parts services with a focus on
              quality and customer satisfaction, so your pool stays a source of
              enjoyment and relaxation, not a chore.
            </p>
            <p className="mt-4 leading-relaxed text-navy-800/75">
              We are local, owner operated, and proud to serve homeowners and
              businesses throughout Pinellas County and the greater Tampa Bay area.
            </p>
            <Link href="/about" className="mt-6 inline-flex items-center gap-1 font-semibold text-ocean-600">
              Read more about us
              <Arrow />
            </Link>
          </div>
          <div className="relative aspect-[4/3] overflow-hidden rounded-3xl shadow-lg">
            <Image
              src="/images/pool-lanai.jpg"
              alt="Beautiful screened swimming pool maintained by Surfrider Pool Service"
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
            <Eyebrow>Our Pool Services</Eyebrow>
            <Heading>Comprehensive solutions for your pool needs</Heading>
            <p className="mt-4 text-navy-800/80">
              From regular maintenance to repairs and outdoor cleaning, our
              experienced team keeps your pool in top condition all year.
            </p>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {services.map((s) => (
              <ServiceCard key={s.slug} service={s} />
            ))}
          </div>
          <div className="mt-10 text-center">
            <Link
              href="/services"
              className="inline-flex rounded-full bg-navy-900 px-7 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-navy-800"
            >
              View All Services
            </Link>
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <Section>
        <div className="mx-auto max-w-2xl text-center">
          <Eyebrow>Why Choose Us</Eyebrow>
          <Heading>Pool care you can actually count on</Heading>
        </div>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {differentiators.map((d, i) => (
            <div key={d.title} className="rounded-2xl border border-aqua-50 bg-white p-6 shadow-sm transition-shadow hover:shadow-md">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-aqua-50 text-ocean-600">
                <DiffIcon index={i} />
              </div>
              <h3 className="mt-4 text-lg text-navy-900">{d.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-navy-800/80">{d.text}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* PROCESS */}
      <section className="bg-navy-950 py-16 text-white md:py-24">
        <div className="mx-auto max-w-6xl container-px">
          <div className="mx-auto max-w-2xl text-center">
            <span className="text-sm font-semibold uppercase tracking-wider text-aqua-300">
              How It Works
            </span>
            <h2 className="mt-3 text-3xl md:text-4xl text-balance">Getting started is simple</h2>
          </div>
          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {process.map((p) => (
              <div key={p.step}>
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-aqua-500 font-display text-lg font-bold text-navy-950">
                  {p.step}
                </div>
                <h3 className="mt-4 text-lg text-white">{p.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-white/70">{p.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICE AREAS */}
      <Section>
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div className="relative aspect-[4/3] overflow-hidden rounded-3xl shadow-lg">
            <Image
              src="/images/gallery-1.jpg"
              alt="Resort style pool in the Tampa Bay area"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
          <div>
            <Eyebrow>Service Areas</Eyebrow>
            <Heading>Proudly serving Pinellas County and Tampa Bay</Heading>
            <p className="mt-5 text-navy-800/80">
              We provide pool cleaning, repair, and pressure washing across the area,
              including:
            </p>
            <ul className="mt-6 grid grid-cols-2 gap-x-6 gap-y-3 text-navy-800">
              {serviceAreas.map((area) => (
                <li key={area} className="flex items-center gap-2 text-sm">
                  <PulsingMarker />
                  {area}
                </li>
              ))}
            </ul>
            <Link href="/service-areas" className="mt-6 inline-flex items-center gap-1 font-semibold text-ocean-600">
              See all service areas
              <Arrow />
            </Link>
          </div>
        </div>
      </Section>

      {/* FAQ */}
      <FaqSection items={faqs} />

      <CTASection />
    </>
  );
}

function Check() {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
      <path d="M3 9.5 7 13l8-8.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function Arrow() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
      <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

// Trust strip icons
function MapPin() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
      <path d="M10 2a6 6 0 0 1 6 6c0 4-6 10-6 10S4 12 4 8a6 6 0 0 1 6-6Z" stroke="currentColor" strokeWidth="1.7" strokeLinejoin="round" />
      <circle cx="10" cy="8" r="2" stroke="currentColor" strokeWidth="1.7" />
    </svg>
  );
}
function Tag() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
      <path d="M2.5 10.5 9.5 3.5a1 1 0 0 1 .7-.3H16a.5.5 0 0 1 .5.5v5.8a1 1 0 0 1-.3.7l-7 7a1 1 0 0 1-1.4 0l-5.3-5.3a1 1 0 0 1 0-1.4Z" stroke="currentColor" strokeWidth="1.7" strokeLinejoin="round" />
      <circle cx="14" cy="6" r="1" fill="currentColor" />
    </svg>
  );
}
function Flask() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
      <path d="M7 2h6M8 2v6L4.5 14A2 2 0 0 0 6.3 17h7.4a2 2 0 0 0 1.8-3L12 8V2" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M5.5 13h9" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
    </svg>
  );
}
function Clock() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
      <circle cx="10" cy="10" r="7.5" stroke="currentColor" strokeWidth="1.7" />
      <path d="M10 6v4l2.5 2.5" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

// Differentiator card icons (one per card, in order)
const diffIcons = [
  // Local and owner operated
  (
    <svg key="local" width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
      <path d="M10 2a6 6 0 0 1 6 6c0 4-6 10-6 10S4 12 4 8a6 6 0 0 1 6-6Z" stroke="currentColor" strokeWidth="1.7" strokeLinejoin="round" />
      <circle cx="10" cy="8" r="2" stroke="currentColor" strokeWidth="1.7" />
    </svg>
  ),
  // Chemicals included
  (
    <svg key="flask" width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
      <path d="M7 2h6M8 2v6L4.5 14A2 2 0 0 0 6.3 17h7.4a2 2 0 0 0 1.8-3L12 8V2" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M5.5 13h9" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
    </svg>
  ),
  // One team for everything
  (
    <svg key="wrench" width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
      <path d="M14.5 2a3.5 3.5 0 0 0-3.4 4.2L4 13.3A2 2 0 1 0 6.7 16l7.1-7.1A3.5 3.5 0 0 0 18 5.5a3.4 3.4 0 0 0-.4-1.6l-2.1 2.1-1.5-1.5L16.1 2.4A3.5 3.5 0 0 0 14.5 2Z" stroke="currentColor" strokeWidth="1.7" strokeLinejoin="round" />
    </svg>
  ),
  // Honest pricing
  (
    <svg key="tag" width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
      <path d="M2.5 10.5 9.5 3.5a1 1 0 0 1 .7-.3H16a.5.5 0 0 1 .5.5v5.8a1 1 0 0 1-.3.7l-7 7a1 1 0 0 1-1.4 0l-5.3-5.3a1 1 0 0 1 0-1.4Z" stroke="currentColor" strokeWidth="1.7" strokeLinejoin="round" />
      <circle cx="14" cy="6" r="1" fill="currentColor" />
    </svg>
  ),
  // Flexible scheduling
  (
    <svg key="calendar" width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
      <rect x="2.5" y="3.5" width="15" height="14" rx="2" stroke="currentColor" strokeWidth="1.7" />
      <path d="M2.5 8.5h15M6.5 2v3M13.5 2v3" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
      <circle cx="7" cy="12" r="1" fill="currentColor" />
      <circle cx="10" cy="12" r="1" fill="currentColor" />
      <circle cx="13" cy="12" r="1" fill="currentColor" />
    </svg>
  ),
  // Free quotes
  (
    <svg key="quote" width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
      <path d="M3 5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H7l-4 2V5Z" stroke="currentColor" strokeWidth="1.7" strokeLinejoin="round" />
      <path d="M7 8h6M7 11h4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  ),
];

function DiffIcon({ index }: { index: number }) {
  return diffIcons[index] ?? <Check />;
}
