import { afterWarIntroductionImages } from '@/entities/general/introduction'
import { ImageWithSource } from '@/shared/ui'
import { ContentBlock } from '@/widgets/index'
import { FC } from 'react'


export const Introduction: FC = ({}) => {
	const { Kestrel } = afterWarIntroductionImages
	return (
		<section>
			<ContentBlock>
			<ImageWithSource sourceImage={Kestrel.src} alt={Kestrel.alt} sourceText={Kestrel.caption}/>
			</ContentBlock>
		</section>
	)
}
