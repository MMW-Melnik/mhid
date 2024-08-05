'use client'

import { Logo, NavRoute } from '@/shared/ui'
import { Language, MobileMenu } from '@/widgets/index'
import { FC, useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import styles from './header.module.scss'

export const Header: FC = () => {
	const { t } = useTranslation('header')
	const [isLoaded, setIsLoaded] = useState(false)

	useEffect(() => {
		setIsLoaded(true)
	}, [])

	if (!isLoaded) {
		return null
	}

	return (
		<div className={styles.header}>
			<Logo />
			<nav className={styles.nav_items}>
				<NavRoute title={t('home')} href="/" />
				<NavRoute title={t('about')} href="/about" />
				<NavRoute title={t('contact')} href="/contact" />
			</nav>
			<Language />
			<MobileMenu />
		</div>
	)
}
