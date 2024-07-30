'use client'

import { useLanguage } from '@/features/index'
import { HeaderData } from '@/shared/data'
import { Logo, NavRoute } from '@/shared/ui'
import { Language } from '@/widgets/index'
import React, { FC } from 'react'
import styles from './header.module.scss'

export const Header: FC = () => {
	const { t, selectedLanguage } = useLanguage()

	return (
		<div className={styles.header}>
			<Logo />
			<div className={styles.nav_items}>
				{HeaderData.map(
					(data, index) =>
						data.language === selectedLanguage && (
							<React.Fragment key={index}>
								<NavRoute title={t(data.header.home)} link="/" />
								<NavRoute title={t(data.header.about)} link="/" />
								<NavRoute title={t(data.header.contact)} link="/contact" />
							</React.Fragment>
						)
				)}
			</div>
			<Language />
		</div>
	)
}
