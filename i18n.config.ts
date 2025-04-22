import {
	aboutTextData,
	footerData,
	formMessages,
	headerData,
	homeContentData
} from '@/shared/data'

import { getCookie } from 'cookies-next'
import i18n from 'i18next'
import LanguageDetector from 'i18next-browser-languagedetector'
import { initReactI18next } from 'react-i18next'

i18n
	.use(LanguageDetector)
	.use(initReactI18next)
	.init({
		resources: {
			en: {
				header: headerData.en.header,
				footer: footerData.en.footer,
				about: aboutTextData.en,
				form: formMessages.en,
				home: homeContentData.en
			},
			// fr: {
			// 	header: headerData.fr.header,
			// 	footer: footerData.fr.footer,
			// 	form: formMessages.fr,
			// 	home: homeContentData.fr
			// },
			// de: {
			// 	header: headerData.de.header,
			// 	footer: footerData.de.footer,
			// 	form: formMessages.de,
			// 	home: homeContentData.de
			// },
			ua: {
				header: headerData.ua.header,
				footer: footerData.ua.footer,
				form: formMessages.ua,
				home: homeContentData.ua
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
