import {
	FooterNavigation,
	FooterPapers,
	FooterSocialMedia
} from '../../data/footer.data'
import { FooterColumn } from '../footer-column/FooterColumn'
import styles from './footer.module.scss'

export const Footer = () => {
	return (
		<footer className={styles.footer}>
			<div className={styles.footer_column_container}>
				<FooterColumn footerData={FooterSocialMedia} />
				<FooterColumn footerData={FooterNavigation} />
				<FooterColumn footerData={FooterPapers} />
			</div>
		</footer>
	)
}
