import { useState } from 'react';
import { MessageCircle, Plus } from 'lucide-react';
import { useLanguage } from '../i18n/LanguageContext';
import { faqItems } from '../data/faq';
import { whatsappLink } from '../config/site';
import { SectionHeading } from './ui/SectionHeading';
import { Reveal } from './ui/Reveal';
import { cn } from '../utils/cn';

export function Faq() {
  const { t, lang } = useLanguage();
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="py-20 sm:py-28">
      <div className="mx-auto max-w-3xl px-5 sm:px-8">
        <SectionHeading eyebrow={t.faqSection.eyebrow} title={t.faqSection.title} desc={t.faqSection.desc} />

        <Reveal delay={100}>
          <div className="mt-12 border-t border-ink/10">
            {faqItems.map((item, i) => {
              const open = openIndex === i;
              return (
                <div key={i} className="border-b border-ink/10">
                  <button
                    type="button"
                    onClick={() => setOpenIndex(open ? null : i)}
                    aria-expanded={open}
                    className="group flex w-full items-center justify-between gap-6 py-6 text-left"
                  >
                    <span className="flex items-baseline gap-4">
                      <span className="hidden font-display text-sm italic text-champagne-deep sm:inline">
                        {String(i + 1).padStart(2, '0')}
                      </span>
                      <span className={cn(
                        'text-[1.02rem] font-bold tracking-tight transition-colors duration-300 sm:text-[1.12rem]',
                        open ? 'text-champagne-deep' : 'text-ink group-hover:text-champagne-deep',
                      )}>
                        {item.q[lang]}
                      </span>
                    </span>
                    <span
                      className={cn(
                        'inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full border transition-all duration-500',
                        open
                          ? 'rotate-45 border-champagne-deep bg-champagne-deep text-cream'
                          : 'border-ink/15 text-ink-soft group-hover:border-champagne-deep group-hover:text-champagne-deep',
                      )}
                    >
                      <Plus className="h-4 w-4" strokeWidth={2.2} />
                    </span>
                  </button>

                  <div
                    className="grid transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]"
                    style={{ gridTemplateRows: open ? '1fr' : '0fr' }}
                  >
                    <div className="overflow-hidden">
                      <p className="max-w-2xl pb-7 pl-0 text-[0.92rem] leading-relaxed text-ink-soft sm:pl-9">
                        {item.a[lang]}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </Reveal>

        <Reveal delay={140}>
          <div className="mt-10 text-center">
            <a href={whatsappLink(lang)} target="_blank" rel="noreferrer" className="btn btn-ghost">
              <MessageCircle className="h-4 w-4" />
              {t.faqSection.ask}
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
