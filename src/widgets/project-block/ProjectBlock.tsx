import { TextContainer } from '@/shared/ui'
import { FC } from 'react'
import { useTranslation } from 'react-i18next'
import styles from './project-block.module.scss'

export const ProjectBlock: FC = () => {
	const { t } = useTranslation('about')
	return (
		<>
			<section className={styles.project_description}>
				<TextContainer
					headingLevel={2}
					heading={t('headingTitle')}
					content={t('headingText')}
					className={styles.text_container}
					contentClassName={styles.content}
				/>
			</section>
		</>
	)
}
