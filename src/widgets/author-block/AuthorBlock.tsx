import AuthorImage from 'app/assets/images/about/author.jpg'
import { useTypography } from '@/app/context'
import { FormattedText, Heading } from '@/shared/ui'
import Image from 'next/image'
import { FC } from 'react'
import { useTranslation } from 'react-i18next'
import { ContentBlock } from '../content-block'
import styles from './author-block.module.scss'

export const AuthorBlock: FC = () => {
	const { t } = useTranslation('about')
	const rawText: string[] = t('author.text', { returnObjects: true })

	const { formatTextArray } = useTypography()
	const formattedText = formatTextArray(rawText)
	return (
		<>
			<section className={styles.author}>
				<div className={styles.image_container}>
					<Image
						src={AuthorImage.src}
						className={styles.image}
						height={AuthorImage.height}
						width={AuthorImage.width}
						draggable={false}
						priority
						alt="Zhanna Serdіuk"
					/>
				</div>
				<div className={styles.text_container}>
					<div className={styles.heading_container}>
						<Heading level={3} className={styles.author_title}>
							{t('author.title')}
						</Heading>
						<p className={styles.subheading}>{t('author.subtitle')}</p>
					</div>
					<ContentBlock isAnimated={false}>
						{formattedText.map((text, index) => (
							<FormattedText
								key={index}
								text={text}
								className={styles.content}
							/>
						))}
					</ContentBlock>
				</div>
			</section>
		</>
	)
}
