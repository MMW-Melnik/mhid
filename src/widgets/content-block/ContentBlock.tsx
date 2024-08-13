import React, { FC, ReactNode, useEffect, useRef } from 'react'
import { Heading } from '@/shared/ui'
import styles from './content-block.module.scss'
import Image from 'next/image'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'

if (typeof window !== 'undefined') {
	gsap.registerPlugin(ScrollTrigger)
}

interface ContentBlockProps {
	children: ReactNode
	heading: string
}

export const ContentBlock: FC<ContentBlockProps> = ({ heading, children }) => {
	const blockRef = useRef<HTMLDivElement | null>(null)
	const headingRef = useRef<HTMLDivElement | null>(null)
	const imgRef = useRef<HTMLDivElement | null>(null)
	const contentRef = useRef<HTMLDivElement | null>(null)

	useEffect(() => {
		if (
			!blockRef.current ||
			!headingRef.current ||
			!imgRef.current ||
			!contentRef.current
		)
			return

		gsap.fromTo(
			[headingRef.current, imgRef.current],
			{ opacity: 0, x: -100 },
			{
				opacity: 1,
				x: 0,
				duration: 3,
				ease: 'power4.out',
				scrollTrigger: {
					trigger: blockRef.current,
					start: 'top 80%',
					end: 'bottom 20%',
					toggleActions: 'play none none reverse'
				}
			}
		)

		gsap.fromTo(
			contentRef.current,
			{ opacity: 0, x: 100 },
			{
				opacity: 1,
				x: 0,
				duration: 3,
				ease: 'power4.out',
				scrollTrigger: {
					trigger: blockRef.current,
					start: 'top 80%',
					end: 'bottom 20%',
					toggleActions: 'play none none reverse'
				}
			}
		)
	}, [])

	return (
		<div ref={blockRef} className={styles.content_block}>
			<div ref={headingRef} className={styles.block_heading}>
				<Heading className={styles.heading} level={3}>
					{heading}
				</Heading>
			</div>
			<div className={styles.block_content}>
				<div ref={imgRef} className={styles.block_img}>
					<Image
						className={styles.img}
						width={300}
						height={500}
						src={'/path/to/your/image.jpg'}
						alt="Image description"
					/>
				</div>
				<div ref={contentRef} className={styles.content}>
					{children}
				</div>
			</div>
		</div>
	)
}
