import img1 from '@/app/assets/images/home/after-war/building.jpg'
import img2 from '@/app/assets/images/home/after-war/street1.jpg'
import img3 from '@/app/assets/images/home/after-war/village.jpg'
import EpilogueImage from '@/app/assets/images/home/epilogue/awaking.png'
import { useFormattedTexts } from '@/shared/hooks'
import { ImageWithSource, RenderTextArray } from '@/shared/ui'
import { ContentBlock } from '@/widgets/content-block'
import { Chapter } from '@/widgets/index'
import { useTranslation } from 'react-i18next'

const LastLife = () => {
	const { t } = useTranslation('home')
	const texts = useFormattedTexts()

	return (
		<>
			<Chapter
				bgImage={EpilogueImage.src}
				imageText="Ivan Marchuk. Awakening [Photo from open sources]"
				quote={t('EPILOGUE.QUOTE.CONTENT')}
				author={t('EPILOGUE.QUOTE.AUTHOR')}
			>
				{t('EPILOGUE.TITLE')}
			</Chapter>
			<ContentBlock>
				<RenderTextArray textArray={texts.rawChapterEpilogueText1} />
			</ContentBlock>
		</>
	)
}

export default LastLife
