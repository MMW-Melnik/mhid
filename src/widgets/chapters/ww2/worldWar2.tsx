import img1 from '@/app/assets/images/home/ww2/bebe.jpg'
import img2 from '@/app/assets/images/home/ww2/refugees.jpg'
import img3 from '@/app/assets/images/home/ww2/street2.jpg'

import { Chapter } from '@/widgets/chapter-block'
import { useTranslation } from 'react-i18next'
import { Charlotte } from './blocks/Charlotte'
import { Introduction } from './blocks/Introduction'
import { Sofia } from './blocks/Sofia'
import statue from '@/app/assets/images/home/ww2/migrants-monument.png'

export const WorldWar2 = () => {
	const { t } = useTranslation('home')

	return (
		<>
			<Chapter
				bgImage={statue}
				imageText="Monument to migrants leaving their homeland.
(Sculptor Bruno Catalano from open source)."
				quote={t('WORLD WAR TWO.CHAPTER4.QUOTE.CONTENT')}
				author={t('WORLD WAR TWO.CHAPTER4.QUOTE.AUTHOR')}
			>
				{'The second world war. Life in exile'.toUpperCase()}
			</Chapter>
			<Introduction />
			<Charlotte />
			<Sofia />
		</>
	)
}

export default WorldWar2
