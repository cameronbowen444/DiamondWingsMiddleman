"use client";

import { motion } from "framer-motion";
import {
  FiArrowUpRight,
  FiCalendar,
  FiCheck,
  FiDollarSign,
  FiMail,
  FiMapPin,
  FiPhone,
  FiSearch,
  FiSliders,
  FiUser,
} from "react-icons/fi";

const requestTypes = ["Buy", "Rent", "Lease-to-own", "Not sure yet"];

const vehicleTips = [
  "Specific make, model, or trim",
  "Budget or monthly payment goal",
  "Color, mileage, seats, or features",
  "How soon you need the vehicle",
];

const fadeUp = {
  hidden: { opacity: 0, y: 18 },
  show: { opacity: 1, y: 0 },
};

const inputClass =
  "w-full rounded-xl border border-white/10 bg-white/[0.06] px-4 py-3.5 text-sm font-medium text-white outline-none transition placeholder:text-white/35 focus:border-red-500/60 focus:bg-white/[0.09] focus:ring-4 focus:ring-red-600/10";

const labelClass =
  "mb-2 block text-[11px] font-semibold uppercase tracking-[0.18em] text-white/55";

const iconClass =
  "pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-white/35";

const InquirySection = () => {
  return (
    <section
      id="inquiry"
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
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeUp}
          transition={{ duration: 0.55, ease: "easeOut" }}
          className="mx-auto max-w-3xl text-center"
        >
          <p className="text-xs font-medium uppercase tracking-[0.32em] text-red-500">
            Vehicle Request
          </p>

          <h2 className="mx-auto mt-4 max-w-3xl text-3xl font-medium tracking-[-0.04em] text-white md:text-4xl lg:text-5xl">
            Tell us what car you want.
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-white/45 md:text-base">
            Send your ideal vehicle, budget, timeline, and must-have details.
            Frank will review your request and follow up with the next step.
          </p>
        </motion.div>

        {/* Main Request Card */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.18 }}
          transition={{ duration: 0.65, ease: "easeOut" }}
          className="mt-14 overflow-hidden rounded-xl border border-white/10 bg-[#1b1b1b] shadow-[0_18px_60px_rgba(0,0,0,0.35)]"
        >
          <div className="grid lg:grid-cols-[0.8fr_1.2fr]">
            {/* Left Panel */}
            <div className="relative overflow-hidden border-b border-white/10 bg-[#111111] p-6 md:p-8 lg:border-b-0 lg:border-r lg:p-10">
              <div className="absolute right-[-30%] top-[-20%] h-[320px] w-[320px] rounded-full bg-red-600/25 blur-[90px]" />

              <div className="relative z-10 flex h-full flex-col">
                <div>
                  <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.06] px-4 py-2">
                    <span className="h-2 w-2 rounded-full bg-red-500" />
                    <span className="text-[10px] font-medium uppercase tracking-[0.22em] text-white/55">
                      Diamond Wings Auto
                    </span>
                  </div>

                  <h3 className="max-w-md text-3xl font-medium leading-tight tracking-[-0.04em] md:text-4xl">
                    One request. Better direction.
                  </h3>

                  <p className="mt-4 max-w-md text-sm leading-7 text-white/45">
                    This form collects the details that actually matter before
                    starting the search.
                  </p>
                </div>

                <div className="mt-10 grid gap-3">
                  {vehicleTips.map((tip) => (
                    <div
                      key={tip}
                      className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/[0.06] px-4 py-3"
                    >
                      <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-red-600 text-white">
                        <FiCheck className="text-sm" />
                      </div>

                      <p className="text-sm text-white/60">{tip}</p>
                    </div>
                  ))}
                </div>

                <div className="mt-auto pt-10">
                  <div className="rounded-xl border border-white/10 bg-white/[0.06] p-5">
                    <p className="text-[10px] font-medium uppercase tracking-[0.24em] text-red-400">
                      Need help faster?
                    </p>

                    <a
                      href="tel:8186264592"
                      className="mt-3 inline-flex items-center gap-2 text-lg font-medium text-white"
                    >
                      <FiPhone />
                      Call Frank
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Form */}
            <form className="p-5 md:p-8 lg:p-10">
              {/* Request Type */}
              <div>
                <p className="mb-4 text-[10px] font-medium uppercase tracking-[0.28em] text-red-400">
                  I’m looking to
                </p>

                <div className="grid gap-3 sm:grid-cols-2">
                  {requestTypes.map((type) => (
  <label
    key={type}
    className="relative flex cursor-pointer items-center justify-between gap-4 rounded-xl border border-white/10 bg-white/[0.06] p-4 transition hover:border-red-600/35 hover:bg-white/[0.08]"
  >
    <input
      type="radio"
      name="requestType"
      value={type}
      className="peer sr-only"
    />

    <span className="relative z-10 text-sm font-medium text-white/65 transition peer-checked:text-white">
      {type}
    </span>

    {/* Circle */}
    <span className="relative z-10 flex h-5 w-5 shrink-0 items-center justify-center rounded-full border border-white/25 transition peer-checked:border-red-600 peer-checked:bg-red-600">
      <FiCheck className="text-xs text-white opacity-0 transition peer-checked:opacity-100" />
    </span>

    {/* Selected card overlay */}
    <span className="pointer-events-none absolute inset-0 rounded-xl border border-transparent transition peer-checked:border-red-600/60 peer-checked:bg-red-600/[0.08]" />
  </label>
))}
                </div>
              </div>

              {/* Contact */}
              <div className="mt-9">
                <p className="mb-4 text-[10px] font-medium uppercase tracking-[0.28em] text-red-400">
                  Your Contact
                </p>

                <div className="grid gap-4 md:grid-cols-2">
                  <label>
                    <span className={labelClass}>Full Name</span>
                    <div className="relative">
                      <FiUser className={iconClass} />
                      <input
                        type="text"
                        placeholder="Your name"
                        className={`${inputClass} pl-11`}
                      />
                    </div>
                  </label>

                  <label>
                    <span className={labelClass}>Phone Number</span>
                    <div className="relative">
                      <FiPhone className={iconClass} />
                      <input
                        type="tel"
                        placeholder="(555) 555-5555"
                        className={`${inputClass} pl-11`}
                      />
                    </div>
                  </label>

                  <label className="md:col-span-2">
                    <span className={labelClass}>Email Address</span>
                    <div className="relative">
                      <FiMail className={iconClass} />
                      <input
                        type="email"
                        placeholder="you@example.com"
                        className={`${inputClass} pl-11`}
                      />
                    </div>
                  </label>
                </div>
              </div>

              {/* Vehicle Details */}
              <div className="mt-9">
                <p className="mb-4 text-[10px] font-medium uppercase tracking-[0.28em] text-red-400">
                  Vehicle Details
                </p>

                <div className="grid gap-4 md:grid-cols-2">
                  <label>
                    <span className={labelClass}>Make / Model</span>
                    <div className="relative">
                      <FiSearch className={iconClass} />
                      <input
                        type="text"
                        placeholder="Toyota Camry XSE, BMW X5..."
                        className={`${inputClass} pl-11`}
                      />
                    </div>
                  </label>

                  <label>
                    <span className={labelClass}>Budget</span>
                    <div className="relative">
                      <FiDollarSign className={iconClass} />
                      <input
                        type="text"
                        placeholder="$600/month, $35k total..."
                        className={`${inputClass} pl-11`}
                      />
                    </div>
                  </label>

                  <label>
                    <span className={labelClass}>Needed By</span>
                    <div className="relative">
                      <FiCalendar className={iconClass} />
                      <input type="date" className={`${inputClass} pl-11`} />
                    </div>
                  </label>

                  <label>
                    <span className={labelClass}>Location</span>
                    <div className="relative">
                      <FiMapPin className={iconClass} />
                      <input
                        type="text"
                        placeholder="Los Angeles, Valley..."
                        className={`${inputClass} pl-11`}
                      />
                    </div>
                  </label>
                </div>
              </div>

              {/* Notes */}
              <div className="mt-9">
                <label>
                  <span className={labelClass}>Specs, options, and notes</span>

                  <div className="relative">
                    <FiSliders className="pointer-events-none absolute left-4 top-4 text-white/35" />
                    <textarea
                      rows={6}
                      placeholder="Color, mileage, trim, seats, interior, must-have features, down payment, credit situation, trade-in, delivery timeline, or anything else Frank should know."
                      className={`${inputClass} resize-none pl-11 leading-7`}
                    />
                  </div>
                </label>
              </div>

              {/* Submit */}
              <div className="mt-8 flex flex-col gap-4 border-t border-white/10 pt-6 md:flex-row md:items-center md:justify-between">
                <p className="max-w-md text-sm leading-6 text-white/40">
                  By submitting, you’re requesting follow-up about your vehicle
                  needs.
                </p>

                <motion.button
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  className="inline-flex items-center justify-center gap-2 rounded-md bg-red-600 px-6 py-3.5 text-xs font-semibold uppercase tracking-[0.16em] text-white shadow-[0_16px_40px_rgba(220,38,38,0.25)] transition hover:bg-red-500"
                >
                  Submit Request
                  <FiArrowUpRight />
                </motion.button>
              </div>
            </form>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default InquirySection;