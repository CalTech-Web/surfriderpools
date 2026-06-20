import { site } from "@/lib/site";
import { PhoneIcon } from "./icons";

/**
 * Click to call link with an animated phone icon placed before the number.
 * Pass `className` to style the anchor for its context (button, bar, inline).
 * `label` overrides the visible text (defaults to the phone number).
 */
export default function PhoneLink({
  className = "",
  iconClassName = "",
  label,
}: {
  className?: string;
  iconClassName?: string;
  label?: React.ReactNode;
}) {
  return (
    <a
      href={site.phoneHref}
      aria-label={`Call Surfrider Pool Service at ${site.phone}`}
      className={`inline-flex items-center justify-center gap-2 ${className}`}
    >
      <PhoneIcon className={`h-[1.1em] w-[1.1em] animate-phone-ring ${iconClassName}`} />
      <span>{label ?? site.phone}</span>
    </a>
  );
}
