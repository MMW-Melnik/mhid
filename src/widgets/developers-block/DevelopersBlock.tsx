import { mykhailoData, yaroslavData } from '@/shared/data'
import { Heading, SocialMediaCard, TextContainer } from '@/shared/ui'
import { FC } from 'react'
import { useTranslation } from 'react-i18next'
import styles from './developers-block.module.scss'

export const DevelopersBlock: FC = ({}) => {
	const { t } = useTranslation('about')
	return (
		<>
			<section className={`${styles.developers} ${styles.section}`}>
				<TextContainer
					headingLevel={3}
					heading={t('developersTitle')}
					content={t('developersText')}
					className={styles.text_container}
				/>
				<div className={styles.developers_container}>
					<div className={styles.developer_container}>
						<Heading level={4}>Yaroslav</Heading>
						<div className={styles.links}>
							{yaroslavData.map(data => (
								<SocialMediaCard
									key={data.title}
									className={styles.link}
									title={data.title}
									alt={data.alt}
									link={data.link}
									icon={data.icon}
								/>
							))}
						</div>
					</div>
					<div className={styles.developer_container}>
						<Heading level={4}>Mykhailo</Heading>
						<div className={styles.links}>
							{mykhailoData.map(data => (
								<SocialMediaCard
									key={data.title}
									title={data.title}
									alt={data.alt}
									className={styles.link}
									link={data.link}
									icon={data.icon}
								/>
							))}
						</div>
					</div>
				</div>
			</section>
		</>
	)
}
