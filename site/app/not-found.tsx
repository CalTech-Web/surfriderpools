import Link from "next/link";
import { site } from "@/lib/site";
import PhoneLink from "@/components/PhoneLink";

export default function NotFound() {
  return (
    <section className="bg-wave">
      <div className="mx-auto flex max-w-3xl flex-col items-center gap-6 container-px py-28 text-center">
        <p className="font-display text-6xl font-extrabold text-white">404</p>
        <h1 className="text-3xl text-white">This page took a dip</h1>
        <p className="max-w-md text-white/85">
          We could not find the page you were looking for. Let us get you back to dry
          land.
        </p>
        <div className="flex flex-col gap-3 sm:flex-row">
          <Link
            href="/"
            className="rounded-full bg-aqua-500 px-7 py-3.5 text-sm font-semibold text-navy-950 transition-colors hover:bg-aqua-400"
          >
            Back to Home
          </Link>
          <PhoneLink
            className="rounded-full border border-white/40 px-7 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-white/10"
            label={`Call ${site.phone}`}
          />
        </div>
      </div>
    </section>
  );
}
