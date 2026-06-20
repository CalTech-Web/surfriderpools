"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { nav, site } from "@/lib/site";
import PhoneLink from "./PhoneLink";

export default function Header() {
  const [open, setOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-aqua-50 bg-white/95 backdrop-blur">
      {/* top contact bar */}
      <div className="bg-navy-900 text-white">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 container-px py-2 text-xs md:text-sm">
          <span className="hidden sm:inline text-aqua-300">{site.tagline}</span>
          <div className="flex items-center gap-4">
            <PhoneLink className="font-semibold hover:text-aqua-300" iconClassName="text-aqua-300" />
            <span className="hidden md:inline text-white/60">{site.hours}</span>
          </div>
        </div>
      </div>

      {/* main nav */}
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 container-px py-3">
        <Link href="/" className="flex items-center gap-3">
          <Image
            src="/images/logo.png"
            alt="Surfrider Pool Service logo"
            width={52}
            height={49}
            priority
            className="h-12 w-auto"
          />
          <span className="font-display text-lg font-bold leading-tight text-navy-900">
            Surfrider
            <span className="block text-xs font-semibold uppercase tracking-wider text-ocean-600">
              Pool Service
            </span>
          </span>
        </Link>

        <nav className="hidden items-center gap-1 lg:flex">
          {nav.map((item) =>
            item.children ? (
              <div key={item.href} className="group relative">
                <Link
                  href={item.href}
                  className="flex items-center gap-1 rounded-full px-4 py-2 text-sm font-medium text-navy-800 hover:bg-aqua-50"
                >
                  {item.label}
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true">
                    <path d="M3 4.5 6 7.5 9 4.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                  </svg>
                </Link>
                <div className="invisible absolute left-0 top-full w-56 pt-2 opacity-0 transition-all group-hover:visible group-hover:opacity-100">
                  <div className="overflow-hidden rounded-xl border border-aqua-50 bg-white shadow-lg">
                    {item.children.map((child) => (
                      <Link
                        key={child.href}
                        href={child.href}
                        className="block px-4 py-3 text-sm text-navy-800 hover:bg-aqua-50 hover:text-ocean-600"
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            ) : (
              <Link
                key={item.href}
                href={item.href}
                className="rounded-full px-4 py-2 text-sm font-medium text-navy-800 hover:bg-aqua-50"
              >
                {item.label}
              </Link>
            )
          )}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <Link
            href="/contact"
            className="rounded-full bg-aqua-500 px-5 py-2.5 text-sm font-semibold text-navy-950 transition-colors hover:bg-aqua-400"
          >
            Get a Free Quote
          </Link>
        </div>

        <button
          type="button"
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="rounded-lg p-2 text-navy-900 transition-colors hover:bg-aqua-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-aqua-500 lg:hidden"
        >
          <svg width="26" height="26" viewBox="0 0 24 24" fill="none" aria-hidden="true">
            {open ? (
              <path d="M6 6l12 12M18 6 6 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            ) : (
              <path d="M4 7h16M4 12h16M4 17h16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            )}
          </svg>
        </button>
      </div>

      {/* mobile menu */}
      {open && (
        <div className="border-t border-aqua-50 bg-white lg:hidden">
          <nav className="mx-auto flex max-w-6xl flex-col container-px py-3">
            {nav.map((item) =>
              item.children ? (
                <div key={item.href}>
                  <button
                    type="button"
                    onClick={() => setServicesOpen((v) => !v)}
                    className="flex w-full items-center justify-between py-3 text-left font-medium text-navy-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-aqua-500 rounded"
                  >
                    {item.label}
                    <svg width="14" height="14" viewBox="0 0 12 12" fill="none" aria-hidden="true">
                      <path d="M3 4.5 6 7.5 9 4.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                    </svg>
                  </button>
                  {servicesOpen && (
                    <div className="flex flex-col pl-4">
                      <Link href={item.href} onClick={() => setOpen(false)} className="py-2 text-sm text-ocean-600">
                        All Services
                      </Link>
                      {item.children.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          onClick={() => setOpen(false)}
                          className="py-2 text-sm text-navy-800"
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="py-3 font-medium text-navy-900"
                >
                  {item.label}
                </Link>
              )
            )}
            <Link
              href="/contact"
              onClick={() => setOpen(false)}
              className="mt-3 rounded-full bg-aqua-500 px-5 py-3 text-center text-sm font-semibold text-navy-950"
            >
              Get a Free Quote
            </Link>
            <PhoneLink
              className="mt-2 w-full rounded-full border border-navy-900 px-5 py-3 text-sm font-semibold text-navy-900"
              label={`Call ${site.phone}`}
            />
          </nav>
        </div>
      )}
    </header>
  );
}
