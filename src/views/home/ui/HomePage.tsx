'use client'
import {
	PremonitionOfWarChapter,
	WorldWar2,
	WorldWarOneChapter,
	InterwarPeriod
} from '@/widgets/chapters'
import LastLife from '@/widgets/chapters/epilog/Epilog'
import { Intro } from '@/shared/ui'
import Bridge from '@/app/assets/images/home/bg.jpg'

export const HomePage = () => {
	return (
		<>
			<Intro
				imageSrc={Bridge}
				imageAlt="Roud Breck 2023"
				text="Between friendship and politics: little-known aspects of the history of Ukrainian-Luxembourgish relations"
				imageText="Roud Breck 2023"
			/>
			<PremonitionOfWarChapter />
			<WorldWarOneChapter />
			<InterwarPeriod />
			<WorldWar2 />
			{/* <LastLife /> */}
		</>
	)
}
