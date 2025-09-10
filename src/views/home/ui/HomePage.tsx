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
import { DownloadPdfButton, SectionSwitcher } from '@/widgets/index'

export const HomePage = () => {
	return (
		<>
<Intro
  imageSrc={Bridge}
  imageAlt="Pont Grand-Duchesse Charlotte. “Red Bridge”, Luxembourg."
  text={'Between friendship and politics: little-known aspects of the history of Ukrainian-Luxembourgish relations'.toUpperCase()}
  imageText={
    <a
      href="https://en.wikipedia.org/wiki/Pont_Grand-Duchesse_Charlotte"
      target="_blank"
      rel="noopener noreferrer"
    >
      Pont Grand-Duchesse Charlotte. “Red Bridge”, Luxembourg.
    </a>
  }
/>
			<PremonitionOfWarChapter />
			<WorldWarOneChapter />
			<InterwarPeriod />
			<WorldWar2 />
			<AfterWar />
			<LastLife />

			<SectionSwitcher />
			<DownloadPdfButton label="View PDF" />
		</>
	)
}
