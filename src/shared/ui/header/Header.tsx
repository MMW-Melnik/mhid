import { HeaderData } from '@/shared/data'
import { NavRoute } from '@/shared/ui'
import { Language } from '@/widgets/index'
import Image from 'next/image'
import React, { useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import styles from './header.module.scss'

export const Header = () => {
	const { t, i18n } = useTranslation()

	useEffect(() => {
		const lng = navigator.language
		i18n.changeLanguage(lng)
	}, [i18n])

	return (
		<div className={styles.header}>
			<Image
				src={'/logo.svg'}
				width={100}
				height={75}
				draggable={false}
				alt="logo"
			/>
			<div className={styles.nav_items}>
				{HeaderData.map(
					(data, index) =>
						data.language === i18n.language && (
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
