import React, { FC, ReactNode } from 'react'
import { Heading } from '@/shared/ui'
import styles from './content-block.module.scss'

export const ContentBlock: FC<{ children: ReactNode; heading: String }> = ({
	heading,
	children
}) => {
	return (
		<div className={styles.content_block}>
			<div className={styles.aside}>
				<Heading className={styles.aside_heading} level={4}>
					{heading}
				</Heading>
			</div>
			<div className={styles.content}>{children}</div>
		</div>
	)
}
