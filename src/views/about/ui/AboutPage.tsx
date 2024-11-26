'use client'

import { Meta } from '@/app/meta/Meta'
import {
	AuthorBlock,
	DevelopersBlock,
	PartnersBlock,
	ProjectBlock
} from '@/widgets/index'

export const AboutPage = () => {
	return (
		<>
			<Meta title="About" description="About us page" />
			<ProjectBlock />
			<PartnersBlock />
			<AuthorBlock />
			<DevelopersBlock />
		</>
	)
}
