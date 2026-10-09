import { Check } from 'lucide-react';
import { useLanguage } from '../i18n/LanguageContext';
import { includedFeatures } from '../data/content';
import { iconMap } from './ui/icons';
import { SectionHeading } from './ui/SectionHeading';
import { Reveal } from './ui/Reveal';

export function IncludedFeatures() {
  const { t, lang } = useLanguage();

  return (
    <section className="border-y border-ink/8 bg-cream/70 py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading eyebrow={t.features.eyebrow} title={t.features.title} desc={t.features.desc} />

        <div className="mt-14 grid grid-cols-2 gap-3.5 sm:grid-cols-3 sm:gap-4 lg:grid-cols-4">
          {includedFeatures.map((feature, i) => {
            const Icon = iconMap[feature.icon];
            return (
              <Reveal key={feature.icon} delay={(i % 4) * 60}>
                <div className="group relative flex h-full flex-col gap-6 rounded-2xl border border-ink/8 bg-ivory p-5 transition-all duration-500 hover:-translate-y-1 hover:border-champagne-deep/45 hover:shadow-card sm:p-6">
                  <Check
                    className="absolute right-4 top-4 h-4 w-4 text-champagne-deep/50 transition-colors group-hover:text-champagne-deep"
                    strokeWidth={2.6}
                  />
                  <span className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-champagne/15 text-champagne-deep transition-colors duration-500 group-hover:bg-champagne-deep group-hover:text-cream">
                    <Icon className="h-[1.05rem] w-[1.05rem]" strokeWidth={1.8} />
                  </span>
                  <p className="text-[0.88rem] font-bold leading-snug tracking-tight text-ink">
                    {feature.label[lang]}
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
