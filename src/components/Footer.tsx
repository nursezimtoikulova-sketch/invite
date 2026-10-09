import { useLanguage } from '../i18n/LanguageContext';
import { siteConfig } from '../config/site';
import { useNavLinks } from './Header';
import { LogoMark } from './ui/Ornament';
import { LanguageSwitch } from './ui/LanguageSwitch';
import { InstagramIcon, TelegramIcon, WhatsAppIcon } from './ui/SocialIcons';

const socials = [
  { href: siteConfig.contacts.instagram, label: 'Instagram', Icon: InstagramIcon },
  { href: siteConfig.contacts.whatsapp, label: 'WhatsApp', Icon: WhatsAppIcon },
  { href: siteConfig.contacts.telegram, label: 'Telegram', Icon: TelegramIcon },
];

export function Footer() {
  const { t, lang } = useLanguage();
  const links = useNavLinks();

  return (
    <footer className="mt-14 border-t border-ink/10 bg-cream/60">
      <div className="mx-auto max-w-7xl px-5 py-14 sm:px-8">
        <div className="grid gap-12 md:grid-cols-[1.3fr_1fr_1fr_1fr]">
          {/* Бренд */}
          <div>
            <a href="#top" className="flex items-center gap-2.5">
              <LogoMark className="h-9 w-9 text-champagne-deep" />
              <span className="font-display text-[1.8rem] font-semibold text-ink">
                {siteConfig.brandName}
              </span>
            </a>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-ink-soft">
              {t.footer.tagline}
            </p>
            <p className="mt-6 text-[0.68rem] font-bold uppercase tracking-[0.22em] text-ink-faint">
              {siteConfig.city[lang]} · {siteConfig.year}
            </p>
          </div>

          {/* Навигация */}
          <nav aria-label="Footer">
            <h3 className="text-[0.68rem] font-bold uppercase tracking-[0.22em] text-ink-faint">
              {t.footer.navTitle}
            </h3>
            <ul className="mt-5 space-y-3">
              {links.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm font-semibold text-ink-soft transition-colors hover:text-champagne-deep"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Язык */}
          <div>
            <h3 className="text-[0.68rem] font-bold uppercase tracking-[0.22em] text-ink-faint">
              {t.footer.langTitle}
            </h3>
            <LanguageSwitch variant="full" className="mt-5" />
          </div>

          {/* Соцсети */}
          <div>
            <h3 className="text-[0.68rem] font-bold uppercase tracking-[0.22em] text-ink-faint">
              {t.footer.socialTitle}
            </h3>
            <div className="mt-5 flex gap-3">
              {socials.map(({ href, label, Icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={label}
                  className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-ink/12 text-ink-soft transition-all duration-400 hover:-translate-y-1 hover:border-champagne-deep hover:bg-champagne-deep hover:text-cream"
                >
                  <Icon className="h-[1.05rem] w-[1.05rem]" />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-ink/8 pt-7 sm:flex-row">
          <p className="text-xs text-ink-faint">
            © {siteConfig.year} {siteConfig.brandName}. {t.footer.rights}
          </p>
          <p className="text-[0.65rem] font-bold uppercase tracking-[0.28em] text-champagne-deep/70">
            {t.hero.eyebrow.split('·')[0].trim()}
          </p>
        </div>
      </div>
    </footer>
  );
}
