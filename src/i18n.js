import i18n from 'i18next';
import detector from 'i18next-browser-languagedetector';
import backend from 'i18next-xhr-backend';
import { reactI18nextModule } from 'react-i18next';

import translationEN from './locales/en.json';
import translationFR from './locales/fr.json';
import translationAR from './locales/ar.json';

// the translations
const resources = {
  en: {
    translation: translationEN,
  },
  fr: {
    translation: translationFR,
  },

  ar: {
    translation: translationAR,
  },
};

i18n
  .use(detector)
  .use(backend)
  .use(reactI18nextModule) // passes i18n down to react-i18next
  .init({
    resources,
    lng: 'ar',

    interpolation: {
      escapeValue: false, // react already safes from xss
    },
  });

export default i18n;
