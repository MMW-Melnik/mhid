import React, { FC, useState } from 'react'
import Image from 'next/image'
import { IImage } from './image-with-source.interface'
import styles from './image-with-source.module.scss'
import Tilt from 'react-parallax-tilt'
import Lenis from 'lenis'
import 'lenis/dist/lenis.css'

export const ImageWithSource: FC<IImage> = ({
	sourceImage,
	sourceText,
	alt
}) => {
	const [isZoomed, setIsZoomed] = useState(false)
	// const lenis = new Lenis()

	const handleZoom = () => {
		setIsZoomed(true)
	}

	const handleClose = () => {
		setIsZoomed(false)
	}

	// if (isZoomed) {
	// 	document.body.style.overflow = 'hidden'
	// 	document.body.style.paddingRight = '17px'
	// 	lenis.stop()
	// } else {
	// 	document.body.style.overflow = ''
	// 	document.body.style.paddingRight = ''
	// 	lenis.start()
	// }

	return (
		<>
			<div className={styles.image_with_source}>
				<Image
					src={sourceImage}
					width={1024}
					height={1024}
					draggable={false}
					alt={alt}
					className={styles.image}
					onClick={handleZoom}
				/>
				<span className={styles.text}>{sourceText}</span>
			</div>

			{isZoomed && (
				<div className={styles.overlay} onClick={handleClose}>
					<Tilt
						className={styles.image_with_source_zoomed}
						tiltReverse={false}
						tiltMaxAngleX={15}
						tiltMaxAngleY={15}
						perspective={3000}
						scale={1.1}
						transitionSpeed={1000}
						gyroscope={true}
						glareEnable={false}
					>
						<Image
							src={sourceImage}
							width={1024}
							height={1024}
							draggable={false}
							alt={alt}
							className={styles.image_zoomed}
						/>
						<span className={styles.text}>{sourceText}</span>
					</Tilt>
				</div>
			)}
		</>
	)
}
