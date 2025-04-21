import img1 from '@/app/assets/images/home/INTERWAR-PERIOD/building.jpg'
import img2 from '@/app/assets/images/home/INTERWAR-PERIOD/street1.jpg'
import img3 from '@/app/assets/images/home/INTERWAR-PERIOD/village.jpg'
import { FormattedText } from '@/shared/ui'
import { ContentBlock } from '@/widgets/content-block'
import { Chapter } from '@/widgets/index'
import { useTranslation } from 'react-i18next'

const LastLife = () => {
	const { t } = useTranslation('home')

	return (
		<>
			<Chapter
				quote={t('chapter_6.quote')}
				author="Stefan Zweig"
				img1={img1.src}
				img2={img2.src}
				img3={img3.src}
			>
				{t('chapter_6.title')}
			</Chapter>
			<ContentBlock>
				<FormattedText text={t('chapter_6.text_main')} />
			</ContentBlock>
		</>
	)
}

export default LastLife
