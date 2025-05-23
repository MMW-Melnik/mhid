import {
	parseSectionTitles,
	SectionTitle
} from '@/entities/navigation/sections'
import { useScrollSpy } from '@/shared/hooks'
import { FC, useEffect, useState } from 'react'
import styles from './section-switcher.module.scss'

export const SectionSwitcher: FC = () => {
	const sections: SectionTitle[] = parseSectionTitles()
	const activeId = useScrollSpy(
		sections.map(s => s.id),
		0.78
	)
	const target = sections.find(s => s.id === activeId) ?? sections[0]

	const [isOpen, setIsOpen] = useState(false)
	const toggleOpen = () => setIsOpen(v => !v)

	const handleSelect = (id: string) => {
		document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
		setIsOpen(false)
	}

	const DURATION = 300
	const [displayTitle, setDisplayTitle] = useState(target.title)
	const [animState, setAnimState] = useState<'in' | 'out' | null>(null)

	useEffect(() => {
		let outTimer: ReturnType<typeof setTimeout>
		let inTimer: ReturnType<typeof setTimeout>

		if (displayTitle !== target.title) {
			setAnimState('out')
			outTimer = setTimeout(() => {
				setDisplayTitle(target.title)
				setAnimState('in')
				inTimer = setTimeout(() => setAnimState(null), DURATION)
			}, DURATION)
		}

		return () => {
			clearTimeout(outTimer)
			clearTimeout(inTimer)
		}
	}, [target.title, displayTitle])

	return (
		<div
			className={`${styles.container} ${isOpen ? styles.open : ''}`}
			onMouseEnter={() => !isOpen && setIsOpen(true)}
			onMouseLeave={() => isOpen && setIsOpen(false)}
		>
			{!isOpen && (
				<div className={styles.label} onClick={toggleOpen}>
					<span
						className={`${styles.labelText} ${
							animState === 'out'
								? styles.fadeOut
								: animState === 'in'
									? styles.fadeIn
									: ''
						}`}
					>
						{displayTitle}
					</span>
				</div>
			)}
			{isOpen && (
				<ul className={styles.list}>
					{sections.map(sec => (
						<li
							key={sec.id}
							className={sec.id === activeId ? styles.active : ''}
							onClick={() => handleSelect(sec.id)}
						>
							{sec.title}
						</li>
					))}
				</ul>
			)}
		</div>
	)
}
