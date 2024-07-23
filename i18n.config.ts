import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import LanguageDetector from 'i18next-browser-languagedetector'

i18n
	.use(LanguageDetector)
	.use(initReactI18next)
	.init({
		fallbackLng: 'en', // Default language
		interpolation: {
			escapeValue: false // React already safes from xss
		},
		detection: {
			// Order and from where user language should be detected
			order: [
				'querystring',
				'cookie',
				'localStorage',
				'navigator',
				'htmlTag',
				'path',
				'subdomain'
			],

			// Cache user language on
			caches: ['localStorage', 'cookie'],

			// Set the default language to English if no language is detected
			lookupQuerystring: 'lng',
			lookupCookie: 'i18next',
			lookupLocalStorage: 'i18nextLng',
			htmlTag: typeof document !== 'undefined' ? document.documentElement : null
		},
		supportedLngs: ['en', 'fr', 'de', 'ua'], // Add all supported languages here
		react: {
			useSuspense: true
		}
	})

export default i18n
