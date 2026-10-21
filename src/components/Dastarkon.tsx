import { OrnamentBand } from "./Ornament";
import { Reveal } from "./Reveal";

export function Dastarkon() {
  return (
    <section className="relative overflow-hidden py-16 sm:py-20">
      <div className="mx-auto max-w-5xl px-5">
        <Reveal>
          <div className="relative overflow-hidden rounded-[2.5rem] shadow-[var(--shadow-card)]">
            <img
              src="/images/dastarkon.jpg"
              alt="Улуттук дасторкон: боорсок, чай жана кымыз"
              className="h-[26rem] w-full object-cover sm:h-[30rem]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-red-deep/85 via-red-deep/25 to-transparent" />
            <div className="absolute inset-x-0 bottom-0 p-8 sm:p-12 text-center text-paper">
              <p className="font-display text-3xl sm:text-5xl font-semibold italic leading-tight">
                «Конок келсе — ыраазы келет»
              </p>
              <p className="mt-3 text-[0.68rem] font-bold uppercase tracking-[0.34em] text-gold-soft">
                Кыргыздын меймандостугу
              </p>
            </div>
          </div>
        </Reveal>
        <Reveal delay={0.15}>
          <OrnamentBand className="mx-auto mt-10 h-4 w-48 sm:w-72 text-gold" />
        </Reveal>
      </div>
    </section>
  );
}
