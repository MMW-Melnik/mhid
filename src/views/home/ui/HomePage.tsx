'use client'
import Bridge from '@/app/assets/images/home/bg.jpg'
import { Intro } from '@/shared/ui'
import {
	AfterWar,
	InterwarPeriod,
	LastLife,
	PremonitionOfWarChapter,
	WorldWar2,
	WorldWarOneChapter
} from '@/widgets/chapters'
import { SectionSwitcher } from '@/widgets/index'

export const HomePage = () => {
	return (
		<>
			<Intro
				imageSrc={Bridge}
				imageAlt="Roud Breck 2023"
				text={"Between friendship and politics: little-known aspects of the history of Ukrainian-Luxembourgish relations".toUpperCase()}
				imageText="Roud Breck 2023"
			/>
			<PremonitionOfWarChapter />
			<WorldWarOneChapter />
			<InterwarPeriod />
			<WorldWar2 />
			<AfterWar />
			<LastLife />
			<SectionSwitcher />
		</>
	)
}
