import { PageTransitionProvider } from '@/app/providers'
import { useLoading } from '@/shared/hooks'
import { Loader } from '@/shared/ui'
import { motion, useMotionValue, useSpring } from 'framer-motion'
import gsap from 'gsap'
import Lenis from 'lenis'
import { NextPage } from 'next'
import { AppProps } from 'next/app'
import { ReactElement, ReactNode, useEffect, useState } from 'react'

import '../../i18n.config'
import { DefaultLayout } from '../app/layouts'
import styles from './_app.module.scss'

type NextPageWithLayout<P = {}> = NextPage<P> & {
	getLayout?: (page: ReactElement) => ReactNode
}

type AppPropsWithLayout = AppProps & {
	Component: NextPageWithLayout
}

function MyApp({ Component, pageProps }: AppPropsWithLayout) {
	const [isLoading, setLoading] = useLoading()
	const [isInitialLoading, setIsInitialLoading] = useState(true)
	const scrollYProgress = useMotionValue(0)
	const scaleX = useSpring(scrollYProgress, {
		stiffness: 100,
		damping: 30,
		restDelta: 0.001
	})

	const initialProgress = useMotionValue(0)
	const initialScaleX = useSpring(initialProgress, {
		stiffness: 100,
		damping: 30,
		restDelta: 0.001
	})

	useEffect(() => {
		if (isInitialLoading) {
			gsap.to(initialProgress, {
				duration: 3,
				value: 1,
				ease: 'linear',
				onComplete: () => {
					setIsInitialLoading(false)
				}
			})
		}
	}, [isInitialLoading, initialProgress])

	useEffect(() => {
		const lenis = new Lenis()

		lenis.on(
			'scroll',
			({ scroll, limit }: { scroll: number; limit: number }) => {
				const progress = scroll / limit
				scrollYProgress.set(progress)
			}
		)

		function raf(time: number) {
			lenis.raf(time)
			requestAnimationFrame(raf)
		}

		requestAnimationFrame(raf)

		return () => {
			lenis.destroy()
		}
	}, [scrollYProgress])

	useEffect(() => {
		if (!isLoading) {
			document.body.classList.add('loaded')
		}
	}, [isLoading])

	const getLayout =
		Component.getLayout ??
		((page: ReactElement) => (
			<DefaultLayout>
				<PageTransitionProvider>{page}</PageTransitionProvider>
			</DefaultLayout>
		))

	return (
		<>
			{isLoading && (
				<Loader
					setLoading={
						setLoading as React.Dispatch<React.SetStateAction<boolean>>
					}
				/>
			)}
			{/* Use the appropriate scaleX based on the loading state */}
			<motion.div
				className={styles.progress_bar}
				style={{ scaleX: isInitialLoading ? initialScaleX : scaleX }}
			/>
			<div className="content">
				{!isLoading && getLayout(<Component {...pageProps} />)}
			</div>
		</>
	)
}

export default MyApp
