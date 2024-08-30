import gsap from 'gsap'
import { FC, PropsWithChildren, useLayoutEffect, useRef } from 'react'
import styles from './paragraph.module.scss'

export const Paragraph: FC<PropsWithChildren> = ({ children }) => {
	const headingRef = useRef<HTMLHeadingElement>(null)

	useLayoutEffect(() => {
		const headingElement = headingRef.current
		if (!headingElement) return

		const tl = gsap.timeline({
			scrollTrigger: {
				trigger: headingElement,
				start: 'center 90%',
				end: 'center 20%',
				toggleActions: 'play none reverse none',
				scrub: 1
			}
		})

		tl.fromTo(
			headingElement,
			{ opacity: 0, yPercent: 0 },
			{ opacity: 1, yPercent: -10 }
		).to(headingElement, { opacity: 0, yPercent: -10 })

		return () => {
			tl.kill()
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
