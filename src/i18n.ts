import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import pt from './locales/pt.json';
import es from './locales/es.json';
import en from './locales/en.json';

const resources = {
    en: { translation: en },
    pt: { translation: pt },
    es: { translation: es }
};

i18n
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
        resources,
        fallbackLng: 'en',
        interpolation: {
            escapeValue: false // React já faz a sanitização
        },
        debug: true
    });

export default i18n;
