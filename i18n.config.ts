import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'

i18n.use(initReactI18next).init({
	fallbackLng: 'en',
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
		caches: ['cookie'],
		lookupQuerystring: 'lng',
		lookupCookie: 'i18next',
		lookupLocalStorage: 'i18nextLng',
		htmlTag: typeof document !== 'undefined' ? document.documentElement : null,
		cookieOptions: {
			path: '/',
			sameSite: 'strict'
		}
	},
	supportedLngs: ['en', 'fr', 'de', 'ua'],
	react: {
		useSuspense: true
	},
	lng: ''
})

export default i18n
