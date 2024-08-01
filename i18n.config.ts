import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import LanguageDetector from 'i18next-browser-languagedetector'
import { headerData, footerData, aboutTextData } from '@/shared/data'
import { getCookie } from 'cookies-next'

i18n
	.use(LanguageDetector)
	.use(initReactI18next)
	.init({
		resources: {
			en: {
				header: headerData.en.header,
				footer: footerData.en.footer,
				about: aboutTextData.en
			},
			fr: {
				header: headerData.fr.header,
				footer: footerData.fr.footer,
				about: aboutTextData.fr
			},
			de: {
				header: headerData.de.header,
				footer: footerData.de.footer,
				about: aboutTextData.de
			},
			ua: {
				header: headerData.ua.header,
				footer: footerData.ua.footer,
				about: aboutTextData.ua
			}
		},
		lng: getCookie('i18next') || 'en',
		fallbackLng: getCookie('i18next') || 'en',
		interpolation: {
			escapeValue: false
		},
		detection: {
			order: [
				'querystring',
				'cookie',
				'localStorage',
				'navigator',
				'htmlTag',
				'path',
				'subdomain'
			],
			caches: ['cookie']
		}
	})

export default i18n
