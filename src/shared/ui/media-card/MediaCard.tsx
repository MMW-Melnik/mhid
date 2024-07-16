import Image from 'next/image'
import { FC } from 'react'
import { IMediaCard } from './media-card.interface'
import styles from './media-card.module.scss'

export const MediaCard: FC<IMediaCard> = ({ imagePath, imageAlt, content }) => {
	return (
		<div className={styles.media_card}>
			<div className={styles.image_container}>
				<Image
					src={imagePath}
					alt={imageAlt}
					height={406}
					width={310}
					draggable={false}
				/>
			</div>
			<div className={styles.content_container}>
				<p>{content}</p>
			</div>
		</div>
	)
}
