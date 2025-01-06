import React from 'react'
import { Chapter } from '@/widgets/chapter-block'
import { useTranslation } from 'react-i18next'
import img1 from '@/app/assets/images/home/THE SECOND WORLD WAR. LIFE IN EXILE/bebe.jpg'
import img2 from '@/app/assets/images/home/THE SECOND WORLD WAR. LIFE IN EXILE/refugees.jpg'
import img3 from '@/app/assets/images/home/THE SECOND WORLD WAR. LIFE IN EXILE/street2.jpg'
import { ContentBlock } from '@/widgets/content-block'
import { FormattedText, Heading } from '@/shared/ui'

const WorldWar2 = () => {
	const { t } = useTranslation('home')

	return (
		<>
			<Chapter
				quote={t('chapter_4.quote')}
				author="Stefan Zweig."
				img1={img1.src}
				img2={img2.src}
				img3={img3.src}
			>
				The second world war. Life in exile
			</Chapter>
			<ContentBlock>
				<FormattedText text={t('chapter_4.text_main')} />
			</ContentBlock>
			<ContentBlock>
				<Heading level={3}>{t('chapter_4.subtitles.charlotte')}</Heading>
				<FormattedText text={t('chapter_4.text_charlotte')} />
			</ContentBlock>
			<ContentBlock>
				<Heading level={3}>{t('chapter_4.subtitles.sofia')}</Heading>
				<FormattedText text={t('chapter_4.text_sofia')} />
			</ContentBlock>
		</>
	)
}

export default WorldWar2
