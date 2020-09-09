import { initReactI18next } from 'react-i18next';
import i18n from "i18next";

import translationEN from '../assets/i18n/en.json';
import translationRU from '../assets/i18n/ru.json';

const resources = {
    en:  {translation: translationEN},
    ru:  {translation: translationRU}
};

i18n
    .use(initReactI18next)
    .init({
        resources,
        lng: "ru",

        keySeparator: false,
        compatibilityJSON: 'v1',
        interpolation: {
            escapeValue: false
        }
    });

export default i18n;