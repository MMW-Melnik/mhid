import { useState } from 'react'
import { socialMediaData } from '../../shared/data/social-media.data'
import { SocialMediaCard } from '../../shared/ui'
import styles from './sm-widget.module.scss'

export const SMWidget = () => {
	const [socials] = useState(socialMediaData)

	return (
		<section className={styles.sm_widget}>
			<div className={styles.text_container}>
				<h3 className={styles.heading}>Social Media</h3>
				<span className={styles.subheading}>Tell us about yourself</span>
			</div>
			<div className={styles.sm_card_container}>
				{socials.map(social => (
					<SocialMediaCard
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
