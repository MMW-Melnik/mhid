import { ButtonHTMLAttributes } from 'react'

export enum ButtonSize {
	SMALL = 'small',
	LARGE = 'large'
}

export interface IButtonProps {
	buttonText: string
	buttonSize: ButtonSize
}

type TypeButtonPropsFields = ButtonHTMLAttributes<HTMLButtonElement> & IButtonProps
export interface IButton extends TypeButtonPropsFields {}