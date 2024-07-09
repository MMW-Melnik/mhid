import React from 'react'
import FooterColumn from '../footer-column/footer-column'
import { FooterSocialMedia } from '../../const/footer.data'
import { FooterNavigation } from '../../const/footer.data'
import { FooterPapers } from '../../const/footer.data'
import styles from './footer.module.scss'

const Footer = () => {
	return (
		<footer className={styles.footer}>
			<div className={styles.footer_column_container}>
				<FooterColumn footerData={FooterSocialMedia} />
				<FooterColumn footerData={FooterNavigation} />
				<FooterColumn footerData={FooterPapers} />
			</div>
			<div className={styles.footer_block}>
				<p>
					All right reserved
					<br />
					Created by MDHD Team
				</p>
			</div>
		</footer>
	)
}

export default Footer
