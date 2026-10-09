import { useLanguage } from '../i18n/LanguageContext';
import { benefits } from '../data/content';
import { iconMap } from './ui/icons';
import { SectionHeading } from './ui/SectionHeading';
import { Reveal } from './ui/Reveal';

export function Benefits() {
  const { t, lang } = useLanguage();

  return (
    <section className="py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading eyebrow={t.benefits.eyebrow} title={t.benefits.title} />

        <div className="mt-14 grid grid-cols-1 gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-5">
          {benefits.map((benefit, i) => {
            const Icon = iconMap[benefit.icon];
            return (
              <Reveal key={benefit.icon} delay={i * 80}>
                <div className="group h-full border-t border-ink/12 pt-6 transition-colors duration-500 hover:border-champagne-deep/60">
                  <div className="flex items-center justify-between">
                    <span className="font-display text-lg italic text-champagne-deep">
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    <span className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-ink/12 text-ink-soft transition-all duration-500 group-hover:border-champagne-deep group-hover:bg-champagne-deep group-hover:text-cream">
                      <Icon className="h-[1.05rem] w-[1.05rem]" strokeWidth={1.7} />
                    </span>
                  </div>
                  <h3 className="mt-5 text-[1.02rem] font-bold tracking-tight text-ink">
                    {benefit.title[lang]}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink-soft">
                    {benefit.text[lang]}
                  </p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
