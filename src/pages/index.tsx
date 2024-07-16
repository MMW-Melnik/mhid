import { ReactElement } from 'react'
import { DefaultLayout } from '../app/layouts'

export default function Home() {
	return <></>
}

Home.getLayout = function getLayout(page: ReactElement) {
	return <DefaultLayout>{page}</DefaultLayout>
}
