import i18n from 'i18next'
import LanguageDetector from 'i18next-browser-languagedetector'
import Backend from 'i18next-http-backend'
import { initReactI18next } from 'react-i18next'

i18n
    .use(Backend)
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
        ns: ['common'],
        backend: {
            loadPath: '/locales/{{lng}}/{{ns}}.json',
            crossDomain: false
        },
        fallbackLng: ['tr', 'en'],
        supportedLngs: ['tr', 'en'],
        debug: false,
        react: {
            useSuspense: true
        },
        interpolation: {
            escapeValue: false,
            formatSeparator: ','
        }
    })

export default i18n 