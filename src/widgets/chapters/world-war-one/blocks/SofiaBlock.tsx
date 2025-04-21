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
					<Heading level={3}>SOFIA FEDAK</Heading>
					<RenderTextArray
						textArray={texts.rawWW1SofiaGaliciaBattlefieldText}
					/>

					<RenderTextArray textArray={texts.rawWW1SofiaSistersEducationText} />
					<RenderTextArray textArray={texts.rawWW1SofiaSpecialOlgaText} />
					<RenderTextArray textArray={texts.rawWW1SofiaPrimarySoloText} />

					<FormattedText text={texts.rawWW1SofiaStepanFedakText[0]} />
				</ContentBlock>

				<Quote
					quote={texts.rawWW1SofiaQuotes[0]}
					author="Olena Kuzmovych. This and That. A Collection of Stories and Essays. New York. 2000. P. 23"
					cite=""
				/>

				<ContentBlock>
					<RenderTextArray
						textArray={texts.rawWW1SofiaStepanFedakText.slice(1)}
					/>
					<RenderTextArray
						textArray={texts.rawWW1SofiaLegionAndriyText.slice(0, 1)}
					/>
				</ContentBlock>

				<Quote
					quote={texts.rawWW1SofiaQuotes[1]}
					author="Andriy Melnyk. 1890-1964. Memoirs. Documents. Correspondence / Compiled by O. Kucheruk, Y. Cherchenko. Kyiv: Olena Teliha Publishing House, 2011. С. 48"
					cite=""
				/>

				<ContentBlock>
					<RenderTextArray
						textArray={texts.rawWW1SofiaLegionAndriyText.slice(2)}
					/>
					<RenderTextArray textArray={texts.rawWW1SofiaNovemberUprisingText} />
				</ContentBlock>
			</div>
		</>
	)
}
