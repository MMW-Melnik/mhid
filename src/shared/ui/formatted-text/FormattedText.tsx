import { FC } from 'react'
import { IFormattedText } from './formatted-text.interfaece'
import styles from './formatted-text.module.scss'

export const FormattedText: FC<IFormattedText> = ({ text, className }) => {
	const paragraph = text.split('\n')
	return (
		<>
			<div className={`${styles.formatted_text} ${className}`}>
				{paragraph.map((paragraph, index) => (
					<p key={index} className={styles.paragraph}>
						{paragraph.trim()}
					</p>
				))}
			</div>
		</>
	)
}
