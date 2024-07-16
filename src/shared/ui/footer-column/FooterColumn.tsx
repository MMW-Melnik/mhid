import Link from 'next/link'
import React from 'react'
import { IFooterColumn } from './footer-column.interface'
import styles from './footer-column.module.scss'

export const FooterColumn: React.FC<IFooterColumn> = ({ footerData = [] }) => {
	return (
		<>
			{footerData.map((category, categoryIndex) => (
				<div className={styles.footer_column} key={categoryIndex}>
					<span className={styles.title}>{category.title}</span>
					<ul className={styles.item_list}>
						{category.items.map((item, itemIndex) => (
							<li className={styles.item} key={itemIndex}>
								<Link href={item.link || '/'}>{item.itemName}</Link>
							</li>
						))}
					</ul>
				</div>
			))}
		</>
	)
}
