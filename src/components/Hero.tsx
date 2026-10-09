import { ArrowDown, ArrowRight } from 'lucide-react';
import { useLanguage } from '../i18n/LanguageContext';
import { PhoneMockup } from './ui/PhoneMockup';
import { OrnamentRing, OrnamentSwirl } from './ui/Ornament';
import { Reveal } from './ui/Reveal';

export function Hero() {
  const { t } = useLanguage();

  return (
    <section id="top" className="relative overflow-hidden pb-14 pt-[110px] sm:pt-[130px] lg:pb-0 lg:pt-[120px]">
      {/* фоновые декорации */}
      <div className="pointer-events-none absolute -left-40 top-1/3 h-[480px] w-[480px] rounded-full bg-sand blur-3xl" aria-hidden />
      <OrnamentRing
        className="pointer-events-none absolute -right-24 -top-24 h-[340px] w-[340px] animate-spin-slower text-champagne-deep/45 sm:h-[440px] sm:w-[440px]"
      />

      <div className="mx-auto grid max-w-7xl items-center gap-14 px-5 sm:px-8 lg:grid-cols-[1.02fr_0.98fr] lg:gap-8">
        {/* Текстовая колонка */}
        <div className="relative z-10 text-center lg:text-left">
          <Reveal>
            <span className="inline-flex items-center gap-2.5 rounded-full border border-ink/10 bg-cream/70 px-4 py-2 text-[0.68rem] font-bold uppercase tracking-[0.22em] text-champagne-deep backdrop-blur">
              <OrnamentSwirl className="h-3.5 w-3.5" />
              {t.hero.eyebrow}
            </span>
          </Reveal>

          <Reveal delay={90}>
            <h1 className="display-1 mt-7 text-ink">
              {t.hero.titleA}
              <br />
              <span className="accent-italic">{t.hero.titleAccent}</span>
            </h1>
          </Reveal>

          <Reveal delay={180}>
            <p className="mx-auto mt-6 max-w-md text-[0.98rem] leading-relaxed text-ink-soft sm:text-lg lg:mx-0 lg:max-w-lg">
              {t.hero.subtitle}
            </p>
          </Reveal>

          <Reveal delay={260}>
            <div className="mt-9 flex flex-col items-center gap-3.5 sm:flex-row sm:justify-center lg:justify-start">
              <a href="#templates" className="btn btn-primary w-full sm:w-auto">
                {t.hero.ctaPrimary}
                <ArrowRight className="h-4 w-4" />
              </a>
              <a href="#how" className="btn btn-ghost w-full sm:w-auto">
                {t.hero.ctaSecondary}
              </a>
            </div>
          </Reveal>

          <Reveal delay={340}>
            <dl className="mt-12 flex items-stretch justify-center divide-x divide-ink/10 lg:justify-start">
              {t.hero.stats.map((stat, i) => (
                <div key={i} className="px-5 text-center first:pl-0 last:pr-0 sm:px-7 lg:text-left">
                  <dt className="order-2 mt-1 block text-[0.68rem] font-semibold uppercase tracking-[0.14em] text-ink-faint">
                    {stat.label}
                  </dt>
                  <dd className="order-1 font-display text-[1.9rem] font-semibold leading-none text-ink sm:text-[2.2rem]">
                    {stat.value}
                  </dd>
                </div>
              ))}
            </dl>
          </Reveal>
        </div>

        {/* Композиция телефонов */}
        <Reveal delay={200} className="relative">
          <div className="relative mx-auto h-[400px] max-w-[560px] sm:h-[520px] lg:h-[620px] lg:max-w-none">
            {/* кольцо за центральным телефоном */}
            <div className="absolute left-1/2 top-1/2 h-[78%] w-[78%] -translate-x-1/2 -translate-y-1/2 rounded-full border border-champagne/50" aria-hidden />
            <div className="absolute left-1/2 top-1/2 h-[92%] w-[92%] -translate-x-1/2 -translate-y-1/2 rounded-full border border-champagne/25" aria-hidden />

            <div className="animate-float-slow absolute left-0 top-[10%] w-[42%] -rotate-[9deg]">
              <PhoneMockup loading="eager" src="/images/templates/ajur.jpg" alt="Шаблон «Ажар» — өйдө жеңил гүлдүү чакыруу" />
            </div>
            <div className="animate-float-slow absolute right-0 top-[16%] w-[42%] rotate-[8deg] [animation-delay:1.4s]">
              <PhoneMockup loading="eager" src="/images/templates/shumkar.jpg" alt="Шаблон «Шумкар» — улуттук чакыруу" />
            </div>
            <div className="animate-float absolute left-1/2 top-0 z-10 w-[46%] -translate-x-1/2 rotate-[1.5deg] [animation-delay:0.6s]">
              <PhoneMockup loading="eager" src="/images/templates/luxury.jpg" alt="Шаблон «Luxury» — премиум чакыруу" />
            </div>
          </div>
        </Reveal>
      </div>

      {/* индикатор скролла */}
      <div className="mt-14 hidden justify-center pb-8 lg:flex" aria-hidden>
        <div className="flex flex-col items-center gap-2 text-ink-faint">
          <span className="text-[0.6rem] font-bold uppercase tracking-[0.3em]">Nazik</span>
          <ArrowDown className="h-4 w-4 animate-bounce" />
        </div>
      </div>
    </section>
  );
}
