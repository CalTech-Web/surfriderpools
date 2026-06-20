"use client";

import { useState } from "react";
import { services, site } from "@/lib/site";

type Status = "idle" | "sending" | "success" | "error";

export default function ContactForm({ source = "free-quote" }: { source?: string }) {
  const [status, setStatus] = useState<Status>("idle");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const service = data.get("service") as string;
    const phone = data.get("phone") as string;
    const message = (data.get("message") as string) || "";

    setStatus("sending");
    try {
      const res = await fetch("https://forms.caltechweb.com/api/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          site: site.formKey,
          name: data.get("name"),
          email: data.get("email"),
          message: `Service requested: ${service || "Not specified"}\nPhone: ${phone || "Not provided"}\n\n${message}`,
          source,
          turnstileToken:
            (document.querySelector('[name="cf-turnstile-response"]') as HTMLInputElement)?.value ||
            undefined,
        }),
      });
      if (!res.ok) throw new Error("Request failed");
      setStatus("success");
      form.reset();
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="rounded-2xl border border-aqua-50 bg-aqua-50 p-8 text-center">
        <h3 className="text-xl text-navy-900">Thank you!</h3>
        <p className="mt-2 text-navy-800">
          We received your message and will reach out within one business day. For
          anything urgent, call{" "}
          <a href={site.phoneHref} className="font-semibold text-ocean-600">
            {site.phone}
          </a>
          .
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="grid gap-4">
      <div className="grid gap-4 sm:grid-cols-2">
        <Field label="Name" name="name" required />
        <Field label="Phone" name="phone" type="tel" />
      </div>
      <Field label="Email" name="email" type="email" required />
      <label className="grid gap-1.5 text-sm">
        <span className="font-medium text-navy-900">Service needed</span>
        <select
          name="service"
          className="rounded-lg border border-aqua-50 bg-white px-3 py-2.5 text-navy-900 outline-none focus:border-ocean-500"
          defaultValue=""
        >
          <option value="" disabled>
            Select a service
          </option>
          {services.map((s) => (
            <option key={s.slug} value={s.title}>
              {s.title}
            </option>
          ))}
          <option value="Other">Other / Not sure</option>
        </select>
      </label>
      <label className="grid gap-1.5 text-sm">
        <span className="font-medium text-navy-900">How can we help?</span>
        <textarea
          name="message"
          rows={4}
          className="rounded-lg border border-aqua-50 bg-white px-3 py-2.5 text-navy-900 outline-none focus:border-ocean-500"
          placeholder="Tell us about your pool and what you need."
        />
      </label>

      {/* Turnstile widget mounts here once the site key is added */}
      <div className="cf-turnstile" data-sitekey="" />

      <button
        type="submit"
        disabled={status === "sending"}
        className="rounded-full bg-aqua-500 px-6 py-3 text-sm font-semibold text-navy-950 transition-colors hover:bg-aqua-400 disabled:opacity-60"
      >
        {status === "sending" ? "Sending..." : "Request My Free Quote"}
      </button>

      {status === "error" && (
        <p className="text-sm text-red-600">
          Something went wrong. Please call us at {site.phone} or try again.
        </p>
      )}
    </form>
  );
}

function Field({
  label,
  name,
  type = "text",
  required = false,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
}) {
  return (
    <label className="grid gap-1.5 text-sm">
      <span className="font-medium text-navy-900">
        {label}
        {required && <span className="text-ocean-600"> *</span>}
      </span>
      <input
        type={type}
        name={name}
        required={required}
        className="rounded-lg border border-aqua-50 bg-white px-3 py-2.5 text-navy-900 outline-none focus:border-ocean-500"
      />
    </label>
  );
}
