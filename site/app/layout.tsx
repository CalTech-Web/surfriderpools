import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import MobileActionBar from "@/components/MobileActionBar";
import JsonLd from "@/components/JsonLd";
import { localBusinessSchema } from "@/lib/schema";
import { site } from "@/lib/site";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["600", "700", "800"],
  variable: "--font-poppins",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: "Surfrider Pool Service | Pool Cleaning & Repair in Pinellas County",
    template: "%s | Surfrider Pool Service",
  },
  description: site.description,
  keywords: [
    "pool cleaning Pinellas County",
    "pool service Dunedin",
    "pool repair Clearwater",
    "pool maintenance Tampa Bay",
    "pressure washing Pinellas County",
    "weekly pool service",
  ],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    siteName: site.name,
    title: "Surfrider Pool Service | Pool Cleaning & Repair in Pinellas County",
    description: site.description,
    url: site.url,
    images: [{ url: "/images/hero-pool.jpg", width: 1024, height: 1024, alt: site.name }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Surfrider Pool Service",
    description: site.description,
    images: ["/images/hero-pool.jpg"],
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${inter.variable} ${poppins.variable} h-full antialiased`}>
      <body className="flex min-h-full flex-col">
        <JsonLd data={localBusinessSchema} />
        <Header />
        {/* pb-[72px] on mobile ensures content is never hidden behind the sticky action bar */}
        <main className="flex-1 pb-[72px] lg:pb-0">{children}</main>
        <Footer />
        <MobileActionBar />
      </body>
    </html>
  );
}
