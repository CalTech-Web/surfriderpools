import Link from "next/link";
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
    <section className="bg-wave">
      <div className="mx-auto max-w-6xl container-px py-16 md:py-20">
        {crumbs && (
          <nav className="mb-4 flex flex-wrap items-center gap-1 text-sm text-white/70" aria-label="Breadcrumb">
            {crumbs.map((c, i) => (
              <span key={c.href} className="flex items-center gap-1">
                {i > 0 && <span className="text-white/40">/</span>}
                {i === crumbs.length - 1 ? (
                  <span className="text-aqua-300">{c.label}</span>
                ) : (
                  <Link href={c.href} className="hover:text-white">
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
    <div className="space-y-5 text-lg leading-relaxed text-navy-800/90 [&_a]:font-semibold [&_a]:text-ocean-600 [&_h2]:mt-10 [&_h2]:text-2xl [&_h2]:text-navy-900 [&_h3]:mt-8 [&_h3]:text-xl [&_h3]:text-navy-900">
      {children}
    </div>
  );
}
