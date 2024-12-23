'use client'
import { PremonitionOfWarChapter } from '@/widgets/chapters/premonition-of-war/PremonitionOfWarChapter'
import { useTranslation } from 'react-i18next'

export const HomePage = () => {
	const { t } = useTranslation('home')

	return (
		<>
			<PremonitionOfWarChapter />
		</>
	)
}
