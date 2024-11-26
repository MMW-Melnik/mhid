import { partnersData } from '@/shared/data'
import { Heading, PartnerCard } from '@/shared/ui'
import { FC } from 'react'
import styles from './partners-block.module.scss'

export const PartnersBlock: FC = () => {
	return (
		<section className={styles.partners}>
			<Heading level={3}>Our Partners</Heading>
			<div className={styles.partners_list}>
				{partnersData.map((partner, index) => (
					<PartnerCard
						key={index}
						image={partner.image}
						title={partner.title}
						imageAlt={partner.ImageAlt}
						className={styles.partner_item}
					/>
				))}
			</div>
		</section>
	)
}
