import React, { FC } from 'react'
import { INavRoute } from './nav-route.interface'
import styles from './nav-route.module.scss'
import Link from 'next/link'

export const NavRoute: FC<INavRoute> = ({ title, link }) => {
	return (
		<Link key={link} href={link} className={styles.button_container}>
			<p className={styles.text}>{title}</p>
			<div className={styles.line}></div>
		</Link>
	)
}
