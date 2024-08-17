import React, { FC } from 'react'
import { IRightText } from './right-text.interface'
import styles from './right-text.module.scss'

const RightText: FC<IRightText> = ({ children }) => {
	return <p className={styles.right_text}>{children}</p>
}

export default RightText
