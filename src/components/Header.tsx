import { useEffect, useState } from 'react';
import { ArrowUpRight, Menu, X } from 'lucide-react';
import { useLanguage } from '../i18n/LanguageContext';
import { siteConfig } from '../config/site';
import { LogoMark } from './ui/Ornament';
import { LanguageSwitch } from './ui/LanguageSwitch';
import { cn } from '../utils/cn';

/** Ссылки навигации (id секций) — используются и в шапке, и в футере */
export const useNavLinks = () => {
  const { t } = useLanguage();
  return [
    { href: '#templates', label: t.nav.templates },
    { href: '#how', label: t.nav.how },
    { href: '#pricing', label: t.nav.pricing },
    { href: '#faq', label: t.nav.faq },
    { href: '#contact', label: t.nav.contact },
  ];
};

export function Header() {
  const { t } = useLanguage();
  const links = useNavLinks();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  return (
    <>
      <header
        className={cn(
          'fixed inset-x-0 top-0 z-50 transition-all duration-500',
          scrolled
            ? 'border-b border-ink/8 bg-ivory/85 backdrop-blur-xl'
            : 'border-b border-transparent bg-transparent',
        )}
      >
        <div className="mx-auto flex h-[72px] max-w-7xl items-center justify-between px-5 sm:px-8">
          {/* Логотип */}
          <a href="#top" className="group flex items-center gap-2.5" aria-label={siteConfig.brandName}>
            <LogoMark className="h-8 w-8 text-champagne-deep transition-transform duration-700 group-hover:rotate-180" />
            <span className="font-display text-[1.65rem] font-semibold leading-none tracking-tight text-ink">
              {siteConfig.brandName}
            </span>
          </a>

          {/* Навигация — desktop */}
          <nav className="hidden items-center gap-8 lg:flex" aria-label="Main">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="group relative text-[0.82rem] font-semibold tracking-wide text-ink-soft transition-colors hover:text-ink"
              >
                {link.label}
                <span className="absolute -bottom-1.5 left-0 h-px w-full origin-left scale-x-0 bg-champagne-deep transition-transform duration-400 ease-out group-hover:scale-x-100" />
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <LanguageSwitch className="hidden sm:inline-flex" />
            <a href="#contact" className="btn btn-primary hidden px-5! py-2.5! text-[0.8rem]! lg:inline-flex">
              {t.nav.cta}
              <ArrowUpRight className="h-4 w-4" />
            </a>
            {/* Бургер — mobile */}
            <button
              type="button"
              onClick={() => setOpen(true)}
              aria-label={t.aria.menuOpen}
              className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-ink/12 text-ink transition-colors hover:border-ink/35 lg:hidden"
            >
              <Menu className="h-5 w-5" />
            </button>
          </div>
        </div>
      </header>

      {/* Мобильное меню */}
      {open && (
        <div className="menu-overlay fixed inset-0 z-[70] flex flex-col bg-ivory lg:hidden" role="dialog" aria-modal="true">
          <div className="flex h-[72px] items-center justify-between px-5">
            <div className="flex items-center gap-2.5">
              <LogoMark className="h-8 w-8 text-champagne-deep" />
              <span className="font-display text-[1.65rem] font-semibold text-ink">{siteConfig.brandName}</span>
            </div>
            <button
              type="button"
              onClick={() => setOpen(false)}
              aria-label={t.aria.menuClose}
              className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-ink/12 text-ink"
            >
              <X className="h-5 w-5" />
            </button>
          </div>

          <nav className="flex flex-1 flex-col justify-center gap-1 px-8" aria-label="Mobile">
            {links.map((link, i) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                style={{ animationDelay: `${80 + i * 70}ms` }}
                className="menu-panel-link group flex items-baseline gap-4 border-b border-ink/8 py-4"
              >
                <span className="font-display text-sm italic text-champagne-deep">0{i + 1}</span>
                <span className="font-display text-[2rem] font-medium text-ink transition-colors group-hover:text-champagne-deep">
                  {link.label}
                </span>
              </a>
            ))}
          </nav>

          <div className="flex flex-col gap-5 px-8 pb-10">
            <LanguageSwitch variant="full" className="self-start" />
            <a href="#contact" onClick={() => setOpen(false)} className="btn btn-primary w-full">
              {t.nav.cta}
              <ArrowUpRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      )}
    </>
  );
}
