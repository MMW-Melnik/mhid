import gsap from 'gsap'
import { useRouter } from 'next/router'
import { createContext, FC, PropsWithChildren, useEffect, useRef } from 'react'

const PageTransitionContext = createContext(null)
export const PageTransitionProvider: FC<PropsWithChildren> = ({ children }) => {
	const router = useRouter()
	const pageRef = useRef<HTMLDivElement | null>(null)
	const MIN_DELAY = 500

	useEffect(() => {
		const handleRouteChangeStart = async () => {
			if (!pageRef.current) return
			await Promise.all([
				new Promise(resolve => {
					gsap.to(pageRef.current, {
						opacity: 0,
						duration: 0.5,
						onComplete: resolve
					})
				}),
				new Promise(resolve => setTimeout(resolve, MIN_DELAY))
			])
		}

		const handleRouteChangeComplete = () => {
			if (!pageRef.current) return
			gsap.fromTo(
				pageRef.current,
				{ opacity: 0 },
				{ opacity: 1, duration: 0.5 }
			)
		}

		router.events.on('routeChangeStart', handleRouteChangeStart)
		router.events.on('routeChangeComplete', handleRouteChangeComplete)

		return () => {
			router.events.off('routeChangeStart', handleRouteChangeStart)
			router.events.off('routeChangeComplete', handleRouteChangeComplete)
		}
	}, [router])

	return (
		<>
			<PageTransitionContext.Provider value={null}>
				<div ref={pageRef} style={{ opacity: 1 }}>
					{children}
				</div>
			</PageTransitionContext.Provider>
		</>
	)
}
