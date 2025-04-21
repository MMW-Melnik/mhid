'use client'
import {
	InterwarPeriod,
	PremonitionOfWarChapter,
	WorldWar2,
	WorldWarOneChapter
} from '@/widgets/chapters'
import LastLife from '@/widgets/chapters/epilog/Epilog'

export const HomePage = () => {
	return (
		<>
			<PremonitionOfWarChapter />
			<WorldWarOneChapter />
			<InterwarPeriod />
			<WorldWar2 />
			<LastLife />
		</>
	)
}
