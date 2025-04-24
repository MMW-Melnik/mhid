import { charlotteWorldWarTwoImages } from '@/entities/charlotte/images'
import { useFormattedTexts } from '@/shared/hooks'
import { Heading, ImageWithSource, RenderTextArray } from '@/shared/ui'
import { ContentBlock } from '@/widgets/content-block'
import { FC } from 'react'
import { useTranslation } from 'react-i18next'


export const Charlotte: FC = () => {
	const texts = useFormattedTexts()
	const {t} = useTranslation('home')
	const {Family, Grande} = charlotteWorldWarTwoImages

	return (
		<>
		<section>
			<ContentBlock>
				<Heading level={3}>Charlotte</Heading>
				<RenderTextArray textArray={texts.rawCHAPTER4CharlotteText1}/>
				<RenderTextArray textArray={texts.rawCHAPTER4CharlotteText2}/>

				<ImageWithSource sourceImage={Family.src} alt={Family.alt} sourceText={Family.caption}/>

				<RenderTextArray textArray={texts.rawCHAPTER4CharlotteText3}/>
				<RenderTextArray textArray={texts.rawCHAPTER4CharlotteText4}/>

				<ImageWithSource className={'max-h-[40vh]'} sourceImage={Grande.src} alt={Grande.alt} sourceText={Grande.caption}/>
				<RenderTextArray textArray={texts.rawCHAPTER4CharlotteText5}/>
			</ContentBlock>
		</section>
	 </>
	)
}
