import React from 'react'
import '../../../i18n.config'
import { useTranslation } from 'react-i18next'

const Test = () => {
	const { t, i18n } = useTranslation()
	return (
		<>
			<button onClick={() => i18n.changeLanguage('en')}>EN</button>
			<button onClick={() => i18n.changeLanguage('fr')}>FR</button>
			<div>
				<h1>{t('hello')}</h1>
			</div>
		</>
	)
}

export default Test
