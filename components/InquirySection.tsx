"use client";

import { useState, type ChangeEvent, type SyntheticEvent } from "react";
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

const errorInputClass =
  "border-red-500/70 focus:border-red-500 focus:ring-red-600/20";

const labelClass =
  "mb-2 block text-[11px] font-semibold uppercase tracking-[0.18em] text-white/55";

const iconClass =
  "pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-white/35";

type FormErrors = {
  requestType?: string;
  fullName?: string;
  phone?: string;
  email?: string;
  makeModel?: string;
  budget?: string;
  neededBy?: string;
  location?: string;
  notes?: string;
};

type InquiryData = {
  requestType: string;
  fullName: string;
  phone: string;
  email: string;
  makeModel: string;
  budget: string;
  neededBy: string;
  location: string;
  notes: string;
};

const getFieldValue = (formData: FormData, key: string) => {
  return String(formData.get(key) || "").trim();
};

const isValidEmail = (email: string) => {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
};

const isValidPhone = (phone: string) => {
  const digitsOnly = phone.replace(/\D/g, "");
  return digitsOnly.length === 10;
};

const isPastDate = (date: string) => {
  if (!date) return false;

  const selectedDate = new Date(`${date}T00:00:00`);
  const today = new Date();

  today.setHours(0, 0, 0, 0);

  return selectedDate < today;
};

const formatPhoneNumber = (value: string) => {
  const numbers = value.replace(/\D/g, "").slice(0, 10);

  if (numbers.length <= 3) {
    return numbers;
  }

  if (numbers.length <= 6) {
    return `(${numbers.slice(0, 3)}) ${numbers.slice(3)}`;
  }

  return `(${numbers.slice(0, 3)}) ${numbers.slice(3, 6)}-${numbers.slice(6)}`;
};

const validateForm = (data: InquiryData) => {
  const errors: FormErrors = {};

  if (!data.requestType) {
    errors.requestType = "Please choose what you are looking for.";
  }

  if (!data.fullName) {
    errors.fullName = "Full name is required.";
  } else if (data.fullName.length < 2) {
    errors.fullName = "Name must be at least 2 characters.";
  }

  if (!data.phone) {
    errors.phone = "Phone number is required.";
  } else if (!isValidPhone(data.phone)) {
    errors.phone = "Enter a valid 10-digit phone number.";
  }

  if (!data.email) {
    errors.email = "Email is required.";
  } else if (!isValidEmail(data.email)) {
    errors.email = "Enter a valid email address.";
  }

  if (!data.makeModel) {
    errors.makeModel = "Vehicle make/model is required.";
  } else if (data.makeModel.length < 2) {
    errors.makeModel = "Vehicle details are too short.";
  }

  if (data.budget && data.budget.length < 2) {
    errors.budget = "Budget looks too short.";
  }

  if (data.neededBy && isPastDate(data.neededBy)) {
    errors.neededBy = "Date cannot be in the past.";
  }

  if (data.location && data.location.length < 2) {
    errors.location = "Location looks too short.";
  }

  if (data.notes && data.notes.length > 1000) {
    errors.notes = "Notes must be under 1000 characters.";
  }

  return errors;
};

const ErrorMessage = ({ message }: { message?: string }) => {
  if (!message) return null;

  return <p className="mt-2 text-xs font-medium text-red-400">{message}</p>;
};

