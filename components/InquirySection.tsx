"use client";

import { motion } from "framer-motion";
import {
  FiArrowUpRight,
  FiCalendar,
  FiCheckCircle,
  FiDollarSign,
  FiMail,
  FiMapPin,
  FiPhone,
  FiSearch,
  FiSliders,
  FiUser,
} from "react-icons/fi";

const requestTypes = ["Buy", "Rent", "Lease-to-own", "Not sure yet"];

const detailTips = [
  "Make, model, year, and trim",
  "Monthly payment or total budget",
  "Color, mileage, seats, and features",
  "When you need the vehicle",
];

const fadeUp = {
  hidden: { opacity: 0, y: 18 },
  show: { opacity: 1, y: 0 },
};

const InquirySection = () => {
  return (
    <section
      id="inquiry"
      className="relative overflow-hidden bg-[#f4f7fb] px-5 py-24 text-[#0b1320]"
    >
      {/* Background */}
      <div className="absolute right-[-12%] top-[-18%] h-96 w-96 rounded-full bg-[#3b82f6]/10 blur-3xl" />
      <div className="absolute bottom-[-22%] left-[-12%] h-96 w-96 rounded-full bg-[#60a5fa]/12 blur-3xl" />

      <div className="relative mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.85fr_1.15fr]">
        {/* Left Content */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          variants={fadeUp}
          className="lg:sticky lg:top-28 lg:self-start"
        >
          <div className="mb-5 inline-flex items-center gap-3 rounded-xl border border-[#3b82f6]/15 bg-white px-4 py-2 shadow-sm">
            <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#eff6ff] text-[#2563eb]">
              <FiSearch />
            </span>

            <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#2563eb]">
              Start Your Request
            </p>
          </div>

          <h2 className="text-4xl font-bold tracking-[-0.04em] md:text-6xl">
            Tell Frank exactly what you’re looking for.
          </h2>

          <p className="mt-5 max-w-xl text-base leading-8 text-slate-600 md:text-lg">
            This is where the search starts. Share the vehicle, budget, payment
            style, options, and timeline so Diamond Wings can understand what
            kind of car fits your needs.
          </p>

          <div className="mt-8 grid gap-3">
            {detailTips.map((tip) => (
              <div
                key={tip}
                className="flex items-center gap-3 rounded-xl border border-slate-200 bg-white p-4 shadow-sm"
              >
                <FiCheckCircle className="shrink-0 text-xl text-[#2563eb]" />
                <p className="text-sm font-semibold text-slate-700">{tip}</p>
              </div>
            ))}
          </div>

          <div className="mt-8 rounded-2xl border border-[#3b82f6]/15 bg-[#eff6ff] p-5">
            <p className="text-sm font-semibold leading-7 text-slate-700">
              The more details you include, the easier it is to understand what
              you want and what options may make sense.
            </p>
          </div>
        </motion.div>

        {/* Form */}
        <motion.form
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.18 }}
          transition={{ duration: 0.65, ease: "easeOut" }}
          className="rounded-2xl border border-slate-200 bg-white p-5 shadow-[0_24px_70px_rgba(15,23,42,0.08)] md:p-7"
        >
          <div className="mb-7 rounded-xl border border-slate-200 bg-[#f8fafc] p-5">
            <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#2563eb]">
              Vehicle Inquiry Form
            </p>
            <h3 className="mt-2 text-2xl font-bold text-[#0b1320]">
              Request details for buy, rent, or lease-to-own.
            </h3>
          </div>

          {/* Contact Info */}
          <div>
            <p className="mb-4 text-sm font-bold uppercase tracking-[0.18em] text-[#2563eb]">
              Contact Information
            </p>

            <div className="grid gap-4 md:grid-cols-2">
              <label>
                <span className="mb-2 flex items-center gap-2 text-sm font-semibold text-slate-700">
                  <FiUser className="text-[#2563eb]" />
                  Full Name
                </span>
                <input
                  type="text"
                  placeholder="Your name"
                  className="w-full rounded-xl border border-slate-200 bg-white px-4 py-4 text-[#0b1320] outline-none transition placeholder:text-slate-400 focus:border-[#3b82f6] focus:ring-4 focus:ring-[#3b82f6]/10"
                />
              </label>

              <label>
                <span className="mb-2 flex items-center gap-2 text-sm font-semibold text-slate-700">
                  <FiPhone className="text-[#2563eb]" />
                  Phone Number
                </span>
                <input
                  type="tel"
                  placeholder="(555) 555-5555"
                  className="w-full rounded-xl border border-slate-200 bg-white px-4 py-4 text-[#0b1320] outline-none transition placeholder:text-slate-400 focus:border-[#3b82f6] focus:ring-4 focus:ring-[#3b82f6]/10"
                />
              </label>

              <label className="md:col-span-2">
                <span className="mb-2 flex items-center gap-2 text-sm font-semibold text-slate-700">
                  <FiMail className="text-[#2563eb]" />
                  Email Address
                </span>
                <input
                  type="email"
                  placeholder="you@example.com"
                  className="w-full rounded-xl border border-slate-200 bg-white px-4 py-4 text-[#0b1320] outline-none transition placeholder:text-slate-400 focus:border-[#3b82f6] focus:ring-4 focus:ring-[#3b82f6]/10"
                />
              </label>
            </div>
          </div>

          {/* Request Type */}
          <div className="mt-8">
            <p className="mb-4 text-sm font-bold uppercase tracking-[0.18em] text-[#2563eb]">
              How do you want to get the car?
            </p>

            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
              {requestTypes.map((type) => (
                <label
                  key={type}
                  className="cursor-pointer rounded-xl border border-slate-200 bg-[#f8fafc] p-4 transition hover:border-[#3b82f6]/50 hover:bg-[#eff6ff]"
                >
                  <input
                    type="radio"
                    name="requestType"
                    value={type}
                    className="peer sr-only"
                  />
                  <span className="block text-sm font-bold text-slate-600 peer-checked:text-[#2563eb]">
                    {type}
                  </span>
                  <span className="mt-3 block h-2 rounded-full bg-slate-200 peer-checked:bg-[#3b82f6]" />
                </label>
              ))}
            </div>
          </div>

          {/* Vehicle Info */}
          <div className="mt-8">
            <p className="mb-4 text-sm font-bold uppercase tracking-[0.18em] text-[#2563eb]">
              Vehicle Details
            </p>

            <div className="grid gap-4 md:grid-cols-2">
              <label>
                <span className="mb-2 flex items-center gap-2 text-sm font-semibold text-slate-700">
                  <FiSearch className="text-[#2563eb]" />
                  Make / Model
                </span>
                <input
                  type="text"
                  placeholder="BMW X5, Tesla Model Y, Mercedes GLE..."
                  className="w-full rounded-xl border border-slate-200 bg-white px-4 py-4 text-[#0b1320] outline-none transition placeholder:text-slate-400 focus:border-[#3b82f6] focus:ring-4 focus:ring-[#3b82f6]/10"
                />
              </label>

              <label>
                <span className="mb-2 flex items-center gap-2 text-sm font-semibold text-slate-700">
                  <FiDollarSign className="text-[#2563eb]" />
                  Budget
                </span>
                <input
                  type="text"
                  placeholder="$600/month, $35k total, etc."
                  className="w-full rounded-xl border border-slate-200 bg-white px-4 py-4 text-[#0b1320] outline-none transition placeholder:text-slate-400 focus:border-[#3b82f6] focus:ring-4 focus:ring-[#3b82f6]/10"
                />
              </label>

              <label>
                <span className="mb-2 flex items-center gap-2 text-sm font-semibold text-slate-700">
                  <FiCalendar className="text-[#2563eb]" />
                  Needed By
                </span>
                <input
                  type="date"
                  className="w-full rounded-xl border border-slate-200 bg-white px-4 py-4 text-[#0b1320] outline-none transition focus:border-[#3b82f6] focus:ring-4 focus:ring-[#3b82f6]/10"
                />
              </label>

              <label>
                <span className="mb-2 flex items-center gap-2 text-sm font-semibold text-slate-700">
                  <FiMapPin className="text-[#2563eb]" />
                  Location / Area
                </span>
                <input
                  type="text"
                  placeholder="Los Angeles, San Fernando Valley..."
                  className="w-full rounded-xl border border-slate-200 bg-white px-4 py-4 text-[#0b1320] outline-none transition placeholder:text-slate-400 focus:border-[#3b82f6] focus:ring-4 focus:ring-[#3b82f6]/10"
                />
              </label>
            </div>
          </div>

          {/* Extra Details */}
          <div className="mt-8">
            <label>
              <span className="mb-2 flex items-center gap-2 text-sm font-semibold text-slate-700">
                <FiSliders className="text-[#2563eb]" />
                Specs, Options, and Notes
              </span>

              <textarea
                rows={7}
                placeholder="Color, mileage, trim, seats, interior, must-have features, down payment, credit situation, trade-in, delivery timeline, or anything else Frank should know."
                className="w-full resize-none rounded-xl border border-slate-200 bg-white px-4 py-4 text-[#0b1320] outline-none transition placeholder:text-slate-400 focus:border-[#3b82f6] focus:ring-4 focus:ring-[#3b82f6]/10"
              />
            </label>
          </div>

          {/* Submit */}
          <div className="mt-7 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <p className="text-sm leading-6 text-slate-500">
              By submitting, you’re requesting follow-up about your vehicle
              needs.
            </p>

            <motion.button
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.98 }}
              type="submit"
              className="flex items-center justify-center gap-2 rounded-xl bg-[#3b82f6] px-7 py-4 text-sm font-bold uppercase tracking-[0.14em] text-white shadow-[0_18px_45px_rgba(59,130,246,0.25)] transition hover:bg-[#2563eb]"
            >
              Submit Inquiry
              <FiArrowUpRight />
            </motion.button>
          </div>
        </motion.form>
      </div>
    </section>
  );
};

export default InquirySection;