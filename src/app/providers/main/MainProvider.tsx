import { FC, PropsWithChildren } from 'react'
import { HeadProvider } from '../head/HeadProvider'
import { PageTransitionProvider } from '../page-transition/PageTransitionProvider'
import { ToastProvider } from '../toast/ToastProvider'

export const MainProvider: FC<PropsWithChildren> = ({ children }) => {
	return (
		<>
			<HeadProvider>
				<PageTransitionProvider>
					<ToastProvider>{children}</ToastProvider>
				</PageTransitionProvider>
			</HeadProvider>
		</>
	)
}
