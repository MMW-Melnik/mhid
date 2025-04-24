import img1 from '@/app/assets/images/home/ww2/bebe.jpg'
import img2 from '@/app/assets/images/home/ww2/refugees.jpg'
import img3 from '@/app/assets/images/home/ww2/street2.jpg'

import { Chapter } from '@/widgets/chapter-block'
import { useTranslation } from 'react-i18next'
import { Charlotte } from './blocks/Charlotte'
import { Introduction } from './blocks/Introduction'
import { Sofia } from './blocks/Sofia'

export const WorldWar2 = () => {
	const { t } = useTranslation('home')

	return (
		<>
			<Chapter
				quote={t('WORLD WAR TWO.CHAPTER4.QUOTE.CONTENT')}
				author={t('WORLD WAR TWO.CHAPTER4.QUOTE.AUTHOR')}
				img1={img1.src}
				img2={img2.src}
				img3={img3.src}
			>
				{"The second world war. Life in exile".toUpperCase()}
			</Chapter>
			<Introduction />
			<Charlotte />
			<Sofia />
		</>
	)
}

export default WorldWar2
