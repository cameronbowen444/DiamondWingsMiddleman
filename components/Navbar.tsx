"use client";

import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import {
  FiArrowUpRight,
  FiMenu,
  FiPhone,
  FiSearch,
  FiX,
} from "react-icons/fi";

const navLinks = [
  { label: "How It Works", href: "#how-it-works" },
  { label: "Services", href: "#services" },
  { label: "Inquiry", href: "#inquiry" },
];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      <header
        className={`fixed left-0 top-0 z-50 w-full transition-all duration-300 ${
          isScrolled
            ? "border-b border-slate-200/10 bg-[#0b1320]/95 shadow-[0_12px_40px_rgba(2,8,23,0.35)] backdrop-blur-xl"
            : "bg-gradient-to-b from-[#0b1320]/95 via-[#0b1320]/70 to-transparent"
        }`}
      >
        <nav
          className={`mx-auto flex max-w-7xl items-center justify-between px-5 transition-all duration-300 ${
            isScrolled ? "py-3" : "py-6"
          }`}
        >
          {/* Logo */}
          <Link href="/" className="group flex items-center gap-3">
            <div
              className={`relative overflow-hidden border border-white/10 bg-white shadow-sm transition-all duration-300 ${
                isScrolled
                  ? "h-11 w-11 rounded-xl"
                  : "h-14 w-14 rounded-2xl"
              }`}
            >
              <Image
                src="/assets/logo.png"
                alt="Diamond Wings logo"
                fill
                className="object-contain p-1.5"
                priority
              />
            </div>

            <div className="leading-tight">
              <p
                className={`font-semibold uppercase text-[#60a5fa] transition-all duration-300 ${
                  isScrolled
                    ? "text-[10px] tracking-[0.22em]"
                    : "text-xs tracking-[0.3em]"
                }`}
              >
                Diamond Wings
              </p>

              <h1
                className={`font-bold text-white transition-all duration-300 ${
                  isScrolled ? "text-base" : "text-2xl"
                }`}
              >
                Auto Sales and Rentals
              </h1>
            </div>
          </Link>

          {/* Desktop Center */}
          <div className="hidden items-center gap-9 lg:flex">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="group relative text-sm font-semibold text-white/65 transition duration-300 hover:text-white"
              >
                {link.label}

                <span className="absolute -bottom-2 left-1/2 h-[2px] w-0 -translate-x-1/2 rounded-full bg-[#60a5fa] transition-all duration-300 group-hover:w-full" />

                <span className="absolute -inset-x-3 -inset-y-2 -z-10 scale-95 rounded-lg bg-[#3b82f6]/0 opacity-0 blur-sm transition-all duration-300 group-hover:scale-100 group-hover:bg-[#3b82f6]/10 group-hover:opacity-100" />
              </a>
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="hidden items-center gap-3 lg:flex">
            <a
              href="tel:8182924112"
              className={`flex items-center gap-2 border border-white/10 bg-white/[0.04] font-semibold text-white/80 backdrop-blur-md transition-all duration-300 hover:border-white/20 hover:bg-white/[0.08] hover:text-white ${
                isScrolled
                  ? "rounded-xl px-4 py-2 text-sm"
                  : "rounded-2xl px-5 py-3 text-sm"
              }`}
            >
              <FiPhone />
              Call
            </a>

            <a
              href="#inquiry"
              className={`flex items-center gap-2 border border-[#3b82f6] bg-[#3b82f6] font-semibold text-white shadow-[0_12px_30px_rgba(59,130,246,0.25)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#2563eb] hover:shadow-[0_16px_40px_rgba(59,130,246,0.35)] ${
                isScrolled
                  ? "rounded-xl px-5 py-2 text-sm"
                  : "rounded-2xl px-6 py-3 text-sm"
              }`}
            >
              Start Request
              <FiArrowUpRight />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMenuOpen((prev) => !prev)}
            className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/[0.06] text-xl text-white backdrop-blur-md lg:hidden"
            aria-label="Toggle menu"
          >
            {menuOpen ? <FiX /> : <FiMenu />}
          </button>
        </nav>
      </header>

      {/* Mobile Dropdown */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -18 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -18 }}
            transition={{ duration: 0.22 }}
            className="fixed left-4 right-4 top-24 z-40 overflow-hidden rounded-2xl border border-white/10 bg-[#0b1320]/95 p-4 shadow-[0_20px_60px_rgba(2,8,23,0.45)] backdrop-blur-2xl lg:hidden"
          >
            <div className="mb-4 rounded-xl border border-[#3b82f6]/20 bg-[#3b82f6]/10 p-4">
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#93c5fd]">
                Vehicle Request
              </p>

              <h3 className="mt-1 text-xl font-bold text-white">
                Tell Frank what you need.
              </h3>

              <p className="mt-2 text-sm leading-6 text-white/60">
                Buy, rent, or lease-to-own. Submit your preferred car, budget,
                options, and timeline.
              </p>
            </div>

            <div className="grid gap-2">
              {navLinks.map((link, index) => (
                <motion.a
                  key={link.label}
                  href={link.href}
                  onClick={closeMenu}
                  initial={{ opacity: 0, x: -12 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05 }}
                  className="flex items-center justify-between rounded-xl border border-white/10 bg-white/[0.04] px-4 py-4 text-sm font-semibold text-white/80 transition hover:border-[#3b82f6]/40 hover:bg-[#3b82f6]/10 hover:text-white"
                >
                  {link.label}
                  <FiArrowUpRight className="text-[#60a5fa]" />
                </motion.a>
              ))}
            </div>

            <div className="mt-4 grid grid-cols-2 gap-3">
              <a
                href="tel:8182924112"
                onClick={closeMenu}
                className="flex items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/[0.06] px-4 py-3 text-sm font-semibold text-white"
              >
                <FiPhone />
                Call
              </a>

              <a
                href="#inquiry"
                onClick={closeMenu}
                className="flex items-center justify-center gap-2 rounded-xl bg-[#3b82f6] px-4 py-3 text-sm font-semibold text-white"
              >
                <FiSearch />
                Request
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      
    </>
  );
};

export default Navbar;