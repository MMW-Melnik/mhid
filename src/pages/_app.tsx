import { useLoading } from '@/shared/hooks'
import { Loader } from '@/shared/ui'
import { NextPage } from 'next'
import { appWithTranslation } from 'next-i18next'
import { AppProps } from 'next/app'
import { ReactElement, ReactNode, useEffect } from 'react'
import '../../i18n.config'
import { DefaultLayout } from '../app/layouts'
import '../app/styles/index.scss'

type NextPageWithLayout<P = {}> = NextPage<P> & {
	getLayout?: (page: ReactElement) => ReactNode
}

type AppPropsWithLayout = AppProps & {
	Component: NextPageWithLayout
}

function MyApp({ Component, pageProps }: AppPropsWithLayout) {
	const [isLoading, setLoading] = useLoading()

	useEffect(() => {
		if (!isLoading) {
			document.body.classList.add('loaded')
		}
	}, [isLoading])

	const getLayout =
		Component.getLayout ??
		((page: ReactElement) => <DefaultLayout>{page}</DefaultLayout>)

	return (
		<>
			{isLoading && (
				<Loader
					setLoading={
						setLoading as React.Dispatch<React.SetStateAction<boolean>>
					}
				/>
			)}
			<div className="content">
				{!isLoading && getLayout(<Component {...pageProps} />)}
			</div>
		</>
	)
}

export default appWithTranslation(MyApp)
