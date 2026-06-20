import Link from "next/link";
import Image from "next/image";
import { Service } from "@/lib/site";
import { ArrowRightIcon } from "./icons";

export default function ServiceCard({ service }: { service: Service }) {
  return (
    <Link
      href={`/services/${service.slug}`}
      className="group flex flex-col overflow-hidden rounded-2xl border border-aqua-50 bg-white shadow-sm transition-all hover:-translate-y-1 hover:border-aqua-300 hover:shadow-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-aqua-500"
    >
      <div className="relative aspect-[4/3] overflow-hidden">
        <Image
          src={service.image}
          alt={service.imageAlt}
          fill
          sizes="(max-width: 768px) 100vw, 33vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-navy-950/45 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
      </div>
      <div className="flex flex-1 flex-col p-6">
        <h3 className="text-xl text-navy-900">{service.title}</h3>
        <p className="mt-2 flex-1 text-sm leading-relaxed text-navy-800/80">
          {service.short}
        </p>
        <span className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-ocean-600">
          <span className="flex h-8 w-8 items-center justify-center rounded-full bg-aqua-50 text-ocean-600 transition-colors group-hover:bg-aqua-500 group-hover:text-navy-950">
            <ArrowRightIcon className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
          </span>
          Learn more
        </span>
      </div>
    </Link>
  );
}
