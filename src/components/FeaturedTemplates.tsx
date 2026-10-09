import { useState } from 'react';
import { ArrowRight, ArrowUpRight } from 'lucide-react';
import { useLanguage } from '../i18n/LanguageContext';
import { categoryLabel } from '../data/categories';
import { featuredTemplates, formatPrice, type Template } from '../data/templates';
import { SectionHeading } from './ui/SectionHeading';
import { TemplateModal } from './TemplateModal';
import { Reveal } from './ui/Reveal';
import { cn } from '../utils/cn';

/** Редакционная раскладка: размер карточки зависит от позиции */
const layout = [
  { span: 'md:col-span-4', aspect: 'aspect-[3/4]' },
  { span: 'md:col-span-8', aspect: 'aspect-[4/3] md:aspect-auto md:h-full' },
  { span: 'md:col-span-5', aspect: 'aspect-[3/4]' },
  { span: 'md:col-span-7', aspect: 'aspect-[4/3] md:aspect-auto md:h-full' },
  { span: 'md:col-span-6', aspect: 'aspect-[4/5] md:aspect-[16/10]' },
  { span: 'md:col-span-6', aspect: 'aspect-[4/5] md:aspect-[16/10]' },
];

export function FeaturedTemplates() {
  const { t, lang } = useLanguage();
  const [preview, setPreview] = useState<Template | null>(null);

  return (
    <section className="py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <SectionHeading
            align="left"
            eyebrow={t.featured.eyebrow}
            title={t.featured.title}
            desc={t.featured.desc}
            className="md:max-w-xl"
          />
          <Reveal delay={140}>
            <a
              href="#templates"
              className="group hidden items-center gap-2 text-sm font-bold text-ink transition-colors hover:text-champagne-deep md:inline-flex"
            >
              {t.featured.more}
              <ArrowRight className="h-4 w-4 transition-transform duration-500 group-hover:translate-x-1.5" />
            </a>
          </Reveal>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-5 sm:gap-6 md:grid-cols-12">
          {featuredTemplates.slice(0, layout.length).map((template, i) => (
            <Reveal key={template.id} delay={(i % 2) * 90} className={cn(layout[i].span)}>
              <button
                type="button"
                onClick={() => setPreview(template)}
                className={cn(
                  'card-image-frame group relative block w-full text-left shadow-card',
                  layout[i].aspect,
                )}
                aria-label={`${t.templateCard.view} — ${template.name}`}
              >
                <img
                  src={template.image}
                  alt={`${template.name} — ${template.style[lang]}`}
                  loading="lazy"
                  className="absolute inset-0 h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/75 via-ink/8 to-transparent opacity-90 transition-opacity duration-500 group-hover:opacity-100" />

                {/* цена */}
                <span className="price-tag absolute right-4 top-4 rounded-full bg-cream/90 px-3.5 py-1.5 text-[0.8rem] font-bold text-ink backdrop-blur-sm">
                  {formatPrice(template.price)} сом
                </span>

                {/* нижняя подпись */}
                <span className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-4 p-5 sm:p-6">
                  <span>
                    <span className="block text-[0.62rem] font-bold uppercase tracking-[0.2em] text-cream/70">
                      {categoryLabel(template.category, lang)}
                    </span>
                    <span className="mt-1 block font-display text-[1.8rem] font-semibold leading-tight text-cream sm:text-[2rem]">
                      {template.name}
                    </span>
                  </span>
                  <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-cream/15 text-cream backdrop-blur transition-all duration-500 group-hover:bg-cream group-hover:text-ink">
                    <ArrowUpRight className="h-[1.15rem] w-[1.15rem] transition-transform duration-500 group-hover:rotate-45" />
                  </span>
                </span>
              </button>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-8 text-center md:hidden">
          <a href="#templates" className="btn btn-ghost">
            {t.featured.more}
            <ArrowRight className="h-4 w-4" />
          </a>
        </Reveal>
      </div>

      <TemplateModal template={preview} onClose={() => setPreview(null)} />
    </section>
  );
}
