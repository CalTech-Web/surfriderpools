// Shared SVG icon set. Each icon inherits currentColor and takes a className.

type IconProps = { className?: string };

const base = "inline-block shrink-0";

export function PhoneIcon({ className = "" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" className={`${base} ${className}`}>
      <path
        d="M6.6 10.8a15.2 15.2 0 0 0 6.6 6.6l2.2-2.2a1 1 0 0 1 1-.25 11.5 11.5 0 0 0 3.6.6 1 1 0 0 1 1 1V20a1 1 0 0 1-1 1A17 17 0 0 1 3 4a1 1 0 0 1 1-1h3.5a1 1 0 0 1 1 1c0 1.25.2 2.45.6 3.6a1 1 0 0 1-.25 1L6.6 10.8Z"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function MapPinIcon({ className = "" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" className={`${base} ${className}`}>
      <path
        d="M12 21s7-5.6 7-11a7 7 0 1 0-14 0c0 5.4 7 11 7 11Z"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinejoin="round"
      />
      <circle cx="12" cy="10" r="2.5" stroke="currentColor" strokeWidth="1.8" />
    </svg>
  );
}

export function ArrowRightIcon({ className = "" }: IconProps) {
  return (
    <svg viewBox="0 0 16 16" fill="none" aria-hidden="true" className={`${base} ${className}`}>
      <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function CheckIcon({ className = "" }: IconProps) {
  return (
    <svg viewBox="0 0 18 18" fill="none" aria-hidden="true" className={`${base} ${className}`}>
      <path d="M3 9.5 7 13l8-8.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function FlaskIcon({ className = "" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" className={`${base} ${className}`}>
      <path d="M9 3h6M10 3v6.5L5.5 17a2 2 0 0 0 1.8 3h9.4a2 2 0 0 0 1.8-3L14 9.5V3" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M7.5 14h9" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  );
}

export function WrenchIcon({ className = "" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" className={`${base} ${className}`}>
      <path d="M15.5 7.5a3.5 3.5 0 0 1-4.6 3.3l-5.3 5.3a2 2 0 0 0 2.8 2.8l5.3-5.3a3.5 3.5 0 0 0 4.3-4.6l-2 2-2-2 2-2a3.5 3.5 0 0 0-3.1.9" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function TagIcon({ className = "" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" className={`${base} ${className}`}>
      <path d="M3.5 12.5 11 5h6a2 2 0 0 1 2 2v6l-7.5 7.5a2 2 0 0 1-2.8 0l-5.2-5.2a2 2 0 0 1 0-2.8Z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
      <circle cx="15.5" cy="8.5" r="1.4" fill="currentColor" />
    </svg>
  );
}

export function CalendarIcon({ className = "" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" className={`${base} ${className}`}>
      <rect x="3.5" y="5" width="17" height="15" rx="2" stroke="currentColor" strokeWidth="1.8" />
      <path d="M3.5 9.5h17M8 3v4M16 3v4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  );
}

export function ChatIcon({ className = "" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" className={`${base} ${className}`}>
      <path d="M4 6a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H9l-4 3.5V16H6a2 2 0 0 1-2-2Z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
      <path d="M8.5 9.5h7M8.5 12.5h4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  );
}

// Icons used for the "Why Choose Us" / differentiator cards, in order.
export const differentiatorIcons = [
  MapPinIcon,
  FlaskIcon,
  WrenchIcon,
  TagIcon,
  CalendarIcon,
  ChatIcon,
];

/** A map marker with an outward pulsing ring, for service area lists. */
export function PulsingMarker({ className = "" }: IconProps) {
  return (
    <span className={`relative flex h-5 w-5 items-center justify-center ${className}`} aria-hidden="true">
      <span className="absolute h-3.5 w-3.5 rounded-full bg-aqua-400 animate-marker-pulse" />
      <MapPinIcon className="relative h-5 w-5 text-ocean-600" />
    </span>
  );
}
