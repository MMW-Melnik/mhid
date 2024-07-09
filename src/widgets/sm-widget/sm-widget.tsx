import { useState } from 'react'
import { socialMediaData } from '../../shared/const/social-media.data'
import { SocialMediaCard } from '../../shared/ui'
import styles from './sm-widget.module.scss'

export const SMWidget = () => {
	const [socials, setSocials] = useState(socialMediaData)

	return (
		<div>
			<div className={styles.text_container}>
				<h1>Social Media</h1>
				<p>Tell us about yourself</p>
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
		</div>
	)
}
