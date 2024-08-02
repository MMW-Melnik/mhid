'use client'

import { Meta } from '@/app/meta/Meta'
import { mykhailoData, yaroslavData, zhannaData } from '@/shared/data'
import { Heading, SocialMediaCard, TextContainer } from '@/shared/ui'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import styles from './about.module.scss'

export const AboutPage = () => {
	const { t } = useTranslation('about')

	const [isLoaded, setIsLoaded] = useState(false)

	useEffect(() => {
		setIsLoaded(true)
	}, [])

	if (!isLoaded) {
		return null
	}

	return (
		<>
			<Meta title="About" description="About us page" />
			<section className={`${styles.project_description} ${styles.section}`}>
				<TextContainer
					headingLevel={2}
					heading={t('headingTitle')}
					content={t('headingText')}
					className={styles.text_container}
					contentClassName={styles.content}
				/>
			</section>

			<section className={`${styles.author} ${styles.section}`}>
				<div className={styles.text_container}>
					<TextContainer
						headingLevel={3}
						heading={'Zhanna Serdiuk'}
						content={t('authorText')}
						className={styles.text_container}
					/>
					<div className={styles.links_container}>
						{zhannaData.map(data => (
							<SocialMediaCard
								key={data.title}
								title={data.title}
								alt={data.alt}
								className={styles.link}
								link={data.link}
								icon={data.icon}
							/>
						))}
					</div>
				</div>
				<div className={styles.image_container}>
					<Image src={''} width={580} height={400} alt="Zhanna Serdiuk" />
				</div>
			</section>

			<section className={`${styles.developers} ${styles.section}`}>
				<TextContainer
					headingLevel={3}
					heading={t('developersTitle')}
					content={t('developersText')}
					className={styles.text_container}
				/>
				<div className={styles.developers_container}>
					<div className={styles.developer_container}>
						<Heading level={4}>Yaroslav</Heading>
						<div className={styles.links}>
							{yaroslavData.map(data => (
								<SocialMediaCard
									key={data.title}
									className={styles.link}
									title={data.title}
									alt={data.alt}
									link={data.link}
									icon={data.icon}
								/>
							))}
						</div>
					</div>
					<div className={styles.developer_container}>
						<Heading level={4}>Mykhailo</Heading>
						<div className={styles.links}>
							{mykhailoData.map(data => (
								<SocialMediaCard
									key={data.title}
									title={data.title}
									alt={data.alt}
									className={styles.link}
									link={data.link}
									icon={data.icon}
								/>
							))}
						</div>
					</div>
				</div>
			</section>
		</>
	)
}
