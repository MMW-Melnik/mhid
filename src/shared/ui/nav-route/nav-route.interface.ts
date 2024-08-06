import { LinkProps } from 'next/link'

export interface INavRoute extends LinkProps {
	title: string
	className?: string
}
