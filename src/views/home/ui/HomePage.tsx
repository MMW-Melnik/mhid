'use client'
import {
	AfterWar,
	InterwarPeriod,
	PremonitionOfWarChapter,
	WorldWar2,
	WorldWarOneChapter
} from '@/widgets/chapters'

export const HomePage = () => {
	return (
		<>
			<PremonitionOfWarChapter />
			<WorldWarOneChapter />
			<InterwarPeriod />
			<WorldWar2 />
			<AfterWar />
		</>
	)
}
