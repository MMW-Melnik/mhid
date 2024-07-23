import React, { FC } from 'react'
import styles from './language.module.scss'
import { MdKeyboardArrowDown } from 'react-icons/md'
import { useLanguage } from '../../features'
import { LanguageButton } from '../../shared/ui/language-button/LanguageButton'
import { languageData } from '../../shared/data'

const Language: FC = () => {
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
				<ul className={styles.list_container}>
					{languageData.map(language => (
						<LanguageButton
							key={language.title}
							title={language.title}
							language={language.language}
							onClick={handleLanguageChange}
						/>
					))}
				</ul>
			</div>
		</div>
	)
}

export default Language
