import img1 from '@/app/assets/images/home/after-war/building.jpg'
import img2 from '@/app/assets/images/home/after-war/street1.jpg'
import img3 from '@/app/assets/images/home/after-war/village.jpg'
import { Chapter } from '@/widgets/chapter-block'
import { FC } from 'react'
import { useTranslation } from 'react-i18next'
import { Charlotte } from './blocks/Charlotte'
import { Introduction } from './blocks/Introduction'
import { Sofia } from './blocks/Sofia'


export const AfterWar: FC = ({}) => {
	const { t } = useTranslation('home')
	return (
		<>
				<Chapter
				quote={t('AFTER WAR.CHAPTER5.QUOTE.CONTENT')}
				author={t('AFTER WAR.CHAPTER5.QUOTE.AUTHOR')}
				img1={img1.src}
				img2={img2.src}
				img3={img3.src}
			>
				{t('AFTER WAR.CHAPTER5.TITLE')}
			</Chapter>
		<Introduction />
		<Charlotte />
		<Sofia />
	 </>
	)
}
