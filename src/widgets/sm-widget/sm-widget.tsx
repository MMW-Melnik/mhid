'use client'

import { socialMediaData } from '@/shared/data'
import { SocialMediaCard } from '@/shared/ui'
import styles from './sm-widget.module.scss'

export const SMWidget = () => {
	return (
		<section className={styles.sm_widget}>
			<div className={styles.sm_card_container}>
				{socialMediaData.map(social => (
					<SocialMediaCard
						key={social.title}
						title={social.title}
						alt={social.alt}
						iconPath={social.iconPath}
						link={social.link}
					/>
				))}
			</div>
		</section>
	)
}
