import React, { FC } from 'react'
import { IParagraph } from './paragraph.interface'
import styles from './paragraph.module.scss'

const Paragraph: FC<IParagraph> = ({ children }) => {
	return <div className={styles.content}>{children}</div>
}

export default Paragraph
