
import spike from '@/app/assets/images/home/INTERWAR-PERIOD/image6.jpg'
import { charlotteInterwarPeriodImages, generalImages } from '@/entities/index'
import { useFormattedTexts } from '@/shared/hooks/useTexts'
import { Heading, ImageWithSource, RenderTextArray } from '@/shared/ui'
import { ContentBlock } from '@/widgets/content-block'
import { Chapter } from '@/widgets/index'
import { useTranslation } from 'react-i18next'

export const InterwarPeriod = () => {
	const { t } = useTranslation('home')
	const texts = useFormattedTexts()
	const { Spike, Map } = generalImages
	const { Princess, Wedding, Baby, Family1 } = charlotteInterwarPeriodImages

	return (
		<>
		<section id='interwar-period'>
			<Chapter
				bgImage={spike}
				imageText="Vyacheslav Mishchenko, Ukrainian photographer. (Photo from open sources)"
				quote={t('INTERWAR PERIOD.CHAPTER3.QUOTE.CONTENT')}
				author={t('INTERWAR PERIOD.CHAPTER3.QUOTE.AUTHOR')}
				>
				{t('INTERWAR PERIOD.CHAPTER3.TITLE')}
			</Chapter>
			<ContentBlock>
				<RenderTextArray textArray={texts.rawChapter3IntroductionText1} />
				<ImageWithSource
					sourceImage={Map.src}
					imageName={Map.alt}
					sourceText={Map.caption}
					alt={Map.alt}
					/>
				<RenderTextArray textArray={texts.rawChapter3IntroductionText2} />
				<RenderTextArray textArray={texts.rawChapter3IntroductionText3} />
			</ContentBlock>

			<ContentBlock>
				<Heading level={3}>CHARLOTTE</Heading>
				<RenderTextArray textArray={texts.rawChapter3CharlotteText1} />
				<ImageWithSource
					sourceImage={Princess.src}
					imageName={Princess.alt}
					sourceText={Princess.caption}
					alt={Princess.alt}
					/>
				<RenderTextArray textArray={texts.rawChapter3CharlotteText2} />
				<RenderTextArray textArray={texts.rawChapter3CharlotteText3} />
				<ImageWithSource
					sourceImage={Wedding.src}
					imageName={Wedding.alt}
					sourceText={Wedding.caption}
					alt={Wedding.alt}
					/>
				<RenderTextArray textArray={texts.rawChapter3CharlotteText4} />
				<RenderTextArray textArray={texts.rawChapter3CharlotteText5} />
				<ImageWithSource
					sourceImage={Baby.src}
					imageName={Baby.alt}
					sourceText={Baby.caption}
					alt={Baby.alt}
					/>
				<ImageWithSource
					sourceImage={Family1.src}
					imageName={Family1.alt}
					sourceText={Family1.caption}
					alt={Family1.alt}
					/>
				<RenderTextArray textArray={texts.rawChapter3CharlotteText6} />
			</ContentBlock>

			<ContentBlock>
				<Heading level={3}>SOFIA</Heading>
				<RenderTextArray textArray={texts.rawChapter3SofiaText1} />
				<RenderTextArray textArray={texts.rawChapter3SofiaText2} />
				<RenderTextArray textArray={texts.rawChapter3SofiaText3} />
				<RenderTextArray textArray={texts.rawChapter3SofiaText4} />
				<RenderTextArray textArray={texts.rawChapter3SofiaText5} />
				<RenderTextArray textArray={texts.rawChapter3SofiaText6} />
				<RenderTextArray textArray={texts.rawChapter3SofiaText7} />
			</ContentBlock>

			<ContentBlock>
				<RenderTextArray textArray={texts.rawChapter3SofiaText8} /> 
			</ContentBlock>

			<ContentBlock>
				<RenderTextArray textArray={texts.rawChapter3SofiaText9} />
			</ContentBlock>

			<ContentBlock>
				<RenderTextArray textArray={texts.rawChapter3SofiaText10} /> 
			</ContentBlock>
					</section>
			
		</>
	)
}

export default InterwarPeriod
