import { MessageCircle } from "lucide-react";
import { OrnamentBand, SectionHeading, Tunduk } from "./Ornament";
import { Reveal } from "./Reveal";
import { SCHOOL_NAME, WHATSAPP_DISPLAY, WHATSAPP_LINK } from "../config";

export function Contacts() {
  return (
    <>
      <section id="contacts" className="relative py-16 sm:py-24">
        <div className="mx-auto max-w-3xl px-5 text-center">
          <Reveal>
            <SectionHeading eyebrow="Суроолор болсо" title="Байланыш" />
          </Reveal>
          <Reveal delay={0.12}>
            <p className="mx-auto mt-5 max-w-md text-sm leading-relaxed text-ink-soft">
              Майрам боюнча бардык суроолоруңузга WhatsApp аркылуу жооп
              беребиз — жазыңыз, уюштуруучулар жардам берет.
            </p>
          </Reveal>
          <Reveal delay={0.2}>
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noreferrer"
              className="group mt-9 inline-flex items-center gap-4 rounded-full border border-gold/50 bg-paper px-8 py-4 shadow-[var(--shadow-card)] transition-all hover:-translate-y-1 hover:border-red/40"
            >
              <span className="flex h-12 w-12 items-center justify-center rounded-full bg-red text-paper transition-transform group-hover:scale-110">
                <MessageCircle className="h-5 w-5" />
              </span>
              <span className="text-left">
                <span className="block text-[0.62rem] font-bold uppercase tracking-[0.3em] text-ink-soft">
                  WhatsAppка жазуу
                </span>
                <span className="block font-display text-2xl font-semibold text-ink tabular-nums">
                  {WHATSAPP_DISPLAY}
                </span>
              </span>
            </a>
          </Reveal>
        </div>
      </section>

      <footer className="relative overflow-hidden bg-red-deep pt-14 pb-10 text-center pattern-red">
        <div className="relative mx-auto max-w-3xl px-5">
          <Tunduk className="mx-auto h-12 w-12 text-gold-soft" />
          <p className="mt-5 text-[0.66rem] font-bold uppercase tracking-[0.34em] text-gold-soft">
            {SCHOOL_NAME}
          </p>
          <p className="mt-3 font-display text-3xl sm:text-4xl font-semibold text-paper">
            «Улуттук дем» — <span className="italic">маданий иш-чара</span>
          </p>
          <p className="mt-2 text-[0.72rem] font-semibold uppercase tracking-[0.3em] text-paper/60">
            31-октябрь · 10:00 · Бардыгыңызды күтөбүз!
          </p>
          <OrnamentBand className="mx-auto mt-8 h-3.5 w-56 text-gold-soft/70" />
        </div>
      </footer>
    </>
  );
}
