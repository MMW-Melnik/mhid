import poppy from '@/app/assets/images/home/ww1/image32.jpg'
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
			<section id='world-war-i' className={styles.ww1_section}>
				<Chapter
					bgImage={poppy}
					imageText="Vyacheslav Mishchenko, Ukrainian photographer.  (Photo from open sources)"
					quote={t('WORLD WAR I.CHAPTER2.QUOTE.CONTENT')}
					author={t('WORLD WAR I.CHAPTER2.QUOTE.AUTHOR')}
				>
					{t('WORLD WAR I.CHAPTER2.TITLE')}
				</Chapter>
				<IntroductionBlock />
				<CharlotteBlock />
				<SofiaBlock />
			</section>
		</>
	)
}
