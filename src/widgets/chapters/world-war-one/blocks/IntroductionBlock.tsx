import { useFormattedTexts } from '@/shared/hooks/useTexts'
import { RenderTextArray } from '@/shared/ui'
import { ContentBlock } from '@/widgets/content-block'
import { FC } from 'react'
import styles from '../world-war-one.module.scss'

export const IntroductionBlock: FC = () => {
	const texts = useFormattedTexts()
	return (
		<>
			<div className={styles.introduction}>
				<ContentBlock>
					<RenderTextArray textArray={texts.rawChapter2IntroductionText} />
				</ContentBlock>
			</div>
		</>
	)
}
