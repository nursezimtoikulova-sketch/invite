import { useLanguage } from '../i18n/LanguageContext';
import { categoryLabel, marqueeCategories } from '../data/categories';

/** Бегущая строка категорий между hero и преимуществами */
export function Marquee() {
  const { lang } = useLanguage();

  const items = marqueeCategories.map((id) => categoryLabel(id, lang));

  const Row = ({ hidden }: { hidden?: boolean }) => (
    <div className="flex w-max shrink-0 items-center" aria-hidden={hidden}>
      {items.map((label, i) => (
        <span key={`${label}-${i}`} className="flex items-center">
          <span className="whitespace-nowrap px-7 font-display text-xl italic text-ink-soft sm:text-2xl">
            {label}
          </span>
          <svg viewBox="0 0 10 10" className="h-1.5 w-1.5 fill-champagne-deep/70" aria-hidden>
            <path d="M5 0l5 5-5 5-5-5z" />
          </svg>
        </span>
      ))}
    </div>
  );

  return (
    <div className="relative overflow-hidden border-y border-ink/8 bg-cream/60 py-5">
      <div className="animate-marquee flex w-max hover:[animation-play-state:paused]">
        <Row />
        <Row hidden />
      </div>
    </div>
  );
}
