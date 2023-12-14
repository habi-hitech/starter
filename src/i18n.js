import i18n from "i18next";
import backend from "i18next-http-backend";
import { initReactI18next } from "react-i18next";

i18n
  .use(backend)
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    backend: {
      loadPath: "/public/locales/{{lng}}/{{ns}}.json",
    },
    lng: "en",
    fallbackLng: "np",
    interpolation: {
      escapeValue: false, // react already safes from xss
    },
  });

export default i18n;
