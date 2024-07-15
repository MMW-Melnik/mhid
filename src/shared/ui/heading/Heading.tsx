import React from 'react'
import styles from './Heading.module.scss'
import { IHeadingProps } from './heading.interface'

export const Heading: React.FC<IHeadingProps> = ({ level, children }) => {
	const HeadingTag = `h${level}` as keyof JSX.IntrinsicElements
	return (
		<HeadingTag className={`${styles.heading} ${styles[`h${level}`]}`}>
			{children}
		</HeadingTag>
	)
}
