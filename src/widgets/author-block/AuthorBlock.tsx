import AuthorImage from '@/app/assets/images/about/author.jpeg'
import { FormattedText, Heading } from '@/shared/ui'
import Image from 'next/image'
import { FC } from 'react'
import { useTranslation } from 'react-i18next'
import { ContentBlock } from '../content-block'
import styles from './author-block.module.scss'

export const AuthorBlock: FC = ({}) => {
	const { t } = useTranslation('about')
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
						alt=""
					/>
				</div>
				<div className={styles.text_container}>
					<div className={styles.heading_container}>
						<Heading level={3} className={styles.author_title}>
							{t('authorTitle')}
						</Heading>
						<p className={styles.subheading}>{t('authorSubheading')}</p>
					</div>
					<ContentBlock isAnimated={false}>
						<FormattedText text={t('authorText')} />
					</ContentBlock>
				</div>
			</section>
		</>
	)
}
