import { FC } from 'react'

import { secondWorldWarIntroductionImages } from '@/entities/index'
import { useFormattedTexts } from '@/shared/hooks'
import { ImageWithSource, RenderTextArray } from '@/shared/ui'
import { ContentBlock } from '@/widgets/content-block'

export const Introduction: FC = () => {
	const { rawCHAPTER4IntroductionText: introText } = useFormattedTexts()
	const { Monument } = secondWorldWarIntroductionImages

	return (
		<section>
			<ContentBlock>
				<ImageWithSource
					sourceText={Monument.caption}
					alt={Monument.alt}
					sourceImage={Monument.src}
				/>
				<RenderTextArray textArray={introText} />
			</ContentBlock>
		</section>
	)
}
