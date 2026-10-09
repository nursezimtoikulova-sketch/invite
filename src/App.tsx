import { LanguageProvider } from './i18n/LanguageContext';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Marquee } from './components/Marquee';
import { Benefits } from './components/Benefits';
import { TemplateCatalog } from './components/TemplateCatalog';
import { FeaturedTemplates } from './components/FeaturedTemplates';
import { CulturalSection } from './components/CulturalSection';
import { HowItWorks } from './components/HowItWorks';
import { Pricing } from './components/Pricing';
import { IncludedFeatures } from './components/IncludedFeatures';
import { Delivery } from './components/Delivery';
import { Faq } from './components/Faq';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

/**
 * NAZIK — главный сайт студии цифровых приглашений.
 *
 * Структура (будущее расширение):
 *   ГЛАВНАЯ → КАТАЛОГ → ВЫБОР ШАБЛОНА → ПЕРСОНАЛИЗАЦИЯ →
 *   → ЛИЧНОЕ ПРИГЛАШЕНИЕ → УНИКАЛЬНЫЙ URL → RSVP → GOOGLE SHEETS
 * Точки расширения: data/templates.ts (+поля), components/TemplateModal.
 */
export default function App() {
  return (
    <LanguageProvider>
      <Header />
      <main>
        <Hero />
        <Marquee />
        <Benefits />
        <TemplateCatalog />
        <FeaturedTemplates />
        <CulturalSection />
        <HowItWorks />
        <IncludedFeatures />
        <Pricing />
        <Delivery />
        <Faq />
        <Contact />
      </main>
      <Footer />
    </LanguageProvider>
  );
}
