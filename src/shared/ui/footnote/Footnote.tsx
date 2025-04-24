// components/footnote/Footnote.tsx
import { useFootnoteContext } from '@/app/context'
import '@/app/styles/index.scss'
import Tippy from '@tippyjs/react'
import Link from 'next/link'
import { FC, useEffect, useRef, useState } from 'react'
import styles from './footnote.module.scss'

interface FootnoteProps {
	source: string
	url?: string
}

export const Footnote: FC<FootnoteProps> = ({ source, url }) => {
	const { getFootnoteNumber } = useFootnoteContext()

	const [num, setNum] = useState<number>(-1)
	const once = useRef(false)
	const id = `${source}-${url ?? 'no-url'}`

	useEffect(() => {
		if (!once.current) {
			setNum(getFootnoteNumber(id))
			once.current = true
		}
	}, [getFootnoteNumber, id])

	/** Всплывающая подсказка */
	const tooltip = (
		<div className="px-4 py-2 bg-sand text-dark text-sm rounded-md shadow-lg max-w-[300px]">
			<strong>Source:</strong>{' '}
			{url ? (
				<Link href={url} target="_blank" rel="noopener noreferrer" className="tooltipLink">
					{source}
				</Link>
			) : (
				source
			)}
		</div>
	)

	return (
		<Tippy content={tooltip} placement="top" animation="fade" theme="custom" interactive delay={[100, 100]}>
			<span className={styles.footnoteContainer} tabIndex={0}>
				<span className={styles.footnoteNumber}>[{num >= 0 ? num : '?'}]</span>
			</span>
		</Tippy>
	)
}
