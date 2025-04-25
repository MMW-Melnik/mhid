import { worldWarTwoSofiaImages } from '@/entities/sofia/images'
import { useFormattedTexts } from '@/shared/hooks'
import { Heading, ImageWithSource, RenderTextArray } from '@/shared/ui'
import { ContentBlock } from '@/widgets/index'
import { FC, useMemo } from 'react'

export const Sofia: FC = () => {
	const t = useFormattedTexts()
	const paragraphs = useMemo(
		() =>
			Array.from({ length: 13 }, (_, i) => t[`rawCHAPTER4SofiaText${i + 1}`]),
		[t]
	)

	const { Memoir, Review, Dispatch, Anmelde, Antracg, Report, Police } =
		worldWarTwoSofiaImages

   const flow = [
    { type: 'title', text: 'SOFIA' },
    { type: 'p', id: 0 },
    { type: 'p', id: 1 },
    { type: 'p', id: 2 },
    { type: 'img', data: Memoir },
    { type: 'p', id: 3 },
    { type: 'p', id: 4 },
    { type: 'p', id: 5 },
    { type: 'img', data: Review },
    { type: 'p', id: 6 },
    { type: 'img', data: Dispatch },
    { type: 'p', id: 7 },
    { type: 'p', id: 8 },
    { type: 'img', data: Anmelde },
    { type: 'p', id: 9 },
    { type: 'img', data: Antracg },
    { type: 'p', id: 10 },
    { type: 'img', data: Report },
    { type: 'p', id: 11 },
    { type: 'img', data: Police },
    { type: 'p', id: 12 }
  ] as const

	return (
		<section>
			<ContentBlock>
				{flow.map((block, i) => {
					if (block.type === 'title')
						return (
							<Heading key={i} level={3}>
								{block.text}
							</Heading>
						)

					if (block.type === 'p')
						return <RenderTextArray key={i} textArray={paragraphs[block.id]} />

					const { alt, caption, src } = block.data
					return (
						<ImageWithSource
							key={i}
							alt={alt}
							sourceText={caption}
							sourceImage={src}
						/>
					)
				})}
			</ContentBlock>
		</section>
	)
}
