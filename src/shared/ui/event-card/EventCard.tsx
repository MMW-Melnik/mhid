import Image from 'next/image'
import { FC } from 'react'
import { Heading } from '../heading/Heading'
import { IEventCard } from './event-card.interface'
import styles from './event-card.module.scss'

export const EventCard: FC<IEventCard> = ({
	imageAlt,
	imagePath,
	content,
	year
}) => {
	return (
		<>
			<div className={styles.event_card}>
				<div className={styles.image_container}>
					<Image
						src={imagePath}
						alt={imageAlt}
						draggable={false}
						width={310}
						height={310}
					/>
				</div>
				<div className={styles.text_container}>
					<Heading className={styles.heading} level={3}>
						{year}
					</Heading>
					<p className={styles.content}>{content}</p>
				</div>
			</div>
		</>
	)
}
