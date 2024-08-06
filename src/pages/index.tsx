import { Meta } from '@/app/meta'
import { ReactElement } from 'react'
import { HomeLayout } from '../app/layouts'
import { HomePage } from '../views'

export default function Home() {
	return (
		<>
			<Meta title="Home" description="Home page of MHID Project">
				<HomePage />
			</Meta>
		</>
	)
}

Home.getLayout = function getLayout(page: ReactElement) {
	return (
		<>
			<HomeLayout>{page}</HomeLayout>
		</>
	)
}
