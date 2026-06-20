import Link from "next/link";
import { site } from "@/lib/site";

export default function CTASection({
  title = "Ready for a cleaner, healthier pool?",
  text = "Get a free, no pressure quote today. Call us or send a message and we will take it from there.",
}: {
  title?: string;
  text?: string;
}) {
  return (
    <section className="relative overflow-hidden bg-wave">
      {/* decorative SVG background */}
      <svg
        className="pointer-events-none absolute inset-0 h-full w-full"
        aria-hidden="true"
        preserveAspectRatio="xMidYMid slice"
        viewBox="0 0 1200 400"
        fill="none"
      >
        {/* bubbles */}
        <g fill="#ffffff" opacity="0.07">
          <circle cx="150" cy="80" r="40" />
          <circle cx="1050" cy="120" r="64" />
          <circle cx="980" cy="40" r="22" />
          <circle cx="280" cy="330" r="30" />
          <circle cx="640" cy="370" r="48" />
        </g>
        {/* flowing waves */}
        <path
          d="M0 300 C 200 250, 400 350, 600 300 S 1000 250, 1200 300 V400 H0 Z"
          fill="#ffffff"
          opacity="0.06"
        />
        <path
          d="M0 340 C 250 300, 450 390, 700 340 S 1050 300, 1200 345 V400 H0 Z"
          fill="#07172b"
          opacity="0.18"
        />
      </svg>

      <div className="relative mx-auto flex max-w-6xl flex-col items-center gap-6 container-px py-16 text-center md:py-20">
        <h2 className="max-w-2xl text-3xl text-white md:text-4xl text-balance">{title}</h2>
        <p className="max-w-xl text-white/85">{text}</p>
        <div className="flex flex-col gap-3 sm:flex-row">
          <Link
            href="/contact"
            className="rounded-full bg-aqua-500 px-7 py-3.5 text-sm font-semibold text-navy-950 transition-colors hover:bg-aqua-400"
          >
            Get a Free Quote
          </Link>
          <a
            href={site.phoneHref}
            className="rounded-full border border-white/50 px-7 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-white/10"
          >
            Call {site.phone}
          </a>
        </div>
      </div>
    </section>
  );
}
