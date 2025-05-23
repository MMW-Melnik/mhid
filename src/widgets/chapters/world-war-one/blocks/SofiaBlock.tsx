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
					<RenderTextArray textArray={texts.rawChapter2SofiaText1} />
				</ContentBlock>


				<ContentBlock>
					<RenderTextArray textArray={texts.rawChapter2SofiaText2} />
				</ContentBlock>

				<ContentBlock>
					<RenderTextArray textArray={texts.rawChapter2SofiaText3} />
					<RenderTextArray textArray={texts.rawChapter2SofiaText4} />
				</ContentBlock>

				<ContentBlock>
					<RenderTextArray textArray={texts.rawChapter2SofiaText5} />
					<RenderTextArray textArray={texts.rawChapter2SofiaText6} />
				</ContentBlock>
			</div>
		</>
	)
}
