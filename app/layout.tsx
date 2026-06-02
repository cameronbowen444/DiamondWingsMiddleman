import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://dw-middleman.vercel.app"),

  title: "Diamond Wings Auto Concierge | Find Your Next Car",
  description:
    "Frank Bustos helps clients find the car they want to buy, rent, or lease-to-own through a personalized vehicle inquiry process.",

  icons: {
    icon: "/assets/favicon.png",
    shortcut: "/assets/favicon.png",
    apple: "/assets/favicon.png",
  },

  openGraph: {
    title: "Diamond Wings Auto Concierge",
    description:
      "Tell Frank what car you want, your budget, your specs, and whether you want to buy, rent, or lease-to-own.",
    url: "https://dw-middleman.vercel.app",
    siteName: "Diamond Wings Auto Concierge",
    images: [
      {
        url: "/assets/hero.jpg",
        width: 1200,
        height: 630,
        alt: "Diamond Wings Auto Concierge car handoff",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Diamond Wings Auto Concierge",
    description:
      "Find the car you want to buy, rent, or lease-to-own with help from Frank Bustos.",
    images: ["/assets/hero.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}