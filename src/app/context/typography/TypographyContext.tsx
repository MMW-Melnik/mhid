import { createContext, FC, PropsWithChildren, useContext } from 'react'
import Typograf from 'typograf'
import { TypographyContextType } from './typography.interface'

const tp = new Typograf({ locale: ['en-US', 'ru'] })
const formatText = (text: string): string => tp.execute(text)
const formatTextArray = (texts: string[]): string[] =>
	texts.map(text => tp.execute(text))

const TypographyContext = createContext<TypographyContextType | undefined>(
	undefined
)

export const TypographyProvider: FC<PropsWithChildren> = ({ children }) => {
	return (
		<TypographyContext.Provider value={{ formatText, formatTextArray }}>
			{children}
		</TypographyContext.Provider>
	)
}
export const useTypography = (): TypographyContextType => {
	const context = useContext(TypographyContext)
	if (!context) {
		throw new Error('useTypography must be used within a TypographyProvider')
	}
	return context
}
