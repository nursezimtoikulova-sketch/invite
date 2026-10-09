/**
 * Категории мероприятий / Иш-чанын багыттары
 * ------------------------------------------
 * ✏️  Чтобы добавить/убрать категорию — измените этот массив.
 *     showInFilter: показывать ли категорию в фильтрах каталога.
 */

import type { Lang } from '../i18n/LanguageContext';

export type CategoryId =
  | 'wedding'
  | 'national'
  | 'birthday'
  | 'beshik'
  | 'kyrk'
  | 'jubilee'
  | 'farewell'
  | 'graduation'
  | 'other';

export interface Category {
  id: CategoryId;
  label: { kg: string; ru: string };
  showInFilter: boolean;
}

export const categories: Category[] = [
  { id: 'wedding', label: { kg: 'Үйлөнүү той', ru: 'Свадьба' }, showInFilter: true },
  { id: 'national', label: { kg: 'Улуттук салттар', ru: 'Национальные' }, showInFilter: true },
  { id: 'birthday', label: { kg: 'Туулган күн', ru: 'День рождения' }, showInFilter: true },
  { id: 'beshik', label: { kg: 'Бешик той', ru: 'Бешик той' }, showInFilter: true },
  { id: 'kyrk', label: { kg: 'Кырк күндүк', ru: 'Кырк дней' }, showInFilter: false },
  { id: 'jubilee', label: { kg: 'Маараке', ru: 'Юбилей' }, showInFilter: true },
  { id: 'farewell', label: { kg: 'Кыз узатуу', ru: 'Проводы невесты' }, showInFilter: true },
  { id: 'graduation', label: { kg: 'Бүтүрүү кечеси', ru: 'Выпускной' }, showInFilter: true },
  { id: 'other', label: { kg: 'Башка иш-чаралар', ru: 'Другие' }, showInFilter: true },
];

export const categoryLabel = (id: CategoryId, lang: Lang): string =>
  categories.find((c) => c.id === id)?.label[lang] ?? id;

/** Категории для бегущей строки под hero */
export const marqueeCategories: CategoryId[] = [
  'wedding',
  'farewell',
  'beshik',
  'kyrk',
  'birthday',
  'jubilee',
  'graduation',
  'national',
];

/** Кастомное событие: внешняя секция просит выставить фильтр каталога */
export const FILTER_EVENT = 'nazik:set-filter';
