import img1 from '@/app/assets/images/home/ww1/bomb.jpg'
import img2 from '@/app/assets/images/home/ww1/street3.jpg'
import img3 from '@/app/assets/images/home/ww1/woman.jpg'
import { Chapter } from '@/widgets/index'
import { FC } from 'react'
import { useTranslation } from 'react-i18next'
import { CharlotteBlock } from './blocks/CharlotteBlock'
import { IntroductionBlock } from './blocks/IntroductionBlock'
import { SofiaBlock } from './blocks/SofiaBlock'
import styles from './world-war-one.module.scss'

export const WorldWarOneChapter: FC = ({}) => {
	const { t } = useTranslation('home')
	return (
		<>
			<section className={styles.ww1_section}>
				<Chapter
					quote={t('WORLD WAR I.CHAPTER.QUOTE.CONTENT')}
					author={t('WORLD WAR I.CHAPTER.QUOTE.AUTHOR')}
					img1={img1.src}
					img2={img2.src}
					img3={img3.src}
				>
					{t('WORLD WAR I.CHAPTER.TITLE')}
				</Chapter>
				<IntroductionBlock />
				<CharlotteBlock />
				<SofiaBlock />
			</section>
		</>
	)
}
