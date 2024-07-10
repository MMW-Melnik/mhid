import { ReactElement } from 'react'
import { DefaultLayout } from '../app/layouts'

export default function Home() {}

Home.getLayout = function getLayout(page: ReactElement) {
	return <DefaultLayout>{page}</DefaultLayout>
}
