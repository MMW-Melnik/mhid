import { useFormattedTexts } from '@/shared/hooks/useTexts'
import { Heading, RenderTextArray } from '@/shared/ui'
import { ContentBlock } from '@/widgets/content-block'
import { FC } from 'react'
import styles from '../world-war-one.module.scss'
import { ImageWithSource } from '@/shared/ui'
import { charlotteWorldWar1Images } from '@/entities/index'

export const CharlotteBlock: FC = ({}) => {
	const texts = useFormattedTexts()
	const { Women, Prince } = charlotteWorldWar1Images

	return (
		<>
			<div className={styles.charlotte}>
				<ContentBlock>
					<Heading level={3}>CHARLOTTE</Heading>
					<RenderTextArray textArray={texts.rawChapter2CharlotteText1} />
					<ImageWithSource
						sourceImage={Women.src}
						imageName={Women.alt}
						sourceText={Women.caption}
						alt={Women.alt}
					/>
					<RenderTextArray textArray={texts.rawChapter2CharlotteText2} />
					<ImageWithSource
						sourceImage={Prince.src}
						imageName={Prince.alt}
						sourceText={Prince.caption}
						alt={Prince.alt}
						width={600}
						height={600}
					/>
					<RenderTextArray textArray={texts.rawChapter2CharlotteText3} />
					<RenderTextArray textArray={texts.rawChapter2CharlotteText4} />
				</ContentBlock>
			</div>
		</>
	)
}
