import { useTypography } from '@/app/context'
import { useTranslation } from 'react-i18next'
import { translationKeys } from '../data/home/keys'

export const useFormattedTexts = () => {
	const { t } = useTranslation('home')
	const { formatTextArray } = useTypography()

	const texts = translationKeys.reduce(
		(acc, { key, path }) => {
			const rawText = t(path, { returnObjects: true }) as string[]
			acc[key] = formatTextArray(rawText)
			return acc
		},
		{} as Record<string, string[]>
	)

	return texts
}
