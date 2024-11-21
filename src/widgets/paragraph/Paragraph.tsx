import gsap from 'gsap'
import { FC, PropsWithChildren, useLayoutEffect, useRef } from 'react'
import Image from 'next/image'
import { Quote } from '../quote/Quote'
import styles from './paragraph.module.scss'
import { useTranslation } from 'react-i18next'
import bgImage from '@/app/assets/images/home/bg.jpg'

export const Paragraph: FC<PropsWithChildren> = ({ children }) => {
	const headingContainerRef = useRef<HTMLDivElement>(null)
	const { t } = useTranslation('home')

	useLayoutEffect(() => {
		const headingContainer = headingContainerRef.current
		if (!headingContainer) return

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

		return () => {
			tl.kill()
		}
	}, [])

	return (
		<section className={styles.section}>
			<div ref={headingContainerRef} className={styles.headingContainer}>
				<Image
					className={styles.image}
					src={bgImage.src}
					alt="bg"
					draggable={false}
					width={100}
					height={100}
				/>
				<Image
					className={styles.imagee}
					src={bgImage.src}
					alt="bg"
					draggable={false}
					width={100}
					height={100}
				/>
				<Image
					className={styles.imageee}
					src={bgImage.src}
					alt="bg"
					draggable={false}
					width={100}
					height={100}
				/>
				<div className={styles.content}>
					<h1 className={styles.heading}>{children}</h1>
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
