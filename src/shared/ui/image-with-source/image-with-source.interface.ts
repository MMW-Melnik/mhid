export interface IImage {
	sourceImage: string
	imageName: string
    sourceText: string
	alt: string
	className?: string
	width?: number
	height?: number
	align?: 'left' | 'center' | 'right'
}
