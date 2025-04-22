'use client'

import { Meta } from '@/app/meta/Meta'
import {
	AuthorBlock,
	DevelopersBlock,
	PartnersBlock,
	ProjectBlock,
	SupportBlock
} from '@/widgets/index'

export const AboutPage = () => {
	return (
		<>
			<Meta title="About" description="About us page" />
			<ProjectBlock />
			<PartnersBlock />
			<AuthorBlock />
			<SupportBlock />
			<DevelopersBlock />
		</>
	)
}
