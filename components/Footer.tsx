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
    <footer className="relative overflow-hidden bg-[#0b1320] px-5 pt-20 text-white">
      {/* Background */}
      <div className="absolute left-[-10%] top-[-20%] h-96 w-96 rounded-full bg-[#3b82f6]/15 blur-3xl" />
      <div className="absolute bottom-[-25%] right-[-10%] h-96 w-96 rounded-full bg-[#60a5fa]/10 blur-3xl" />
      <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(255,255,255,0.05),transparent_38%,rgba(59,130,246,0.08))]" />

      <div className="relative mx-auto max-w-7xl">
        {/* Top CTA */}
        <div className="mb-14 overflow-hidden rounded-2xl border border-white/10 bg-white/[0.06] p-6 shadow-[0_24px_70px_rgba(0,0,0,0.25)] backdrop-blur-xl md:p-8">
          <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#93c5fd]">
                Ready to Find Your Next Vehicle?
              </p>

              <h2 className="mt-2 max-w-2xl text-3xl font-bold tracking-[-0.04em] md:text-4xl">
                Tell Diamond Wings what you want, and start your vehicle request.
              </h2>
            </div>

            <a
              href="#inquiry"
              className="flex shrink-0 items-center justify-center gap-2 rounded-xl bg-[#3b82f6] px-6 py-4 text-sm font-bold uppercase tracking-[0.14em] text-white shadow-[0_16px_40px_rgba(59,130,246,0.3)] transition hover:-translate-y-0.5 hover:bg-[#2563eb]"
            >
              Start Request
              <FiArrowUpRight />
            </a>
          </div>
        </div>

        {/* Main Footer */}
        <div className="grid gap-10 border-b border-white/10 pb-12 md:grid-cols-[1.2fr_0.8fr_0.8fr_1fr]">
          {/* Brand */}
          <div>
            <Link href="/" className="flex items-center gap-3">
              <div className="relative h-14 w-14 overflow-hidden rounded-2xl border border-white/10 bg-white">
                <Image
                  src="/assets/logo.png"
                  alt="Diamond Wings logo"
                  fill
                  className="object-contain p-1.5"
                />
              </div>

              <div>
                <p className="text-xs font-bold uppercase tracking-[0.28em] text-[#93c5fd]">
                  Diamond Wings
                </p>
                <h3 className="text-xl font-bold">Auto Concierge</h3>
              </div>
            </Link>

            <p className="mt-5 max-w-md leading-7 text-white/60">
              Helping customers request the vehicle they want to buy, rent, or
              lease-to-own through a simple, personalized inquiry process.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-[0.2em] text-[#93c5fd]">
              Navigation
            </h4>

            <div className="mt-5 grid gap-3">
              {footerLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="w-fit text-sm font-medium text-white/60 transition hover:text-white"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-[0.2em] text-[#93c5fd]">
              Services
            </h4>

            <div className="mt-5 grid gap-3">
              {services.map((service) => (
                <a
                  key={service}
                  href="#inquiry"
                  className="w-fit text-sm font-medium text-white/60 transition hover:text-white"
                >
                  {service}
                </a>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-[0.2em] text-[#93c5fd]">
              Contact
            </h4>

            <div className="mt-5 grid gap-3">
              <a
                href="tel:+10000000000"
                className="flex items-center gap-3 text-sm font-medium text-white/60 transition hover:text-white"
              >
                <FiPhone className="text-[#60a5fa]" />
                Call Frank
              </a>

              <a
                href="mailto:example@email.com"
                className="flex items-center gap-3 text-sm font-medium text-white/60 transition hover:text-white"
              >
                <FiMail className="text-[#60a5fa]" />
                Send an Email
              </a>

              <div className="flex items-center gap-3 text-sm font-medium text-white/60">
                <FiMapPin className="text-[#60a5fa]" />
                Los Angeles Area
              </div>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="flex flex-col gap-4 py-7 text-sm text-white/45 md:flex-row md:items-center md:justify-between">
          <p>
            © {new Date().getFullYear()} Diamond Wings Auto Concierge. All
            rights reserved.
          </p>

          <p>
            Built for vehicle requests, custom searches, and personal auto
            concierge service.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;