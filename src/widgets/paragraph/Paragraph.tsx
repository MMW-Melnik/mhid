import React, { FC, useEffect, useRef } from 'react'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/dist/ScrollTrigger'
import styles from './paragraph.module.scss'

const Paragraph: FC<{ children: React.ReactNode }> = ({ children }) => {
	const headingRef = useRef<HTMLHeadingElement>(null)
	useEffect(() => {
		if (!headingRef.current) return

		const headingElement = headingRef.current
		let tl = gsap.timeline({
			scrollTrigger: {
				trigger: headingElement,
				start: 'center 90%',
				end: 'center 20%',
				markers: true,
				toggleActions: 'play none reverse none',
				scrub: 1
			}
		})
		tl.fromTo(
			headingElement,
			{ opacity: 0, yPercent: 0 },
			{ opacity: 1, yPercent: -10 }
		)
		tl.to(headingElement, { opacity: 0, yPercent: -10 })
	})
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
