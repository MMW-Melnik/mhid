import Image from 'next/image'
import { FC } from 'react'
import Tilt from 'react-parallax-tilt'
import { IImage } from './image-with-source.interface'
import styles from './image-with-source.module.scss'

export const ImageWithSource: FC<IImage> = ({
	sourceImage,
	sourceText,
	className,
	alt
}) => {
	return (
		<Tilt
			className={styles.image_with_source}
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
				width={1024}
				height={1024}
				draggable={false}
				alt={alt}
				className={`${styles.image} ${className}`}
			/>
			<span className={styles.text}>{sourceText}</span>
		</Tilt>
	)
}

export default ImageWithSource
