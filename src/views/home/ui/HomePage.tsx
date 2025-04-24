'use client'
import {
	PremonitionOfWarChapter,
	WorldWar2,
	WorldWarOneChapter,
	InterwarPeriod
} from '@/widgets/chapters'
import { Intro } from '@/shared/ui'

export const HomePage = () => {
	return (
		<>
			<PremonitionOfWarChapter />
			<WorldWarOneChapter />
			<InterwarPeriod />
			<WorldWar2 />
			{/* <LastLife /> */}
		</>
	)
}
