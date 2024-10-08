'use client'

import { useLanguage } from '@/features/index'
import { languageData } from '@/shared/data'
import { LanguageButton } from '@/shared/ui'
import { FC } from 'react'
import { MdKeyboardArrowDown } from 'react-icons/md'
import styles from './language.module.scss'

export const Language: FC = () => {
	const {
		dropdownOpen,
		selectedLanguage,
		handleLanguageChange,
		toggleDropdown
	} = useLanguage()

	return (
		<div className={styles.button_container}>
			<div className={styles.button}>
				<div className={styles.arrow_button} onClick={toggleDropdown}>
					<button className={styles.button} type="button">
						<p className={styles.text}>{selectedLanguage.toUpperCase()}</p>
						<div
							className={`${styles.arrow} ${dropdownOpen ? styles.open : ''}`}
						>
							<MdKeyboardArrowDown />
						</div>
					</button>
				</div>
			</div>
			<div className={`${styles.dropdown} ${dropdownOpen ? styles.show : ''}`}>
				<div className={styles.list_container}>
					{languageData
						.filter(language => language.language !== selectedLanguage)
						.map(language => (
							<LanguageButton
								key={language.language}
								title={language.title}
								language={language.language}
								onClick={() => handleLanguageChange(language.language)}
							/>
						))}
				</div>
			</div>
		</div>
	)
}
