import Link from "next/link";
import Image from "next/image";
import { ReactNode } from "react";

export default function PageHero({
  title,
  subtitle,
  crumbs,
}: {
  title: string;
  subtitle?: string;
  crumbs?: { label: string; href: string }[];
}) {
  return (
    <section className="relative flex min-h-[400px] items-center overflow-hidden bg-wave">
      {/* rippling pool water texture */}
      <Image
        src="/images/water-hero.jpg"
        alt=""
        aria-hidden="true"
        fill
        priority
        sizes="100vw"
        className="object-cover opacity-35 mix-blend-soft-light"
      />
      {/* readability gradient over the water */}
      <div className="absolute inset-0 bg-gradient-to-r from-navy-950/80 via-navy-900/55 to-navy-900/30" />

      {/* subtle bottom wave divider */}
      <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-8 overflow-hidden" aria-hidden="true">
        <svg viewBox="0 0 1440 32" preserveAspectRatio="none" className="h-full w-full" fill="white" fillOpacity="0.06">
          <path d="M0,16 C360,32 720,0 1080,16 C1260,24 1360,20 1440,16 L1440,32 L0,32 Z" />
        </svg>
      </div>
      <div className="relative mx-auto w-full max-w-6xl container-px py-16 md:py-20">
        {crumbs && (
          <nav className="mb-4 flex flex-wrap items-center gap-1 text-sm text-white/70" aria-label="Breadcrumb">
            {crumbs.map((c, i) => (
              <span key={c.href} className="flex items-center gap-1">
                {i > 0 && <span className="text-white/40">/</span>}
                {i === crumbs.length - 1 ? (
                  <span className="text-aqua-300">{c.label}</span>
                ) : (
                  <Link href={c.href} className="transition-colors hover:text-white">
                    {c.label}
                  </Link>
                )}
              </span>
            ))}
          </nav>
        )}
        <h1 className="max-w-3xl text-4xl text-white md:text-5xl text-balance">{title}</h1>
        {subtitle && <p className="mt-4 max-w-2xl text-lg text-white/85">{subtitle}</p>}
      </div>
    </section>
  );
}

export function Prose({ children }: { children: ReactNode }) {
  return (
    <div className="space-y-5 text-lg leading-relaxed text-navy-800/90 [&_a]:font-semibold [&_a]:text-ocean-600 [&_h2]:mt-10 [&_h2]:text-2xl [&_h2]:text-navy-900 [&_h3]:mt-8 [&_h3]:text-xl [&_h3]:text-navy-900 [&_ul]:list-disc [&_ul]:space-y-2 [&_ul]:pl-6 [&_ul]:marker:text-ocean-600 [&_li]:pl-1 [&_strong]:text-navy-900">
      {children}
    </div>
  );
}
