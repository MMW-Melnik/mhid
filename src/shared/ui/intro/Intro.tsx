// Intro.tsx
import React, { FC } from 'react'
import Image, { StaticImageData } from 'next/image'
import styles from './intro.module.scss'

export interface IIntro {
	imageSrc: string | StaticImageData
	imageAlt?: string
	text: string
	imageText: string
}

export const Intro: FC<IIntro> = ({
	imageSrc,
	imageAlt = '',
	text,
	imageText
}) => (
	<div className={styles.imageContainer}>
		<Image
			src={imageSrc}
			alt={imageAlt}
			fill
			className={styles.Image}
			priority
		/>
		<div className={styles.overlay} />
		<h1 className={styles.mainText}>{text}</h1>
		<span className={styles.imageText}>{imageText}</span>
	</div>
)
