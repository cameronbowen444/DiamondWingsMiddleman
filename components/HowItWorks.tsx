"use client";

import { motion, type Variants } from "framer-motion";
import {
  FiArrowDown,
  FiCalendar,
  FiCheckCircle,
  FiClipboard,
  FiSearch,
} from "react-icons/fi";


const steps = [
  {
    number: "01",
    title: "Request",
    text: "Tell us the vehicle, budget, timeline, and must-have details.",
    icon: FiClipboard,
  },
  {
    number: "02",
    title: "Review",
    text: "Frank reviews your request and understands what matters most.",
    icon: FiSearch,
  },
  {
    number: "03",
    title: "Match",
    text: "Options are searched based on your needs, not random inventory.",
    icon: FiCalendar,
  },
  {
    number: "04",
    title: "Drive",
    text: "Choose the right fit and move forward with confidence.",
    icon: FiCheckCircle,
  },
];

const container: Variants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.09,
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
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

const HowItWorks = () => {
  return (
    <section
      id="how-it-works"
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
          variants={container}
          className="mx-auto max-w-3xl text-center"
        >
          <motion.h2
            variants={fadeUp}
            className="text-3xl font-medium tracking-[-0.04em] text-white md:text-4xl lg:text-5xl"
          >
            How It Works
          </motion.h2>

          <motion.p
            variants={fadeUp}
            className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-white/45 md:text-base"
          >
            Finding your next vehicle is just a few simple steps away. Send your
            request, review the options, and move forward with a smoother
            process.
          </motion.p>
        </motion.div>

        {/* Steps */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          variants={container}
          className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-4"
        >
          {steps.map((step) => {
            const Icon = step.icon;

            return (
              <motion.div
                key={step.number}
                variants={fadeUp}
                whileHover={{
                  y: -6,
                  transition: { duration: 0.22 },
                }}
                className="group relative overflow-hidden rounded-xl border border-white/10 bg-[#1b1b1b] px-5 py-8 text-center shadow-[0_18px_60px_rgba(0,0,0,0.35)] transition duration-300 hover:border-red-600/35 hover:bg-[#202020]"
              >
                <div className="absolute right-4 top-4 text-4xl font-semibold tracking-[-0.08em] text-white/[0.035]">
                  {step.number}
                </div>

                <div className="mx-auto mb-7 flex h-14 w-14 items-center justify-center rounded-full bg-red-600/20 text-2xl text-red-500 transition duration-300 group-hover:bg-red-600 group-hover:text-white group-hover:shadow-[0_0_35px_rgba(220,38,38,0.35)]">
                  <Icon />
                </div>

                <h3 className="text-2xl font-medium tracking-[-0.04em] text-white">
                  {step.title}
                </h3>

                <p className="mx-auto mt-4 max-w-[13rem] text-xs leading-6 text-white/45 md:text-sm">
                  {step.text}
                </p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default HowItWorks;