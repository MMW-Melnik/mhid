import { useTypography } from '@/app/context'
import { mykhailoData, yaroslavData } from '@/shared/data'
import { FormattedText, Heading } from '@/shared/ui'
import { FC } from 'react'
import { useTranslation } from 'react-i18next'
import { ContentBlock } from '../content-block'
import { DeveloperCard } from '../developer-card/DeveloperCard'
import styles from './developers-block.module.scss'

export const DevelopersBlock: FC = ({}) => {
	const { t } = useTranslation('about')
	const developers = [
		{ name: 'Yaroslav', data: yaroslavData },
		{ name: 'Mykhailo', data: mykhailoData }
	]

	const { formatTextArray } = useTypography()
	const rawText: string[] = t('developers.text', { returnObjects: true })
	const formattedText = formatTextArray(rawText)

	return (
		<>
			<section className={styles.developers}>
				<ContentBlock isAnimated={false} className={styles.developers_content}>
					<div className={styles.text_container}>
						<Heading level={3} className={styles.developers_title}>
							{t('developers.title')}
						</Heading>
						{formattedText.map((item, index) => (
							<FormattedText
								key={index}
								text={item}
								className={styles.text_container}
							/>
						))}
					</div>

					<div className={styles.developers_container}>
						{developers.map(({ name, data }) => (
							<DeveloperCard
								key={name}
								name={name}
								className={styles.developer_title}
								data={data}
							/>
						))}
					</div>
				</ContentBlock>
			</section>
		</>
	)
}
