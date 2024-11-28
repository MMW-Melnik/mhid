import 'react-i18next'

declare module 'react-i18next' {
	interface CustomTypeOptions {
		resources: {
			about: {
				project: {
					title: string
					text: string[]
				}
				author: {
					title: string
					subtitle: string
					text: string[]
				}
				developers: {
					title: string
					text: string[]
				}
			}
		}
	}
}
