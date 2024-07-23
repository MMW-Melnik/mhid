import React, { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { RiArrowDropUpFill } from 'react-icons/ri'
import styles from './language.module.scss'

export const Language: React.FC = () => {
	const { t, i18n } = useTranslation()
	const [dropdownOpen, setDropdownOpen] = useState(false)
	const [selectedLanguage, setSelectedLanguage] = useState('en')

	const handleLanguageChange = (lng: string) => {
		i18n.changeLanguage(lng)
		setSelectedLanguage(lng)
		setDropdownOpen(false)
	}

	useEffect(() => {
		const lng = navigator.language
		i18n.changeLanguage(lng)
		setSelectedLanguage(lng)
		setDropdownOpen(false)
	}, [i18n])

	return (
		<div className={styles.button_container}>
			<div className={styles.button}>
				<div
					className={styles.button_arrow}
					onClick={() => setDropdownOpen(!dropdownOpen)}
				>
					<button className={styles.button} type="button">
						<p className={styles.text}>{selectedLanguage}</p>
					</button>
					<div className={`${styles.arrow} ${dropdownOpen ? styles.open : ''}`}>
						<RiArrowDropUpFill />
					</div>
					<div className={styles.button_line}></div>
				</div>
			</div>
			{dropdownOpen && (
				<div className={styles.dropdown}>
					<ul className={styles.list_container}>
						<li>
							<button
								onClick={() => handleLanguageChange('en')}
								className={styles.lan1}
							>
								en
								<div className={styles.subbutton_line1}></div>
							</button>
						</li>
						<li>
							<button
								onClick={() => handleLanguageChange('de')}
								className={styles.lan2}
							>
								de
								<div className={styles.subbutton_line2}></div>
							</button>
						</li>
					</ul>
				</div>
			)}
		</div>
	)
}
