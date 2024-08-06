'use client'

import Link from 'next/link'
import { FC } from 'react'
import { INavRoute } from './nav-route.interface'
import styles from './nav-route.module.scss'

export const NavRoute: FC<INavRoute> = ({
	title,
	href,
	className,
	...props
}) => {
	return (
		<Link href={href} className={styles.navigation_route} {...props}>
			<span className={`${styles.text} ${className}`}>{title}</span>
		</Link>
	)
}
