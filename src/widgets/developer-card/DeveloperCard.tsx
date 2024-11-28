import { Heading, SocialMediaCard } from '@/shared/ui'
import { FC } from 'react'
import { IDeveloperCard } from './developer-card.interface'
import styles from './developer-card.module.scss'

export const DeveloperCard: FC<IDeveloperCard> = ({
	name,
	data,
	className
}) => {
	return (
		<div className={styles.developer_container}>
			<Heading level={4} className={className}>
				{name}
			</Heading>
			<div className={styles.links}>
				{data.map(item => (
					<SocialMediaCard key={item.title} {...item} />
				))}
			</div>
		</div>
	)
}
