import { createContext, useContext, useEffect, useState, type ReactNode } from 'react';
import { kg } from './locales/kg';
import { ru } from './locales/ru';

export type Lang = 'kg' | 'ru';
export type Translation = typeof kg;

const translations: Record<Lang, Translation> = { kg, ru };

interface LanguageContextValue {
  lang: Lang;
  setLang: (lang: Lang) => void;
  t: Translation;
}

const LanguageContext = createContext<LanguageContextValue>({
  lang: 'kg',
  setLang: () => undefined,
  t: kg,
});

const STORAGE_KEY = 'nazik-lang';

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>(() => {
    if (typeof window === 'undefined') return 'kg';
    const saved = window.localStorage.getItem(STORAGE_KEY);
    return saved === 'ru' || saved === 'kg' ? saved : 'kg';
  });

  useEffect(() => {
    document.documentElement.lang = lang === 'kg' ? 'ky' : 'ru';
    window.localStorage.setItem(STORAGE_KEY, lang);
  }, [lang]);

  const setLang = (next: Lang) => setLangState(next);

  return (
    <LanguageContext.Provider value={{ lang, setLang, t: translations[lang] }}>
      {children}
    </LanguageContext.Provider>
  );
}

// eslint-disable-next-line react-refresh/only-export-components
export function useLanguage() {
  return useContext(LanguageContext);
}
