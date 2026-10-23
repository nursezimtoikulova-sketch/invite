import { MapPin, Navigation } from "lucide-react";
import { FramedPanel, SectionHeading } from "./Ornament";
import { Reveal } from "./Reveal";
import { CITY_LINE, MAP_2GIS, MAP_EMBED, SCHOOL_NAME } from "../config";

export function Location() {
  return (
    <section id="place" className="relative py-16 sm:py-24">
      <div className="mx-auto max-w-5xl px-5">
        <Reveal>
          <SectionHeading eyebrow="Бизди табыңыз" title="Дареги" />
        </Reveal>

        <div className="mt-12 grid gap-8 lg:grid-cols-5">
          <Reveal className="lg:col-span-2">
            <FramedPanel className="h-full">
              <div className="flex h-full flex-col">
                <MapPin className="h-8 w-8 text-red" strokeWidth={1.6} />
                <h3 className="mt-5 font-display text-3xl font-semibold text-ink">
                  {SCHOOL_NAME.replace(" жеке мектеби", "")}
                </h3>
                <p className="mt-1 text-[0.7rem] font-bold uppercase tracking-[0.3em] text-ink-soft">
                  жеке мектеби
                </p>
                <div className="mt-6 space-y-3 text-[0.9rem] leading-relaxed text-ink-soft">
                  <p>
                    {CITY_LINE} — 2GIS картасында белгиленген мектебибиздин
                    имараты
                  </p>
                  <p className="border-l-2 border-red/50 pl-4">
                    Майрам мектебинин акт залында өтөт. Эртең менен
                    саат 10:00до
                
                  </p>
                </div>
                <a
                  href={MAP_2GIS}
                  target="_blank"
                  rel="noreferrer"
                  className="btn btn-primary mt-8 w-full sm:w-max"
                >
                  <Navigation className="h-4 w-4" />
                  2GIS менен жол тап
                </a>
              </div>
            </FramedPanel>
          </Reveal>

          <Reveal delay={0.15} className="lg:col-span-3">
            <div className="h-full overflow-hidden rounded-[2rem] border border-gold/50 p-2 shadow-[var(--shadow-card)]">
              <iframe
                title="«НурАиша» мектебинин дареги"
                src={MAP_EMBED}
                className="h-[24rem] w-full rounded-[1.6rem] border-0 sm:h-full"
                loading="lazy"
              />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
