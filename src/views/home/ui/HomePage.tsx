'use client'
import InterwarPeriod from '@/widgets/chapters/InterwarPeriod/InterwarPeriod'
import { PremonitionOfWarChapter } from '@/widgets/chapters/premonition-of-war/PremonitionOfWarChapter'

export const HomePage = () => {
	return (
		<>
			<PremonitionOfWarChapter />
			<InterwarPeriod />
		</>
	)
}
