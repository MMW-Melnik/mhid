import { FootnoteProvider, TypographyProvider } from '@/app/context'
import { FC, PropsWithChildren } from 'react'
import { HeadProvider } from '../head/HeadProvider'
import { ToastProvider } from '../toast/ToastProvider'

export const MainProvider: FC<PropsWithChildren> = ({ children }) => {
	return (
		<>
			<HeadProvider>
				<TypographyProvider>
					<FootnoteProvider>
						<ToastProvider>{children}</ToastProvider>
					</FootnoteProvider>
				</TypographyProvider>
			</HeadProvider>
		</>
	)
}
