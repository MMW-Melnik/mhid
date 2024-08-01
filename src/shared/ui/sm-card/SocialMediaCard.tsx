import Image from 'next/image'
import Link from 'next/link'
import { FC } from 'react'
import { ISocialMediaCard } from './sm-card.interface'
import styles from './sm-card.module.scss'

export const SocialMediaCard: FC<ISocialMediaCard> = ({
	title,
	alt,
	iconPath,
	link,
	className
}) => {
	return (
		<Link
			className={`${styles.sm_card} ${className}`}
			href={link}
			target="_blank"
		>
			<Image
				className={styles.sm_icon}
				src={iconPath}
				draggable={false}
				alt={alt}
				width={24}
				height={24}
				loading="eager"
			/>
			<span className={styles.sm_title}>{title}</span>
		</Link>
	)
}
