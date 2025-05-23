import { charlotteBelleEpoqueImages, sofiaBelleEpoqueImages
} from '@/entities/index'
import { useFormattedTexts } from '@/shared/hooks'
import { Heading, ImageWithSource, RenderTextArray } from '@/shared/ui'
import { ContentBlock, Quote } from '@/widgets/index'
import { FC } from 'react'
import styles from '../premonition-war-chapter.module.scss'

export const ChildhoodBlock: FC = () => {
	const texts = useFormattedTexts()
	const { Couple, Sisters, House, Rider } = charlotteBelleEpoqueImages
	const {Man, Home} = sofiaBelleEpoqueImages

	return (
		<div className={styles.childhood_and_youth}>
			<ContentBlock>
				{/* <Heading level={3}>Growing up in the Belle Epoque</Heading> */}

				<RenderTextArray textArray={texts.rawChapter1IntroductionText} />
				<Heading level={3}>CHARLOTTE</Heading>
				<RenderTextArray textArray={texts.rawChapter1CharlotteText1} />
				<RenderTextArray textArray={texts.rawChapter1CharlotteText2} />
				<ContentBlock>
					<ImageWithSource
						sourceImage={Couple.src}
						imageName={Couple.alt}
						sourceText={Couple.caption}
						alt={Couple.alt}
						width={600}
						height={600}
					/>
				</ContentBlock>
				<RenderTextArray textArray={texts.rawChapter1CharlotteText3} />
				<ImageWithSource
						sourceImage={Sisters.src}
						imageName={Sisters.alt}
						sourceText={Sisters.caption}
					alt={Sisters.alt}
				/>
				<RenderTextArray textArray={texts.rawChapter1CharlotteText4} />
				<RenderTextArray textArray={texts.rawChapter1CharlotteText5} />
			</ContentBlock>

			<ContentBlock>
				<ImageWithSource
						sourceImage={House.src}
						imageName={House.alt}
						sourceText={House.caption}
					alt={House.alt}
					width={750}
					height={750}
				/>
			</ContentBlock>

			<ContentBlock>
				<RenderTextArray textArray={texts.rawChapter1CharlotteText6} />
			</ContentBlock>

			<ContentBlock>
				<ImageWithSource
						sourceImage={Rider.src}
						imageName={Rider.alt}
						sourceText={Rider.caption}
					alt={Rider.alt}
					width={600}
					height={600}
				/>
			</ContentBlock>

			<ContentBlock>
				<RenderTextArray textArray={texts.rawChapter1CharlotteText7} />
			</ContentBlock>

			<ContentBlock>
				<RenderTextArray textArray={texts.rawChapter1CharlotteText8} />
			</ContentBlock>

			<ContentBlock>
				<RenderTextArray textArray={texts.rawChapter1CharlotteText9} />
			</ContentBlock>

			<div className={styles.sofia}>
				<ContentBlock>
					<Heading level={3}>SOFIA</Heading>
					<RenderTextArray textArray={texts.rawChapter1SofiaText1} />
				</ContentBlock>

				<ContentBlock>
					<ImageWithSource
						sourceImage={Man.src}
						imageName={Man.alt}
						sourceText={Man.caption}
						alt={Man.alt}
						width={500}
						height={500}
					/>
				</ContentBlock>

				<ContentBlock>
					<RenderTextArray textArray={texts.rawChapter1SofiaText2} />
					<RenderTextArray textArray={texts.rawChapter1SofiaText3} />
				</ContentBlock>

				<ContentBlock>
					<RenderTextArray textArray={texts.rawChapter1SofiaText4} />
				</ContentBlock>

				<ContentBlock>
					<RenderTextArray textArray={texts.rawChapter1SofiaText5} />
					<RenderTextArray textArray={texts.rawChapter1SofiaText6} />
				</ContentBlock>

				<ContentBlock>
					<ImageWithSource
						sourceImage={Home.src}
						imageName={Home.alt}
						sourceText={Home.caption}
						alt={Home.alt}
						width={700}
						height={700}
					/>
				</ContentBlock>

				<ContentBlock>
					<RenderTextArray textArray={texts.rawChapter1SofiaText7} />
					<RenderTextArray textArray={texts.rawChapter1SofiaText8} />
					<RenderTextArray textArray={texts.rawChapter1SofiaText9} />
				</ContentBlock>
			</div>
		</div>
	)
}
