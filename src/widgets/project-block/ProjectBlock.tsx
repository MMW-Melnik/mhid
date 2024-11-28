import { FormattedText, Heading } from '@/shared/ui'
import { FC } from 'react'
import { useTranslation } from 'react-i18next'

import { useTypography } from '@/app/context'
import { ContentBlock } from '../content-block'
import styles from './project-block.module.scss'

export const ProjectBlock: FC = () => {
	const { t } = useTranslation('about')
	const { formatTextArray } = useTypography()

	const rawText: string[] = t('project.text', { returnObjects: true })
	const formattedText = formatTextArray(rawText)

	return (
		<section className={styles.project_description}>
			<ContentBlock className={styles.project_description_content}>
				<Heading level={3} className={styles.project_title}>
					{t('project.title')}
				</Heading>

				{formattedText.map((item, index) => (
					<FormattedText
						key={index}
						text={item}
						className={styles.project_paragraph}
					/>
				))}
			</ContentBlock>
		</section>
	)
}
