import { Heading } from '@/shared/ui'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'
import Image from 'next/image'
import { FC, useEffect, useRef } from 'react'
import FirstImage from '../../app/assets/images/home/familyWiskey.jpg'
import { IContentBlockProps } from './content-block.interface'
import styles from './content-block.module.scss'

if (typeof window !== 'undefined') {
	gsap.registerPlugin(ScrollTrigger)
}

export const ContentBlock: FC<IContentBlockProps> = ({
	heading,
	text1,
	text2,
	image,
	alt,
	p
}) => {
	const blockRef = useRef<HTMLDivElement | null>(null)
	const headingRef = useRef<HTMLDivElement | null>(null)
	const imgRef = useRef<HTMLDivElement | null>(null)
	const contentRef1 = useRef<HTMLDivElement | null>(null)
	const contentRef2 = useRef<HTMLDivElement | null>(null)

	useEffect(() => {
		if (
			!blockRef.current ||
			!headingRef.current ||
			!imgRef.current ||
			!contentRef1.current ||
			!contentRef2.current
		)
			return

		gsap.fromTo(
			[headingRef.current, imgRef.current],
			{ opacity: 0, x: -100 },
			{
				opacity: 1,
				x: 0,
				duration: 2.5,
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
			[contentRef1.current, contentRef2.current],
			{ opacity: 0, x: 100 },
			{
				opacity: 1,
				x: 0,
				duration: 2.5,
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
		<div ref={blockRef} className={styles.block_content}>
			<div ref={headingRef} className={styles.heading_block}>
				<Heading className={styles.heading} level={3}>
					{heading}
				</Heading>
			</div>
			<div ref={contentRef1} className={styles.content}>
				{text1}
			</div>
			<div ref={imgRef} className={styles.img_block}>
				<Image
					className={styles.img}
					width={780}
					height={400}
					src={FirstImage.src}
					alt={alt}
				/>
				<p className={styles.img_text}>{p}</p>
			</div>
			<div ref={contentRef2} className={styles.content}>
				{text2}
			</div>
		</div>
	)
}
