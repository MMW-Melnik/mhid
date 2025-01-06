'use client'
import InterwarPeriod from '@/widgets/chapters/InterwarPeriod/InterwarPeriod'
import WorldWar2 from '@/widgets/chapters/ww2/worldWar2'
import LastLife from '@/widgets/chapters/lastLife/LastLife'
import Epilog from '@/widgets/chapters/epilog/Epilog'

export const HomePage = () => {
	return (
		<>
			<InterwarPeriod />
			<WorldWar2 />
			<LastLife />
			<Epilog />
		</>
	)
}
