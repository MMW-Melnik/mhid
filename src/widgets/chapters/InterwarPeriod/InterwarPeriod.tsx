import img1 from '@/app/assets/images/home/INTERWAR-PERIOD/building.jpg'
import {
	default as img2,
	default as img3
} from '@/app/assets/images/home/INTERWAR-PERIOD/street1.jpg'

import { FormattedText, Heading } from '@/shared/ui'
import ImageWithSource from '@/shared/ui/image-with-source/ImageWithSource'
import { ContentBlock } from '@/widgets/content-block'
import { Chapter } from '@/widgets/index'
import { useTranslation } from 'react-i18next'

const InterwarPeriod = () => {
	const { t } = useTranslation('home')

	return (
		<>
			<Chapter
				quote={t('chapter_3.quote')}
				author="William Faulkner"
				img1={img1.src}
				img2={img2.src}
				img3={img3.src}
			>
				{t('chapter_3.title')}
			</Chapter>
			<ContentBlock>
				<FormattedText text={t('chapter_3.text_main')} />
			</ContentBlock>
			<Heading level={3}>{t('chapter_3.subtitles.charlotte')}</Heading>
			<ContentBlock>
				<FormattedText text={t('chapter_3.text_charlotte')} />
			</ContentBlock>
			<Heading level={3}>{t('chapter_3.subtitles.sofia')}</Heading>
			<ContentBlock>
				<FormattedText text={t('chapter_3.text_sofia')} />
			</ContentBlock>
			<ImageWithSource
				sourceImage={img1.src}
				sourceText="helloekfs fdwef wefwefwe"
				alt="hi"
			/>
		</>
	)
}

export default InterwarPeriod
