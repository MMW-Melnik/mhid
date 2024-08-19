<<<<<<< HEAD
import { Heading } from '@/shared/ui'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'
import Image from 'next/image'
import { FC, useEffect, useRef } from 'react'
import FirstImage from '../../app/assets/images/home/familyWiskey.jpg'
=======
import React, { FC, useEffect, useRef } from 'react'
import styles from './content-block.module.scss'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'
>>>>>>> home
import { IContentBlockProps } from './content-block.interface'
import styles from './content-block.module.scss'

if (typeof window !== 'undefined') {
	gsap.registerPlugin(ScrollTrigger)
}

export const ContentBlock: FC<IContentBlockProps> = ({ children }) => {
	const contentRef = useRef<HTMLDivElement>(null)

	useEffect(() => {
		if (contentRef.current) {
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
		}
	}, [])

	return (
		<div ref={contentRef} className={styles.content_block}>
			<div className={styles.content}>{children}</div>
		</div>
	)
}
