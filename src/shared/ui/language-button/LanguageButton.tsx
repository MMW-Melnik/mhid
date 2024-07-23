import React, { FC } from 'react'
import { useTranslation } from 'react-i18next'
import { ILanguageBtn } from './language-button.interface'
import styles from './language-button.module.scss'

export const LanguageButton: FC<ILanguageBtn> = ({
	title,
	language,
	onClick
}) => {
	const { i18n } = useTranslation()

	const handleLanguageChange = (language: string): void => {
		i18n.changeLanguage(language)
		onClick(language)
	}

	return (
		<button
			onClick={() => handleLanguageChange(language)}
			className={styles.language}
		>
			{title}
		</button>
	)
}
