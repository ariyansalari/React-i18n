import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import enLang from "../../../public/translate/en/en.json";
import frLang from "../../../public/translate/fr/fr.json";

const resources = {
  en: {
    translation: enLang,
  },
  fr: {
    translation: frLang,
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: "en",
  //   if the language doesn;t support
  fallbackLng: "en",
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
