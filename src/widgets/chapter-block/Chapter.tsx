// chapter.interface.ts
export interface IChapter {
	quote: string
	author: string
	bgImage: string | StaticImageData
	imageText: string
}

// Chapter.tsx
import { Heading } from '@/shared/ui'
import { FC, PropsWithChildren, useLayoutEffect, useRef } from 'react'
import { useTranslation } from 'react-i18next'
import Image, { StaticImageData } from 'next/image'
import { Quote } from '../quote/Quote'
import styles from './chapter.module.scss'

export const Chapter: FC<PropsWithChildren<IChapter>> = ({
	children,
	quote,
	author,
	bgImage,
	imageText
}) => {
	const headingContainerRef = useRef<HTMLDivElement>(null)
	const { t } = useTranslation('home')

	useLayoutEffect(() => {
		let ctx: gsap.Context | null = null

		;(async () => {
			const gsapModule = await import('gsap')
			const { ScrollTrigger } = await import('gsap/ScrollTrigger')

			const gsap = gsapModule.gsap || gsapModule.default
			gsap.registerPlugin(ScrollTrigger)

			const headingContainer = headingContainerRef.current

			if (!headingContainer) return

			ctx = gsap.context(() => {
				const tl = gsap.timeline({
					scrollTrigger: {
						trigger: headingContainer,
						start: 'top bottom',
						end: '+=3000',
						scrub: true
					}
				})

				tl.fromTo(
					headingContainer,
					{ opacity: 0, yPercent: -60 },
					{ opacity: 1, yPercent: -10, duration: 2 }
				).to(headingContainer, { opacity: 0, yPercent: 0, duration: 3 })
			}, headingContainerRef)
		})()

		return () => {
			ctx && ctx.revert()
		}
	}, [])

	return (
		<div className={styles.chapter}>
			<div ref={headingContainerRef} className={styles.heading_container}>
				<div className={styles.imageContainer}>
					<Image
						src={bgImage}
						alt=""
						fill
						className={styles.bgImage}
						priority
					/>
					<div className={styles.overlay} />
					<span className={styles.imageText}>{imageText}</span>
				</div>
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
