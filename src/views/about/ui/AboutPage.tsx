import { Heading } from '@/shared/ui'
import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import styles from './aboutpage.module.scss'
import { zhannaData, yaroslavData, mykhailoData } from '@/shared/data'
import { SocialMediaCard } from '@/shared/ui'
import { useTranslation } from 'react-i18next'

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
			<section className={`${styles.project_description} ${styles.section}`}>
				<Heading level={2}>{t('headingTitle')}</Heading>
				<p className={styles.text}>{t('headingText')}</p>
			</section>
			<section className={`${styles.author} ${styles.section}`}>
				<div className={styles.text_container}>
					<div>
						<Heading level={3}>Zhanna Serdiuk</Heading>
						<p className={styles.text}>{t('authorText')}</p>
					</div>
					<div className={styles.links_container}>
						{zhannaData.map(data => (
							<SocialMediaCard
								key={data.title}
								title={data.title}
								alt={data.alt}
								className={styles.link}
								link={data.link}
								iconPath={data.iconPath}
							/>
						))}
					</div>
				</div>
				<div className={styles.image_container}>
					<Image src={''} width={580} height={400} alt="Zhanna Serdiuk" />
				</div>
			</section>

			<section className={`${styles.developers} ${styles.section}`}>
				<div className={styles.text_container}>
					<Heading level={3}>{t('developersTitle')}</Heading>
					<p className={styles.text}>{t('developersText')}</p>
				</div>

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
									iconPath={data.iconPath}
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
									iconPath={data.iconPath}
								/>
							))}
						</div>
					</div>
				</div>
			</section>
		</>
	)
}
