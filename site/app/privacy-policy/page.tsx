import type { Metadata } from "next";
import PageHero, { Prose } from "@/components/PageHero";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Privacy policy for Surfrider Pool Service.",
  alternates: { canonical: "/privacy-policy" },
  robots: { index: false, follow: true },
};

const crumbs = [
  { label: "Home", href: "/" },
  { label: "Privacy Policy", href: "/privacy-policy" },
];

export default function PrivacyPage() {
  return (
    <>
      <PageHero title="Privacy Policy" crumbs={crumbs} />
      <article className="py-16 md:py-20">
        <div className="mx-auto max-w-3xl container-px">
          <Prose>
            <p>
              Surfrider Pool Service respects your privacy. This policy explains what
              information we collect and how we use it.
            </p>
            <h2>Information We Collect</h2>
            <p>
              When you contact us through our website, we collect the information you
              provide, such as your name, phone number, email address, and details
              about the service you need. We use this information only to respond to
              your request and provide our services.
            </p>
            <h2>How We Use Your Information</h2>
            <p>
              We use your information to answer your questions, schedule services,
              provide quotes, and communicate with you about your pool care. We do not
              sell or rent your personal information to third parties.
            </p>
            <h2>Data Security</h2>
            <p>
              We take reasonable measures to protect the information you share with us.
              Contact form submissions are processed through a secure service.
            </p>
            <h2>Contact</h2>
            <p>
              If you have questions about this policy, contact us at{" "}
              <a href={`mailto:${site.email}`}>{site.email}</a> or call{" "}
              <a href={site.phoneHref}>{site.phone}</a>.
            </p>
          </Prose>
        </div>
      </article>
    </>
  );
}
