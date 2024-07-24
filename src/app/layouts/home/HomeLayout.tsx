import { MainProvider } from '@/app/providers'
import { Footer, Header } from '@/shared/ui'
import '@/styles/index.scss'
import { FC, ReactNode } from 'react'
import styles from './home.module.scss'

export const HomeLayout: FC<{ children: ReactNode }> = ({ children }) => {
	return (
		<>
			<MainProvider>
				<Header />
				<div className={styles.layout}>{children}</div>
				<Footer />
			</MainProvider>
		</>
	)
}
