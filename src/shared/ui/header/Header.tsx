import { HeaderData } from '@/shared/data'
import { Language, NavRoute } from '@/shared/ui'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import styles from './header.module.scss'

export const Header = () => {
	const { t, i18n } = useTranslation()
	const [isMounted, setIsMounted] = useState(false)

	useEffect(() => {
		const lng = navigator.language
		i18n.changeLanguage(lng)
		setIsMounted(true)
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
				{isMounted &&
					HeaderData.map(
						(data, index) =>
							data.language === i18n.language && (
								<React.Fragment key={index}>
									<NavRoute title={t(data.header.home)} link="/" />
									<NavRoute title={t(data.header.about)} link="/" />
									<NavRoute title={t(data.header.contact)} link="/" />
								</React.Fragment>
							)
					)}
			</div>
			<Language />
		</div>
	)
}
