import { FC } from 'react'
import { IInput } from './input.interface'
import styles from './input.module.scss'

export const Input: FC<IInput> = ({type, placeholder, inputName, inputErrorMessage}) => {
  return(
		<div className={styles.input_container}>
			<p className={styles.fieldName}>{inputName}</p>
			<input className={styles.input} type={type} placeholder={placeholder} />
			<p className={styles.error_message}>{inputErrorMessage}</p>
		</div>
	)
}
