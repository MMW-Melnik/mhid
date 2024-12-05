// components/FormattedText.tsx
import { FC } from 'react'
import { IFormattedText } from './formatted-text.interface'
import styles from './formatted-text.module.scss'

import { useTypography } from '@/app/context'
import { footnotesConfig } from '@/shared/config'
import { Footnote } from '../footnote/Footnote'

export const FormattedText: FC<IFormattedText> = ({ text, className }) => {
	const { formatText } = useTypography()
	const footnoteRegex = /\[\^([^\]]+)\]/g

	const paragraphs = text.split(/\n\s*\n/)

	return (
		<div className={`${styles.formatted_text} ${className}`}>
			{paragraphs.map((para, pIndex) => {
				const parts = para.split(footnoteRegex)
				return (
					<p key={pIndex} className={styles.paragraph}>
						{parts.map((part, index) => {
							if (index % 2 === 1) {
								const footnoteKey = part
								const footnoteData = footnotesConfig[footnoteKey]

								if (!footnoteData) {
									return <sup key={index}>[?]</sup>
								}

								return (
									<Footnote
										key={index}
										source={footnoteData.source}
										url={footnoteData.url}
									/>
								)
							} else {
								return (
									<span
										key={index}
										dangerouslySetInnerHTML={{ __html: formatText(part) }}
									/>
								)
							}
						})}
					</p>
				)
			})}
		</div>
	)
}
