import { Eyebrow } from "./Section";
import Faq from "./Faq";
import PhoneLink from "./PhoneLink";
import { ChatIcon } from "./icons";
import { site } from "@/lib/site";

export default function FaqSection({
  items,
  eyebrow = "FAQ",
  title = "Questions pool owners ask us",
  intro = "Everything you need to know about our pool cleaning, repair, and pressure washing services. Still have a question? We are only a call away.",
}: {
  items: { q: string; a: string }[];
  eyebrow?: string;
  title?: string;
  intro?: string;
}) {
  return (
    <section className="relative overflow-hidden bg-aqua-50/60 py-16 md:py-24">
      <div className="mx-auto grid max-w-6xl gap-10 container-px lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
        <div className="lg:sticky lg:top-28">
          <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-aqua-500 text-navy-950 shadow-sm">
            <ChatIcon className="h-6 w-6" />
          </span>
          <div className="mt-4">
            <Eyebrow>{eyebrow}</Eyebrow>
          </div>
          <h2 className="mt-3 text-3xl text-navy-900 md:text-4xl text-balance">{title}</h2>
          <p className="mt-4 text-navy-800/80">{intro}</p>

          <div className="mt-6 rounded-2xl border border-aqua-50 bg-white p-6 shadow-sm">
            <p className="font-display text-lg font-semibold text-navy-900">Still have questions?</p>
            <p className="mt-1 text-sm text-navy-800/75">
              Talk to a real, local person who knows pools.
            </p>
            <PhoneLink
              className="mt-4 w-full rounded-full bg-aqua-500 px-6 py-3 text-sm font-semibold text-navy-950 transition-colors hover:bg-aqua-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-aqua-500 focus-visible:ring-offset-2"
              label={`Call ${site.phone}`}
            />
          </div>
        </div>

        <Faq items={items} />
      </div>
    </section>
  );
}
