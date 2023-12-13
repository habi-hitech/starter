import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const loadTranslations = (lang) =>
  import(`./locales/${lang}/translations.json`).catch(() => ({}));

i18n.use(initReactI18next).init({
  fallbackLng: "en",
  lng: "en",
  resources: {
    en: {
      translations: loadTranslations("en"),
    },
    // es: {
    //   translations: loadTranslations("en"),
    // },
  },
  ns: ["translations"],
  defaultNS: "translations",
});

i18n.languages = ["en", "es"];

export default i18n;
