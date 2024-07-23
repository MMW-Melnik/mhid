import { footerData } from '../../data/footer.data'
import { FooterColumn } from '../footer-column/FooterColumn'
import styles from './footer.module.scss'
import React, { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'

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
					footerData.map(
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

export default Footer
