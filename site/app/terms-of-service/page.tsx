import type { Metadata } from "next";
import PageHero, { Prose } from "@/components/PageHero";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "Terms of service for Surfrider Pool Service.",
  alternates: { canonical: "/terms-of-service" },
  robots: { index: false, follow: true },
};

const crumbs = [
  { label: "Home", href: "/" },
  { label: "Terms of Service", href: "/terms-of-service" },
];

export default function TermsPage() {
  return (
    <>
      <PageHero title="Terms of Service" crumbs={crumbs} />
      <article className="py-16 md:py-20">
        <div className="mx-auto max-w-3xl container-px">
          <Prose>
            <p>
              These terms govern your use of the Surfrider Pool Service website. By
              using this site, you agree to these terms.
            </p>
            <h2>Services</h2>
            <p>
              Surfrider Pool Service provides pool cleaning and repair in Pinellas
              County. Quotes are provided free of charge and service pricing is
              confirmed before work begins.
            </p>
            <h2>Website Content</h2>
            <p>
              We work to keep the information on this site accurate and current.
              Content is provided for general information and may change without
              notice.
            </p>
            <h2>Limitation of Liability</h2>
            <p>
              Surfrider Pool Service is not liable for any indirect or incidental
              damages arising from the use of this website. Service agreements are
              governed by the terms provided at the time of booking.
            </p>
            <h2>Contact</h2>
            <p>
              Questions about these terms? Contact us at{" "}
              <a href={`mailto:${site.email}`}>{site.email}</a> or call{" "}
              <a href={site.phoneHref}>{site.phone}</a>.
            </p>
          </Prose>
        </div>
      </article>
    </>
  );
}
