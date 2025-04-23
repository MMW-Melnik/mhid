import {
	childhoodCharlotteImages,
	childhoodSofiaImages,
	generalImages
} from '@/entities/index'
import { useFormattedTexts } from '@/shared/hooks'
import {
	FormattedText,
	Heading,
	ImageWithSource,
	RenderTextArray
} from '@/shared/ui'
import { ContentBlock, Quote } from '@/widgets/index'
import { FC } from 'react'
import styles from '../premonition-war-chapter.module.scss'

export const ChildhoodBlock: FC = () => {
	const texts = useFormattedTexts()
	const { Couple, House, Rider, Sisters } = childhoodCharlotteImages
	const { Man, Home } = childhoodSofiaImages
	const { Field } = generalImages

	return (
		<div className={styles.childhood_and_youth}>
			<ContentBlock>
				{/* <Heading level={3}>Growing up in the Belle Epoque</Heading> */}

				<RenderTextArray textArray={texts.rawIntroductionText} />
				<ImageWithSource
					sourceImage={Field.src}
					sourceText={Field.caption}
					alt={Field.alt}
				/>
				<Heading level={4}>Charlotte</Heading>
				<RenderTextArray textArray={texts.rawCharlotteText1} />
				<RenderTextArray textArray={texts.rawCharlotteText2} />
				<ContentBlock>
					<ImageWithSource
						sourceImage={Couple.src}
						sourceText={Couple.caption}
						alt={Couple.alt}
						width={600}
						height={600}
					/>
				</ContentBlock>
				<RenderTextArray textArray={texts.rawCharlotteText3} />
				<ImageWithSource
					sourceImage={Sisters.src}
					sourceText={Sisters.caption}
					alt={Sisters.alt}
				/>
				<RenderTextArray textArray={texts.rawCharlotteText4} />
				<RenderTextArray textArray={texts.rawCharlotteText5} />
			</ContentBlock>

			<ContentBlock>
				<ImageWithSource
					sourceImage={House.src}
					sourceText={House.caption}
					alt={House.alt}
					width={750}
					height={750}
				/>
			</ContentBlock>

			<ContentBlock>
				<RenderTextArray textArray={texts.rawCharlotteText6} />
			</ContentBlock>

			<ContentBlock>
				<ImageWithSource
					sourceImage={Rider.src}
					sourceText={Rider.caption}
					alt={Rider.alt}
					width={500}
					height={500}
				/>
			</ContentBlock>

			<ContentBlock>
				<RenderTextArray textArray={texts.rawCharlotteText7} />
			</ContentBlock>

			{texts.rawCharlotteText8.map((item, index) => (
				<Quote
					key={index}
					quote={item}
					author="Paul Weitz. Charlotte von Luxembourg: ein Lebensbild. 1990."
					cite=""
				/>
			))}

			<ContentBlock>
				<RenderTextArray textArray={texts.rawCharlotteText9} />
			</ContentBlock>

			<div className={styles.sofia}>
				<ContentBlock>
					<Heading level={3}>SOFIA FEDAK</Heading>
					<RenderTextArray textArray={texts.rawSofiaText1} />
				</ContentBlock>

				<ContentBlock>
					<ImageWithSource
						sourceImage={Man.src}
						sourceText={Man.caption}
						alt={Man.alt}
						width={500}
						height={500}
					/>
				</ContentBlock>

				<ContentBlock>
					<RenderTextArray textArray={texts.rawSofiaText2} />
					<RenderTextArray textArray={texts.rawSofiaText3} />
				</ContentBlock>

				{texts.rawSofiaText4.map((item, index) => (
					<Quote
						key={index}
						quote={item}
						author="Olha Bezhuk. Women's stories of S. Fedak's family "
						cite=""
					/>
				))}

				<ContentBlock>
					<RenderTextArray textArray={texts.rawSofiaText5} />
					<RenderTextArray textArray={texts.rawSofiaText6} />
				</ContentBlock>

				<ContentBlock>
					<ImageWithSource
						sourceImage={Home.src}
						sourceText={Home.caption}
						alt={Home.alt}
						width={700}
						height={700}
					/>
				</ContentBlock>

				<ContentBlock>
					<RenderTextArray textArray={texts.rawSofiaText7} />
					<RenderTextArray textArray={texts.rawSofiaText8} />
					<RenderTextArray textArray={texts.rawSofiaText9} />
				</ContentBlock>
			</div>
		</div>
	)
}
