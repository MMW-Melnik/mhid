import { ReactElement } from 'react'
import { HomeLayout } from '../app/layouts'

export default function Home() {}

Home.getLayout = function getLayout(page: ReactElement) {
	return <HomeLayout>{page}</HomeLayout>
}
