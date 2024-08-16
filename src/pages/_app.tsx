<<<<<<< HEAD
'use client'

import { DefaultLayout } from '@/app/layouts'
import '@/app/styles/index.scss'
import { useLoading } from '@/shared/hooks'
import { Loader } from '@/shared/ui'
import Lenis from 'lenis'
import 'lenis/dist/lenis.css'
=======
import { useLoading } from '@/shared/hooks'
import { Loader } from '@/shared/ui'
>>>>>>> home
import { NextPage } from 'next'
import { AppProps } from 'next/app'
import { ReactElement, ReactNode, useEffect } from 'react'
import '../../i18n.config'
<<<<<<< HEAD
=======
import { DefaultLayout } from '../app/layouts'
import Lenis from 'lenis'
import 'lenis/dist/lenis.css'
>>>>>>> home

type NextPageWithLayout<P = {}> = NextPage<P> & {
	getLayout?: (page: ReactElement) => ReactNode
}

type AppPropsWithLayout = AppProps & {
	Component: NextPageWithLayout
}

function MyApp({ Component, pageProps }: AppPropsWithLayout) {
	const [isLoading, setLoading] = useLoading()

	useEffect(() => {
		const lenis = new Lenis()

		function raf(time: any) {
			lenis.raf(time)
			requestAnimationFrame(raf)
		}

		requestAnimationFrame(raf)
		if (!isLoading) {
			document.body.classList.add('loaded')
		}
	})

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

export default MyApp
