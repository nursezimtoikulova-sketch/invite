import { Eye } from 'lucide-react';
import { useLanguage } from '../i18n/LanguageContext';
import { categoryLabel } from '../data/categories';
import { formatPrice, type Template } from '../data/templates';
import { whatsappLink } from '../config/site';

interface TemplateCardProps {
  template: Template;
  onView: (template: Template) => void;
  index?: number;
}

/** Карточка шаблона в каталоге */
export function TemplateCard({ template, onView, index = 0 }: TemplateCardProps) {
  const { t, lang } = useLanguage();

  return (
    <article
      className="group grid-enter"
      style={{ animationDelay: `${Math.min(index * 55, 400)}ms` }}
    >
      {/* Превью */}
      <div className="card-image-frame aspect-[3/4] shadow-card">
        <button
          type="button"
          onClick={() => onView(template)}
          className="absolute inset-0 z-10 h-full w-full cursor-pointer"
          aria-label={`${t.templateCard.view} — ${template.name}`}
        />
        <img
          src={template.image}
          alt={`${template.name} — ${template.style[lang]}`}
          loading="lazy"
          className="absolute inset-0 h-full w-full object-cover"
        />
        {/* категория */}
        <span className="absolute left-3.5 top-3.5 z-20 rounded-full bg-cream/85 px-3 py-1.5 text-[0.62rem] font-bold uppercase tracking-[0.16em] text-ink/80 backdrop-blur-sm">
          {categoryLabel(template.category, lang)}
        </span>
        {/* hover-подсказка */}
        <span className="absolute inset-x-4 bottom-4 z-20 flex translate-y-3 items-center justify-center gap-2 rounded-full bg-ink/80 py-3 text-[0.78rem] font-bold uppercase tracking-[0.14em] text-cream opacity-0 backdrop-blur transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
          <Eye className="h-4 w-4" />
          {t.templateCard.view}
        </span>
      </div>

      {/* Информация */}
      <div className="mt-4 flex items-start justify-between gap-3 px-0.5">
        <div className="min-w-0">
          <h3 className="font-display text-[1.45rem] font-semibold leading-tight text-ink">
            {template.name}
          </h3>
          <p className="mt-0.5 truncate text-[0.8rem] text-ink-faint">{template.style[lang]}</p>
        </div>
        <p className="price-tag shrink-0 pt-1 text-[0.95rem] font-bold text-ink">
          {formatPrice(template.price)} <span className="text-[0.75rem] font-semibold text-ink-faint">сом</span>
        </p>
      </div>

      {/* Действия */}
      <div className="mt-3 flex gap-2.5 px-0.5">
        <button
          type="button"
          onClick={() => onView(template)}
          className="btn btn-ghost flex-1 px-4! py-2.5! text-[0.78rem]!"
        >
          {t.templateCard.view}
        </button>
        <a
          href={whatsappLink(lang, template.name)}
          target="_blank"
          rel="noreferrer"
          className="btn btn-primary flex-1 px-4! py-2.5! text-[0.78rem]!"
        >
          {t.templateCard.choose}
        </a>
      </div>
    </article>
  );
}
