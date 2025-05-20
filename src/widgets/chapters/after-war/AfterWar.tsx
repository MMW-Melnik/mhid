import { afterWarIntroductionImages } from '@/entities/general/introduction'
import { Chapter } from '@/widgets/chapter-block'
import { FC } from 'react'
import { useTranslation } from 'react-i18next'
import { Charlotte } from './blocks/Charlotte'
import { Sofia } from './blocks/Sofia'

export const AfterWar: FC = ({}) => {
	const { t } = useTranslation('home')
	const { Kestrel } = afterWarIntroductionImages
	return (
		<>
		<section id='after-1945-contsinuing-to-care'>
			<Chapter
				bgImage={Kestrel.src}
				imageText={Kestrel.caption}
				quote={t('AFTER WAR.CHAPTER5.QUOTE.CONTENT')}
				author={t('AFTER WAR.CHAPTER5.QUOTE.AUTHOR')}
				>
				{t('AFTER WAR.CHAPTER5.TITLE')}
			</Chapter>
			<Charlotte />
			<Sofia />
				</section>
		</>
	)
}
