interface FooterItem {
	name: string
	link: string
}

interface FooterSection {
	title: string
	items: Record<string, FooterItem>
}

interface FooterContent {
	socialMedia: FooterSection
	navigation: FooterSection
	papers: FooterSection
}

export interface FooterData {
	[key: string]: {
		language: string
		footer: FooterContent
	}
}
