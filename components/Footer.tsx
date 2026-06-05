import Image from "next/image";
import Link from "next/link";
import {
  FiArrowUpRight,
  FiMail,
  FiMapPin,
  FiPhone,
} from "react-icons/fi";

const footerLinks = [
  { label: "Home", href: "#home" },
  { label: "How It Works", href: "#how-it-works" },
  { label: "Services", href: "#services" },
  { label: "Inquiry", href: "#inquiry" },
];

const services = ["Buy a Car", "Rent a Car", "Lease-to-Own", "Custom Search"];

const Footer = () => {
  return (
    <footer className="relative overflow-hidden bg-black px-5 pt-24 text-white md:px-8">
      {/* Background */}
      <div className="absolute left-1/2 top-[-22%] h-[420px] w-[720px] -translate-x-1/2 rounded-full bg-red-600/10 blur-[140px]" />
      <div className="absolute bottom-[-35%] left-[-15%] h-[420px] w-[420px] rounded-full bg-red-600/10 blur-[130px]" />
      <div className="absolute bottom-[-35%] right-[-15%] h-[420px] w-[420px] rounded-full bg-white/[0.04] blur-[130px]" />

      <div className="relative mx-auto max-w-7xl">
        {/* Top CTA */}
        <div className="mb-16 overflow-hidden rounded-xl border border-white/10 bg-[#1b1b1b] p-6 shadow-[0_18px_60px_rgba(0,0,0,0.35)] md:p-8">
          <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
            <div>
              <p className="text-[10px] font-medium uppercase tracking-[0.28em] text-red-400">
                Ready to Find Your Next Vehicle?
              </p>

              <h2 className="mt-3 max-w-2xl text-2xl font-medium leading-tight tracking-[-0.04em] text-white md:text-4xl">
                Tell Diamond Wings what you want. Start your vehicle request.
              </h2>
            </div>

            <a
              href="#inquiry"
              className="inline-flex w-fit shrink-0 items-center justify-center gap-2 rounded-md bg-red-600 px-5 py-3 text-xs font-semibold uppercase tracking-[0.16em] text-white shadow-[0_16px_40px_rgba(220,38,38,0.24)] transition hover:-translate-y-0.5 hover:bg-red-500"
            >
              Start Request
              <FiArrowUpRight />
            </a>
          </div>
        </div>

        {/* Main Footer */}
        <div className="grid gap-10 border-b border-white/10 pb-12 md:grid-cols-2 lg:grid-cols-[1.35fr_0.7fr_0.7fr_1fr]">
          {/* Brand */}
          <div>
            <Link href="/" className="flex items-center gap-3">
              <div className="relative h-11 w-11 overflow-hidden rounded-full bg-white">
                <Image
                  src="/assets/logo.png"
                  alt="Diamond Wings logo"
                  fill
                  className="object-contain p-1.5"
                />
              </div>

              <div>
                <p className="text-[10px] font-medium uppercase tracking-[0.28em] text-red-400">
                  Diamond Wings
                </p>

                <h3 className="mt-1 text-lg font-medium tracking-[-0.02em] text-white">
                  Auto Sales
                </h3>
              </div>
            </Link>

            <p className="mt-5 max-w-md text-sm leading-7 text-white/45">
              A request-first auto service for customers looking to buy, rent,
              or lease-to-own with a more personal process.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-[10px] font-medium uppercase tracking-[0.26em] text-white/30">
              Navigation
            </h4>

            <div className="mt-5 grid gap-3">
              {footerLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="w-fit text-sm font-medium text-white/50 transition hover:text-white"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-[10px] font-medium uppercase tracking-[0.26em] text-white/30">
              Services
            </h4>

            <div className="mt-5 grid gap-3">
              {services.map((service) => (
                <a
                  key={service}
                  href="#inquiry"
                  className="w-fit text-sm font-medium text-white/50 transition hover:text-white"
                >
                  {service}
                </a>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-[10px] font-medium uppercase tracking-[0.26em] text-white/30">
              Contact
            </h4>

            <div className="mt-5 grid gap-3">
              <a
                href="tel:8182924112"
                className="flex items-center gap-3 text-sm font-medium text-white/50 transition hover:text-white"
              >
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-red-600/15 text-red-400">
                  <FiPhone />
                </span>
                Call Frank
              </a>

              <a
                href="mailto:frank@diamondwings.com"
                className="flex items-center gap-3 text-sm font-medium text-white/50 transition hover:text-white"
              >
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-red-600/15 text-red-400">
                  <FiMail />
                </span>
                Send an Email
              </a>

              <div className="flex items-center gap-3 text-sm font-medium text-white/50">
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-red-600/15 text-red-400">
                  <FiMapPin />
                </span>
                Los Angeles Area
              </div>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="flex flex-col gap-4 py-7 text-xs text-white/30 md:flex-row md:items-center md:justify-between">
          <p>
            © {new Date().getFullYear()} Diamond Wings Auto Sales. All rights
            reserved.
          </p>

          <p className="max-w-md md:text-right">
            Vehicle requests, custom searches, rentals, and lease-to-own
            guidance.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;