import type { Metadata } from "next";
import { Barlow_Condensed, DM_Sans } from "next/font/google";
import "./globals.css";

const headingFont = Barlow_Condensed({
  variable: "--font-heading",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

const bodyFont = DM_Sans({
  variable: "--font-body",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://protechglasscolumbus.com"),
  title: {
    default: "Pro-Tech Glass | Auto, Residential & Commercial Glass in Columbus, MS",
    template: "%s | Pro Tech Glass",
  },
  description:
    "Pro-Tech Glass provides windshield repair and replacement, ADAS recalibration support, residential window glass service, and storefront glass installation in Columbus, Mississippi.",
  icons: {
    icon: [{ url: "/IMG_5050.png", type: "image/png" }],
    shortcut: "/IMG_5050.png",
    apple: "/IMG_5050.png",
  },
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Pro-Tech Glass | Columbus, Mississippi",
    description:
      "Full-service glass company in Columbus, MS: auto glass, residential windows, commercial storefronts, shower doors, and custom glass cutting.",
    url: "https://protechglasscolumbus.com",
    siteName: "Pro Tech Glass",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Pro-Tech Glass | Columbus, MS",
    description:
      "Call or text Pro-Tech Glass for auto, residential, and commercial glass repair and replacement in Columbus, Mississippi.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${headingFont.variable} ${bodyFont.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
