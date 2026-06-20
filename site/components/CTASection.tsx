import Link from "next/link";
import { site } from "@/lib/site";
import PhoneLink from "./PhoneLink";

export default function CTASection({
  title = "Ready for a cleaner, healthier pool?",
  text = "Get a free, no-pressure quote today. Call us or send a message and we will take it from there.",
}: {
  title?: string;
  text?: string;
}) {
  return (
    <section className="relative overflow-hidden bg-wave">
      {/* decorative animated pool waves */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
        <WaveLayer color="#ffffff" opacity={0.08} duration="18s" heightClass="h-24 md:h-36" />
        <WaveLayer color="#22cce4" opacity={0.16} duration="12s" reverse heightClass="h-20 md:h-28" />
        <WaveLayer color="#07172b" opacity={0.32} duration="9s" heightClass="h-14 md:h-20" />
      </div>

      <div className="relative mx-auto flex max-w-6xl flex-col items-center gap-6 container-px py-16 text-center md:py-20">
        <h2 className="max-w-2xl text-3xl text-white md:text-4xl text-balance">{title}</h2>
        <p className="max-w-xl text-white/85">{text}</p>
        <div className="flex flex-col gap-3 sm:flex-row">
          <Link
            href="/contact"
            className="rounded-full bg-aqua-500 px-7 py-3.5 text-sm font-semibold text-navy-950 transition-colors hover:bg-aqua-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-transparent"
          >
            Get a Free Quote
          </Link>
          <PhoneLink
            className="rounded-full border border-white/50 px-7 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
            label={`Call ${site.phone}`}
          />
        </div>
      </div>
    </section>
  );
}

const WAVE_PATH =
  "M0,40 C240,90 480,90 720,40 C960,-10 1200,-10 1440,40 L1440,120 L0,120 Z";

function WaveLayer({
  color,
  opacity,
  duration,
  reverse = false,
  heightClass,
}: {
  color: string;
  opacity: number;
  duration: string;
  reverse?: boolean;
  heightClass: string;
}) {
  return (
    <div
      className={`absolute bottom-0 left-0 flex w-[200%] animate-wave ${heightClass}`}
      style={{
        animationDuration: duration,
        animationDirection: reverse ? "reverse" : "normal",
      }}
    >
      {[0, 1].map((i) => (
        <svg
          key={i}
          className="h-full w-1/2 shrink-0"
          viewBox="0 0 1440 120"
          preserveAspectRatio="none"
          fill={color}
          fillOpacity={opacity}
        >
          <path d={WAVE_PATH} />
        </svg>
      ))}
    </div>
  );
}
