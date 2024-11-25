import { FC, PropsWithChildren } from 'react'
import { Heading } from '../heading/Heading'
import { ITextContainer } from './text-container.interface'
import styles from './text-container.module.scss'

export const TextContainer: FC<PropsWithChildren<ITextContainer>> = ({
	heading,
	headingLevel,
	content,
	className,
	contentClassName
}) => {
	return (
		<div className={`${styles.text_container} ${className}`}>
			<div className={styles.heading_container}>
				<Heading level={headingLevel}>{heading}</Heading>
			</div>
			<p className={`${styles.text} ${contentClassName}`}>{content}</p>
		</div>
	)
}
