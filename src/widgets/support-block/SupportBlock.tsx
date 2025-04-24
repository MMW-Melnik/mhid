import SupportImage from '@/app/assets/images/about/author-support.jpg'
import { useTranslation } from 'react-i18next'
import styles from './support-block.module.scss'

import { useTypography } from '@/app/context'
import { FormattedText, Heading } from '@/shared/ui'
import Image from 'next/image'
import { FC } from 'react'
import { ContentBlock } from '../content-block'

export const SupportBlock: FC = () => {
	const { t } = useTranslation('about')
	const rawText: string[] = t('support.text', { returnObjects: true })
	const { formatTextArray } = useTypography()
	const formattedText = formatTextArray(rawText)

	return (
		<section className={styles.support}>
			<div className={styles.image_container}>
				<Image
					src={SupportImage.src}
					className={styles.image}
					height={SupportImage.height}
					width={SupportImage.width}
					draggable={false}
					priority
					alt="Sonja Kmec"
				/>
			</div>

			<div className={styles.text_container}>
				<div className={styles.heading_container}>
					<Heading level={3} className={styles.author_title}>
						{t('support.title')}
					</Heading>
					<p className={styles.subheading}>{t('support.subtitle')}</p>
				</div>
				<ContentBlock isAnimated={false}>
					{formattedText.map((text, index) => (
						<FormattedText key={index} text={text} className={styles.content} />
					))}
				</ContentBlock>
			</div>
		</section>
	)
}
