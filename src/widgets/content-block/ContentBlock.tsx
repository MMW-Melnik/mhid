import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'
import { FC, PropsWithChildren, useEffect, useRef } from 'react'
import { IContentBlock } from './content-block.interface'
import styles from './content-block.module.scss'

if (typeof window !== 'undefined') {
	gsap.registerPlugin(ScrollTrigger)
}

export const ContentBlock: FC<PropsWithChildren<IContentBlock>> = ({
	children,
	className,
	isAnimated = true
}) => {
	const contentRef = useRef<HTMLDivElement>(null)

	useEffect(() => {
		if (isAnimated && contentRef.current) {
			gsap.fromTo(
				contentRef.current,
				{
					opacity: 0
				},
				{
					opacity: 1,
					duration: 1.5,
					scrollTrigger: {
						trigger: contentRef.current,
						start: 'top 80%',
						end: 'bottom 20%',
						toggleActions: 'play none none none'
					}
				}
			)
		} else if (contentRef.current) {
			gsap.set(contentRef.current, { opacity: 1 })
		}
	}, [isAnimated])

	return (
		<div ref={contentRef} className={styles.content_block}>
			<div className={`${styles.content} ${className}`}>{children}</div>
		</div>
	)
}
