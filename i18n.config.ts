import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import LanguageDetector from 'i18next-browser-languagedetector'

const resources = {
	en: {
		translation: {
			home: 'Hello',
			about: 'About',
			contact: 'Contacts'
		}
	},
	de: {
		translation: {
			home: 'ShvaineArbaiten',
			about: 'Über uns',
			contact: 'Kontakte'
		}
	}
}

i18n
	.use(LanguageDetector)
	.use(initReactI18next)
	.init({
		resources,
		fallbackLng: 'en',
		interpolation: {
			escapeValue: false
		}
	})

export default i18n