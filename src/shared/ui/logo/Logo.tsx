import { Heading } from '@/shared/ui'
import Link from 'next/link'
import { FC } from 'react'

export const Logo: FC = () => {
	return (
		<>
			<Link href={'/'} className={'cursor-pointer'}>
				<Heading level={3}>MHID</Heading>
			</Link>
		</>
	)
}
