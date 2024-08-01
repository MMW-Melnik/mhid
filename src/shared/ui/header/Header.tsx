'use client'

import { Logo, NavRoute } from '@/shared/ui'
import { Language } from '@/widgets/index'
import React, { FC, useEffect, useState } from 'react'
import styles from './header.module.scss'
import { useTranslation } from 'react-i18next'

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
			<div className={styles.nav_items}>
				<React.Fragment>
					<NavRoute title={t('home')} link="/" />
					<NavRoute title={t('about')} link="/about" />
					<NavRoute title={t('contact')} link="/contact" />
				</React.Fragment>
			</div>
			<Language />
		</div>
	)
}
