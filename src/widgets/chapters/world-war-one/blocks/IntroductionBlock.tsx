import { useFormattedTexts } from '@/shared/hooks/useTexts'
import { RenderTextArray } from '@/shared/ui'
import { ContentBlock } from '@/widgets/content-block'
import { FC } from 'react'
import styles from '../world-war-one.module.scss'
import { generalImages } from '@/entities/index'
import { ImageWithSource } from '@/shared/ui'

export const IntroductionBlock: FC = () => {
	const texts = useFormattedTexts()
	const { Poppy } = generalImages
	return (
		<>
			<div className={styles.introduction}>
				<ContentBlock>
					<ImageWithSource
						sourceImage={Poppy.src}
						sourceText={Poppy.caption}
						alt={Poppy.alt}
					/>
					<RenderTextArray textArray={texts.rawChapter2IntroductionText} />
				</ContentBlock>
			</div>
		</>
	)
}
