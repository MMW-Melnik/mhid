import React, { useEffect } from 'react'
import { NavRoute } from '../nav-route/nav-route'
import Image from 'next/image'
import styles from './header.module.scss'
import { useTranslation } from 'react-i18next'

export const Header = () => {
	const { t, i18n } = useTranslation()

	useEffect(() => {
		const lng = navigator.language
		i18n.changeLanguage(lng)
	}, [])

	const lng = navigator.language

	return (
		<div className={styles.header}>
			<Image
				src={'/logo.svg'} // Ensure the correct path to the logo
				width={100}
				height={100}
				draggable={false}
				alt="logo"
			/>
			<div className={styles.nav_items}>
				<NavRoute link="/" title={t('Hello')} />
				<NavRoute link="/" title={t('About')} />
				<NavRoute link="/" title={t('Contacts')} />
			</div>
		</div>
	)
}
