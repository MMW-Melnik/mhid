import { socialMediaData } from '@/shared/data'
import { SocialMediaCard } from '@/shared/ui'
import styles from './sm-widget.module.scss'

export const SMWidget = () => {
	return (
		<section className={styles.social_media}>
			<div className={styles.sm_card_container}>
				{socialMediaData.map(social => (
					<SocialMediaCard
						key={social.title}
						title={social.title}
						alt={social.alt}
						icon={social.icon}
						className={styles.link}
						link={social.link}
					/>
				))}
			</div>
		</section>
	)
}
