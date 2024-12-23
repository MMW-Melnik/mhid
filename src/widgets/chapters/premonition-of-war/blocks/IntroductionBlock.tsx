import { useTypography } from '@/app/context'
import { FormattedText } from '@/shared/ui'
import { ContentBlock } from '@/widgets/content-block'
import { Quote } from '@/widgets/quote/Quote'
import { FC } from 'react'
import { useTranslation } from 'react-i18next'
import styles from '../premonition-war-chapter.module.scss'

export const IntroductionBlock: FC = ({}) => {
	const { t } = useTranslation('home')
	const { formatTextArray } = useTypography()

	const rawIntroductionText: string[] = t(
		'A PREMONITION OF WAR.INTRODUCTION.CONTENT',
		{
			returnObjects: true
		}
	)

	const rawIntroductionQuote: string[] = t(
		'A PREMONITION OF WAR.INTRODUCTION.QUOTE',
		{
			returnObjects: true
		}
	)

	const formattedText = formatTextArray(rawIntroductionText)
	const formattedQuote = formatTextArray(rawIntroductionQuote)
	return (
		<>
			<div className={styles.introduction}>
				<ContentBlock>
					{formattedText.map((item, index) => (
						<FormattedText key={index} text={item} />
					))}
				</ContentBlock>

				{formattedQuote.map((item, index) => (
					<Quote key={index} quote={item} cite="" author="Stefan Zweig" />
				))}
			</div>
		</>
	)
}
