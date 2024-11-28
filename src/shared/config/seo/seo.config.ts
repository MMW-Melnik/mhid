export const siteName = 'TLD'
export const titleMerge = (title: string) => {
	return title ? `${title} | ${siteName}` : siteName
}
