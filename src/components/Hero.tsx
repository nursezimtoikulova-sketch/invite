import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { Diamond, OrnamentBand, Tunduk } from "./Ornament";
import { CITY_LINE, SCHOOL_NAME, getEventDate, getWeekdayKy } from "../config";

const EASE = [0.22, 1, 0.36, 1] as const;

export function Hero() {
  const date = getEventDate();
  const weekday = getWeekdayKy(date);

  return (
    <section id="hero" className="relative overflow-hidden pt-28 pb-16 sm:pt-32">
      {/* суу тундук фон */}
      <Tunduk className="pointer-events-none absolute left-1/2 top-24 -translate-x-1/2 h-[34rem] w-[34rem] text-gold opacity-[0.06] animate-spin-slower" />
      <div className="pointer-events-none absolute -left-24 top-1/3 h-72 w-72 rounded-full bg-red/5 blur-3xl" />
      <div className="pointer-events-none absolute -right-24 top-1/2 h-72 w-72 rounded-full bg-gold/10 blur-3xl" />

      <div className="relative mx-auto max-w-6xl px-5 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.1, ease: EASE }}
          className="flex justify-center"
        >
          <Tunduk className="h-16 w-16 text-red" />
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.15, ease: EASE }}
          className="eyebrow mt-6 text-red"
        >
          {SCHOOL_NAME} сый менен чакырат
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 26 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3, ease: EASE }}
          className="mt-5 font-display text-[13vw] sm:text-7xl lg:text-8xl font-semibold uppercase leading-[0.95] tracking-wide text-ink"
        >
          Улуттук
          <br />
          <span className="text-red">дем</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.45, ease: EASE }}
          className="mx-auto mt-5 max-w-xl font-display text-2xl sm:text-3xl font-medium italic text-gold"
        >
          улуттук маданий иш-чара
        </motion.p>

        {/* дата */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.6, ease: EASE }}
          className="mt-9 flex flex-col items-center gap-3"
        >
          <div className="flex items-center gap-4">
            <OrnamentBand className="h-3.5 w-20 sm:w-28 rotate-180 text-red/80" />
            <p className="font-display text-3xl sm:text-4xl font-semibold text-ink">
              31-ОКТЯБРЬ <span className="text-red">·</span> 10:00
            </p>
            <OrnamentBand className="h-3.5 w-20 sm:w-28 text-red/80" />
          </div>
          <p className="text-[0.72rem] font-semibold uppercase tracking-[0.34em] text-ink-soft">
            {weekday} күнү · {SCHOOL_NAME} · {CITY_LINE}
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.75, ease: EASE }}
          className="mt-9 flex flex-wrap items-center justify-center gap-4"
        >
          <a href="#program" className="btn btn-primary">
            Программаны көрүү
          </a>
          <a href="#rsvp" className="btn btn-outline">
            Катышууну тактоо
          </a>
        </motion.div>

        {/* иллюстрация аркада */}
        <motion.div
          initial={{ opacity: 0, y: 44 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.9, ease: EASE }}
          className="relative mx-auto mt-14 w-full max-w-3xl"
        >
          <div className="animate-float">
            <div className="overflow-hidden rounded-t-full border border-gold/50 p-2.5 shadow-[var(--shadow-card)]">
              <div className="overflow-hidden rounded-t-full border border-red/30 p-2.5">
                <img
                  src="/images/hero.jpg"
                  alt="Кыргыздын улуттук көрүнүшү: ак бооз үй, тоолор жана тундук"
                  className="h-auto w-full rounded-t-full object-cover"
                />
              </div>
            </div>
          </div>
          <div className="mt-5 flex items-center justify-center gap-3 text-ink-soft">
            <Diamond className="h-2 w-2 text-gold" />
            <p className="font-display text-lg italic">Ата бабалардан калган салт, тынды камтаган уламыш</p>
            <Diamond className="h-2 w-2 text-gold" />
          </div>
        </motion.div>

        <motion.a
          href="#about"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
          className="mx-auto mt-12 flex w-max flex-col items-center gap-2 text-ink-soft transition-colors hover:text-red"
          aria-label="Төмөн жылдыруу"
        >
          <span className="text-[0.6rem] font-semibold uppercase tracking-[0.34em]">Төмөн жылдыруу</span>
          <ChevronDown className="h-5 w-5 animate-bounce" />
        </motion.a>
      </div>
    </section>
  );
}
