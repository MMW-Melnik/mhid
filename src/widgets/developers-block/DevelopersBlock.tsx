import { mykhailoData, yaroslavData } from '@/shared/data'
import { TextContainer } from '@/shared/ui'
import { FC } from 'react'
import { useTranslation } from 'react-i18next'
import { DeveloperCard } from '../developer-card/DeveloperCard'
import styles from './developers-block.module.scss'

export const DevelopersBlock: FC = ({}) => {
	const { t } = useTranslation('about')
	const developers = [
		{ name: 'Yaroslav', data: yaroslavData },
		{ name: 'Mykhailo', data: mykhailoData }
	]

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
					{developers.map(({ name, data }) => (
						<DeveloperCard key={name} name={name} data={data} />
					))}
				</div>
			</section>
		</>
	)
}
