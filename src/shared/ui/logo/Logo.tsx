import { Heading } from '@/shared/ui'
import Link from 'next/link'
import { FC } from 'react'
import styles from './logo.module.scss'

export const Logo: FC = () => {
	return (
		<>
			<Link href={'/'}>
				<Heading level={5} className={styles.logo}>
					The Luxembourg Dream
				</Heading>
			</Link>
		</>
	)
}
