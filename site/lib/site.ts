// Central business data and content config for Surfrider Pool Service.
// Read SITE_FACTS.md before editing content here.

export const site = {
  name: "Surfrider Pool Service",
  shortName: "Surfrider Pools",
  domain: "surfriderpools.com",
  url: "https://surfriderpools.vercel.app",
  formKey: "surfriderpools.com",
  tagline: "Your trusted partner for professional pool care in Pinellas County.",
  description:
    "Surfrider Pool Service provides reliable pool cleaning, repair, and pressure washing for homes and businesses across Pinellas County and the Tampa Bay area. Free quotes, chemicals included, flexible scheduling.",
  phone: "727.453.1330",
  phoneHref: "tel:7274531330",
  email: "todd@surfriderpm.com",
  address: {
    street: "1350 County Road 1 #123",
    city: "Dunedin",
    state: "FL",
    zip: "34697",
    full: "1350 County Road 1 #123, Dunedin, FL 34697",
  },
  geo: { lat: 28.0353, lng: -82.7637 },
  hours: "Mon to Sat, 8:00 AM to 6:00 PM",
  copyrightYear: 2026,
  social: {} as Record<string, string>,
};

export type Service = {
  slug: string;
  title: string;
  short: string;
  blurb: string;
  features: string[];
  image: string;
  imageAlt: string;
  metaTitle: string;
  metaDescription: string;
};

export const services: Service[] = [
  {
    slug: "pool-cleaning",
    title: "Pool Cleaning",
    short: "Full service weekly and bi-weekly pool cleaning with chemicals included.",
    blurb:
      "Our full service cleaning keeps your water clear, balanced, and ready to swim all year. We handle the skimming, brushing, vacuuming, chemistry, and filter care so you never have to think about it.",
    features: [
      "Weekly and bi-weekly service plans",
      "Skim the surface and remove debris",
      "Brush tile, walls, and steps",
      "Vacuum the pool floor",
      "Empty skimmer and pump baskets",
      "Test and balance water chemistry, chemicals included",
      "Clean and inspect the pool filter",
    ],
    image: "/images/pool-cleaning.jpg",
    imageAlt: "Pool technician skimming leaves from a clear blue swimming pool",
    metaTitle: "Pool Cleaning Service in Pinellas County | Surfrider Pool Service",
    metaDescription:
      "Reliable weekly and bi-weekly pool cleaning in Dunedin, Clearwater, and across Pinellas County. Chemicals included, free quotes. Call 727.453.1330.",
  },
  {
    slug: "pool-repair",
    title: "Pool Repair",
    short: "Leak detection, equipment repair, and green pool recovery.",
    blurb:
      "When something goes wrong, our technicians diagnose the problem and fix it right. From leaks and failing pumps to green pool recovery, we get your pool running smoothly again.",
    features: [
      "Leak detection and repair",
      "Pump, motor, and filter repair or replacement",
      "Pool heater diagnosis and repair",
      "Plumbing and valve repair",
      "Equipment troubleshooting and part replacement",
      "Green pool recovery and algae cleanup",
    ],
    image: "/images/pool-repair.jpg",
    imageAlt: "Close up of clean blue tiled swimming pool water",
    metaTitle: "Pool Repair Service in Pinellas County | Surfrider Pool Service",
    metaDescription:
      "Pool repair in Dunedin and across Pinellas County. Leak detection, pump and filter repair, heaters, and green pool recovery. Free quotes. Call 727.453.1330.",
  },
  {
    slug: "pressure-washing",
    title: "Pressure Washing",
    short: "Restore your deck, driveway, and outdoor surfaces.",
    blurb:
      "Bring your outdoor space back to life. Our pressure washing removes dirt, algae, and stains from your pool deck, driveway, walkways, and fences so everything looks fresh and clean.",
    features: [
      "Pool deck and patio cleaning",
      "Driveway and walkway washing",
      "Fence and exterior surface cleaning",
      "Removal of dirt, algae, and stains",
      "Restores the look of your outdoor space",
    ],
    image: "/images/pressure-washing.jpg",
    imageAlt: "Worker in yellow boots pressure washing a concrete driveway",
    metaTitle: "Pressure Washing Service in Pinellas County | Surfrider Pool Service",
    metaDescription:
      "Pressure washing for pool decks, driveways, patios, and fences in Dunedin and across Pinellas County. Free quotes. Call 727.453.1330.",
  },
];

export const serviceAreas = [
  "Dunedin",
  "Clearwater",
  "Palm Harbor",
  "Tarpon Springs",
  "Safety Harbor",
  "Oldsmar",
  "Largo",
  "Seminole",
  "Belleair",
  "Pinellas Park",
  "St. Petersburg",
  "Tampa Bay Area",
];

export const differentiators = [
  {
    title: "Local and owner operated",
    text: "Based in Dunedin and serving all of Pinellas County. You deal with a local team that knows the area and shows up.",
  },
  {
    title: "Chemicals included",
    text: "Our full service cleaning plans include the chemicals your water needs. No surprise add ons or hidden charges.",
  },
  {
    title: "One team for everything",
    text: "Cleaning, repair, and pressure washing handled by skilled technicians, so you only need one call.",
  },
  {
    title: "Honest pricing",
    text: "Clear, no pressure quotes and straightforward communication from start to finish.",
  },
  {
    title: "Flexible scheduling",
    text: "Weekly, bi-weekly, or one time visits that fit your needs and your schedule.",
  },
  {
    title: "Free quotes",
    text: "Every service comes with a free quote. Call or message us and we will get you a price.",
  },
];

export const process = [
  {
    step: "1",
    title: "Free Quote",
    text: "Call or send a message and we give you a clear, no pressure quote.",
  },
  {
    step: "2",
    title: "Schedule",
    text: "We set a weekly, bi-weekly, or one time visit that fits your needs.",
  },
  {
    step: "3",
    title: "Service",
    text: "Our team cleans, balances, and inspects your pool and equipment.",
  },
  {
    step: "4",
    title: "Peace of Mind",
    text: "You enjoy a clean, healthy pool while we handle the upkeep.",
  },
];

export const faqs = [
  {
    q: "What areas do you serve?",
    a: "We serve Dunedin, Clearwater, Palm Harbor, Tarpon Springs, Safety Harbor, Oldsmar, and the wider Pinellas County and Tampa Bay area. If you are nearby, just ask.",
  },
  {
    q: "How often should my pool be cleaned?",
    a: "Most residential pools do best with weekly service, especially in the Florida heat. We also offer bi-weekly and one time visits depending on your needs.",
  },
  {
    q: "Are chemicals included in your cleaning service?",
    a: "Yes. Our full service cleaning plans include the chemicals needed to keep your water balanced and safe, with no hidden add on charges.",
  },
  {
    q: "My pool turned green. Can you help?",
    a: "Yes. We handle green pool recovery and algae cleanup, get your water clear and balanced again, and can set you up on regular service so it stays that way.",
  },
  {
    q: "Do you repair pool equipment?",
    a: "Yes. Our technicians diagnose and repair pumps, motors, filters, heaters, plumbing, and valves, and replace parts when needed.",
  },
  {
    q: "Do you offer free quotes?",
    a: "Yes. Every service comes with a free, no pressure quote. Call 727.453.1330 or send us a message to get started.",
  },
];

export const nav = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  {
    label: "Services",
    href: "/services",
    children: services.map((s) => ({ label: s.title, href: `/services/${s.slug}` })),
  },
  { label: "Service Areas", href: "/service-areas" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
];
