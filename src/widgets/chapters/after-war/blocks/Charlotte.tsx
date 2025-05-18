import { charlotteAfterWarImages } from '@/entities/charlotte/images'
import { useFormattedTexts } from '@/shared/hooks'
import { Heading, ImageWithSource, RenderTextArray } from '@/shared/ui'
import { ContentBlock } from '@/widgets/index'
import { FC, useMemo } from 'react'

export const Charlotte: FC = () => {
	const texts = useFormattedTexts()
	const paragraphs = useMemo(
		() =>
			Array.from({ length: 3 }, (_, i) => texts[`rawCHAPTER5CharlotteText${i + 1}`]),
		[texts]
	)

	const { Grand, Young, Monument } = charlotteAfterWarImages

	const flow = [
		{ type: 'p', id: 0 },
		{ type: 'img', data: Grand },
		{ type: 'p', id: 1 },
		{ type: 'img', data: Young },
		{ type: 'p', id: 2 },
		{ type: 'img', data: Monument }
	] as const

	return (
		<section>
			<ContentBlock>
				<Heading level={3}>CHARLOTTE</Heading>
				{flow.map((block, i) => {
					if (block.type === 'p') {
						return <RenderTextArray key={i} textArray={paragraphs[block.id]} />
					}
					const { src, alt, caption } = block.data
					return (
						<ImageWithSource
							key={i}
							sourceImage={src}
							imageName={alt}
							alt={alt}
							sourceText={caption}
						/>
					)
				})}
			</ContentBlock>
		</section>
	)
}
