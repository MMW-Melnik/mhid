import React, { FC, useEffect, useRef } from 'react'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/dist/ScrollTrigger'
import styles from './paragraph.module.scss'

gsap.registerPlugin(ScrollTrigger)

const Paragraph: FC<{ children: React.ReactNode }> = ({ children }) => {
	const headingRef = useRef<HTMLHeadingElement>(null)

	useEffect(() => {
		if (!headingRef.current) return

		const tl = gsap.timeline({
			scrollTrigger: {
				trigger: headingRef.current,
				start: 'top 10%',
				end: '+=700px',
				pin: headingRef.current,
				toggleActions: 'play none reverse none',
				scrub: 2
			}
		})

		tl.fromTo(
			headingRef.current,
			{ opacity: 0, yPercent: -10 },
			{ opacity: 1, yPercent: 0, duration: 1 }
		).to(headingRef.current, { opacity: 0, yPercent: -10, duration: 1 })

		return () => {
			if (ScrollTrigger.getAll().length > 0) {
				ScrollTrigger.getAll().forEach(trigger => trigger.kill())
			}
		}
	}, [])

	return (
		<section className={styles.section}>
			<div className={styles.content}>
				<h1 ref={headingRef} className={styles.heading}>
					{children}
				</h1>
			</div>
		</section>
	)
}

export default Paragraph
