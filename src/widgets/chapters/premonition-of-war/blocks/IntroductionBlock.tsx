import { useFormattedTexts } from '@/shared/hooks'
import { RenderTextArray } from '@/shared/ui'
import { ContentBlock, Quote } from '@/widgets/index'
import { FC } from 'react'
import styles from '../premonition-war-chapter.module.scss'

export const IntroductionBlock: FC = ({}) => {
	const texts = useFormattedTexts()

	return (
		<>
			<div className={styles.introduction}>
				<ContentBlock>
					<RenderTextArray textArray={texts.rawChapterIntroductionText} />
				</ContentBlock>

				<Quote
					quote={texts.rawChapterIntroductionQuote[0]}
					cite=""
					author="Stefan Zweig"
				/>
			</div>
		</>
	)
}
