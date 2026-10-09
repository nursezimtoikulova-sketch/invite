import { Clock3 } from 'lucide-react';
import { useLanguage } from '../i18n/LanguageContext';
import { siteConfig, whatsappLink } from '../config/site';
import { OrnamentRing, OrnamentStrip } from './ui/Ornament';
import { InstagramIcon, TelegramIcon, WhatsAppIcon } from './ui/SocialIcons';
import { Reveal } from './ui/Reveal';

export function Contact() {
  const { t, lang } = useLanguage();

  return (
    <section id="contact" className="py-6 sm:py-10">
      <div className="mx-auto max-w-7xl px-3 sm:px-6">
        <div className="relative overflow-hidden rounded-[2rem] bg-night px-6 py-20 text-center sm:rounded-[2.75rem] sm:px-12 sm:py-28">
          {/* декорации */}
          <OrnamentRing className="pointer-events-none absolute -left-32 -top-32 h-[400px] w-[400px] animate-spin-slower text-champagne/20" />
          <OrnamentRing className="pointer-events-none absolute -bottom-36 -right-28 h-[440px] w-[440px] animate-spin-slower text-champagne/20 [animation-direction:reverse]" />
          <div className="pointer-events-none absolute left-1/2 top-1/2 h-[420px] w-[420px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-champagne/10 blur-3xl" />

          <div className="relative">
            <Reveal>
              <span className="eyebrow text-champagne">{t.contact.eyebrow}</span>
            </Reveal>
            <Reveal delay={90}>
              <h2 className="display-2 mx-auto mt-6 max-w-2xl text-balance text-cream">
                {t.contact.titleA}
                <br />
                <span className="accent-italic text-champagne!">{t.contact.titleB}</span>
              </h2>
            </Reveal>
            <Reveal delay={170}>
              <p className="mx-auto mt-6 max-w-lg text-[0.95rem] leading-relaxed text-cream/60">
                {t.contact.desc}
              </p>
            </Reveal>

            <Reveal delay={240}>
              <div className="mt-10 flex flex-col items-center justify-center gap-3.5 sm:flex-row">
                <a href={whatsappLink(lang)} target="_blank" rel="noreferrer" className="btn btn-champagne w-full sm:w-auto">
                  <WhatsAppIcon className="h-[1.05rem] w-[1.05rem]" />
                  {t.contact.whatsapp}
                </a>
                <a href={siteConfig.contacts.telegram} target="_blank" rel="noreferrer" className="btn btn-outline-light w-full sm:w-auto">
                  <TelegramIcon className="h-[1.05rem] w-[1.05rem]" />
                  {t.contact.telegram}
                </a>
                <a href={siteConfig.contacts.instagram} target="_blank" rel="noreferrer" className="btn btn-outline-light w-full sm:w-auto">
                  <InstagramIcon className="h-[1.05rem] w-[1.05rem]" />
                  {t.contact.instagram}
                </a>
              </div>
            </Reveal>

            <Reveal delay={310}>
              <p className="mt-8 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.14em] text-cream/45">
                <Clock3 className="h-3.5 w-3.5" />
                {t.contact.note}
              </p>
            </Reveal>

            <Reveal delay={360}>
              <OrnamentStrip className="mt-12 text-champagne/40" count={5} />
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
