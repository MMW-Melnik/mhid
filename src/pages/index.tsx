import { Meta } from '@/app/meta/Meta'
import { ReactElement } from 'react'
import { HomeLayout } from '../app/layouts'

export default function Home() {
	return (
		<>
			<Meta title="Home" description="Home page of MHID Project" />
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
