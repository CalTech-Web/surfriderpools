import Link from "next/link";
import { ReactNode } from "react";

type Variant = "primary" | "secondary" | "ghost";

const base =
  "inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-semibold transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-aqua-400 focus-visible:ring-offset-2";

const variants: Record<Variant, string> = {
  primary: "bg-aqua-500 text-navy-950 hover:bg-aqua-400 shadow-sm",
  secondary: "bg-navy-900 text-white hover:bg-navy-800",
  ghost: "border border-white/40 text-white hover:bg-white/10",
};

export default function Button({
  href,
  children,
  variant = "primary",
  className = "",
}: {
  href: string;
  children: ReactNode;
  variant?: Variant;
  className?: string;
}) {
  return (
    <Link href={href} className={`${base} ${variants[variant]} ${className}`}>
      {children}
    </Link>
  );
}
