import { NextPage } from 'next'
import { AppProps } from 'next/app'
import { ReactElement, ReactNode } from 'react'
import { DefaultLayout } from '../app/layouts'
import '../../i18n.config'
import { appWithTranslation } from 'next-i18next'

type NextPageWithLayout<P = {}> = NextPage<P> & {
	getLayout?: (page: ReactElement) => ReactNode
}

type AppPropsWithLayout = AppProps & {
	Component: NextPageWithLayout
}

function MyApp({ Component, pageProps }: AppPropsWithLayout) {
	const getLayout =
		Component.getLayout ??
		((page: ReactElement) => <DefaultLayout>{page}</DefaultLayout>)

	return <>{getLayout(<Component {...pageProps} />)}</>
}

export default appWithTranslation(MyApp)
