import { Heading } from '@/shared/ui'
import Link from 'next/link'
import { FC } from 'react'
import styles from './logo.module.scss'

export const Logo: FC = () => {
	return (
		<>
			<Link href={'/'}>
				<Heading level={6} className={styles.logo}>
					Between friendship and politics: little-known aspects <br />
					of the history of Ukrainian-Luxembourgish relations
				</Heading>
			</Link>
		</>
	)
}
