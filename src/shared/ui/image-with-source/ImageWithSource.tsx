import React, { FC, useState } from 'react'
import Image from 'next/image'
import { IImage } from './image-with-source.interface'
import styles from './image-with-source.module.scss'

export const ImageWithSource: FC<IImage> = ({
	sourceImage,
	sourceText,
	alt
}) => {
	const [isActive, setIsActive] = useState(false)

	const toggleImageWrapper = () => {
		setIsActive(prevState => !prevState)
	}

	return (
		<div className={styles.wrapper}>
			<div
				className={`${styles.imageWrapper} ${isActive ? styles.active : ''}`}
			>
				<div className={styles.imageContainer}>
					<Image
						src={sourceImage}
						width={1024}
						height={1024}
						draggable={false}
						alt={alt}
						className={styles.image}
					/>
					<span className={styles.text}>{sourceText}</span>
					<div
						className={styles.imageOverlay}
						onClick={toggleImageWrapper}
					></div>
				</div>
			</div>
		</div>
	)
}

export default ImageWithSource
