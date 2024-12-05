// components/Footnote.tsx
import { useFootnoteContext } from '@/app/context'
import '@/app/styles/index.scss'
import Tippy from '@tippyjs/react'
import Link from 'next/link'
import { FC, useEffect, useRef, useState } from 'react'
import { IFootnote } from './footnote.interface'
import styles from './footnote.module.scss'

export const Footnote: FC<IFootnote> = ({ source, url }) => {
	const { getNextNumber } = useFootnoteContext()
	const [footnoteNumber, setFootnoteNumber] = useState<number>(-1)
	const hasNumber = useRef(false)

	useEffect(() => {
		if (!hasNumber.current) {
			const number = getNextNumber()
			setFootnoteNumber(number)
			hasNumber.current = true
		}
	}, [getNextNumber])

	const tooltipContent = (
		<div className="px-4 py-2 bg-sand text-dark text-sm rounded-md shadow-lg">
			<Link target="_blank" href={url} className="tooltipLink">
				<strong>Source:</strong> {source}
			</Link>
		</div>
	)

	return (
		<Tippy
			content={tooltipContent}
			placement="top"
			animation="fade"
			theme="custom"
			interactive={true}
			delay={[100, 100]}
			appendTo={() => document.body}
			maxWidth="200px"
		>
			<span
				className={styles.footnoteContainer}
				tabIndex={0}
				aria-describedby={`footnote-tooltip-${footnoteNumber}`}
			>
				<span className={styles.footnoteNumber}>
					[{footnoteNumber >= 0 ? footnoteNumber : '?'}]
				</span>
			</span>
		</Tippy>
	)
}
