import { useEffect, useMemo, useState } from 'react';
import { useLanguage } from '../i18n/LanguageContext';
import { categories, FILTER_EVENT, type CategoryId } from '../data/categories';
import { templates, type Template } from '../data/templates';
import { SectionHeading } from './ui/SectionHeading';
import { TemplateCard } from './TemplateCard';
import { TemplateModal } from './TemplateModal';
import { Reveal } from './ui/Reveal';
import { Sparkles } from 'lucide-react';
import { cn } from '../utils/cn';

type Filter = CategoryId | 'all';

export function TemplateCatalog() {
  const { t, lang } = useLanguage();
  const [filter, setFilter] = useState<Filter>('all');
  const [preview, setPreview] = useState<Template | null>(null);

  // Внешние секции могут попросить выставить фильтр (напр. «Улуттук шаблондор»)
  useEffect(() => {
    const handler = (e: Event) => setFilter((e as CustomEvent<Filter>).detail);
    window.addEventListener(FILTER_EVENT, handler);
    return () => window.removeEventListener(FILTER_EVENT, handler);
  }, []);

  const filterChips = useMemo(
    () => categories.filter((c) => c.showInFilter),
    [],
  );

  const visible = useMemo(
    () => (filter === 'all' ? templates : templates.filter((tpl) => tpl.category === filter)),
    [filter],
  );

  return (
    <section id="templates" className="py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          eyebrow={t.catalog.eyebrow}
          title={t.catalog.title}
          desc={t.catalog.desc}
        />

        {/* Фильтры */}
        <Reveal delay={120}>
          <div
            className="mt-10 flex gap-2 overflow-x-auto pb-2 [-ms-overflow-style:none] [scrollbar-width:none] sm:mt-12 sm:flex-wrap sm:justify-center sm:overflow-visible [&::-webkit-scrollbar]:hidden"
            role="tablist"
            aria-label={t.catalog.eyebrow}
          >
            <button
              type="button"
              role="tab"
              aria-selected={filter === 'all'}
              onClick={() => setFilter('all')}
              className={cn('chip', filter === 'all' && 'is-active')}
            >
              {t.catalog.all}
            </button>
            {filterChips.map((cat) => (
              <button
                key={cat.id}
                type="button"
                role="tab"
                aria-selected={filter === cat.id}
                onClick={() => setFilter(cat.id)}
                className={cn('chip', filter === cat.id && 'is-active')}
              >
                {cat.label[lang]}
              </button>
            ))}
          </div>
        </Reveal>

        {/* Сетка */}
        {visible.length > 0 ? (
          <div
            key={filter}
            className="mt-10 grid grid-cols-1 gap-x-6 gap-y-12 sm:grid-cols-2 sm:mt-12 lg:grid-cols-3 xl:grid-cols-4"
          >
            {visible.map((template, i) => (
              <TemplateCard
                key={template.id}
                template={template}
                index={i}
                onView={setPreview}
              />
            ))}
          </div>
        ) : (
          <div className="mx-auto mt-16 flex max-w-md flex-col items-center gap-4 rounded-3xl border border-dashed border-ink/15 px-8 py-14 text-center">
            <Sparkles className="h-6 w-6 text-champagne-deep" />
            <p className="text-sm leading-relaxed text-ink-soft">{t.catalog.empty}</p>
          </div>
        )}
      </div>

      <TemplateModal template={preview} onClose={() => setPreview(null)} />
    </section>
  );
}
