import { motion } from "framer-motion";
import { Tunduk } from "./Ornament";
import { SCHOOL_NAME } from "../config";

const LINKS = [
  { href: "#program", label: "Программа" },
  { href: "#dress", label: "Дресс-код" },
  { href: "#place", label: "Дарек" },
  { href: "#rsvp", label: "Катышууну тактоо" },
];

export function Header() {
  return (
    <motion.header
      initial={{ y: -70, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
      className="fixed inset-x-0 top-0 z-50 border-b border-gold/25 bg-paper/85 backdrop-blur-md"
    >
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5">
        <div className="flex items-center gap-3">
          <Tunduk className="h-8 w-8 text-red" />
          <div className="leading-tight">
            <p className="text-[0.62rem] font-bold uppercase tracking-[0.3em] text-ink">
              {SCHOOL_NAME.replace(" жеке мектеби", "")}
            </p>
            <p className="text-[0.58rem] uppercase tracking-[0.22em] text-ink-soft">
              жеке мектеби
            </p>
          </div>
        </div>

        <nav className="hidden items-center gap-7 lg:flex">
          {LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-[0.66rem] font-semibold uppercase tracking-[0.24em] text-ink-soft transition-colors hover:text-red"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <a
          href="#rsvp"
          className="rounded-full bg-red px-4 py-2 text-[0.6rem] font-bold uppercase tracking-[0.24em] text-paper shadow-[0_10px_24px_-10px_rgba(166,28,44,0.6)] transition-all hover:bg-red-deep hover:-translate-y-0.5"
        >
          31-октябрь · 10:00
        </a>
      </div>
    </motion.header>
  );
}
