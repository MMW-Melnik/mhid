import { FC, PropsWithChildren } from 'react'
import { FormattedText } from '../formatted-text/FormattedText'
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
				<FormattedText
					text={content}
					className={`${styles.text} ${contentClassName}`}
				/>
			</div>
		</div>
	)
}
