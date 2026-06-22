import Link from "next/link";
import Image from "next/image";
import { services, serviceAreas, site } from "@/lib/site";
import PhoneLink from "./PhoneLink";

export default function Footer() {
  return (
    <footer className="bg-navy-950 text-white/80">
      <div className="mx-auto grid max-w-6xl gap-10 container-px py-14 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <Link href="/" className="flex items-center gap-3">
            <Image
              src="/images/logo.png"
              alt="Surfrider Pool Service logo"
              width={48}
              height={45}
              className="h-12 w-auto"
            />
            <span className="font-display text-lg font-bold text-white">
              Surfrider Pool Service
            </span>
          </Link>
          <p className="mt-4 text-sm leading-relaxed">
            Reliable pool cleaning and repair across Pinellas
            County and the Tampa Bay area. Local, owner operated, and ready to help.
          </p>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wider text-aqua-300">
            Services
          </h3>
          <ul className="mt-4 space-y-2 text-sm">
            {services.map((s) => (
              <li key={s.slug}>
                <Link href={`/services/${s.slug}`} className="hover:text-aqua-300">
                  {s.title}
                </Link>
              </li>
            ))}
            <li>
              <Link href="/services" className="hover:text-aqua-300">
                All Services
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wider text-aqua-300">
            Company
          </h3>
          <ul className="mt-4 space-y-2 text-sm">
            <li><Link href="/about" className="hover:text-aqua-300">About</Link></li>
            <li><Link href="/service-areas" className="hover:text-aqua-300">Service Areas</Link></li>
            <li><Link href="/blog" className="hover:text-aqua-300">Blog</Link></li>
            <li><Link href="/contact" className="hover:text-aqua-300">Contact</Link></li>
            <li><Link href="/sitemap" className="hover:text-aqua-300">Sitemap</Link></li>
            <li><Link href="/privacy-policy" className="hover:text-aqua-300">Privacy Policy</Link></li>
            <li><Link href="/terms-of-service" className="hover:text-aqua-300">Terms of Service</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wider text-aqua-300">
            Get in Touch
          </h3>
          <ul className="mt-4 space-y-3 text-sm">
            <li>
              <PhoneLink className="font-semibold text-white hover:text-aqua-300" iconClassName="text-aqua-300" />
            </li>
            <li>
              <a href={`mailto:${site.email}`} className="hover:text-aqua-300">
                {site.email}
              </a>
            </li>
            <li>{site.address.full}</li>
            <li className="text-white/60">{site.hours}</li>
          </ul>
          <p className="mt-5 text-xs text-white/55">
            Serving {serviceAreas.slice(0, 6).join(", ")}, and more.
          </p>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-2 container-px pt-5 pb-[88px] text-xs text-white/55 md:flex-row lg:pb-5">
          <p>
            Copyright {site.copyrightYear} {site.name}. All Rights Reserved.
          </p>
          <p>
            Built by{" "}
            <a
              href="https://caltechweb.com"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-aqua-300 hover:text-aqua-400"
            >
              CalTech Web
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
