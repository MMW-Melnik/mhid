'use client'
import InterwarPeriod from '@/widgets/chapters/InterwarPeriod/InterwarPeriod'
import { PremonitionOfWarChapter } from '@/widgets/chapters/premonition-of-war/PremonitionOfWarChapter'
import WorldWar2 from '@/widgets/chapters/ww2/worldWar2'

export const HomePage = () => {
	return (
		<>
			<PremonitionOfWarChapter />
			<InterwarPeriod />
			<WorldWar2 />
		</>
	)
}
