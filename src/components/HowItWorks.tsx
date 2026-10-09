import { useLanguage } from '../i18n/LanguageContext';
import { steps } from '../data/content';
import { SectionHeading } from './ui/SectionHeading';
import { Reveal } from './ui/Reveal';

export function HowItWorks() {
  const { t, lang } = useLanguage();

  return (
    <section id="how" className="bg-sand/55 py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading eyebrow={t.how.eyebrow} title={t.how.title} desc={t.how.desc} />

        <div role="list" className="relative mt-16 grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
          {/* соединительная линия */}
          <span
            className="absolute left-[12%] right-[12%] top-7 hidden border-t border-dashed border-champagne-deep/40 lg:block"
            aria-hidden
          />
          {steps.map((step, i) => (
            <Reveal key={step.title.kg} delay={i * 100}>
              <div role="listitem" className="relative text-center lg:text-left">
                <span className="relative z-10 mx-auto inline-flex h-14 w-14 items-center justify-center rounded-full border border-champagne-deep/45 bg-ivory font-display text-xl font-semibold italic text-champagne-deep shadow-card lg:mx-0">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <h3 className="display-3 mt-6 text-ink">{step.title[lang]}</h3>
                <p className="mx-auto mt-3 max-w-xs text-sm leading-relaxed text-ink-soft lg:mx-0">
                  {step.text[lang]}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
