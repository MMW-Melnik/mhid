import img1 from '@/app/assets/images/home/after-war/building.jpg'
import img2 from '@/app/assets/images/home/after-war/street1.jpg'
import img3 from '@/app/assets/images/home/after-war/village.jpg'
import EpilogueImage from '@/app/assets/images/home/epilogue/awaking.png'
import { useFormattedTexts } from '@/shared/hooks'
import { ImageWithSource, RenderTextArray } from '@/shared/ui'
import { ContentBlock } from '@/widgets/content-block'
import { Chapter } from '@/widgets/index'
import { useTranslation } from 'react-i18next'

export const LastLife = () => {
	const { t } = useTranslation('home')
	const texts = useFormattedTexts()

	return (
		<>
			<Chapter
				quote={t('EPILOGUE.QUOTE.CONTENT')}
				author={t('EPILOGUE.QUOTE.AUTHOR')}
				img1={img1.src}
				img2={img2.src}
				img3={img3.src}
			>
				{t('EPILOGUE.TITLE')}
			</Chapter>
			<ContentBlock>
				<ImageWithSource sourceImage={EpilogueImage.src} alt='Ivan Marchuk. Awakening Image' sourceText='Ivan Marchuk. Awakening [Photo from open sources]'/>
				<RenderTextArray textArray={texts.rawChapterEpilogueText1}/>
			</ContentBlock>
		</>
	)
}

