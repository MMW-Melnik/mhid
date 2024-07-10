import { InputHTMLAttributes } from 'react'


export interface IInputProps {
  inputName: string
	inputErrorMessage?: string	
}

type TypeInputPropsFields = InputHTMLAttributes<HTMLInputElement>  & IInputProps
export interface IInput extends TypeInputPropsFields {}