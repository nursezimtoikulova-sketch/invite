/**
 * Глобальная конфигурация сайта / Сайттын жалпы жөндөөлөрү
 * -------------------------------------------
 * ✏️  ЗАМЕНИТЕ ссылки ниже на реальные перед запуском.
 *     Чыныгы шилтемелерди ушул жерден алмаштырыңыз.
 */

import type { Lang } from '../i18n/LanguageContext';

export const siteConfig = {
  brandName: 'Nazik',
  year: 2026,
  city: { kg: 'Бишкек', ru: 'Бишкек' },

  contacts: {
    /** TODO: вставьте реальный номер WhatsApp, напр. https://wa.me/996555123456 */
    whatsapp: 'https://wa.me/996700000000',
    /** TODO: вставьте реальный username Telegram */
    telegram: 'https://t.me/nazik_studio',
    /** TODO: вставьте реальный профиль Instagram */
    instagram: 'https://instagram.com/nazik.studio',
  },

  /** Авто-сообщение, которое прикрепляется к ссылке WhatsApp */
  whatsappMessage: {
    kg: (templateName?: string) =>
      templateName
        ? `Саламатсызбы! Мага «${templateName}» дизайны жакты. Толук маалымат алсам болобу?`
        : 'Саламатсызбы! Санариптик чакыруу боюнча кеңеш алгым келет.',
    ru: (templateName?: string) =>
      templateName
        ? `Здравствуйте! Мне понравился дизайн «${templateName}». Хочу узнать подробнее.`
        : 'Здравствуйте! Хочу проконсультироваться по цифровому приглашению.',
  },
};

/** Собрать ссылку WhatsApp с готовым текстом */
export function whatsappLink(lang: Lang, templateName?: string): string {
  const text = siteConfig.whatsappMessage[lang](templateName);
  return `${siteConfig.contacts.whatsapp}?text=${encodeURIComponent(text)}`;
}
