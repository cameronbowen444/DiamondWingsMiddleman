import Link from "next/link";
import {
  FiArrowRight,
  FiCalendar,
  FiDollarSign,
  FiMapPin,
  FiSearch,
} from "react-icons/fi";
import ScrollArrow from "./ScrollArrow";

const requestItems = [
  {
    icon: FiMapPin,
    label: "Vehicle",
    name: "vehicle",
    placeholder: "Toyota Camry XSE",
    type: "text",
  },
  {
    icon: FiDollarSign,
    label: "Budget",
    name: "budget",
    placeholder: "Set range",
    type: "text",
  },
  {
    icon: FiCalendar,
    label: "Timeline",
    name: "timeline",
    placeholder: "Ready date",
    type: "date",
  },
];

const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen overflow-visible bg-black text-white"
    >
      {/* Background */}
      <div
        className="absolute inset-0 bg-no-repeat bg-[length:auto_100%] bg-[position:center_58%] md:bg-cover md:bg-center"
        style={{
          backgroundImage: "url('/assets/background.png')",
        }}
      />

      {/* Lighter mobile overlays, desktop stays the same */}
      <div className="absolute inset-0 bg-black/5 md:bg-black/15" />
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/0 to-black/25 md:from-black/45 md:via-black/5 md:to-black/45" />
      <div className="absolute inset-0 bg-gradient-to-r from-black/10 via-transparent to-black/5 md:from-black/25 md:to-black/10" />

      {/* Very soft red atmosphere */}
      <div className="absolute left-1/2 top-[52%] h-[240px] w-[360px] -translate-x-1/2 rounded-full bg-red-600/10 blur-[120px] md:top-[48%] md:h-[280px] md:w-[520px] md:blur-[130px]" />

      {/* Text Content */}
      <div className="relative z-10 mx-auto flex min-h-screen max-w-7xl flex-col items-center px-5 pt-20 text-center md:px-8 lg:pt-20">
        <div className="mt-5 max-w-4xl md:mt-12 lg:mt-14">
          <p className="mb-4 text-[10px] font-medium uppercase tracking-[0.28em] text-white/75 md:mb-5 md:text-xs md:tracking-[0.32em]">
            Auto Sales and Rentals
          </p>

          <h1 className="mx-auto max-w-4xl text-4xl font-semibold leading-[1.02] tracking-[-0.04em] text-white drop-shadow-[0_8px_30px_rgba(0,0,0,0.45)] md:text-5xl lg:text-6xl">
            Your Next Car Starts Here
          </h1>

          <p className="mx-auto mt-4 max-w-[21rem] text-xs leading-6 text-white/80 drop-shadow-[0_8px_24px_rgba(0,0,0,0.55)] md:mt-5 md:max-w-2xl md:text-base md:leading-7">
            Buy, rent, or lease-to-own. Share the
            vehicle, budget, specs, and timeline — Diamond Wings helps find the best deal.
          </p>

          <div className="mt-5 flex justify-center md:mt-6">
            <Link
              href="#inquiry"
              className="group inline-flex items-center gap-2 text-xs font-medium text-white/80 transition hover:text-white md:text-sm border-1 p-3 rounded-md"
            >
              Start a custom vehicle request
              <FiArrowRight className="transition group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </div>

      {/* Bottom Action Bar */}
<div className="absolute bottom-6 left-1/2 z-20 w-[calc(100%-2rem)] max-w-4xl -translate-x-1/2 md:bottom-12">
  <div className="overflow-hidden rounded-2xl border border-white/15 bg-black/45 p-2 shadow-[0_25px_80px_rgba(0,0,0,0.55)] backdrop-blur-xl md:rounded-[1.35rem]">
    <div className="grid grid-cols-[1fr_auto] items-center gap-2 md:grid-cols-[1fr_1fr_1fr_auto]">
      {requestItems.map((item, index) => {
        const Icon = item.icon;

        return (
          <label
            key={item.label}
            className={`items-center gap-3 rounded-xl px-4 py-3 text-left transition hover:bg-white/[0.08] ${
              index === 0 ? "flex" : "hidden md:flex"
            }`}
          >
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-white/10 bg-white/[0.08] text-white/70">
              <Icon className="text-lg" />
            </div>

            <div className="min-w-0 flex-1">
              <p className="text-xs font-semibold text-white/60">
                {item.label}
              </p>

              <input
                type={item.type}
                name={item.name}
                placeholder={item.placeholder}
                className="mt-0.5 w-full bg-transparent text-sm font-semibold text-white outline-none placeholder:text-white/90"
              />
            </div>
          </label>
        );
      })}

      <Link
        href="#inquiry"
        className="group flex h-14 items-center justify-center gap-2 rounded-xl bg-white px-5 text-sm font-semibold text-black transition hover:bg-red-600 hover:text-white md:h-[58px] md:w-auto md:px-6"
        aria-label="Start vehicle inquiry"
      >
        <span className="hidden md:inline">Search</span>
        <FiSearch className="text-xl transition group-hover:scale-110" />
      </Link>
    </div>
  </div>
</div>
      {/* Bottom fade */}
      <div className="absolute bottom-2 left-0 right-0 h-20 bg-gradient-to-t from-black/55 to-transparent md:h-28 md:from-black/70" />
      {/* Scroll Arrow */}
<div className="absolute bottom-0 left-1/2 z-30 -translate-x-1/2 translate-y-1/2">
  <ScrollArrow href="#how-it-works" />
</div>
    </section>
  );
};

export default Hero;