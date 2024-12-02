import React, { FC, PropsWithChildren } from 'react'
import Image from 'next/image'
import { IIntro } from './intro.interface'
import styles from './intro.module.scss'

export const Intro: FC<IIntro> = ({ imageText, text }) => {
	return (
		<div className={styles.image_with_source}>
			<h1 className={styles.main_text}>{text}</h1>
			<span className={styles.image_text}>{imageText}</span>
		</div>
	)
}
