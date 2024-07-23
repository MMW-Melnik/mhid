import { FooterData } from '@/shared/data'
import { FooterColumn } from '@/shared/ui'
import React, { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import styles from './footer.module.scss'

export const Footer = () => {
	const { i18n } = useTranslation()
	const [isMounted, setIsMounted] = useState(false)

	useEffect(() => {
		setIsMounted(true)
	}, [])

	return (
		<footer className={styles.footer}>
			<div className={styles.footer_column_container}>
				{isMounted &&
					FooterData.map(
						(data, index) =>
							data.language === i18n.language && (
								<React.Fragment key={index}>
									<FooterColumn footerData={data.footer.socialMedia} />
									<FooterColumn footerData={data.footer.navigation} />
									<FooterColumn footerData={data.footer.papers} />
								</React.Fragment>
							)
					)}
			</div>
		</footer>
	)
}
