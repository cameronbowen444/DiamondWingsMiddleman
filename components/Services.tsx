"use client";

import { motion } from "framer-motion";
import { FiArrowUpRight, FiCheck, FiX } from "react-icons/fi";

const comparisonRows = [
  {
    feature: "Request any make or model",
    diamondWings: "Yes",
    dealership: "Limited to their inventory",
    online: "Only what you can find",
  },
  {
    feature: "Buy, rent, or lease-to-own options",
    diamondWings: "Yes",
    dealership: "Usually limited",
    online: "Depends on listing",
  },
  {
    feature: "Personal help from start to finish",
    diamondWings: "Yes",
    dealership: "Sometimes",
    online: "No",
  },
  {
    feature: "Search based on your budget",
    diamondWings: "Yes",
    dealership: "Depends",
    online: "You filter alone",
  },
  {
    feature: "Help narrowing down the right vehicle",
    diamondWings: "Yes",
    dealership: "Limited",
    online: "No",
  },
  {
    feature: "Tell someone exactly what you need",
    diamondWings: "Yes",
    dealership: "Sometimes",
    online: "No",
  },
  {
    feature: "No need to browse endless listings",
    diamondWings: "Yes",
    dealership: "No",
    online: "No",
  },
];

const services = ["Buy a car", "Rent a car", "Lease-to-own", "Custom search"];

const fadeUp = {
  hidden: { opacity: 0, y: 18 },
  show: { opacity: 1, y: 0 },
};

const renderStatus = (value: string, isMain = false) => {
  if (value === "Yes") {
    return (
      <div
        className={`mx-auto flex h-9 w-9 items-center justify-center rounded-full ${
          isMain
            ? "bg-red-600 text-white shadow-[0_0_28px_rgba(220,38,38,0.32)]"
            : "bg-red-600/15 text-red-400"
        }`}
      >
        <FiCheck className="text-base" />
      </div>
    );
  }

  if (value === "No") {
    return (
      <div className="mx-auto flex h-9 w-9 items-center justify-center rounded-full bg-white/[0.06] text-white/25">
        <FiX className="text-base" />
      </div>
    );
  }

  return (
    <span className="mx-auto block max-w-[145px] text-center text-sm leading-6 text-white/45">
      {value}
    </span>
  );
};

