"use client";

import { motion, type Variants } from "framer-motion";
import {
  FiArrowUpRight,
  FiCheckCircle,
  FiClipboard,
  FiMessageCircle,
  FiSearch,
} from "react-icons/fi";

const steps = [
  {
    number: "01",
    title: "Submit Your Request",
    text: "Tell us what vehicle you’re looking for, including make, model, year, budget, and how soon you need it.",
    icon: FiClipboard,
  },
  {
    number: "02",
    title: "Frank Reviews the Details",
    text: "Frank looks over your request to understand what matters most — price, features, timing, and payment style.",
    icon: FiMessageCircle,
  },
  {
    number: "03",
    title: "Options Are Searched",
    text: "Instead of browsing random inventory, your request helps guide the search toward vehicles that actually fit.",
    icon: FiSearch,
  },
  {
    number: "04",
    title: "Choose the Right Fit",
    text: "Once possible matches are found, you review the options and move forward with the vehicle that works best.",
    icon: FiCheckCircle,
  },
];

const container: Variants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const fadeUp: Variants = {
  hidden: {
    opacity: 0,
    y: 18,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.55,
      ease: "easeOut",
    },
  },
};

const HowItWorks = () => {
  return (
    <section
      id="how-it-works"
      className="relative overflow-hidden bg-[#f4f7fb] px-5 py-24 text-[#0b1320]"
    >
      {/* Soft background */}
      <div className="absolute left-[-12%] top-[-20%] h-96 w-96 rounded-full bg-[#3b82f6]/10 blur-3xl" />
      <div className="absolute bottom-[-25%] right-[-12%] h-96 w-96 rounded-full bg-[#60a5fa]/15 blur-3xl" />

      <div className="relative mx-auto max-w-7xl">
        {/* Header */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.35 }}
          variants={container}
          className="mx-auto max-w-3xl text-center"
        >
          <motion.div
            variants={fadeUp}
            className="mx-auto mb-5 inline-flex items-center gap-3 rounded-xl border border-[#3b82f6]/15 bg-white px-4 py-2 shadow-sm"
          >
            <span className="h-2 w-2 rounded-full bg-[#3b82f6]" />
            <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#2563eb]">
              How It Works
            </p>
          </motion.div>

          <motion.h2
            variants={fadeUp}
            className="text-4xl font-bold tracking-[-0.04em] md:text-6xl"
          >
            A simple way to request the car you actually want.
          </motion.h2>

          <motion.p
            variants={fadeUp}
            className="mx-auto mt-5 max-w-2xl text-base leading-8 text-slate-600 md:text-lg"
          >
            No endless inventory scrolling. You tell Diamond Wings what you’re
            looking for, and the request becomes the starting point.
          </motion.p>
        </motion.div>

        {/* Steps */}
        <div className="relative mt-16">
          <div className="absolute left-0 right-0 top-[86px] hidden h-px bg-gradient-to-r from-transparent via-[#3b82f6]/30 to-transparent lg:block" />

          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            variants={container}
            className="grid gap-5 md:grid-cols-2 lg:grid-cols-4"
          >
            {steps.map((step) => {
              const Icon = step.icon;

              return (
                <motion.div
                  key={step.number}
                  variants={fadeUp}
                  whileHover={{
                    y: -4,
                    transition: { duration: 0.2 },
                  }}
                  className="group relative rounded-2xl border border-slate-200 bg-white p-6 shadow-[0_18px_45px_rgba(15,23,42,0.06)] transition-colors duration-300 hover:border-[#3b82f6]/30"
                >
                  <div className="mb-7 flex items-center justify-between">
                    <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-[#eff6ff] text-2xl text-[#2563eb] transition-colors duration-300 group-hover:bg-[#3b82f6] group-hover:text-white">
                      <Icon />
                    </div>

                    <span className="text-sm font-bold text-slate-300 transition-colors duration-300 group-hover:text-[#3b82f6]">
                      {step.number}
                    </span>
                  </div>

                  <h3 className="text-2xl font-bold tracking-[-0.03em]">
                    {step.title}
                  </h3>

                  <p className="mt-4 leading-7 text-slate-600">{step.text}</p>

                  <div className="mt-7 flex translate-y-1 items-center gap-2 text-sm font-bold text-[#2563eb] opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                    Step {step.number}
                    <FiArrowUpRight />
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>

        {/* Bottom CTA strip */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.55, ease: "easeOut" }}
          className="mt-14 overflow-hidden rounded-2xl border border-[#3b82f6]/15 bg-[#0b1320] p-6 text-white shadow-[0_24px_70px_rgba(15,23,42,0.2)] md:p-8"
        >
          <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#93c5fd]">
                Ready to Start?
              </p>

              <h3 className="mt-2 text-2xl font-bold md:text-3xl">
                Send the details. Let the search start with your needs.
              </h3>
            </div>

            <a
              href="#inquiry"
              className="flex items-center justify-center gap-2 rounded-xl bg-[#3b82f6] px-6 py-4 text-sm font-bold uppercase tracking-[0.14em] text-white shadow-[0_16px_40px_rgba(59,130,246,0.3)] transition hover:-translate-y-0.5 hover:bg-[#2563eb]"
            >
              Start Request
              <FiArrowUpRight />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HowItWorks;