/* ============================================================
   «ТЕҮРНҮҮ» — БУЛ ЖЕРДЕН БАРДЫК МААЛЫМАТТЫ ОҢДОЙ АЛАСЫЗ
   (дата, программа, дарек, RSVP-анкета, музыка)
   ============================================================ */

/* --- 1. RSVP анкетаны Google Таблица менен байланыштыруу ---
   Google Apps Script'иңиздин "Web App" дарегин ушул жерге коңуз.
   (Apps Script → Deploy → New deployment → Web app → "Anyone" → Deploy)
   Мисал: https://script.google.com/macros/s/AKfycbx.../exec  */
export const APPS_SCRIPT_URL = "";

export const SPREADSHEET_ID = "1D4AnN5XVvhvlBqP9HuZZ8bQ392UHI89cnwy3njjA2A";

/* --- 2. Байланыш --- */
export const WHATSAPP_NUMBER = "996555737806";
export const WHATSAPP_DISPLAY = "+996 555 73 78 06";
export const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER}`;

/* --- 3. Дарек --- */
export const SCHOOL_NAME = "«Нур Аиша» жеке мектеби";
export const CITY_LINE = "Бишкек шаары";
export const MAP_2GIS =
  "https://2gis.kg/bishkek/geo/70000001029657628/74.632814,42.905017";
export const MAP_COORDS = "42.905017,74.632814";
export const MAP_EMBED =
  "https://www.openstreetmap.org/export/embed.html?bbox=74.614%2C42.889%2C74.653%2C42.922&layer=mapnik&marker=42.905017,74.632814";

/* --- 4. Улуттук музыка (YouTube) --- */
export const MUSIC_VIDEO_ID = "AznDvJpKDvI";
export const MUSIC_PLAYLIST = "PLZ8Y2URguNbOzSi55oaWx1UrjpH4ClVW0";
export const MUSIC_TITLE = "«Ойго тол» — улуттук обондор";

/* --- 5. Майрамдын күнү: 31-октябрь, 10:00 (эгер өтүп кетсе — кийинки жылга санайт) --- */
export function getEventDate(): Date {
  const now = new Date();
  let target = new Date(now.getFullYear(), 9, 31, 10, 0, 0); // 9 = октябрь
  if (target.getTime() <= now.getTime()) {
    target = new Date(now.getFullYear() + 1, 9, 31, 10, 0, 0);
  }
  return target;
}

const WEEKDAYS_KY = [
  "жекшемби",
  "дүйшөмбү",
  "шейшемби",
  "шаршемби",
  "бейшемби",
  "жума",
  "ишемби",
];

export function getWeekdayKy(date: Date): string {
  return WEEKDAYS_KY[date.getDay()];
}

/* --- 6. МАЙРАМДЫК ПРОГРАММА — Тема: «Улуттук дем» --- */
export interface ProgramItem {
  num: number;
  section: string;
  content: string;
}

export const PROGRAM: ProgramItem[] = [
  {
    num: 1,
    section: "Манас айтуу",
    content: "Ачылыш — «Манас» эпосунан айтуу",
  },
  {
    num: 2,
    section: "Кыз төрөлүшү",
    content: "Сүйүнчү айтуу, азан чакыруу менен ат коюу",
  },
  {
    num: 3,
    section: "Баланы бешикке бөлөө",
    content: "Бешик салуу салты",
  },
  {
    num: 4,
    section: "Тушоо кесүү",
    content: "Жарыштыруу · Уюштуруу",
  },
  {
    num: 5,
    section: "Улуттук оюндар",
    content: "Чүкө",
  },
  {
    num: 6,
    section: "Презентация: тарых жазуулар",
    content: "Орхон-Енисей жазуулары",
  },
  {
    num: 7,
    section: "Кыргыз маданияты жана кийим-кече",
    content: "Маданият жана улуттук кийимдер презентациясы",
  },
  {
    num: 8,
    section: "Кыз узатуу",
    content: "Кыз узатуу салты, кошумча бий",
  },
  {
    num: 9,
    section: "Тамак-аш презентациясы",
    content: "Улуттук тамактарды тааныштыруу",
  },
  {
    num: 10,
    section: "Той жана улуттук аспаптар",
    content: "Жыйынтыктоочу той, улуттук аспаптар",
  },
];

export const MARQUEE_ITEMS = [
  "Манас айтуу",
  "Кыз төрөлүшү",
  "Тушоо кесүү",
  "Улуттук оюндар",
  "Кыз узатуу",
  "Тамак-аш",
  "Улуттук дем",
  "Бешик салуу",
];
