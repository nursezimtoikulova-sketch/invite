import { Shirt } from "lucide-react";
import { FramedPanel, SectionHeading } from "./Ornament";
import { Reveal } from "./Reveal";

const CHIPS = ["Калпак", "Шаар", "Чепкен", "Белдемчи", "Көкөл", "Игилик"];

export function DressCode() {
  return (
    <section id="dress" className="relative py-16 sm:py-24 pattern-ink">
      <div className="mx-auto max-w-5xl px-5">
        <Reveal>
          <SectionHeading eyebrow="Дресс-коду" title="Улуттук кийим" />
        </Reveal>

        <div className="mt-12 grid items-stretch gap-8 lg:grid-cols-2">
          <Reveal className="h-full">
            <div className="h-full overflow-hidden rounded-t-[11rem] border border-gold/50 p-2 shadow-[var(--shadow-card)]">
              <img
                src="/images/dresscode.jpg"
                alt="Улуттук кыргыз кийими: калпак, чепкен жана белдемчи"
                className="h-full w-full rounded-t-[10rem] object-cover"
              />
            </div>
          </Reveal>

          <Reveal delay={0.15} className="flex">
            <FramedPanel className="flex w-full items-center">
              <div className="text-center sm:text-left">
                <div className="flex justify-center sm:justify-start">
                  <Shirt className="h-8 w-8 text-red" strokeWidth={1.6} />
                </div>
                <p className="mt-5 font-display text-3xl sm:text-4xl font-semibold uppercase leading-tight text-ink">
                  Майрам күнү <span className="text-red">улуттук кийим</span>{" "}
                  кийсеңиз — биз үчүн чоң сый!
                </p>
                <div className="mt-6 flex flex-wrap justify-center gap-2.5 sm:justify-start">
                  {CHIPS.map((c) => (
                    <span
                      key={c}
                      className="rounded-full border border-gold/50 px-4 py-1.5 text-[0.68rem] font-bold uppercase tracking-[0.2em] text-ink-soft"
                    >
                      {c}
                    </span>
                  ))}
                </div>
                <p className="mt-6 text-[0.88rem] leading-relaxed text-ink-soft">
                  Ата бабабыздын кия тарткан кийими бул салтанатка эң
                  ылайыктуу боо болот. Улуттук кийимиңиз жок болсо — 
                 ак же көк түстөр да болот.
                </p>
              </div>
            </FramedPanel>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
