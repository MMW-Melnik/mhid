import img1 from '@/app/assets/images/home/after-war/building.jpg'
import img2 from '@/app/assets/images/home/after-war/street1.jpg'
import img3 from '@/app/assets/images/home/after-war/village.jpg'

import { childhoodCharlotteImages, generalImages } from '@/entities/index'
import { useFormattedTexts } from '@/shared/hooks/useTexts'
import { Heading, ImageWithSource, RenderTextArray } from '@/shared/ui'
import { ContentBlock } from '@/widgets/content-block'
import { Chapter } from '@/widgets/index'
import { Quote } from '@/widgets/quote/Quote'
import { useTranslation } from 'react-i18next'

export const InterwarPeriod = () => {
	const { t } = useTranslation('home')
	const texts = useFormattedTexts()
	const { Spike, Map } = generalImages
	const { Princess, Wedding, Baby, Family } = childhoodCharlotteImages

	return (
		<>
			<Chapter
				quote={t('INTERWAR PERIOD.CHAPTER3.QUOTE.CONTENT')}
				author={t('INTERWAR PERIOD.CHAPTER3.QUOTE.AUTHOR')}
				img1={img1.src}
				img2={img2.src}
				img3={img3.src}
			>
				{t('INTERWAR PERIOD.CHAPTER3.TITLE')}
			</Chapter>
			<ContentBlock>
				<ImageWithSource
					sourceImage={Spike.src}
					sourceText={Spike.caption}
					alt={Spike.alt}
				/>
				<RenderTextArray textArray={texts.rawChapter3IntroductionText1} />
				<ImageWithSource
					sourceImage={Map.src}
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
					sourceText={Princess.caption}
					alt={Princess.alt}
				/>
				<RenderTextArray textArray={texts.rawChapter3CharlotteText2} />
				<ImageWithSource
					sourceImage={Wedding.src}
					sourceText={Wedding.caption}
					alt={Wedding.alt}
				/>
				<RenderTextArray textArray={texts.rawChapter3CharlotteText3} />
				<ImageWithSource
					sourceImage={Baby.src}
					sourceText={Baby.caption}
					alt={Baby.alt}
				/>
				<ImageWithSource
					sourceImage={Family.src}
					sourceText={Family.caption}
					alt={Family.alt}
				/>
				<RenderTextArray textArray={texts.rawChapter3CharlotteText4} />
				<RenderTextArray textArray={texts.rawChapter3CharlotteText5} />
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
			{texts.rawChapter3SofiaText8.map((item, index) => (
				<Quote
					key={index}
					quote={item}
					author="Zoya Baran, 'Olena Sheparovych's Memoirs as a Source for the History of Lviv in the First Third of the Twentieth Century,' Lwów: miasto - spoіeczeсstwo - kultura 9. (2014), p. 117"
					cite=""
				/>
			))}
			<ContentBlock>
				<RenderTextArray textArray={texts.rawChapter3SofiaText9} />
			</ContentBlock>

			{texts.rawChapter3SofiaText10.map((item, index) => (
				<Quote
					key={index}
					quote={item}
					author="Zoya Baran, 'Olena Sheparovych's Memoirs as a Source for the History of Lviv in the First Third of the Twentieth Century,' Lwów: miasto - spoіeczeсstwo - kultura 9. (2014), p. 117"
					cite=""
				/>
			))}
		</>
	)
}

export default InterwarPeriod
