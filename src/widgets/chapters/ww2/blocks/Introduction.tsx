import { FC } from 'react'

import { useFormattedTexts } from '@/shared/hooks'
import { RenderTextArray } from '@/shared/ui'
import { ContentBlock } from '@/widgets/content-block'

export const Introduction: FC = () => {
	const { rawCHAPTER4IntroductionText: introText } = useFormattedTexts()

	return (
		<section>
			<ContentBlock>
				<RenderTextArray textArray={introText} />
			</ContentBlock>
		</section>
	)
}
