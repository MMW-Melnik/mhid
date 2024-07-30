import { NextPage } from 'next'
import { AppProps } from 'next/app'
import { ReactElement, ReactNode } from 'react'
import '../../i18n.config'
<<<<<<< HEAD
import { appWithTranslation } from 'next-i18next'
=======
import { DefaultLayout } from '../app/layouts'
>>>>>>> b158164c0ee25924ea95f59f147078aa3f3ace71

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
