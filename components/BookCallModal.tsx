"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import {
  FiArrowUpRight,
  FiCalendar,
  FiClock,
  FiMessageCircle,
  FiPhone,
  FiUser,
  FiX,
} from "react-icons/fi";

const callReasons = [
  "I’m not sure what car I want yet",
  "I want to understand the process",
  "I want help with buying",
  "I want help with renting",
  "I want help with lease-to-own",
];

const BookCallModal = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Bottom Static CTA */}
<motion.div
  initial={{ opacity: 0, y: 18, scale: 0.96 }}
  animate={{ opacity: 1, y: 0, scale: 1 }}
  transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
  className="fixed bottom-5 right-5 z-50 rounded-2xl border border-white/10 bg-[#07111f]/90 p-1.5 shadow-[0_18px_45px_rgba(0,0,0,0.45)] backdrop-blur-xl"
>
  <motion.button
    onClick={() => setIsOpen(true)}
    whileHover={{ y: -2 }}
    whileTap={{ scale: 0.98 }}
    transition={{ duration: 0.2, ease: "easeOut" }}
    className="group flex items-center justify-center gap-2 rounded-xl bg-[#3b82f6] px-4 py-3 text-xs font-bold uppercase tracking-[0.12em] text-white shadow-[0_12px_30px_rgba(59,130,246,0.32)] transition hover:bg-[#2563eb] sm:px-5 sm:py-3.5 sm:text-sm"
  >
    <FiPhone className="text-base sm:text-lg" />

    <span>Book a Call</span>

    <FiArrowUpRight className="text-base transition duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
  </motion.button>
