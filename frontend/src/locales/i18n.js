import i18next from "i18next"
import { initReactI18next } from "react-i18next"
import translations from "./translations.json"

// Define available languages
export const LANGUAGES = [
  { code: "tr", name: "Türkçe", flag: "tr" },
  { code: "en", name: "English", flag: "gb" },
  { code: "de", name: "Deutsch", flag: "de" },
]

export const LanguageCode = LANGUAGES.map((lang) => lang.code)

// Function to transform translations
const transformTranslations = (translations, index) => {
  const transform = (obj) => {
    if (Array.isArray(obj)) {
      return obj[index]
    } else if (typeof obj === "object" && obj !== null) {
      return Object.fromEntries(
        Object.entries(obj).map(([key, value]) => [key, transform(value)])
      )
    }
    return obj
  }
  return transform(translations)
}

// Get language from hash route
export const getLanguageFromRoute = () => {
  // const hash = window.location.hash
  // const langCode = hash.split("/")[1] // Get language code after #/
  // if (langCode && LANGUAGES.some((lang) => lang.code === langCode)) {
  //   return langCode
  // }
  return "tr" // Default language
}

// i18n configuration
const i18nConfig = {
  resources: {
    tr: { translation: transformTranslations(translations, 0) },
    en: { translation: transformTranslations(translations, 1) },
    de: { translation: transformTranslations(translations, 2) },
  },
  lng: getLanguageFromRoute(),
  fallbackLng: "tr",
}

// Initialize i18next with the configuration
i18next.use(initReactI18next).init(i18nConfig)

// Listen for hash changes to update language
window.addEventListener("hashchange", () => {
  const newLang = getLanguageFromRoute()
  if (newLang !== i18next.language) {
    i18next.changeLanguage(newLang)
  }
})

export default i18next
