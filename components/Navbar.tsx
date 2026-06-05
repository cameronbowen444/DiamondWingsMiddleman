"use client";

import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { FiMenu, FiPhone, FiX } from "react-icons/fi";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "How It Works", href: "#how-it-works" },
  { label: "Services", href: "#services" },
  { label: "Inquiry", href: "#inquiry" },
];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 12);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      <header
        className={`fixed left-0 top-0 z-50 w-full transition-all duration-300 ${
          isScrolled
            ? "bg-black/55 shadow-[0_10px_35px_rgba(0,0,0,0.25)] backdrop-blur-md"
            : "bg-transparent"
        }`}
      >
        <nav
          className={`mx-auto flex max-w-7xl items-center justify-between px-5 transition-all duration-300 md:px-8 ${
            isScrolled ? "py-3" : "py-6"
          }`}
        >
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2.5">
            <div className="relative h-8 w-8 overflow-hidden rounded-full">
              <Image
                src="/assets/logo.png"
                alt="Diamond Wings logo"
                fill
                className="object-contain"
                priority
              />
            </div>

            <span className="text-sm font-semibold tracking-tight text-white">
              DW Auto Sales and Rentals
            </span>
          </Link>

          {/* Right Side */}
          <div className="hidden items-center gap-8 lg:flex">
            {/* Desktop Links */}
            <div className="flex items-center gap-8">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-xs font-medium text-white/75 transition hover:text-white"
                >
                  {link.label}
                </a>
              ))}
            </div>

            {/* Desktop CTA */}
            <div className="flex items-center gap-3">
              <a
                href="tel:8182924112"
                className="text-xs font-medium text-white/75 transition hover:text-white"
              >
                Call
              </a>

              <a
                href="#inquiry"
                className="rounded-md bg-red-600 px-5 py-2.5 text-xs font-semibold text-white shadow-[0_10px_25px_rgba(220,38,38,0.28)] transition hover:bg-red-500"
              >
                Get Started
              </a>
            </div>
          </div>

          {/* Mobile Button */}
          <button
            onClick={() => setMenuOpen(true)}
            className="flex h-9 w-9 items-center justify-center rounded-md bg-white/10 text-lg text-white backdrop-blur-md lg:hidden"
            aria-label="Open menu"
          >
            <FiMenu />
          </button>
        </nav>
      </header>

      {/* Mobile Fullscreen Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.aside
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.28, ease: "easeOut" }}
            className="fixed inset-0 z-[100] h-screen w-screen overflow-y-auto bg-[#101010] text-white lg:hidden"
          >
            <div className="flex min-h-screen flex-col px-6 py-6">
              {/* Top */}
              <div className="flex items-center justify-between">
                <Link
                  href="/"
                  onClick={closeMenu}
                  className="flex items-center gap-2.5"
                >
                  <div className="relative h-8 w-8 overflow-hidden rounded-full">
                    <Image
                      src="/assets/logo.png"
                      alt="Diamond Wings logo"
                      fill
                      className="object-contain"
                      priority
                    />
                  </div>

                  <span className="text-sm font-semibold tracking-tight text-white">
                    DW Auto Sales and Rentals
                  </span>
                </Link>

                <button
                  onClick={closeMenu}
                  className="flex h-9 w-9 items-center justify-center rounded-md bg-white/10 text-lg text-white"
                  aria-label="Close menu"
                >
                  <FiX />
                </button>
              </div>

              {/* Mobile Links */}
              <div className="mt-20 flex flex-col">
                {navLinks.map((link, index) => (
                  <motion.a
                    key={link.label}
                    href={link.href}
                    onClick={closeMenu}
                    initial={{ opacity: 0, x: 18 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.08 + index * 0.04 }}
                    className="border-b border-white/10 py-5 text-xl font-light text-white/85"
                  >
                    {link.label}
                  </motion.a>
                ))}
              </div>

              {/* Bottom CTA */}
              <div className="mt-auto grid gap-3 pt-12">
                <a
                  href="#inquiry"
                  onClick={closeMenu}
                  className="rounded-md bg-red-600 px-5 py-3 text-center text-sm font-semibold text-white"
                >
                  Get Started
                </a>

                <a
                  href="tel:8182924112"
                  onClick={closeMenu}
                  className="flex items-center justify-center gap-2 rounded-md border border-white/15 px-5 py-3 text-sm font-medium text-white/75"
                >
                  <FiPhone />
                  Call Frank
                </a>
              </div>
            </div>
          </motion.aside>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
