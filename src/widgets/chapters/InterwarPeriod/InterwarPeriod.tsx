import React from 'react'
import { Chapter } from '@/widgets/index'
import img1 from '@/app/assets/images/home/INTERWAR PERIOD/building.jpg'
import img2 from '@/app/assets/images/home/INTERWAR PERIOD/street1.jpg'
import img3 from '@/app/assets/images/home/INTERWAR PERIOD/village.jpg'
import { ContentBlock } from '@/widgets/content-block'
import { Heading } from '@/shared/ui'
import { useTranslation } from 'react-i18next'
import { FormattedText } from '@/shared/ui'

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
			<ContentBlock>
				<Heading level={3}>{t('chapter_3.subtitles.charlotte')}</Heading>
				<FormattedText text={t('chapter_3.text_charlotte')} />
			</ContentBlock>
			<ContentBlock>
				<Heading level={3}>{t('chapter_3.subtitles.sofia')}</Heading>
				<FormattedText text={t('chapter_3.text_sofia')} />
			</ContentBlock>
		</>
	)
}

export default InterwarPeriod
