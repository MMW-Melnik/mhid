import bgImage from '@/app/assets/images/home/bg.jpg'
import { Heading } from '@/shared/ui'
import { FC, PropsWithChildren, useLayoutEffect, useRef } from 'react'
import { useTranslation } from 'react-i18next'
import { Quote } from '../quote/Quote'
import styles from './paragraph.module.scss'

export const Paragraph: FC<PropsWithChildren> = ({ children }) => {
	const headingContainerRef = useRef<HTMLDivElement>(null)
	const image1Ref = useRef<HTMLImageElement>(null)
	const image2Ref = useRef<HTMLImageElement>(null)
	const image3Ref = useRef<HTMLImageElement>(null)
	const { t } = useTranslation('home')

	useLayoutEffect(() => {
		let ctx: gsap.Context | null = null

		;(async () => {
			const gsapModule = await import('gsap')
			const { ScrollTrigger } = await import('gsap/ScrollTrigger')

			const gsap = gsapModule.gsap || gsapModule.default
			gsap.registerPlugin(ScrollTrigger)

			const headingContainer = headingContainerRef.current
			const image1 = image1Ref.current
			const image2 = image2Ref.current
			const image3 = image3Ref.current

			if (!headingContainer || !image1 || !image2 || !image3) return

			ctx = gsap.context(() => {
				// Existing heading animation
				const tl = gsap.timeline({
					scrollTrigger: {
						trigger: headingContainer,
						start: 'top bottom',
						end: '+=2000',
						scrub: true
					}
				})

				tl.fromTo(
					headingContainer,
					{ opacity: 0, yPercent: 25 },
					{ opacity: 1, yPercent: 50, duration: 2 }
				).to(headingContainer, { opacity: 0, yPercent: 50, duration: 2 })

				gsap.to(image1, {
					yPercent: -20,
					ease: 'none',
					scrollTrigger: {
						trigger: headingContainer,
						start: 'top bottom',
						end: 'bottom top',
						scrub: true
					}
				})

				gsap.to(image2, {
					yPercent: -40,
					ease: 'none',
					scrollTrigger: {
						trigger: headingContainer,
						start: 'top bottom',
						end: 'bottom top',
						scrub: true
					}
				})

				gsap.to(image3, {
					yPercent: -60,
					ease: 'none',
					scrollTrigger: {
						trigger: headingContainer,
						start: 'top bottom',
						end: 'bottom top',
						scrub: true
					}
				})
			}, headingContainerRef)
		})()

		return () => {
			ctx && ctx.revert()
		}
	}, [])

	return (
		<section className={styles.section}>
			<div ref={headingContainerRef} className={styles.heading_container}>
				<img
					ref={image1Ref}
					className={styles.image}
					src={bgImage.src}
					alt="bg"
					draggable={false}
				/>
				<img
					ref={image2Ref}
					className={styles.imagee}
					src={bgImage.src}
					alt="bg"
					draggable={false}
					width={100}
					height={100}
				/>
				<img
					ref={image3Ref}
					className={styles.imageee}
					src={bgImage.src}
					alt="bg"
					draggable={false}
					width={100}
					height={100}
				/>
				<div className={styles.content}>
					<Heading level={2}>{children}</Heading>
					<div className={styles.quote}>
						<Quote
							quote={t('introduction.quote')}
							author="Stefan Zweig. Yesterday's World"
							cite=""
						/>
					</div>
				</div>
			</div>
			<div className={styles.nwBlock}></div>
		</section>
	)
}
