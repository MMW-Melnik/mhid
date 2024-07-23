import { ToastProvider } from '@/app/providers'
import { Footer } from '@/shared/ui'
import { Header } from '@/shared/ui/header/Header'
import '@/styles/index.scss'
import { FC, ReactNode } from 'react'
import styles from './default.module.scss'

export const DefaultLayout: FC<{ children: ReactNode }> = ({ children }) => {
	return (
		<>
			<ToastProvider>
				<Header />
				<div className={styles.layout}>
					<main className={styles.main}>{children}</main>
				</div>
				<Footer />
			</ToastProvider>
		</>
	)
}
