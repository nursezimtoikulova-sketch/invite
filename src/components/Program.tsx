import { SectionHeading } from "./Ornament";
import { Reveal } from "./Reveal";
import { PROGRAM } from "../config";

export function Program() {
  return (
    <section id="program" className="relative py-16 sm:py-24 pattern-ink">
      <div className="mx-auto max-w-4xl px-5">
        <Reveal>
          <SectionHeading
            eyebrow="31-октябрь · саат 10:00дө"
            title="Иш-чаранын программасы"
          />
          <p className="mx-auto mt-4 max-w-lg text-center font-display text-2xl sm:text-3xl font-medium italic text-red">
            Тема: «Улуттук дем»
          </p>
          <p className="mx-auto mt-2 max-w-md text-center text-sm leading-relaxed text-ink-soft">
            Ар бир бөлүм — элибиздин салттарын, маданиятын жана тамагын
            көрсөтүүчү учур
          </p>
        </Reveal>

        {/* --- Карточки программы --- */}
        <div className="mt-14 space-y-5">
          {PROGRAM.map((item, i) => (
            <Reveal key={item.num} delay={i * 0.04} y={20}>
              <div className="hairline group relative overflow-hidden bg-paper/80 transition-all hover:shadow-[var(--shadow-card)]">
                <div className="absolute inset-1.5 hairline-red pointer-events-none opacity-0 transition-opacity group-hover:opacity-100" />

                <div className="relative flex items-stretch">
                  {/* Номер */}
                  <div className="flex w-16 shrink-0 items-center justify-center border-r border-gold/30 bg-red/[0.06] sm:w-20">
                    <span className="font-display text-3xl sm:text-4xl font-bold text-red/70 tabular-nums">
                      {String(item.num).padStart(2, "0")}
                    </span>
                  </div>

                  {/* Мазмуну */}
                  <div className="flex flex-1 flex-col gap-1.5 px-5 py-5 sm:flex-row sm:items-center sm:gap-6 sm:py-6">
                    {/* Бөлүм аталышы */}
                    <div className="sm:w-56 shrink-0">
                      <h3 className="font-display text-xl sm:text-[1.4rem] font-semibold leading-tight text-ink transition-colors group-hover:text-red">
                        {item.section}
                      </h3>
                    </div>

                    {/* Мазмуну */}
                    <div className="flex-1">
                      <p className="text-[0.88rem] leading-relaxed text-ink-soft">
                        {item.content}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-10 text-center" delay={0.1}>
          <p className="font-display text-xl italic text-gold">
            Убакыттар болжолдуу — программада майда өзгөрүүлөр болушу мүмкүн
          </p>
        </Reveal>
      </div>
    </section>
  );
}
