import { MetadataRoute } from "next";
import { site } from "@/lib/site";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Surfrider Pool Service",
    short_name: "Surfrider Pools",
    description: site.description,
    start_url: "/",
    display: "browser",
    background_color: "#0c2a4d",
    theme_color: "#06b6d4",
    icons: [
      {
        src: "/icon.png",
        sizes: "any",
        type: "image/png",
      },
    ],
  };
}