const Services = () => {
  return (
    <section
      id="services"
      className="relative overflow-hidden bg-black px-5 py-24 text-white md:px-8"
    >
      {/* Background glow */}
      <div className="absolute left-1/2 top-[-20%] h-[420px] w-[720px] -translate-x-1/2 rounded-full bg-red-600/10 blur-[140px]" />
      <div className="absolute bottom-[-30%] left-[-15%] h-[420px] w-[420px] rounded-full bg-red-600/10 blur-[130px]" />
      <div className="absolute bottom-[-30%] right-[-15%] h-[420px] w-[420px] rounded-full bg-white/[0.04] blur-[130px]" />

      <div className="relative mx-auto max-w-7xl">
        {/* Header */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.35 }}
          variants={fadeUp}
          transition={{ duration: 0.55, ease: "easeOut" }}
          className="mx-auto max-w-3xl text-center"
        >
          <p className="text-xs font-medium uppercase tracking-[0.32em] text-red-500">
            Why Diamond Wings
          </p>

          <h2 className="mx-auto mt-4 max-w-3xl text-3xl font-medium tracking-[-0.04em] text-white md:text-4xl lg:text-5xl">
            A smarter way to find your next vehicle.
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-white/45 md:text-base">
            Buy, rent, or lease-to-own with a request-first process built around
            what you actually want.
          </p>
        </motion.div>

        {/* Service Pills */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5, delay: 0.08, ease: "easeOut" }}
          className="mx-auto mt-10 flex max-w-3xl flex-wrap justify-center gap-3"
        >
          {services.map((service) => (
            <a
              key={service}
              href="#inquiry"
              className="rounded-full border border-white/10 bg-[#1b1b1b] px-5 py-3 text-xs font-medium uppercase tracking-[0.16em] text-white/60 transition hover:border-red-600/35 hover:bg-[#202020] hover:text-white"
            >
              {service}
            </a>
          ))}
        </motion.div>

        {/* Desktop Comparison Table */}
        <motion.div
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.6, delay: 0.12, ease: "easeOut" }}
          className="mt-14 hidden overflow-hidden rounded-xl border border-white/10 bg-[#1b1b1b] shadow-[0_18px_60px_rgba(0,0,0,0.35)] lg:block"
        >
          <div className="grid grid-cols-[1.35fr_1fr_1fr_1fr] border-b border-white/10 bg-[#111111] text-white">
            <div className="p-5">
              <p className="text-xs font-medium uppercase tracking-[0.24em] text-red-400">
                Compare The Experience
              </p>
            </div>

            <div className="border-l border-white/10 p-5 text-center">
              <p className="text-base font-medium">Diamond Wings</p>
              <p className="mt-1 text-xs text-white/35">Personal search</p>
            </div>

            <div className="border-l border-white/10 p-5 text-center">
              <p className="text-base font-medium">Dealership</p>
              <p className="mt-1 text-xs text-white/35">Their inventory</p>
            </div>

            <div className="border-l border-white/10 p-5 text-center">
              <p className="text-base font-medium">Online Search</p>
              <p className="mt-1 text-xs text-white/35">You search alone</p>
            </div>
          </div>

          {comparisonRows.map((row, index) => (
            <div
              key={row.feature}
              className={`grid grid-cols-[1.35fr_1fr_1fr_1fr] items-center border-b border-white/10 last:border-b-0 ${
                index % 2 === 0 ? "bg-[#1b1b1b]" : "bg-[#181818]"
              }`}
            >
              <div className="p-5 text-sm font-medium text-white/70">
                {row.feature}
              </div>

              <div className="border-l border-white/10 p-5 text-center">
                {renderStatus(row.diamondWings, true)}
              </div>

              <div className="border-l border-white/10 p-5 text-center">
                {renderStatus(row.dealership)}
              </div>

              <div className="border-l border-white/10 p-5 text-center">
                {renderStatus(row.online)}
              </div>
            </div>
          ))}
        </motion.div>

        {/* Mobile Benefits */}
        <div className="mt-12 grid gap-4 lg:hidden">
          {comparisonRows.map((row, index) => (
            <motion.div
              key={row.feature}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{
                duration: 0.45,
                delay: index * 0.035,
                ease: "easeOut",
              }}
              className="rounded-xl border border-white/10 bg-[#1b1b1b] px-5 py-5 shadow-[0_18px_60px_rgba(0,0,0,0.35)]"
            >
              <div className="flex items-center justify-between gap-5">
                <h3 className="text-base font-medium leading-6 tracking-[-0.03em] text-white/85">
                  {row.feature}
                </h3>

                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-red-600 text-white shadow-[0_12px_28px_rgba(220,38,38,0.28)]">
                  <FiCheck className="text-xl" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="mt-14 overflow-hidden rounded-xl border border-white/10 bg-[#1b1b1b] p-6 text-white shadow-[0_18px_60px_rgba(0,0,0,0.35)] md:p-7"
        >
          <div className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
            <div>
              <p className="text-[10px] font-medium uppercase tracking-[0.28em] text-red-400">
                Start With The Details
              </p>

              <h3 className="mt-2 max-w-3xl text-2xl font-medium leading-tight tracking-[-0.03em] md:text-3xl">
                Tell us what you want. We’ll help point the search in the right
                direction.
              </h3>
            </div>

            <a
              href="#inquiry"
              className="inline-flex shrink-0 items-center justify-center gap-2 rounded-md bg-red-600 px-5 py-3 text-xs font-semibold uppercase tracking-[0.16em] text-white transition hover:bg-red-500"
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

export default Services;