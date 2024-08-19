import Link from 'next/link'
import { FC, PropsWithChildren } from 'react'
import { IQuote } from './quote.interface'
import styles from './quote.module.scss'

export const Quote: FC<PropsWithChildren<IQuote>> = ({
	quote,
	author,
	cite
}) => {
	const words = quote.split(' ')
	return (
		<>
			<blockquote className={styles.quote_container} cite={cite}>
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
		</>
	)
}
