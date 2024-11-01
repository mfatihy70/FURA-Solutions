import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

i18next
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    debug: true,
    fallbackLng: 'tr',
    interpolation: {
      escapeValue: false,
    },
    resources: {
      en: {
        translation: {
          "ANA SAYFA": "HOME",
          "HAKKIMIZDA": "ABOUT",
          "PARTNERLERİMİZ": "PARTNERS",
          "İLETİŞİM": "CONTACT"
        }
      },
      de: {
        translation: {
          "ANA SAYFA": "STARTSEITE",
          "HAKKIMIZDA": "ÜBER UNS",
          "PARTNERLERİMİZ": "PARTNER",
          "İLETİŞİM": "KONTAKT"
        }
      },
      tr: {
        translation: {
          "ANA SAYFA": "ANA SAYFA",
          "HAKKIMIZDA": "HAKKIMIZDA",
          "PARTNERLERİMİZ": "PARTNERLERİMİZ",
          "İLETİŞİM": "İLETİŞİM"
        }
      }
    }
  });

export default i18next;