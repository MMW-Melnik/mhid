import { IconType } from 'react-icons'

export interface IDeveloperCard {
	name: string
	data: Array<{
		title: string
		alt: string
		link: string
		icon: IconType
	}>
	className?: string
}
