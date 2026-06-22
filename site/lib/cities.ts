export interface City {
  slug: string;
  name: string;
  h1: string;
  introParagraph: string;
  neighborhoods: string[];
  poolCareNote: string;
}

export const cities: City[] = [
  {
    slug: "dunedin",
    name: "Dunedin",
    h1: "Pool Service in Dunedin, FL",
    introParagraph:
      "Surfrider Pool Service is based right here in Dunedin, giving us deep familiarity with the local climate, soil, and pool equipment common in the area. From the Marina District to the neighborhoods near Honeymoon Island, our team keeps backyard pools clean, balanced, and ready to enjoy every day of the year.",
    neighborhoods: ["Marina District", "Honeymoon Island", "Downtown Dunedin"],
    poolCareNote:
      "Dunedin's coastal humidity and warm temperatures mean pools accumulate algae and debris quickly, making weekly service a smart investment.",
  },
  {
    slug: "clearwater",
    name: "Clearwater",
    h1: "Pool Service in Clearwater, FL",
    introParagraph:
      "Clearwater pools face intense salt air and humidity that demand consistent maintenance year round. Whether your home is near Clearwater Beach or in Island Estates, Surfrider Pool Service delivers dependable weekly care that keeps your water crystal clear.",
    neighborhoods: ["Clearwater Beach", "Downtown Clearwater", "Island Estates"],
    poolCareNote:
      "Salt air from the Gulf accelerates equipment corrosion and mineral buildup, so regular chemistry checks and equipment inspections are especially important in Clearwater.",
  },
  {
    slug: "palm-harbor",
    name: "Palm Harbor",
    h1: "Pool Service in Palm Harbor, FL",
    introParagraph:
      "Palm Harbor neighborhoods like Ozona and Crystal Beach are full of backyard pools that benefit from reliable weekly service. Surfrider Pool Service provides professional cleaning and chemical maintenance that keeps Palm Harbor pools safe and inviting through every season.",
    neighborhoods: ["Ozona", "Crystal Beach", "Palm Harbor Village"],
    poolCareNote:
      "The tree canopy throughout Palm Harbor means pools pick up significant leaf and debris load, and shaded areas can develop algae faster without consistent treatment.",
  },
  {
    slug: "tarpon-springs",
    name: "Tarpon Springs",
    h1: "Pool Service in Tarpon Springs, FL",
    introParagraph:
      "Tarpon Springs is one of the most charming communities on the Gulf Coast, and pool owners here count on regular service to keep up with Florida's heat and humidity. Surfrider Pool Service treats every Tarpon Springs pool with the same care and attention to detail we bring to our home base in Dunedin.",
    neighborhoods: ["Sponge Docks", "Craig Park", "Tarpon Springs Golf Course"],
    poolCareNote:
      "Tarpon Springs pools near the bayou and waterfront areas can see more organic debris and water chemistry shifts that require skilled balancing.",
  },
  {
    slug: "safety-harbor",
    name: "Safety Harbor",
    h1: "Pool Service in Safety Harbor, FL",
    introParagraph:
      "Safety Harbor homeowners enjoy a quieter pace with a relaxed waterfront setting, making a well maintained pool a natural centerpiece of outdoor life. Surfrider Pool Service provides the attentive care that Safety Harbor residents expect from a local, professional team.",
    neighborhoods: [
      "Safety Harbor Resort and Spa area",
      "Philippe Park",
      "Downtown Safety Harbor",
    ],
    poolCareNote:
      "Safety Harbor's waterfront setting means pools there can accumulate mineral deposits and organic matter that require careful balancing and regular brushing.",
  },
  {
    slug: "oldsmar",
    name: "Oldsmar",
    h1: "Pool Service in Oldsmar, FL",
    introParagraph:
      "Oldsmar families count on their pools for year round relaxation, and the humid Florida climate means regular cleaning and chemistry maintenance are essential. Surfrider Pool Service serves Oldsmar homeowners with the same reliable, scheduled care that keeps pools healthy and ready to use.",
    neighborhoods: [
      "R.E. Olds Park area",
      "Waterfront neighborhoods",
      "Oldsmar residential communities",
    ],
    poolCareNote:
      "Oldsmar's bayfront location and family-heavy neighborhoods mean pools get heavy use and need consistent upkeep to stay clean and safe.",
  },
];

export function getCityBySlug(slug: string): City | undefined {
  return cities.find((c) => c.slug === slug);
}
