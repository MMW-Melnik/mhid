import {
	FooterNavigation,
	FooterPapers,
	FooterSocialMedia
} from '../../data/footer.data'
import FooterColumn from '../footer-column/footer-column'
import styles from './footer.module.scss'

const Footer = () => {
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

export default Footer
