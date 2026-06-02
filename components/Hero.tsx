"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { FiArrowUpRight, FiCheckCircle, FiSearch } from "react-icons/fi";

const searchOptions = ["Buy", "Rent", "Lease-to-own", "Custom request"];

const requestItems = [
  "Preferred make, model, year, and trim",
  "Budget or monthly payment goal",
  "Color, mileage, features, and options",
  "Timeline for when you need the vehicle",
];

const fadeUp = {
  hidden: { opacity: 0, y: 26 },
  show: { opacity: 1, y: 0 },
};

const Hero = () => {
  return (
    <section className="relative min-h-screen overflow-hidden bg-[#0b1320] px-5 pt-32 text-white">
      {/* Background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(59,130,246,0.28),transparent_34%),radial-gradient(circle_at_bottom_right,rgba(96,165,250,0.16),transparent_35%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(11,19,32,0.15),rgba(11,19,32,0.98))]" />

      {/* Animated soft road-light background */}
      <div className="absolute inset-0 opacity-70">
        <motion.div
          animate={{
            x: [0, 26, 0],
            y: [0, -18, 0],
            scale: [1, 1.08, 1],
          }}
          transition={{
            duration: 9,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute left-[-10%] top-[18%] h-64 w-[55%] -rotate-6 rounded-full bg-[#3b82f6]/12 blur-3xl"
        />

        <motion.div
          animate={{
            x: [0, -22, 0],
            y: [0, 20, 0],
            scale: [1, 1.05, 1],
          }}
          transition={{
            duration: 11,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute right-[-12%] top-[12%] h-72 w-[45%] rotate-12 rounded-full bg-[#60a5fa]/10 blur-3xl"
        />

        <motion.div
          animate={{
            x: [0, 18, 0],
            scale: [1, 1.08, 1],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute bottom-[-10%] left-[12%] h-80 w-[60%] rounded-full bg-[#1d4ed8]/14 blur-3xl"
        />
      </div>

      {/* Subtle diagonal shine */}
      <motion.div
        initial={{ x: "-20%", opacity: 0 }}
        animate={{ x: "0%", opacity: 1 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        className="absolute inset-0 bg-[linear-gradient(120deg,transparent_0%,rgba(255,255,255,0.05)_35%,transparent_55%)]"
      />

      {/* Bottom depth fade */}
      <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-[#0b1320] to-transparent" />

      <div className="relative mx-auto grid min-h-[calc(100vh-8rem)] max-w-7xl items-center gap-12 pb-20 pt-10 lg:grid-cols-[1fr_0.95fr]">
        {/* Left Content */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="show"
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="show"
            transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
            className="mb-6 inline-flex items-center gap-3 rounded-xl border border-blue-400/20 bg-white/[0.05] px-4 py-2 backdrop-blur-xl"
          >
            <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#3b82f6]/15 text-[#93c5fd]">
              <FiSearch />
            </span>

            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#93c5fd]">
              Vehicle Finder Service
            </p>
          </motion.div>

          <motion.h1
            variants={fadeUp}
            initial="hidden"
            animate="show"
            transition={{ duration: 0.7, delay: 0.18, ease: "easeOut" }}
            className="max-w-4xl text-5xl font-bold leading-[1] tracking-[-0.05em] text-white md:text-7xl"
          >
            Tell us what car you want.
            <span className="block bg-gradient-to-r from-[#93c5fd] via-white to-[#3b82f6] bg-clip-text text-transparent">
              We help you find it.
            </span>
          </motion.h1>

          <motion.p
            variants={fadeUp}
            initial="hidden"
            animate="show"
            transition={{ duration: 0.7, delay: 0.28, ease: "easeOut" }}
            className="mt-7 max-w-2xl text-base leading-8 text-white/68 md:text-lg"
          >
            Diamond Wings Auto Concierge helps customers request the vehicle
            they want to buy, rent, or lease-to-own. Share your budget, specs,
            options, and timeline so Frank can help search for the right fit.
          </motion.p>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="show"
            transition={{ duration: 0.7, delay: 0.38, ease: "easeOut" }}
            className="mt-8 flex flex-col gap-3 sm:flex-row"
          >
            <motion.a
              whileHover={{ y: -3, scale: 1.01 }}
              whileTap={{ scale: 0.98 }}
              href="#inquiry"
              className="group flex items-center justify-center gap-2 rounded-xl bg-[#3b82f6] px-7 py-4 text-sm font-bold uppercase tracking-[0.14em] text-white shadow-[0_18px_45px_rgba(59,130,246,0.3)] transition hover:bg-[#2563eb]"
            >
              Start Vehicle Request
              <FiArrowUpRight className="transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </motion.a>

            <motion.a
              whileHover={{ y: -3, scale: 1.01 }}
              whileTap={{ scale: 0.98 }}
              href="#how-it-works"
              className="flex items-center justify-center rounded-xl border border-white/15 bg-white/[0.05] px-7 py-4 text-sm font-bold uppercase tracking-[0.14em] text-white/80 backdrop-blur-xl transition hover:border-[#60a5fa]/50 hover:bg-[#60a5fa]/10 hover:text-white"
            >
              See How It Works
            </motion.a>
          </motion.div>

          <motion.div
            initial="hidden"
            animate="show"
            transition={{ staggerChildren: 0.08, delayChildren: 0.52 }}
            className="mt-10 grid max-w-2xl grid-cols-2 gap-3 sm:grid-cols-4"
          >
            {searchOptions.map((option) => (
              <motion.div
                key={option}
                variants={fadeUp}
                whileHover={{ y: -4 }}
                className="rounded-xl border border-white/10 bg-white/[0.05] px-4 py-4 text-center backdrop-blur transition hover:border-[#60a5fa]/40 hover:bg-[#60a5fa]/10"
              >
                <p className="text-sm font-semibold text-white/85">{option}</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* Right Image/Card */}
        <motion.div
          initial={{ opacity: 0, x: 42, scale: 0.96 }}
          animate={{ opacity: 1, x: 0, scale: 1 }}
          transition={{ duration: 0.85, delay: 0.3, ease: "easeOut" }}
          className="relative"
        >
          <motion.div
            animate={{
              opacity: [0.55, 0.9, 0.55],
              scale: [1, 1.04, 1],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute -inset-5 rounded-[2rem] bg-[#3b82f6]/20 blur-3xl"
          />

          <motion.div
            whileHover={{ y: -6 }}
            transition={{ duration: 0.3 }}
            className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.06] p-3 shadow-[0_30px_90px_rgba(0,0,0,0.45)] backdrop-blur-xl"
          >
            <div className="relative h-[430px] overflow-hidden rounded-xl md:h-[540px]">
              <Image
                src="/assets/hero.jpg"
                alt="Car key handoff"
                fill
                priority
                className="object-cover"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-[#0b1320] via-[#0b1320]/20 to-transparent" />

              {/* Bottom Info Card */}
              <motion.div
                initial={{ opacity: 0, y: 28 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.85, ease: "easeOut" }}
                className="absolute bottom-4 left-4 right-4 rounded-xl border border-white/10 bg-[#0b1320]/82 p-5 shadow-[0_18px_45px_rgba(2,8,23,0.45)] backdrop-blur-xl"
              >
                <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#93c5fd]">
                  Request Details
                </p>

                <h2 className="mt-2 text-2xl font-bold text-white">
                  Be specific. We’ll use the details.
                </h2>

                <div className="mt-4 grid gap-3">
                  {requestItems.map((item, index) => (
                    <motion.div
                      key={item}
                      initial={{ opacity: 0, x: -12 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{
                        duration: 0.45,
                        delay: 1 + index * 0.08,
                        ease: "easeOut",
                      }}
                      className="flex items-start gap-3 text-sm leading-6 text-white/70"
                    >
                      <FiCheckCircle className="mt-1 shrink-0 text-[#60a5fa]" />
                      <span>{item}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Floating Cards */}
          <motion.div
            initial={{ opacity: 0, x: -24, y: 10 }}
            animate={{ opacity: 1, x: 0, y: 0 }}
            transition={{ duration: 0.7, delay: 0.95, ease: "easeOut" }}
            className="absolute -left-3 top-8 hidden rounded-xl border border-white/10 bg-white/[0.08] px-5 py-4 shadow-[0_18px_45px_rgba(2,8,23,0.38)] backdrop-blur-xl md:block"
          >
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#93c5fd]">
              No Inventory Needed
            </p>
            <p className="mt-1 text-sm text-white/70">
              Request the car you want
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20, y: 16 }}
            animate={{ opacity: 1, x: 0, y: 0 }}
            transition={{ duration: 0.7, delay: 1.05, ease: "easeOut" }}
            className="absolute -bottom-4 right-6 hidden rounded-xl border border-white/10 bg-[#3b82f6] px-5 py-4 shadow-[0_18px_45px_rgba(59,130,246,0.35)] md:block"
          >
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-blue-100">
              Options
            </p>
            <p className="mt-1 text-sm font-semibold text-white">
              Buy • Rent • Lease
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;