import Image from 'next/image'
import { FC } from 'react'
import Tilt from 'react-parallax-tilt'
import { IImage } from './image-with-source.interface'
import styles from './image-with-source.module.scss'

export const ImageWithSource: FC<IImage> = ({
	sourceImage,
	imageName,
	sourceText,
	className,
	alt,
	width,
	height
}) => {
	return (
		<Tilt
			className={styles.image_with_source}
			style={width ? { width } : undefined}
			tiltReverse={false}
			tiltMaxAngleX={15}
			tiltMaxAngleY={15}
			perspective={3000}
			scale={1.02}
			transitionSpeed={1000}
			gyroscope={true}
			glareEnable={false}
		>
			<Image
				src={sourceImage}
				width={width ?? 1024}
				height={height ?? 1024}
				draggable={false}
				alt={alt}
				className={`${styles.image} ${className}`}
			/>
			<div className={styles.meta}>
				<span className={styles.name}>{imageName}</span>
				<span className={styles.source}>{sourceText}</span>
			</div>
		</Tilt>
	)
}