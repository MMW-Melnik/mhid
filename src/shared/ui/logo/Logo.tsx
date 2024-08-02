import { Heading } from '@/shared/ui'
import Link from 'next/link'
import { FC } from 'react'
import styles from './logo.module.scss'

export const Logo: FC = () => {
	return (
		<>
<<<<<<< HEAD
			<Link href={'/'} className={'cursor-pointer'}>
				<Heading level={4}>MHID</Heading>
=======
			<Link href={'/'}>
				<Heading level={4} className={styles.logo}>
					MHID
				</Heading>
>>>>>>> 1b6a12e447b30acd43419c8a8abf96b81c07c574
			</Link>
		</>
	)
}
