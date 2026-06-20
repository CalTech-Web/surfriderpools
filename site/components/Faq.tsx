"use client";

import { useState } from "react";

export default function Faq({ items }: { items: { q: string; a: string }[] }) {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <div className="flex flex-col gap-3">
      {items.map((item, i) => {
        const isOpen = open === i;
        return (
          <div
            key={item.q}
            className={`overflow-hidden rounded-2xl border bg-white transition-all ${
              isOpen ? "border-aqua-300 shadow-md" : "border-aqua-50 shadow-sm hover:border-aqua-300"
            }`}
          >
            <button
              type="button"
              onClick={() => setOpen(isOpen ? null : i)}
              className="flex w-full items-center gap-4 px-5 py-4 text-left md:px-6 md:py-5"
              aria-expanded={isOpen}
            >
              <span
                className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full font-display text-sm font-bold transition-colors ${
                  isOpen ? "bg-aqua-500 text-navy-950" : "bg-aqua-50 text-ocean-600"
                }`}
              >
                {String(i + 1).padStart(2, "0")}
              </span>
              <span className="flex-1 font-display font-semibold text-navy-900">{item.q}</span>
              <svg
                width="20"
                height="20"
                viewBox="0 0 18 18"
                fill="none"
                aria-hidden="true"
                className={`shrink-0 transition-transform duration-300 ${
                  isOpen ? "rotate-45 text-aqua-500" : "text-ocean-600"
                }`}
              >
                <path d="M9 3v12M3 9h12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              </svg>
            </button>
            <div
              className={`grid transition-all duration-300 ease-in-out ${
                isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
              }`}
            >
              <div className="overflow-hidden">
                <p className="px-5 pb-5 pl-[4.25rem] text-navy-800/80 leading-relaxed md:px-6 md:pb-6 md:pl-[4.75rem]">
                  {item.a}
                </p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
