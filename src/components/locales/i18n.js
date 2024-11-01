import i18next from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

i18next
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    debug: true,
    fallbackLng: "tr",
    interpolation: {
      escapeValue: false,
    },
    resources: {
      en: {
        translation: {
          home: "HOME",
          about: "ABOUT",
          partners: "PARTNERS",
          contact: "CONTACT",
        },
      },
      de: {
        translation: {
          home: "STARTSEITE",
          about: "ÜBER UNS",
          partners: "PARTNER",
          contact: "KONTAKT",
        },
      },
      tr: {
        translation: {
          home: "ANA SAYFA",
          about: "HAKKIMIZDA",
          partners: "PARTNERLERİMİZ",
          contact: "İLETİŞİM",
        },
      },
    },
  });

export default i18next;
