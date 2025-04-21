import { Chapter } from '@/widgets/index'
import { FC } from 'react'
import { useTranslation } from 'react-i18next'
import { ChildhoodBlock } from './blocks/ChildhoodBlock'
import { IntroductionBlock } from './blocks/IntroductionBlock'
import styles from './premonition-war-chapter.module.scss'

import img1 from '@/app/assets/images/home/LATE NINETEENTH - EARLY TWENTIETH CENTURY. A PREMONITION OF WAR/city.jpg'
import img2 from '@/app/assets/images/home/LATE NINETEENTH - EARLY TWENTIETH CENTURY. A PREMONITION OF WAR/family.jpg'
import img3 from '@/app/assets/images/home/LATE NINETEENTH - EARLY TWENTIETH CENTURY. A PREMONITION OF WAR/hill.jpg'

export const PremonitionOfWarChapter: FC = () => {
	const { t } = useTranslation('home')
	return (
		<>
			<section className={styles.poc_section}>
				<Chapter
					img1={img1.src}
					img2={img2.src}
					img3={img3.src}
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
