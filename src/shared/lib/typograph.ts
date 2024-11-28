import Typograf from 'typograf'

const tp = new Typograf({
	locale: ['en-US', 'uk']
})

export const formatText = (text: string): string => {
	return tp.execute(text)
}

export const formatTextArray = (texts: string[]): string[] => {
	return texts.map(text => tp.execute(text))
}
