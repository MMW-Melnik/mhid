import Image from 'next/image'
import { FC } from 'react'
import { IPartnerCard } from './partner-card.interface'
import styles from './partner-card.module.scss'

export const PartnerCard: FC<IPartnerCard> = ({
	title,
	image,
	imageAlt,
	className
}) => {
	return (
		<>
			<div className={`${styles.partner_card} ${className}`}>
				<Image
					className={styles.partner_logo}
					src={image}
					alt={imageAlt}
					width={200}
					priority
					height={38}
					draggable={false}
				/>
			</div>
		</>
	)
}
