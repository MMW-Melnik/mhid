import { FooterData } from '../../data/footer.data'
import { FooterColumn } from '../footer-column/FooterColumn'
import styles from './footer.module.scss'
import React from 'react'
import { useTranslation } from 'react-i18next'

export const Footer = () => {
	const { i18n } = useTranslation()

	return (
		<footer className={styles.footer}>
			<div className={styles.footer_column_container}>
				{FooterData.map(
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
