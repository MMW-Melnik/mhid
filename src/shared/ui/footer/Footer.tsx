import { footerData } from '@/shared/data/footer/footer.data'
import { FooterColumn } from '@/shared/ui/footer-column/FooterColumn'
import React, { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { FooterData } from './footer.interface'
import styles from './footer.module.scss'

const typedFooterData: FooterData = footerData

export const Footer: React.FC = () => {
	const { i18n } = useTranslation()
	const [isLoaded, setIsLoaded] = useState(false)

	useEffect(() => {
		setIsLoaded(true)
	}, [])

	if (!isLoaded) {
		return null
	}

	const footerContent = typedFooterData[i18n.language]?.footer

	return (
		<footer className={styles.footer}>
			<div className={styles.container}>
				<div className={styles.footer_column_container}>
					{footerContent && (
						<>
							<FooterColumn footerData={footerContent.socialMedia} />
							<FooterColumn footerData={footerContent.navigation} />
							<FooterColumn footerData={footerContent.papers} />
						</>
					)}
				</div>
			</div>
		</footer>
	)
}
