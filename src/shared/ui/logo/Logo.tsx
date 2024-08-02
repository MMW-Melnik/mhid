import { Heading } from '@/shared/ui'
import Link from 'next/link'
import { FC } from 'react'
import styles from './logo.module.scss'

export const Logo: FC = () => {
	return (
		<>
			<Link href={'/'}>
				<Heading level={4} className={styles.logo}>
					MHID
				</Heading>
			</Link>
		</>
	)
}
