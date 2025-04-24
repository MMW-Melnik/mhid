'use client'
import {
	AfterWar,
	PremonitionOfWarChapter,
	WorldWar2
} from '@/widgets/chapters'

export const HomePage = () => {
	return (
		<>
			<PremonitionOfWarChapter />
			{/* <WorldWarOneChapter /> */}
			{/* <InterwarPeriod /> */}
			<WorldWar2 />
			<AfterWar />
		</>
	)
}
