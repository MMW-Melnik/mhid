import Image, { StaticImageData } from 'next/image'
import { FC } from 'react'
import { Heading } from '../heading/Heading'
import styles from './intro.module.scss'

import { ReactNode } from 'react'

export interface IIntro {
  imageSrc: string | StaticImageData
  imageAlt?: string
  text: string
  imageText: ReactNode 
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
		<Heading level={3} className={styles.mainText}>{text}</Heading>
<span className={styles.imageText}>{imageText}</span>
	</div>
)