</motion.div>

      {/* Modal */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed inset-0 z-[100] flex items-center justify-center bg-[#020617]/80 px-5 py-8 backdrop-blur-md"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.22, ease: "easeOut" }}
          >
            {/* Click outside to close */}
            <button
              aria-label="Close modal"
              onClick={() => setIsOpen(false)}
              className="absolute inset-0 cursor-default"
            />

            {/* Modal Wrapper */}
            <div className="relative w-full max-w-2xl">
              {/* Outside Close Button */}
              <button
                onClick={() => setIsOpen(false)}
                className="absolute right-3 top-3 z-20 flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white text-xl text-[#0b1320] shadow-[0_18px_45px_rgba(0,0,0,0.3)] transition hover:bg-[#eff6ff] md:-right-14 md:top-0"
                aria-label="Close"
              >
                <FiX />
              </button>

              <motion.div
                initial={{ opacity: 0, y: 30, scale: 0.98 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 18, scale: 0.98 }}
                transition={{
                  duration: 0.38,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="relative max-h-[88vh] w-full overflow-y-auto rounded-2xl border border-white/10 bg-[#0b1320] p-5 text-white shadow-[0_30px_90px_rgba(0,0,0,0.45)] md:p-7"
              >
                {/* Header */}
                <div className="mb-6">
                  <div className="mb-4 inline-flex items-center gap-3 rounded-xl border border-[#3b82f6]/25 bg-[#3b82f6]/10 px-4 py-2">
                    <FiMessageCircle className="text-[#93c5fd]" />
                    <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#93c5fd]">
                      Quick Call Request
                    </p>
                  </div>

                  <h2 className="text-3xl font-bold tracking-[-0.04em] text-white md:text-4xl">
                    Not sure yet? Book a quick call.
                  </h2>

                  <p className="mt-3 max-w-xl leading-7 text-white/60">
                    Ask questions, explain what you’re looking for, or get help
                    understanding whether buying, renting, or lease-to-own makes
                    the most sense.
                  </p>
                </div>

                {/* Form */}
                <form className="grid gap-5">
                  <div className="grid gap-4 md:grid-cols-2">
                    <label>
                      <span className="mb-2 flex items-center gap-2 text-sm font-semibold text-white/80">
                        <FiUser className="text-[#60a5fa]" />
                        Full Name
                      </span>
                      <input
                        type="text"
                        placeholder="Your name"
                        className="w-full rounded-xl border border-white/10 bg-white/[0.06] px-4 py-4 text-white outline-none transition placeholder:text-white/35 focus:border-[#3b82f6] focus:bg-white/[0.08] focus:ring-4 focus:ring-[#3b82f6]/10"
                      />
                    </label>

                    <label>
                      <span className="mb-2 flex items-center gap-2 text-sm font-semibold text-white/80">
                        <FiPhone className="text-[#60a5fa]" />
                        Phone Number
                      </span>
                      <input
                        type="tel"
                        placeholder="(555) 555-5555"
                        className="w-full rounded-xl border border-white/10 bg-white/[0.06] px-4 py-4 text-white outline-none transition placeholder:text-white/35 focus:border-[#3b82f6] focus:bg-white/[0.08] focus:ring-4 focus:ring-[#3b82f6]/10"
                      />
                    </label>
                  </div>

                  <div className="grid gap-4 md:grid-cols-2">
                    <label>
                      <span className="mb-2 flex items-center gap-2 text-sm font-semibold text-white/80">
                        <FiCalendar className="text-[#60a5fa]" />
                        Preferred Date
                      </span>
                      <input
                        type="date"
                        className="w-full rounded-xl border border-white/10 bg-white/[0.06] px-4 py-4 text-white outline-none transition focus:border-[#3b82f6] focus:bg-white/[0.08] focus:ring-4 focus:ring-[#3b82f6]/10"
                      />
                    </label>

                    <label>
                      <span className="mb-2 flex items-center gap-2 text-sm font-semibold text-white/80">
                        <FiClock className="text-[#60a5fa]" />
                        Best Time
                      </span>
                      <select className="w-full rounded-xl border border-white/10 bg-white/[0.06] px-4 py-4 text-white outline-none transition focus:border-[#3b82f6] focus:bg-white/[0.08] focus:ring-4 focus:ring-[#3b82f6]/10">
                        <option className="bg-[#0b1320]">Morning</option>
                        <option className="bg-[#0b1320]">Afternoon</option>
                        <option className="bg-[#0b1320]">Evening</option>
                        <option className="bg-[#0b1320]">Anytime</option>
                      </select>
                    </label>
                  </div>

                  <div>
                    <p className="mb-3 text-sm font-bold uppercase tracking-[0.16em] text-[#93c5fd]">
                      What do you want to talk about?
                    </p>

                    <div className="grid gap-3">
                      {callReasons.map((reason) => (
                        <label
                          key={reason}
                          className="cursor-pointer rounded-xl border border-white/10 bg-white/[0.05] p-4 transition hover:border-[#3b82f6]/50 hover:bg-[#3b82f6]/10"
                        >
                          <input
                            type="radio"
                            name="reason"
                            value={reason}
                            className="peer sr-only"
                          />
                          <span className="block text-sm font-semibold text-white/60 peer-checked:text-[#93c5fd]">
                            {reason}
                          </span>
                          <span className="mt-3 block h-2 rounded-full bg-white/10 peer-checked:bg-[#3b82f6]" />
                        </label>
                      ))}
                    </div>
                  </div>

                  <label>
                    <span className="mb-2 flex items-center gap-2 text-sm font-semibold text-white/80">
                      <FiMessageCircle className="text-[#60a5fa]" />
                      Notes
                    </span>
                    <textarea
                      rows={5}
                      placeholder="Tell Frank what you’re trying to figure out, what kind of vehicle you have in mind, or any questions you have."
                      className="w-full resize-none rounded-xl border border-white/10 bg-white/[0.06] px-4 py-4 text-white outline-none transition placeholder:text-white/35 focus:border-[#3b82f6] focus:bg-white/[0.08] focus:ring-4 focus:ring-[#3b82f6]/10"
                    />
                  </label>

                  <div className="flex flex-col gap-4 border-t border-white/10 pt-5 md:flex-row md:items-center md:justify-between">
                    <p className="text-sm leading-6 text-white/45">
                      This is for people who want to ask questions before
                      submitting a full vehicle request.
                    </p>

                    <motion.button
                      type="submit"
                      whileHover={{ y: -2 }}
                      whileTap={{ scale: 0.98 }}
                      transition={{ duration: 0.2, ease: "easeOut" }}
                      className="flex items-center justify-center gap-2 rounded-xl bg-[#3b82f6] px-6 py-4 text-sm font-bold uppercase tracking-[0.14em] text-white shadow-[0_16px_40px_rgba(59,130,246,0.25)] transition hover:bg-[#2563eb]"
                    >
                      Request Call
                      <FiArrowUpRight />
                    </motion.button>
                  </div>
                </form>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default BookCallModal;