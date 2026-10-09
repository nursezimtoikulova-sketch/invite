import { CalendarClock, PenTool, Zap, type LucideIcon } from 'lucide-react';
import { useLanguage } from '../i18n/LanguageContext';
import { deliveryOptions, type DeliveryOption } from '../data/pricing';
import { SectionHeading } from './ui/SectionHeading';
import { Reveal } from './ui/Reveal';

const deliveryIcons: Record<DeliveryOption['icon'], LucideIcon> = {
  calendar: CalendarClock,
  bolt: Zap,
  pen: PenTool,
};

export function Delivery() {
  const { t, lang } = useLanguage();

  return (
    <section className="bg-sand/55 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <SectionHeading eyebrow={t.delivery.eyebrow} title={t.delivery.title} desc={t.delivery.desc} />

        <div className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-3">
          {deliveryOptions.map((option, i) => {
            const Icon = deliveryIcons[option.icon];
            return (
              <Reveal key={option.id} delay={i * 90}>
                <article className="group flex h-full flex-col items-center rounded-[1.6rem] border border-ink/10 bg-cream px-7 py-10 text-center shadow-card transition-all duration-500 hover:-translate-y-1.5 hover:shadow-soft">
                  <span className="inline-flex h-14 w-14 items-center justify-center rounded-full border border-champagne-deep/40 text-champagne-deep transition-colors duration-500 group-hover:bg-champagne-deep group-hover:text-cream">
                    <Icon className="h-6 w-6" strokeWidth={1.6} />
                  </span>
                  <h3 className="mt-6 text-[0.7rem] font-bold uppercase tracking-[0.22em] text-ink-faint">
                    {option.name[lang]}
                  </h3>
                  <p className="mt-3 font-display text-[2.3rem] font-semibold leading-none text-ink">
                    {option.time[lang]}
                  </p>
                  <p className="mt-4 max-w-[240px] text-sm leading-relaxed text-ink-soft">
                    {option.text[lang]}
                  </p>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
