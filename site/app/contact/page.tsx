import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import { Section } from "@/components/Section";
import ContactForm from "@/components/ContactForm";
import PhoneLink from "@/components/PhoneLink";
import JsonLd from "@/components/JsonLd";
import { breadcrumbSchema } from "@/lib/schema";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact Us & Free Quotes",
  description:
    "Contact Surfrider Pool Service in Dunedin, Florida for a free pool cleaning, repair, or pressure washing quote. Call 727.453.1330 or send a message.",
  alternates: { canonical: "/contact" },
  openGraph: {
    title: "Contact Surfrider Pool Service | Free Pool Care Quotes",
    description:
      "Get in touch with Surfrider Pool Service for a free quote on pool cleaning, repair, or pressure washing in Pinellas County. Call 727.453.1330.",
    url: "/contact",
  },
};

const crumbs = [
  { label: "Home", href: "/" },
  { label: "Contact", href: "/contact" },
];

export default function ContactPage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema(crumbs)} />
      <PageHero
        title="Get in Touch"
        subtitle="Have a question or need a quote? Our team is here to help with all your pool needs."
        crumbs={crumbs}
      />

      <Section>
        <div className="grid gap-12 lg:grid-cols-[1fr_1.1fr]">
          <div>
            <h2 className="text-2xl text-navy-900">Request your free quote</h2>
            <p className="mt-3 text-navy-800/80">
              Whether you want to schedule a service, request a quote, or just have a
              question, reach out and we will get back to you quickly.
            </p>

            <dl className="mt-8 space-y-5">
              <ContactRow label="Phone">
                <PhoneLink className="font-semibold text-ocean-600 hover:text-aqua-500" />
              </ContactRow>
              <ContactRow label="Email">
                <a href={`mailto:${site.email}`} className="font-semibold text-ocean-600 hover:text-aqua-500">
                  {site.email}
                </a>
              </ContactRow>
              <ContactRow label="Address">{site.address.full}</ContactRow>
              <ContactRow label="Hours">{site.hours}</ContactRow>
              <ContactRow label="Service Area">
                Pinellas County and the greater Tampa Bay area
              </ContactRow>
            </dl>
          </div>

          <div className="rounded-3xl border border-aqua-50 bg-white p-6 shadow-sm md:p-8">
            <ContactForm source="free-quote" />
          </div>
        </div>
      </Section>
    </>
  );
}

function ContactRow({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div className="flex gap-4">
      <dt className="w-28 shrink-0 text-sm font-semibold uppercase tracking-wider text-navy-900/60">
        {label}
      </dt>
      <dd className="text-navy-800">{children}</dd>
    </div>
  );
}
