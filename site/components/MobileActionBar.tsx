"use client";

import Link from "next/link";
import { site } from "@/lib/site";

/**
 * Sticky bottom action bar shown only on small screens (hidden on lg+).
 * Gives mobile visitors one-tap access to call or get a quote without
 * scrolling back up to the header.
 */
export default function MobileActionBar() {
  return (
    <div className="fixed bottom-0 inset-x-0 z-40 lg:hidden">
      {/* thin aqua accent line at the top of the bar */}
      <div className="h-px bg-aqua-500/40" />
      <div className="flex items-stretch bg-navy-950/97 backdrop-blur-sm shadow-[0_-4px_24px_rgba(0,0,0,0.35)]">
        {/* Call button */}
        <a
          href={site.phoneHref}
          className="flex flex-1 flex-col items-center justify-center gap-1 py-3.5 text-white active:bg-white/10"
          aria-label={`Call Surfrider Pool Service at ${site.phone}`}
        >
          <PhoneIcon />
          <span className="text-[11px] font-semibold uppercase tracking-wide text-white/80">
            Call Us
          </span>
          <span className="text-xs font-bold text-aqua-300">{site.phone}</span>
        </a>

        {/* vertical divider */}
        <div className="w-px bg-white/10 my-3" />

        {/* Quote button */}
        <Link
          href="/contact"
          className="flex flex-1 flex-col items-center justify-center gap-1 py-3.5 text-white active:bg-white/10"
          aria-label="Get a free pool service quote"
        >
          <QuoteIcon />
          <span className="text-[11px] font-semibold uppercase tracking-wide text-white/80">
            Free Quote
          </span>
          <span className="text-xs font-bold text-sand-400">Get Started</span>
        </Link>
      </div>
    </div>
  );
}

function PhoneIcon() {
  return (
    <svg
      width="22"
      height="22"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
      className="text-aqua-400"
    >
      <path
        d="M6.6 10.8a15.2 15.2 0 0 0 6.6 6.6l2.2-2.2a1 1 0 0 1 1-.25 11.5 11.5 0 0 0 3.6.6 1 1 0 0 1 1 1V20a1 1 0 0 1-1 1A17 17 0 0 1 3 4a1 1 0 0 1 1-1h3.5a1 1 0 0 1 1 1c0 1.25.2 2.45.6 3.6a1 1 0 0 1-.25 1L6.6 10.8Z"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function QuoteIcon() {
  return (
    <svg
      width="22"
      height="22"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
      className="text-sand-400"
    >
      <path
        d="M9 5H7a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-2"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <rect x="9" y="3" width="6" height="4" rx="1" stroke="currentColor" strokeWidth="1.75" strokeLinejoin="round" />
      <path d="M9 12h6M9 16h4" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" />
    </svg>
  );
}
