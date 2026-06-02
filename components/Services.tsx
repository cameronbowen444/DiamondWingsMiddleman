"use client";

import { motion } from "framer-motion";
import {
  FiArrowUpRight,
  FiCheck,
  FiMinus,
  FiX,
} from "react-icons/fi";

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
        className={`mx-auto flex h-9 w-9 items-center justify-center rounded-lg ${
          isMain
            ? "bg-[#3b82f6] text-white"
            : "bg-[#dbeafe] text-[#2563eb]"
        }`}
      >
        <FiCheck />
      </div>
    );
  }

  if (value === "No") {
    return (
      <div className="mx-auto flex h-9 w-9 items-center justify-center rounded-lg bg-slate-100 text-slate-400">
        <FiX />
      </div>
    );
  }

  return (
    <span className="mx-auto block max-w-[150px] text-center text-sm leading-6 text-slate-500">
      {value}
    </span>
  );
};

const Services = () => {
  return (
    <section
      id="services"
      className="relative overflow-hidden bg-[#f4f7fb] px-5 py-24 text-[#0b1320]"
    >
      {/* Background */}
      <div className="absolute right-[-10%] top-[-15%] h-96 w-96 rounded-full bg-[#3b82f6]/10 blur-3xl" />
      <div className="absolute bottom-[-20%] left-[-10%] h-96 w-96 rounded-full bg-[#60a5fa]/10 blur-3xl" />

      <div className="relative mx-auto max-w-7xl">
        {/* Header */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.35 }}
          variants={fadeUp}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mx-auto max-w-4xl text-center"
        >
          <p className="text-xs font-bold uppercase tracking-[0.24em] text-[#2563eb]">
            Why Diamond Wings
          </p>

          <h2 className="mt-4 text-4xl font-bold tracking-[-0.04em] md:text-6xl">
            A smarter way to find the car you actually want.
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-slate-600 md:text-lg">
            Instead of only choosing from one dealer’s inventory or scrolling
            online by yourself, Diamond Wings starts with your request,
            preferences, budget, and timeline.
          </p>
        </motion.div>

        {/* Service Pills */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.55, delay: 0.1, ease: "easeOut" }}
          className="mx-auto mt-10 grid max-w-3xl grid-cols-2 gap-3 md:grid-cols-4"
        >
          {services.map((service) => (
            <div
              key={service}
              className="rounded-xl border border-slate-200 bg-white px-4 py-3 text-center text-sm font-bold text-slate-700 shadow-sm"
            >
              {service}
            </div>
          ))}
        </motion.div>

        {/* Desktop Comparison Table */}
        <motion.div
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.65, delay: 0.15, ease: "easeOut" }}
          className="mt-14 hidden overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-[0_24px_70px_rgba(15,23,42,0.08)] lg:block"
        >
          <div className="grid grid-cols-[1.4fr_1fr_1fr_1fr] border-b border-slate-200 bg-[#0b1320] text-white">
            <div className="p-6">
              <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#93c5fd]">
                Features that help you
              </p>
            </div>

            <div className="border-l border-white/10 p-6 text-center">
              <p className="text-lg font-bold">Diamond Wings</p>
              <p className="mt-1 text-sm text-white/60">
                Personal car finder
              </p>
            </div>

            <div className="border-l border-white/10 p-6 text-center">
              <p className="text-lg font-bold">Dealership</p>
              <p className="mt-1 text-sm text-white/60">Their inventory</p>
            </div>

            <div className="border-l border-white/10 p-6 text-center">
              <p className="text-lg font-bold">Online Search</p>
              <p className="mt-1 text-sm text-white/60">You search alone</p>
            </div>
          </div>

          {comparisonRows.map((row, index) => (
            <div
              key={row.feature}
              className={`grid grid-cols-[1.4fr_1fr_1fr_1fr] items-center border-b border-slate-200 last:border-b-0 ${
                index % 2 === 0 ? "bg-white" : "bg-[#eef3f8]"
              }`}
            >
              <div className="p-6 text-base font-semibold text-[#0b1320]">
                {row.feature}
              </div>

              <div className="border-l border-slate-200 p-6 text-center">
                {renderStatus(row.diamondWings, true)}
              </div>

              <div className="border-l border-slate-200 p-6 text-center">
                {renderStatus(row.dealership)}
              </div>

              <div className="border-l border-slate-200 p-6 text-center">
                {renderStatus(row.online)}
              </div>
            </div>
          ))}
        </motion.div>

        {/* Mobile List */}
        <div className="mt-12 grid gap-4 lg:hidden">
          {comparisonRows.map((row, index) => (
            <motion.div
              key={row.feature}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{
                duration: 0.5,
                delay: index * 0.04,
                ease: "easeOut",
              }}
              className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm"
            >
              <h3 className="text-lg font-bold">{row.feature}</h3>

              <div className="mt-5 grid gap-3">
                <div className="rounded-xl bg-[#eff6ff] p-4">
                  <div className="flex items-center justify-between gap-4">
                    <p className="font-bold text-[#2563eb]">Diamond Wings</p>
                    <FiCheck className="text-xl text-[#2563eb]" />
                  </div>
                  <p className="mt-1 text-sm text-slate-600">
                    Included with your request
                  </p>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div className="rounded-xl bg-slate-50 p-4">
                    <p className="text-sm font-bold text-slate-700">
                      Dealership
                    </p>
                    <p className="mt-1 text-sm leading-5 text-slate-500">
                      {row.dealership === "No" ? "Not included" : row.dealership}
                    </p>
                  </div>

                  <div className="rounded-xl bg-slate-50 p-4">
                    <p className="text-sm font-bold text-slate-700">
                      Online
                    </p>
                    <p className="mt-1 text-sm leading-5 text-slate-500">
                      {row.online === "No" ? "Not included" : row.online}
                    </p>
                  </div>
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
          transition={{ duration: 0.55, ease: "easeOut" }}
          className="mt-14 flex flex-col items-center justify-between gap-5 rounded-2xl bg-[#0b1320] p-6 text-white shadow-[0_24px_70px_rgba(15,23,42,0.2)] md:flex-row md:p-8"
        >
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#93c5fd]">
              Start With The Details
            </p>
            <h3 className="mt-2 text-2xl font-bold md:text-3xl">
              Tell us what you want. We’ll help point the search in the right direction.
            </h3>
          </div>

          <a
            href="#inquiry"
            className="flex shrink-0 items-center justify-center gap-2 rounded-xl bg-[#3b82f6] px-6 py-4 text-sm font-bold uppercase tracking-[0.14em] text-white shadow-[0_16px_40px_rgba(59,130,246,0.3)] transition hover:-translate-y-0.5 hover:bg-[#2563eb]"
          >
            Start Request
            <FiArrowUpRight />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;