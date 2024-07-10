import { TextareaHTMLAttributes } from 'react'

export interface ITextAreaProps {
	textAreaName: string
	textAreaErrorMessage?: string	
}

type TypeTextAreaPropsFields = TextareaHTMLAttributes<HTMLTextAreaElement> & ITextAreaProps

export interface ITextArea extends TypeTextAreaPropsFields {}