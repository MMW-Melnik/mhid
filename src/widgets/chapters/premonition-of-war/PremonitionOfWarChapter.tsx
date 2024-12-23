import { FC } from 'react'
import { ChildhoodBlock } from './blocks/ChildhoodBlock'
import { IntroductionBlock } from './blocks/IntroductionBlock'
import styles from './premonition-war-chapter.module.scss'

export const PremonitionOfWarChapter: FC = ({}) => {
	return (
		<>
			<section className={styles.poc_section}>
				<IntroductionBlock />
				<ChildhoodBlock />
			</section>
		</>
	)
}
