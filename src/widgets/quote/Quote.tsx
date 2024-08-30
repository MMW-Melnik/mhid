import Link from 'next/link'
import { FC, PropsWithChildren, useEffect, useState } from 'react'
import { IQuote } from './quote.interface'
import styles from './quote.module.scss'

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
			<p className={styles.quote}>
				{words.map((word, index) => (
					<span
						key={index}
						className={styles.quote_word}
						style={{ '--i': index } as React.CSSProperties}
					>
						{word}{' '}
					</span>
				))}
			</p>
			<Link href={cite} target="_blank">
				<p className={styles.quote_author}>{author}</p>
			</Link>
		</blockquote>
	)
}
