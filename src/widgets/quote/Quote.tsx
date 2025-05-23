import Link from 'next/link'
import { FC, PropsWithChildren, useEffect, useState } from 'react'
import { IQuote } from './quote.interface'
import styles from './quote.module.scss'
import { FormattedText } from '@/shared/ui'

export const Quote: FC<PropsWithChildren<IQuote>> = ({
	quote,
	author,
	cite
}) => {
	const [words, setWords] = useState<string[]>(quote.split(' '))
	const [animationKey, setAnimationKey] = useState(0)

	useEffect(() => {
		setWords(quote.split(' '))
		setAnimationKey(prevKey => prevKey + 1)
	}, [quote])

	return (
		<blockquote
			className={styles.quote_container}
			cite={cite}
			key={animationKey}
		>
			<FormattedText
				text={
					words
						.map(
							(word, index) =>
								`<span class="${styles.quote_word}" style="--i:${index}">${word} </span>`
						)
						.join('')
				}
			/>
			<Link href={cite} target="_blank">
				<p className={styles.quote_author}>{author}</p>
			</Link>
		</blockquote>
	)
}
