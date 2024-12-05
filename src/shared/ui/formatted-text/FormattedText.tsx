import { FC } from 'react'
import { IFormattedText } from './formatted-text.interface'
import styles from './formatted-text.module.scss'

import { useTypography } from '@/app/context'
import { footnotesConfig } from '@/shared/config'
import { Footnote } from '../footnote/Footnote'

export const FormattedText: FC<IFormattedText> = ({ text, className }) => {
	const { formatText } = useTypography()
	const footnoteRegex = /\[\^([^\]]+)\]/g

	const parts = text.split(footnoteRegex)

	return (
		<div className={`${styles.formatted_text} ${className}`}>
			{parts.map((part, index) => {
				if (index % 2 === 1) {
					const footnoteKey = part
					const footnoteData = footnotesConfig[footnoteKey]

					if (!footnoteData) {
						return <span key={index}>[?]</span>
					}

					return (
						<Footnote
							key={index}
							source={footnoteData.source}
							url={footnoteData.url}
						/>
					)
				} else {
					const formattedText = formatText(part)
					return (
						<p
							key={index}
							className={styles.paragraph}
							dangerouslySetInnerHTML={{ __html: formattedText }}
						/>
					)
				}
			})}
		</div>
	)
}
