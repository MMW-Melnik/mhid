import { Heading } from '@/shared/ui'
import { FC, PropsWithChildren, useLayoutEffect, useRef } from 'react'
import { useTranslation } from 'react-i18next'
import { Quote } from '../quote/Quote'
import { IChapter } from './chapter.interface'
import styles from './chapter.module.scss'

export const Chapter: FC<PropsWithChildren<IChapter>> = ({
	children,
	quote,
	author,
	img1,
	img2,
	img3
}) => {
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
					{ opacity: 0, yPercent: -25 },
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
		<div className={styles.chapter}>
			<div ref={headingContainerRef} className={styles.heading_container}>
				<img
					ref={image1Ref}
					className={styles.image1}
					src={img1}
					alt="bg"
					draggable={false}
				/>
				<img
					ref={image2Ref}
					className={styles.image2}
					src={img2}
					alt="bg"
					draggable={false}
				/>
				<img
					ref={image3Ref}
					className={styles.image3}
					src={img3}
					alt="bg"
					draggable={false}
				/>
				<div className={styles.content}>
					<Heading level={2} className={styles.content_heading}>
						{children}
					</Heading>
					<div className={styles.quote}>
						<Quote quote={t(quote)} author={author} cite="" />
					</div>
				</div>
			</div>
			<div className={styles.nwBlock}></div>
		</div>
	)
}
