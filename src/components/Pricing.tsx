import { Check } from 'lucide-react';
import { useLanguage } from '../i18n/LanguageContext';
import { planPriceLabel, pricingPlans } from '../data/pricing';
import { SectionHeading } from './ui/SectionHeading';
import { Reveal } from './ui/Reveal';
import { OrnamentDivider } from './ui/Ornament';
import { cn } from '../utils/cn';

export function Pricing() {
  const { t, lang } = useLanguage();

  return (
    <section id="pricing" className="py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading eyebrow={t.pricing.eyebrow} title={t.pricing.title} desc={t.pricing.desc} />

        <div className="mt-14 grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-4">
          {pricingPlans.map((plan, i) => {
            const highlight = Boolean(plan.highlight);
            return (
              <Reveal key={plan.id} delay={i * 80} className="h-full">
                <article
                  className={cn(
                    'relative flex h-full flex-col rounded-[1.6rem] p-7 transition-all duration-500 sm:p-8',
                    highlight
                      ? 'bg-night text-cream shadow-lift xl:-translate-y-3'
                      : 'border border-ink/10 bg-cream shadow-card hover:-translate-y-1.5 hover:shadow-soft',
                  )}
                >
                  {highlight && (
                    <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full bg-champagne px-4 py-1.5 text-[0.62rem] font-bold uppercase tracking-[0.18em] text-cream shadow-card">
                      {t.pricing.popular}
                    </span>
                  )}

                  <h3 className={cn('text-[0.72rem] font-bold uppercase tracking-[0.22em]', highlight ? 'text-champagne' : 'text-champagne-deep')}>
                    {plan.name[lang]}
                  </h3>

                  <p className="price-tag mt-4 font-display text-[1.85rem] font-semibold leading-tight sm:text-[2rem]">
                    {planPriceLabel(plan, lang)}
                  </p>

                  <ul className={cn('mt-6 flex-1 space-y-3 border-t pt-6', highlight ? 'border-cream/12' : 'border-ink/8')}>
                    {plan.features[lang].map((feature) => (
                      <li key={feature} className={cn('flex items-start gap-3 text-[0.85rem] leading-relaxed', highlight ? 'text-cream/80' : 'text-ink-soft')}>
                        <Check className="mt-0.5 h-4 w-4 shrink-0 text-champagne" strokeWidth={2.4} />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <a
                    href="#templates"
                    className={cn('btn mt-8 w-full', highlight ? 'btn-champagne' : 'btn-ghost')}
                  >
                    {t.pricing.cta}
                  </a>
                </article>
              </Reveal>
            );
          })}
        </div>

        <Reveal delay={140}>
          <div className="mt-12 flex flex-col items-center gap-4 text-center">
            <OrnamentDivider />
            <p className="max-w-xl text-sm leading-relaxed text-ink-faint">{t.pricing.note}</p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
