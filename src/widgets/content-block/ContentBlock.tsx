import React, { FC, ReactNode, useEffect } from 'react'
import { Heading } from '@/shared/ui'
import styles from './content-block.module.scss'
import Image from 'next/image'

interface ContentBlockProps {
	children: ReactNode
	heading: string
}

export const ContentBlock: FC<ContentBlockProps> = ({ heading, children }) => {
	useEffect(() => {
		const observer = new IntersectionObserver(
			entries => {
				entries.forEach(entry => {
					if (entry.isIntersecting) {
						entry.target.classList.add(styles.show)
						entry.target.classList.remove(styles.hidden)
					} else {
						entry.target.classList.remove(styles.show)
						entry.target.classList.add(styles.hidden)
					}
				})
			},
			{
				threshold: 0.01
			}
		)

		const hiddenElements = document.querySelectorAll(`.${styles.hidden}`)
		hiddenElements.forEach(el => observer.observe(el))

		return () => {
			observer.disconnect()
		}
	}, [])

	return (
		<div className={`${styles.content_block} ${styles.hidden}`}>
			<div className={styles.block_heading}>
				<Heading className={styles.heading} level={3}>
					{heading}
				</Heading>
			</div>
			<div className={styles.block_content}>
				<div className={styles.block_img}>
					<Image
						className={styles.img}
						width={300}
						height={500}
						src={'/path/to/your/image.jpg'}
						alt="Image description"
					/>
				</div>
				<div className={`${styles.content} ${styles.hidden}`}>{children}</div>
			</div>
		</div>
	)
}
