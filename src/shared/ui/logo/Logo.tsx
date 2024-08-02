import { Heading } from '@/shared/ui'
import Link from 'next/link'
import { FC } from 'react'

export const Logo: FC = () => {
	return (
		<>
			<Link href={'/'} className={'cursor-pointer'}>
				<Heading level={4}>MHID</Heading>
			</Link>
		</>
	)
}
