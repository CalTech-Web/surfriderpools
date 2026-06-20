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
    <section className="bg-wave">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-6 container-px py-16 text-center md:py-20">
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
