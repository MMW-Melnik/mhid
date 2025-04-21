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
	const footnotesRef = useRef<Map<string, number>>(new Map())

	const getFootnoteNumber = useCallback((id: string) => {
		if (!footnotesRef.current.has(id)) {
			const newNumber = footnotesRef.current.size + 1
			footnotesRef.current.set(id, newNumber)
		}
		return footnotesRef.current.get(id)!
	}, [])

	return (
		<FootnoteContext.Provider value={{ getFootnoteNumber }}>
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
