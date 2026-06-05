import type { Metadata } from "next";
import { Poppins, Inter } from "next/font/google";
import "./globals.css";

const siteUrl = "https://diamond-wings-middleman.vercel.app";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
  variable: "--font-heading",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-body",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),

  title: {
    default: "Diamond Wings Auto Sales | Buy, Rent, or Lease-to-Own",
    template: "%s | Diamond Wings Auto Sales",
  },

  description:
    "Diamond Wings Auto Sales helps clients request the vehicle they want to buy, rent, or lease-to-own through a premium, personalized vehicle search process.",

  keywords: [
    "Diamond Wings Auto Sales",
    "auto sales Los Angeles",
    "car rental Los Angeles",
    "lease to own cars",
    "buy a car",
    "rent a car",
    "custom vehicle search",
    "Toyota Camry XSE",
    "Los Angeles auto sales",
  ],

  icons: {
    icon: "/assets/logo.png",
    shortcut: "/assets/logo.png",
    apple: "/assets/logo.png",
  },

  openGraph: {
    title: "Diamond Wings Auto Sales | Your Next Car Starts Here",
    description:
      "Buy, rent, or lease-to-own. Share your vehicle, budget, specs, and timeline — Diamond Wings helps guide the search.",
    url: siteUrl,
    siteName: "Diamond Wings Auto Sales",
    images: [
      {
        url: "/assets/background.png",
        width: 1200,
        height: 630,
        alt: "Diamond Wings Auto Sales premium vehicle background",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Diamond Wings Auto Sales | Your Next Car Starts Here",
    description:
      "Request the vehicle you want to buy, rent, or lease-to-own with help from Diamond Wings Auto Sales.",
    images: ["/assets/background.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${poppins.variable}`}>
        {children}
      </body>
    </html>
  );
}