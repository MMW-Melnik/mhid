import { Heading, SocialMediaCard } from '@/shared/ui'
import { FC } from 'react'
import { IDeveloperCard } from './developer-card.interface'
import styles from './developer-card.module.scss'

export const DeveloperCard: FC<IDeveloperCard> = ({ name, data }) => {
	return (
		<div className={styles.developer_container}>
			<Heading level={4}>{name}</Heading>
			<div className={styles.links}>
				{data.map(item => (
					<SocialMediaCard key={item.title} className={styles.link} {...item} />
				))}
			</div>
		</div>
	)
}
