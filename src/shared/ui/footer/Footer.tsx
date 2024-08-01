import React, { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { FooterColumn } from '@/shared/ui/footer-column/FooterColumn'
import styles from './footer.module.scss'
import { footerData } from '@/shared/data'
import { FooterData } from './footer.interface'

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
			<div className={styles.footer_column_container}>
				{footerContent && (
					<>
						<FooterColumn footerData={footerContent.socialMedia} />
						<FooterColumn footerData={footerContent.navigation} />
						<FooterColumn footerData={footerContent.papers} />
					</>
				)}
			</div>
		</footer>
	)
}
