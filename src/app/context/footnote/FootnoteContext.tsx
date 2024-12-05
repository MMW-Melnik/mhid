import {
	createContext,
	FC,
	PropsWithChildren,
	useCallback,
	useContext,
	useRef
} from 'react'
import { IFootnoteContextType } from './footnote-context.interface'

const FootnoteContext = createContext<IFootnoteContextType | undefined>(
	undefined
)

export const FootnoteProvider: FC<PropsWithChildren> = ({ children }) => {
	const countRef = useRef(0)

	const getNextNumber = useCallback((): number => {
		countRef.current += 1
		return countRef.current
	}, [])

	return (
		<FootnoteContext.Provider value={{ getNextNumber }}>
			{children}
		</FootnoteContext.Provider>
	)
}

export const useFootnoteContext = (): IFootnoteContextType => {
	const context = useContext(FootnoteContext)
	if (!context) {
		throw new Error('useFootnoteContext must be used within a FootnoteProvider')
	}
	return context
}
