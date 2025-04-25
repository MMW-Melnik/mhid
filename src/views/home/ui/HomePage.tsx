'use client'
import {
	AfterWar,
	InterwarPeriod,
	LastLife,
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
			<LastLife />
		</>
	)
}
