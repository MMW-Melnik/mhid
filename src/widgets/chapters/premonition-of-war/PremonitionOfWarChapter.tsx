import { Chapter } from '@/widgets/index'
import { FC } from 'react'
import { useTranslation } from 'react-i18next'
import field from '../../../app/assets/images/home/premonition-of-war/field.jpg'
import { ChildhoodBlock } from './blocks/ChildhoodBlock'
import styles from './premonition-war-chapter.module.scss'


export const PremonitionOfWarChapter: FC = () => {
	const { t } = useTranslation('home')
	return (
		<>
			<section id='growing-up-in-belle-epoque' className={styles.poc_section}>
				<Chapter
					bgImage={field}
					imageText="Vyacheslav Mishchenko, Ukrainian photographer.  (Photo from open sources)
"
					quote={t('Growing up in the Belle Epoque.CHAPTER1.QUOTE.CONTENT')}
					author={t('Growing up in the Belle Epoque.CHAPTER1.QUOTE.AUTHOR')}
				>
					{t('Growing up in the Belle Epoque.CHAPTER1.TITLE')}
				</Chapter>
				<ChildhoodBlock />
			</section>
		</>
	)
}
