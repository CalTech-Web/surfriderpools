"use client";

import { useState } from "react";

export default function Faq({ items }: { items: { q: string; a: string }[] }) {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <div className="mx-auto max-w-3xl divide-y divide-aqua-50 rounded-2xl border border-aqua-50 bg-white">
      {items.map((item, i) => (
        <div key={item.q}>
          <button
            type="button"
            onClick={() => setOpen(open === i ? null : i)}
            className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
            aria-expanded={open === i}
          >
            <span className="font-display font-semibold text-navy-900">{item.q}</span>
            <svg
              width="18"
              height="18"
              viewBox="0 0 18 18"
              fill="none"
              aria-hidden="true"
              className={`shrink-0 text-ocean-600 transition-transform ${open === i ? "rotate-45" : ""}`}
            >
              <path d="M9 3v12M3 9h12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            </svg>
          </button>
          {open === i && (
            <p className="px-6 pb-5 text-navy-800/80 leading-relaxed">{item.a}</p>
          )}
        </div>
      ))}
    </div>
  );
}
