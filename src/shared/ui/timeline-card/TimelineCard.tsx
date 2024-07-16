import { FC } from 'react'
import { Heading } from '../heading/Heading'
import { ITimelineCard } from './timeline-card.interface'
import styles from './timeline-card.module.scss'

export const TimelineCard: FC<ITimelineCard> = ({ year, content }) => {
	return (
		<div className={styles.timeline_card}>
			<div className={styles.year_container}>
				<Heading level={2} className={styles.year}>
					{year}
				</Heading>
			</div>
			<div className={styles.content_container}>
				<p>{content}</p>
			</div>
		</div>
	)
}
