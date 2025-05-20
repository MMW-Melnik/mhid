import EpilogueImage from '@/app/assets/images/home/epilogue/awaking.png'
import { useFormattedTexts } from '@/shared/hooks'
import { RenderTextArray } from '@/shared/ui'
import { ContentBlock } from '@/widgets/content-block'
import { Chapter } from '@/widgets/index'
import { useTranslation } from 'react-i18next'

export const LastLife = () => {
	const { t } = useTranslation('home')
	const texts = useFormattedTexts()

	return (
		<>
		<section id='epilogue'>
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
				</section>
		</>
	)
}

