import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';
import en from './en.json';
import kn from './kn.json';

// create a resource
const resources = {
  en: { translation: en },
  kn: { translation: kn },
};

i18next.use(initReactI18next).init({
  resources,
  lng: 'kn',
  compatibilityJSON: 'v4',
  interpolation: { escapeValue: false }, // this is a by default
});

export default { i18next };
