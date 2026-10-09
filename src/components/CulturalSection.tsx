import { ArrowRight } from 'lucide-react';
import { useLanguage } from '../i18n/LanguageContext';
import { FILTER_EVENT } from '../data/categories';
import { OrnamentRing, OrnamentStrip, OrnamentSwirl } from './ui/Ornament';
import { SectionHeading } from './ui/SectionHeading';
import { Reveal } from './ui/Reveal';

export function CulturalSection() {
  const { t } = useLanguage();

  const showNational = () => {
    window.dispatchEvent(new CustomEvent(FILTER_EVENT, { detail: 'national' }));
    document.getElementById('templates')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="py-6 sm:py-10">
      <div className="mx-auto max-w-7xl px-3 sm:px-6">
        <div className="relative overflow-hidden rounded-[2rem] bg-night px-6 py-16 sm:rounded-[2.75rem] sm:px-12 sm:py-24 lg:px-16">
          {/* декорации */}
          <OrnamentRing className="pointer-events-none absolute -left-28 -top-28 h-[380px] w-[380px] animate-spin-slower text-champagne/25" />
          <OrnamentRing className="pointer-events-none absolute -bottom-32 -right-24 h-[420px] w-[420px] animate-spin-slower text-champagne/20 [animation-direction:reverse]" />

          <div className="relative grid items-center gap-14 lg:grid-cols-2">
            {/* Текст */}
            <div>
              <SectionHeading
                align="left"
                tone="dark"
                eyebrow={t.cultural.eyebrow}
                title={t.cultural.title}
                desc={t.cultural.text}
              />

              <div className="mt-10 space-y-7">
                {t.cultural.items.map((item, i) => (
                  <Reveal key={item.title} delay={i * 90}>
                    <div className="flex gap-5">
                      <span className="mt-1 inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-champagne/35 text-champagne">
                        <OrnamentSwirl className="h-5 w-5" />
                      </span>
                      <div>
                        <h3 className="font-display text-xl font-semibold text-cream">{item.title}</h3>
                        <p className="mt-1.5 max-w-md text-sm leading-relaxed text-cream/55">{item.text}</p>
                      </div>
                    </div>
                  </Reveal>
                ))}
              </div>

              <Reveal delay={260}>
                <button type="button" onClick={showNational} className="btn btn-champagne mt-10">
                  {t.cultural.cta}
                  <ArrowRight className="h-4 w-4" />
                </button>
              </Reveal>
            </div>

            {/* Изображения */}
            <Reveal delay={150} className="relative">
              <div className="relative mx-auto max-w-[440px]">
                <div className="absolute -right-6 top-10 w-[62%] rotate-[8deg] overflow-hidden rounded-[1.6rem] ring-1 ring-champagne/30 shadow-lift sm:-right-10">
                  <img
                    src="/images/templates/shumkar.jpg"
                    alt="«Шумкар» — улуттук премиум шаблон"
                    loading="lazy"
                    className="aspect-[3/4] h-full w-full object-cover"
                  />
                </div>
                <div className="relative z-10 w-[72%] -rotate-[4deg] overflow-hidden rounded-[1.6rem] ring-1 ring-champagne/40 shadow-lift">
                  <img
                    src="/images/templates/ak-kalpak.jpg"
                    alt="«Ак-Калпак» — улуттук шаблон"
                    loading="lazy"
                    className="aspect-[3/4] h-full w-full object-cover"
                  />
                </div>
              </div>
            </Reveal>
          </div>

          <Reveal delay={120}>
            <OrnamentStrip className="mt-16 text-champagne/50" count={7} />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
