import { Chapter } from '@/widgets/index'
import { FC } from 'react'
import { useTranslation } from 'react-i18next'
import { ChildhoodBlock } from './blocks/ChildhoodBlock'
import { IntroductionBlock } from './blocks/IntroductionBlock'
import styles from './premonition-war-chapter.module.scss'

import cityImg from '@/app/assets/images/home/premonition-of-war/other/city.jpg'
import familyImg from '@/app/assets/images/home/premonition-of-war/other/family.jpg'
import hillImg from '@/app/assets/images/home/premonition-of-war/other/hill.jpg'

export const PremonitionOfWarChapter: FC = () => {
	const { t } = useTranslation('home')
	return (
		<>
			<section className={styles.poc_section}>
				<Chapter
					img1={cityImg.src}
					img2={familyImg.src}
					img3={hillImg.src}
					quote={t('A PREMONITION OF WAR.CHAPTER.QUOTE.CONTENT')}
					author={t('A PREMONITION OF WAR.CHAPTER.QUOTE.AUTHOR')}
				>
					{t('A PREMONITION OF WAR.CHAPTER.TITLE')}
				</Chapter>
				<IntroductionBlock />
				<ChildhoodBlock />
			</section>
		</>
	)
}
