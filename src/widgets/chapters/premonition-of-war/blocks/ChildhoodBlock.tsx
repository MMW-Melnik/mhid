import CrownPrinceImage from '@/app/assets/images/home/INTERWAR-PERIOD/CHARLOTTE/crown-prince-wife.jpg'
import SistersImage from '@/app/assets/images/home/INTERWAR-PERIOD/CHARLOTTE/sisters-together.jpg'
import { useTypography } from '@/app/context'
import { FormattedText, Heading } from '@/shared/ui'
import ImageWithSource from '@/shared/ui/image-with-source/ImageWithSource'
import { ContentBlock } from '@/widgets/content-block'
import { FC } from 'react'
import { useTranslation } from 'react-i18next'
import styles from '../premonition-war-chapter.module.scss'

export const ChildhoodBlock: FC = ({}) => {
	const { t } = useTranslation('home')
	const { formatTextArray } = useTypography()
	const rawIntroductionText: string[] = t(
		'A PREMONITION OF WAR.CHILDHOOD AND YOUTH.CHARLOTTE LUXEMBOURG.INTRODUCTION',
		{
			returnObjects: true
		}
	)
	const rawSistersText: string[] = t(
		'A PREMONITION OF WAR.CHILDHOOD AND YOUTH.CHARLOTTE LUXEMBOURG.SISTERS',
		{
			returnObjects: true
		}
	)

	const formattedIntroductionText = formatTextArray(rawIntroductionText)
	const formattedSistersText = formatTextArray(rawSistersText)

	return (
		<>
			<div className={styles.childhood_and_youth}>
				<ContentBlock>
					<Heading level={3}>{t('CHILDHOOD AND YOUTH')}</Heading>
					<div className={styles.charlotte}>
						<Heading level={4}>{t('CHARLOTTE LUXEMBOURG')}</Heading>

						{formattedIntroductionText.map((item, index) => (
							<FormattedText key={index} text={item} />
						))}

						<ImageWithSource
							sourceImage={CrownPrinceImage.src}
							sourceText="Crown Prince Wilhelm IV of Luxembourg and his wife, Princess Maria Anna"
							alt="Crown Prince Wilhelm IV of Luxembourg and his wife, Princess Maria Anna"
						/>

						{formattedSistersText.map((item, index) => (
							<FormattedText key={index} text={item} />
						))}

						<ImageWithSource
							sourceImage={SistersImage.src}
							sourceText="Princess Charlotte (second from right) with her sisters"
							alt="Princess Charlotte (second from right) with her sisters"
						/>
					</div>
					<div className={styles.sofia}></div>
				</ContentBlock>
			</div>
		</>
	)
}
