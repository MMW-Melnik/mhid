import { Heading } from '@/shared/ui'
import { FC } from 'react'
import { IChapterBlock } from '../model/chapter-block.interface'
import styles from './chapter-block.module.scss'

export const ChapterBlock: FC<IChapterBlock> = ({ title, quote }) => {
	return (
		<>
			<div className={styles.chapter_block}>
				<div className={styles.overlay}>
					<div className={styles.content}>
						<Heading level={2} className={styles.chapter_title}>
							{title}
						</Heading>
						{quote && <p className={styles.chapter_quote}>{quote}</p>}
					</div>
				</div>
			</div>
		</>
	)
}
