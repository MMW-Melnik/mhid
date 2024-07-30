export interface IFooterColumn {
	footerData: {
		title: string
		items: { [key: string]: { name: string; link: string } }
	}
}
