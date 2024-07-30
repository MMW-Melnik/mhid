import Link from 'next/link'
import React from 'react'
import { useTranslation } from 'react-i18next'
import styles from './footer-column.module.scss'
import { IFooterColumn } from './footer-column.interface'

export const FooterColumn: React.FC<IFooterColumn> = ({ footerData }) => {
	const { t } = useTranslation()

	return (
		<div className={styles.footer_column}>
			<span className={styles.title}>{t(footerData.title)}</span>
			<ul className={styles.item_list}>
				{Object.keys(footerData.items).map((key, index) => (
					<li className={styles.item} key={index}>
						<Link href={footerData.items[key].link}>
							{t(footerData.items[key].name)}
						</Link>
					</li>
				))}
			</ul>
		</div>
	)
}
