import { useLanguage, type Lang } from '../../i18n/LanguageContext';
import { cn } from '../../utils/cn';

interface LanguageSwitchProps {
  variant?: 'compact' | 'full';
  dark?: boolean;
  className?: string;
}

const labels: Record<Lang, { compact: string; full: string }> = {
  kg: { compact: 'КГ', full: 'Кыргызча' },
  ru: { compact: 'РУ', full: 'Русский' },
};

/** Переключатель языка: Кыргызча | Русский */
export function LanguageSwitch({ variant = 'compact', dark = false, className }: LanguageSwitchProps) {
  const { lang, setLang, t } = useLanguage();

  return (
    <div
      role="group"
      aria-label={t.aria.language}
      className={cn(
        'lang-seg',
        dark && 'border-cream/25',
        className,
      )}
    >
      {(Object.keys(labels) as Lang[]).map((code) => (
        <button
          key={code}
          type="button"
          onClick={() => setLang(code)}
          aria-pressed={lang === code}
          className={cn(
            lang === code && 'is-active',
            dark && 'text-cream/55 [&.is-active]:bg-cream [&.is-active]:text-ink',
          )}
        >
          {labels[code][variant]}
        </button>
      ))}
    </div>
  );
}
