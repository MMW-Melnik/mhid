import { childhoodCharlotteImages } from '@/entities/index'
import { useFormattedTexts } from '@/shared/hooks'
import { FormattedText, Heading, ImageWithSource, RenderTextArray } from '@/shared/ui'
import { ContentBlock, Quote } from '@/widgets/index'
import { FC } from 'react'
import styles from '../premonition-war-chapter.module.scss'

export const ChildhoodBlock: FC = () => {
	const texts = useFormattedTexts()
	const { crownPrince, sisters, residence } = childhoodCharlotteImages

	return (
		<div className={styles.childhood_and_youth}>
			<ContentBlock>
				<Heading level={3}>CHILDHOOD AND YOUTH</Heading>
				<div className={styles.charlotte}>
					<Heading level={4}>CHARLOTTE LUXEMBOURG</Heading>
					<RenderTextArray textArray={texts.rawIntroductionText} />

					<ImageWithSource
						sourceImage={crownPrince.src}
						sourceText={crownPrince.caption}
						alt={crownPrince.alt}
					/>

					<RenderTextArray textArray={texts.rawSistersText} />
				</div>
			</ContentBlock>

			<ImageWithSource
				sourceImage={sisters.src}
				sourceText={sisters.caption}
				alt={sisters.alt}
			/>

			<ContentBlock>
				<RenderTextArray textArray={texts.rawInheritanceText} />
				<RenderTextArray textArray={texts.rawDifficultiesText} />
				<RenderTextArray textArray={texts.rawSpeculationText} />
				<FormattedText text={texts.rawActivityText[0]} />
			</ContentBlock>

			{texts.rawActivityQuote.map((item, index) => (
				<Quote
					key={index}
					quote={item}
					author="Paul Weitz. Charlotte von Luxembourg: ein Lebensbild. 1990."
					cite=""
				/>
			))}

			<ContentBlock>
				{texts.rawActivityText.slice(1).map((item, index) => (
					<FormattedText key={index} text={item} />
				))}
				<ImageWithSource
					sourceImage={residence.src}
					sourceText={residence.caption}
					alt={residence.alt}
				/>
			</ContentBlock>

			<div className={styles.sofia}>
				<ContentBlock>
					<Heading level={3}>SOFIA FEDAK</Heading>
					<RenderTextArray textArray={texts.rawChildhoodText} />
					<FormattedText text={texts.rawMovementText[0]} />
				</ContentBlock>

				{texts.rawMovementQuote.map((item, index) => (
					<Quote
						key={index}
						quote={item}
						cite=""
						author="З. Baran. Participation of Stepan Fedak's family in the Ukrainian national liberation movement // Lviv University Bulletin. Historical Series. 2017. Issue 53. С. 214."
					/>
				))}

				<ContentBlock>
					<RenderTextArray textArray={texts.rawMovementText.slice(1)} />
					<RenderTextArray textArray={texts.rawMarriageText} />
				</ContentBlock>

				{texts.rawMarriageQuote.map((item, index) => (
					<Quote
						key={index}
						quote={item}
						author="Olha Bezhuk. Women's stories of S. Fedak's family // Scientific Bulletin of the Lviv National University of Veterinary Medicine and Biotechnology named after SZ Gzycki. Vol. 17, No. 4 (64), 2015. С. 368"
						cite=""
					/>
				))}

				<ContentBlock>
					<RenderTextArray textArray={texts.rawEqualityText} />
					<RenderTextArray textArray={texts.rawTensionsText} />
				</ContentBlock>
			</div>
		</div>
	)
}
