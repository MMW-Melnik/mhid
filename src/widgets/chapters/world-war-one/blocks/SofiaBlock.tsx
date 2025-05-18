import { useFormattedTexts } from '@/shared/hooks/useTexts'
import { FormattedText, Heading, RenderTextArray } from '@/shared/ui'
import { ContentBlock } from '@/widgets/content-block'
import { Quote } from '@/widgets/quote/Quote'
import { FC } from 'react'
import styles from '../world-war-one.module.scss'

export const SofiaBlock: FC = () => {
	const texts = useFormattedTexts()

	return (
		<>
			<div className={styles.sofia}>
				<ContentBlock>
					<Heading level={3}>SOFIA</Heading>
					<RenderTextArray textArray={texts.rawChapter2CharlotteText1} />
				</ContentBlock>


				<ContentBlock>
					<RenderTextArray textArray={texts.rawChapter2CharlotteText2} />
				</ContentBlock>

				<ContentBlock>
					<RenderTextArray textArray={texts.rawChapter2CharlotteText3} />
					<RenderTextArray textArray={texts.rawChapter2CharlotteText4} />
				</ContentBlock>

				<ContentBlock>
					<RenderTextArray textArray={texts.rawChapter2CharlotteText5} />
					<RenderTextArray textArray={texts.rawChapter2CharlotteText6} />
				</ContentBlock>
			</div>
		</>
	)
}
