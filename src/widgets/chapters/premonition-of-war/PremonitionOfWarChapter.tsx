import { FormattedText } from '@/shared/ui'
import { ContentBlock } from '@/widgets/content-block'
import { Quote } from '@/widgets/index'
import { FC } from 'react'
import { useTranslation } from 'react-i18next'
import styles from './premonition-war-chapter.module.scss'

export const PremonitionOfWarChapter: FC = ({}) => {
	const { t } = useTranslation('home')

	return (
		<>
			<section className={styles.poc_section}>
				<ContentBlock>
					<FormattedText
						text={t('A PREMONITION OF WAR.INTRODUCTION.CONTENT')}
					/>
				</ContentBlock>

				<Quote
					quote={t('A PREMONITION OF WAR.INTRODUCTION.QUOTE')}
					author="Stefan Zweig"
					cite=""
				/>
			</section>
		</>
	)
}
