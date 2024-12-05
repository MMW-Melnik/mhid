import { useFootnoteContext } from '@/app/context'
import gsap from 'gsap'
import Link from 'next/link'
import { FC, useEffect, useRef, useState } from 'react'
import { IFootnote } from './footnote.interface'
import styles from './footnote.module.scss'

export const Footnote: FC<IFootnote> = ({ source, url }) => {
	const { getNextNumber } = useFootnoteContext()
	const [showTooltip, setShowTooltip] = useState(false)
	const [footnoteNumber, setFootnoteNumber] = useState<number>(-1)
	const tooltipRef = useRef<HTMLDivElement>(null)
	const hasNumber = useRef(false)

	useEffect(() => {
		if (!hasNumber.current) {
			const number = getNextNumber()
			setFootnoteNumber(number)
			hasNumber.current = true
		}
	}, [getNextNumber])

	useEffect(() => {
		if (tooltipRef.current) {
			if (showTooltip) {
				gsap.fromTo(
					tooltipRef.current,
					{ opacity: 0, y: -10 },
					{ opacity: 1, y: 0, duration: 0.3, pointerEvents: 'auto' }
				)
			} else {
				gsap.to(tooltipRef.current, {
					opacity: 0,
					y: -10,
					duration: 0.3,
					pointerEvents: 'none'
				})
			}
		}
	}, [showTooltip])

	return (
		<span
			className={styles.footnoteContainer}
			onMouseEnter={() => setShowTooltip(true)}
			onMouseLeave={() => setShowTooltip(false)}
			onFocus={() => setShowTooltip(true)}
			onBlur={() => setShowTooltip(false)}
		>
			<span
				className={styles.footnoteNumber}
				tabIndex={0}
				aria-describedby={`footnote-tooltip-${footnoteNumber}`}
			>
				[{footnoteNumber >= 0 ? footnoteNumber : '?'}]
			</span>
			{showTooltip && (
				<div
					ref={tooltipRef}
					className={styles.tooltip}
					id={`footnote-tooltip-${footnoteNumber}`}
					role="tooltip"
				>
					<Link target="_blank" href={url} className={styles.tooltipLink}>
						<strong>Source:</strong> {source}
					</Link>
				</div>
			)}
		</span>
	)
}