const InquirySection = () => {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">(
    "idle"
  );

  const [errors, setErrors] = useState<FormErrors>({});
  const [phoneValue, setPhoneValue] = useState("");

  const handlePhoneChange = (e: ChangeEvent<HTMLInputElement>) => {
    const formattedPhone = formatPhoneNumber(e.target.value);
    setPhoneValue(formattedPhone);
  };

  const handleSubmit = async (
    e: SyntheticEvent<HTMLFormElement, SubmitEvent>
  ) => {
    e.preventDefault();
    setStatus("idle");

    const form = e.currentTarget;
    const formData = new FormData(form);

    const data: InquiryData = {
      requestType: getFieldValue(formData, "requestType"),
      fullName: getFieldValue(formData, "fullName"),
      phone: getFieldValue(formData, "phone"),
      email: getFieldValue(formData, "email"),
      makeModel: getFieldValue(formData, "makeModel"),
      budget: getFieldValue(formData, "budget"),
      neededBy: getFieldValue(formData, "neededBy"),
      location: getFieldValue(formData, "location"),
      notes: getFieldValue(formData, "notes"),
    };

    const validationErrors = validateForm(data);
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length > 0) {
      return;
    }

    setStatus("loading");

    try {
      const res = await fetch("/api/inquiry", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (!res.ok) {
        throw new Error("Failed to send inquiry");
      }

      setStatus("success");
      setErrors({});
      setPhoneValue("");
      form.reset();
    } catch (error) {
      console.error(error);
      setStatus("error");
    }
  };

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
            <form
              onSubmit={handleSubmit}
              noValidate
              className="p-5 md:p-8 lg:p-10"
            >
              {/* Request Type */}
              <div>
                <p className="mb-4 text-[10px] font-medium uppercase tracking-[0.28em] text-red-400">
                  I’m looking to
                </p>

                <div className="grid gap-3 sm:grid-cols-2">
                  {requestTypes.map((type) => (
                    <label
                      key={type}
                      className={`relative flex cursor-pointer items-center justify-between gap-4 rounded-xl border bg-white/[0.06] p-4 transition hover:border-red-600/35 hover:bg-white/[0.08] ${
                        errors.requestType
                          ? "border-red-500/70"
                          : "border-white/10"
                      }`}
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

                      <span className="relative z-10 flex h-5 w-5 shrink-0 items-center justify-center rounded-full border border-white/25 transition peer-checked:border-red-600 peer-checked:bg-red-600">
                        <FiCheck className="text-xs text-white opacity-0 transition peer-checked:opacity-100" />
                      </span>

                      <span className="pointer-events-none absolute inset-0 rounded-xl border border-transparent transition peer-checked:border-red-600/60 peer-checked:bg-red-600/[0.08]" />
                    </label>
                  ))}
                </div>

                <ErrorMessage message={errors.requestType} />
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
                        name="fullName"
                        placeholder="Your name"
                        className={`${inputClass} pl-11 ${
                          errors.fullName ? errorInputClass : ""
                        }`}
                      />
                    </div>
                    <ErrorMessage message={errors.fullName} />
                  </label>

                  <label>
                    <span className={labelClass}>Phone Number</span>
                    <div className="relative">
                      <FiPhone className={iconClass} />
                      <input
                        type="tel"
                        name="phone"
                        value={phoneValue}
                        onChange={handlePhoneChange}
                        inputMode="numeric"
                        autoComplete="tel"
                        maxLength={14}
                        placeholder="(555) 555-5555"
                        className={`${inputClass} pl-11 ${
                          errors.phone ? errorInputClass : ""
                        }`}
                      />
                    </div>
                    <ErrorMessage message={errors.phone} />
                  </label>

                  <label className="md:col-span-2">
                    <span className={labelClass}>Email Address</span>
                    <div className="relative">
                      <FiMail className={iconClass} />
                      <input
                        type="email"
                        name="email"
                        placeholder="you@example.com"
                        className={`${inputClass} pl-11 ${
                          errors.email ? errorInputClass : ""
                        }`}
                      />
                    </div>
                    <ErrorMessage message={errors.email} />
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
                        name="makeModel"
                        placeholder="Toyota Camry XSE, BMW X5..."
                        className={`${inputClass} pl-11 ${
                          errors.makeModel ? errorInputClass : ""
                        }`}
                      />
                    </div>
                    <ErrorMessage message={errors.makeModel} />
                  </label>

                  <label>
                    <span className={labelClass}>Budget</span>
                    <div className="relative">
                      <FiDollarSign className={iconClass} />
                      <input
                        type="text"
                        name="budget"
                        placeholder="$600/month, $35k total..."
                        className={`${inputClass} pl-11 ${
                          errors.budget ? errorInputClass : ""
                        }`}
                      />
                    </div>
                    <ErrorMessage message={errors.budget} />
                  </label>

                  <label>
                    <span className={labelClass}>Needed By</span>
                    <div className="relative">
                      <FiCalendar className={iconClass} />
                      <input
                        type="date"
                        name="neededBy"
                        className={`${inputClass} pl-11 ${
                          errors.neededBy ? errorInputClass : ""
                        }`}
                      />
                    </div>
                    <ErrorMessage message={errors.neededBy} />
                  </label>

                  <label>
                    <span className={labelClass}>Location</span>
                    <div className="relative">
                      <FiMapPin className={iconClass} />
                      <input
                        type="text"
                        name="location"
                        placeholder="Los Angeles, Valley..."
                        className={`${inputClass} pl-11 ${
                          errors.location ? errorInputClass : ""
                        }`}
                      />
                    </div>
                    <ErrorMessage message={errors.location} />
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
                      name="notes"
                      rows={6}
                      placeholder="Color, mileage, trim, seats, interior, must-have features, down payment, credit situation, trade-in, delivery timeline, or anything else Frank should know."
                      className={`${inputClass} resize-none pl-11 leading-7 ${
                        errors.notes ? errorInputClass : ""
                      }`}
                    />
                  </div>

                  <ErrorMessage message={errors.notes} />
                </label>
              </div>

              {/* Submit */}
              <div className="mt-8 flex flex-col gap-4 border-t border-white/10 pt-6 md:flex-row md:items-center md:justify-between">
                <div>
                  <p className="max-w-md text-sm leading-6 text-white/40">
                    By submitting, you’re requesting follow-up about your
                    vehicle needs.
                  </p>

                  {status === "success" && (
                    <p className="mt-3 text-sm font-medium text-green-400">
                      Request sent. Frank will follow up soon.
                    </p>
                  )}

                  {status === "error" && (
                    <p className="mt-3 text-sm font-medium text-red-400">
                      Something went wrong. Please try again.
                    </p>
                  )}
                </div>

                <motion.button
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  disabled={status === "loading"}
                  className="inline-flex items-center justify-center gap-2 rounded-md bg-red-600 px-6 py-3.5 text-xs font-semibold uppercase tracking-[0.16em] text-white shadow-[0_16px_40px_rgba(220,38,38,0.25)] transition hover:bg-red-500 disabled:cursor-not-allowed disabled:opacity-60"
                >
                  {status === "loading" ? "Sending..." : "Submit Request"}
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