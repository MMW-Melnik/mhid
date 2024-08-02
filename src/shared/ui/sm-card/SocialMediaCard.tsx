import Link from 'next/link'
import { FC } from 'react'
import { ISocialMediaCard } from './sm-card.interface'
import styles from './sm-card.module.scss'

export const SocialMediaCard: FC<ISocialMediaCard> = ({
	title,
	alt,
	icon: Icon,
	link,
	className
}) => {
	return (
		<Link
			className={`${styles.sm_card} ${className}`}
			href={link}
			target="_blank"
		>
			<span className={styles.sm_icon} aria-label={alt}>
				<Icon size={28} />
			</span>
			<span className={styles.sm_title}>{title}</span>
		</Link>
	)
}
