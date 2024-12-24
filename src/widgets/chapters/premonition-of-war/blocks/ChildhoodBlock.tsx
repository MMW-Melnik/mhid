import CrownPrinceImage from '@/app/assets/images/home/LATE NINETEENTH - EARLY TWENTIETH CENTURY. A PREMONITION OF WAR/CHARLOTTE/crown-prince-wife.jpg'
import ResidenceBergImage from '@/app/assets/images/home/LATE NINETEENTH - EARLY TWENTIETH CENTURY. A PREMONITION OF WAR/CHARLOTTE/residence-berg-palace.jpg'
import SistersImage from '@/app/assets/images/home/LATE NINETEENTH - EARLY TWENTIETH CENTURY. A PREMONITION OF WAR/CHARLOTTE/sisters-together.jpg'

import { useFormattedTexts } from '@/shared/hooks/useTexts'
import { FormattedText, Heading, RenderTextArray } from '@/shared/ui'
import ImageWithSource from '@/shared/ui/image-with-source/ImageWithSource'
import { ContentBlock } from '@/widgets/content-block'
import { Quote } from '@/widgets/quote/Quote'
import { FC } from 'react'
import styles from '../premonition-war-chapter.module.scss'

export const ChildhoodBlock: FC = () => {
	const texts = useFormattedTexts()

	return (
		<div className={styles.childhood_and_youth}>
			<ContentBlock>
				<Heading level={3}>CHILDHOOD AND YOUTH</Heading>
				<div className={styles.charlotte}>
					<Heading level={4}>CHARLOTTE LUXEMBOURG</Heading>
					<RenderTextArray textArray={texts.rawIntroductionText} />

					<ImageWithSource
						sourceImage={CrownPrinceImage.src}
						sourceText="Crown Prince Wilhelm IV of Luxembourg and his wife, Princess Maria Anna"
						alt="Crown Prince Wilhelm IV of Luxembourg and his wife, Princess Maria Anna"
					/>

					<RenderTextArray textArray={texts.rawSistersText} />
				</div>
			</ContentBlock>

			<ImageWithSource
				sourceImage={SistersImage.src}
				sourceText="Princess Charlotte (second from right) with her sisters"
				alt="Princess Charlotte (second from right) with her sisters"
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
					sourceImage={ResidenceBergImage.src}
					sourceText="Princess Charlotte's home is the Berg Palace (Colmar Berg, Luxembourg)"
					alt="Princess Charlotte's home is the Berg Palace (Colmar Berg, Luxembourg)"
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
