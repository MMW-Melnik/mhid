import { useFormattedTexts } from '@/shared/hooks/useTexts'
import { Heading, RenderTextArray } from '@/shared/ui'
import { ContentBlock } from '@/widgets/content-block'
import { FC } from 'react'
import styles from '../world-war-one.module.scss'

export const CharlotteBlock: FC = ({}) => {
	const texts = useFormattedTexts()

	return (
		<>
			<div className={styles.charlotte}>
				<ContentBlock>
					<Heading level={3}>CHARLOTTE LUXEMBOURG</Heading>
					<RenderTextArray textArray={texts.rawWW1CharlotteText} />
				</ContentBlock>
			</div>
		</>
	)
}
