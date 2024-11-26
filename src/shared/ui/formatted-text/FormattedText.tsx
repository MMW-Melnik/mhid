import { FC } from 'react'
import { IFormattedText } from './formatted-text.interface'
import styles from './formatted-text.module.scss'

export const FormattedText: FC<IFormattedText> = ({ text, className }) => {
	const paragraphs = text.split('\n').filter(p => p.trim().length > 0)
	return (
		<>
			<div className={`${styles.formatted_text} ${className}`}>
				{paragraphs.map((paragraph, index) => (
					<p key={index} className={styles.paragraph}>
						{paragraph.trim()}
					</p>
				))}
			</div>
		</>
	)
}
