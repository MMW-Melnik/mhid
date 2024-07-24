import { HeaderData } from '@/shared/data'
import { NavRoute } from '@/shared/ui'
import Image from 'next/image'
import React, { FC } from 'react'
import styles from './header.module.scss'
import { Language } from '@/widgets/index'
import { useLanguage } from '@/features/index'

export const Header: FC = () => {
	const { t, selectedLanguage } = useLanguage()

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
