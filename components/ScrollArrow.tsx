import { FiArrowDown } from "react-icons/fi";

type ScrollArrowProps = {
  href: string;
  className?: string;
};

const ScrollArrow = ({ href, className = "" }: ScrollArrowProps) => {
  return (
    <a
      href={href}
      aria-label="Scroll down"
      className={`flex h-16 w-12 items-center justify-center rounded-full bg-red-600 text-2xl text-white shadow-[0_18px_45px_rgba(220,38,38,0.45)] transition hover:-translate-y-1 hover:bg-red-500 ${className}`}
    >
      <FiArrowDown />
    </a>
  );
};

export default ScrollArrow;