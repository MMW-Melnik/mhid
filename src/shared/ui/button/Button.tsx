import { FC } from 'react'
import { ButtonSize, IButton } from './button.interface'
import styles from './button.module.scss'

export const Button: FC<IButton> = ({buttonText, buttonSize, type,className, onClick, ...rest}) => {

	const buttonSizeClass = buttonSize == ButtonSize.SMALL ? `${styles.small}` : `${styles.large}`

	return (
		<button className={`${styles.button} ${buttonSizeClass}`} type={type} onClick={onClick} {...rest}>
		<span>{buttonText}</span>
		</button>
	)
}
