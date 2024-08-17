import React, { FC, useEffect, useRef } from 'react'
import styles from './quoted-text.module.scss'
import { IQuotedText } from './quoted-text.interface'
import gsap from 'gsap'

export const QuotedText: FC<IQuotedText> = ({ children, author }) => {
	const textRef = useRef<HTMLParagraphElement>(null)

	useEffect(() => {
		if (textRef.current) {
			const words = textRef.current.querySelectorAll('span')
			gsap.fromTo(
				words,
				{ opacity: 0 },
				{
					opacity: 1,
					stagger: 0.1,
					duration: 0.5,
					ease: 'power1.inOut'
				}
			)
		}
	}, [])

	const words = children
		?.toString()
		.split(' ')
		.map((word, index) => (
			<span key={index} className={styles.word}>
				{word}
				{index < children.toString().split(' ').length - 1 && '\u00A0'}
			</span>
		))
	return (
		<>
			<p ref={textRef} className={styles.quotedText}>
				{words}
			</p>
			<p className={styles.author}>{author}</p>
		</>
	)
}
