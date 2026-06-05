import type { Metadata } from "next";
import { Poppins, Inter } from "next/font/google";
import "./globals.css";

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
  metadataBase: new URL("https://diamond-wings-middleman.vercel.app"),

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
    url: "https://diamond-wings-middleman.vercel.app",
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
      <body className={`${inter.variable} ${poppins.variable}`}>
        {children}
      </body>
    </html>
  );
}