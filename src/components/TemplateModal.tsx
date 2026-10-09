import { useEffect, useState } from 'react';
import { Check, Link2, MessageCircle, X } from 'lucide-react';
import { useLanguage } from '../i18n/LanguageContext';
import { categoryLabel } from '../data/categories';
import { formatPrice, type Template } from '../data/templates';
import { whatsappLink } from '../config/site';

interface TemplateModalProps {
  template: Template | null;
  onClose: () => void;
}

/** Полноэкранный предпросмотр шаблона */
export function TemplateModal({ template, onClose }: TemplateModalProps) {
  const { t, lang } = useLanguage();
  const [activeImage, setActiveImage] = useState(0);

  useEffect(() => {
    setActiveImage(0);
  }, [template?.id]);

  useEffect(() => {
    if (!template) return;
    document.body.style.overflow = 'hidden';
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && onClose();
    window.addEventListener('keydown', onKey);
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', onKey);
    };
  }, [template, onClose]);

  if (!template) return null;

  const gallery = template.gallery && template.gallery.length > 0 ? template.gallery : [template.image];

  return (
    <div className="fixed inset-0 z-[80] flex items-end justify-center sm:items-center sm:p-6" role="dialog" aria-modal="true">
      {/* фон */}
      <button
        type="button"
        aria-label={t.aria.closePreview}
        onClick={onClose}
        className="modal-backdrop absolute inset-0 bg-ink/45 backdrop-blur-md"
      />

      {/* панель */}
      <div className="modal-panel relative z-10 flex max-h-[94vh] w-full max-w-4xl flex-col overflow-hidden rounded-t-[1.8rem] bg-cream shadow-lift sm:rounded-[1.8rem]">
        <button
          type="button"
          onClick={onClose}
          aria-label={t.modal.close}
          className="absolute right-4 top-4 z-30 inline-flex h-11 w-11 items-center justify-center rounded-full bg-ink/70 text-cream backdrop-blur transition-transform hover:scale-105 sm:right-5 sm:top-5"
        >
          <X className="h-5 w-5" />
        </button>

        <div className="grid overflow-y-auto md:grid-cols-[1.05fr_1fr] md:overflow-hidden">
          {/* Изображение */}
          <div className="relative bg-sand md:h-full">
            <div className="relative aspect-[3/4] w-full md:aspect-auto md:h-full md:min-h-[560px]">
              <img
                key={gallery[activeImage]}
                src={gallery[activeImage]}
                alt={`${template.name} — ${template.style[lang]}`}
                className="absolute inset-0 h-full w-full object-cover"
              />
            </div>
            {gallery.length > 1 && (
              <div className="absolute bottom-4 left-1/2 z-20 flex -translate-x-1/2 gap-2 rounded-full bg-ink/45 p-1.5 backdrop-blur">
                {gallery.map((src, i) => (
                  <button
                    key={src}
                    type="button"
                    onClick={() => setActiveImage(i)}
                    aria-label={`Preview ${i + 1}`}
                    className={`h-11 w-9 overflow-hidden rounded-lg ring-2 transition-all ${
                      i === activeImage ? 'ring-cream' : 'ring-transparent opacity-70 hover:opacity-100'
                    }`}
                  >
                    <img src={src} alt="" className="h-full w-full object-cover" />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Детали */}
          <div className="flex flex-col p-7 sm:p-9 md:max-h-[94vh] md:overflow-y-auto">
            <span className="self-start rounded-full border border-champagne-deep/35 px-3.5 py-1.5 text-[0.62rem] font-bold uppercase tracking-[0.18em] text-champagne-deep">
              {categoryLabel(template.category, lang)}
            </span>

            <h3 className="mt-5 font-display text-[2.3rem] font-semibold leading-none text-ink sm:text-[2.6rem]">
              {template.name}
            </h3>
            <p className="mt-2 text-sm italic text-ink-faint">{template.style[lang]}</p>

            <p className="price-tag mt-5 font-display text-[1.9rem] font-semibold text-ink">
              {formatPrice(template.price)}
              <span className="ml-1.5 text-base font-sans font-semibold text-ink-faint">сом</span>
            </p>

            <p className="mt-5 text-[0.95rem] leading-relaxed text-ink-soft">
              {template.description[lang]}
            </p>

            <div className="mt-6 border-t border-ink/10 pt-6">
              <h4 className="text-[0.68rem] font-bold uppercase tracking-[0.2em] text-ink-faint">
                {t.modal.includesTitle}
              </h4>
              <ul className="mt-4 space-y-2.5">
                {t.modal.includes.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm text-ink-soft">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-champagne-deep" strokeWidth={2.4} />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-8 flex flex-col gap-3">
              <a
                href={whatsappLink(lang, template.name)}
                target="_blank"
                rel="noreferrer"
                className="btn btn-primary w-full"
              >
                <MessageCircle className="h-4 w-4" />
                {t.modal.choose}
              </a>
              <a
                href="#contact"
                onClick={onClose}
                className="btn btn-ghost w-full"
              >
                <Link2 className="h-4 w-4" />
                {t.modal.contact}
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
